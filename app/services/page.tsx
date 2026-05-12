"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Building, Home, GraduationCap, HeartPulse, Factory, Sparkles, Layout, Store, Wrench, CheckCircle2 } from "lucide-react"

export default function ServicesPage() {
  const serviceCategories = [
    {
      icon: Building,
      title: "Commercial Excellence",
      items: ["Office Complexes", "Retail Centers", "Banks & Financial Hubs", "Hospitality Units"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Home,
      title: "Residential Luxury",
      items: ["Premium Villas", "Modern Apartments", "Community Living", "Smart Homes"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: HeartPulse,
      title: "Healthcare Infrastructure",
      items: ["Specialized Clinics", "Diagnostic Centers", "General Hospitals", "Sterile Labs"],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: GraduationCap,
      title: "Educational Spaces",
      items: ["Next-Gen Schools", "University Campuses", "Learning Hubs", "Research Facilities"],
      image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Factory,
      title: "Industrial & Warehousing",
      items: ["Cold Storage Units", "Manufacturing Plants", "Logistics Centers", "Industrial Sheds"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Wrench,
      title: "Renovation & Remodeling",
      items: ["Structural Overhaul", "Interior Refresh", "Energy Retrofitting", "Heritage Restoration"],
      image: "https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80&w=800"
    }
  ]

  return (
    <main className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-brand-950 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 blur-[120px] pointer-events-none" />
        <div className="container max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
              Our Professional <br />
              <span className="text-indigo-400">Expertise.</span>
            </h1>
            <p className="text-brand-300 text-lg max-w-2xl mx-auto">
              From foundational concepts to industrial-scale delivery, we provide end-to-end architectural and strategic consulting services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container max-w-7xl mx-auto px-6 text-center space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
            {serviceCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-10 rounded-[40px] bg-brand-50/50 border border-brand-100 hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden relative"
              >
                 <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-tr from-indigo-500 to-transparent pointer-events-none" />
                
                 <div className="space-y-8 relative z-10">
                   <div className="w-20 h-20 rounded-3xl bg-indigo-600 text-white flex items-center justify-center shadow-xl shadow-indigo-600/20 group-hover:scale-110 transition-transform">
                     <cat.icon className="w-10 h-10" />
                   </div>
                   
                   <div className="space-y-6">
                     <h3 className="text-2xl font-display font-bold text-brand-950 group-hover:text-indigo-600 transition-colors">
                       {cat.title}
                     </h3>
                     <ul className="space-y-3">
                       {cat.items.map((item, idx) => (
                         <li key={idx} className="flex items-center space-x-3 text-brand-700">
                           <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                           <span className="text-sm font-medium">{item}</span>
                         </li>
                       ))}
                     </ul>
                   </div>
                 </div>
              </motion.div>
            ))}
          </div>

          {/* Vastu & Consult Detail */}
          <div className="p-12 lg:p-20 rounded-[60px] bg-brand-950 text-white relative overflow-hidden text-left shadow-2xl">
             <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
               <Sparkles className="w-48 h-48 text-indigo-600" />
             </div>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-8 relative z-10">
                 <div className="space-y-4">
                   <h3 className="text-indigo-400 font-bold uppercase tracking-widest text-xs">Tradition Meets Modernity</h3>
                   <h2 className="text-4xl font-display font-bold">Vastu Shastra & <br /><span className="text-indigo-400">Consultancy Services</span></h2>
                 </div>
                 <p className="text-brand-300 text-lg leading-relaxed">
                   We integrate ancient Vastu principles with contemporary structural design to create spaces that promote well-being, success, and prosperity. Our expert consultants provide detailed energy flow audits for homes, offices, and industrial plants.
                 </p>
                 <div className="pt-4">
                    <button className="h-16 px-10 rounded-2xl bg-indigo-600 font-bold text-white shadow-xl hover:bg-indigo-700 transition-all flex items-center group">
                      Book a Consultant
                      <CheckCircle2 className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
                    </button>
                 </div>
               </div>
               
               <div className="relative rounded-[40px] overflow-hidden shadow-2xl h-[400px]">
                  <Image
                    src="https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?auto=format&fit=crop&q=80&w=800"
                    alt="Vastu Consultation"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-indigo-900/10" />
               </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  )
}
