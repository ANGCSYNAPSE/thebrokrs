"use client"

import { motion } from "framer-motion"
import { UserPlus, ShieldCheck, Gift, ArrowRight, FileCheck2, Share2, WalletCards } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Share Your Goal",
    description: "Tell us your business vertical, audience, and growth target so we can understand the right campaign direction.",
    highlight: "Discovery",
    visual: "register"
  },
  {
    step: "02",
    icon: ShieldCheck,
    title: "Shape The Campaign",
    description: "We refine positioning, campaign messaging, and the trust points your audience needs before taking action.",
    highlight: "Strategy",
    visual: "kyc"
  },
  {
    step: "03",
    icon: Gift,
    title: "Launch & Grow",
    description: "Your campaign moves into visibility, lead capture, and follow-up so attention becomes measurable business growth.",
    highlight: "Execution",
    visual: "refer"
  }
]

const ProcessVisual = ({ type }: { type: string }) => {
  if (type === "kyc") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-cyan-100 via-white to-teal-100">
        <div className="absolute inset-x-5 top-5 rounded-2xl bg-white/80 p-4 shadow-2xl shadow-cyan-900/10 border border-white md:inset-x-8 md:top-8 md:rounded-3xl md:p-5">
          <div className="flex items-center justify-between border-b border-cyan-100 pb-3">
            <div className="space-y-2">
              <span className="block h-2 w-20 rounded-full bg-cyan-200" />
              <span className="block h-2 w-28 rounded-full bg-slate-200" />
            </div>
            <FileCheck2 className="h-7 w-7 text-cyan-600 md:h-8 md:w-8" />
          </div>
          <div className="mt-5 grid grid-cols-[56px_1fr] gap-4">
            <div className="h-14 w-14 rounded-2xl bg-cyan-50 border border-cyan-100" />
            <div className="space-y-3">
              <span className="block h-2 rounded-full bg-slate-200" />
              <span className="block h-2 w-4/5 rounded-full bg-slate-200" />
              <span className="block h-2 w-2/3 rounded-full bg-cyan-200" />
            </div>
          </div>
        </div>
        <div className="absolute top-5 right-5 rounded-2xl bg-cyan-500 px-3 py-2 text-slate-950 shadow-xl md:top-6 md:right-8 md:px-4 md:py-3">
          <ShieldCheck className="h-5 w-5 md:h-6 md:w-6" />
        </div>
      </div>
    )
  }

  if (type === "refer") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-cyan-100 via-white to-sky-100">
        <div className="absolute left-1/2 top-12 h-20 w-20 -translate-x-1/2 rounded-full bg-white shadow-2xl shadow-rose-900/10 border border-rose-100 flex items-center justify-center">
          <Gift className="h-10 w-10 text-cyan-600" />
        </div>
        <div className="absolute left-10 bottom-8 h-14 w-14 rounded-2xl bg-white border border-rose-100 shadow-lg flex items-center justify-center">
          <Share2 className="h-7 w-7 text-cyan-500" />
        </div>
        <div className="absolute right-10 bottom-8 h-14 w-14 rounded-2xl bg-white border border-amber-100 shadow-lg flex items-center justify-center">
          <WalletCards className="h-7 w-7 text-cyan-500" />
        </div>
        <div className="absolute left-[27%] top-[57%] h-1 w-24 -rotate-12 rounded-full bg-cyan-200" />
        <div className="absolute right-[27%] top-[57%] h-1 w-24 rotate-12 rounded-full bg-sky-200" />
      </div>
    )
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-cyan-100 via-white to-sky-100">
      <div className="absolute left-5 top-5 rounded-2xl bg-white/85 p-4 shadow-2xl shadow-cyan-900/10 border border-white md:left-8 md:top-8 md:rounded-[28px] md:p-5">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-cyan-50 flex items-center justify-center md:h-12 md:w-12">
            <UserPlus className="h-5 w-5 text-cyan-600 md:h-7 md:w-7" />
          </div>
          <div className="space-y-2">
            <span className="block h-2 w-24 rounded-full bg-cyan-200" />
            <span className="block h-2 w-32 rounded-full bg-slate-200" />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          <span className="h-12 rounded-xl bg-cyan-50" />
          <span className="h-12 rounded-xl bg-sky-50" />
          <span className="h-12 rounded-xl bg-cyan-50" />
        </div>
      </div>
      <div className="absolute -bottom-8 right-8 h-28 w-28 rounded-full bg-cyan-500/15" />
      <div className="absolute top-5 right-5 rounded-2xl bg-cyan-500 px-3 py-2 text-slate-950 shadow-xl md:top-6 md:right-10 md:px-4 md:py-3">
        <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
      </div>
    </div>
  )
}

const Process = () => {
  return (
    <section id="process" className="pt-12 pb-24 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32 bg-white relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14 lg:mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-950">How It Works</h2>
          <p className="text-brand-600 text-lg max-w-2xl mx-auto leading-relaxed">
            A simple three-step marketing path that moves from business clarity to campaign launch and measurable growth.
          </p>
        </div>

        <div className="relative">
          {/* Main Path Line (Visible & Clean) */}
          <div className="hidden lg:block absolute top-[180px] left-[15%] right-[15%] h-1 bg-slate-100 rounded-full z-0 overflow-hidden">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: '100%' }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="h-full bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400" 
             />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-12 relative z-10">
            {steps.map((item, i) => {
              return (
                <div key={i} className="relative group">
                  {/* Step Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col bg-white rounded-[24px] lg:rounded-[40px] border border-brand-100 shadow-xl shadow-brand-500/5 h-full group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 relative"
                  >
                    {/* Image Area (Overflow hidden here) */}
                    <div className="relative h-36 overflow-hidden rounded-t-[24px] lg:h-48 lg:rounded-t-[40px]">
                      <ProcessVisual type={item.visual} />
                      <div className="absolute inset-0 bg-brand-950/20 group-hover:bg-transparent transition-colors duration-500" />
                      
                      {/* Floating Step Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-xl text-brand-950 font-black text-xs shadow-xl lg:top-6 lg:left-6 lg:px-4 lg:py-2 lg:rounded-2xl lg:text-sm">
                        STEP {item.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 pt-8 space-y-4 flex-1 flex flex-col relative z-10 lg:p-10 lg:pt-12 lg:space-y-6">
                      <div className="space-y-2 lg:space-y-3">
                        <h3 className="text-xl lg:text-2xl font-bold text-brand-950 group-hover:text-cyan-700 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-brand-600 leading-relaxed text-xs lg:text-sm">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-auto pt-3 lg:pt-6">
                        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-brand-100 text-brand-400 text-[9px] font-bold uppercase tracking-widest group-hover:bg-cyan-50 group-hover:text-cyan-700 group-hover:border-cyan-100 transition-all lg:px-4 lg:text-[10px]">
                          <span>{item.highlight}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x {
          animation: bounce-x 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  )
}

export default Process
