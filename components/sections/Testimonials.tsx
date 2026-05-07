"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mr Niklesh Rastogi",
      role: "Property Investor",
      text: "The Brokrs team turned our vision into a tangible reality. They listened to our specific land requirements and offered suggestions that took our investment to the next level. Their professionalism is unmatched.",
      image: "https://thebrokrs.co.in/wp-content/uploads/2024/09/Mr-Niklesh-rastogi.jpg"
    },
    {
      name: "Dr. Lakshay",
      role: "Clinic Owner",
      text: "Choosing the strategic land clusters provided by The Brokrs was the best decision for our commercial expansion. The design is both elegant and practical. They were a pleasure to work with throughout the lifecycle.",
      image: "https://thebrokrs.co.in/wp-content/uploads/2024/09/Dr-lakshay.jpg"
    },
    {
      name: "Mr Vijay Shukla",
      role: "Corporate Client",
      text: "The Brokrs platform is where skills, business, and opportunity truly meet. Their high-growth mushroom farming project has delivered exceptional returns already. A community you can trust.",
      image: "https://thebrokrs.co.in/wp-content/uploads/2024/09/Screenshot_2024-09-04-14-39-47-580_com.whatsapp.w4b-edit.jpg"
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-200 blur-[120px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-200 blur-[120px] rounded-full" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Heading & Controls */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-indigo-600 font-bold uppercase tracking-[0.3em] text-xs">
                Client Voices
              </h3>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-950 leading-tight">
                Trust Built on <br />
                <span className="text-indigo-600">Tangible Results.</span>
              </h2>
              <p className="text-brand-600 text-lg leading-relaxed max-w-md">
                Don't just take our word for it. Hear from the investors and professionals who have built their future with us.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <button 
                onClick={prev}
                className="w-16 h-16 rounded-full border border-brand-200 flex items-center justify-center text-brand-950 hover:bg-brand-950 hover:text-white transition-all duration-300 shadow-sm"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button 
                onClick={next}
                className="w-16 h-16 rounded-full border border-brand-200 flex items-center justify-center text-brand-950 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300 shadow-sm"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
              
              <div className="flex space-x-2 pl-4">
                {testimonials.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === i ? "w-10 bg-indigo-600" : "w-4 bg-brand-200"}`}
                  />
                ))}
              </div>
            </div>

            <div className="pt-8 flex items-center space-x-8">
              <div className="space-y-2">
                <div className="text-4xl font-display font-bold text-brand-950">4.9/5</div>
                <div className="flex text-gold-500">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <div className="text-brand-400 text-[10px] font-bold uppercase tracking-widest">Average Support Rating</div>
              </div>
              <div className="h-16 w-px bg-brand-100" />
              <div className="space-y-2">
                <div className="text-4xl font-display font-bold text-brand-950">500+</div>
                <div className="text-brand-400 text-[10px] font-bold uppercase tracking-widest">Active Community Hubs</div>
              </div>
            </div>
          </div>

          {/* Right: Testimonial Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative p-12 lg:p-16 rounded-[60px] bg-white border border-brand-100 shadow-2xl group overflow-hidden"
              >
                {/* Visual Decor */}
                <div className="absolute top-0 right-0 p-8 opacity-5 -translate-y-4 translate-x-4 transition-transform group-hover:scale-110">
                  <Quote className="w-32 h-32 text-indigo-600" />
                </div>

                <div className="space-y-10 relative z-10">
                  <div className="w-20 h-20 rounded-3xl bg-brand-950 flex items-center justify-center text-white shadow-xl">
                    <Quote className="w-10 h-10" />
                  </div>

                  <p className="text-2xl md:text-3xl font-display font-medium text-brand-950 leading-relaxed italic">
                    "{testimonials[activeIndex].text}"
                  </p>

                  <div className="flex items-center space-x-6 pt-6">
                    <div className="w-20 h-20 rounded-full border-4 border-brand-50 overflow-hidden shadow-xl shadow-brand-500/5">
                      <img 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].name} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-950 leading-none">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-indigo-600 text-sm font-bold uppercase tracking-widest pt-2">
                        {testimonials[activeIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Floating Decorative Box */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-100/20 border border-brand-100 rounded-[40px] backdrop-blur-3xl lg:block hidden z-0" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
