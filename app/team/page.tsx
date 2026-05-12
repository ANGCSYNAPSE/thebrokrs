"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Mail, Twitter, Globe, ArrowRight, UserPlus } from "lucide-react"

export default function TeamPage() {
  const leadership = [
    {
      name: "Dr. Puneet Aggarwal",
      role: "CMD & Founder",
      bio: "A visionary leader with over 20 years of experience in strategic land acquisition and corporate growth.",
      image: "https://thebrokrs.co.in/wp-content/uploads/2025/07/1.png"
    },
    {
      name: "Akshay",
      role: "Chief Executive Officer",
      bio: "Driving the operational excellence and community-centric business model of The Brokrs.",
      image: "https://thebrokrs.co.in/wp-content/uploads/2025/07/2.png"
    }
  ]

  const departments = [
    {
      name: "Ravinder Singh",
      role: "Vice President",
      image: "https://thebrokrs.co.in/wp-content/uploads/2025/07/3.png"
    },
    {
      name: "Shubham Mangla",
      role: "HOD - Grocery Division",
      image: "https://thebrokrs.co.in/wp-content/uploads/2025/07/4.png"
    },
    {
      name: "Suman Kumari",
      role: "HOD - Client Relations",
      image: "https://thebrokrs.co.in/wp-content/uploads/2025/06/51e014dc-81a1-4410-8ba6-b08f180bcd28-e1752666418556.jpeg"
    },
    {
      name: "Divya Singh",
      role: "CMO - Network Marketing",
      image: "https://thebrokrs.co.in/wp-content/uploads/2025/06/faa8e71d-0e7a-4d06-b9bc-4b8680551c62-e1752666449430.jpeg"
    },
    {
      name: "Manju Yadav",
      role: "Strategy & Planning",
      image: "https://thebrokrs.co.in/wp-content/uploads/2025/06/3bb1aa58-de83-4f8b-ae8b-b420467916fc-e1752666467923.jpeg"
    }
  ]

  return (
    <main className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-brand-950 py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubic-block.png')] opacity-10 pointer-events-none" />
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
              Meet the <br />
              <span className="text-indigo-400">Architects of Change.</span>
            </h1>
            <p className="text-brand-300 text-lg max-w-2xl mx-auto italic">
              "Individually we are a drop, together we are an ocean. Our team is dedicated to your collective success."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-xs">Executive Council</h3>
            <h2 className="text-4xl font-display font-bold text-brand-950">Visionary Leadership</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
            {leadership.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="group p-10 rounded-[60px] bg-brand-50 border border-brand-100 flex flex-col items-center text-center space-y-8 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-56 h-56 rounded-full border-8 border-white overflow-hidden shadow-2xl relative">
                  <Image
                    src={member.image} 
                    alt={member.name} 
                    width={448}
                    height={448}
                    sizes="224px"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                    }}
                  />
                  <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-transparent transition-colors" />
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-3xl font-display font-bold text-brand-950 group-hover:text-indigo-600 transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs pb-4 border-b border-brand-200">
                    {member.role}
                  </p>
                  <p className="text-brand-600 italic text-sm leading-relaxed max-w-sm">
                    {member.bio}
                  </p>
                </div>

                <div className="flex space-x-4">
                  {[Linkedin, Mail, Twitter].map((Icon, idx) => (
                    <button key={idx} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-400 hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                      <Icon className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Heads */}
      <section className="section-padding bg-brand-50/50">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-xs">Vertical Experts</h3>
            <h2 className="text-4xl font-display font-bold text-brand-950">Department Heads</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[40px] bg-white border border-brand-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center space-y-6"
              >
                 <div className="w-32 h-32 rounded-3xl border-4 border-brand-50 overflow-hidden shadow-xl">
                   <Image
                    src={member.image} 
                    alt={member.name} 
                    width={256}
                    height={256}
                    sizes="128px"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400"
                    }}
                  />
                 </div>
                 
                 <div className="space-y-1">
                   <h4 className="text-xl font-bold text-brand-950 group-hover:text-indigo-600 transition-colors">
                     {member.name}
                   </h4>
                   <p className="text-brand-500 text-[10px] font-bold uppercase tracking-[0.2em] italic">
                     {member.role}
                   </p>
                 </div>
                 
                 <div className="pt-4 flex items-center space-x-2 text-indigo-400 opacity-50 group-hover:opacity-100 transition-opacity">
                    <Globe className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Connect Internally</span>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="section-padding bg-white">
        <div className="container max-w-7xl mx-auto px-6">
           <div className="p-12 lg:p-24 rounded-[60px] bg-indigo-600 text-white relative overflow-hidden group text-center shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-700 to-indigo-500 pointer-events-none" />
              
              <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
                <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
                  <UserPlus className="w-10 h-10 text-white" />
                </div>
                
                <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
                  Be the Future <br />
                  <span className="text-gold-400">of Global Logistics.</span>
                </h2>
                
                <p className="text-indigo-100 text-lg leading-relaxed">
                  We are always looking for ambitious leaders, thinkers, and builders to join our core team and help expand our business clusters.
                </p>
                
                <div className="pt-6">
                  <button className="h-16 px-12 rounded-2xl bg-white text-indigo-700 font-bold hover:bg-brand-50 transition-all shadow-2xl flex items-center mx-auto group/btn">
                    View Open Positions
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                  </button>
                </div>
              </div>

              {/* Float decor */}
              <div className="absolute top-1/4 -left-20 w-80 h-80 bg-white/5 blur-[100px] rounded-full" />
              <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gold-400/10 blur-[100px] rounded-full" />
           </div>
        </div>
      </section>
    </main>
  )
}
