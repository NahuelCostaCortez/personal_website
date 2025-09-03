"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import TrustedBySection from "@/components/trusted-by-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import PortfolioSection from "@/components/teaching-section"
import ResearchSection from "@/components/research-section"
import ServicesSection from "@/components/services-section"
import BlogSection from "@/components/blog-section"
import Footer from "@/components/footer"
import ScrollFadeWrapper from "@/components/scroll-fade-wrapper"

export default function Home() {
  // Handle URL fragments on page load
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash
      if (hash) {
        // Remove the # symbol
        const sectionId = hash.substring(1)
        // Wait a bit for the page to fully load
        setTimeout(() => {
          const element = document.getElementById(sectionId)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 100)
      }
    }

    // Handle initial load
    handleHashScroll()

    // Handle hash changes (when navigating with browser back/forward)
    window.addEventListener("hashchange", handleHashScroll)

    return () => {
      window.removeEventListener("hashchange", handleHashScroll)
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Navbar />

      <ScrollFadeWrapper delay={100}>
        <HeroSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={200} id="trusted-by">
        <TrustedBySection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={300}>
        <AboutSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={350}>
        <ExperienceSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={400}>
        <ResearchSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={500}>
        <PortfolioSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={600}>
        <ServicesSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={700}>
        <BlogSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={800}>
        <Footer />
      </ScrollFadeWrapper>
    </main>
  )
}