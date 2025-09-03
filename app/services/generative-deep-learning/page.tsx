"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Clock, Users, Tag } from "lucide-react"
import { getServiceBySlug } from "@/lib/services-data"
import { useLanguage } from "@/contexts/language-context"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const SERVICE_SLUG = "image-generation-course"

export default function ImageGenerationCoursePage() {
  const { language } = useLanguage()
  const service = getServiceBySlug(SERVICE_SLUG)

  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Entry Not Found</h1>
          <Link href="/#services" className="text-blue-400 hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    )
  }

  // Add loading state for language context
  if (!language) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    )
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
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <Link
              href="/#services"
              className="inline-flex items-center text-white/75 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              {language === "es" ? "Volver a Servicios" : "Back to Services"}
            </Link>

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

            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(service.category)}`}>
                {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {service.title[language]}
            </h1>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              {service.description[language]}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
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

        {/* CUSTOM CONTENT SECTION FOR DEEP LEARNING COURSE */}
        <section className="pt-2 pb-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">
                {language === "es" ? "Acerca de este Curso" : "About This Course"}
              </h2>
              
              <div className="prose prose-invert max-w-none">
                {language === "es" ? (
                  <>
                    <p className="text-white/80 leading-relaxed mb-4">
                      Este curso está diseñado para empleados cuya formación no sea en IA pero que quieran aprender sobre cómo utilizar las principales herramientas en su workflow de trabajo habitual.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-white mb-3">Contenido del Curso</h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Módulo 1: Introducción a la IA Generativa</h4>
                        <ul className="text-white/80 space-y-1 text-sm">
                          <li>• Presentación e introducción</li>
                          <li>• IA Supervisada vs IA Generativa</li>
                          <li>• ChatGPT</li>
                          <li>• Tokens y ventana de contexto</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Módulo 2: Casos de uso</h4>
                        <ul className="text-white/80 space-y-1 text-sm">
                          <li>• Elección de modelos</li>
                          <li>• RAG (Retrieval-Augmented Generation)</li>
                          <li>• Deep Research</li>
                          <li>• Trabajo con archivos</li>
                          <li>• Canvas</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Módulo 3: Aplicaciones avanzadas y modalidades</h4>
                        <ul className="text-white/80 space-y-1 text-sm">
                          <li>• Voz</li>
                          <li>• Imágenes y vídeo</li>
                          <li>• NotebookLM</li>
						  <li>• Memoria</li>
						  <li>• Casos de uso empresariales</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Módulo 4: Buenas prácticas y consideraciones éticas</h4>
                        <ul className="text-white/80 space-y-1 text-sm">
                          <li>• Privacidad y seguridad de los datos</li>
                          <li>• Sesgos en modelos generativos</li>
                          <li>• Uso responsable de la IA</li>
                          <li>• Futuro de la IA generativa</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3">Incluye</h3>
                    <ul className="text-white/80 space-y-2 mb-6">
                      <li>• 4 sesiones de 2 horas</li>
                      <li>• Materiales prácticos</li>
                      <li>• Mentoría individual</li>
                      <li>• Certificado de finalización</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <p className="text-white/80 leading-relaxed mb-4">
                      This course is designed for employees whose training is not in IA but who want to learn how to use the main tools in their daily work workflow.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-white mb-3">Course Content</h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Module 1: Introduction to Generative AI</h4>
                        <ul className="text-white/80 space-y-1 text-sm">
                          <li>• Presentation and introduction</li>
                          <li>• Supervised AI vs Generative AI</li>
                          <li>• ChatGPT</li>
                          <li>• Tokens and context window</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Module 2: Use cases</h4>
                        <ul className="text-white/80 space-y-1 text-sm">
                          <li>• Choice of models</li>
                          <li>• RAG (Retrieval-Augmented Generation)</li>
                          <li>• Deep Research</li>
                          <li>• Working with files</li>
                          <li>• Canvas</li>
                        </ul>
                      </div>
                    </div>

					<div className="grid md:grid-cols-2 gap-6 mb-6">
						<div>
							<h4 className="text-lg font-medium text-white mb-2">Module 3: Advanced applications and modalities</h4>
							<ul className="text-white/80 space-y-1 text-sm">
								<li>• Voice</li>
								<li>• Images and video</li>
								<li>• NotebookLM</li>
								<li>• Memory</li>
								<li>• Business use cases</li>
							</ul>
						</div>
						<div>
							<h4 className="text-lg font-medium text-white mb-2">Module 4: Best practices and ethical considerations</h4>
							<ul className="text-white/80 space-y-1 text-sm">
								<li>• Privacy and data security</li>
								<li>• Bias in generative models</li>
								<li>• Responsible use of AI</li>
								<li>• Future of generative AI</li>
							</ul>
						</div>
					</div>

                    <h3 className="text-xl font-semibold text-white mb-3">Includes</h3>
                    <ul className="text-white/80 space-y-2 mb-6">
                      <li>• 4 sessions of 2 hours each</li>
                      <li>• Practical materials</li>
                      <li>• Access to GPUs for training</li>
                      <li>• Individual mentoring</li>
                      <li>• Certificate of completion</li>
                    </ul>
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
