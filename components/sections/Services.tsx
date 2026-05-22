"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  BadgePercent,
  Clapperboard,
  Handshake,
  Images,
  Megaphone,
  Play,
  Sparkles,
  UsersRound,
  X
} from "lucide-react"

const serviceSteps = [
  {
    icon: Megaphone,
    title: "Campaign",
    description: "Turn business offers into clear, benefit-led campaigns."
  },
  {
    icon: UsersRound,
    title: "Community",
    description: "Build reach through digital channels, referrals, and local touchpoints."
  },
  {
    icon: BadgePercent,
    title: "Benefits",
    description: "Convert attention into enquiries, leads, and measurable business actions."
  }
]

const mediaItems = [
  {
    id: 1,
    type: "video",
    title: "Campaign Overview",
    category: "Videos",
    description: "A short video space for explaining campaign goals, partner offers, and market positioning.",
    src: "/assets/v1.mp4",
    poster: "/assets/estate.jpeg"
  },
  {
    id: 2,
    type: "image",
    title: "Partner Launch Moment",
    category: "Partners",
    description: "Use this gallery card for partner launches, brand announcements, and association highlights.",
    src: "/assets/project.jpeg"
  },
  {
    id: 3,
    type: "image",
    title: "Real Estate Benefit",
    category: "Offers",
    description: "A visual slot for property campaigns, project visibility, and verified opportunity communication.",
    src: "/assets/estate 3.jpeg"
  },
  {
    id: 4,
    type: "image",
    title: "Member Registration",
    category: "Stories",
    description: "A story card for lead capture, onboarding drives, and audience activation.",
    src: "/assets/register.webp"
  },
  {
    id: 5,
    type: "image",
    title: "Trust & Verification",
    category: "Stories",
    description: "A support-focused gallery item for trust building, verification, and customer assistance.",
    src: "/assets/kyc.jpg"
  }
]

const filters = ["All", "Videos", "Offers", "Partners", "Stories"]

const partners = [
  { name: "Benefitry", mark: "B", color: "bg-cyan-500" },
  { name: "UrbanNest", mark: "UN", color: "bg-cyan-500" },
  { name: "MediCare+", mark: "M+", color: "bg-cyan-500" },
  { name: "TripLoop", mark: "TL", color: "bg-cyan-500" },
  { name: "Grocerio", mark: "G", color: "bg-cyan-500" },
  { name: "SkillBridge", mark: "SB", color: "bg-cyan-500" }
]

type MediaItem = (typeof mediaItems)[number]

const Services = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)

  const visibleMedia = useMemo(() => {
    if (activeFilter === "All") {
      return mediaItems
    }

    return mediaItems.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  const featuredMedia = visibleMedia[0] ?? mediaItems[0]
  const stockWindowItems = mediaItems.filter((item) => item.id !== featuredMedia.id).slice(0, 4)

  return (
    <section id="services" className="pt-12 pb-24 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32 bg-section-alt relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-12 lg:gap-16 items-center mb-12 lg:mb-16">
          <div className="space-y-7">
            <div className="space-y-4">
              <h3 className="text-cyan-700 font-bold uppercase tracking-widest text-sm flex items-center">
                <span className="w-8 h-px bg-cyan-600 mr-4" />
                Our Services
              </h3>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-950 leading-tight">
                Campaign Systems <br />
                <span className="text-cyan-600">Built For Visibility.</span>
              </h2>
              <p className="text-brand-600 text-lg leading-relaxed max-w-xl">
                We connect strategy, creative assets, media, and partner communication so every offer becomes easier to understand, promote, and act on.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {serviceSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-brand-100 bg-white p-3 shadow-lg shadow-brand-500/5 sm:p-4"
                >
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 sm:mb-4 sm:h-10 sm:w-10">
                    <step.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <h4 className="text-xs font-bold text-brand-950 sm:text-base">{step.title}</h4>
                  <p className="mt-1.5 text-[10px] leading-4 text-brand-500 sm:mt-2 sm:text-xs sm:leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[30px] border border-slate-200 bg-slate-50 p-4 shadow-2xl shadow-slate-300/40"
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-cyan-700 text-xs font-bold uppercase tracking-widest">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-cyan-700 shadow-sm">
                  <Clapperboard className="h-3.5 w-3.5" />
                </span>
                Media Hub
                <Images className="h-3.5 w-3.5 text-cyan-600" />
              </div>

              <div className="flex flex-wrap gap-2 rounded-full bg-white p-1 shadow-sm">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                      activeFilter === filter
                        ? "bg-cyan-500 text-slate-950"
                        : "bg-transparent text-brand-500 hover:bg-cyan-50 hover:text-cyan-700"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedMedia(featuredMedia)}
              className="group relative block h-[280px] w-full overflow-hidden rounded-[24px] bg-brand-950 text-left"
            >
              <Image
                src={featuredMedia.type === "video" ? featuredMedia.poster ?? featuredMedia.src : featuredMedia.src}
                alt={featuredMedia.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/25 to-transparent" />
              <div className="absolute left-5 right-5 bottom-5 flex items-end justify-between gap-4">
                <div>
                  <span className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                    {featuredMedia.category}
                  </span>
                  <h4 className="text-2xl font-display font-bold text-white">{featuredMedia.title}</h4>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/75">{featuredMedia.description}</p>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-brand-950 shadow-xl">
                  {featuredMedia.type === "video" ? <Play className="h-5 w-5 fill-current" /> : <Images className="h-5 w-5" />}
                </span>
              </div>
            </button>

            <div className="mt-4 rounded-[22px] bg-white p-2 shadow-inner shadow-slate-200/70">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {stockWindowItems.map((item) => {
                const thumbnailSrc = item.type === "video" ? item.poster ?? item.src : item.src

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedMedia(item)}
                    className="group relative h-20 overflow-hidden rounded-2xl bg-brand-950 text-left sm:h-24"
                  >
                    <Image
                      src={thumbnailSrc}
                      alt={item.title}
                      fill
                      sizes="(min-width: 640px) 25vw, 50vw"
                      className="h-full w-full object-cover opacity-75 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 to-transparent" />
                    <span className="absolute bottom-3 left-3 right-3 text-xs font-bold text-white">{item.title}</span>
                  </button>
                )
              })}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative left-1/2 mt-32 w-screen -translate-x-1/2 overflow-hidden border-y border-brand-100 bg-white/75 py-8 shadow-xl shadow-brand-500/5">
          <div className="mb-7 flex items-center justify-center gap-3 text-cyan-700 text-xs font-black uppercase tracking-widest">
            <Handshake className="h-4 w-4" />
            <span>Association With</span>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-white via-white/80 to-transparent" />

            <div className="flex w-max animate-logo-marquee items-center gap-14 px-8">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex min-w-48 items-center justify-center gap-4 opacity-65 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  aria-label={partner.name}
                >
                  <span className={`flex h-12 w-12 items-center justify-center rounded-full ${partner.color} text-white text-sm font-black tracking-tight shadow-lg shadow-brand-500/10`}>
                    {partner.mark}
                  </span>
                  <span className="text-xl font-black text-brand-500 tracking-wide">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-950/80 p-4 backdrop-blur-md"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedMedia(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand-950 shadow-xl transition-transform hover:scale-105"
                aria-label="Close media"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr]">
                <div className="min-h-[320px] bg-brand-950">
                  {selectedMedia.type === "video" ? (
                    <video
                      src={selectedMedia.src}
                      poster={selectedMedia.poster}
                      controls
                      autoPlay
                      className="h-full max-h-[72vh] w-full object-contain"
                    />
                  ) : (
                    <Image
                      src={selectedMedia.src}
                      alt={selectedMedia.title}
                      width={1200}
                      height={800}
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className="h-full max-h-[72vh] w-full object-contain"
                    />
                  )}
                </div>

                <div className="p-8">
                  <span className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-700">
                    {selectedMedia.category}
                  </span>
                  <h4 className="mt-5 text-3xl font-display font-bold text-brand-950">{selectedMedia.title}</h4>
                  <p className="mt-4 text-sm leading-relaxed text-brand-600">{selectedMedia.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes logo-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-logo-marquee {
          animation: logo-marquee 22s linear infinite;
        }

        .animate-logo-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default Services
