"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Camera,
  Handshake,
  Play
} from "lucide-react"

const galleryCards = [
  {
    title: "Partner stories",
    label: "Photos",
    image: "/assets/project.jpeg",
    rotate: "md:-rotate-6",
    offset: "md:mt-10 lg:mt-24"
  },
  {
    title: "Campaign moments",
    label: "Videos",
    image: "/assets/estate.jpeg",
    rotate: "md:rotate-3",
    offset: "lg:mt-4"
  },
  {
    title: "Member wins",
    label: "Updates",
    image: "/assets/register.webp",
    rotate: "md:-rotate-2",
    offset: "md:mt-16 lg:mt-36"
  },
  {
    title: "Field proof",
    label: "Reels",
    image: "/assets/media1.webp",
    rotate: "md:rotate-6",
    offset: "md:mt-8 lg:mt-14"
  }
]

const partners = [
  { name: "Benefitry", mark: "B", color: "bg-cyan-500" },
  { name: "UrbanNest", mark: "UN", color: "bg-cyan-500" },
  { name: "MediCare+", mark: "M+", color: "bg-cyan-500" },
  { name: "TripLoop", mark: "TL", color: "bg-cyan-500" },
  { name: "Grocerio", mark: "G", color: "bg-cyan-500" },
  { name: "SkillBridge", mark: "SB", color: "bg-cyan-500" }
]

const Services = () => {
  return (
    <section id="services" className="relative overflow-hidden bg-[#eefbff] pt-12 pb-24 text-brand-950 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(34,211,238,0.26),transparent_32%),radial-gradient(circle_at_80%_52%,rgba(14,165,233,0.14),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,47,73,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(8,47,73,0.04)_1px,transparent_1px)] bg-[size:120px_120px] opacity-30 md:opacity-45" />

      <div className="container relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-12 lg:gap-16 items-center mb-14 lg:mb-20">
          <div className="space-y-8">
            <div className="space-y-5">
              <h3 className="text-cyan-700 font-bold uppercase tracking-widest text-sm flex items-center">
                <span className="w-8 h-px bg-cyan-600 mr-4" />
                Brokrs Experience Gallery
              </h3>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-light leading-[1.02] tracking-tight text-brand-950 md:leading-[0.96]">
                Share Your <br />
                <span className="brush-poster-text mt-2 inline-block font-black uppercase">Growth Moments.</span>
              </h2>
              <p className="text-brand-700 text-lg leading-relaxed max-w-xl">
                A community gallery for Brokrs partners and members to share their real experiences through photos, short videos, campaign moments, testimonials, and field updates.
              </p>
            </div>

            <Link
              href="/gallery"
              className="group inline-flex h-14 items-center gap-3 rounded-full border border-cyan-200 bg-white/90 px-6 text-xs font-black uppercase tracking-widest text-cyan-800 shadow-xl shadow-cyan-500/12 transition-all hover:-translate-y-1 hover:bg-cyan-200 hover:text-slate-950"
            >
              Our Gallery
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[430px] overflow-hidden rounded-[28px] border border-cyan-100 bg-white/72 p-4 shadow-2xl shadow-cyan-950/10 backdrop-blur-sm md:min-h-[560px] md:rounded-[36px] md:p-5 lg:min-h-[620px]"
          >
            <div className="absolute bottom-10 right-12 z-0 text-[72px] font-black leading-none text-cyan-950/5 md:text-[120px]">
              BROKRS
            </div>

              <div className="relative z-10 grid h-full grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {galleryCards.map((card, index) => (
                <Link
                  key={card.title}
                  href="/gallery"
                  className={`group relative h-44 overflow-hidden rounded-[10px] bg-white/10 shadow-2xl shadow-black/25 transition-all duration-500 hover:z-20 hover:-translate-y-2 hover:rotate-0 hover:scale-[1.03] md:h-80 md:shadow-black/35 md:hover:-translate-y-3 md:hover:scale-105 ${card.rotate} ${card.offset}`}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(min-width: 1024px) 18vw, 45vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />
                  <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                    <span className="rounded-full bg-black/35 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md">{card.label}</span>
                    {card.label === "Videos" ? <Play className="h-4 w-4 fill-white text-white" /> : <Camera className="h-4 w-4 text-white" />}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-lg font-black leading-tight text-white">{card.title}</p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-cyan-200">Tap to open</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="relative left-1/2 mt-24 w-screen -translate-x-1/2 overflow-hidden border-y border-brand-100 bg-white/75 py-8 shadow-xl shadow-brand-500/5">
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

        .brush-poster-text {
          position: relative;
          z-index: 0;
          padding: 0.08em 0.18em 0.13em;
          color: #ffffff;
          font-family: Impact, Haettenschweiler, "Arial Black", sans-serif;
          letter-spacing: 0.035em;
          line-height: 0.9;
          transform: rotate(-1deg);
          text-shadow:
            2px 2px 0 #0f172a,
            -1px 1px 0 #0f172a,
            0 5px 16px rgba(8, 47, 73, 0.22);
          -webkit-text-stroke: 1px rgba(15, 23, 42, 0.55);
        }

        .brush-poster-text::before {
          content: "";
          position: absolute;
          inset: 0.04em -0.04em 0.02em -0.04em;
          z-index: -1;
          background: #111315;
          transform: skewX(-8deg) rotate(0.5deg);
          border-radius: 0.04em;
        }

        .brush-poster-text::after {
          content: "";
          position: absolute;
          left: 0.12em;
          right: 0.08em;
          bottom: 0.08em;
          z-index: -1;
          height: 0.14em;
          background: #ff4f1f;
          transform: rotate(-2deg);
          border-radius: 999px;
        }

        .brush-gallery-text,
        .brush-gallery-button {
          color: #ffffff;
          font-family: Impact, Haettenschweiler, "Arial Black", sans-serif;
          letter-spacing: 0.03em;
          text-shadow:
            2px 2px 0 #062f3b,
            -1px 1px 0 #062f3b,
            0 5px 16px rgba(8, 47, 73, 0.25);
          -webkit-text-stroke: 1px rgba(8, 47, 73, 0.42);
        }

        .brush-gallery-text {
          transform: rotate(-1deg);
        }

        .brush-gallery-button {
          text-shadow:
            1px 1px 0 #062f3b,
            -1px 1px 0 #062f3b,
            0 4px 12px rgba(8, 47, 73, 0.2);
          -webkit-text-stroke: 0.7px rgba(8, 47, 73, 0.5);
        }
      `}</style>
    </section>
  )
}

export default Services
