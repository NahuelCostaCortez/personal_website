"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { MessageCircle } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          {/* About Me - moved to first column */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">{t("footer.about")}</h3>
            <div className="space-y-3">
              <div
                className="text-white/75 hover:text-white transition-colors cursor-pointer"
                onClick={() => scrollToSection("about")}
              >
                {t("footer.about.bio")}
              </div>
              <div
                className="text-white/75 hover:text-white transition-colors cursor-pointer"
                onClick={() => scrollToSection("research")}
              >
                {t("footer.about.research")}
              </div>
			  <div
                className="text-white/75 hover:text-white transition-colors cursor-pointer"
                onClick={() => scrollToSection("teaching")}
              >
                {t("footer.about.teaching")}
              </div>
              <div
                className="text-white/75 hover:text-white transition-colors cursor-pointer"
                onClick={() => scrollToSection("services")}
              >
                {t("footer.about.talks")}
              </div>
            </div>
          </div>

          {/* Others - new second column */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">{t("footer.others")}</h3>
            <div className="space-y-3">
              <div
                className="text-white/75 hover:text-white transition-colors cursor-pointer"
                onClick={() => scrollToSection("blog")}
              >
                {t("footer.others.blog")}
              </div>
              <div
                className="text-white/75 hover:text-white transition-colors cursor-pointer"
                onClick={() => window.open("/documents/cv_nahuel_costa.pdf", "_blank")}
              >
                {t("footer.others.cv")}
              </div>
            </div>
          </div>

          {/* Let's Connect */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">{t("footer.connect")}</h3>
            <p className="text-white/75 mb-4">
              {t("footer.connect.project")}{" "}
              
            </p>

            <div className="mb-6">
              <Button
                className="glass glass-hover border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 group transition-all duration-300 hover:scale-105"
                onClick={() =>
                  window.open("https://outlook.office.com/bookwithme/user/547ba113c42547e0b719884fed1e8162@uniovi.es?anonymous&ep=plink", "_blank")
                }
              >
                <MessageCircle className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                {t("about.cta")}
              </Button>
            </div>

            <div className="flex space-x-4 justify-center md:justify-start">
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                onClick={() => window.open("mailto:costanahuel@uniovi.es", "_blank")}
              >
                <Image src="/icons/mail.svg" alt="Mail" width={20} height={20} className="w-5 h-5" />
              </Button>
			  <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                onClick={() => window.open("https://scholar.google.com/citations?user=mrdKa3EAAAAJ&hl=es", "_blank")}
              >
                <Image src="/icons/scholar.svg" alt="Scholar" width={20} height={20} className="w-5 h-5" />
              </Button>
			  <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                onClick={() => window.open("https://github.com/NahuelCostaCortez", "_blank")}
              >
                <Image src="/icons/github.svg" alt="Github" width={20} height={20} className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                onClick={() => window.open("https://www.linkedin.com/in/nahuel-costa-cortez/", "_blank")}
              >
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} className="w-5 h-5" />
              </Button>
			  <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                onClick={() => window.open("https://twitter.com/nahucostacortez", "_blank")}
              >
                <Image src="/icons/x.svg" alt="X (Twitter)" width={20} height={20} className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center items-center pt-8 border-t border-white/10">
          <div className="text-white/75 text-sm">
            <span className="font-bold text-white">NAHUELCOSTA.COM</span> © 2025
          </div>
        </div>
      </div>
    </footer>
  )
}
