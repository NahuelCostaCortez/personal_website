"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const clients = [
  { name: "UniversityOfOviedo", logo: "/images/clients/uniovi.png", url: "https://www.uniovi.es/"},
  { name: "TotalEnergies", logo: "/images/clients/total_energies.png", url: "https://totalenergies.com/" },
  { name: "Zitron", logo: "/images/clients/zitron.png", url: "https://www.zitron.com/" },
  { name: "UniversityOfHawaii", logo: "/images/clients/uhawaii.png", url: "https://www.hawaii.edu/" },
  { name: "Huca", logo: "/images/clients/huca.png", url: "https://www.astursalud.es/astursalud" },
  { name: "ConsejeriaSalud", logo: "/images/clients/consejeria_salud.png", url: "https://www.astursalud.es/categorias/-/categorias/ciudadania/03000estructura-organizativa-y-directorios/01000consejeria-de-salud" },
  { name: "IAA", logo: "/images/clients/iaap.png", url: "https://iaap.asturias.es/"},
  { name: "UofA", logo: "/images/clients/uofa.png", url: "https://www.ualberta.ca/" },
  { name: "Medtronic", logo: "/images/clients/medtronic.png", url: "https://www.medtronic.com/" },
  { name: "Izertis", logo: "/images/clients/izertis.png", url: "https://www.izertis.com/", small: true },
  { name: "CEU", logo: "/images/clients/ceu.png", url: "https://www.ceu.es/" },
  { name: "CatedraConcepcionArenal", logo: "/images/clients/concepcion_arenal.png", url: "https://caagenda2030.uniovi.es/"},
  { name: "ACG", logo: "/images/clients/acg.png", url: "http://www.acgingenieria.com/ingenieria-electrica/acg-ingenieria/portada_44_1_ap.html"},
  { name: "RollsRoyce", logo: "/images/clients/rolls_royce.png", url: "https://www.rolls-royce.com/"},
]

export default function TrustedBySection() {
  const { t } = useLanguage()
  const [translateX, setTranslateX] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [itemWidth, setItemWidth] = useState(0)

  useEffect(() => {
    const calculateItemWidth = () => {
      if (containerRef.current) {
        const firstItem = containerRef.current.querySelector(".logo-item")
        if (firstItem) {
          const rect = firstItem.getBoundingClientRect()
          const styles = window.getComputedStyle(firstItem)
          const marginLeft = Number.parseInt(styles.marginLeft)
          const marginRight = Number.parseInt(styles.marginRight)
          setItemWidth(rect.width + marginLeft + marginRight)
        }
      }
    }

    calculateItemWidth()
    window.addEventListener("resize", calculateItemWidth)

    return () => window.removeEventListener("resize", calculateItemWidth)
  }, [])

  useEffect(() => {
    if (itemWidth === 0 || isPaused) return

    const animate = () => {
      setTranslateX((prev) => {
        const newTranslateX = prev - 1 // Move 1px per frame
        const resetPoint = -(itemWidth * clients.length) // Reset when first set is completely hidden

        if (newTranslateX <= resetPoint) {
          return 0 // Reset to start position
        }
        return newTranslateX
      })
    }

    const intervalId = setInterval(animate, 16) // ~60fps

    return () => clearInterval(intervalId)
  }, [itemWidth, isPaused])

  const LogoWrapper = ({ client, children }: { client: typeof clients[0], children: React.ReactNode }) => {
    if (client.url) {
      return (
        <Link 
          href={client.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {children}
        </Link>
      )
    }
    return <div className="block">{children}</div>
  }

  return (
    <section id="trusted-by" className="py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("trustedBy.title")}</h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">{t("trustedBy.subtitle")}</p>
        </div>

        <div className="relative overflow-hidden">
          <div ref={containerRef} className="flex transition-none" style={{ transform: `translateX(${translateX}px)` }}>
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div key={`first-${index}`} className="logo-item flex-shrink-0 mx-6 flex items-center justify-center">
                <LogoWrapper client={client}>
                  <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer">
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.name} client logo - Nahuel Costa UX design Web3 fintech project portfolio`}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </LogoWrapper>
              </div>
            ))}

            {/* Second set for seamless loop */}
            {clients.map((client, index) => (
              <div key={`second-${index}`} className="logo-item flex-shrink-0 mx-6 flex items-center justify-center">
                <LogoWrapper client={client}>
                  <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer">
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.name} client logo - Nahuel Costa UX design Web3 fintech project portfolio`}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </LogoWrapper>
              </div>
            ))}
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  )
}
