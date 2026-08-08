"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Lock, Mail, Sparkles, User, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import {
  loginUser,
  registerUser,
  verifyOtp,
  resendOtp,
  requestPasswordResetOtp,
  verifyPasswordResetOtp,
  resetPassword,
} from "@/store/thunks/authThunks"
import { clearError, resetStep, resetForgotPasswordFlow } from "@/store/slices/authSlice"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialMode?: "login" | "signup"
  onSuccess?: () => void
}

export default function AuthModal({ isOpen, onClose, initialMode = "login", onSuccess }: AuthModalProps) {
  const dispatch = useAppDispatch()
  const { loading, error, step, pendingEmail } = useAppSelector((state) => state.auth)
  const {
    forgotPasswordStep,
    resetEmail,
    resetToken,
    passwordActionLoading,
    passwordActionError,
    passwordActionSuccess,
  } = useAppSelector((state) => state.auth)

  const [isLogin, setIsLogin] = useState(initialMode === "login")
  const [isForgotPassword, setIsForgotPassword] = useState(false)
  const [passwordError, setPasswordError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    otp: "",
  })

  // Sync state when initialMode changes while opening
  useEffect(() => {
    if (isOpen) {
      setIsLogin(initialMode === "login")
      setIsForgotPassword(false)
      setPasswordError("")
      setFormData({ name: "", email: "", phone: "", password: "", confirmPassword: "", otp: "" })
      dispatch(clearError())
      dispatch(resetForgotPasswordFlow())
    }
  }, [isOpen, initialMode, dispatch])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(clearError())
    setPasswordError("")

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match")
      return
    }

    if (isLogin) {
      const result = await dispatch(loginUser({ email: formData.email, password: formData.password }))
      if (loginUser.fulfilled.match(result)) {
        if (onSuccess) onSuccess()
        onClose()
      }
    } else {
      const result = await dispatch(
        registerUser({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        })
      )
      if (registerUser.fulfilled.match(result)) {
        // Stay on modal — OTP step will show
      }
    }
  }

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(clearError())

    const result = await dispatch(verifyOtp({ email: pendingEmail || formData.email, otp: formData.otp }))
    if (verifyOtp.fulfilled.match(result)) {
      if (onSuccess) onSuccess()
      onClose()
    }
  }

  const handleResendOtp = async () => {
    dispatch(clearError())
    await dispatch(resendOtp({ email: pendingEmail || formData.email }))
  }

  const toggleMode = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsLogin(!isLogin)
    setIsForgotPassword(false)
    setPasswordError("")
    dispatch(clearError())
    dispatch(resetStep())
    dispatch(resetForgotPasswordFlow())
    setFormData({ name: "", email: "", phone: "", password: "", confirmPassword: "", otp: "" })
  }

  const handleClose = () => {
    onClose()
    setIsForgotPassword(false)
    setPasswordError("")
    dispatch(resetStep())
    dispatch(resetForgotPasswordFlow())
    setFormData({ name: "", email: "", phone: "", password: "", confirmPassword: "", otp: "" })
  }

  const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await dispatch(requestPasswordResetOtp({ email: formData.email }))
  }

  const handleForgotOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await dispatch(verifyPasswordResetOtp({ email: resetEmail || formData.email, otp: formData.otp }))
  }

  const handleResendForgotOtp = async () => {
    await dispatch(requestPasswordResetOtp({ email: resetEmail || formData.email }))
  }

  const handleResetPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setPasswordError("")

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match")
      return
    }
    if (!resetToken) return

    await dispatch(resetPassword({ resetToken, newPassword: formData.password }))
  }

  const backToLogin = () => {
    setIsForgotPassword(false)
    setPasswordError("")
    dispatch(resetForgotPasswordFlow())
    setFormData({ name: "", email: "", phone: "", password: "", confirmPassword: "", otp: "" })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center overflow-x-hidden overflow-y-auto py-4 px-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[440px] z-10 my-auto"
          >

            {/* Logo / Badge */}
            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/90 px-4 py-2 shadow-sm"
              >
                <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-700">
                  {isForgotPassword ? "Reset Password" : step === "otp-pending" ? "Verify OTP" : isLogin ? "Welcome Back" : "Join The Brokrs"}
                </span>
              </motion.div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-cyan-200 bg-white/95 p-6 sm:p-10 shadow-[0_24px_70px_rgba(8,145,178,0.25)] backdrop-blur-2xl">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-20 p-1.5 rounded-full bg-slate-100 hover:bg-red-50 text-brand-500 hover:text-red-500 transition-all duration-200"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              {/* Inner Glow Effects */}
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-cyan-300/30 blur-[60px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-sky-300/30 blur-[60px] pointer-events-none" />

              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  {isForgotPassword ? (
                    <motion.div
                      key="forgot-password-step"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {passwordActionSuccess ? (
                        // ── Reset complete ──
                        <div className="text-center space-y-6">
                          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 mb-4">
                            <Lock className="h-8 w-8 text-cyan-600" />
                          </div>
                          <h2 className="text-2xl font-display font-bold text-brand-950">Password Reset</h2>
                          <p className="text-brand-900 font-medium">
                            Your password has been reset successfully. You can now sign in with your new password.
                          </p>
                          <Button
                            onClick={backToLogin}
                            className="w-full h-14 mt-4 rounded-2xl bg-slate-950 text-white font-bold text-base hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                          >
                            Back to Login
                          </Button>
                        </div>
                      ) : forgotPasswordStep === "otp-verified" ? (
                        // ── Step 3: New password ──
                        <>
                          <div className="text-center mb-10">
                            <h2 className="text-3xl font-display font-bold text-brand-950 mb-3">Set New Password</h2>
                            <p className="text-brand-600 text-sm">Choose a new password for your account.</p>
                          </div>

                          <form onSubmit={handleResetPasswordSubmit} className="space-y-6">
                            <div className="space-y-2.5">
                              <label className="text-xs font-bold text-brand-950 ml-1 uppercase tracking-wider">
                                New Password
                              </label>
                              <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-400 transition-colors group-focus-within:text-cyan-500" />
                                <Input
                                  type="password"
                                  name="password"
                                  placeholder="••••••••"
                                  value={formData.password}
                                  onChange={handleInputChange}
                                  className="pl-12 h-14 rounded-2xl border-cyan-200 bg-white text-brand-950 placeholder:text-brand-400 focus-visible:ring-cyan-300 shadow-sm transition-all duration-300 hover:border-cyan-300"
                                  required
                                  minLength={6}
                                />
                              </div>
                            </div>

                            <div className="space-y-2.5">
                              <label className="text-xs font-bold text-brand-950 ml-1 uppercase tracking-wider">
                                Confirm New Password
                              </label>
                              <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-400 transition-colors group-focus-within:text-cyan-500" />
                                <Input
                                  type="password"
                                  name="confirmPassword"
                                  placeholder="••••••••"
                                  value={formData.confirmPassword}
                                  onChange={handleInputChange}
                                  className="pl-12 h-14 rounded-2xl border-cyan-200 bg-white text-brand-950 placeholder:text-brand-400 focus-visible:ring-cyan-300 shadow-sm transition-all duration-300 hover:border-cyan-300"
                                  required
                                  minLength={6}
                                />
                              </div>
                            </div>

                            {(passwordActionError || passwordError) && (
                              <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                                {passwordActionError || passwordError}
                              </div>
                            )}

                            <Button
                              type="submit"
                              disabled={passwordActionLoading}
                              className="w-full h-14 mt-2 rounded-2xl bg-slate-950 text-white font-bold text-base hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25"
                            >
                              {passwordActionLoading ? "Resetting..." : "Reset Password"}
                              {!passwordActionLoading && (
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                              )}
                            </Button>
                          </form>
                        </>
                      ) : forgotPasswordStep === "otp-sent" ? (
                        // ── Step 2: Verify OTP ──
                        <>
                          <div className="text-center mb-10">
                            <h2 className="text-3xl font-display font-bold text-brand-950 mb-3">Verify OTP</h2>
                            <p className="text-brand-600 text-sm">
                              Enter the code sent to <br />
                              <span className="font-bold text-cyan-700">{resetEmail || formData.email}</span>
                            </p>
                          </div>

                          <form onSubmit={handleForgotOtpSubmit} className="space-y-6">
                            <div className="space-y-2.5">
                              <label className="text-xs font-bold text-brand-950 ml-1 uppercase tracking-wider">
                                OTP Code
                              </label>
                              <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-400 transition-colors group-focus-within:text-cyan-500" />
                                <Input
                                  type="text"
                                  name="otp"
                                  placeholder="1234"
                                  value={formData.otp}
                                  onChange={handleInputChange}
                                  className="pl-12 h-14 rounded-2xl border-cyan-200 bg-white text-brand-950 placeholder:text-brand-400 focus-visible:ring-cyan-300 shadow-sm transition-all duration-300 hover:border-cyan-300 text-center text-lg tracking-widest font-bold"
                                  required
                                  maxLength={6}
                                />
                              </div>
                            </div>

                            {passwordActionError && (
                              <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                                {passwordActionError}
                              </div>
                            )}

                            <Button
                              type="submit"
                              disabled={passwordActionLoading}
                              className="w-full h-14 mt-2 rounded-2xl bg-slate-950 text-white font-bold text-base hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25"
                            >
                              {passwordActionLoading ? "Verifying..." : "Verify OTP"}
                              {!passwordActionLoading && (
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                              )}
                            </Button>

                            <div className="text-center text-sm text-brand-600">
                              Didn't receive the code?{" "}
                              <button
                                type="button"
                                onClick={handleResendForgotOtp}
                                disabled={passwordActionLoading}
                                className="font-bold text-cyan-600 hover:text-cyan-700 transition-colors disabled:opacity-50"
                              >
                                Resend OTP
                              </button>
                            </div>
                          </form>
                        </>
                      ) : (
                        // ── Step 1: Request OTP ──
                        <>
                          <div className="text-center mb-10">
                            <h2 className="text-3xl font-display font-bold text-brand-950 mb-3">Forgot Password</h2>
                            <p className="text-brand-600 text-sm">
                              Enter your email address and we'll send you an OTP to reset your password.
                            </p>
                          </div>

                          <form onSubmit={handleForgotPasswordSubmit} className="space-y-6">
                            <div className="space-y-2.5">
                              <label className="text-xs font-bold text-brand-950 ml-1 uppercase tracking-wider">
                                Email Address
                              </label>
                              <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-400 transition-colors group-focus-within:text-cyan-500" />
                                <Input
                                  type="email"
                                  name="email"
                                  placeholder="rohitsharma@gmail.com"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  className="pl-12 h-14 rounded-2xl border-cyan-200 bg-white text-brand-950 placeholder:text-brand-400 focus-visible:ring-cyan-300 shadow-sm transition-all duration-300 hover:border-cyan-300"
                                  required
                                />
                              </div>
                            </div>

                            {passwordActionError && (
                              <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                                {passwordActionError}
                              </div>
                            )}

                            <Button
                              type="submit"
                              disabled={passwordActionLoading}
                              className="w-full h-14 mt-2 rounded-2xl bg-slate-950 text-white font-bold text-base hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25"
                            >
                              {passwordActionLoading ? "Sending..." : "Send OTP"}
                              {!passwordActionLoading && (
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                              )}
                            </Button>

                            <div className="text-center text-sm text-brand-600">
                              Remember your password?{" "}
                              <button
                                type="button"
                                onClick={backToLogin}
                                className="font-bold text-cyan-600 hover:text-cyan-700 transition-colors"
                              >
                                Sign In
                              </button>
                            </div>
                          </form>
                        </>
                      )}
                    </motion.div>
                  ) : step === "otp-pending" ? (
                    // ── OTP Verification Step ──
                    <motion.div
                      key="otp-step"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center mb-10">
                        <h2 className="text-3xl font-display font-bold text-brand-950 mb-3">Verify Your Email</h2>
                        <p className="text-brand-600 text-sm">
                          Enter the 6-digit code sent to <br />
                          <span className="font-bold text-cyan-700">{pendingEmail || formData.email}</span>
                        </p>
                      </div>

                      <form onSubmit={handleOtpSubmit} className="space-y-6">
                        <div className="space-y-2.5">
                          <label className="text-xs font-bold text-brand-950 ml-1 uppercase tracking-wider">
                            OTP Code
                          </label>
                          <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-400 transition-colors group-focus-within:text-cyan-500" />
                            <Input
                              type="text"
                              name="otp"
                              placeholder="1234"
                              value={formData.otp}
                              onChange={handleInputChange}
                              className="pl-12 h-14 rounded-2xl border-cyan-200 bg-white text-brand-950 placeholder:text-brand-400 focus-visible:ring-cyan-300 shadow-sm transition-all duration-300 hover:border-cyan-300 text-center text-lg tracking-widest font-bold"
                              required
                              maxLength={6}
                            />
                          </div>
                        </div>

                        {error && (
                          <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                            {error}
                          </div>
                        )}

                        <Button
                          type="submit"
                          disabled={loading}
                          className="w-full h-14 mt-2 rounded-2xl bg-slate-950 text-white font-bold text-base hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25"
                        >
                          {loading ? "Verifying..." : "Verify OTP"}
                          {!loading && (
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                          )}
                        </Button>

                        <div className="text-center text-sm text-brand-600">
                          Didn't receive the code?{" "}
                          <button
                            type="button"
                            onClick={handleResendOtp}
                            disabled={loading}
                            className="font-bold text-cyan-600 hover:text-cyan-700 transition-colors disabled:opacity-50"
                          >
                            Resend OTP
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  ) : (
                    // ── Login / Signup Step ──
                    <motion.div
                      key="auth-step"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center mb-10">
                        <h2 className="text-3xl font-display font-bold text-brand-950 mb-3">
                          {isLogin ? "Sign in to Brokrs" : "Create Account"}
                        </h2>
                        <p className="text-brand-600 text-sm">
                          {isLogin
                            ? "Enter your details below to access your account"
                            : "Sign up to discover new opportunities"}
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <AnimatePresence mode="wait">
                          {!isLogin && (
                            <motion.div
                              key="name-field"
                              initial={{ opacity: 0, height: 0, scale: 0.95 }}
                              animate={{ opacity: 1, height: "auto", scale: 1 }}
                              exit={{ opacity: 0, height: 0, scale: 0.95 }}
                              transition={{ duration: 0.3 }}
                              className="space-y-2.5 overflow-hidden"
                            >
                              <label className="text-xs font-bold text-brand-950 ml-1 uppercase tracking-wider">
                                Full Name
                              </label>
                              <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-400 transition-colors group-focus-within:text-cyan-500" />
                                <Input
                                  type="text"
                                  name="name"
                                  placeholder="Rohit Sharma"
                                  value={formData.name}
                                  onChange={handleInputChange}
                                  className="pl-12 h-14 rounded-2xl border-cyan-200 bg-white text-brand-950 placeholder:text-brand-400 focus-visible:ring-cyan-300 shadow-sm transition-all duration-300 hover:border-cyan-300"
                                  required={!isLogin}
                                />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <div className="space-y-2.5">
                          <label className="text-xs font-bold text-brand-950 ml-1 uppercase tracking-wider">
                            Email Address
                          </label>
                          <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-400 transition-colors group-focus-within:text-cyan-500" />
                            <Input
                              type="email"
                              name="email"
                              placeholder="rohitsharma@gmail.com"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="pl-12 h-14 rounded-2xl border-cyan-200 bg-white text-brand-950 placeholder:text-brand-400 focus-visible:ring-cyan-300 shadow-sm transition-all duration-300 hover:border-cyan-300"
                              required
                            />
                          </div>
                        </div>

                        {!isLogin && (
                          <div className="space-y-2.5">
                            <label className="text-xs font-bold text-brand-950 ml-1 uppercase tracking-wider">
                              Phone Number 
                            </label>
                            <div className="relative group">
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-400 transition-colors group-focus-within:text-cyan-500" />
                              <Input
                                type="tel"
                                name="phone"
                                placeholder="9876543210"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="pl-12 h-14 rounded-2xl border-cyan-200 bg-white text-brand-950 placeholder:text-brand-400 focus-visible:ring-cyan-300 shadow-sm transition-all duration-300 hover:border-cyan-300"
                              />
                            </div>
                          </div>
                        )}

                        <div className="space-y-2.5">
                          <div className="flex justify-between items-center ml-1">
                            <label className="text-xs font-bold text-brand-950 uppercase tracking-wider">
                              Password
                            </label>
                            {isLogin && (
                              <button
                                type="button"
                                onClick={() => setIsForgotPassword(true)}
                                className="text-[11px] font-bold text-cyan-600 hover:text-cyan-700 transition-colors"
                              >
                                Forgot Password?
                              </button>
                            )}
                          </div>
                          <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-400 transition-colors group-focus-within:text-cyan-500" />
                            <Input
                              type="password"
                              name="password"
                              placeholder="••••••••"
                              value={formData.password}
                              onChange={handleInputChange}
                              className="pl-12 h-14 rounded-2xl border-cyan-200 bg-white text-brand-950 placeholder:text-brand-400 focus-visible:ring-cyan-300 shadow-sm transition-all duration-300 hover:border-cyan-300"
                              required
                            />
                          </div>
                        </div>

                        {!isLogin && (
                          <div className="space-y-2.5">
                            <label className="text-xs font-bold text-brand-950 ml-1 uppercase tracking-wider">
                              Confirm Password
                            </label>
                            <div className="relative group">
                              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-400 transition-colors group-focus-within:text-cyan-500" />
                              <Input
                                type="password"
                                name="confirmPassword"
                                placeholder="••••••••"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                className="pl-12 h-14 rounded-2xl border-cyan-200 bg-white text-brand-950 placeholder:text-brand-400 focus-visible:ring-cyan-300 shadow-sm transition-all duration-300 hover:border-cyan-300"
                                required
                              />
                            </div>
                          </div>
                        )}

                        {(error || passwordError) && (
                          <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                            {error || passwordError}
                          </div>
                        )}

                        <Button
                          type="submit"
                          disabled={loading}
                          className="w-full h-14 mt-2 rounded-2xl bg-slate-950 text-white font-bold text-base hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25"
                        >
                          {loading ? "Processing..." : isLogin ? "Sign In" : "Create Account"}
                          {!loading && (
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                          )}
                        </Button>
                      </form>

                      <div className="mt-8 pt-6 border-t border-cyan-100 text-center text-sm text-brand-600">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                        <button
                          onClick={toggleMode}
                          className="font-bold text-cyan-600 hover:text-cyan-700 transition-colors"
                        >
                          {isLogin ? "Create Account" : "Sign In"}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
