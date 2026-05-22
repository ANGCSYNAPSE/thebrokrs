"use client"

import { motion } from "framer-motion"
import { CheckCircle2, MousePointerClick, Rocket, Sparkles, Target } from "lucide-react"

const steps = [
  {
    step: "01",
    label: "Ask",
    title: "Tell Us The Goal",
    description: "Share what you want to promote, who should see it, and what result you want.",
    example: "Example: launch a property offer, collect leads, promote a partner plan.",
    icon: MousePointerClick,
    color: "from-cyan-300 to-sky-400",
    bg: "bg-cyan-50",
    accent: "text-cyan-700",
    bullets: ["Business type", "Target audience", "Growth target"]
  },
  {
    step: "02",
    label: "Build",
    title: "We Shape The Campaign",
    description: "We turn your idea into a clear message, creative angle, and follow-up path.",
    example: "You get positioning, content direction, and the right visibility plan.",
    icon: Target,
    color: "from-violet-300 to-cyan-300",
    bg: "bg-violet-50",
    accent: "text-violet-700",
    bullets: ["Message", "Media assets", "Lead path"]
  },
  {
    step: "03",
    label: "Launch",
    title: "Go Live & Grow",
    description: "Your campaign moves into market with tracking, responses, and next-step support.",
    example: "Attention becomes enquiries, conversations, and measurable business actions.",
    icon: Rocket,
    color: "from-lime-300 to-cyan-300",
    bg: "bg-lime-50",
    accent: "text-emerald-700",
    bullets: ["Visibility", "Lead capture", "Follow-up"]
  }
]

const Process = () => {
  return (
    <section id="process" className="relative overflow-hidden bg-[#eefbff] pt-12 pb-24 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_84%_35%,rgba(167,243,208,0.28),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,47,73,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(8,47,73,0.04)_1px,transparent_1px)] bg-[size:110px_110px] opacity-35" />

      <div className="container relative z-10 max-w-7xl mx-auto px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/80 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-cyan-700 shadow-lg shadow-cyan-950/5">
            <Sparkles className="h-4 w-4" />
            Simple Growth Flow
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-brand-950">How It Works</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-brand-700 md:text-lg">
            Three easy steps: tell us the goal, we build the campaign, then we launch it and help turn attention into real conversations.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-7">
            {steps.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 28, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-[30px] border border-white bg-white/86 p-5 shadow-2xl shadow-cyan-950/8 transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/15 md:p-6"
                >
                  <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${item.color} opacity-30 blur-2xl transition-transform duration-700 group-hover:scale-125`} />

                  <div className="relative z-10">
                    <div className="mb-6 flex items-center justify-between">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-[24px] bg-gradient-to-br ${item.color} text-slate-950 shadow-xl shadow-cyan-950/10 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <span className="rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-cyan-800">
                        Step {item.step}
                      </span>
                    </div>

                    <div className="mb-5">
                      <p className={`text-xs font-black uppercase tracking-[0.25em] ${item.accent}`}>{item.label}</p>
                      <h3 className="mt-2 text-2xl font-black leading-tight text-brand-950 md:text-3xl">{item.title}</h3>
                      <p className="mt-3 text-sm font-semibold leading-6 text-brand-650">{item.description}</p>
                    </div>

                    <div className={`relative mb-5 overflow-hidden rounded-[24px] ${item.bg} p-4`}>
                      <div className="mb-4 flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-violet-300" />
                        <span className="h-2.5 w-2.5 rounded-full bg-lime-300" />
                      </div>
                      <p className="text-xs font-bold leading-5 text-brand-700">{item.example}</p>
                    </div>

                    <div className="space-y-2">
                      {item.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-600" />
                          <span className="text-xs font-black text-brand-700">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
