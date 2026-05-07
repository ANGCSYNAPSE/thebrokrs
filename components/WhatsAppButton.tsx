"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

const WhatsAppButton = () => {
  const whatsappNumber = "917800178002"
  const message = "Hello The Brokrs team, I'm interested in learning more about your business clusters and investment opportunities."

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#128C7E] transition-colors group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Notification Dot */}
      <div className="absolute top-3 right-3 w-3 h-3 bg-red-500 rounded-full border-2 border-[#25D366] z-10" />
      
      {/* Tooltip */}
      <div className="absolute right-18 bg-white text-slate-900 px-4 py-2 rounded-xl text-xs font-bold shadow-xl opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap border border-slate-100">
        Chat with us
      </div>
      
      {/* Pulse Effect */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
    </motion.a>
  )
}

export default WhatsAppButton
