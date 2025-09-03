"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ResearchSection() {
  const { t } = useLanguage()
  const [currentPage, setCurrentPage] = useState(0)
  
  // Get research data from translations
  const researchProjects = (t("research.projects") as any[]) || []
  const projectsPerPage = 6
  const totalPages = Math.ceil(researchProjects.length / projectsPerPage)
  
  const currentProjects = researchProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  )

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }
  
  // Research topics data
  const researchTopics = [
    {
      title: t("research.topics.industrial.title"),
      emoji: t("research.topics.industrial.emoji"),
      problems: t("research.topics.industrial.problems") as string[]
    },
    {
      title: t("research.topics.medical.title"),
      emoji: t("research.topics.medical.emoji"),
      problems: t("research.topics.medical.problems") as string[]
    },
    {
      title: t("research.topics.others.title"),
      emoji: t("research.topics.others.emoji"),
      problems: t("research.topics.others.problems") as string[]
    }
  ]

  return (
    <section id="research" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t("research.title")}</h2>
        </div>

        {/* Research Topics Cards */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-lg text-white/75 max-w-2xl mx-auto">
              {t("research.topics.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchTopics.map((topic, index) => (
              <Card key={index} className="glass p-6 h-full hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {topic.emoji}
                  </div>
                  <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {topic.title}
                  </h4>
                </div>
                
                <ul className="space-y-3">
                  {topic.problems.map((problem, problemIndex) => (
                    <li 
                      key={problemIndex} 
                      className="text-white/75 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300 flex items-start"
                    >
                      <span className="text-blue-400 mr-2 mt-1 text-xs">•</span>
                      {problem}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Projects List */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t("research.projects.title")}</h3>
            <p className="text-lg text-white/75 max-w-2xl mx-auto">
              {t("research.projects.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
              <div key={index} className="group">
                <div className="border-l-4 border-blue-500/30 pl-6 py-4 hover:border-blue-400 transition-colors duration-300">
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-1">
                        {project.title}
                      </h4>
                      {project.code && (
                        <p className="text-blue-300 font-medium text-sm">
                          {project.code}
                        </p>
                      )}
                    </div>
                    
                    {project.type && (
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs font-medium">
                          {project.type}
                        </span>
                        {project.date && (
                          <span className="bg-gray-500/20 text-gray-300 px-2 py-1 rounded text-xs">
                            {project.date}
                          </span>
                        )}
                      </div>
                    )}
                    
                    <p className="text-white/75 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {project.description}
                    </p>
                    
                    <p className="text-blue-300 font-medium text-xs">
                      {project.participation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 mt-12">
              <Button
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className="glass glass-hover border border-white/20 hover:border-cyan-400/60 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === currentPage 
                        ? "bg-cyan-400 scale-125" 
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
              
              <Button
                onClick={handleNextPage}
                disabled={currentPage === totalPages - 1}
                className="glass glass-hover border border-white/20 hover:border-cyan-400/60 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
