import Hero from "@/components/hero/Hero"
import About from "@/components/sections/About"
import Projects from "@/components/sections/Projects"
import UpcomingProject from "@/components/sections/UpcomingProject"
import LaunchingSoon from "@/components/sections/LaunchingSoon"
import Process from "@/components/sections/Process"
import Services from "@/components/sections/Services"
import Team from "@/components/sections/Team"
import Contact from "@/components/sections/Contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Dynamic Sections */}
      <Hero />
      <About />
      <Projects />
      <UpcomingProject />
      <LaunchingSoon />
      <Process />
      <Services />
      {/* <Team /> */}
      <Contact />
    </main>
  )
}
