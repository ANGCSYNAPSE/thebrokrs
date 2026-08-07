"use client"

import { createContext, useContext, useState, useCallback } from "react"
import AuthModal from "@/components/AuthModal"

interface AuthModalContextValue {
  openAuth: (mode?: "login" | "signup") => void
  closeAuth: () => void
}

const AuthModalContext = createContext<AuthModalContextValue>({
  openAuth: () => {},
  closeAuth: () => {},
})

export function AuthModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState<"login" | "signup">("login")

  const openAuth = useCallback((m: "login" | "signup" = "login") => {
    setMode(m)
    setIsOpen(true)
  }, [])

  const closeAuth = useCallback(() => setIsOpen(false), [])

  return (
    <AuthModalContext.Provider value={{ openAuth, closeAuth }}>
      {children}
      <AuthModal
        isOpen={isOpen}
        onClose={closeAuth}
        initialMode={mode}
        onSuccess={closeAuth}
      />
    </AuthModalContext.Provider>
  )
}

export function useAuthModal() {
  return useContext(AuthModalContext)
}
