import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  preload: true,
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  title: "ML Researcher and Professor",
  description:
    "Portfolio de Nahuel Costa: ML Researcher and Professor.",
  keywords: [
    "Nahuel Costa",
    "ML Researcher",
    "Professor",
    "Healthcare",
    "Industry",
    "AI",
    "Sustainable computing",
    "AI urban sustainability",
    "digital nomad designer",
    "Prognosis and Health Management",
    "Generative Models",
    "Domain Adaptation",
    "Survival Prediction",
    "Explainable AI",
	"LLMs and RAG"
  ],
  authors: [{ name: "Nahuel Costa" }],
  creator: "Nahuel Costa",
  publisher: "Nahuel Costa",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_EN",
    alternateLocale: "en_US",
    url: "https://nahuelcosta.com",
    siteName: "Nahuel Costa Portfolio",
    title: "ML Researcher and Professor",
    description:
      "Portfolio de Nahuel Costa: Investigador y divulgador en IA.",
    images: [
      {
        url: "/images/portfolioimage.png",
        width: 1200,
        height: 630,
        alt: "Nahuel Costa - ML Researcher and Professor Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ML Researcher and Professor",
    description:
      "Portfolio de Nahuel Costa: Investigador y divulgador en IA.",
    creator: "@nahucostacortez",
    images: ["/images/portfolioimage.png"],
  },
  alternates: {
    canonical: "https://nahuelcosta.com",
    languages: {
      "es-EN": "https://nahuelcosta.com/es",
      "en-US": "https://nahuelcosta.com/en",
    },
  },
  generator: "v0.app",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} antialiased`}>
      <head>
        <link rel="preload" href="/images/portfolioimage.png" as="image" type="image/png" />
        <link rel="preload" href="/images/profile.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/background.jpg" as="image" type="image/jpeg" />
        <link rel="dns-prefetch" href="https://medium.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://nahuelcosta.com/#person",
                  name: "Nahuel Costa",
                  alternateName: "Nahu Costa",
                  description:
                    "ML Researcher and Professor",
                  jobTitle: ["ML Researcher", "Professor"],
                  worksFor: [
                    {
                      "@type": "Organization",
                      "@id": "https://nahuelcosta.com/#university",
                      name: "University of Oviedo",
                      url: "https://www.uniovi.es/",
                      description: "University of Oviedo",
                    },
                  ],
                  nationality: "Spain",
                  birthPlace: "Gijón, Spain",
                  url: "https://nahuelcosta.com",
                  image: "https://nahuelcosta.com/images/profile.jpg",
                  sameAs: [
                    "https://www.linkedin.com/in/nahuel-costa-cortez/",
                    "https://twitter.com/nahucostacortez",
                  ],
                  knowsAbout: [
                    "Prognostics & Health Management",
                    "Generative AI",
                    "Domain Adaptation",
                    "Survival Prediction",
                    "Explainable AI",
                    "LLMs/VLMs and RAG",
                    "Conformal Prediction",
                    "Python",
                    "Java",
                    "C++",
                    "C",
                    "Matlab",
                    "PyTorch",
                    "TensorFlow",
                    "Keras",
                    "Scikit-learn",
                    "Pandas",
                    "NumPy",
                    "Jupyter",
                    "Docker",
                    "Latex",
                    "Git",
                    "GitHub",
                  ],
                  alumniOf: "University of Oviedo",
                  hasOccupation: {
                    "@type": "Occupation",
                    name: "ML Researcher and Professor",
                    description:
                      "Specializes in ML research and teaching",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://nahuelcosta.com/#website",
                  url: "https://nahuelcosta.com",
                  name: "Nahuel Costa Portfolio",
                  description: "Portfolio profesional de Nahuel Costa - ML Researcher and Professor",
                  publisher: {
                    "@id": "https://nahuelcosta.com/#person",
                  },
                  inLanguage: ["es-EN", "en-US"],
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://nahuelcosta.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "Organization",
                  "@id": "https://nahuelcosta.com/#university",
                  name: "Eluter",
                  url: "https://www.uniovi.es/",
                  description: "University of Oviedo",
                  employee: {
                    "@id": "https://nahuelcosta.com/#person",
                  },
                  industry: "Education",
                },
                {
                  "@type": "Organization",
                  "@id": "https://nahuelcosta.com/#university",
                  name: "University of Oviedo",
                  url: "https://www.uniovi.es/",
                  description: "University of Oviedo",
                  founder: {
                    "@id": "https://nahuelcosta.com/#person",
                  },
                  industry: "teaching Technology",
                },
                {
                  "@type": "ItemList",
                  "@id": "https://nahuelcosta.com/#portfolio",
                  name: "Research and Teaching Portfolio",
                  description: "Research and Teaching case studies by Nahuel Costa",
                  numberOfItems: 14,
                },
                {
                  "@type": "Blog",
                  "@id": "https://nahuelcosta.com/#services",
                  name: "Nahuel Costa Articles",
                  description: "Research and Teaching insights by Nahuel Costa",
                  url: "https://medium.com/@nahucostacortez",
                  author: { "@id": "https://nahuelcosta.com/#person" },
                  inLanguage: ["en", "es"],
                  about: ["Research", "Teaching", "AI", "ML", "DL", "Generative AI", "Domain Adaptation", "Survival Prediction", "Explainable AI", "LLMs/VLMs and RAG", "Conformal Prediction"],
                },
              ],
            }),
          }}
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </head>
      <body className={spaceGrotesk.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
