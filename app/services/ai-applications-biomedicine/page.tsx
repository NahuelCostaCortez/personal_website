"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Clock, Users, Tag } from "lucide-react"
import { getServiceBySlug } from "@/lib/services-data"
import { useLanguage } from "@/contexts/language-context"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const SERVICE_SLUG = "ai-applications-biomedicine"

export default function AIBiomedicinePage() {
  const { language } = useLanguage()
  const service = getServiceBySlug(SERVICE_SLUG)

  // Use fallback language if context hasn't loaded yet
  const currentLanguage = (language || "en") as "en" | "es"

  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Entry Not Found</h1>
          <Link href="/#services" className="text-blue-400 hover:underline">
            Back to Talks
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(currentLanguage === "es" ? "es-ES" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "workshop":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30"
      case "talk":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      case "course":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30"
      case "consulting":
        return "bg-orange-500/20 text-orange-300 border-orange-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <Link
              href="/#services"
              className="inline-flex items-center text-white/75 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              {currentLanguage === "es" ? "Volver a Servicios" : "Back to Services"}
            </Link>

            {service.image && (
              <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
                <Image
                  src={service.image}
                  alt={service.title[currentLanguage]}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            )}

            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(service.category)}`}>
                {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {service.title[currentLanguage]}
            </h1>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              {service.description[currentLanguage]}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="flex items-center text-white/60 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{currentLanguage === "es" ? "Fecha" : "Date"}</span>
                </div>
                <p className="text-white font-medium">{formatDate(service.date)}</p>
              </div>

              {service.location && (
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <div className="flex items-center text-white/60 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{currentLanguage === "es" ? "Ubicación" : "Location"}</span>
                  </div>
                  <p className="text-white font-medium">{service.location[currentLanguage]}</p>
                </div>
              )}

              {service.duration && (
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <div className="flex items-center text-white/60 mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{currentLanguage === "es" ? "Duración" : "Duration"}</span>
                  </div>
                  <p className="text-white font-medium">{service.duration}</p>
                </div>
              )}

              {service.audience && (
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <div className="flex items-center text-white/60 mb-2">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{currentLanguage === "es" ? "Audiencia" : "Audience"}</span>
                  </div>
                  <p className="text-white font-medium">{service.audience[currentLanguage]}</p>
                </div>
              )}
            </div>

            {service.tags[currentLanguage].length > 0 && (
              <div className="mb-6">
                <div className="flex items-center text-white/60 mb-4">
                  <Tag className="w-4 h-4 mr-2" />
                  <span className="text-sm">{currentLanguage === "es" ? "Etiquetas" : "Tags"}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.tags[currentLanguage].map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CUSTOM CONTENT SECTION FOR AI BIOMEDICINE TALK */}
        <section className="pt-2 pb-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">
                {currentLanguage === "es" ? "Acerca de esta Charla" : "About This Talk"}
              </h2>
              
              <div className="prose prose-invert max-w-none">
                {currentLanguage === "es" ? (
                  <>
                    <p className="text-white/80 leading-relaxed mb-4">
                      Esta charla específica cubre las aplicaciones de IA en biomedicina, 
                      incluyendo mi experiencia trabajando con Medtronic y HUCA.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-white mb-3">Experiencia Compartida</h3>
                    <ul className="text-white/80 space-y-2 mb-6">
                      <li>• Trabajo con dispositivos médicos en Medtronic</li>
                      <li>• Colaboración con Hospital Universitario Central de Asturias</li>
                      <li>• Análisis de imágenes médicas con IA</li>
                      <li>• Sistemas de diagnóstico asistido</li>
                      <li>• Ética en IA médica</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mb-3">Contexto</h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      Presentada en CEU San Pablo en marzo de 2022, esta charla cubrió desde 
                      los orígenes de la IA hasta su aplicación actual en múltiples disciplinas médicas.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-white/80 leading-relaxed mb-4">
                      This specific talk covers AI applications in biomedicine, 
                      including my experience working with Medtronic and HUCA.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-white mb-3">Experience Shared</h3>
                    <ul className="text-white/80 space-y-2 mb-6">
                      <li>• Work with medical devices at Medtronic</li>
                      <li>• Collaboration with Hospital Universitario Central de Asturias</li>
                      <li>• Medical image analysis with AI</li>
                      <li>• Computer-aided diagnosis systems</li>
                      <li>• Ethics in medical AI</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mb-3">Context</h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      Presented at CEU San Pablo in March 2022, this talk covered from 
                      the origins of AI to its current application in multiple medical disciplines.
                    </p>
                  </>
                )}

                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 mt-6">
                  <p className="text-purple-300 text-sm">
                    💡 {currentLanguage === "es" 
                      ? "Puedes editar este contenido específico en: app/services/ai-applications-biomedicine/page.tsx"
                      : "You can edit this specific content in: app/services/ai-applications-biomedicine/page.tsx"
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
