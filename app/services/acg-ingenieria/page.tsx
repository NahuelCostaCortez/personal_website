"use client"


import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Clock, Users, Tag } from "lucide-react"
import { getServiceBySlug } from "@/lib/services-data"
import { useLanguage } from "@/contexts/language-context"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const SERVICE_SLUG = "acg-ingenieria"

export default function ACGIngenieriaPage() {
  const { language } = useLanguage()
  const service = getServiceBySlug(SERVICE_SLUG)

  if (!service) {
    return <div>Entry not found</div>
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(language === "es" ? "es-ES" : "en-US", {
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
            {/* Back Button */}
            <Link
              href="/#services"
              className="inline-flex items-center text-white/75 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              {language === "es" ? "Volver a Servicios" : "Back to Services"}
            </Link>

            {/* Service Image */}
            {service.image && (
              <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
                <Image
                  src={service.image}
                  alt={service.title[language]}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            )}

            {/* Category Badge */}
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(service.category)}`}>
                {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {service.title[language]}
            </h1>

            {/* Description */}
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              {service.description[language]}
            </p>

            {/* Service Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="flex items-center text-white/60 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{language === "es" ? "Fecha" : "Date"}</span>
                </div>
                <p className="text-white font-medium">{formatDate(service.date)}</p>
              </div>

              {service.location && (
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <div className="flex items-center text-white/60 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{language === "es" ? "Ubicación" : "Location"}</span>
                  </div>
                  <p className="text-white font-medium">{service.location[language]}</p>
                </div>
              )}

              {service.duration && (
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <div className="flex items-center text-white/60 mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{language === "es" ? "Duración" : "Duration"}</span>
                  </div>
                  <p className="text-white font-medium">{service.duration}</p>
                </div>
              )}

              {service.audience && (
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <div className="flex items-center text-white/60 mb-2">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{language === "es" ? "Audiencia" : "Audience"}</span>
                  </div>
                  <p className="text-white font-medium">{service.audience[language]}</p>
                </div>
              )}
            </div>

            {/* Tags */}
            {service.tags[language].length > 0 && (
              <div className="mb-6">
                <div className="flex items-center text-white/60 mb-4">
                  <Tag className="w-4 h-4 mr-2" />
                  <span className="text-sm">{language === "es" ? "Etiquetas" : "Tags"}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.tags[language].map((tag, index) => (
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

        {/* CUSTOM CONTENT SECTION FOR AI FUNDAMENTALS WORKSHOP */}
        <section className="pt-2 pb-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">
                {language === "es" ? "Acerca de este Taller" : "About This Workshop"}
              </h2>
              
              <div className="prose prose-invert max-w-none">
                {language === "es" ? (
                  <>
                    <p className="text-white/80 leading-relaxed mb-4">
                      TO-DO
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-white/80 leading-relaxed mb-4">
                      TO-DO
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
