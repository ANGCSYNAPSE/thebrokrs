import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SupportPopup from "@/components/SupportPopup"
import Providers from "@/app/providers"
import { cn } from "@/lib/utils"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit"
})

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: "The Brokrs - Where Skills, Business & Opportunity Meet",
  description: "The Brokrs: A premier community-driven platform for strategic land ownership, investment clusters, and business verticals with 18% lifetime returns.",
  keywords: "The Brokrs, land ownership, mushroom farming investment, investment clusters, business opportunity, high ROI investment India, collaborative growth",
  authors: [{ name: "The Brokrs" }],
  creator: "The Brokrs",
  openGraph: {
    title: "The Brokrs - Empowering Your Business Vision",
    description: "Join a revolutionary platform where skills are the currency and collective growth is the goal. Explore 18% lifetime returns.",
    url: "https://thebrokrs.co.in",
    siteName: "The Brokrs",
    images: [
      {
        url: "https://thebrokrs.co.in/wp-content/uploads/2024/08/Final-brokrs-grand-sapphire-2-1024x422.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en" className="scroll-smooth">
      <body className={cn(
        inter.variable,
        outfit.variable,
        "antialiased"
      )}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <SupportPopup />
        </Providers>
      </body>
    </html>
  )
}
