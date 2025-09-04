"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, BookOpen, Users, Clock, Download } from "lucide-react"

export default function GenerativeNetworksPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link href="/#teaching" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("teaching.backToTeaching")}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {t("teaching.generativeNetworks.title")}
              </h1>
              <p className="text-lg text-white/75 mb-8 leading-relaxed">
                {t("teaching.generativeNetworks.description")}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-white/60">
                  <Users className="w-5 h-5 mr-2" />
                  {t("teaching.advancedLevel")}
                </div>
                <div className="flex items-center text-white/60">
                  <Clock className="w-5 h-5 mr-2" />
                  5 {t("teaching.weeks")}
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
                  src="/teaching/generative-networks.png"
                  alt="Generative Networks Course"
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
                    {t("teaching.generativeNetworks.overview")}
                  </p>
                  <p>
                    {t("teaching.generativeNetworks.overview2")}
                  </p>
                </div>
              </Card>

              <Card className="glass p-8">
                <h3 className="text-2xl font-bold text-white mb-6">{t("teaching.learningObjectives")}</h3>
                <ul className="space-y-3 text-white/75">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    {t("teaching.generativeNetworks.objective1")}
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    {t("teaching.generativeNetworks.objective3")}
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    {t("teaching.generativeNetworks.objective4")}
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    {t("teaching.generativeNetworks.objective5")}
                  </li>
                </ul>
              </Card>

              <Card className="glass p-8">
                <h3 className="text-2xl font-bold text-white mb-6">{t("teaching.topicsCovered")}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-blue-400">{t("teaching.generativeNetworks.foundations")}</h4>
                    <ul className="space-y-1 text-white/75 text-sm">
                      <li>• {t("teaching.generativeNetworks.foundation1")}</li>
                      <li>• {t("teaching.generativeNetworks.foundation2")}</li>
                      <li>• {t("teaching.generativeNetworks.foundation3")}</li>
                      <li>• {t("teaching.generativeNetworks.foundation4")}</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-blue-400">{t("teaching.generativeNetworks.models")}</h4>
                    <ul className="space-y-1 text-white/75 text-sm">
                      <li>• {t("teaching.generativeNetworks.model1")}</li>
                      <li>• {t("teaching.generativeNetworks.model2")}</li>
                      <li>• {t("teaching.generativeNetworks.model3")}</li>
                      <li>• {t("teaching.generativeNetworks.model4")}</li>
                      <li>• {t("teaching.generativeNetworks.model5")}</li>
                      <li>• {t("teaching.generativeNetworks.model6")}</li>
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
                    <span className="font-semibold text-white">{t("teaching.duration")}:</span> 5 {t("teaching.weeks")}
                  </div>
                  <div>
                    <span className="font-semibold text-white">{t("teaching.credits")}:</span> 6 ECTS
                  </div>
                  <div>
                    <span className="font-semibold text-white">{t("teaching.language")}:</span> {t("teaching.englishSpanish")}
                  </div>
                  <div>
                    <span className="font-semibold text-white">{t("teaching.prerequisites")}:</span> {t("teaching.generativeNetworks.prerequisites")}
                  </div>
                </div>
              </Card>

              <Card className="glass p-6">
                <h3 className="text-xl font-bold text-white mb-4">{t("teaching.resources")}</h3>
                <div className="space-y-3">
                  <Button 
				  asChild
				  className="w-full glass glass-hover border border-white/20 hover:border-blue-400/60 text-white">
				  	<a
                      href="https://github.com/NahuelCostaCortez/RedesGenerativas"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    <BookOpen className="w-4 h-4 mr-2" />
                    {t("teaching.generativeNetworks.lectureNotes")}
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
