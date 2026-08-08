import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  loginUser,
  registerUser,
  verifyOtp,
  resendOtp,
  refreshToken,
  fetchUserProfile,
  logoutUser,
  requestPasswordResetOtp,
  verifyPasswordResetOtp,
  resetPassword,
  changePassword,
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

// Drives the Forgot Password screens inside AuthModal
export type ForgotPasswordStep = "idle" | "otp-sent" | "otp-verified"

export interface AuthState {
  user: User | null
  accessToken: string | null
  refreshToken: string | null
  isAuthenticated: boolean
  step: AuthStep          // "otp-pending" shows OTP screen after registration
  pendingEmail: string    // email waiting for OTP verification
  loading: boolean
  error: string | null

  // Forgot password / change password — kept separate from `loading`/`error`
  // above so they don't fight with the login/signup/profile-guard states.
  forgotPasswordStep: ForgotPasswordStep
  resetEmail: string
  resetToken: string | null
  passwordActionLoading: boolean
  passwordActionError: string | null
  passwordActionSuccess: boolean
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

  forgotPasswordStep: "idle",
  resetEmail: "",
  resetToken: null,
  passwordActionLoading: false,
  passwordActionError: null,
  passwordActionSuccess: false,
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
    // Resets the Forgot Password flow — called when the modal closes or switches mode
    resetForgotPasswordFlow(state) {
      state.forgotPasswordStep = "idle"
      state.resetEmail = ""
      state.resetToken = null
      state.passwordActionError = null
      state.passwordActionSuccess = false
    },
    clearPasswordActionError(state) {
      state.passwordActionError = null
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

    // ── Forgot Password: Request OTP ────────────────────────────────────────────
    builder
      .addCase(requestPasswordResetOtp.pending, (state) => {
        state.passwordActionLoading = true
        state.passwordActionError = null
      })
      .addCase(requestPasswordResetOtp.fulfilled, (state, action) => {
        state.passwordActionLoading = false
        state.forgotPasswordStep = "otp-sent"
        state.resetEmail = action.payload.email
      })
      .addCase(requestPasswordResetOtp.rejected, (state, action) => {
        state.passwordActionLoading = false
        state.passwordActionError = action.payload as string
      })

    // ── Forgot Password: Verify OTP ──────────────────────────────────────────────
    builder
      .addCase(verifyPasswordResetOtp.pending, (state) => {
        state.passwordActionLoading = true
        state.passwordActionError = null
      })
      .addCase(verifyPasswordResetOtp.fulfilled, (state, action) => {
        state.passwordActionLoading = false
        state.forgotPasswordStep = "otp-verified"
        state.resetToken = action.payload.resetToken
      })
      .addCase(verifyPasswordResetOtp.rejected, (state, action) => {
        state.passwordActionLoading = false
        state.passwordActionError = action.payload as string
      })

    // ── Forgot Password: Reset ───────────────────────────────────────────────────
    builder
      .addCase(resetPassword.pending, (state) => {
        state.passwordActionLoading = true
        state.passwordActionError = null
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.passwordActionLoading = false
        state.passwordActionSuccess = true
        state.resetToken = null
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.passwordActionLoading = false
        state.passwordActionError = action.payload as string
      })

    // ── Change Password (authenticated) ──────────────────────────────────────────
    builder
      .addCase(changePassword.pending, (state) => {
        state.passwordActionLoading = true
        state.passwordActionError = null
        state.passwordActionSuccess = false
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.passwordActionLoading = false
        state.passwordActionSuccess = true
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.passwordActionLoading = false
        state.passwordActionError = action.payload as string
      })
  },
})

export const {
  clearError,
  resetStep,
  hydrateAuth,
  clearAuth,
  resetForgotPasswordFlow,
  clearPasswordActionError,
} = authSlice.actions
export default authSlice.reducer
