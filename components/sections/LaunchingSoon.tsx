"use client"

import { motion } from "framer-motion"
import {
  Building2,
  Code2,
  Landmark,
  ShieldCheck,
  PieChart,
  Plane,
  ShoppingBag,
  Stethoscope,
  Rocket,
  Users,
  Store
} from "lucide-react"

const categories = [
  {
    title: "Real Estate",
    description: "Community-first property opportunities, verified listings, and guided support for families and investors looking for trusted spaces.",
    icon: Building2,
    color: "text-cyan-700",
    bg: "bg-cyan-50"
  },
  {
    title: "IT & Software",
    description: "Digital tools, automation, and software support that help partner businesses serve their communities with better speed and clarity.",
    icon: Code2,
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  },
  {
    title: "Loan",
    description: "Accessible financial connections designed to help members discover lending options with guidance, transparency, and confidence.",
    icon: Landmark,
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    title: "Insurance",
    description: "Protection-focused partner services that make important insurance choices easier to understand, compare, and act on.",
    icon: ShieldCheck,
    color: "text-rose-600",
    bg: "bg-rose-50"
  },
  {
    title: "Investment",
    description: "Simple investment pathways and education-led partner access for members planning long-term financial growth.",
    icon: PieChart,
    color: "text-amber-600",
    bg: "bg-amber-50"
  },
  {
    title: "Travel",
    description: "Curated travel benefits, group experiences, and partner deals shaped around community convenience and shared savings.",
    icon: Plane,
    color: "text-sky-600",
    bg: "bg-sky-50"
  },
  {
    title: "Grocery",
    description: "Everyday essentials, local vendor access, and useful grocery benefits built to support households and neighborhood businesses.",
    icon: ShoppingBag,
    color: "text-green-600",
    bg: "bg-green-50"
  },
  {
    title: "HealthCare",
    description: "Reliable healthcare connections, wellness benefits, and support services that bring practical care closer to every member.",
    icon: Stethoscope,
    color: "text-teal-600",
    bg: "bg-teal-50"
  },
  {
    title: "Manpower",
    description: "Talent, staffing, and opportunity networks that connect skilled people with growing businesses inside the community.",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "E-Commerce",
    description: "A partner commerce ecosystem for sellers, buyers, and local brands to grow with simpler discovery and smoother digital reach.",
    icon: Store,
    color: "text-violet-600",
    bg: "bg-violet-50"
  }
]

const LaunchingSoon = () => {
  return (
    <section className="py-28 md:py-32 lg:py-40 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/30 rounded-full blur-[100px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-50/30 rounded-full blur-[100px] -ml-64 -mb-64" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 lg:mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold uppercase tracking-widest mb-4"
          >
            <Rocket className="w-4 h-4" />
            <span>Future Horizon</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-950">Launching Soon.</h2>
          <p className="text-brand-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We are expanding our community benefits ecosystem with useful partner services for everyday growth, savings, and support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true }}
              className="group p-6 rounded-[28px] bg-white/85 backdrop-blur-sm border border-brand-100/60 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-500/8 transition-all duration-500 relative flex flex-col h-full hover:-translate-y-2"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:-rotate-3 shadow-sm`}>
                <item.icon className="w-7 h-7" />
              </div>

              <h3 className="text-lg font-bold text-brand-950 mb-3 group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>

              <p className="text-brand-600 text-sm leading-relaxed font-medium">
                {item.description}
              </p>

              <div className="mt-auto pt-6">
                <span className="badge-launching group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <span className="glow-dot !w-1.5 !h-1.5 group-hover:!bg-white" />
                  Expanding Soon
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LaunchingSoon
