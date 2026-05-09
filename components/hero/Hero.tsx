"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Play, X, Target, Building2, Users2, ShieldCheck, TrendingUp, Gem, Rocket, Home as HomeIcon, Code2, Landmark, ShieldCheck as Shield2, PieChart, Plane, ShoppingBag, Stethoscope, Users, Store } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import IndustryShowcase from "./IndustryShowcase"

const serviceTags = [
  { name: "Real Estate", icon: Building2, color: "from-blue-500 to-blue-600" },
  { name: "IT & Software", icon: Code2, color: "from-indigo-500 to-indigo-600" },
  { name: "Loan", icon: Landmark, color: "from-emerald-500 to-emerald-600" },
  { name: "Insurance", icon: ShieldCheck, color: "from-rose-500 to-rose-600" },
  { name: "Investment", icon: PieChart, color: "from-amber-500 to-amber-600" },
  { name: "Travel", icon: Plane, color: "from-sky-500 to-sky-600" },
  { name: "Grocery", icon: ShoppingBag, color: "from-green-500 to-green-600" },
  { name: "Medicine", icon: Stethoscope, color: "from-teal-500 to-teal-600" },
  { name: "Manpower", icon: Users, color: "from-purple-500 to-purple-600" },
  { name: "E-Commerce", icon: Store, color: "from-pink-500 to-pink-600" },
]

const Hero = () => {
  const [showOverview, setShowOverview] = useState(false)

  const overviewSlides = [
    {
      title: "Strategic Vision",
      desc: "Building clear market positions, sharper campaigns, and growth systems for brands across multiple business verticals.",
      icon: Target,
      color: "bg-indigo-500",
      stats: "10k+ Members"
    },
    {
      title: "Business Verticals",
      desc: "From active growth projects to real estate, software, and commerce, we shape vertical-specific marketing journeys.",
      icon: Building2,
      color: "bg-gold-500",
      stats: "8+ Verticals"
    },
    {
      title: "Campaign Performance",
      desc: "Every campaign is designed around visibility, qualified demand, and a clearer conversion path for the audience.",
      icon: TrendingUp,
      color: "bg-emerald-500",
      stats: "18% ROI"
    },
    {
      title: "Creative + Strategy",
      desc: "We combine brand storytelling, local reach, and digital execution so businesses can scale with confidence.",
      icon: Gem,
      color: "bg-purple-500",
      stats: "Zero Entry Cost"
    }
  ]
  const rotatingWords = [
    "Real Estate",
    "Software",
    "Loan",
    "Insurance",
    "Investment",
    "Travel",
    "Grocery",
    "Medicine",
    "Manpower",
    "E-Commerce"
  ]
  const rotatingSynonyms = [
    "Unite.",
    "Innovate.",
    "Empower.",
    "Secure.",
    "Multiply.",
    "Inspire.",
    "Deliver.",
    "Heal.",
    "Build.",
    "Scale."
  ]
  const [wordIndex, setWordIndex] = useState(0)
  const [typedWord, setTypedWord] = useState("")
  const [typedSynonym, setTypedSynonym] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const word = rotatingWords[wordIndex]
    const synonym = rotatingSynonyms[wordIndex]
    const totalCharacters = word.length + synonym.length + 1
    const typingDuration = 3600
    const stepDuration = typingDuration / totalCharacters
    let currentCharacter = 0

    setTypedWord("")
    setTypedSynonym("")

    const interval = setInterval(() => {
      currentCharacter += 1

      if (currentCharacter <= word.length) {
        setTypedWord(word.slice(0, currentCharacter))
        setTypedSynonym("")
        return
      }

      const synonymCharacters = currentCharacter - word.length - 1
      setTypedWord(word)
      setTypedSynonym(synonym.slice(0, Math.max(0, synonymCharacters)))

      if (currentCharacter >= totalCharacters) {
        clearInterval(interval)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [wordIndex])

  return (
    <section id="home" className="relative h-screen min-h-[850px] w-full flex items-center justify-center overflow-hidden font-display">
      {/* Video Background Replacement */}
      <div className="absolute inset-0 z-0">
        <IndustryShowcase currentScene={wordIndex} />
        {/* Gradient only on bottom-left where text sits */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent pointer-events-none" />
        {/* Additional subtle animated gradient overlay */}
        <div className="absolute inset-0 hero-gradient-animated opacity-40 pointer-events-none" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl space-y-10">
          {/* Launching Soon Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg">
              <Rocket className="w-4 h-4 text-indigo-300" />
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/90">Growth Marketing For Multi-Industry Brands</span>
              <span className="glow-dot" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight" style={{ textShadow: '0 4px 30px rgba(0,0,0,0.6)' }}>
              Where Business <span className="text-indigo-400">&amp;</span>
              <span className="block mt-2">
                <span className="inline-flex items-center justify-start whitespace-nowrap">
                  <span className="inline-block pb-3 text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-300 to-white">
                    {typedWord || "\u00A0"}
                  </span>
                  <span className="inline-block pb-3 text-3xl md:text-5xl lg:text-6xl font-bold ml-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                    {typedSynonym}
                  </span>
                </span>
              </span>
            </h1>

            <p className="text-xl md:text-1xl text-white/80 font-light leading-relaxed max-w-3xl" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.5)' }}>
              Join the future of collaborative wealth. <br className="hidden md:block" />
              We connect human potential with high-growth business opportunities built for long-term value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-6 pt-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-white text-brand-950 font-bold text-base shadow-2xl hover:bg-brand-50 hover:shadow-[0_0_24px_rgba(255,255,255,0.3)] transition-all duration-500 group"
              asChild
            >
              <Link href="#contact">
                Start Growing
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>

            {/* <Button
              variant="outline"
              size="lg"
              onClick={() => setShowOverview(true)}
              className="w-full sm:w-auto h-14 px-8 rounded-2xl border-white/30 bg-white/10 backdrop-blur-md text-white font-bold text-base hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all group"
            >
              <Play className="mr-2 h-5 w-5 fill-white group-hover:scale-110 transition-transform" />
              Watch Overview
            </Button> */}
          </motion.div>
        </div>
      </div>

      {/* ── Floating Service Tags Strip ── */}
      <div className="absolute bottom-10 left-0 right-0 z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="overflow-hidden py-3">
            <div className="service-tags-strip">
              {[...serviceTags, ...serviceTags, ...serviceTags, ...serviceTags].map((tag, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-5 py-2.5 mx-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 shrink-0 hover:bg-white/20 hover:border-white/30 transition-all duration-300 cursor-default group"
                >
                  <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${tag.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                    <tag.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs font-bold tracking-wide whitespace-nowrap">{tag.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Overview Modal */}
      <AnimatePresence>
        {showOverview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-brand-950/40 backdrop-blur-3xl"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="w-full max-w-6xl bg-white/95 rounded-[3rem] shadow-2xl overflow-hidden relative border border-white/20 p-8 md:p-16 max-h-[90vh] overflow-y-auto hide-scrollbar"
            >
              <button
                onClick={() => setShowOverview(false)}
                className="absolute top-8 right-8 p-3 text-brand-950/40 hover:text-brand-950 hover:bg-brand-50 rounded-full transition-all z-20"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="space-y-12">
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                  <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-sm">Business Ecosystem</h3>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-950">Architecting Practical Growth.</h2>
                  <p className="text-brand-600">See how The Brokrs connects positioning, creative direction, and campaign systems into one marketing engine.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {overviewSlides.map((slide, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className="p-8 rounded-[2.5rem] bg-white border border-brand-100 space-y-6 group hover:border-indigo-200 hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                    >
                      {/* Color Glow Overlay */}
                      <div className={cn("absolute -top-10 -right-10 w-24 h-24 blur-[40px] opacity-10 transition-all duration-700 group-hover:scale-150 group-hover:opacity-20", slide.color)} />

                      <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3", slide.color)}>
                        <slide.icon className="w-8 h-8" />
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xl font-bold text-brand-950">{slide.title}</h4>
                          <span className="text-[10px] font-black uppercase tracking-tighter text-indigo-600/40">{slide.stats}</span>
                        </div>
                        <p className="text-brand-600 text-sm leading-relaxed">{slide.desc}</p>
                      </div>

                      {/* Detail Line Overlay */}
                      <div className="h-[1px] w-0 bg-gradient-to-r from-indigo-500/50 to-transparent group-hover:w-full transition-all duration-700" />
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6">
                  <Button
                    size="lg"
                    onClick={() => setShowOverview(false)}
                    className="rounded-2xl px-12 h-16 bg-brand-950 text-white shadow-xl font-bold hover:bg-brand-800 transition-colors w-full md:w-auto"
                  >
                    Close Overview
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="rounded-2xl px-12 h-16 border-2 border-indigo-100 text-indigo-600 font-bold hover:bg-indigo-50 transition-colors w-full md:w-auto"
                  >
                    <Link href="#contact" onClick={() => setShowOverview(false)}>
                      Talk Growth
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-1 opacity-40"
      >
        <div className="w-px h-8 bg-gradient-to-b from-white/0 to-white" />
        <span className="text-[10px] text-white uppercase tracking-[0.2em] font-bold">Scroll</span>
      </motion.div>
    </section>
  )
}

export default Hero
