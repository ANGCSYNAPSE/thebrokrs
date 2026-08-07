"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  User,
  Settings,
  Shield,
  Wallet,
  TrendingUp,
  LogOut,
  Camera,
  MapPin,
  Phone,
  Mail,
  Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { logoutUser } from "@/store/thunks/authThunks"

const tabs = [
  { id: "overview", label: "Overview", icon: User },
  { id: "investments", label: "My Investments", icon: Wallet },
  { id: "settings", label: "Account Settings", icon: Settings },
  { id: "security", label: "Security", icon: Shield },
]

export default function ProfilePage() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { user, isAuthenticated, loading } = useAppSelector((state) => state.auth)
  const [activeTab, setActiveTab] = useState("overview")

  // Auth guard — redirect to home if not authenticated and not loading
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.replace("/")
    }
  }, [isAuthenticated, loading, router])

  const handleLogout = async () => {
    await dispatch(logoutUser())
    router.push("/")
  }

  // Show a loading spinner while we rehydrate from the access token
  if (loading || !isAuthenticated || !user) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-cyan-500" />
          <p className="text-sm text-brand-500 font-medium">Loading your profile...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-28 pb-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_82%,rgba(34,211,238,0.08),transparent_34%),radial-gradient(circle_at_86%_10%,rgba(14,165,233,0.06),transparent_30%),linear-gradient(135deg,#ffffff_0%,#f0fdff_48%,#f8fafc_100%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

      <div className="container relative z-10 max-w-6xl mx-auto px-4 md:px-6">

        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-brand-950">My Profile</h1>
          <p className="text-brand-500 mt-2">Manage your account settings and investments.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-[24px] border border-cyan-100 bg-white/80 p-6 shadow-[0_8px_30px_rgba(8,145,178,0.06)] backdrop-blur-xl">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-24 w-24 rounded-full border-4 border-white shadow-lg bg-cyan-50 mb-4 group cursor-pointer">
                  <div className="absolute inset-0 rounded-full overflow-hidden flex items-center justify-center bg-cyan-100">
                    <span className="text-2xl font-bold text-cyan-600">
                      {user.name?.charAt(0).toUpperCase() ?? "U"}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-950">{user.name}</h3>
                <p className="text-sm text-brand-500">{user.role ?? "Member"}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-cyan-50 px-3 py-1 border border-cyan-100">
                  <span className={`h-2 w-2 rounded-full ${user.isEmailVerified ? "bg-green-500 animate-pulse" : "bg-amber-400"}`} />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-700">
                    {user.isEmailVerified ? "Verified" : "Unverified"}
                  </span>
                </div>
              </div>

              <div className="mt-8 space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                        isActive
                          ? "bg-cyan-50 text-cyan-700 font-bold shadow-sm border border-cyan-100"
                          : "text-brand-600 hover:bg-slate-50 hover:text-brand-950 font-medium"
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${isActive ? "text-cyan-500" : "text-brand-400"}`} />
                      {tab.label}
                    </button>
                  )
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-red-500 hover:bg-red-50 font-medium transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="space-y-8">
            <AnimatePresence mode="wait">

              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-[24px] border border-cyan-100 bg-white/80 p-6 shadow-sm backdrop-blur-xl relative overflow-hidden group">
                      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-100/50 blur-2xl group-hover:bg-cyan-200/50 transition-colors" />
                      <div className="flex justify-between items-start relative z-10">
                        <div>
                          <p className="text-sm font-semibold text-brand-500 mb-1">Total Portfolio Value</p>
                          <h3 className="text-3xl font-display font-bold text-brand-950">₹0</h3>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 border border-cyan-100">
                          <Wallet className="h-6 w-6 text-cyan-600" />
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-emerald-500" />
                        <span className="text-brand-400">No active investments yet</span>
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-cyan-100 bg-white/80 p-6 shadow-sm backdrop-blur-xl relative overflow-hidden group">
                      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-sky-100/50 blur-2xl group-hover:bg-sky-200/50 transition-colors" />
                      <div className="flex justify-between items-start relative z-10">
                        <div>
                          <p className="text-sm font-semibold text-brand-500 mb-1">Active Projects</p>
                          <h3 className="text-3xl font-display font-bold text-brand-950">0</h3>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 border border-sky-100">
                          <Grid3X3Icon className="h-6 w-6 text-sky-600" />
                        </div>
                      </div>
                      <div className="mt-4 text-sm text-brand-400">No upcoming milestones</div>
                    </div>
                  </div>

                  {/* Personal Info Card */}
                  <div className="rounded-[24px] border border-cyan-100 bg-white/80 p-6 md:p-8 shadow-sm backdrop-blur-xl">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-brand-950">Personal Information</h3>
                      <Button
                        variant="outline"
                        className="h-9 rounded-full border-cyan-200 text-cyan-700 hover:bg-cyan-50"
                        onClick={() => setActiveTab("settings")}
                      >
                        Edit
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                      <div>
                        <div className="flex items-center gap-2 text-brand-400 mb-1">
                          <User className="h-4 w-4" />
                          <span className="text-xs font-bold uppercase tracking-wider">Full Name</span>
                        </div>
                        <p className="font-semibold text-brand-900">{user.name}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-brand-400 mb-1">
                          <Mail className="h-4 w-4" />
                          <span className="text-xs font-bold uppercase tracking-wider">Email</span>
                        </div>
                        <p className="font-semibold text-brand-900">{user.email}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-brand-400 mb-1">
                          <Phone className="h-4 w-4" />
                          <span className="text-xs font-bold uppercase tracking-wider">Phone</span>
                        </div>
                        <p className="font-semibold text-brand-900">{user.phone ?? "—"}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-brand-400 mb-1">
                          <MapPin className="h-4 w-4" />
                          <span className="text-xs font-bold uppercase tracking-wider">Account Status</span>
                        </div>
                        <p className="font-semibold text-brand-900">
                          {user.kycStatus ? user.kycStatus : "KYC Pending"}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "settings" && (
                <motion.div
                  key="settings"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-[24px] border border-cyan-100 bg-white/80 p-6 md:p-8 shadow-sm backdrop-blur-xl space-y-8"
                >
                  <div>
                    <h3 className="text-xl font-bold text-brand-950 mb-1">Account Settings</h3>
                    <p className="text-sm text-brand-500">Update your personal details and contact information.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2 sm:col-span-2">
                      <label className="text-xs font-bold text-brand-950 uppercase tracking-wider ml-1">
                        Full Name
                      </label>
                      <Input
                        defaultValue={user.name}
                        className="h-12 rounded-xl border-slate-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-brand-950 uppercase tracking-wider ml-1">
                        Email Address
                      </label>
                      <Input
                        defaultValue={user.email}
                        type="email"
                        className="h-12 rounded-xl border-slate-200"
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-brand-950 uppercase tracking-wider ml-1">
                        Phone Number
                      </label>
                      <Input
                        defaultValue={user.phone ?? ""}
                        className="h-12 rounded-xl border-slate-200"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                    <Button variant="ghost" className="rounded-xl h-12 px-6" onClick={() => setActiveTab("overview")}>
                      Cancel
                    </Button>
                    <Button className="rounded-xl h-12 px-8 bg-brand-950 text-white hover:bg-cyan-500 hover:text-slate-950">
                      Save Changes
                    </Button>
                  </div>
                </motion.div>
              )}

              {(activeTab === "investments" || activeTab === "security") && (
                <motion.div
                  key="other"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-[24px] border border-cyan-100 bg-white/80 p-12 shadow-sm backdrop-blur-xl flex flex-col items-center justify-center text-center min-h-[400px]"
                >
                  <div className="h-16 w-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                    <Settings className="h-8 w-8 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-950 mb-2">Coming Soon</h3>
                  <p className="text-brand-500 max-w-sm">
                    This section is currently under development. Check back later for updates.
                  </p>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  )
}

function Grid3X3Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
    </svg>
  )
}
