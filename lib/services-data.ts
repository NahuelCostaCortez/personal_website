export interface Service {
  id: string
  slug: string
  title: {
    en: string
    es: string
  }
  description: {
    en: string
    es: string
  }
  date: string
  image?: string
  category: "workshop" | "talk" | "course" | "consulting"
  location?: {
    en: string
    es: string
  }
  duration?: string
  audience?: {
    en: string
    es: string
  }
  tags: {
    en: string[]
    es: string[]
  }
  featured: boolean
}

// Helper function to generate URL-friendly slugs
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim()
}

// Sample services data - you can replace this with your actual services
export const servicesData: Service[] = [
	{
	id: "1",
	slug: "ai-applications-biomedicine",
	title: {
		en: "AI Applications in Biomedicine",
		es: "Aplicaciones de IA en Biomedicina"
	},
	description: {
		en: "In this talk I covered the origins of AI and its evolution to its current application in multiple medical disciplines, where I also shared my experience working with Medtronic and the Hospital Universitario Central de Asturias (HUCA).",
		es: "En esta charla cubrimos los orígenes de la IA y su evolución hasta su aplicación actual en múltiples disciplinas médicas, donde también compartí mi experiencia trabajando con Medtronic y el Hospital Universitario Central de Asturias (HUCA)."
	},
	date: "2023-03-10",
	image: "/services/ai-applications-biomedicine.jpg",
	category: "talk",
	location: {
		en: "CEU San Pablo, Av. de Montepríncipe, Boadilla del Monte, Madrid 28668",
		es: "CEU San Pablo, Av. de Montepríncipe, Boadilla del Monte, Madrid 28668"
	},
	duration: "1 hour",
	audience: {
		en: "Bachelors and Masters students",
		es: "Estudiantes de Grado y Máster"
	},
	tags: {
		en: ["AI", "Biomedicine", "Medical"],
		es: ["IA", "Biomedicina", "Médico"]
	},
	featured: false
	},
  {
    id: "2",
    slug: "taller-chatgpt",
    title: {
      en: "ChatGPT and other generative AIs",
      es: "Aprendizaje Automático en Aplicaciones Industriales"
    },
    description: {
      en: "TO-DO",
      es: "TO-DO"
    },
    date: "2023-05-24",
    image: "/services/taller-chatgpt.jpg",
    category: "talk",
    location: {
      en: "Tech Conference 2024",
      es: "Conferencia Tech 2024"
    },
    duration: "45 minutes",
    audience: {
      en: "Industry professionals",
      es: "Profesionales de la industria"
    },
    tags: {
      en: ["Machine Learning", "Industry", "Predictive Analytics", "IoT"],
      es: ["Aprendizaje Automático", "Industria", "Análisis Predictivo", "IoT"]
    },
    featured: true
  },
  {
    id: "3",
    slug: "soco-23",
    title: {
      en: "18th International Conference on Soft Computing Models in Industrial and Environmental Applications",
      es: "Taller de Fundamentos de IA"
    },
    description: {
      en: "TO-DO",
      es: "TO-DO"
    },
    date: "2023-09-06",
    image: "/services/soco-23.jpg",
    category: "workshop",
    location: {
      en: "University of Oviedo",
      es: "Universidad de Oviedo"
    },
    duration: "6 hours",
    audience: {
      en: "Beginners to Intermediate",
      es: "Principiantes a Intermedio"
    },
    tags: {
      en: ["AI", "Machine Learning", "Workshop", "teaching"],
      es: ["IA", "Aprendizaje Automático", "Taller", "Educación"]
    },
    featured: true
  },
  {
    id: "4",
    slug: "generative-ai-benefits-and-limitations",
    title: {
      en: "Generative AI - Benefits and limitations",
      es: "Taller de Fundamentos de IA"
    },
    description: {
      en: "TO-DO",
      es: "TO-DO"
    },
    date: "2023-10-11",
    image: "/services/generative-ai-benefits-and-limitations.jpg",
    category: "workshop",
    location: {
      en: "University of Oviedo",
      es: "Universidad de Oviedo"
    },
    duration: "6 hours",
    audience: {
      en: "Beginners to Intermediate",
      es: "Principiantes a Intermedio"
    },
    tags: {
      en: ["AI", "Machine Learning", "Workshop", "teaching"],
      es: ["IA", "Aprendizaje Automático", "Taller", "Educación"]
    },
    featured: true
  },
  {
    id: "5",
    slug: "feria-ciencia-24",
    title: {
      en: "Learn how to create a realistic and intelligent NPC",
      es: "Aprende a crear un NPC realista e inteligente"
    },
    description: {
      en: "TO-DO",
      es: "TO-DO"
    },
    date: "2024-04-24",
    image: "/services/feria-ciencia-24.jpg",
    category: "workshop",
    location: {
      en: "University of Oviedo",
      es: "Universidad de Oviedo"
    },
    duration: "6 hours",
    audience: {
      en: "Beginners to Intermediate",
      es: "Principiantes a Intermedio"
    },
    tags: {
      en: ["AI", "Machine Learning", "Workshop", "teaching"],
      es: ["IA", "Aprendizaje Automático", "Taller", "Educación"]
    },
    featured: true
  },
  {
    id: "6",
    slug: "iaap-generacion-imagenes",
    title: {
      en: "Image generation with Artificial Intelligence",
      es: "Generación de imágenes con IA"
    },
    description: {
      en: "TO-DO",
      es: "TO-DO"
    },
    date: "2024-05-28",
    image: "/services/iaap-generacion-imagenes.jpg",
    category: "workshop",
    location: {
      en: "University of Oviedo",
      es: "Universidad de Oviedo"
    },
    duration: "6 hours",
    audience: {
      en: "Beginners to Intermediate",
      es: "Principiantes a Intermedio"
    },
    tags: {
      en: ["AI", "Machine Learning", "Workshop", "teaching"],
      es: ["IA", "Aprendizaje Automático", "Taller", "Educación"]
    },
    featured: true
  },
  {
    id: "7",
    slug: "fuzzy-ieee-24",
    title: {
      en: "IEEE World Congress on Computational Intelligence",
      es: "Generación de imágenes con IA"
    },
    description: {
      en: "TO-DO",
      es: "TO-DO"
    },
    date: "2024-06-30",
    image: "/services/fuzzy-ieee-24.jpg",
    category: "workshop",
    location: {
      en: "University of Oviedo",
      es: "Universidad de Oviedo"
    },
    duration: "6 hours",
    audience: {
      en: "Beginners to Intermediate",
      es: "Principiantes a Intermedio"
    },
    tags: {
      en: ["AI", "Machine Learning", "Workshop", "teaching"],
      es: ["IA", "Aprendizaje Automático", "Taller", "Educación"]
    },
    featured: true
  },
  {
    id: "8",
    slug: "total-antor",
    title: {
      en: "TotalEnergies Chair | AI: Present, future and applications to society",
      es: "Generación de imágenes con IA"
    },
    description: {
      en: "TO-DO",
      es: "TO-DO"
    },
    date: "2024-11-29",
    image: "/services/total-antor.jpg",
    category: "workshop",
    location: {
      en: "University of Oviedo",
      es: "Universidad de Oviedo"
    },
    duration: "6 hours",
    audience: {
      en: "Beginners to Intermediate",
      es: "Principiantes a Intermedio"
    },
    tags: {
      en: ["AI", "Machine Learning", "Workshop", "teaching"],
      es: ["IA", "Aprendizaje Automático", "Taller", "Educación"]
    },
    featured: true
  },
  {
    id: "9",
    slug: "audit-consejeria-salud",
    title: {
      en: "Database audit for a future public health information system",
      es: "Generación de imágenes con IA"
    },
    description: {
      en: "TO-DO",
      es: "TO-DO"
    },
    date: "2025-02-18",
    image: "/services/audit-consejeria-salud.jpg",
    category: "workshop",
    location: {
      en: "University of Oviedo",
      es: "Universidad de Oviedo"
    },
    duration: "6 hours",
    audience: {
      en: "Beginners to Intermediate",
      es: "Principiantes a Intermedio"
    },
    tags: {
      en: ["AI", "Machine Learning", "Workshop", "teaching"],
      es: ["IA", "Aprendizaje Automático", "Taller", "Educación"]
    },
    featured: true
  },
  {
    id: "10",
    slug: "acg-ingenieria",
    title: {
      en: "Introductory course on generative Artificial Intelligence",
      es: "Generación de imágenes con IA"
    },
    description: {
      en: "TO-DO",
      es: "TO-DO"
    },
    date: "2025-04-01",
    image: "/services/acg-ingenieria.jpg",
    category: "workshop",
    location: {
      en: "University of Oviedo",
      es: "Universidad de Oviedo"
    },
    duration: "6 hours",
    audience: {
      en: "Beginners to Intermediate",
      es: "Principiantes a Intermedio"
    },
    tags: {
      en: ["AI", "Machine Learning", "Workshop", "teaching"],
      es: ["IA", "Aprendizaje Automático", "Taller", "Educación"]
    },
    featured: true
  },
  {
    id: "100",
    slug: "generative-deep-learning",
    title: {
      en: "Generative Artificial Intelligence",
      es: "Inteligencia Artificial Generativa"
    },
    description: {
      en: "A course designed for anyone who wants to learn about how to use the current generative AI tools and how to identify use cases from everyday life to facilitate their work.",
      es: "Curso destinado a aquellas personas que se vean abrumadas por la cantidad de información que hay sobre IA generativa y quieran aprender sobre cómo utilizar las principales herramientas y cómo identificar casos de uso del día a día en los que poder utilizarlas para facilitar su trabajo."
    },
    date: "Contactar para más",
    image: "/services/generative-deep-learning.jpg",
    category: "course",
    location: {
      en: "Online or on-site",
      es: "En línea o presencial"
    },
    duration: "8 hours",
    audience: {
      en: "Professionals, Researchers",
      es: "Profesionales, Investigadores"
    },
    tags: {
      en: ["Generative AI", "AI", "ChatGPT", "Beginners"],
      es: ["IA Generativa", "IA", "ChatGPT", "Principiantes"]
    },
    featured: true
  },
  {
    id: "101",
    slug: "image-generation-course",
    title: {
      en: "Image Generation with Artificial Intelligence",
      es: "Generación de Imágenes con Inteligencia Artificial"
    },
    description: {
      en: "A course designed for anyone who wants to learn about how to use the current image generation and editing tools with AI.",
      es: "Curso destinado a aquellas personas que quieran aprender sobre cómo utilizar las principales herramientas de generación y edición de imágenes con IA."
    },
    date: "Contactar para más",
    image: "/services/image-generation-course.jpg",
    category: "course",
    location: {
      en: "Online or on-site",
      es: "En línea o presencial"
    },
    duration: "8 hours",
    audience: {
      en: "Professionals, Researchers",
      es: "Profesionales, Investigadores"
    },
    tags: {
      en: ["Image Generation", "AI", "Editing", "Beginners"],
      es: ["Generación de Imágenes", "IA", "Edición", "Principiantes"]
    },
    featured: true
  }
]

// Helper functions
export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find(service => service.slug === slug)
}

export function getFeaturedServices(): Service[] {
  return servicesData.filter(service => service.featured)
}

export function getServicesByCategory(category: Service['category']): Service[] {
  return servicesData.filter(service => service.category === category)
}

export function getAllServices(): Service[] {
  return servicesData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
