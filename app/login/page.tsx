"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Lock, Mail, Sparkles, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    // Check URL parameters for initial mode
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search)
      if (searchParams.get("mode") === "signup") {
        setIsLogin(false)
      }
    }
  }, [])
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate auth process
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  const toggleMode = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsLogin(!isLogin)
  }

  return (
    <main className="min-h-screen pt-32 pb-32 bg-slate-50 relative overflow-hidden flex items-center justify-center">
      {/* Background Decoration (Matching the contact section flow) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_82%,rgba(34,211,238,0.12),transparent_34%),radial-gradient(circle_at_86%_10%,rgba(14,165,233,0.09),transparent_30%),linear-gradient(135deg,#ffffff_0%,#f0fdff_48%,#f8fafc_100%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-cyan-100/35 to-transparent pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[440px]"
        >
          {/* Logo / Badge */}
          <div className="flex justify-center mb-8">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 shadow-sm"
            >
              <Sparkles className="h-4 w-4 text-cyan-500" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-700">
                {isLogin ? "Welcome Back" : "Join The Brokrs"}
              </span>
            </motion.div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-cyan-200 bg-white/80 p-8 sm:p-10 shadow-[0_24px_70px_rgba(8,145,178,0.12)] backdrop-blur-xl">
            {/* Inner Glow Effects */}
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-cyan-300/30 blur-[60px]" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-sky-300/30 blur-[60px]" />
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <h1 className="text-3xl sm:text-4xl font-display font-bold text-brand-950 mb-3">
                  {isLogin ? "Sign in to Brokrs" : "Create Account"}
                </h1>
                <p className="text-brand-600 text-sm sm:text-base">
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
                          className="pl-12 h-14 rounded-2xl border-cyan-200 bg-white/85 text-brand-950 placeholder:text-brand-400 focus-visible:ring-cyan-300 shadow-sm transition-all duration-300 hover:border-cyan-300"
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
                      className="pl-12 h-14 rounded-2xl border-cyan-200 bg-white/85 text-brand-950 placeholder:text-brand-400 focus-visible:ring-cyan-300 shadow-sm transition-all duration-300 hover:border-cyan-300"
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
                      className="pl-12 h-14 rounded-2xl border-cyan-200 bg-white/85 text-brand-950 placeholder:text-brand-400 focus-visible:ring-cyan-300 shadow-sm transition-all duration-300 hover:border-cyan-300"
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

              <div className="mt-10 pt-6 border-t border-cyan-100 text-center text-sm text-brand-600">
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
    </main>
  )
}
