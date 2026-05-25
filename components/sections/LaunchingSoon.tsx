"use client"

import Image from "next/image"
import { type PointerEvent, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import {
  BarChart3,
  Bell,
  Building2,
  CalendarDays,
  Check,
  ChevronLeft,
  Code2,
  CreditCard,
  Home,
  Landmark,
  MoreHorizontal,
  PieChart,
  Plane,
  Rocket,
  Search,
  Share2,
  ShieldCheck,
  ShoppingBag,
  Stethoscope,
  Store,
  UserCircle,
  Users,
  WalletCards,
  Zap
} from "lucide-react"

const categories = [
  {
    title: "Real Estate",
    description: "Brand visibility, launch campaigns, and enquiry-focused communication for property opportunities.",
    icon: Building2,
    color: "text-cyan-700",
    bg: "bg-cyan-50",
    image: "/assets/industry/real_estate.webp",
    stat: "Launch campaigns"
  },
  {
    title: "IT & Software",
    description: "Positioning, product messaging, and demand campaigns for software and digital service brands.",
    icon: Code2,
    color: "text-cyan-700",
    bg: "bg-cyan-50",
    image: "/assets/industry/it_software.webp",
    stat: "Product demand"
  },
  {
    title: "Loan",
    description: "Trust-first campaigns that explain lending offers clearly and drive qualified financial enquiries.",
    icon: Landmark,
    color: "text-cyan-700",
    bg: "bg-cyan-50",
    image: "/assets/industry/Loan.webp",
    stat: "Qualified enquiries"
  },
  {
    title: "Insurance",
    description: "Awareness and conversion journeys that make protection-focused offers easier to understand and act on.",
    icon: ShieldCheck,
    color: "text-cyan-700",
    bg: "bg-cyan-50",
    image: "/assets/industry/insurence.webp",
    stat: "Protection offers"
  },
  {
    title: "Investment",
    description: "Education-led marketing flows that present investment opportunities with clarity and confidence.",
    icon: PieChart,
    color: "text-cyan-700",
    bg: "bg-cyan-50",
    image: "/assets/industry/investment.webp",
    stat: "Investor education"
  },
  {
    title: "Travel",
    description: "Promotional campaigns for travel offers, packages, and partner experiences built for discovery.",
    icon: Plane,
    color: "text-cyan-700",
    bg: "bg-cyan-50",
    image: "/assets/industry/travel.webp",
    stat: "Package discovery"
  },
  {
    title: "Grocery",
    description: "Local demand campaigns for everyday essentials, partner stores, and recurring household needs.",
    icon: ShoppingBag,
    color: "text-cyan-700",
    bg: "bg-cyan-50",
    image: "/assets/industry/grocery.webp",
    stat: "Local demand"
  },
  {
    title: "HealthCare",
    description: "Trust-led visibility for healthcare partners, wellness services, and support-driven offers.",
    icon: Stethoscope,
    color: "text-cyan-700",
    bg: "bg-cyan-50",
    image: "/assets/industry/medicine.webp",
    stat: "Care visibility"
  },
  {
    title: "Manpower",
    description: "Recruitment and staffing campaign support that connects talent demand with credible outreach.",
    icon: Users,
    color: "text-cyan-700",
    bg: "bg-cyan-50",
    image: "/assets/industry/man_power.webp",
    stat: "Talent outreach"
  },
  {
    title: "E-Commerce",
    description: "Seller-focused visibility and campaign support for commerce brands ready to scale online.",
    icon: Store,
    color: "text-cyan-700",
    bg: "bg-cyan-50",
    image: "/assets/industry/e-Commerce.webp",
    stat: "Seller growth"
  }
]

type Category = (typeof categories)[number]

const supportImages = [
  "/assets/estate.jpeg",
  "/assets/estate 3.jpeg",
  "/assets/project.jpeg",
  "/assets/design.webp",
  "/assets/register.webp",
  "/assets/kyc.jpg",
  "/assets/media1.webp",
  "/assets/property.webp",
  "/assets/img3.webp",
  "/assets/plans.jpg"
]

const categorySupportImages: Record<string, string[]> = {
  Insurance: [
    "/assets/kyc.jpg",
    "/assets/plans.jpg",
    "/assets/register.webp",
    "/assets/design.webp"
  ],
  Travel: [
    "/assets/estate 4.jpg",
    "/assets/media1.webp",
    "/assets/project.jpeg",
    "/assets/estate (2).jpeg"
  ],
  Loan: [
    "/assets/plans.jpg",
    "/assets/kyc.jpg",
    "/assets/register.webp",
    "/assets/design.webp"
  ],
  HealthCare: [
    "/assets/kyc.jpg",
    "/assets/register.webp",
    "/assets/plans.jpg",
    "/assets/design.webp"
  ]
}

const getSupportImages = (item: Category, index: number) => {
  const imagePool = categorySupportImages[item.title] ?? supportImages
  const available = imagePool.filter((image) => image !== item.image)
  return Array.from({ length: 4 }, (_, offset) => available[(index + offset) % available.length])
}

const getChoiceLabels = (item: Category) => {
  const customLabels: Record<string, string[]> = {
    Loan: ["Loan offer clarity", "Finance creatives", "Advisor leads", "Trust reach"],
    HealthCare: ["Care visibility", "Wellness content", "Clinic leads", "Trust reach"],
    "IT & Software": ["Product demand", "Demo assets", "Buyer leads", "Market reach"],
    Manpower: ["Talent outreach", "Hiring creatives", "Employer leads", "Skill reach"]
  }

  return customLabels[item.title] ?? [item.stat, `${item.title} assets`, "Partner leads", "Market reach"]
}

const StatusBar = ({ dark = true }: { dark?: boolean }) => (
  <div className={`relative z-10 flex items-center justify-between text-[11px] font-black ${dark ? "text-white" : "text-slate-950"}`}>
    <span>9:41</span>
    <div className="flex items-center gap-1">
      <span className={`h-2.5 w-3.5 rounded-sm border ${dark ? "border-white/80" : "border-slate-950/80"}`} />
      <span className={`h-2.5 w-3 rounded-sm ${dark ? "bg-white/80" : "bg-slate-950/80"}`} />
    </div>
  </div>
)

const PhoneNav = ({ dark = true }: { dark?: boolean }) => (
  <div className={`relative z-10 mt-auto flex items-center justify-between px-4 pt-5 ${dark ? "text-white/55" : "text-slate-400"}`}>
    <Home className="h-4 w-4" />
    <Search className="h-4 w-4" />
    <BarChart3 className="h-4 w-4" />
    <Zap className={`h-4 w-4 ${dark ? "text-cyan-300" : "text-cyan-600"}`} />
    <UserCircle className="h-4 w-4" />
  </div>
)

const ImageTile = ({ src, title, detail, rounded = "rounded-sm" }: { src: string; title: string; detail: string; rounded?: string }) => (
  <div className={`relative h-full w-full overflow-hidden ${rounded} bg-white/10`}>
    <Image src={src} alt="" fill sizes="150px" className="h-full w-full object-cover opacity-90" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
    <div className="absolute bottom-2 left-2 right-2">
      <p className="text-[10px] font-bold leading-none text-white">{title}</p>
      <p className="mt-1 text-[9px] text-white/55">{detail}</p>
    </div>
  </div>
)

const PhoneAction = ({ label, className }: { label: string; className: string }) => (
  <div className="relative z-10 mt-auto shrink-0 pt-3 md:pt-4">
    <span className={`flex h-10 items-center justify-center rounded-2xl px-4 text-center text-[11px] font-black text-white shadow-lg md:h-11 md:text-xs ${className}`}>
      {label}
    </span>
  </div>
)

const PhoneScreen = ({ item, index }: { item: Category; index: number }) => {
  const Icon = item.icon
  const images = getSupportImages(item, index)
  const variant = index % 5

  if (item.title === "Real Estate") {
    return (
      <div className="relative flex h-full flex-col overflow-hidden rounded-[34px] bg-[#dffbff] px-5 pb-5 pt-5 text-slate-950">
        <StatusBar dark={false} />
        <div className="relative z-10 mt-8 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-cyan-700">Property launch</p>
            <h3 className="mt-2 text-3xl font-black leading-tight">Try Real Estate</h3>
          </div>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-cyan-700 shadow-lg">
            <Icon className="h-5 w-5" />
          </span>
        </div>
        <div className="relative z-10 mt-6 h-48 overflow-hidden rounded-[30px] bg-slate-950 shadow-xl shadow-cyan-900/12">
          <Image src={item.image} alt="" fill sizes="280px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-xl font-black text-white">Project visibility</p>
            <p className="mt-1 text-xs font-semibold text-white/70">Launch pages, site visits, and enquiry-ready communication.</p>
          </div>
        </div>
        <div className="relative z-10 mt-5 grid grid-cols-2 gap-3">
          {images.slice(0, 2).map((image, imageIndex) => (
            <div key={image} className="relative h-24 overflow-hidden rounded-2xl bg-white shadow-lg shadow-cyan-900/8">
              <Image src={image} alt="" fill sizes="130px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-2 left-2 right-2 text-[10px] font-black text-white">{imageIndex === 0 ? "Site proof" : "Buyer story"}</p>
            </div>
          ))}
        </div>
        <div className="relative z-10 mt-auto rounded-[24px] bg-white/85 p-4 shadow-lg shadow-cyan-900/8">
          <p className="text-[10px] font-black uppercase tracking-widest text-cyan-700">Campaign focus</p>
          <p className="mt-1 text-sm font-black text-slate-950">{item.stat}</p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-cyan-100">
            <span className="block h-full w-3/4 rounded-full bg-cyan-500" />
          </div>
        </div>
      </div>
    )
  }

  if (item.title === "Travel") {
    return (
      <div className="relative flex h-full flex-col overflow-hidden rounded-[34px] bg-[#ffefe2] px-5 pb-5 pt-5 text-slate-950">
        <StatusBar dark={false} />
        <div className="relative z-10 mt-4 flex items-start justify-between md:mt-5">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-orange-600">Package discovery</p>
            <h3 className="mt-1.5 text-2xl font-black leading-tight md:mt-2 md:text-3xl">Try Travel</h3>
            <p className="mt-1.5 line-clamp-2 max-w-[170px] text-[11px] font-semibold leading-4 text-slate-700 md:max-w-[205px] md:text-xs">{item.description}</p>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-orange-600 shadow-lg md:h-11 md:w-11">
            <Icon className="h-5 w-5" />
          </span>
        </div>
        <div className="relative z-10 mt-3 h-20 shrink-0 overflow-hidden rounded-[22px] bg-orange-400 md:mt-4 md:h-28 md:rounded-[28px]">
          <Image src={item.image} alt="" fill sizes="260px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/55 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
            <p className="text-base font-black text-white md:text-lg">Travel offers</p>
            <p className="text-[10px] text-white/80 md:text-xs">Stories, packages, and partner experiences.</p>
          </div>
        </div>
        <div className="relative z-10 mt-2.5 flex justify-center gap-1.5 md:mt-3">
          <span className="h-1.5 w-7 rounded-full bg-orange-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-orange-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-orange-300" />
        </div>
        <div className="relative z-10 mt-2.5 md:mt-3">
          <div className="rounded-2xl bg-orange-500 px-3.5 py-2.5 text-white md:px-4 md:py-3">
            <p className="text-xs font-black md:text-sm">{item.stat}</p>
            <p className="mt-1 text-[10px] text-white/80 md:text-xs">First rollout window</p>
          </div>
        </div>
        <PhoneAction label="Build package" className="bg-slate-950 shadow-slate-950/15" />
      </div>
    )
  }

  if (item.title === "Insurance") {
    return (
      <div className="relative flex h-full flex-col overflow-hidden rounded-[34px] bg-[#eaf4ff] px-5 pb-5 pt-5 text-slate-950">
        <StatusBar dark={false} />
        <div className="relative z-10 mt-5 flex items-start justify-between md:mt-7">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-blue-700">Protection offers</p>
            <h3 className="mt-1.5 text-2xl font-black leading-tight md:mt-2 md:text-3xl">Try Insurance</h3>
            <p className="mt-1.5 line-clamp-2 max-w-[175px] text-[11px] font-semibold leading-4 text-slate-700 md:mt-2 md:max-w-[215px] md:text-xs md:leading-5">{item.description}</p>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-blue-700 shadow-lg md:h-11 md:w-11">
            <Icon className="h-5 w-5" />
          </span>
        </div>
        <div className="relative z-10 mt-4 h-24 shrink-0 overflow-hidden rounded-[24px] bg-blue-500 shadow-xl shadow-blue-900/10 md:mt-5 md:h-32 md:rounded-[30px]">
          <Image src={item.image} alt="" fill sizes="260px" className="object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 via-blue-700/15 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
            <p className="text-base font-black text-white md:text-lg">Trust-first campaign</p>
            <p className="mt-1 text-[10px] text-white/76 md:text-xs">Clear policy messaging and proof-led follow-up.</p>
          </div>
        </div>
        <div className="relative z-10 mt-3 grid grid-cols-2 gap-2.5 md:mt-4 md:gap-3">
          <div className="rounded-2xl bg-white p-3 shadow-lg shadow-blue-900/8 md:p-3.5">
            <p className="text-[10px] font-black uppercase tracking-widest text-blue-700">Clarity</p>
            <p className="mt-1 text-base font-black md:text-lg">Policy</p>
          </div>
          <div className="rounded-2xl bg-blue-600 p-3 text-white shadow-lg shadow-blue-900/12 md:p-3.5">
            <p className="text-[10px] font-black uppercase tracking-widest text-blue-100">Action</p>
            <p className="mt-1 text-base font-black md:text-lg">Leads</p>
          </div>
        </div>
        <div className="relative z-10 mt-3 space-y-2 md:mt-4 md:space-y-2.5">
          {["Verified benefits", "Customer support"].map((label, labelIndex) => (
            <div key={label} className={`items-center gap-3 rounded-2xl bg-white/80 p-2.5 md:flex md:p-3 ${labelIndex === 1 ? "hidden" : "flex"}`}>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 md:h-9 md:w-9">
                {labelIndex === 0 ? <ShieldCheck className="h-4 w-4" /> : <Check className="h-4 w-4" />}
              </span>
              <div>
                <p className="text-xs font-black">{label}</p>
                <p className="text-[10px] text-slate-500">{labelIndex === 0 ? item.stat : "Follow-up ready"}</p>
              </div>
            </div>
          ))}
        </div>
        <PhoneAction label="Prepare protection flow" className="bg-blue-700 shadow-blue-900/15" />
      </div>
    )
  }

  if (item.title === "Manpower") {
    return (
      <div className="relative flex h-full flex-col overflow-hidden rounded-[34px] bg-[#f0ecff] px-5 pb-5 pt-5 text-slate-950">
        <StatusBar dark={false} />
        <div className="relative z-10 mt-5 flex items-start justify-between md:mt-7">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-violet-700">Talent outreach</p>
            <h3 className="mt-1.5 text-2xl font-black leading-tight md:mt-2 md:text-3xl">Try Manpower</h3>
            <p className="mt-1.5 line-clamp-2 max-w-[175px] text-[11px] font-semibold leading-4 text-slate-700 md:mt-2 md:max-w-[220px] md:text-xs md:leading-5">{item.description}</p>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-violet-700 shadow-lg md:h-11 md:w-11">
            <Icon className="h-5 w-5" />
          </span>
        </div>
        <div className="relative z-10 mt-4 h-24 shrink-0 overflow-hidden rounded-[24px] bg-violet-700 md:mt-5 md:h-32 md:rounded-[30px]">
          <Image src={item.image} alt="" fill sizes="260px" className="object-cover opacity-75" />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-950/70 to-violet-500/10" />
          <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
            <p className="text-base font-black text-white md:text-xl">Hiring pipeline</p>
            <p className="mt-1 text-[10px] font-semibold text-white md:text-xs">Employer briefs, role creatives, and candidate reach.</p>
          </div>
        </div>
        <div className="relative z-10 mt-3 space-y-2 md:mt-4 md:space-y-2.5">
          {["Role brief", "Candidate pool", "Employer lead"].map((label, labelIndex) => (
            <div key={label} className={`items-center gap-3 rounded-2xl bg-white/85 p-2.5 shadow-lg shadow-violet-900/6 md:flex md:p-3 ${labelIndex === 2 ? "hidden" : "flex"}`}>
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-violet-100 md:h-11 md:w-11">
                <Image src={images[labelIndex]} alt="" fill sizes="44px" className="object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-black md:text-sm">{label}</p>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-violet-100">
                  <span className={`block h-full rounded-full bg-violet-600 ${labelIndex === 0 ? "w-4/5" : labelIndex === 1 ? "w-2/3" : "w-1/2"}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <PhoneAction label={`Campaign focus - ${item.stat}`} className="bg-violet-700 shadow-violet-900/15" />
      </div>
    )
  }

  if (variant === 1) {
    return (
      <div className="relative flex h-full flex-col overflow-hidden rounded-[34px] bg-white px-5 pb-5 pt-5 text-slate-950">
        <StatusBar dark={false} />
        <div className="relative z-10 mt-8 flex items-center justify-between">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-[10px] font-black">BR</span>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-lime-200 px-3 py-1 text-[10px] font-black text-slate-950">Soon</span>
            <Bell className="h-4 w-4 text-slate-600" />
          </div>
        </div>
        <h3 className="relative z-10 mt-7 text-3xl font-black">{item.title}</h3>
        <div className="relative z-10 mt-3 flex gap-2">
          <span className="rounded-full border border-slate-300 px-3 py-1 text-[10px] font-bold">All</span>
          <span className="rounded-full border border-slate-200 px-3 py-1 text-[10px] font-bold text-slate-500">Leads</span>
        </div>
        <div className="relative z-10 mt-5 grid grid-cols-2 gap-3">
          {[item.image, images[0]].map((image, cardIndex) => (
            <div key={image} className="relative h-32 overflow-hidden rounded-2xl bg-slate-100 p-3">
              <Image src={image} alt="" fill sizes="145px" className="object-cover opacity-25" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">
                  {cardIndex === 0 ? <Icon className="h-5 w-5" /> : <WalletCards className="h-5 w-5" />}
                </span>
                <div>
                  <p className="text-lg font-black">{cardIndex === 0 ? "15.00" : "0.00"}</p>
                  <p className="text-[10px] text-slate-500">{cardIndex === 0 ? item.stat : "Pending assets"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="relative z-10 mt-6 flex items-center justify-between">
          <h4 className="text-lg font-black">Campaign Queue</h4>
          <span className="text-xs font-bold text-cyan-700">See all</span>
        </div>
        <div className="relative z-10 mt-3 space-y-3">
          {["Positioning brief", "Media plan"].map((label, rowIndex) => (
            <div key={label} className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                {rowIndex === 0 ? <CreditCard className="h-4 w-4" /> : <CalendarDays className="h-4 w-4" />}
              </span>
              <div className="min-w-0 flex-1 px-3">
                <p className="text-xs font-black">{label}</p>
                <p className="text-[10px] text-slate-500">{rowIndex === 0 ? "Draft ready" : item.stat}</p>
              </div>
              <span className="text-xs font-black">{rowIndex + 1}</span>
            </div>
          ))}
        </div>
        <PhoneNav dark={false} />
      </div>
    )
  }

  if (variant === 2) {
    const choices = getChoiceLabels(item)

    return (
      <div className="relative flex h-full flex-col overflow-hidden rounded-[34px] bg-[#050607] px-5 pb-5 pt-5 text-white">
        <Image src={item.image} alt="" fill sizes="306px" className="object-cover opacity-20 blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
        <StatusBar />
        <div className="relative z-10 mt-7 h-1 rounded-full bg-white/20">
          <span className="block h-full w-1/3 rounded-full bg-white" />
        </div>
        <div className="relative z-10 mt-7">
          <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white/80 ${item.bg} ${item.color} shadow-xl shadow-black/30`}>
            <Icon className="h-7 w-7" />
          </div>
          <h3 className="text-3xl font-black leading-tight">{item.title}</h3>
          <p className="mt-2 max-w-[230px] text-lg font-bold leading-snug text-white/86">
            What should this campaign use the most?
          </p>
        </div>
        <div className="relative z-10 mt-7 space-y-4">
          {choices.map((choice, choiceIndex) => (
            <div key={choice} className="flex items-center gap-4 border-b border-white/10 pb-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white/10">
                <Image src={choiceIndex === 0 ? images[0] : images[choiceIndex]} alt="" fill sizes="48px" className="object-cover" />
              </div>
              <span className={`flex-1 text-lg font-bold ${choiceIndex > 1 ? "text-white/45" : ""}`}>{choice}</span>
              <span className={`flex h-6 w-6 items-center justify-center rounded-full border ${choiceIndex === 0 ? "bg-white text-slate-950" : "border-white/45"}`}>
                {choiceIndex === 0 && <Check className="h-3.5 w-3.5" />}
              </span>
            </div>
          ))}
        </div>
        <PhoneNav />
      </div>
    )
  }

  if (variant === 3) {
    return (
      <div className="relative flex h-full flex-col overflow-hidden rounded-[34px] bg-white px-4 pb-5 pt-5 text-slate-950">
        <StatusBar dark={false} />
        <div className="relative z-10 mt-7 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-500">The Brokrs</p>
            <h3 className="text-2xl font-black">{item.title}</h3>
          </div>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-50 text-cyan-700">
            <Icon className="h-5 w-5" />
          </span>
        </div>
        <div className="relative z-10 mt-5 h-56 overflow-hidden rounded-[26px] bg-slate-950">
          <Image src={item.image} alt="" fill sizes="280px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-xl font-black text-white">{item.stat}</p>
            <p className="mt-1 line-clamp-2 text-xs leading-4 text-white/70">{item.description}</p>
          </div>
        </div>
        <div className="relative z-10 mt-5 flex items-center justify-between">
          <h4 className="text-sm font-black">Recommended</h4>
          <span className="text-[10px] font-bold text-cyan-700">View All</span>
        </div>
        <div className="relative z-10 mt-3 flex gap-3 overflow-hidden">
          {images.slice(0, 3).map((image, imageIndex) => (
            <div key={image} className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-slate-100">
              <Image src={image} alt="" fill sizes="96px" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-black/50 px-2 py-1 text-[9px] font-bold text-white">
                Story {imageIndex + 1}
              </div>
            </div>
          ))}
        </div>
        <PhoneNav dark={false} />
      </div>
    )
  }

  if (variant === 4) {
    return (
      <div className="relative flex h-full flex-col overflow-hidden rounded-[34px] bg-[#ffe867] px-5 pb-5 pt-5 text-slate-950">
        <StatusBar dark={false} />
        <div className="relative z-10 mt-5 flex items-start justify-between md:mt-7">
          <div>
            <h3 className="text-2xl font-black leading-tight md:text-3xl">Try {item.title}</h3>
            <p className="mt-1.5 line-clamp-2 max-w-[175px] text-[11px] font-semibold leading-4 text-slate-700 md:mt-2 md:max-w-[210px] md:text-xs md:leading-5">{item.description}</p>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/80 md:h-10 md:w-10">
            <Icon className="h-5 w-5 text-cyan-700" />
          </span>
        </div>
        <div className="relative z-10 mt-4 h-24 shrink-0 overflow-hidden rounded-[24px] bg-orange-400 md:mt-6 md:h-28 md:rounded-[28px]">
          <Image src={item.image} alt="" fill sizes="260px" className="object-cover opacity-70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-orange-300/35" />
          <div className="absolute bottom-4 left-1/2 h-12 w-28 -translate-x-1/2 rounded-t-full bg-orange-500 md:bottom-5 md:h-16 md:w-32" />
        </div>
        <div className="relative z-10 mt-4 flex justify-center gap-1.5 md:mt-6">
          <span className="h-1.5 w-5 rounded-full bg-slate-950" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-950/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-950/25" />
        </div>
        <div className="relative z-10 mt-4 space-y-2.5 md:mt-5 md:space-y-3">
          <div className="rounded-2xl bg-orange-500 px-3.5 py-3 text-white md:p-4">
            <p className="text-xs font-black md:text-sm">{item.stat}</p>
            <p className="mt-1 text-[10px] text-white/80 md:text-xs">First campaign window</p>
          </div>
          <div className="rounded-2xl bg-white/70 px-3.5 py-3 md:p-4">
            <p className="text-xs font-black md:text-sm">Partner visibility</p>
            <p className="mt-1 text-[10px] text-slate-600 md:text-xs">Media, leads, and positioning</p>
          </div>
        </div>
        <PhoneAction label="Start rollout" className="bg-blue-600 shadow-blue-900/15" />
      </div>
    )
  }

  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[34px] bg-[#0b080d] px-4 pb-5 pt-5 text-white">
      <Image src={item.image} alt="" fill sizes="306px" className="object-cover opacity-20 blur-[1px]" />
      <div className="absolute inset-0 bg-[#0b080d]/82" />
      <StatusBar />
      <div className="relative z-10 mt-7 flex items-center justify-between">
        <ChevronLeft className="h-4 w-4 text-white/80" />
        <div className="flex items-center gap-4">
          <Share2 className="h-4 w-4 text-white/80" />
          <MoreHorizontal className="h-5 w-5 text-white/80" />
        </div>
      </div>
      <div className="relative z-10 mt-1 flex flex-col items-center text-center">
        <div className={`flex h-16 w-16 items-center justify-center rounded-full border-4 border-white/80 ${item.bg} ${item.color} shadow-xl shadow-black/30`}>
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="mt-3 text-2xl font-semibold leading-tight">{item.title}</h3>
        <p className="mt-1 text-[11px] font-medium text-white/55">@brokrs | {item.stat}</p>
        <p className="mt-2 max-w-[230px] text-[11px] font-semibold leading-4 text-white/78">{item.description}</p>
      </div>
      <div className="relative z-10 mt-7 grid grid-cols-2 gap-3">
        {images.map((image, imageIndex) => (
          <div key={`${item.title}-tile-${imageIndex}`} className="h-[102px] md:h-[108px]">
            <ImageTile
              src={image}
              title={imageIndex === 0 ? "Sector" : imageIndex === 1 ? "Campaign" : imageIndex === 2 ? "Assets" : "Trust"}
              detail={`${imageIndex + 1} collection`}
            />
          </div>
        ))}
      </div>
      <PhoneNav />
    </div>
  )
}

const LaunchingSoon = () => {
  const [isDragging, setIsDragging] = useState(false)
  const marqueeRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const pausedRef = useRef(false)
  const draggingRef = useRef(false)
  const inViewRef = useRef(false)
  const reducedMotionRef = useRef(false)
  const activePointerId = useRef<number | null>(null)
  const dragStartX = useRef(0)
  const dragStartScroll = useRef(0)
  const marqueeItems = [...categories, ...categories, ...categories]

  const updateAnimationPlayback = () => {
    const track = trackRef.current
    if (!track) return

    const shouldPause = pausedRef.current || draggingRef.current || !inViewRef.current || reducedMotionRef.current
    track.style.animationPlayState = shouldPause ? "paused" : "running"
  }

  const keepScrollInLoop = () => {
    const marquee = marqueeRef.current
    if (!marquee) return

    const cycleWidth = marquee.scrollWidth / 3
    if (!cycleWidth) return

    if (marquee.scrollLeft < cycleWidth * 0.5) {
      marquee.scrollLeft += cycleWidth
    } else if (marquee.scrollLeft > cycleWidth * 1.5) {
      marquee.scrollLeft -= cycleWidth
    }
  }

  useEffect(() => {
    const marquee = marqueeRef.current
    const track = trackRef.current
    if (!marquee || !track) return

    const configureAnimation = () => {
      const firstCard = track.children[0] as HTMLElement | undefined
      const repeatedCard = track.children[categories.length] as HTMLElement | undefined
      const cycleWidth = firstCard && repeatedCard ? repeatedCard.offsetLeft - firstCard.offsetLeft : 0
      if (!cycleWidth) return

      const pixelsPerSecond = window.innerWidth < 768 ? 185 : 155
      marquee.scrollLeft = cycleWidth
      track.style.setProperty("--launching-distance", `${-cycleWidth}px`)
      track.style.setProperty("--launching-duration", `${Math.max(cycleWidth / pixelsPerSecond, 12)}s`)
      updateAnimationPlayback()
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleReducedMotion = () => {
      reducedMotionRef.current = reducedMotion.matches
      updateAnimationPlayback()
    }
    handleReducedMotion()

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting
        updateAnimationPlayback()
      },
      { rootMargin: "160px 0px" }
    )
    intersectionObserver.observe(marquee)

    const startFrame = window.requestAnimationFrame(configureAnimation)
    window.addEventListener("resize", configureAnimation)
    reducedMotion.addEventListener("change", handleReducedMotion)

    return () => {
      window.cancelAnimationFrame(startFrame)
      intersectionObserver.disconnect()
      window.removeEventListener("resize", configureAnimation)
      reducedMotion.removeEventListener("change", handleReducedMotion)
    }
  }, [])

  const pauseAnimation = () => {
    pausedRef.current = true
    updateAnimationPlayback()
  }

  const resumeAnimation = () => {
    if (!draggingRef.current) {
      pausedRef.current = false
      updateAnimationPlayback()
    }
  }

  const handleDragStart = (event: PointerEvent<HTMLDivElement>) => {
    const marquee = marqueeRef.current
    if (!marquee) return
    activePointerId.current = event.pointerId
    marquee.setPointerCapture(event.pointerId)
    draggingRef.current = true
    pausedRef.current = true
    updateAnimationPlayback()
    setIsDragging(true)
    dragStartX.current = event.clientX
    dragStartScroll.current = marquee.scrollLeft
  }

  const handleDragMove = (event: PointerEvent<HTMLDivElement>) => {
    const marquee = marqueeRef.current
    if (!marquee || activePointerId.current !== event.pointerId) return
    event.preventDefault()
    marquee.scrollLeft = dragStartScroll.current - (event.clientX - dragStartX.current)
    keepScrollInLoop()
  }

  const handleDragEnd = (event: PointerEvent<HTMLDivElement>) => {
    const marquee = marqueeRef.current
    if (activePointerId.current !== event.pointerId) return
    if (marquee?.hasPointerCapture(event.pointerId)) {
      marquee.releasePointerCapture(event.pointerId)
    }
    activePointerId.current = null
    draggingRef.current = false
    setIsDragging(false)
    keepScrollInLoop()
    if (event.pointerType !== "mouse") {
      pausedRef.current = false
      updateAnimationPlayback()
    }
  }

  return (
    <section id="launching-soon" className="scroll-mt-16 pt-14 pb-20 md:scroll-mt-24 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-50/40 rounded-full blur-[100px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-50/30 rounded-full blur-[100px] -ml-64 -mb-64" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10 md:mb-14 lg:mb-16 space-y-4">
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

        <div
          ref={marqueeRef}
          className={`hide-scrollbar relative left-1/2 w-screen -translate-x-1/2 touch-pan-y overflow-x-auto overflow-y-hidden py-3 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          onMouseEnter={pauseAnimation}
          onMouseLeave={resumeAnimation}
          onPointerDown={handleDragStart}
          onPointerMove={handleDragMove}
          onPointerUp={handleDragEnd}
          onPointerCancel={handleDragEnd}
        >
          <div
            ref={trackRef}
            className="launching-marquee flex w-max select-none gap-4 px-6 md:gap-5 lg:gap-6"
            onFocus={pauseAnimation}
            onBlur={resumeAnimation}
          >
            {marqueeItems.map((item, i) => (
              <motion.button
                type="button"
                key={`${item.title}-${i}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % categories.length) * 0.04 }}
                viewport={{ once: true }}
                className="group relative h-[460px] w-[248px] shrink-0 overflow-hidden rounded-[32px] border border-cyan-100/80 bg-white/80 p-1.5 text-left shadow-xl shadow-cyan-950/8 transition-all duration-500 hover:-translate-y-1 hover:shadow-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-300 md:h-[560px] md:w-[306px] md:rounded-[40px] md:shadow-2xl md:shadow-cyan-950/10"
              >
                <div className="relative h-full overflow-hidden rounded-[28px] bg-[#0b080d] md:rounded-[34px]">
                  <div className="absolute left-1/2 top-2.5 z-30 h-1.5 w-20 -translate-x-1/2 rounded-full bg-white/85" />
                  <PhoneScreen item={item} index={i} />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .launching-marquee {
          animation: launching-auto-scroll var(--launching-duration, 24s) linear infinite;
          animation-play-state: paused;
          transform: translate3d(0, 0, 0);
          will-change: transform;
        }

        @keyframes launching-auto-scroll {
          to {
            transform: translate3d(var(--launching-distance, -33.333%), 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .launching-marquee {
            animation: none;
            transform: none;
          }
        }

        .launching-marquee::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default LaunchingSoon
