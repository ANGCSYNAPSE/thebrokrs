"use client"

import { motion } from "framer-motion"
import { BarChart3, Building2, CheckCircle2, Megaphone, Quote, RadioTower, Rocket, Target, TrendingUp, Zap } from "lucide-react"

const highlights = [
  {
    icon: Target,
    title: "Brand Strategy",
    desc: "Clear brand message, sharper offer, and the right audience path.",
    color: "from-indigo-500 to-violet-500"
  },
  {
    icon: Megaphone,
    title: "Campaign Visibility",
    desc: "Campaigns designed to increase reach, trust, and qualified enquiries.",
    color: "from-violet-500 to-fuchsia-500"
  },
  {
    icon: BarChart3,
    title: "Growth Intelligence",
    desc: "Audience insights and lead quality checks that guide better decisions.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Marketing Engine",
    desc: "Strategy, creative direction, visibility, and lead-focused communication in one system.",
    color: "from-amber-500 to-orange-500"
  }
]

const metrics = [
  { icon: Building2, value: "10+", label: "Business Verticals" },
  { icon: Rocket, value: "360", label: "Marketing Execution" },
  { icon: TrendingUp, value: "18%", label: "Flagship Project ROI" },
]

const chartMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white pt-24 pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />

      <div className="container relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-2xl shadow-indigo-500/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 p-6 md:p-8 lg:p-10">
            <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-7 md:p-9">
              <div className="inline-flex items-center gap-3 rounded-full border border-indigo-100 bg-white px-4 py-2 text-indigo-600 text-[10px] font-black uppercase tracking-widest shadow-lg shadow-indigo-500/5">
                <RadioTower className="h-4 w-4" />
                <span>About The Brokrs</span>
              </div>

              <div className="mt-7 space-y-5">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-brand-950">
                  Redefining Collaborative
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-cyan-500">
                    Brand Growth.
                  </span>
                </h2>
                <p className="max-w-xl text-base md:text-lg leading-relaxed text-brand-600">
                  The Brokrs is a marketing-first growth company built for brands that need sharper positioning, stronger visibility, and campaign systems that turn attention into qualified business.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative min-h-[360px] overflow-hidden rounded-[28px] border border-indigo-100 bg-gradient-to-br from-white via-indigo-50 to-slate-50 p-6 shadow-xl shadow-indigo-500/10"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-brand-400">Annual Growth Signal</p>
                  <h3 className="mt-2 text-xl font-bold text-brand-950">Campaign Momentum</h3>
                </div>
              </div>

              <div className="relative h-[250px] overflow-hidden rounded-[24px] border border-indigo-100/70 bg-white/70">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.08)_1px,transparent_1px)] bg-[size:48px_42px]" />
                <div className="absolute bottom-11 left-8 right-8 h-px bg-indigo-200" />
                <div className="absolute bottom-11 left-[39%] top-6 w-16 bg-indigo-500/10" />
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 250" preserveAspectRatio="none">
                  <motion.path
                    d="M20 168 C70 210 92 86 132 118 C178 156 186 48 234 72 C282 96 282 178 330 140 C378 102 388 44 434 80 C470 108 480 160 500 118"
                    fill="none"
                    stroke="url(#aboutLineOne)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                  <motion.path
                    d="M20 122 C66 92 92 176 136 142 C180 108 198 126 242 98 C286 70 306 84 350 78 C394 72 414 160 458 136 C482 122 492 92 500 86"
                    fill="none"
                    stroke="url(#aboutLineTwo)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.85 }}
                    transition={{ duration: 1.4, delay: 0.35 }}
                    viewport={{ once: true }}
                  />
                  <motion.path
                    d="M20 144 C58 112 86 84 124 116 C166 152 194 86 236 112 C276 136 292 194 340 170 C386 148 392 96 438 116 C472 130 486 64 500 58"
                    fill="none"
                    stroke="url(#aboutLineThree)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.85 }}
                    transition={{ duration: 1.4, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                  <defs>
                    <linearGradient id="aboutLineOne" x1="0" x2="1" y1="0" y2="0">
                      <stop stopColor="#4f46e5" />
                      <stop offset="0.5" stopColor="#f59e0b" />
                      <stop offset="1" stopColor="#ef4444" />
                    </linearGradient>
                    <linearGradient id="aboutLineTwo" x1="0" x2="1" y1="0" y2="0">
                      <stop stopColor="#06b6d4" />
                      <stop offset="1" stopColor="#22c55e" />
                    </linearGradient>
                    <linearGradient id="aboutLineThree" x1="0" x2="1" y1="0" y2="0">
                      <stop stopColor="#8b5cf6" />
                      <stop offset="0.55" stopColor="#14b8a6" />
                      <stop offset="1" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="absolute bottom-4 left-8 right-8 flex justify-between text-[9px] font-black uppercase tracking-widest text-brand-400">
                  {chartMonths.map((month) => (
                    <span key={month}>{month}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mx-6 md:mx-8 lg:mx-10 grid grid-cols-1 gap-4 rounded-[26px] border border-slate-200 bg-slate-50/80 p-4 md:grid-cols-3">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-lg shadow-brand-500/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <metric.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-brand-950">{metric.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-500">{metric.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-6 md:p-8 lg:p-10">
            <div className="mb-8 flex flex-col items-center text-center">
              <span className="mb-3 inline-flex rounded-full bg-indigo-50 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-indigo-600">
                Growth Framework
              </span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-950">
                What We Do<span className="text-indigo-600">.</span>
              </h3>
              <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-brand-600">
                End-to-end marketing systems that build visibility, generate demand, and drive predictable growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group relative min-h-[245px] overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-xl shadow-brand-500/5"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg shadow-indigo-500/20`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h4 className="mt-8 text-xl font-bold text-brand-950 group-hover:text-indigo-600 transition-colors">{item.title}</h4>
                  <p className="mt-3 text-[15px] leading-6 text-brand-600">{item.desc}</p>
                  <div className="absolute bottom-6 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-500 transition-transform group-hover:translate-x-1 group-hover:bg-indigo-600 group-hover:text-white">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mx-6 mb-6 md:mx-8 lg:mx-10 rounded-[30px] border border-slate-200 bg-white px-6 py-10 shadow-xl shadow-brand-500/5 md:px-10 lg:px-14">
            <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-8 md:grid-cols-[180px_1fr]">
              <div className="flex -translate-x-4 translate-y-6 flex-col items-center justify-center text-center">
                <motion.div
                  whileHover={{ scale: 1.035 }}
                  className="mx-auto h-32 w-32 overflow-hidden rounded-full shadow-xl shadow-teal-900/10"
                >
                  <img
                    src="https://thebrokrs.co.in/wp-content/uploads/2025/07/1.png"
                    alt="DR Puneet Aggarwaal"
                    className="h-full w-full rounded-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
                    }}
                  />
                </motion.div>
                <p className="mt-5 whitespace-nowrap text-sm font-black uppercase tracking-widest text-brand-800">DR Puneet Aggarwaal</p>
                <p className="mt-1 text-sm font-semibold text-brand-500">Founder & CEO</p>
              </div>

              <div className="relative flex min-h-40 items-center text-center md:text-left">
                <div>
                <Quote className="mb-3 inline-block h-8 w-8 rotate-180 text-teal-700/80 md:mb-0 md:mr-2" />
                <p className="inline text-xl font-medium leading-relaxed text-brand-600 md:text-2xl">
                  We give every brand a sharper voice, a stronger market presence, and a growth engine built to keep performing.
                </p>
                <Quote className="ml-2 inline-block h-8 w-8 text-teal-700/80" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
