"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, BookOpen, Users, Clock, Download, Code, Cpu, Zap } from "lucide-react"

export default function AlgorithmicsPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link href="/#teaching" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("teaching.backToTeaching")}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {t("teaching.algorithmics.title")}
              </h1>
              <h2 className="text-2xl md:text-3xl text-purple-400 mb-6">
                {t("teaching.algorithmics.subtitle")}
              </h2>
              <p className="text-lg text-white/75 mb-8 leading-relaxed">
                {t("teaching.algorithmics.description")}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-white/60">
                  <Users className="w-5 h-5 mr-2" />
                  {t("teaching.intermediateLevel")}
                </div>
                <div className="flex items-center text-white/60">
                  <Clock className="w-5 h-5 mr-2" />
                  14 {t("teaching.weeks")}
                </div>
                <div className="flex items-center text-white/60">
                  <BookOpen className="w-5 h-5 mr-2" />
                  {t("teaching.undergraduateCourse")}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-80 rounded-xl overflow-hidden relative">
                <Image
                  src="/teaching/algorithmics.png"
                  alt="Algorithmics Course"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="glass p-8">
                <h3 className="text-2xl font-bold text-white mb-6">{t("teaching.courseOverview")}</h3>
                <div className="space-y-4 text-white/75">
                  <p>
                    {t("teaching.algorithmics.overview")}
                  </p>
                  <p>
                    {t("teaching.algorithmics.overview2")}
                  </p>
                </div>
              </Card>

              <Card className="glass p-8">
                <h3 className="text-2xl font-bold text-white mb-6">{t("teaching.learningObjectives")}</h3>
                <ul className="space-y-3 text-white/75">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span>
                    {t("teaching.algorithmics.objective1")}
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span>
                    {t("teaching.algorithmics.objective2")}
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span>
                    {t("teaching.algorithmics.objective3")}
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span>
                    {t("teaching.algorithmics.objective4")}
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span>
                    {t("teaching.algorithmics.objective5")}
                  </li>
                </ul>
              </Card>

              <Card className="glass p-8">
                <h3 className="text-2xl font-bold text-white mb-6">{t("teaching.algorithmics.algorithmParadigms")}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center text-purple-400 mb-2">
                      <Zap className="w-5 h-5 mr-2" />
                      <h4 className="text-lg font-semibold">{t("teaching.algorithmics.coreTechniques")}</h4>
                    </div>
                    <ul className="space-y-1 text-white/75 text-sm">
                      <li>• {t("teaching.algorithmics.technique1")}</li>
                      <li>• {t("teaching.algorithmics.technique2")}</li>
                      <li>• {t("teaching.algorithmics.technique3")}</li>
                      <li>• {t("teaching.algorithmics.technique4")}</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center text-purple-400 mb-2">
                      <Cpu className="w-5 h-5 mr-2" />
                      <h4 className="text-lg font-semibold">{t("teaching.algorithmics.advancedTopics")}</h4>
                    </div>
                    <ul className="space-y-1 text-white/75 text-sm">
                      <li>• {t("teaching.algorithmics.topic1")}</li>
                      <li>• {t("teaching.algorithmics.topic2")}</li>
                      <li>• {t("teaching.algorithmics.topic3")}</li>
                      <li>• {t("teaching.algorithmics.topic4")}</li>
                    </ul>
                  </div>
                </div>
              </Card>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="glass p-6">
                <h3 className="text-xl font-bold text-white mb-4">{t("teaching.courseInformation")}</h3>
                <div className="space-y-3 text-white/75">
                  <div>
                    <span className="font-semibold text-white">{t("teaching.duration")}:</span> 14 {t("teaching.weeks")}
                  </div>
                  <div>
                    <span className="font-semibold text-white">{t("teaching.credits")}:</span> 6 ECTS
                  </div>
                  <div>
                    <span className="font-semibold text-white">{t("teaching.language")}:</span> {t("teaching.spanishEnglish")}
                  </div>
                  <div>
                    <span className="font-semibold text-white">{t("teaching.prerequisites")}:</span> {t("teaching.algorithmics.prerequisites")}
                  </div>
                </div>
              </Card>

              <Card className="glass p-6">
                <h3 className="text-xl font-bold text-white mb-4">{t("teaching.resources")}</h3>
                <div className="space-y-3">
                  <Button
                    asChild
                    className="w-full glass glass-hover border border-white/20 hover:border-purple-400/60 text-white"
                  >
                    <a
                      href="https://nahuels-organization.gitbook.io/algoritmia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {t("teaching.algorithmics.algorithmTemplates")}
                    </a>
                  </Button>
                </div>
              </Card>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
