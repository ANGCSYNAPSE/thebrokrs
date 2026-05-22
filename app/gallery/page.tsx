"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Camera, Film, MoreVertical, Play, Sparkles } from "lucide-react"

const galleryItems = [
  {
    title: "Launch day walk-through",
    uploader: "Aarav Mehta",
    role: "Partner",
    date: "18 Oct 2026",
    type: "video",
    image: "/assets/estate.jpeg",
    src: "/assets/v1.mp4",
    tall: false
  },
  {
    title: "Client visit moment",
    uploader: "Riya Sharma",
    role: "Member",
    date: "18 Oct 2026",
    type: "photo",
    image: "/assets/project.jpeg",
    tall: true
  },
  {
    title: "Registration proof",
    uploader: "Kabir Sethi",
    role: "Field Team",
    date: "17 Oct 2026",
    type: "photo",
    image: "/assets/register.webp",
    tall: false
  },
  {
    title: "Verified handover",
    uploader: "Nisha Rao",
    role: "Support",
    date: "17 Oct 2026",
    type: "photo",
    image: "/assets/kyc.jpg",
    tall: true
  },
  {
    title: "Campaign desk",
    uploader: "Dev Malhotra",
    role: "Brokrs Team",
    date: "16 Oct 2026",
    type: "photo",
    image: "/assets/design.webp",
    tall: false
  },
  {
    title: "Property story",
    uploader: "Ananya Jain",
    role: "Partner",
    date: "16 Oct 2026",
    type: "photo",
    image: "/assets/estate 3.jpeg",
    tall: false
  },
  {
    title: "Media highlight",
    uploader: "The Brokrs",
    role: "Admin",
    date: "15 Oct 2026",
    type: "video",
    image: "/assets/media1.webp",
    src: "/assets/WhatsApp-Video-2025-06-23-at-1.57.47-PM.mp4",
    tall: true
  },
  {
    title: "Plan discussion",
    uploader: "Ishan Verma",
    role: "Advisor",
    date: "15 Oct 2026",
    type: "photo",
    image: "/assets/plans.jpg",
    tall: false
  },
  {
    title: "Growth room",
    uploader: "Priya Nair",
    role: "Campaign Lead",
    date: "14 Oct 2026",
    type: "photo",
    image: "/assets/img3.webp",
    tall: true
  },
  {
    title: "Offer showcase",
    uploader: "Rohan Kapoor",
    role: "Partner",
    date: "14 Oct 2026",
    type: "photo",
    image: "/assets/property.webp",
    tall: false
  }
]

const avatarColors = ["bg-cyan-300", "bg-sky-300", "bg-teal-300", "bg-emerald-300", "bg-blue-300"]

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"photo" | "video">("photo")
  const videos = galleryItems.filter((item) => item.type === "video").length
  const photos = galleryItems.filter((item) => item.type === "photo").length
  const activeItems = galleryItems.filter((item) => item.type === activeTab)
  const reelItems = activeItems.concat(activeItems.slice(0, Math.min(6, activeItems.length)))
  const isVideoTab = activeTab === "video"

  return (
    <main className="min-h-screen bg-[#eefbff] text-brand-950">
      <section className="relative overflow-hidden border-b border-cyan-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(34,211,238,0.22),transparent_34%),radial-gradient(circle_at_82%_45%,rgba(14,165,233,0.14),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,47,73,0.05)_1px,transparent_1px)] bg-[size:92px_92px] opacity-35" />

        <div className="container relative z-10 mx-auto max-w-7xl px-6 pb-12 pt-28 md:pb-16 md:pt-32">
          <div className="mb-9 flex items-center justify-between gap-4">
            <Link href="/#services" className="inline-flex h-11 items-center gap-2 rounded-full bg-white/90 px-4 text-xs font-black uppercase tracking-widest text-cyan-800 shadow-lg shadow-cyan-950/5 backdrop-blur-md transition hover:bg-cyan-500 hover:text-slate-950">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-cyan-800/70">
              <span className="inline-flex items-center gap-2"><Film className="h-3.5 w-3.5" /> {videos} Videos</span>
              <span className="inline-flex items-center gap-2"><Camera className="h-3.5 w-3.5" /> {photos} Photos</span>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-cyan-700">The Brokrs Community</p>
              <h1 className="gallery-poster-title mt-4 inline-block text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                Photo <span className="block">Gallery</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-brand-700 md:text-lg">
                A reel archive of member experiences, partner uploads, campaign proofs, field videos, and real growth moments shared with The Brokrs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative h-[360px] overflow-hidden rounded-[36px] border border-cyan-100 bg-[#fff7db] shadow-2xl shadow-cyan-950/10"
            >
              <div className="absolute -left-10 top-8 h-44 w-44 rounded-full bg-cyan-200/65 blur-2xl" />
              <div className="absolute -right-12 bottom-2 h-52 w-52 rounded-full bg-orange-200/70 blur-2xl" />

              <div className="pointer-events-none absolute right-4 top-5 z-10 grid grid-cols-2 gap-2 md:hidden">
                {[
                  { label: "Photos", icon: Camera, tone: "bg-cyan-400" },
                  { label: "Stories", icon: Sparkles, tone: "bg-orange-300" },
                  { label: "Videos", icon: Play, tone: "bg-slate-950 text-white" }
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.label}
                      className={`flex h-14 w-14 flex-col items-center justify-center rounded-2xl ${item.tone} text-[8px] font-black uppercase tracking-wider text-slate-950 shadow-xl shadow-cyan-950/10 ${index === 2 ? "col-span-2 ml-auto" : ""}`}
                    >
                      <Icon className="mb-1 h-4 w-4" />
                      {item.label}
                    </div>
                  )
                })}
              </div>

              <div className="gallery-people pointer-events-none absolute right-5 top-2 z-10 hidden h-60 w-[50%] origin-top-right md:block md:scale-100">
                {[
                  { hair: "bg-orange-400", accent: "bg-sky-300", delay: "0s", label: "Photos", position: "left-[0%] top-[72px] rotate-[-8deg]" },
                  { hair: "bg-rose-400", accent: "bg-orange-300", delay: "0.28s", label: "Stories", position: "left-[56%] top-0 rotate-[7deg]" },
                  { hair: "bg-sky-400", accent: "bg-yellow-300", delay: "0.56s", label: "Videos", position: "left-[-22%] top-[154px] rotate-[5deg]" }
                ].map((person) => (
                  <div key={person.label} className={`gallery-person absolute h-40 w-20 md:h-44 md:w-24 ${person.position}`} style={{ animationDelay: person.delay }}>
                    <div className={`absolute left-8 top-0 h-9 w-10 rounded-t-full ${person.hair}`} />
                    <div className="absolute left-9 top-7 h-9 w-9 rounded-full bg-slate-950 ring-4 ring-white" />
                    <div className="absolute left-11 top-12 h-1.5 w-1.5 rounded-full bg-white" />
                    <div className="absolute left-[54px] top-12 h-1.5 w-1.5 rounded-full bg-white" />
                    <div className="absolute left-[49px] top-[58px] h-1 w-3 rounded-full bg-white" />
                    <div className="absolute left-8 top-[70px] h-20 w-12 rounded-[24px] bg-slate-950 ring-4 ring-white" />
                    <div className={`absolute left-3 top-[76px] h-12 w-8 -rotate-[30deg] rounded-full ${person.accent}`} />
                    <div className={`absolute right-3 top-[74px] h-12 w-8 rotate-[35deg] rounded-full ${person.accent}`} />
                    <div className="absolute left-8 top-[140px] h-12 w-4 -rotate-[20deg] rounded-full bg-slate-950 ring-2 ring-white" />
                    <div className="absolute right-8 top-[140px] h-12 w-4 rotate-[20deg] rounded-full bg-slate-950 ring-2 ring-white" />
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-white px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-cyan-800 shadow-lg">
                      {person.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-6 left-5 right-5 z-20 rounded-[26px] bg-[#fff7db]/88 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:bottom-7 sm:left-6 sm:right-[50%] sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-0 md:left-7">
                <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-cyan-800 shadow-sm">Community Uploads</span>
                <h2 className="mt-4 max-w-[340px] text-2xl font-black leading-tight text-slate-950 md:text-3xl">Photos, videos, and real Brokrs stories in one living gallery.</h2>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-3 py-8 md:px-6 md:py-12">
        <div className={`mx-auto max-w-[520px] overflow-hidden rounded-[34px] border shadow-2xl md:max-w-6xl md:rounded-[44px] ${
          isVideoTab
            ? "border-slate-800 bg-slate-950 shadow-slate-950/25"
            : "border-cyan-100 bg-white/88 shadow-cyan-950/10"
        }`}>
          <div className={`sticky top-0 z-20 flex items-center justify-between border-b px-4 py-4 backdrop-blur-xl md:px-6 ${
            isVideoTab
              ? "border-white/10 bg-slate-950/95 text-white"
              : "border-cyan-100 bg-white/95 text-brand-950"
          }`}>
            <div className="flex items-center gap-3">
              <Link href="/#services" aria-label="Back to home" className={`flex h-9 w-9 items-center justify-center rounded-full ${
                isVideoTab ? "bg-white/10 text-white" : "bg-cyan-50 text-cyan-800"
              }`}>
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <div>
                <h2 className="text-sm font-black md:text-base">{isVideoTab ? "Video Reels" : "Photo Gallery"}</h2>
                <p className={`text-[10px] font-bold uppercase tracking-widest ${isVideoTab ? "text-cyan-200/70" : "text-cyan-700/70"}`}>Shared experiences</p>
              </div>
            </div>
            <MoreVertical className={`h-5 w-5 ${isVideoTab ? "text-white/65" : "text-cyan-800/65"}`} />
          </div>

          <div className={`flex items-center justify-center gap-3 border-b px-4 py-3 text-[10px] font-black uppercase tracking-widest ${
            isVideoTab
              ? "border-white/10 bg-white/[0.04] text-white/60"
              : "border-cyan-100 bg-cyan-50/70 text-cyan-800/70"
          }`}>
            <button
              type="button"
              onClick={() => setActiveTab("photo")}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 transition-all ${
                activeTab === "photo"
                  ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20"
                  : isVideoTab
                    ? "bg-white/8 text-white/65 hover:bg-white/12"
                    : "bg-white text-cyan-800 hover:bg-cyan-100"
              }`}
            >
              <Camera className="h-3.5 w-3.5" /> {photos} Photos
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("video")}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 transition-all ${
                activeTab === "video"
                  ? "bg-slate-950 text-cyan-200 shadow-lg shadow-slate-950/20"
                  : "bg-white text-cyan-800 hover:bg-cyan-100"
              }`}
            >
              <Film className="h-3.5 w-3.5" /> {videos} Videos
            </button>
          </div>

          <div className="gallery-reel max-h-[760px] overflow-y-auto px-3 py-5 md:max-h-[900px] md:px-5">
            <p className={`mb-3 text-[10px] font-black uppercase tracking-widest ${isVideoTab ? "text-cyan-200/50" : "text-cyan-800/55"}`}>
              {isVideoTab ? "Video Reels" : "Photo Uploads"}
            </p>
            <div className={`${isVideoTab ? "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3" : "columns-2 gap-3 md:columns-4 md:gap-4"}`}>
              {reelItems.map((item, index) => (
                <motion.article
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: (index % 6) * 0.03 }}
                  viewport={{ once: true, margin: "-40px" }}
                  className={`group relative break-inside-avoid overflow-hidden rounded-[16px] ${
                    isVideoTab
                      ? "h-[260px] bg-slate-900 shadow-xl shadow-black/20 md:h-[320px]"
                      : `mb-3 bg-cyan-50 shadow-xl shadow-cyan-950/10 md:mb-4 ${item.tall ? "h-[248px] md:h-[360px]" : "h-[170px] md:h-[250px]"}`
                  }`}
                >
                  {item.type === "video" && item.src ? (
                    <video src={item.src} poster={item.image} muted loop playsInline className="h-full w-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <Image src={item.image} alt={item.title} fill sizes="(min-width: 768px) 24vw, 50vw" className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                  {item.type === "video" && (
                    <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/18 text-white backdrop-blur-md">
                      <Play className="h-4 w-4 fill-white" />
                    </span>
                  )}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="mb-2 flex items-center gap-2">
                      <span className={`flex h-7 w-7 items-center justify-center rounded-full ${avatarColors[index % avatarColors.length]} text-[10px] font-black text-slate-950`}>
                        {item.uploader.slice(0, 1)}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-xs font-black text-white">{item.uploader}</p>
                        <p className="truncate text-[9px] font-semibold text-white/50">{item.role}</p>
                      </div>
                    </div>
                    <h3 className="line-clamp-2 text-sm font-black leading-tight text-white">{item.title}</h3>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .gallery-reel::-webkit-scrollbar {
          width: 4px;
        }

        .gallery-reel::-webkit-scrollbar-track {
          background: rgba(8, 145, 178, 0.08);
        }

        .gallery-reel::-webkit-scrollbar-thumb {
          background: rgba(34, 211, 238, 0.7);
          border-radius: 999px;
        }

        @keyframes gallery-person-float {
          0%, 100% {
            transform: translateY(0) rotate(-1deg);
          }
          50% {
            transform: translateY(-14px) rotate(2deg);
          }
        }

        .gallery-person {
          animation: gallery-person-float 3.4s ease-in-out infinite;
        }

        .gallery-poster-title {
          position: relative;
          z-index: 0;
          padding: 0.08em 0.18em 0.13em;
          color: #ffffff;
          font-family: Impact, Haettenschweiler, "Arial Black", sans-serif;
          letter-spacing: 0.035em;
          transform: rotate(-1deg);
          text-shadow:
            2px 2px 0 #062f3b,
            -1px 1px 0 #062f3b,
            0 5px 16px rgba(8, 47, 73, 0.22);
          -webkit-text-stroke: 1px rgba(8, 47, 73, 0.5);
        }

        .gallery-poster-title::before {
          content: "";
          position: absolute;
          inset: 0.04em -0.04em 0.02em -0.04em;
          z-index: -1;
          background: #111315;
          transform: skewX(-8deg) rotate(0.5deg);
          border-radius: 0.04em;
        }

        .gallery-poster-title::after {
          content: "";
          position: absolute;
          left: 0.14em;
          right: 0.1em;
          bottom: 0.09em;
          z-index: -1;
          height: 0.13em;
          background: #ff4f1f;
          transform: rotate(-2deg);
          border-radius: 999px;
        }
      `}</style>
    </main>
  )
}
