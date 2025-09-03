"use client"

import { useState, useEffect } from "react"
import { Calendar, Search, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import { BlogPost } from "@/lib/blog-data"

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const { t, language } = useLanguage()
  
  const ITEMS_PER_PAGE = 6

  useEffect(() => {
    fetchBlogPosts()
  }, [])

  const fetchBlogPosts = async () => {
    try {
      // For now, we'll import the data directly
      // In the future, you can create an API endpoint like /api/blog
      const { blogData } = await import("@/lib/blog-data")
      setPosts(blogData || [])
    } catch (error) {
      console.error("Error fetching blog posts:", error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    try {
      if (!dateString) return "Recent"
      return new Date(dateString).toLocaleDateString(language === "es" ? "es-ES" : "en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    } catch {
      return "Recent"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "experience":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      case "project":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30"
      case "learning":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  const getCategoryLabel = (category: string) => {
    const labels = {
      experience: { en: "Experience", es: "Experiencia" },
      project: { en: "Project", es: "Proyecto" },
      learning: { en: "Learning", es: "Aprendizaje" }
    }
    return labels[category as keyof typeof labels]?.[language] || category
  }

  // Reset page when search changes
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery])

  const filteredPosts = posts.filter(
    (post) =>
      post.title.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.title.es.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.es.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.en.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.tags.es.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  const goToPreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }

  return (
    <section id="blog" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans">
            {language === "es" ? "Blog - Experiencias y Proyectos" : "Blog"}
          </h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            {language === "es" 
              ? "Proyectos personales y lecciones aprendidas de experiencias pasadas."
              : "Personal projects and lessons learned from past experiences."
            }
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {!loading && (
          <>
            {/* Search Bar */}
            <div className="flex justify-center mb-8">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
                <input
                  type="text"
                  placeholder={language === "es" ? "Buscar posts..." : "Search posts..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-full pl-10 pr-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                />
              </div>
            </div>

            {/* Blog Posts Grid */}
            {paginatedPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl block cursor-pointer"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title[language]}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=200&width=400"
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category)}`}>
                          {getCategoryLabel(post.category)}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between text-white/60 text-sm mb-3">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {formatDate(post.date)}
                        </div>
                        {post.readTime && (
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                        )}
                      </div>

                      <h3 className="text-white font-semibold text-lg mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors">
                        {post.title[language]}
                      </h3>

                      <p className="text-white/75 text-sm mb-4 line-clamp-3">
                        {post.description[language]}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags[language].slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags[language].length > 3 && (
                          <span className="px-2 py-1 text-xs bg-white/10 text-white/60 rounded-full">
                            +{post.tags[language].length - 3}
                          </span>
                        )}
                      </div>

                      <div className="inline-flex items-center text-blue-400 group-hover:text-blue-300 font-medium text-sm transition-colors group-hover:translate-x-1 transform duration-200">
                        {language === "es" ? "Leer más" : "Read more"}
                        <span className="ml-2">→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-white/75 text-lg">
                  {searchQuery 
                    ? (language === "es" 
                        ? `No se encontraron posts para "${searchQuery}"`
                        : `No posts found for "${searchQuery}"`
                      )
                    : (language === "es" 
                        ? "No hay posts disponibles"
                        : "No posts available"
                      )
                  }
                </p>
              </div>
            )}

            {/* Pagination Controls */}
            {filteredPosts.length > ITEMS_PER_PAGE && (
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
            {filteredPosts.length > 0 && (
              <div className="text-center mt-4">
                <p className="text-white/60 text-sm">
                  {language === "es" 
                    ? `Mostrando ${startIndex + 1}-${Math.min(endIndex, filteredPosts.length)} de ${filteredPosts.length} posts`
                    : `Showing ${startIndex + 1}-${Math.min(endIndex, filteredPosts.length)} of ${filteredPosts.length} posts`
                  }
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
