"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Send, MessageSquare, CheckCircle2 } from "lucide-react"
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
    <section id="contact" className="py-28 md:py-32 lg:py-40 bg-white relative overflow-hidden">
      {/* Header Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-100 to-transparent" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-50/30 rounded-full blur-[120px] -mr-48 -mt-32 pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-24">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-sm flex items-center">
                <span className="w-8 h-px bg-indigo-600 mr-4" />
                Connect With Us
              </h3>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-950 leading-tight">
                Contact Headquarter<br />
              </h2>
              <p className="text-brand-600 text-lg leading-relaxed max-w-md">
                Ready to discover smart solutions and personalized support? Our team is available to assist you via WhatsApp, Phone, or Email.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a 
                href="https://wa.me/917800178002" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-8 rounded-[40px] bg-white/80 backdrop-blur-sm border border-brand-100/60 group hover:bg-white hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-500 text-white flex items-center justify-center mb-6 shadow-xl shadow-green-500/20 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-brand-950 group-hover:text-indigo-600 transition-colors">WhatsApp</h4>
                <p className="text-brand-500 text-sm mt-2 transition-colors">Chat with us instantly</p>
                <p className="text-brand-900 font-bold mt-4 transition-colors">+91 78001 78002</p>
              </a>
              <a 
                href="tel:+917800178002"
                className="p-8 rounded-[40px] bg-white/80 backdrop-blur-sm border border-brand-100/60 group hover:bg-white hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-500 text-white flex items-center justify-center mb-6 shadow-xl shadow-green-500/20 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-brand-950 group-hover:text-indigo-600 transition-colors">Call Representative</h4>
                <p className="text-brand-500 text-sm mt-2 transition-colors">Speak with our experts</p>
                <p className="text-brand-900 font-bold mt-4 transition-colors">+91 78001 78002</p>
              </a>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-10 lg:p-16 h-fit rounded-[60px] bg-white/70 backdrop-blur-xl border border-brand-100/60 shadow-[0_4px_40px_rgba(99,102,241,0.05)] relative overflow-hidden"
          >
            <div className="space-y-10 relative z-10">
              <div className="space-y-4">
                <h3 className="text-3xl font-display font-bold text-brand-950">Join Us Now</h3>
                <p className="text-brand-500 text-sm">Fill out the form below and an expert will get back to you shortly.</p>
              </div>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 space-y-4 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-950">Message Sent Successfully</h4>
                  <p className="text-brand-600 text-sm">Thank you! Our expert team will get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-400 pl-1">Full Name</label>
                      <Input 
                        placeholder="John Doe" 
                        {...register("name")}
                        className={errors.name ? "border-red-500 h-14 rounded-xl" : "h-14 rounded-xl border-brand-100"} 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-400 pl-1">Email Address</label>
                      <Input 
                        placeholder="john@example.com" 
                        {...register("email")}
                        className={errors.email ? "border-red-500 h-14 rounded-xl" : "h-14 rounded-xl border-brand-100"} 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-400 pl-1">Message</label>
                    <Textarea 
                      placeholder="How can we help you?" 
                      rows={6}
                      {...register("message")}
                      className={errors.message ? "border-red-500 rounded-2xl" : "rounded-2xl border-brand-100"} 
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full h-16 bg-white text-brand-950 border border-brand-100 hover:bg-brand-50 font-bold rounded-2xl shadow-xl transition-all duration-300 group disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Information"}
                    {!isSubmitting && <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
