"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Lock, Mail, Sparkles, User, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { loginUser, registerUser, verifyOtp, resendOtp } from "@/store/thunks/authThunks"
import { clearError, resetStep } from "@/store/slices/authSlice"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialMode?: "login" | "signup"
  onSuccess?: () => void
}

export default function AuthModal({ isOpen, onClose, initialMode = "login", onSuccess }: AuthModalProps) {
  const dispatch = useAppDispatch()
  const { loading, error, step, pendingEmail } = useAppSelector((state) => state.auth)

  const [isLogin, setIsLogin] = useState(initialMode === "login")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    otp: "",
  })

  // Sync state when initialMode changes while opening
  useEffect(() => {
    if (isOpen) {
      setIsLogin(initialMode === "login")
      setFormData({ name: "", email: "", phone: "", password: "", otp: "" })
      dispatch(clearError())
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
    dispatch(clearError())
    dispatch(resetStep())
    setFormData({ name: "", email: "", phone: "", password: "", otp: "" })
  }

  const handleClose = () => {
    onClose()
    dispatch(resetStep())
    setFormData({ name: "", email: "", phone: "", password: "", otp: "" })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-0">
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
            className="relative w-full max-w-[440px] z-10"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute -top-12 right-0 sm:-right-12 sm:top-0 p-2 text-white/80 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Logo / Badge */}
            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/90 px-4 py-2 shadow-sm"
              >
                <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-700">
                  {step === "otp-pending" ? "Verify OTP" : isLogin ? "Welcome Back" : "Join The Brokrs"}
                </span>
              </motion.div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-cyan-200 bg-white/95 p-8 sm:p-10 shadow-[0_24px_70px_rgba(8,145,178,0.25)] backdrop-blur-2xl">
              {/* Inner Glow Effects */}
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-cyan-300/30 blur-[60px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-sky-300/30 blur-[60px] pointer-events-none" />

              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  {step === "otp-pending" ? (
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
                                  placeholder="John Doe"
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
                              placeholder="john@example.com"
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
                              Phone Number <span className="normal-case font-normal text-brand-400">(Optional)</span>
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
                              <Link
                                href="#"
                                className="text-[11px] font-bold text-cyan-600 hover:text-cyan-700 transition-colors"
                              >
                                Forgot Password?
                              </Link>
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
