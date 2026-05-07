"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const UpcomingProject = () => {
  return (
    <section id="upcoming" className="py-28 md:py-32 lg:py-40 bg-white relative">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-sm flex items-center">
                <span className="w-8 h-px bg-indigo-600 mr-4" />
                Active project
              </h3>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-950 leading-tight">
                Sustainable <br />
                <span className="text-indigo-600">Mushroom Farming.</span>
              </h2>
            </div>

            <p className="text-brand-600 text-lg leading-relaxed">
              Welcome to a unique project where we’re developing large-scale mushroom farming land. You can now own a piece of this land and enjoy stable, long-term returns — without needing to farm it yourself.
            </p>

            <div className="bg-brand-50 rounded-2xl p-8 space-y-4">
              <h4 className="text-xl font-bold text-brand-950">What You Get:</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 mr-3 shrink-0" />
                  <span className="text-brand-800 font-medium">Registered ownership in your name</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 mr-3 shrink-0" />
                  <span className="text-brand-800 font-medium">Earn 18% lifetime returns with yearly growth</span>
                </li>
              </ul>
            </div>

            <p className="text-brand-600 leading-relaxed italic">
              We’re not just offering land — we’re creating a platform for people to fulfill dreams, grow wealth, and be part of a like-minded investor community. Whether you buy one unit or more, this is your chance to invest small and earn for life. Because the best investment on Earth — is still Earth.
            </p>

            <div className="pt-4">
              <Button asChild size="lg" className="rounded-full px-10 h-14 bg-brand-950 text-white font-bold hover:bg-indigo-600 transition-colors shadow-xl group">
                <Link href="#contact">
                  Invest in Your Future
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-[40px] overflow-hidden aspect-square lg:aspect-[4/5] shadow-2xl border border-brand-100/50"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/20 to-transparent z-10" />
            <img src="/assets/mushroom.jpg" alt="Mushroom Farming Project" className="w-full h-full object-cover" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default UpcomingProject
