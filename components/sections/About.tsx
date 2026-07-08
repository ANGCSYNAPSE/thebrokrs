"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, BarChart3, Building2, CheckCircle2, Globe2, Handshake, Megaphone, RadioTower, Rocket, Target, TrendingUp, Warehouse, Zap } from "lucide-react"

const highlights = [
  {
    icon: Target,
    title: "Brand Strategy",
    desc: "Clear brand message, sharper offer, and the right audience path.",
    color: "from-cyan-400 to-teal-500",
    image: "/assets/estate.jpeg"
  },
  {
    icon: Megaphone,
    title: "Campaign Visibility",
    desc: "Campaigns designed to increase reach, trust, and qualified enquiries.",
    color: "from-cyan-400 to-teal-500",
    image: "/assets/project.jpeg"
  },
  {
    icon: BarChart3,
    title: "Growth Intelligence",
    desc: "Audience insights and lead quality checks that guide better decisions.",
    color: "from-cyan-400 to-teal-500",
    image: "/assets/design.webp"
  },
  {
    icon: Zap,
    title: "Marketing Engine",
    desc: "Strategy, creative direction, visibility, and lead-focused communication in one system.",
    color: "from-cyan-400 to-teal-500",
    image: "/assets/img3.webp"
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
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white pt-16 pb-10 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />

      <div className="container relative z-10 max-w-7xl mx-auto px-3 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-2xl shadow-indigo-500/10 md:rounded-[36px]"
        >
          <div className="grid grid-cols-1 gap-4 p-4 md:gap-8 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
            <div className="rounded-[22px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 md:rounded-[28px] md:p-9">
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-100 bg-white px-4 py-2 text-cyan-700 text-[10px] font-black uppercase tracking-widest shadow-lg shadow-cyan-500/5">
                <RadioTower className="h-4 w-4" />
                <span>About The Brokrs</span>
              </div>

              <div className="mt-5 space-y-3 md:mt-7 md:space-y-5">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-brand-950">
                  Redefining Collaborative
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-500 to-sky-500">
                    Brand Growth.
                  </span>
                </h2>
                <p className="max-w-xl text-sm leading-6 text-brand-600 md:text-lg md:leading-relaxed">
                  The Brokrs is a marketing-first growth company built for brands that need sharper positioning, stronger visibility, and campaign systems that turn attention into qualified business.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative hidden min-h-[360px] overflow-hidden rounded-[28px] border border-cyan-100 bg-gradient-to-br from-white via-cyan-50 to-slate-50 p-6 shadow-xl shadow-cyan-500/10 md:block"
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

          <div className="mx-4 grid grid-cols-3 gap-2 rounded-[20px] border border-slate-200 bg-slate-50/80 p-2 md:mx-8 md:grid-cols-3 md:gap-4 md:rounded-[26px] md:p-4 lg:mx-10">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-2 rounded-2xl bg-white p-3 text-center shadow-lg shadow-brand-500/5 md:flex-row md:gap-4 md:p-5 md:text-left"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 md:h-12 md:w-12 md:rounded-2xl">
                  <metric.icon className="h-4 w-4 md:h-6 md:w-6" />
                </div>
                <div>
                  <div className="text-lg font-black text-brand-950 md:text-2xl">{metric.value}</div>
                  <div className="text-[8px] font-bold uppercase leading-3 tracking-wider text-brand-500 md:text-[10px] md:tracking-widest">{metric.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 p-4 md:mt-10 md:p-8 lg:mt-12 lg:p-10">
            <div className="mb-8 flex flex-col items-center text-center">
              <span className="mb-3 inline-flex rounded-full bg-cyan-50 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-cyan-700">
                Growth Framework
              </span>
              <h3 className="text-2xl md:text-4xl font-display font-bold text-brand-950">
                What We Do<span className="text-cyan-600">.</span>
              </h3>
              <p className="mt-3 max-w-3xl text-xs leading-5 text-brand-600 md:mt-4 md:text-base md:leading-relaxed">
                End-to-end marketing systems that build visibility, generate demand, and drive predictable growth.
              </p>
            </div>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 md:gap-5">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group relative min-h-[172px] overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-xl shadow-brand-500/5 md:min-h-[245px] md:rounded-[28px]"
                >
                  <div className="relative h-20 overflow-hidden md:hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400 opacity-100 md:opacity-0 md:transition-opacity md:group-hover:opacity-100" />
                  <div className={`absolute right-3 top-12 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-slate-950 shadow-lg shadow-cyan-500/20 md:static md:m-6 md:h-14 md:w-14 md:rounded-2xl md:text-white`}>
                    <item.icon className="h-4 w-4 md:h-6 md:w-6" />
                  </div>
                  <div className="p-4 pt-5 md:p-6 md:pt-0">
                    <h4 className="text-sm font-bold text-brand-950 transition-colors group-hover:text-cyan-700 md:mt-2 md:text-xl">{item.title}</h4>
                    <p className="mt-2 text-[11px] leading-4 text-brand-600 md:mt-3 md:text-[15px] md:leading-6">{item.desc}</p>
                  </div>
                  <div className="absolute bottom-4 right-4 hidden h-9 w-9 items-center justify-center rounded-full bg-cyan-50 text-cyan-600 transition-transform group-hover:translate-x-1 group-hover:bg-cyan-500 group-hover:text-white md:flex">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mx-4 mb-5 rounded-[22px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-slate-50 p-4 shadow-xl shadow-cyan-500/10 md:hidden">
            <h3 className="text-2xl font-semibold leading-tight text-[#073b3a]">
              Sharper brands. Stronger growth engines.
            </h3>
            <p className="mt-3 text-sm leading-6 text-brand-600">
              Strategy, creative direction, visibility, and enquiry systems in one practical framework.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white p-3 shadow-lg shadow-cyan-950/5">
                <Globe2 className="h-5 w-5 text-cyan-600" />
                <h4 className="mt-2 text-sm font-bold text-brand-950">Presence</h4>
                <p className="mt-1 text-[11px] leading-4 text-brand-500">Be noticed, trusted, and remembered.</p>
              </div>
              <div className="rounded-2xl bg-white p-3 shadow-lg shadow-cyan-950/5">
                <Handshake className="h-5 w-5 text-cyan-600" />
                <h4 className="mt-2 text-sm font-bold text-brand-950">Partnership</h4>
                <p className="mt-1 text-[11px] leading-4 text-brand-500">Support around visibility and lead quality.</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-2xl bg-slate-950 p-3 text-white">
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-white/80">
                <Image
                  src="/assets/1.webp"
                  alt="DR Puneet Aggarwaal"
                  width={112}
                  height={112}
                  sizes="56px"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold">Dr. Puneet Aggarwaal</h4>
                <p className="text-xs text-white/70">Founder & CEO</p>
              </div>
            </div>
          </div>

          <div className="mx-2 mb-6 hidden rounded-[30px] border border-slate-200 bg-white px-6 py-10 shadow-xl shadow-brand-500/5 md:mx-4 md:block md:px-8 lg:mx-6 lg:px-8 xl:mx-8 xl:px-10">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.16fr_0.98fr_0.78fr] lg:gap-7 xl:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65 }}
                viewport={{ once: true }}
              >
                <h3 className="max-w-[470px] text-3xl font-sans font-semibold leading-[1.02] text-[#073b3a] md:text-[38px] xl:text-[40px]">
                  We build sharper brands and <br />
                  stronger growth engines
                </h3>
                <p className="mt-5 max-w-[360px] text-sm leading-6 text-brand-600">
                  The Brokrs connects strategy, creative direction, visibility, and qualified enquiry systems into one practical growth framework.
                </p>

                <div className="mt-7 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan-200 text-cyan-600">
                      <Globe2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-sans font-semibold text-[#073b3a]">Market Presence</h4>
                      <p className="mt-1.5 max-w-[310px] text-sm leading-6 text-brand-600">
                        Positioning and campaigns that help people notice, trust, and remember your brand.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan-200 text-cyan-600">
                      <Handshake className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-sans font-semibold text-[#073b3a]">Growth Partnership</h4>
                      <p className="mt-1.5 max-w-[310px] text-sm leading-6 text-brand-600">
                        End-to-end marketing support built around visibility, lead quality, and repeatable performance.
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-9 inline-flex h-12 items-center gap-2 rounded-lg bg-cyan-500 px-6 text-xs font-black uppercase tracking-wide text-slate-950 shadow-xl shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-cyan-500/30"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative mx-auto w-full max-w-[440px] lg:max-w-none lg:-translate-y-8"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-[18px] bg-slate-100">
                  <Image
                    src="/assets/img3.webp"
                    alt="Modern brand growth project"
                    width={880}
                    height={1100}
                    sizes="(min-width: 1024px) 32vw, (min-width: 768px) 440px, 100vw"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-11 left-1/2 flex h-36 w-36 -translate-x-1/2 items-center justify-center rounded-full bg-teal-950 text-white shadow-2xl shadow-teal-950/20">
                  <div className="absolute inset-4 rounded-full border border-white/15" />
                  <div className="absolute top-4 text-center text-[8px] font-black uppercase tracking-[0.16em] text-white/85">
                    The Brokrs
                  </div>
                  <Warehouse className="relative z-10 h-16 w-16" />
                  <div className="absolute bottom-4 text-center text-[8px] font-black uppercase tracking-[0.14em] text-cyan-100">
                    Growth Engine
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: 0.16 }}
                viewport={{ once: true }}
                className="mx-auto mt-12 flex min-h-[340px] w-full max-w-[300px] flex-col justify-center rounded-[18px] bg-slate-950 px-7 py-7 text-white shadow-2xl shadow-cyan-500/15 lg:mt-12"
              >
                <div className="h-36 w-36 overflow-hidden rounded-full border-4 border-white/80 bg-white/15">
                  <Image
                    src="/assets/1.webp"
                    alt="DR Puneet Aggarwaal"
                    width={288}
                    height={288}
                    sizes="144px"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h4 className="mt-6 text-lg font-sans font-semibold">Dr. Puneet Aggarwal</h4>
                <p className="mt-1 text-sm font-semibold text-white/90">Founder & CEO</p>
                <p className="mt-6 text-base font-semibold leading-7">
                  We give every brand a sharper voice, a stronger market presence, and a growth engine built to keep performing.
                </p>
                <p
                  className="mt-7 text-3xl font-normal leading-none text-white/90"
                  style={{ fontFamily: "'Brush Script MT', 'Segoe Script', 'Lucida Handwriting', cursive" }}
                >
                  Puneet Aggarwaal
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
