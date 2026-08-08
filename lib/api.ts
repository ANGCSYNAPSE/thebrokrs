import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from "axios"
import { tokenUtils } from "@/lib/tokenUtils"

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "/api/proxy"

// Main axios instance
const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000, // 30s — accounts for Vercel cold starts
})

// Track if a token refresh is in flight to prevent cascading refresh calls
let isRefreshing = false
let refreshSubscribers: Array<(token: string) => void> = []

function subscribeTokenRefresh(cb: (token: string) => void) {
  refreshSubscribers.push(cb)
}

function onRefreshComplete(newToken: string) {
  refreshSubscribers.forEach((cb) => cb(newToken))
  refreshSubscribers = []
}

// --- Request Interceptor — attach access token ---
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = tokenUtils.getAccessToken()
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// --- Response Interceptor — handle 401 & refresh token ---
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean }

    // Do not intercept 401 for auth endpoints (e.g. login, register, verify-otp)
    const requestUrl = originalRequest?.url || ""
    const isAuthEndpoint =
      requestUrl.includes("/auth/login") ||
      requestUrl.includes("/auth/register") ||
      requestUrl.includes("/auth/verify-otp") ||
      requestUrl.includes("/forgot-password")

    if (error.response?.status === 401 && !originalRequest._retry && !isAuthEndpoint) {
      originalRequest._retry = true

      const refreshToken = tokenUtils.getRefreshToken()

      // No refresh token available — clear tokens without redirecting
      if (!refreshToken) {
        tokenUtils.clearTokens()
        return Promise.reject(error)
      }

      if (isRefreshing) {
        // Queue this request until refresh completes
        return new Promise((resolve) => {
          subscribeTokenRefresh((newToken: string) => {
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${newToken}`
            }
            resolve(api(originalRequest))
          })
        })
      }

      isRefreshing = true

      try {
        const { data } = await axios.post(`${BASE_URL}/auth/refresh-token`, {
          token: refreshToken,
        })

        const newAccessToken: string = data?.data?.accessToken || data?.accessToken
        const newRefreshToken: string = data?.data?.refreshToken || data?.refreshToken || refreshToken

        tokenUtils.setTokens(newAccessToken, newRefreshToken)

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
        }

        onRefreshComplete(newAccessToken)
        return api(originalRequest)
      } catch (refreshError) {
        tokenUtils.clearTokens()
        return Promise.reject(refreshError)
      } finally {
        isRefreshing = false
      }
    }

    return Promise.reject(error)
  }
)

export default api
