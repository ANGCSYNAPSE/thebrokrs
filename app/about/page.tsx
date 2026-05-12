"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Shield, Users, Lightbulb, Target, TrendingUp, CheckCircle2 } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Unwavering Integrity",
      desc: "Every contract and community agreement is built on legal transparency and mutual trust."
    },
    {
      icon: Users,
      title: "Community Synergy",
      desc: "We believe that collective intelligence and pooled resources outperform individual efforts."
    },
    {
      icon: Lightbulb,
      title: "Innovative Growth",
      desc: "Constantly exploring new business frontiers from sustainable farming to tech-driven real estate."
    }
  ]

  return (
    <main className="pt-24 min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-slate-50 py-24 relative overflow-hidden border-b border-brand-100">
        <div className="absolute inset-0 bg-indigo-500/5 blur-[120px] pointer-events-none" />
        <div className="container max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-display font-medium text-brand-950 leading-tight">
              Our Story & <br />
              <span className="text-indigo-600 font-light italic">Mission.</span>
            </h1>
            <p className="text-brand-600 text-lg max-w-2xl mx-auto italic">
              "To empower every individual through a collaborative ecosystem where skills are the primary currency and sustainable growth is the common goal."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Section */}
      <section className="section-padding">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-sm">
                  Our Origins
                </h3>
                <h2 className="text-4xl font-display font-bold text-brand-950 leading-tight">
                  The Foundation of <br />
                  <span className="text-indigo-600">The Brokrs Ecosystem.</span>
                </h2>
              </div>
              <div className="space-y-6 text-brand-700 leading-relaxed text-lg">
                <p>
                  The Brokrs was founded with a singular vision: to democratize access to high-growth business opportunities. We observed that many individuals have the skills but lack the capital, while investors have the capital but lack the ground-level synergy. 
                </p>
                <p>
                  By creating a community-centric platform, we've successfully bridged this gap. Our flagship project in sustainable mushroom farming has already shown how collective land ownership can yield consistent, long-term returns (18% NRI) while building a robust local economy.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="p-6 rounded-2xl bg-brand-50 border border-brand-100">
                  <div className="text-4xl font-display font-bold text-brand-950">10k+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-500 pt-1">Active Community</div>
                </div>
                <div className="p-6 rounded-2xl bg-brand-50 border border-brand-100">
                  <div className="text-4xl font-display font-bold text-brand-950">8+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-500 pt-1">Business Verticals</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-[60px] overflow-hidden shadow-2xl h-[600px] group"
            >
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                alt="Community Collaboration"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-transparent transition-colors" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-brand-50/50">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl font-display font-bold text-brand-950">Our Core Values</h2>
            <p className="text-brand-600">The pillars that define every decision we make and every project we embark upon.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 rounded-[40px] bg-white border border-brand-100 text-center space-y-6 hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-3xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                  <v.icon className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-brand-950">{v.title}</h4>
                <p className="text-brand-600 leading-relaxed text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Land Ownership Focus */}
      <section className="section-padding bg-slate-50">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="p-12 lg:p-20 rounded-[60px] bg-white border border-brand-100 text-brand-950 relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-50/50 blur-[100px] pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
              <div className="space-y-8">
                <h3 className="text-4xl font-display font-bold leading-tight">
                  Why Land Ownership <br />
                  <span className="text-indigo-600">Matters.</span>
                </h3>
                <div className="space-y-4">
                  {[
                    "Intrinsic asset value appreciation.",
                    "Sustainable food production (Mushroom Farming).",
                    "A legacy for future generations.",
                    "Recession-proof investment cluster."
                  ].map((p, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-brand-600">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-50 border border-brand-100 p-10 rounded-[40px]">
                 <div className="text-center space-y-4">
                   <div className="text-6xl font-display font-bold text-indigo-600">18% <span className="text-xl">NRI</span></div>
                   <div className="text-brand-600 text-sm italic">Lifetime Return on Investment</div>
                   <hr className="border-brand-100 my-6" />
                   <p className="text-sm leading-relaxed text-brand-500">
                     Our community model removes the middlemen, ensuring that direct profits from strategic land clusters are shared among members based on participation.
                   </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
