"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, ArrowUp, Mail, MapPin, Phone } from "lucide-react"

const footerLinks = [
  { name: "About Company", href: "/#about" },
  { name: "Active Project", href: "/#upcoming" },
  { name: "Our Services", href: "/#launching-soon" },
  { name: "Latest Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
]

const contactItems = [
  { icon: Phone, label: "+91 78001 78002", href: "tel:+917800178002" },
  { icon: Mail, label: "hello@thebrokrs.co.in", href: "mailto:hello@thebrokrs.co.in" },
  { icon: MapPin, label: "India based growth support", href: "/#contact" },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-gradient-to-b from-slate-50 to-slate-100/80 text-brand-950 pt-20 pb-24 md:pt-24 md:pb-12 overflow-hidden border-t border-brand-100/50">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-200/20 blur-[120px] rounded-full" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_0.72fr] lg:gap-10 xl:gap-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block transform transition-transform hover:scale-105">
              <Image
                src="/assets/logo blue.png"
                alt="The Brokrs Logo"
                width={180}
                height={48}
                sizes="180px"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-brand-600 text-base font-semibold tracking-wide max-w-xs">
              Envision. Connect. Grow.
            </p>
            <div className="grid grid-cols-2 gap-3 max-w-sm">
              {["Brand Strategy", "Lead Systems", "Campaign Media", "Partner Growth"].map((item) => (
                <div key={item} className="rounded-2xl border border-brand-100 bg-white/80 px-3 py-2 text-[11px] font-bold text-brand-600 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
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
  className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-brand-200 hover:border-cyan-400 hover:bg-cyan-50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all shadow-sm"
>
                  <social.icon className="w-5 h-5 text-brand-600" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-brand-950 font-display font-bold text-lg mb-8 relative inline-block">
              Contact Desk
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-cyan-500 rounded-full" />
            </h3>
            <div className="space-y-4">
              {contactItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-3 rounded-2xl border border-brand-100 bg-white/70 p-3 text-sm text-brand-600 transition-all hover:border-cyan-200 hover:bg-white hover:text-brand-950"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <span className="pt-2">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:justify-self-start">
            <h3 className="text-brand-950 font-display font-bold text-lg mb-8 relative inline-block">
              Quick Navigation
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-cyan-500 rounded-full" />
            </h3>
            <ul className="grid grid-cols-1 gap-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brand-600 hover:text-cyan-700 text-sm transition-all flex items-center group"
                  >
                    <span className="w-0 h-px bg-cyan-600 mr-0 transition-all group-hover:w-4 group-hover:mr-3" />
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
            &copy; {currentYear} The Brokrs. All rights reserved with Grand Sapphire Infratech Pvt. Ltd.
          </p>
          <div className="flex items-center space-x-6 text-xs text-brand-400">
            <Link href="#" className="hover:text-brand-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-900 transition-colors">Terms of Service</Link>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-950 border border-brand-100 hover:bg-cyan-50 hover:text-cyan-700 transition-all shadow-lg"
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

