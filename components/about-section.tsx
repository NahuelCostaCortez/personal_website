"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { MessageCircle, Mail, GraduationCap, Github } from "lucide-react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  const renderBioWithLinks = (text: string) => {
    // Replace link placeholders with actual JSX links
    const processedText = text
      .replace(
        /\[Eluter\]/g,
        '<a href="https://www.eluter.com/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 underline underline-offset-2 transition-colors">Eluter</a>',
      )
      .replace(
        /\[DESAFIA\]/g,
        '<a href="https://desafia.tech/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 underline underline-offset-2 transition-colors">DESAFIA</a>',
      )
      .replace(
        /\[Polkadot Blockchain Academy\]/g,
        '<a href="https://pbax.polkadot.academy/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 underline underline-offset-2 transition-colors">Polkadot Blockchain Academy</a>',
      )
      .replace(
        /\[Devconnect\]/g,
        '<a href="https://devconnect.org/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 underline underline-offset-2 transition-colors">Devconnect</a>',
      )

    // Process bold text
    const parts = processedText.split(/(\*.*?\*)/g)
    return parts.map((part, index) => {
      if (part.startsWith("*") && part.endsWith("*")) {
        const boldContent = part.slice(1, -1)
        return (
          <strong key={index} className="text-white font-semibold" dangerouslySetInnerHTML={{ __html: boldContent }} />
        )
      }
      return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute -inset-4 glass rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <Image
                  src="/images/about_me.jpg"
                  alt="Nahuel Costa - Vibecoder & Growth Strategist professional headshot"
                  width={400}
                  height={400}
                  className="relative rounded-full border-4 border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">About Me – Nahuel Costa</h2>

              <div className="space-y-4 text-white/75 leading-relaxed">
                <p>{renderBioWithLinks(t("about.bio1"))}</p>
                <p>{renderBioWithLinks(t("about.bio2"))}</p>
                <p>{renderBioWithLinks(t("about.bio3"))}</p>
              </div>

              <div className="flex justify-center lg:justify-start items-center gap-6 mt-8">
                <a
                  href="mailto:costanahuel@example.com"
                  className="hover:opacity-80 transition-opacity p-3 rounded-full border border-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300"
                >
                  <Mail className="w-8 h-8 text-white" />
                </a>
                <a
                  href="https://scholar.google.com/citations?user=mrdKa3EAAAAJ&hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity p-3 rounded-full border border-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300"
                >
                  <GraduationCap className="w-8 h-8 text-white" />
                </a>
                <a
                  href="https://github.com/NahuelCostaCortez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity p-3 rounded-full border border-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300"
                >
                  <Github className="w-8 h-8 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nahuel-costa-cortez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/icons/linkedin.svg"
                    alt="LinkedIn Profile"
                    width={40}
                    height={40}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <a
                  href="https://x.com/nahucostacortez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/icons/x.svg"
                    alt="X (Twitter) Profile"
                    width={40}
                    height={40}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Button
                  className="glass glass-hover border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 mt-8 group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
                  onClick={() =>
                    window.open("https://outlook.office.com/bookwithme/user/547ba113c42547e0b719884fed1e8162@uniovi.es?anonymous&ep=plink", "_blank")
                  }
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  {t("about.cta")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
