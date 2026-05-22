"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BriefcaseBusiness, Grid3X3, Home, Info, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: Info },
  { name: "Project", href: "#upcoming", icon: BriefcaseBusiness },
  { name: "Services", href: "#services", icon: Grid3X3 },
  { name: "Contact", href: "#contact", icon: MessageCircle },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out",
          isScrolled
            ? "py-2 md:py-3 bg-white/95 dark:bg-black/90 backdrop-blur-2xl border-b border-brand-100/50 shadow-[0_4px_30px_rgba(0,0,0,0.04)]"
            : "py-4 md:py-6 bg-transparent"
        )}
      >
        <div className="container max-w-7xl mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="relative z-50 group flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={isScrolled ? "/assets/logo blue.png" : "/assets/logo2-clear.png"}
                alt="The Brokrs"
                width={280}
                height={100}
                priority
                sizes="(min-width: 768px) 220px, 160px"
                className={cn(
                  "w-auto object-contain transition-all duration-300",
                  isScrolled ? "h-9 md:h-9" : "h-16 md:h-20"
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
                    isScrolled
                      ? activeSection === link.href.substring(1) 
                        ? "text-cyan-700" 
                        : "text-brand-950 hover:text-cyan-700"
                      : activeSection === link.href.substring(1)
                        ? "text-cyan-300"
                        : "text-white hover:text-white/80"
                  )}
                  asChild
                >
                  <Link href={link.href}>
                    {link.name}
                  </Link>
                </Button>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="ml-4"
            >
              <Button
                className={cn(
                  "rounded-full px-8 py-6 text-sm font-bold uppercase tracking-[0.1em] transition-all duration-500",
                  isScrolled
                    ? "bg-brand-950 text-white hover:bg-cyan-500 hover:text-slate-950 shadow-xl hover:shadow-cyan-500/20 border border-transparent"
                    : "bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white hover:text-brand-950 shadow-none hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                )}
                asChild
              >
                <Link href="#contact" className="group">
                  Join Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <Button
            className={cn(
              "lg:hidden relative z-50 h-10 rounded-full px-4 text-xs font-bold shadow-lg transition-all",
              isScrolled ? "bg-cyan-500 text-slate-950" : "bg-white/15 text-white backdrop-blur-md border border-white/25"
            )}
            asChild
          >
            <Link href="#contact">Join</Link>
          </Button>
        </div>
      </nav>

      <div className="fixed inset-x-0 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-[90] px-4 lg:hidden">
        <div className="mx-auto flex h-14 max-w-[340px] items-center justify-between rounded-full border border-cyan-100 bg-white/92 px-2 shadow-2xl shadow-cyan-950/10 backdrop-blur-2xl">
          {navLinks.map((link) => {
            const Icon = link.icon
            const isActive = activeSection === link.href.substring(1)

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50/75 text-slate-500 transition-all",
                  isActive ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/25" : "hover:bg-cyan-100 hover:text-cyan-700"
                )}
                aria-label={link.name}
                title={link.name}
              >
                <Icon className="h-4 w-4" />
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Navbar

