"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

interface ExperienceItem {
  company: string
  position: string
  period: string
  location: string
  description: string
  logo?: string
  logoSrc?: string
}

export default function ExperienceSection() {
  const { t } = useLanguage()

  const renderDescription = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.trim() === '') {
        return <br key={index} />
      }
      return (
        <span key={index}>
          {line}
          {index < text.split('\n').length - 1 && <br />}
        </span>
      )
    })
  }

    const experiences: ExperienceItem[] = [

	{
		company: t("experience.assistant.company"),
		position: t("experience.assistant.position"),
		period: t("experience.assistant.period"),
		location: t("experience.assistant.location"),
		description: t("experience.assistant.description"),
		logoSrc: "/icons/experience/uniovi.svg"
	},
    {
      company: t("experience.alberta.company"),
      position: t("experience.alberta.position"),
      period: t("experience.alberta.period"),
      location: t("experience.alberta.location"),
      description: t("experience.alberta.description"),
      logoSrc: "/images/clients/uofa.png"
    },
	{
		company: t("experience.ceu.company"),
		position: t("experience.ceu.position"),
		period: t("experience.ceu.period"),
		location: t("experience.ceu.location"),
		description: t("experience.ceu.description"),
		logoSrc: "/images/clients/ceu.png"
	},
	{
		company: t("experience.lecturer.company"),
		position: t("experience.lecturer.position"),
		period: t("experience.lecturer.period"),
		location: t("experience.lecturer.location"),
		description: t("experience.lecturer.description"),
		logoSrc: "/icons/experience/uniovi.svg"
	},
	{
		company: t("experience.montpellier.company"),
		position: t("experience.montpellier.position"),
		period: t("experience.montpellier.period"),
		location: t("experience.montpellier.location"),
		description: t("experience.montpellier.description"),
		logoSrc: "/icons/experience/montpellier.svg"
	  },
	  {
		company: t("experience.hawaii.company"),
		position: t("experience.hawaii.position"),
		period: t("experience.hawaii.period"),
		location: t("experience.hawaii.location"),
		description: t("experience.hawaii.description"),
		logoSrc: "/icons/experience/hawaii.svg"
	  },
	  {
		company: t("experience.technician.company"),
		position: t("experience.technician.position"),
		period: t("experience.technician.period"),
		location: t("experience.technician.location"),
		description: t("experience.technician.description"),
		logoSrc: "/icons/experience/uniovi.svg"
	  },
	  {
		company: t("experience.becario.company"),
		position: t("experience.becario.position"),
		period: t("experience.becario.period"),
		location: t("experience.becario.location"),
		description: t("experience.becario.description"),
		logoSrc: "/icons/experience/uniovi.svg"
	  },
  ]

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          {t("experience.title")}
        </h2>
        
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-6">
              {/* Timeline dot and line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center overflow-hidden">
                  {exp.logoSrc ? (
                    <Image
                      src={exp.logoSrc}
                      alt={`${exp.company} logo`}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  ) : (
                    <span className="text-white font-bold text-lg">{exp.logo}</span>
                  )}
                </div>
                {index < experiences.length - 1 && (
                  <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent mt-2"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg text-blue-300 mb-2">
                      {exp.company}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-sm text-white/60">
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <div className="text-white/75 leading-relaxed">
                    {renderDescription(exp.description)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
