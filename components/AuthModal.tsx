"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Lock, Mail, Sparkles, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialMode?: "login" | "signup"
  onSuccess?: () => void
}

export default function AuthModal({ isOpen, onClose, initialMode = "login", onSuccess }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(initialMode === "login")
  const [isLoading, setIsLoading] = useState(false)
  
  // Sync state when initialMode changes while opening
  useEffect(() => {
    if (isOpen) {
      setIsLogin(initialMode === "login")
    }
  }, [isOpen, initialMode])

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate auth process
    setTimeout(() => {
      setIsLoading(false)
      if (onSuccess) onSuccess()
      onClose()
    }, 1500)
  }

  const toggleMode = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsLogin(!isLogin)
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
            onClick={onClose}
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
              onClick={onClose}
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
                <Sparkles className="h-4 w-4 text-cyan-500" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-700">
                  {isLogin ? "Welcome Back" : "Join The Brokrs"}
                </span>
              </motion.div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-cyan-200 bg-white/95 p-8 sm:p-10 shadow-[0_24px_70px_rgba(8,145,178,0.25)] backdrop-blur-2xl">
              {/* Inner Glow Effects */}
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-cyan-300/30 blur-[60px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-sky-300/30 blur-[60px] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-display font-bold text-brand-950 mb-3">
                    {isLogin ? "Sign in to Brokrs" : "Create Account"}
                  </h2>
                  <p className="text-brand-600 text-sm">
                    {isLogin ? "Enter your details below to access your account" : "Sign up to discover new opportunities"}
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
                        <label className="text-xs font-bold text-brand-950 ml-1 uppercase tracking-wider">Full Name</label>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-400 transition-colors group-focus-within:text-cyan-500" />
                          <Input 
                            type="text"
                            placeholder="John Doe"
                            className="pl-12 h-14 rounded-2xl border-cyan-200 bg-white text-brand-950 placeholder:text-brand-400 focus-visible:ring-cyan-300 shadow-sm transition-all duration-300 hover:border-cyan-300"
                            required={!isLogin}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="space-y-2.5">
                    <label className="text-xs font-bold text-brand-950 ml-1 uppercase tracking-wider">Email Address</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-400 transition-colors group-focus-within:text-cyan-500" />
                      <Input 
                        type="email"
                        placeholder="john@example.com"
                        className="pl-12 h-14 rounded-2xl border-cyan-200 bg-white text-brand-950 placeholder:text-brand-400 focus-visible:ring-cyan-300 shadow-sm transition-all duration-300 hover:border-cyan-300"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex justify-between items-center ml-1">
                      <label className="text-xs font-bold text-brand-950 uppercase tracking-wider">Password</label>
                      {isLogin && (
                        <Link href="#" className="text-[11px] font-bold text-cyan-600 hover:text-cyan-700 transition-colors">
                          Forgot Password?
                        </Link>
                      )}
                    </div>
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-400 transition-colors group-focus-within:text-cyan-500" />
                      <Input 
                        type="password"
                        placeholder="••••••••"
                        className="pl-12 h-14 rounded-2xl border-cyan-200 bg-white text-brand-950 placeholder:text-brand-400 focus-visible:ring-cyan-300 shadow-sm transition-all duration-300 hover:border-cyan-300"
                        required
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full h-14 mt-2 rounded-2xl bg-slate-950 text-white font-bold text-base hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25"
                  >
                    {isLoading ? "Processing..." : isLogin ? "Sign In" : "Create Account"}
                    {!isLoading && <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />}
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
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
