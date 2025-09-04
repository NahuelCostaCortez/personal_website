"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, BookOpen, Users, Clock, Download, Lightbulb, Rocket, Star, Trophy } from "lucide-react"

export default function InnovationProjectsPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/20 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link href="/#teaching" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("teaching.backToTeaching")}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white mr-4">
                  {t("teaching.innovationProjects.title")}
                </h1>
                <Star className="w-8 h-8 text-yellow-400 animate-pulse" />
              </div>
              <h2 className="text-2xl md:text-3xl text-yellow-400 mb-6">
                {t("teaching.innovationProjects.subtitle")}
              </h2>
              <p className="text-lg text-white/75 mb-8 leading-relaxed">
                {t("teaching.innovationProjects.description")}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-white/60">
                  <Users className="w-5 h-5 mr-2" />
                  {t("teaching.allLevelsWelcome")}
                </div>
                <div className="flex items-center text-white/60">
                  <Clock className="w-5 h-5 mr-2" />
                  Variable {t("teaching.duration")}
                </div>
                <div className="flex items-center text-white/60">
                  <Rocket className="w-5 h-5 mr-2" />
                  {t("teaching.innovationProgram")}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-80 rounded-xl overflow-hidden relative">
                <Image
                  src="/teaching/innovation-projects.png"
                  alt="Innovation Projects Program"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-yellow-400/20 backdrop-blur-sm rounded-full p-2">
                    <Star className="w-6 h-6 text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Content */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="glass p-8">
                <h3 className="text-2xl font-bold text-white mb-6">{t("teaching.innovationProjects.teachingTitle")}</h3>
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-white/5 border border-yellow-400/20">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div className="text-white font-semibold">UO-177745</div>
                      <div className="text-white/75 text-sm">{t("teaching.innovationProjects.labels.period")}: 2024-2025</div>
                    </div>
                    <p className="text-white/80 mt-2">{t("teaching.innovationProjects.UO177745.title")}</p>
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-white/80">
                      <div>
                        <span className="font-semibold text-white">{t("teaching.innovationProjects.labels.role")}:</span> {t("teaching.innovationProjects.actions.rolemember")}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">{t("teaching.innovationProjects.labels.publications")}:</span>
                        <a
                          href="https://library.iated.org/view/OTERO2024AUT"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-yellow-400 hover:text-yellow-300 underline"
                        >
                          {t("teaching.innovationProjects.actions.viewPublication")}
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-white/5 border border-yellow-400/20">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div className="text-white font-semibold">RAG-EDU-2024</div>
                      <div className="text-white/75 text-sm">{t("teaching.innovationProjects.labels.period")}: 2023-2024</div>
                    </div>
                    <p className="text-white/80 mt-2">{t("teaching.innovationProjects.RAGAssistant.title")}</p>
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-white/80">
                      <div>
                        <span className="font-semibold text-white">{t("teaching.innovationProjects.labels.role")}:</span> {t("teaching.innovationProjects.actions.roleleader")}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Sidebar intentionally removed to keep the page focused on teaching innovation projects */}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
