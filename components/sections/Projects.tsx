"use client"

import { useState } from "react"
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
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      title: "Ecommerce Hubs",
      icon: ShoppingCart,
      desc: "Logistics & warehouse sectors.",
      color: "bg-emerald-50 text-emerald-600 border-emerald-200"
    },
    {
      title: "IT & Software",
      icon: Code2,
      desc: "Custom tech solutions & digital platforms.",
      color: "bg-indigo-50 text-indigo-600 border-indigo-200"
    }
  ]

  return (
    <section id="projects" className="pt-10 pb-24 md:pt-12 md:pb-28 lg:pt-14 lg:pb-32 bg-brand-50/30">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Centered Layout Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 lg:mb-20 space-y-4">
          <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-sm flex items-center justify-center">
            <span className="w-8 h-px bg-indigo-600 mr-4" />
            Strategic Portfolios
            <span className="w-8 h-px bg-indigo-600 ml-4" />
          </h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-950 leading-tight">
            Marketing Built For <br />
            <span className="text-indigo-600">Every Business Vertical.</span>
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessVerticals.map((sector) => (
              <motion.div
                key={sector.title}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedSector(sector.title)}
                className={`flex flex-col items-center justify-center p-8 rounded-[30px] border-2 border-dashed bg-white cursor-pointer hover:shadow-xl transition-all duration-300 ${sector.color}`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${sector.color.replace('border-', '')}`}>
                  <sector.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-brand-950">{sector.title}</h4>
                <p className="text-sm font-medium opacity-80 text-center">{sector.desc}</p>
                <div className="mt-6 text-[10px] font-bold uppercase tracking-widest opacity-60">
                  Click to Query
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
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
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

                    <Button type="submit" size="lg" className="w-full h-14 rounded-xl bg-indigo-600 text-white font-bold hover:bg-brand-950 transition-colors shadow-lg mt-2">
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
