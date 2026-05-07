"use client"

import { motion } from "framer-motion"
import { UserPlus, ShieldCheck, Gift, ArrowRight, FileCheck2, Share2, WalletCards } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Register",
    description: "Begin your journey by signing up. Access strategic investment clusters and tailored business services.",
    highlight: "Quick & Secure",
    accent: "bg-indigo-600",
    visual: "register"
  },
  {
    step: "02",
    icon: ShieldCheck,
    title: "Complete KYC",
    description: "Verify your identity through our transparent process to ensure legal compliance and ownership confidence.",
    highlight: "Safe & Documented",
    accent: "bg-emerald-600",
    visual: "kyc"
  },
  {
    step: "03",
    icon: Gift,
    title: "Refer & Earn",
    description: "Share the vision with your network. Grow your community and earn rewards as you help others build their legacy.",
    highlight: "Collective Growth",
    accent: "bg-rose-600",
    visual: "refer"
  }
]

const ProcessVisual = ({ type }: { type: string }) => {
  if (type === "kyc") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-emerald-100 via-white to-cyan-100">
        <div className="absolute inset-x-8 top-8 rounded-3xl bg-white/80 p-5 shadow-2xl shadow-emerald-900/10 border border-white">
          <div className="flex items-center justify-between border-b border-emerald-100 pb-3">
            <div className="space-y-2">
              <span className="block h-2 w-20 rounded-full bg-emerald-200" />
              <span className="block h-2 w-28 rounded-full bg-slate-200" />
            </div>
            <FileCheck2 className="h-8 w-8 text-emerald-600" />
          </div>
          <div className="mt-5 grid grid-cols-[56px_1fr] gap-4">
            <div className="h-14 w-14 rounded-2xl bg-emerald-50 border border-emerald-100" />
            <div className="space-y-3">
              <span className="block h-2 rounded-full bg-slate-200" />
              <span className="block h-2 w-4/5 rounded-full bg-slate-200" />
              <span className="block h-2 w-2/3 rounded-full bg-emerald-200" />
            </div>
          </div>
        </div>
        <div className="absolute top-6 right-8 rounded-2xl bg-emerald-600 px-4 py-3 text-white shadow-xl">
          <ShieldCheck className="h-6 w-6" />
        </div>
      </div>
    )
  }

  if (type === "refer") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-rose-100 via-white to-amber-100">
        <div className="absolute left-1/2 top-12 h-20 w-20 -translate-x-1/2 rounded-full bg-white shadow-2xl shadow-rose-900/10 border border-rose-100 flex items-center justify-center">
          <Gift className="h-10 w-10 text-rose-600" />
        </div>
        <div className="absolute left-10 bottom-8 h-14 w-14 rounded-2xl bg-white border border-rose-100 shadow-lg flex items-center justify-center">
          <Share2 className="h-7 w-7 text-rose-500" />
        </div>
        <div className="absolute right-10 bottom-8 h-14 w-14 rounded-2xl bg-white border border-amber-100 shadow-lg flex items-center justify-center">
          <WalletCards className="h-7 w-7 text-amber-500" />
        </div>
        <div className="absolute left-[27%] top-[57%] h-1 w-24 -rotate-12 rounded-full bg-rose-200" />
        <div className="absolute right-[27%] top-[57%] h-1 w-24 rotate-12 rounded-full bg-amber-200" />
      </div>
    )
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-sky-100">
      <div className="absolute left-8 top-8 rounded-[28px] bg-white/85 p-5 shadow-2xl shadow-indigo-900/10 border border-white">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
            <UserPlus className="h-7 w-7 text-indigo-600" />
          </div>
          <div className="space-y-2">
            <span className="block h-2 w-24 rounded-full bg-indigo-200" />
            <span className="block h-2 w-32 rounded-full bg-slate-200" />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          <span className="h-12 rounded-xl bg-indigo-50" />
          <span className="h-12 rounded-xl bg-sky-50" />
          <span className="h-12 rounded-xl bg-emerald-50" />
        </div>
      </div>
      <div className="absolute -bottom-8 right-8 h-28 w-28 rounded-full bg-indigo-500/15" />
      <div className="absolute top-6 right-10 rounded-2xl bg-indigo-600 px-4 py-3 text-white shadow-xl">
        <ArrowRight className="h-6 w-6" />
      </div>
    </div>
  )
}

const Process = () => {
  return (
    <section id="process" className="pt-16 pb-24 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32 bg-white relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14 lg:mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4"
          >
            {/* <span className="w-2 h-2 rounded-full bg-indigo-600" /> */}
            {/* <span>The Journey</span> */}
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-950">How It Works</h2>
          <p className="text-brand-600 text-lg max-w-2xl mx-auto leading-relaxed">
            A streamlined, three-step path designed to help you build, verify, and grow your wealth within our community.
          </p>
        </div>

        <div className="relative">
          {/* Main Path Line (Visible & Clean) */}
          <div className="hidden lg:block absolute top-[180px] left-[15%] right-[15%] h-1 bg-slate-100 rounded-full z-0 overflow-hidden">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: '100%' }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="h-full bg-gradient-to-r from-indigo-500 via-emerald-500 to-rose-500" 
             />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="relative group">
                  {/* Step Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col bg-white rounded-[40px] border border-brand-100 shadow-xl shadow-brand-500/5 h-full group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 relative"
                  >
                    {/* Image Area (Overflow hidden here) */}
                    <div className="relative h-48 overflow-hidden rounded-t-[40px]">
                      <ProcessVisual type={item.visual} />
                      <div className="absolute inset-0 bg-brand-950/20 group-hover:bg-transparent transition-colors duration-500" />
                      
                      {/* Floating Step Badge */}
                      <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-2xl text-brand-950 font-black text-sm shadow-xl">
                        STEP {item.step}
                      </div>
                    </div>

                    {/* Icon Circle (Now outside/overlapping safely) */}
                    <div className={`absolute top-[160px] right-8 w-16 h-16 rounded-2xl ${item.accent} text-white flex items-center justify-center shadow-2xl shadow-indigo-200 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 z-30`}>
                      <Icon className="w-8 h-8" />
                    </div>

                    {/* Content */}
                    <div className="p-10 pt-12 space-y-6 flex-1 flex flex-col relative z-10">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-brand-950 group-hover:text-indigo-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-brand-600 leading-relaxed text-sm">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-auto pt-6">
                        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-xl bg-slate-50 border border-brand-100 text-brand-400 text-[10px] font-bold uppercase tracking-widest group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-all">
                          <span>{item.highlight}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Enhanced Connecting Arrows (Visible & Clean) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-[180px] -right-10 w-16 h-16 items-center justify-center z-30">
                      <div className="w-12 h-12 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center animate-bounce-x">
                        <ArrowRight className="w-6 h-6 text-indigo-600" />
                      </div>
                    </div>
                  )}
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
