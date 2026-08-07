import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  loginUser,
  registerUser,
  verifyOtp,
  resendOtp,
  refreshToken,
  fetchUserProfile,
  logoutUser,
} from "@/store/thunks/authThunks"

// ─── Types ───────────────────────────────────────────────────────────────────

export interface User {
  id: string
  name: string
  email: string
  phone?: string
  role?: string
  isEmailVerified?: boolean
  kycStatus?: string
  createdAt?: string
}

export type AuthStep = "idle" | "otp-pending"

export interface AuthState {
  user: User | null
  accessToken: string | null
  refreshToken: string | null
  isAuthenticated: boolean
  step: AuthStep          // "otp-pending" shows OTP screen after registration
  pendingEmail: string    // email waiting for OTP verification
  loading: boolean
  error: string | null
}

// ─── Initial State ───────────────────────────────────────────────────────────

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  step: "idle",
  pendingEmail: "",
  loading: false,
  error: null,
}

// ─── Slice ───────────────────────────────────────────────────────────────────

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null
    },
    resetStep(state) {
      state.step = "idle"
      state.pendingEmail = ""
    },
    // Called on app boot if tokens exist in cookies
    hydrateAuth(state, action: PayloadAction<{ user: User; accessToken: string; refreshToken: string }>) {
      state.user = action.payload.user
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
      state.isAuthenticated = true
    },
    // Manual logout (clears state; token cleanup handled in thunk)
    clearAuth(state) {
      state.user = null
      state.accessToken = null
      state.refreshToken = null
      state.isAuthenticated = false
      state.step = "idle"
      state.pendingEmail = ""
      state.error = null
    },
  },

  extraReducers: (builder) => {
    // ── Register ──────────────────────────────────────────────────────────────
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.step = "otp-pending"
        state.pendingEmail = action.payload.email
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

    // ── Login ─────────────────────────────────────────────────────────────────
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.isAuthenticated = true
        state.user = action.payload.user
        state.accessToken = action.payload.accessToken
        state.refreshToken = action.payload.refreshToken
        state.step = "idle"
        state.error = null
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

    // ── Verify OTP ────────────────────────────────────────────────────────────
    builder
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false
        state.isAuthenticated = true
        state.user = action.payload.user
        state.accessToken = action.payload.accessToken
        state.refreshToken = action.payload.refreshToken
        state.step = "idle"
        state.pendingEmail = ""
        state.error = null
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

    // ── Resend OTP ────────────────────────────────────────────────────────────
    builder
      .addCase(resendOtp.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(resendOtp.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(resendOtp.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

    // ── Refresh Token ─────────────────────────────────────────────────────────
    builder
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken
        if (action.payload.refreshToken) {
          state.refreshToken = action.payload.refreshToken
        }
      })
      .addCase(refreshToken.rejected, (state) => {
        state.user = null
        state.accessToken = null
        state.refreshToken = null
        state.isAuthenticated = false
      })

    // ── Fetch Profile ─────────────────────────────────────────────────────────
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.isAuthenticated = true
      })
      .addCase(fetchUserProfile.rejected, (state) => {
        state.loading = false
        state.isAuthenticated = false
      })

    // ── Logout ────────────────────────────────────────────────────────────────
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = null
      state.accessToken = null
      state.refreshToken = null
      state.isAuthenticated = false
      state.step = "idle"
      state.pendingEmail = ""
      state.error = null
    })
  },
})

export const { clearError, resetStep, hydrateAuth, clearAuth } = authSlice.actions
export default authSlice.reducer
