import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "@/lib/api"
import { tokenUtils } from "@/lib/tokenUtils"
import { User } from "@/store/slices/authSlice"

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Extracts a readable error message from an Axios error response.
 */
function extractErrorMessage(error: unknown, fallback: string): string {
  if (error && typeof error === "object" && "response" in error) {
    const res = (error as any).response
    return res?.data?.message || res?.data?.error || fallback
  }
  if (error instanceof Error) return error.message
  return fallback
}

// ─── Thunks ───────────────────────────────────────────────────────────────────

/**
 * POST /auth/register
 * Returns { email } so the slice can enter OTP-pending state.
 * Phone is sanitized to exactly 10 digits before sending (API rejects anything else).
 */
export const registerUser = createAsyncThunk(
  "auth/register",
  async (
    payload: { name: string; email: string; phone?: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      // Build the body — phone is optional
      const body: Record<string, string> = {
        name: payload.name,
        email: payload.email,
        password: payload.password,
      }

      if (payload.phone && payload.phone.trim() !== "") {
        const digitsOnly = payload.phone.replace(/\D/g, "")
        const phone = digitsOnly.slice(-10)
        if (phone.length !== 10) {
          return rejectWithValue("Phone number must be 10 digits (e.g. 9876543210)")
        }
        body.phone = phone
      }

      await api.post("/auth/register", body)
      return { email: payload.email }
    } catch (error) {
      return rejectWithValue(extractErrorMessage(error, "Registration failed. Please try again."))
    }
  }
)

/**
 * POST /auth/login
 * On success stores tokens in cookies and returns { user, accessToken, refreshToken }.
 */
export const loginUser = createAsyncThunk(
  "auth/login",
  async (
    payload: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await api.post("/auth/login", payload)

      // Normalise response — the API may nest data inside data.data
      const result = data?.data || data
      const accessToken: string = result?.accessToken || result?.token
      const refreshToken: string = result?.refreshToken
      const user: User = result?.user || {
        id: result?.id,
        name: result?.name,
        email: result?.email,
        phone: result?.phone,
        role: result?.role,
        isEmailVerified: result?.isEmailVerified,
      }

      tokenUtils.setTokens(accessToken, refreshToken)
      return { user, accessToken, refreshToken }
    } catch (error) {
      return rejectWithValue(extractErrorMessage(error, "Invalid email or password."))
    }
  }
)

/**
 * POST /auth/verify-otp
 * Verifies the OTP sent after registration.
 */
export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (
    payload: { email: string; otp: string },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await api.post("/auth/verify-otp", payload)

      const result = data?.data || data
      const accessToken: string = result?.accessToken || result?.token
      const refreshToken: string = result?.refreshToken
      const user: User = result?.user || {
        id: result?.id,
        name: result?.name,
        email: result?.email,
        phone: result?.phone,
        role: result?.role,
        isEmailVerified: true,
      }

      tokenUtils.setTokens(accessToken, refreshToken)
      return { user, accessToken, refreshToken }
    } catch (error) {
      return rejectWithValue(extractErrorMessage(error, "Invalid or expired OTP. Please try again."))
    }
  }
)

/**
 * POST /auth/resend-otp
 */
export const resendOtp = createAsyncThunk(
  "auth/resendOtp",
  async (payload: { email: string }, { rejectWithValue }) => {
    try {
      await api.post("/auth/resend-otp", payload)
      return true
    } catch (error) {
      return rejectWithValue(extractErrorMessage(error, "Could not resend OTP. Please try again."))
    }
  }
)

/**
 * POST /auth/refresh-token
 * Called automatically by the axios interceptor; also dispatched manually
 * during app hydration when the access token may be expired.
 */
export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, { rejectWithValue }) => {
    try {
      const storedRefresh = tokenUtils.getRefreshToken()
      if (!storedRefresh) return rejectWithValue("No refresh token available.")

      const { data } = await api.post("/auth/refresh-token", { token: storedRefresh })
      const result = data?.data || data
      const accessToken: string = result?.accessToken || result?.token
      const newRefreshToken: string = result?.refreshToken || storedRefresh

      tokenUtils.setTokens(accessToken, newRefreshToken)
      return { accessToken, refreshToken: newRefreshToken }
    } catch (error) {
      tokenUtils.clearTokens()
      return rejectWithValue(extractErrorMessage(error, "Session expired. Please log in again."))
    }
  }
)

/**
 * GET /users/profile
 * Fetches the logged-in user's profile. Used during app boot to rehydrate
 * Redux state from an existing access token in cookies.
 */
export const fetchUserProfile = createAsyncThunk(
  "auth/fetchProfile",
  async (_, { rejectWithValue }) => {
    try {
      const token = tokenUtils.getAccessToken()
      const { data } = await api.get("/users/profile", {
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      })
      const user: User = data?.data || data
      return user
    } catch (error) {
      return rejectWithValue(extractErrorMessage(error, "Failed to load profile."))
    }
  }
)

/**
 * Client-side logout — clears tokens from cookies and resets state.
 */
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async () => {
    tokenUtils.clearTokens()
    return true
  }
)
