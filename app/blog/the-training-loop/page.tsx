"use client"

import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { getBlogPostBySlug } from "@/lib/blog-data"
import { notFound } from "next/navigation"

export default function TheTrainingLoopPage() {
  const { language } = useLanguage()
  const post = getBlogPostBySlug("the-training-loop")

  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString(language === "es" ? "es-ES" : "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    } catch {
      return "Recent"
    }
  }

  const content = {
    en: {
      introduction: "...",
      challenge: "...",
      challengeText: "...",
      approach: "...",
      approachText: "...",
      keyLearnings: "...",
      learning1: "...",
      learning1Text: "...",
      learning2: "...",
      learning2Text: "...",
      learning3: "...",
      learning3Text: "...",
      challenges: "...",
      challengesText: "...",
      results: "...",
      resultsText: "...",
      conclusion: "...",
      conclusionText: "..."
    },
    es: {
      introduction: "...",
      challenge: "...",
      challengeText: "...",
      approach: "...",
      approachText: "...",
      keyLearnings: "...",
      learning1: "...",
      learning1Text: "...",
      learning2: "...",
      learning2Text: "...",
      learning3: "...",
      learning3Text: "...",
      challenges: "...",
      challengesText: "...",
      results: "...",
      resultsText: "...",
      conclusion: "...",
      conclusionText: "..."
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link
            href="/#blog"
            className="inline-flex items-center text-white hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === "es" ? "Volver al Blog" : "Back to Blog"}
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title[language]}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = "/placeholder.svg?height=320&width=800"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          <div className="flex items-center gap-4 text-white/60 text-sm mb-4">
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
            <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30">
              {language === "es" ? "Proyecto" : "Project"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {post.title[language]}
          </h1>

          <p className="text-xl text-white/80 mb-8">
            {post.description[language]}
          </p>

          <div className="flex flex-wrap gap-2">
            {post.tags[language].map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 text-sm bg-white/10 text-white/80 rounded-full"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              {content[language].introduction}
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">
              {content[language].challenge}
            </h2>
            <p className="text-white/90 leading-relaxed mb-8">
              {content[language].challengeText}
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">
              {content[language].approach}
            </h2>
            <p className="text-white/90 leading-relaxed mb-8">
              {content[language].approachText}
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">
              {content[language].keyLearnings}
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {content[language].learning1}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {content[language].learning1Text}
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {content[language].learning2}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {content[language].learning2Text}
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {content[language].learning3}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {content[language].learning3Text}
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">
              {content[language].challenges}
            </h2>
            <p className="text-white/90 leading-relaxed mb-8">
              {content[language].challengesText}
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">
              {content[language].results}
            </h2>
            <p className="text-white/90 leading-relaxed mb-8">
              {content[language].resultsText}
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">
              {content[language].conclusion}
            </h2>
            <p className="text-white/90 leading-relaxed mb-8">
              {content[language].conclusionText}
            </p>
          </article>

          {/* Back to Blog */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <Link
              href="/#blog"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === "es" ? "Volver al Blog" : "Back to Blog"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
