"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight, BriefcaseBusiness, Grid3X3, Home, Info, MessageCircle, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import AuthModal from "@/components/AuthModal"

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: Info },
  { name: "Project", href: "#upcoming", icon: BriefcaseBusiness },
  { name: "Services", href: "#launching-soon", icon: Grid3X3 },
  { name: "Contact", href: "#contact", icon: MessageCircle },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileHeaderVisible, setIsMobileHeaderVisible] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "signup">("login")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const openAuth = (mode: "login" | "signup") => {
    setAuthMode(mode)
    setIsAuthModalOpen(true)
  }
  const mobileScrollAnchor = useRef(0)
  const pathname = usePathname()
  const isInnerPage = pathname !== "/"
  const useLightHeader = isScrolled || isInnerPage
  const sectionHref = (href: string) => isInnerPage ? `/${href}` : href

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = Math.max(window.scrollY, 0)
      setIsScrolled(scrollY > 20)

      if (scrollY <= 12) {
        setIsMobileHeaderVisible(true)
        mobileScrollAnchor.current = scrollY
      } else if (scrollY > 72 && scrollY - mobileScrollAnchor.current > 8) {
        setIsMobileHeaderVisible(false)
        mobileScrollAnchor.current = scrollY
      } else if (mobileScrollAnchor.current - scrollY > 8) {
        setIsMobileHeaderVisible(true)
        mobileScrollAnchor.current = scrollY
      }

      const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(Boolean)
      let current = ""
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section.id
          }
        }
      }
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", handleScroll)
    
    // Trigger once after mounting to set initial state
    const timeoutId = setTimeout(handleScroll, 500)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-[80] transform-gpu border-b border-cyan-100/70 bg-white/90 pt-[env(safe-area-inset-top)] shadow-[0_10px_30px_rgba(8,145,178,0.08)] backdrop-blur-xl transition-[transform,opacity] duration-300 ease-out lg:hidden",
          isMobileHeaderVisible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"
        )}
      >
        <div className="mx-auto flex h-[3.25rem] max-w-lg items-center justify-between px-3.5">
          <Link href="/" className="flex items-center" aria-label="The Brokrs home">
            <Image
              src="/assets/logo blue.png"
              alt="The Brokrs"
              width={280}
              height={100}
              priority
              sizes="126px"
              className="h-[1.85rem] w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-2">
            {isLoggedIn ? (
              <Link href="/profile" className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 text-cyan-700 shadow-sm transition-all hover:bg-cyan-100">
                <User className="h-4 w-4" />
              </Link>
            ) : (
              <>
                <Button
                  className="h-8 rounded-full border border-cyan-200 bg-white px-3 text-[9px] font-black uppercase tracking-[0.14em] text-cyan-700 shadow-sm hover:bg-cyan-50"
                  onClick={() => openAuth('login')}
                >
                  Login
                </Button>
                <Button
                  className="h-8 rounded-full border border-cyan-400/70 bg-cyan-500 px-4 text-[9px] font-black uppercase tracking-[0.14em] text-slate-950 shadow-md shadow-cyan-500/20 hover:bg-cyan-400 group"
                  onClick={() => openAuth('signup')}
                >
                  Join Us
                  <ArrowRight className="ml-1.5 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>

      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-50 hidden overflow-hidden transition-all duration-500 ease-in-out lg:block",
          useLightHeader
            ? "border-b border-brand-100/50 bg-white/95 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.04)] backdrop-blur-2xl dark:bg-black/90"
            : "bg-transparent py-6"
        )}
      >
        <div className="container max-w-7xl mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="relative z-50 group flex items-center overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center overflow-hidden"
            >
              <Image
                src={useLightHeader ? "/assets/logo blue.png" : "/assets/logo2-clear.png"}
                alt="The Brokrs"
                width={280}
                height={100}
                priority
                sizes="220px"
                className={cn(
                  "block w-auto object-contain transition-all duration-300",
                  useLightHeader ? "h-9" : "h-20"
                )}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Button
                  variant="ghost"
                  className={cn(
                    "px-5 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-transparent",
                    useLightHeader
                      ? activeSection === link.href.substring(1) 
                        ? "text-cyan-700" 
                        : "text-brand-950 hover:text-cyan-700"
                      : activeSection === link.href.substring(1)
                        ? "text-cyan-300"
                        : "text-white hover:text-white/80"
                  )}
                  asChild
                >
                  <Link href={sectionHref(link.href)}>
                    {link.name}
                  </Link>
                </Button>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="ml-4 flex items-center gap-3"
            >
              {isLoggedIn ? (
                <Link 
                  href="/profile"
                  className={cn(
                    "flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold uppercase tracking-[0.1em] transition-all duration-500 border",
                    useLightHeader
                      ? "border-cyan-200 bg-cyan-50 text-cyan-700 hover:bg-cyan-100"
                      : "border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-brand-950"
                  )}
                >
                  <User className="h-4 w-4" />
                  My Profile
                </Link>
              ) : (
                <>
                  <Button
                    className={cn(
                      "rounded-full px-6 py-6 text-sm font-bold uppercase tracking-[0.1em] transition-all duration-500",
                      useLightHeader
                        ? "bg-transparent text-brand-950 border border-brand-200 hover:border-brand-950 hover:bg-brand-50"
                        : "bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white"
                    )}
                    onClick={() => openAuth('login')}
                  >
                    Login
                  </Button>
                  <Button
                    className={cn(
                      "rounded-full px-8 py-6 text-sm font-bold uppercase tracking-[0.1em] transition-all duration-500 group",
                      useLightHeader
                        ? "bg-brand-950 text-white hover:bg-cyan-500 hover:text-slate-950 shadow-xl hover:shadow-cyan-500/20 border border-transparent"
                        : "bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white hover:text-brand-950 shadow-none hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    )}
                    onClick={() => openAuth('signup')}
                  >
                    Join Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </>
              )}
            </motion.div>
          </div>

        </div>
      </nav>

      <div className="fixed inset-x-0 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-[90] transform-gpu px-4 lg:hidden">
        <div className="mx-auto flex h-14 max-w-[340px] items-center justify-between rounded-full border border-cyan-100 bg-cyan-50/98 px-2 shadow-2xl shadow-cyan-950/12 backdrop-blur-md">
          {navLinks.map((link) => {
            const Icon = link.icon
            const isActive = activeSection === link.href.substring(1)

            return (
              <Link
                key={link.href}
                href={sectionHref(link.href)}
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-400 transition-all",
                  isActive
                    ? "bg-orange-50 text-orange-500 shadow-lg shadow-orange-300/35 ring-1 ring-orange-100"
                    : "bg-white/85 hover:bg-white hover:text-cyan-700"
                )}
                aria-label={link.name}
                title={link.name}
              >
                <Icon className="h-[17px] w-[17px] stroke-[1.9]" />
              </Link>
            )
          })}
        </div>
      </div>
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        initialMode={authMode}
        onSuccess={() => setIsLoggedIn(true)}
      />
    </>
  )
}

export default Navbar

