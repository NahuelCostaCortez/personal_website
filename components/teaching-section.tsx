"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Trophy, BookOpen, Users, ChevronLeft, ChevronRight } from "lucide-react"

interface PortfolioItem {
  id: string
  title: string
  image: string
  link: string
  delay: number
}

interface teachingItemData {
  id: string
  translationKey: string
  image: string
  link: string
  delay: number
}

interface MentoredStudent {
  name: string
  year: string
  project: {
    en: string
    es: string
  }
  type: "bachelor" | "master" | "phd"
  status?: "honors" | "ongoing"
  description: {
    en: string
    es: string
  }
  url?: string
}

const teachingItemsData: teachingItemData[] = [
  {
    id: "generative-networks",
    translationKey: "teaching.generativeNetworks",
    image: "/teaching/generative-networks.png",
    link: "/teaching/generative-networks",
    delay: 0,
  },
  {
    id: "business-intelligence",
    translationKey: "teaching.businessIntelligence",
    image: "/teaching/business-intelligence.png",
    link: "/teaching/business-intelligence",
    delay: 100,
  },
  {
    id: "algorithmics",
    translationKey: "teaching.algorithmics",
    image: "/teaching/algorithmics.png",
    link: "/teaching/algorithmics",
    delay: 200,
  },
  {
    id: "innovation-projects",
    translationKey: "teaching.innovationProjects",
    image: "/teaching/innovation-projects.png",
    link: "/teaching/innovation-projects",
    delay: 300,
  },
]

const mentoredStudents: MentoredStudent[] = [
	{
		name: "Internships",
		year: "2021-Present",
		type: "bachelor",
		status: "ongoing",
		project: {
		  en: "Supervision of internships in companies",
		  es: "Supervisión de prácticas en empresa"
		},
		description: {
		  en: "Juan Fernández Martínez (Dupont), Marta Pastor Arranz (ArcelorMittal), Pedro Vallina Insua (Merkle), Iratxe García García (Total Energies), Marina Dáder Suárez (Total Energies), Antonio Gómez-Carrera Núñez(Total Energies), Álvaro Alcalde Rodríguez (Total Energies), Rubén Martínez Ginzo (NEO Ingeniería), Razmik Chakhoyan Grigoryan (Accenture), Gabriel Puja Lojo (Mecalux), David González Fernández (ArcelorMittal)",
		  es: "Juan Fernández Martínez (Dupont), Marta Pastor Arranz (ArcelorMittal), Pedro Vallina Insua (Merkle), Iratxe García García (Total Energies), Marina Dáder Suárez (Total Energies), Antonio Gómez-Carrera Núñez(Total Energies), Álvaro Alcalde Rodríguez (Total Energies), Rubén Martínez Ginzo (NEO Ingeniería), Razmik Chakhoyan Grigoryan (Accenture), Gabriel Puja Lojo (Mecalux), David González Fernández (ArcelorMittal)"
		}
	  },
	{
		name: "Samuel Camba Fernández",
		year: "2023-2027",
		type: "phd",
		status: "ongoing",
		project: {
		  en: "Prognosis of Degenerative Diseases Using Unsupervised and Partially Supervised Learning Techniques",
		  es: "Pronóstico de Enfermedades Degenerativas Usando Técnicas de Aprendizaje No Supervisado y Semi-Supervisado"
		},
		description: {
		  en: "PhD research focused on developing novel unsupervised and semi-supervised learning techniques for early prediction and prognosis of degenerative diseases.",
		  es: "Tesis doctoral enfocada en desarrollar técnicas novedosas de aprendizaje no supervisado y semi-supervisado para la predicción temprana y pronóstico de enfermedades degenerativas."
		}
	  },
	{
	name: "Jorge Valdenebro Álvarez",
	year: "2025",
	type: "bachelor",
	project: {
		en: "Study and Application of Domain Adaptation Techniques in Deep Learning Models",
		es: "Estudio y Aplicación de Técnicas de Adaptación de Dominio en Modelos de Aprendizaje Profundo"
	},
	description: {
		en: "Analysis of various domain adaptation techniques for the detection of cardiovascular risk, where differences in patient characteristics and capture equipment can influence the accuracy of trained models. Evaluation of the effectiveness of the selected techniques to improve generalization between different electrocardiographic datasets.",
		es: "Análisis de técnicas de adaptación de dominio para la detección de riesgo cardiovascular, donde las diferencias en las características de los pacientes y equipos de captura pueden influir en la precisión de los modelos entrenados. Evaluación de la efectividad de las técnicas seleccionadas para mejorar la generalización entre diferentes datasets electrocardiográficos."
	}
	},
	{
		name: "Mario Rabanal Pérez del Río",
		year: "2025",
		type: "bachelor",
		project: {
		  en: "Intelligent System for Access and Consultation of Legislative Documents",
		  es: "Sistema inteligente de acceso y consulta de documentos legislativos"
		},
		description: {
		  en: "Web tool capable of providing clear, secure and relevant legislative information, assisted by AI. The tool includes the ability to process and understand both structured (sections, tables, regulations) and unstructured (free text, figures, reports) information, ensuring reliability and avoiding typical errors of interpretation or \"alucinations\" of current language models",
		  es: "Herramienta web capaz de proporcionar información legislativa clara, segura y relevante, asistida por IA. La herramienta incluye la capacidad de procesar y entender tanto información estructurada (secciones, tablas, normativas) como no estructurada (texto libre, figuras, informes), garantizando la fiabilidad y evitando los errores de interpretación o \"alucinaciones\" típicos de los modelos de lenguaje actuales"
		}
	},
	{
		name: "Marina Dáder Suárez",
		year: "2025",
		type: "bachelor",
		project: {
		  en: "Adaptability and Generalization of Deep Learning Models in Electrocardiographic Analysis",
		  es: "Adaptabilidad y generalización de modelos de Deep Learning en el análisis electrocardiográfico"
		},
		description: {
		  en: "Study of the generalization of Deep Learning models applied to electrocardiographic data. Exploration of strategies like fine-tuning and ICL to transfer knowledge between different datasets without requiring large training data volumes.",
		  es: "Estudio de la generalización de modelos de Deep Learning aplicados a datos electrocardiográficos. Exploración de estrategias como fine-tuning e ICL con VLMs para transferir conocimiento entre diferentes datasets sin requerir grandes volúmenes de datos de entrenamiento."
		}
	},
  {
    name: "Iratxe García García",
    year: "2025",
    type: "bachelor",
    project: {
      en: "Intelligent Optimization of Predictive Models for Retention and Churn",
      es: "Optimización Inteligente de Modelos Predictivos para Recobro y Churn"
    },
    description: {
      en: "Developed predictive machine learning models for retention and churn integration into the pipeline of the company where she did her internship.",
      es: "Desarrollo de modelos de aprendizaje automático predictivos para el recobro y el churn e su integración en el pipeline de la empresa en la que realizó su prácticas."
    }
  },
  {
    name: "Gabriel Puja Lojo",
    year: "2024",
    type: "bachelor",
    project: {
      en: "Automatic Generation of Proprietary Code with Ollama",
      es: "Sistema de generación automática de código propietario con Ollama"
    },
    description: {
      en: "Design and implementation of a system for the automatic generation of code with CodeLlama. The project had an industrial focus in which the existing base code was used to design and train the system. An API was developed to integrate the automatic code generation with the company's tools, facilitating its adoption and use by developers.",
      es: "Diseño e implementación de un sistema para la generación automática de código con CodeLlama. El proyecto tuvo un enfoque empresarial en el que se partió de código base ya existente para diseñar y entrenar el sistema. Se desarrolló una API para integrar la generación automática de código con herramientas de la empresa, facilitando su adopción y uso por parte de los desarrolladores."
    }
  },
  {
    name: "Juan González Vázquez",
    year: "2024",
    type: "bachelor",
    project: {
      en: "Chess Shadow AI",
      es: "IA sombra de ajedrez"
    },
    description: {
      en: "Development, using AI techniques, of a system capable of replicating the behavior of a human chess player. The system differentiates between games played against a machine and against a human, and consists of a generative part, capable of generating games with different properties, and a discriminative part that distinguishes between games played by a machine and games played by a human.",
      es: "Desarrollo, mediante técnicas de IA, de un sistema capaz de replicar el comportamiento de un jugador humano de ajedrez. El sistema diferencia entre las partidas jugadas contra una máquina y contra un humano, y consta de una parte generativa, capaz de generar partidas con diferentes propiedades, y una parte discriminante que distinga entre partidas jugadas por una máquina y partidas jugadas por un humano."
    },
	url: "https://digibuo.uniovi.es/dspace/handle/10651/74034"
  },
  {
    name: "Ignacio Díaz Piñera",
    year: "2023",
    type: "bachelor",
    project: {
      en: "Environmental Impact Study of the Electric Car",
      es: "Estudio del impacto ambiental del coche eléctrico"
    },
    description: {
      en: "Analysis of the cost of life cycle of an electric car, identification of the dominant factors that influence its viability. The objective is to study how advantageous is the electric car from an economic and environmental point of view, in comparison with the combustion engine and hybrid electric vehicles on the market. The study will take into account the acquisition cost, the cost of the life cycle, the energy costs and additional factors, such as the benefits of recycling and the second life of batteries.",
      es: "Análisis del coste del ciclo de vida de un coche eléctrico, identificación de los factores dominantes que influyen en su viabilidad. El objetivo es estudiar cómo de ventajoso es el vehículo eléctrico desde un punto de vista económico y medioambiental, en comparación con los vehículos de combustión interna y los vehículos eléctricos híbridos del mercado."
    },
	url: "https://digibuo.uniovi.es/dspace/handle/10651/71476"
  },
  {
    name: "Diego García Vega",
    year: "2023",
    type: "bachelor",
    status: "honors",
    project: {
      en: "Improvement of Energy Efficiency of Computing Clusters based on the Prediction of Load through Artificial Intelligence Techniques",
      es: "Mejora de la Eficiencia Energética de Clústeres de Computación basada en la Predicción de la Carga mediante técnicas de Inteligencia Artificial"
    },
    description: {
      en: "A new approach based on machine learning techniques is proposed for predicting the workload of a cluster of study located in the University of Oviedo. The proposed solution is used for decision-making on how to effectively turn on/off the nodes that form the cluster, thus saving valuable energy. The solution that aims to address this issue is based around a strongly coupled desing with the resource management system (RMS) of the clusters, a key software piece that schedules and distributes the jobs across the infrastructure.",
      es: "Propuesta de un nuevo enfoque basado en técnicas de aprendizaje automático para predecir la carga de un clúster de estudio ubicado en la Universidad de Oviedo. La solución propuesta se utiliza para la toma de decisiones sobre cómo activar/desactivar los nodos que forman el clúster, ahorrando así energía valiosa. La solución que busca abordar este problema está basada en un diseño fuertemente acoplado con el sistema de gestión de recursos (RMS) de los clústeres, una pieza clave de software que programa y distribuye los trabajos a través de la infraestructura."
    }
  },
  {
    name: "David González Fernández",
    year: "2023",
    type: "bachelor",
    status: "honors",
    project: {
      en: "Detection of Mal Oil in Metal Bands through Deep Learning Methods",
      es: "Detección de mal aceitado en bandas metálicas mediante métodos de Deep Learning"
    },
    description: {
      en: "Development of Deep Learning models to automatically classify the correct oiling of metal bands. Construction of an image segmentation model to identify the pixels corresponding to the steel band, which, in future stages, will serve to develop classification models of the defects found.",
      es: "Desarrollo de modelos de Deep Learning para automatizar la clasificación precisa del correcto aceitado de las bandas de acero. Construcción de un modelo de segmentación de imagen para identificar los píxeles correspondientes a la banda de acero, lo cual, en futuras etapas, servirá para desarrollar modelos de clasificación de los defectos encontrados."	
    }
  },
]

export default function PortfolioSection() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const studentsPerPage = 6

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const currentItems: PortfolioItem[] = teachingItemsData.map(item => ({
    id: item.id,
    title: t(item.translationKey),
    image: item.image,
    link: item.link,
    delay: item.delay,
  }))

  // Pagination logic for students
  const totalPages = Math.ceil(mentoredStudents.length / studentsPerPage)
  const startIndex = (currentPage - 1) * studentsPerPage
  const endIndex = startIndex + studentsPerPage
  const currentStudents = mentoredStudents.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  const goToPrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }

  return (
    <section
      id="teaching"
      className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900/80 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fadeInUp">{t("teaching.title")}</h2>
          <p
            className="text-lg md:text-xl text-white/75 max-w-3xl mx-auto animate-fadeInUp mb-8"
            style={{ animationDelay: "0.2s" }}
          >
            {t("teaching.subtitle")}
          </p>


        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mb-20">
          {currentItems.map((item, index) => (
            <Link
              key={item.id}
              href={item.link}
              className={`group block relative overflow-hidden rounded-xl transform transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${item.delay}ms`,
              }}
            >
              <div className="glass relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 aspect-[4/3] rounded-xl">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={`${item.title} - Nahuel Costa teaching materials`}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-bold text-sm md:text-base mb-1">{item.title}</h3>
                  <p className="text-white/90 text-xs md:text-sm font-medium">{item.id === "innovation-projects" ? "View Project ★" : "View Materials →"}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mentored Students Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 animate-fadeInUp">
              {t("teaching.mentoredStudents.title")}
            </h3>
            <p className="text-lg text-white/75 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
              {t("teaching.mentoredStudents.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentStudents.map((student, index) => {
              const getTypeIcon = (type: string) => {
                switch (type) {
                  case "phd": return <GraduationCap className="w-5 h-5" />
                  case "master": return <BookOpen className="w-5 h-5" />
                  case "bachelor": return <Users className="w-5 h-5" />
                  default: return <BookOpen className="w-5 h-5" />
                }
              }

              const getTypeColor = (type: string) => {
                switch (type) {
                  case "phd": return "text-purple-400"
                  case "master": return "text-blue-400"
                  case "bachelor": return "text-green-400"
                  default: return "text-blue-400"
                }
              }

              const getTypeLabel = (type: string) => {
                switch (type) {
                  case "phd": return "PhD"
                  case "master": return "Master's"
                  case "bachelor": return "Bachelor's"
                  default: return type
                }
              }

              return (
                <Card
                  key={index}
                  className={`glass p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 group transform ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${400 + index * 100}ms`,
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {student.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`flex items-center gap-1 ${getTypeColor(student.type)}`}>
                          {getTypeIcon(student.type)}
                          <span className="text-sm font-medium">{getTypeLabel(student.type)}</span>
                        </span>
                        <span className="text-white/60 text-sm">• {student.year}</span>
                        {student.status === "honors" && (
                          <div className="flex items-center" title="Graduated with Honors">
                            <Trophy className="w-4 h-4 text-yellow-400" />
                          </div>
                        )}
                        {student.status === "ongoing" && (
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                            Ongoing
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="text-white font-medium mb-2">
                      {student.project[t("nav.home") === "Home" ? "en" : "es"]}
                    </h5>
                    <p className="text-white/75 text-sm leading-relaxed">
                      {student.description[t("nav.home") === "Home" ? "en" : "es"]}
                    </p>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <Button
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className="glass glass-hover border border-white/20 hover:border-white/40 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                size="sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`glass glass-hover border transition-all duration-300 ${
                      currentPage === page
                        ? "border-blue-400/60 bg-blue-500/20 text-blue-300"
                        : "border-white/20 hover:border-white/40 text-white/75 hover:text-white"
                    }`}
                    size="sm"
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="glass glass-hover border border-white/20 hover:border-white/40 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                size="sm"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}

          {/* Pagination Info */}
          <div className="text-center mt-4">
            <p className="text-white/60 text-sm">
              Showing {startIndex + 1}-{Math.min(endIndex, mentoredStudents.length)} of {mentoredStudents.length} students
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
