"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-gradient-to-b from-slate-50 to-slate-100/80 text-brand-950 pt-24 pb-12 overflow-hidden border-t border-brand-100/50">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-200/20 blur-[120px] rounded-full" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_280px] gap-12 lg:gap-16">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link href="/" className="inline-block transform transition-transform hover:scale-105">
              <img
                src="./assets/logo blue.png"
                alt="The Brokrs Logo"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-brand-600 text-sm leading-relaxed max-w-xs">
              The Brokrs is a marketing-first growth company helping brands build sharper positioning, stronger visibility, and campaign-ready demand.
            </p>
            <div className="flex items-center space-x-4">
              {[
  { icon: Facebook, href: "https://www.facebook.com/thebrokrs" },
  { icon: Instagram, href: "https://www.instagram.com/thebrokrs?igsh=MTEzZzd0NDU0ZjR4MA==" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/thebrokrs/" },
].map((social, i) => (
                <motion.a
  key={i}
  href={social.href}
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ y: -3, scale: 1.1 }}
  className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-brand-200 hover:border-indigo-400 hover:bg-indigo-50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all shadow-sm"
>
                  <social.icon className="w-5 h-5 text-brand-600" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:justify-self-start">
            <h3 className="text-brand-950 font-display font-bold text-lg mb-8 relative inline-block">
              Quick Navigation
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-indigo-600 rounded-full" />
            </h3>
            <ul className="grid grid-cols-1 gap-4">
              {[
                { name: "About Company", href: "#about" },
                { name: "Active Project", href: "#upcoming" },
                { name: "Our Services", href: "#services" },
                { name: "Latest Projects", href: "#projects" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brand-600 hover:text-indigo-600 text-sm transition-all flex items-center group"
                  >
                    <span className="w-0 h-px bg-indigo-600 mr-0 transition-all group-hover:w-4 group-hover:mr-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-20 pt-8 border-t border-brand-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-brand-400 text-xs">
            &copy; {currentYear} The Brokrs. All rights reserved.
          </p>
          <div className="flex items-center space-x-8 text-xs text-brand-400">
            <Link href="#" className="hover:text-brand-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-900 transition-colors">Terms of Service</Link>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-950 border border-brand-100 hover:bg-brand-50 transition-all shadow-lg"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

