"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const UpcomingProject = () => {
  return (
    <section id="upcoming" className="pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-20 bg-white relative">
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
              <h3 className="text-cyan-700 font-bold uppercase tracking-widest text-sm flex items-center">
                <span className="w-8 h-px bg-cyan-600 mr-4" />
                Active Growth Project
              </h3>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-950 leading-tight">
                Sustainable <br />
                <span className="text-cyan-600">Mushroom Farming.</span>
              </h2>
            </div>

            <p className="text-brand-600 text-lg leading-relaxed">
              A live growth vertical promoted and managed through The Brokrs marketing ecosystem. We handle positioning, visibility, investor communication, and campaign support for sustainable mushroom farming so the opportunity is clear, trusted, and ready to scale.
            </p>

            <div className="bg-brand-50 rounded-2xl p-8 space-y-4">
              <h4 className="text-xl font-bold text-brand-950">What We Build Around It:</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-600 mr-3 shrink-0" />
                  <span className="text-brand-800 font-medium">Clear project positioning backed by structured campaign visibility</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-600 mr-3 shrink-0" />
                  <span className="text-brand-800 font-medium">Professionally presented growth opportunity with long-term return focus</span>
                </li>
              </ul>
            </div>

            <p className="text-brand-600 leading-relaxed italic">
              This is more than a project listing. It is a brand-backed growth campaign built to connect sustainable business, community confidence, and long-term value through sharper communication and consistent market presence.
            </p>

            <div className="pt-4">
              <Button asChild size="lg" className="rounded-full px-10 h-14 bg-brand-950 text-white font-bold hover:bg-cyan-500 hover:text-slate-950 transition-colors shadow-xl group">
                <Link href="#contact">
                  Discuss This Project
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
            <Image
              src="/assets/mushroom.jpg"
              alt="Mushroom Farming Project"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default UpcomingProject
