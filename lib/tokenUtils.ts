import Cookies from "js-cookie"

const ACCESS_TOKEN_KEY = "brokrs_access_token"
const REFRESH_TOKEN_KEY = "brokrs_refresh_token"

// Cookie options — httpOnly can't be set from JS; we rely on secure + sameSite
const COOKIE_OPTIONS = {
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  expires: 7, // days
}

export const tokenUtils = {
  setTokens(accessToken: string, refreshToken: string) {
    Cookies.set(ACCESS_TOKEN_KEY, accessToken, { ...COOKIE_OPTIONS, expires: 1 })
    Cookies.set(REFRESH_TOKEN_KEY, refreshToken, COOKIE_OPTIONS)
  },

  getAccessToken(): string | undefined {
    return Cookies.get(ACCESS_TOKEN_KEY)
  },

  getRefreshToken(): string | undefined {
    return Cookies.get(REFRESH_TOKEN_KEY)
  },

  clearTokens() {
    Cookies.remove(ACCESS_TOKEN_KEY)
    Cookies.remove(REFRESH_TOKEN_KEY)
  },

  hasTokens(): boolean {
    return !!Cookies.get(ACCESS_TOKEN_KEY) || !!Cookies.get(REFRESH_TOKEN_KEY)
  },
}
