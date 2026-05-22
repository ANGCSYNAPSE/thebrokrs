"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

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

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error(error)
      alert("Something went wrong. Please try again later.")
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 pt-28 pb-32 md:pt-16 md:pb-32 lg:pt-20 lg:pb-40 bg-slate-50 relative overflow-hidden">
      {/* Header Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_82%,rgba(34,211,238,0.12),transparent_34%),radial-gradient(circle_at_86%_10%,rgba(14,165,233,0.09),transparent_30%),linear-gradient(135deg,#ffffff_0%,#f0fdff_48%,#f8fafc_100%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-cyan-100/35 to-transparent pointer-events-none" />
      
      <div className="container relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1fr] gap-10 lg:gap-20 xl:gap-24 items-start">
          <div className="space-y-8">
            <div className="space-y-5">
              <span className="inline-flex rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-cyan-700 shadow-sm">
                Connect With Us
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-950 leading-tight">
                We're here to help
              </h2>
              <p className="text-brand-700 text-base md:text-lg leading-relaxed max-w-xl">
                Contact Headquarter for smart solutions and personalized support. Our team is available to assist you via WhatsApp, Phone, or Email.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-[28px] border border-cyan-200 bg-white/85 p-10 text-center shadow-xl shadow-cyan-500/10"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100">
                  <CheckCircle2 className="h-8 w-8 text-cyan-600" />
                </div>
                <h4 className="mt-5 text-xl font-bold text-brand-950">Message Sent Successfully</h4>
                <p className="mt-2 text-sm text-brand-600">Thank you! Our expert team will get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-2xl">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-950">Full Name</label>
                  <Input
                    placeholder="John Doe"
                    {...register("name")}
                    className={errors.name ? "border-red-500 h-12 rounded-xl bg-white/85 text-brand-950 placeholder:text-brand-400" : "h-12 rounded-xl border-cyan-200 bg-white/85 text-brand-950 placeholder:text-brand-400 focus-visible:ring-cyan-300"}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-950">Email Address</label>
                  <Input
                    placeholder="john@example.com"
                    {...register("email")}
                    className={errors.email ? "border-red-500 h-12 rounded-xl bg-white/85 text-brand-950 placeholder:text-brand-400" : "h-12 rounded-xl border-cyan-200 bg-white/85 text-brand-950 placeholder:text-brand-400 focus-visible:ring-cyan-300"}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-950">Message</label>
                  <Textarea
                    placeholder="How can we help you?"
                    rows={3}
                    {...register("message")}
                    className={errors.message ? "min-h-[92px] resize-y border-red-500 rounded-xl bg-white/85 text-brand-950 placeholder:text-brand-400" : "min-h-[92px] resize-y rounded-xl border-cyan-200 bg-white/85 text-brand-950 placeholder:text-brand-400 focus-visible:ring-cyan-300"}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="h-12 rounded-full bg-slate-950 text-white px-8 font-bold hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 group disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Information"}
                  {!isSubmitting && <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-5 lg:pt-14">
            <div className="relative overflow-hidden rounded-[24px] border border-cyan-200 bg-white/82 p-5 sm:p-7 min-h-[260px] shadow-[0_24px_70px_rgba(8,145,178,0.1)]">
              <Image
                src="/assets/estate.jpeg"
                alt=""
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover opacity-[0.08]"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-cyan-50/85" />
              <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-cyan-300/35 blur-[70px]" />
              <div className="relative z-10 flex items-center justify-between">
                <Image
                  src="/assets/logo blue.png"
                  alt="The Brokrs"
                  width={150}
                  height={54}
                  sizes="150px"
                  className="h-8 w-auto object-contain"
                />
                <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cyan-700">
                  Brokrs Desk
                </span>
              </div>
              <div className="relative z-10 mt-20 max-w-md">
                <p className="text-base sm:text-lg leading-7 text-brand-800">
                  "We help brands move from scattered attention to structured campaigns, sharper positioning, and qualified business conversations."
                </p>
                <p className="mt-5 text-sm font-bold text-cyan-700">The Brokrs Growth Team</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <a
                href="https://wa.me/917800178002"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[22px] border border-cyan-200 bg-white/80 p-4 transition-all hover:border-cyan-300 hover:bg-white hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
                  <WhatsAppIcon className="h-5 w-5" />
                </div>
                <h4 className="mt-5 text-sm font-bold text-brand-950 sm:text-base">WhatsApp</h4>
                <p className="mt-1 text-[11px] text-brand-500 sm:text-xs">Chat instantly</p>
              </a>
              <a
                href="tel:+917800178002"
                className="rounded-[22px] border border-cyan-200 bg-white/80 p-4 transition-all hover:border-cyan-300 hover:bg-white hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
                  <Phone className="h-5 w-5" />
                </div>
                <h4 className="mt-5 text-sm font-bold text-brand-950 sm:text-base">Call</h4>
                <p className="mt-1 text-[11px] text-brand-500 sm:text-xs">Speak to experts</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
