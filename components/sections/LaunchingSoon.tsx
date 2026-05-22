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
    description: "Brand visibility, launch campaigns, and enquiry-focused communication for property opportunities.",
    icon: Building2,
    color: "text-cyan-700",
    bg: "bg-cyan-50"
  },
  {
    title: "IT & Software",
    description: "Positioning, product messaging, and demand campaigns for software and digital service brands.",
    icon: Code2,
    color: "text-cyan-700",
    bg: "bg-cyan-50"
  },
  {
    title: "Loan",
    description: "Trust-first campaigns that explain lending offers clearly and drive qualified financial enquiries.",
    icon: Landmark,
    color: "text-cyan-700",
    bg: "bg-cyan-50"
  },
  {
    title: "Insurance",
    description: "Awareness and conversion journeys that make protection-focused offers easier to understand and act on.",
    icon: ShieldCheck,
    color: "text-cyan-700",
    bg: "bg-cyan-50"
  },
  {
    title: "Investment",
    description: "Education-led marketing flows that present investment opportunities with clarity and confidence.",
    icon: PieChart,
    color: "text-cyan-700",
    bg: "bg-cyan-50"
  },
  {
    title: "Travel",
    description: "Promotional campaigns for travel offers, packages, and partner experiences built for discovery.",
    icon: Plane,
    color: "text-cyan-700",
    bg: "bg-cyan-50"
  },
  {
    title: "Grocery",
    description: "Local demand campaigns for everyday essentials, partner stores, and recurring household needs.",
    icon: ShoppingBag,
    color: "text-cyan-700",
    bg: "bg-cyan-50"
  },
  {
    title: "HealthCare",
    description: "Trust-led visibility for healthcare partners, wellness services, and support-driven offers.",
    icon: Stethoscope,
    color: "text-cyan-700",
    bg: "bg-cyan-50"
  },
  {
    title: "Manpower",
    description: "Recruitment and staffing campaign support that connects talent demand with credible outreach.",
    icon: Users,
    color: "text-cyan-700",
    bg: "bg-cyan-50"
  },
  {
    title: "E-Commerce",
    description: "Seller-focused visibility and campaign support for commerce brands ready to scale online.",
    icon: Store,
    color: "text-cyan-700",
    bg: "bg-cyan-50"
  }
]

const LaunchingSoon = () => {
  return (
    <section className="pt-14 pb-24 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-50/40 rounded-full blur-[100px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-50/30 rounded-full blur-[100px] -ml-64 -mb-64" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 lg:mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-bold uppercase tracking-widest mb-4"
          >
            <Rocket className="w-4 h-4" />
            <span>Future Horizon</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-950">Launching Soon.</h2>
          <p className="text-brand-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We are preparing marketing verticals across high-demand sectors, each shaped with clear messaging, partner visibility, and campaign-ready positioning.
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
              className="group p-6 rounded-[28px] bg-white/85 backdrop-blur-sm border border-brand-100/60 hover:border-cyan-300 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 relative flex flex-col h-full hover:-translate-y-2"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:-rotate-3 shadow-sm`}>
                <item.icon className="w-7 h-7" />
              </div>

              <h3 className="text-lg font-bold text-brand-950 mb-3 group-hover:text-cyan-700 transition-colors">
                {item.title}
              </h3>

              <p className="text-brand-600 text-sm leading-relaxed font-medium">
                {item.description}
              </p>

              <div className="mt-auto pt-6">
                <span className="badge-launching group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
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
