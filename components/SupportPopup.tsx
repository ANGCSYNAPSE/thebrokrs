"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, Headphones, Phone, X } from "lucide-react"

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M16.03 3.2A12.76 12.76 0 0 0 5.1 22.55L3.5 28.8l6.4-1.55A12.73 12.73 0 1 0 16.03 3.2Zm0 2.36a10.37 10.37 0 0 1 8.78 15.9 10.38 10.38 0 0 1-13.95 3.42l-.45-.26-3.52.85.88-3.43-.3-.48A10.37 10.37 0 0 1 16.03 5.56Zm-4.05 5.33c-.24 0-.62.09-.94.43-.32.35-1.23 1.2-1.23 2.93s1.26 3.4 1.44 3.64c.18.24 2.43 3.88 6.01 5.28 2.98 1.17 3.59.94 4.24.88.65-.06 2.1-.86 2.4-1.69.3-.83.3-1.54.21-1.69-.09-.15-.33-.24-.7-.42-.36-.18-2.1-1.04-2.43-1.16-.33-.12-.57-.18-.81.18-.24.36-.93 1.16-1.14 1.4-.21.24-.42.27-.78.09-.36-.18-1.53-.56-2.91-1.79-1.08-.96-1.8-2.15-2.01-2.51-.21-.36-.02-.56.16-.74.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.6-.81-.61h-.48Z" />
  </svg>
)

const SupportPopup = () => {
  const [isOpen, setIsOpen] = useState(false)

  const phoneNumber = "+917800178002"
  const whatsappUrl = `https://wa.me/917800178002`

  return (
    <motion.div 
      drag
      dragMomentum={false}
      className="fixed bottom-24 right-4 z-[100] flex flex-col items-end space-y-4 md:bottom-4 md:right-10"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="mb-3 w-72 rounded-[28px] bg-white border border-brand-100 shadow-2xl overflow-hidden"
          >
            <div className="p-5 bg-slate-950 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
                  <Bot className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-bold">Contact Agent</h4>
                  <p className="text-[10px] text-cyan-100 uppercase tracking-widest font-medium">We respond in minutes</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-2xl bg-brand-50 hover:bg-cyan-500 hover:text-slate-950 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500 text-slate-950 flex items-center justify-center group-hover:bg-white group-hover:text-cyan-600 transition-colors">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-sm">WhatsApp</div>
                  <div className="text-[10px] opacity-70">Instant Chat</div>
                </div>
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center space-x-4 p-4 rounded-2xl bg-brand-50 hover:bg-cyan-500 hover:text-slate-950 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500 text-slate-950 flex items-center justify-center group-hover:bg-white group-hover:text-cyan-600 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm">Call Now</div>
                  <div className="text-[10px] opacity-70">Direct Voice Call</div>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="h-9 w-9 rounded-[16px] bg-cyan-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-cyan-500/20 relative group md:h-11 md:w-11 md:rounded-full"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              className="relative"
            >
              <Headphones className="h-5 w-5 md:h-6 md:w-6" />
              <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-cyan-400 bg-slate-950 md:h-4 md:w-4">
                <Bot className="h-2 w-2 text-cyan-300" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subtle Pulse Effect */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-20 pointer-events-none" />
        )}
      </motion.button>
    </motion.div>
  )
}

export default SupportPopup
