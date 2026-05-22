"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, X, Building, ShoppingCart, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const Projects = () => {
  const [selectedSector, setSelectedSector] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleQuerySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setSelectedSector(null)
      setIsSubmitted(false)
    }, 3000)
  }

  const businessVerticals = [
    {
      title: "Real Estate",
      icon: Building,
      desc: "Commercial & Residential layouts.",
      image: "/assets/estate 4.jpg"
    },
    {
      title: "Ecommerce Hubs",
      icon: ShoppingCart,
      desc: "Logistics & warehouse sectors.",
      image: "/assets/property.webp"
    },
    {
      title: "IT & Software",
      icon: Code2,
      desc: "Custom tech solutions & digital platforms.",
      image: "/assets/industry/it_software.webp"
    }
  ]

  return (
    <section id="projects" className="pt-10 pb-24 md:pt-12 md:pb-28 lg:pt-14 lg:pb-32 bg-brand-50/30">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Centered Layout Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 lg:mb-20 space-y-4">
          <h3 className="text-cyan-700 font-bold uppercase tracking-widest text-sm flex items-center justify-center">
            <span className="w-8 h-px bg-cyan-600 mr-4" />
            Strategic Portfolios
            <span className="w-8 h-px bg-cyan-600 ml-4" />
          </h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-950 leading-tight">
            Marketing Built For <br />
            <span className="text-cyan-600">Every Business Vertical.</span>
          </h2>
          <p className="text-brand-600 text-lg leading-relaxed pt-2">
            We build focused marketing systems for each vertical, from audience positioning to campaign visibility and lead flow.
          </p>
        </div>
        
        {/* Business Vertical Cards */}
        <div>
          <div className="text-center mb-14 space-y-3">
            <h3 className="text-3xl font-display font-bold text-brand-950">Explore Our Business Verticals</h3>
            <p className="text-brand-600 max-w-lg mx-auto italic">Choose a vertical and share your growth goal. Our team will map the right campaign direction.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {businessVerticals.map((sector) => (
              <motion.div
                key={sector.title}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedSector(sector.title)}
                className="group relative min-h-[180px] overflow-hidden rounded-[18px] border border-slate-200 bg-white cursor-pointer shadow-lg shadow-brand-500/5 transition-all duration-300 hover:shadow-xl md:min-h-[260px] md:rounded-[28px]"
              >
                <div className="relative h-24 w-full overflow-hidden md:h-36">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
                </div>
                <div className="absolute right-3 top-[76px] flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-slate-950 shadow-xl shadow-cyan-500/20 md:right-5 md:top-[118px] md:h-14 md:w-14 md:rounded-2xl">
                  <sector.icon className="w-5 h-5 md:w-7 md:h-7" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-4 md:p-6">
                  <div>
                    <h4 className="max-w-[120px] text-sm font-bold text-brand-950 md:max-w-none md:text-xl">{sector.title}</h4>
                    <p className="mt-2 text-[11px] font-medium leading-4 text-brand-500 md:text-sm md:leading-6">{sector.desc}</p>
                  </div>
                  <div className="mt-4 text-[9px] font-bold uppercase tracking-widest text-cyan-700 md:mt-6 md:text-[10px]">
                  Click to Query
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Query Modal */}
      <AnimatePresence>
        {selectedSector && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-950/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden relative"
            >
              <button 
                onClick={() => setSelectedSector(null)}
                className="absolute top-6 right-6 text-brand-400 hover:text-brand-950 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8 md:p-10 space-y-6">
                <div>
                  <h3 className="text-2xl font-display font-bold text-brand-950">Query: {selectedSector}</h3>
                  <p className="text-brand-600 mt-2 text-sm">Share your interest in this vertical and our team will reach out with the next steps.</p>
                </div>

                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8 space-y-4 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-cyan-100 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-cyan-600" />
                    </div>
                    <h4 className="text-lg font-bold text-brand-950">Query Submitted</h4>
                    <p className="text-brand-600 text-sm">Our team will reach out with tailored marketing details.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleQuerySubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-950 px-1">Full Name</label>
                      <input required type="text" className="w-full h-12 px-4 rounded-xl border border-brand-200 bg-brand-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all font-medium text-brand-950" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-950 px-1">Email or Phone</label>
                      <input required type="text" className="w-full h-12 px-4 rounded-xl border border-brand-200 bg-brand-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all font-medium text-brand-950" placeholder="+91 99999 00000" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-950 px-1">Marketing Goal (Optional)</label>
                      <select className="w-full h-12 px-4 rounded-xl border border-brand-200 bg-brand-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all font-medium text-brand-950 text-sm">
                        <option>Curious / Exploring</option>
                        <option>Brand Awareness</option>
                        <option>Lead Generation</option>
                        <option>Sales Growth</option>
                      </select>
                    </div>

                    <Button type="submit" size="lg" className="w-full h-14 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-brand-950 hover:text-white transition-colors shadow-lg mt-2">
                      Submit Query
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
