"use client"

import { useState, useEffect } from "react"
import { Calendar, Search, MapPin, Clock, Users, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import { Service } from "@/lib/services-data"

interface Review {
  id: string
  name: {
    en: string
    es: string
  }
  company: string
  review: {
    en: string
    es: string
  }
  image?: string
}

export default function ServicesSection() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)
  const { t, language } = useLanguage()
  
  const ITEMS_PER_PAGE = 3
  const REVIEWS_PER_PAGE = 3

  // Sample reviews data
  const reviews: Review[] = [
    {
      id: "1",
      name: { en: "Pablo Montes", es: "Pablo Montes" },
      company: "ACG Ingeniería S.A.",
      review: {
        en: "Thanks to the AI workshop I discovered new functionalities of AI that I didn't know about, as well as other types of AI. Very enriching.",
        es: "Gracias al curso he descubierto funcionalidades de la IA que desconocía, además de otro tipos de IAs. Muy enriquecedor."
      },
      image: "/placeholder-user.jpg"
    },
    {
      id: "2",
      name: { en: "Álvaro González Marín", es: "Álvaro González Marín" },
      company: "Consejería de Derechos Sociales y Bienestar, Principado de Asturias",
      review: {
        en: "Thank you for the course. It has been a pleasure and I left wanting more. Good luck with your research. Thanks.",
        es: "Muchas gracias por el curso. Ha sido un placer y me he quedado con ganas de más. Mucho ánimo con tus investigaciones. Gracias."
      },
      image: "/placeholder-user.jpg"
    },
    {
      id: "3",
      name: { en: "Raquel García García", es: "Raquel García García" },
      company: "Unidad Especializada de Tabaquismo del Área IV de Oviedo",
      review: {
        en: "Nahuel, the course was great; it flew by and I would have loved it to last three times longer. Not everyone knows how to transmit their knowledge like you do, and with that level of professionalism and commitment.",
        es: "Nahuel, te agradecí en los comentarios abiertos del chat y lo vuelvo a hacer por aquí. El curso estuvo genial; se me pasó volando y me hubiese encantado que durara el triple de horas. No todo el mundo sabe transmitir sus conocimientos como tú lo haces, y con ese grado de profesionalidad y compromiso. Un abrazo enorme."
      },
      image: "/placeholder-user.jpg"
    },
    {
      id: "4",
      name: { en: "Pablo Delgado Cuesta", es: "Pablo Delgado Cuesta" },
      company: "Jefe de Proyectos en Dirección Gral. de Seguridad y Estrategia Digital del Principado de Asturias",
      review: {
        en: "Thanks Nahuel. Not all speakers master the topic and also have a clear orientation to the student. I hope they count on you for future courses!",
        es: "Gracias Nahuel. No siempre hay ponentes que dominen el tema y además tengan una clara orientación al alumnado. ¡Espero que cuenten contigo para futuros cursos!"
      },
      image: "/placeholder-user.jpg"
    },
    {
      id: "5",
      name: { en: "Paloma Sainz", es: "Paloma Sainz" },
      company: "Instituto Asturiano de Administración Pública",
      review: {
        en: "It was my first time dealing with this world of AI, and although I'm very bad, I really liked the course and it opened up possibilities that I didn't know I had. Thank you for the classes, they were complete, fun, and very useful.",
        es: "Es la primera vez que tomaba contacto con este mundo de la IA, y aunque estoy muy pez, me ha gustado mucho el curso y me ha abierto posibilidades con las que no contaba. Muchas gracias por las clases, han sido completas, amenas, y muy útiles."
      },
      image: "/placeholder-user.jpg"
    },
	{
		id: "6",
		name: { en: "Alejandro Cabrales González", es: "Alejandro Cabrales González" },
		company: "Dirección General de Estrategia Digital e Inteligencia Artificial, Principado de Asturias",
		review: {
			en: "Congratulations on the good course you are offering. There are things I already knew about this subject, but I have definitely discovered thanks to you other many things. Thank you for everything.",
			es: "Felicitarte por el buen curso que nos estas ofreciendo. Hay cosas que ya conocía de toda esta materia, pero sí que he descubierto gracias ti otras muchas. Gracias por todo."
		},
		image: "/placeholder-user.jpg"
	},
	{
		id: "7",
		name: { en: "José Luis García Luengo", es: "José Luis García Luengo" },
		company: "Garrigues",
		review: {
		  en: "I reiterate my thanks for your work and dedication, it has been a course of great benefit and that exceeds my intention to get a little ahead in this area. All my support to make it clear how important courses like this are.",
		  es: "Reiterar mi agradecimiento por tu trabajo y dedicación, ha sido un curso de gran aprovechamiento y que cumple con creces mi intención de ponerme un poco al día en este ámbito. Todo mi apoyo para hacer ver la importancia de cursos como este."
		},
		image: "/placeholder-user.jpg"
	},

  ]

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const response = await fetch("/api/services")
      const data = await response.json()
      setServices(data.services || [])
    } catch (error) {
      console.error("Error fetching services:", error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    try {
      if (!dateString) return "Recent"
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    } catch {
      return "Recent"
    }
  }

  const cleanText = (text: string | undefined, fallback = "") => {
    if (!text || text === "undefined" || text.trim() === "") {
      return fallback
    }
    return text.trim()
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

  // Reset page when search changes
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery])

  // Filter services by category
  const currentCourses = services.filter(service => service.category === "course").slice(0, 3)
  const pastServices = services.filter(service => service.category !== "course")
  
  const filteredPastServices = pastServices.filter(
    (service) =>
      service.title.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.title.es.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.es.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tags.en.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      service.tags.es.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  // Pagination logic
  const totalPages = Math.ceil(filteredPastServices.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedPastServices = filteredPastServices.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  const goToPreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }

  // Review carousel navigation
  const totalReviewPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE)
  const currentReviewPage = Math.floor(currentReviewIndex / REVIEWS_PER_PAGE)
  
  const goToPreviousReview = () => {
    const newPage = currentReviewPage === 0 ? totalReviewPages - 1 : currentReviewPage - 1
    setCurrentReviewIndex(newPage * REVIEWS_PER_PAGE)
  }

  const goToNextReview = () => {
    const newPage = currentReviewPage === totalReviewPages - 1 ? 0 : currentReviewPage + 1
    setCurrentReviewIndex(newPage * REVIEWS_PER_PAGE)
  }

  const goToReviewPage = (pageIndex: number) => {
    setCurrentReviewIndex(pageIndex * REVIEWS_PER_PAGE)
  }

  // Get current page reviews
  const getCurrentPageReviews = () => {
    const startIndex = currentReviewPage * REVIEWS_PER_PAGE
    const endIndex = startIndex + REVIEWS_PER_PAGE
    return reviews.slice(startIndex, endIndex)
  }

  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans">
		  {t("services.subtitle2")}
          </h2>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 animate-pulse border border-white/10">
                <div className="h-40 bg-white/10 rounded-lg mb-4"></div>
                <div className="h-4 bg-white/20 rounded mb-4"></div>
                <div className="h-3 bg-white/20 rounded mb-2"></div>
                <div className="h-3 bg-white/20 rounded mb-4"></div>
                <div className="h-8 bg-white/20 rounded"></div>
              </div>
            ))}
          </div>
        )}

        {/* Current Courses Section */}
        {!loading && currentCourses.length > 0 && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t("services.currentCourses")}
              </h3>
              <p className="text-white/75 text-lg max-w-2xl mx-auto">
                {t("services.currentCoursesSubtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCourses.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl block cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                                          <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title[language]}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=200&width=400"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(service.category)}`}>
                        {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">

                    <h3 className="text-white font-semibold text-lg mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors">
                      {service.title[language]}
                    </h3>

                    <p className="text-white/75 text-sm mb-4 line-clamp-3">
                      {service.description[language]}
                    </p>

                    {/* Service Details */}
                    <div className="flex items-center gap-4 text-xs text-white/60 mb-4">
                      {service.location && (
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          <span className="truncate">{service.location[language]}</span>
                        </div>
                      )}
                      {service.duration && (
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{service.duration}</span>
                        </div>
                      )}
                    </div>

                    <div className="inline-flex items-center text-blue-400 group-hover:text-blue-300 font-medium text-sm transition-colors group-hover:translate-x-1 transform duration-200">
                      {t("services.readMore")}
                      <span className="ml-2">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Reviews Section */}
        {!loading && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t("services.reviews")}
              </h3>
              <p className="text-white/75 text-lg max-w-2xl mx-auto">
                {t("services.reviewsSubtitle")}
              </p>
            </div>

            <div className="relative max-w-7xl mx-auto">
              {/* Reviews Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getCurrentPageReviews().map((review, index) => (
                  <div 
                    key={review.id}
                    className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 h-full flex flex-col"
                  >
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-4">
                      <Quote className="w-8 h-8 text-blue-400/60" />
                    </div>

                    {/* Review Text */}
                    <p className="text-white/90 text-sm leading-relaxed mb-6 italic flex-grow text-center">
                      "{review.review[language]}"
                    </p>

                    {/* Reviewer Info */}
                    <div className="flex flex-col items-center text-center">
                      <div className="relative w-12 h-12 mb-3">
                        <img
                          src={review.image || "/placeholder-user.jpg"}
                          alt={review.name[language]}
                          className="w-full h-full rounded-full object-cover border-2 border-white/20"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = "/placeholder-user.jpg"
                          }}
                        />
                      </div>
                      <h4 className="text-white font-semibold text-sm mb-1">
                        {review.name[language]}
                      </h4>
                      <p className="text-blue-400 text-xs font-medium">
                        {review.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              {totalReviewPages > 1 && (
                <>
                  <button
                    onClick={goToPreviousReview}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center group hover:scale-110"
                    aria-label={language === "es" ? "Página anterior" : "Previous page"}
                  >
                    <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>

                  <button
                    onClick={goToNextReview}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center group hover:scale-110"
                    aria-label={language === "es" ? "Siguiente página" : "Next page"}
                  >
                    <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                </>
              )}

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalReviewPages }, (_, pageIndex) => (
                  <button
                    key={pageIndex}
                    onClick={() => goToReviewPage(pageIndex)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentReviewPage === pageIndex
                        ? "bg-blue-400 scale-125"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={language === "es" ? `Ir a página ${pageIndex + 1}` : `Go to page ${pageIndex + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Past Services Section */}
        {!loading && pastServices.length > 0 && (
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t("services.pastExperiences")}
              </h3>
              <p className="text-white/75 text-lg max-w-2xl mx-auto">
                {t("services.pastExperiencesSubtitle")}
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex justify-center mb-8">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
                <input
                  type="text"
                  placeholder={t("services.searchPast")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-full pl-10 pr-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-4">
              {paginatedPastServices.length > 0 ? (
                paginatedPastServices.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="group bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] p-6 block cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Service Image */}
                      <div className="flex-shrink-0 relative">
                                                  <img
                            src={service.image || "/placeholder.svg"}
                            alt={service.title[language]}
                            className="w-full sm:w-24 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = "/placeholder.svg?height=80&width=120"
                          }}
                        />
                        {/* Category Badge */}
                        <div className="absolute -top-2 -right-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(service.category)}`}>
                            {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                          </span>
                        </div>
                      </div>

                      {/* Service Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center text-white/60 text-sm mb-2">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(service.date)}
                        </div>

                        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors">
                          {service.title[language]}
                        </h3>

                        <p className="text-white/75 text-sm mb-3 line-clamp-2">
                          {service.description[language]}
                        </p>

                        {/* Service Details */}
                        <div className="flex items-center gap-4 text-xs text-white/60 mb-3">
                          {service.location && (
                            <div className="flex items-center">
                              <MapPin className="w-3 h-3 mr-1" />
                              <span className="truncate">{service.location[language]}</span>
                            </div>
                          )}
                          {service.duration && (
                            <div className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              <span>{service.duration}</span>
                            </div>
                          )}
                          {service.audience && (
                            <div className="flex items-center">
                              <Users className="w-3 h-3 mr-1" />
                              <span className="truncate">{service.audience[language]}</span>
                            </div>
                          )}
                        </div>

                        <div className="inline-flex items-center text-blue-400 group-hover:text-blue-300 font-medium text-sm transition-colors">
                          {t("services.readMore")}
                          <span className="ml-2">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-white/75 text-lg">
                    {searchQuery 
                      ? `${t("services.noPastServices")} "${searchQuery}"`
                      : t("services.noPastServicesDefault")
                    }
                  </p>
                </div>
              )}
            </div>

            {/* Pagination Controls */}
            {filteredPastServices.length > ITEMS_PER_PAGE && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <button
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label={language === "es" ? "Página anterior" : "Previous page"}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium transition-colors ${
                        currentPage === page
                          ? "bg-blue-600 text-white"
                          : "bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10"
                      }`}
                      aria-label={language === "es" ? `Ir a página ${page}` : `Go to page ${page}`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label={language === "es" ? "Página siguiente" : "Next page"}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Pagination Info */}
            {filteredPastServices.length > 0 && (
              <div className="text-center mt-4">
                <p className="text-white/60 text-sm">
                  {language === "es" 
                    ? `Mostrando ${startIndex + 1}-${Math.min(endIndex, filteredPastServices.length)} de ${filteredPastServices.length} entradas`
                    : `Showing ${startIndex + 1}-${Math.min(endIndex, filteredPastServices.length)} of ${filteredPastServices.length} entries`
                  }
                </p>
              </div>
            )}
          </div>
        )}

        {/* Empty State */}
        {!loading && services.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/75 text-lg">{t("services.noArticles")}</p>
          </div>
        )}
      </div>
    </section>
  )
}
