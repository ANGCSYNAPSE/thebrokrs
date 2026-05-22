"use client"

import Image from "next/image"
import { useState } from "react"
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
        <div className="relative z-10 mt-8 flex items-start justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-orange-600">Package discovery</p>
            <h3 className="mt-2 text-3xl font-black leading-tight">Try Travel</h3>
            <p className="mt-2 max-w-[205px] text-xs font-semibold leading-5 text-slate-700">{item.description}</p>
          </div>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-orange-600 shadow-lg">
            <Icon className="h-5 w-5" />
          </span>
        </div>
        <div className="relative z-10 mt-7 h-36 overflow-hidden rounded-[30px] bg-orange-400">
          <Image src={item.image} alt="" fill sizes="260px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/55 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-lg font-black text-white">Travel offers</p>
            <p className="text-xs text-white/80">Stories, packages, and partner experiences.</p>
          </div>
        </div>
        <div className="relative z-10 mt-6 flex justify-center gap-1.5">
          <span className="h-1.5 w-7 rounded-full bg-orange-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-orange-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-orange-300" />
        </div>
        <div className="relative z-10 mt-6 space-y-3">
          <div className="rounded-2xl bg-orange-500 p-4 text-white">
            <p className="text-sm font-black">{item.stat}</p>
            <p className="mt-1 text-xs text-white/80">First rollout window</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {images.slice(0, 2).map((image, imageIndex) => (
              <div key={image} className="relative h-20 overflow-hidden rounded-2xl bg-white">
                <Image src={image} alt="" fill sizes="120px" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                <p className="absolute bottom-2 left-2 right-2 text-[10px] font-black text-white">{imageIndex === 0 ? "Destination" : "Partner"}</p>
              </div>
            ))}
          </div>
        </div>
        <span className="relative z-10 mt-auto rounded-2xl bg-slate-950 px-4 py-3 text-center text-xs font-black text-white">Build package</span>
      </div>
    )
  }

  if (item.title === "Insurance") {
    return (
      <div className="relative flex h-full flex-col overflow-hidden rounded-[34px] bg-[#eaf4ff] px-5 pb-5 pt-5 text-slate-950">
        <StatusBar dark={false} />
        <div className="relative z-10 mt-8 flex items-start justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-blue-700">Protection offers</p>
            <h3 className="mt-2 text-3xl font-black leading-tight">Try Insurance</h3>
            <p className="mt-2 max-w-[215px] text-xs font-semibold leading-5 text-slate-700">{item.description}</p>
          </div>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-700 shadow-lg">
            <Icon className="h-5 w-5" />
          </span>
        </div>
        <div className="relative z-10 mt-7 h-40 overflow-hidden rounded-[30px] bg-blue-500 shadow-xl shadow-blue-900/10">
          <Image src={item.image} alt="" fill sizes="260px" className="object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 via-blue-700/15 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-xl font-black text-white">Trust-first campaign</p>
            <p className="mt-1 text-xs text-white/76">Clear policy messaging and proof-led follow-up.</p>
          </div>
        </div>
        <div className="relative z-10 mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white p-4 shadow-lg shadow-blue-900/8">
            <p className="text-[10px] font-black uppercase tracking-widest text-blue-700">Clarity</p>
            <p className="mt-2 text-lg font-black">Policy</p>
          </div>
          <div className="rounded-2xl bg-blue-600 p-4 text-white shadow-lg shadow-blue-900/12">
            <p className="text-[10px] font-black uppercase tracking-widest text-blue-100">Action</p>
            <p className="mt-2 text-lg font-black">Leads</p>
          </div>
        </div>
        <div className="relative z-10 mt-5 space-y-3">
          {["Verified benefits", "Customer support"].map((label, labelIndex) => (
            <div key={label} className="flex items-center gap-3 rounded-2xl bg-white/80 p-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                {labelIndex === 0 ? <ShieldCheck className="h-4 w-4" /> : <Check className="h-4 w-4" />}
              </span>
              <div>
                <p className="text-xs font-black">{label}</p>
                <p className="text-[10px] text-slate-500">{labelIndex === 0 ? item.stat : "Follow-up ready"}</p>
              </div>
            </div>
          ))}
        </div>
        <span className="relative z-10 mt-auto rounded-2xl bg-blue-700 px-4 py-3 text-center text-xs font-black text-white">Prepare protection flow</span>
      </div>
    )
  }

  if (item.title === "Manpower") {
    return (
      <div className="relative flex h-full flex-col overflow-hidden rounded-[34px] bg-[#f0ecff] px-5 pb-5 pt-5 text-slate-950">
        <StatusBar dark={false} />
        <div className="relative z-10 mt-8 flex items-start justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-violet-700">Talent outreach</p>
            <h3 className="mt-2 text-3xl font-black leading-tight">Try Manpower</h3>
            <p className="mt-2 max-w-[220px] text-xs font-semibold leading-5 text-slate-700">{item.description}</p>
          </div>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-violet-700 shadow-lg">
            <Icon className="h-5 w-5" />
          </span>
        </div>
        <div className="relative z-10 mt-7 h-36 overflow-hidden rounded-[30px] bg-violet-700">
          <Image src={item.image} alt="" fill sizes="260px" className="object-cover opacity-75" />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-950/70 to-violet-500/10" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-xl font-black text-white">Hiring pipeline</p>
            <p className="mt-1 text-xs text-white/76">Employer briefs, role creatives, and candidate reach.</p>
          </div>
        </div>
        <div className="relative z-10 mt-6 space-y-3">
          {["Role brief", "Candidate pool", "Employer lead"].map((label, labelIndex) => (
            <div key={label} className="flex items-center gap-3 rounded-2xl bg-white/85 p-3 shadow-lg shadow-violet-900/6">
              <div className="relative h-11 w-11 overflow-hidden rounded-full bg-violet-100">
                <Image src={images[labelIndex]} alt="" fill sizes="44px" className="object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-black">{label}</p>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-violet-100">
                  <span className={`block h-full rounded-full bg-violet-600 ${labelIndex === 0 ? "w-4/5" : labelIndex === 1 ? "w-2/3" : "w-1/2"}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="relative z-10 mt-auto rounded-[24px] bg-violet-700 p-4 text-white">
          <p className="text-[10px] font-black uppercase tracking-widest text-violet-100">Campaign focus</p>
          <p className="mt-1 text-sm font-black">{item.stat}</p>
        </div>
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
        <div className="relative z-10 mt-8 flex items-start justify-between">
          <div>
            <h3 className="text-3xl font-black leading-tight">Try {item.title}</h3>
            <p className="mt-2 max-w-[210px] text-xs font-semibold leading-5 text-slate-700">{item.description}</p>
          </div>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80">
            <Icon className="h-5 w-5 text-cyan-700" />
          </span>
        </div>
        <div className="relative z-10 mt-8 h-32 overflow-hidden rounded-[28px] bg-orange-400">
          <Image src={item.image} alt="" fill sizes="260px" className="object-cover opacity-70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-orange-300/35" />
          <div className="absolute bottom-5 left-1/2 h-16 w-32 -translate-x-1/2 rounded-t-full bg-orange-500" />
        </div>
        <div className="relative z-10 mt-10 flex justify-center gap-1.5">
          <span className="h-1.5 w-5 rounded-full bg-slate-950" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-950/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-950/25" />
        </div>
        <div className="relative z-10 mt-8 space-y-3">
          <div className="rounded-2xl bg-orange-500 p-4 text-white">
            <p className="text-sm font-black">{item.stat}</p>
            <p className="mt-1 text-xs text-white/80">First campaign window</p>
          </div>
          <div className="rounded-2xl bg-white/70 p-4">
            <p className="text-sm font-black">Partner visibility</p>
            <p className="mt-1 text-xs text-slate-600">Media, leads, and positioning</p>
          </div>
        </div>
        <span className="relative z-10 mt-auto rounded-2xl bg-blue-600 px-4 py-3 text-center text-xs font-black text-white">Start rollout</span>
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
  const [isPaused, setIsPaused] = useState(false)
  const marqueeItems = [...categories, ...categories]

  return (
    <section className="pt-14 pb-20 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 bg-white relative overflow-hidden">
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
          className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-32" />

          <div
            className={`launching-marquee flex w-max gap-4 px-6 md:gap-5 lg:gap-6 ${isPaused ? "is-paused" : ""}`}
            onClick={() => setIsPaused((paused) => !paused)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            {marqueeItems.map((item, i) => (
              <motion.button
                type="button"
                key={`${item.title}-${i}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % categories.length) * 0.04 }}
                viewport={{ once: true }}
                className="group relative h-[500px] w-[270px] shrink-0 overflow-hidden rounded-[36px] border border-cyan-100/80 bg-white/80 p-1.5 text-left shadow-xl shadow-cyan-950/8 transition-all duration-500 hover:-translate-y-1 hover:shadow-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-300 md:h-[560px] md:w-[306px] md:rounded-[40px] md:shadow-2xl md:shadow-cyan-950/10"
              >
                <div className="relative h-full overflow-hidden rounded-[30px] bg-[#0b080d] md:rounded-[34px]">
                  <div className="absolute left-1/2 top-2.5 z-30 h-1.5 w-20 -translate-x-1/2 rounded-full bg-white/85" />
                  <PhoneScreen item={item} index={i} />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes launching-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .launching-marquee {
          animation: launching-scroll 38s linear infinite;
        }

        .launching-marquee:hover,
        .launching-marquee:focus-within,
        .launching-marquee.is-paused {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .launching-marquee {
            animation-duration: 36s;
          }
        }
      `}</style>
    </section>
  )
}

export default LaunchingSoon
