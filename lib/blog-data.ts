export interface BlogPost {
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
  category: "experience" | "project" | "learning"
  readTime?: string
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

// Sample blog posts data
export const blogData: BlogPost[] = [
  {
    id: "1",
    slug: "the-training-loop",
    title: {
      en: "How Mario convinced me to start a podcast: The Training Loop Podcast",
      es: "Cómo Mario me convenció para empezar un podcast: The Training Loop Podcast"
    },
    description: {
      en: "...",
      es: "..."
    },
    date: "2024-09-01",
    image: "/images/blog/the_training_loop.png",
    category: "project",
    readTime: "5 min read",
    tags: {
      en: ["Podcast", "YouTube", "Yes, another podcast :)"],
      es: ["Podcast", "YouTube", "Sí, otro podcast más :)"]
    },
    featured: true
  },
  {
    id: "2",
    slug: "cities-datalex",
    title: {
      en: "Cities DataLex 2024: A tool to improve access to legal regulations in sustainable urban development and territorial processes",
      es: "Cities DataLex: herramienta para mejorar el acceso a regulaciones legales en los procesos de desarrollo urbano sostenible y territorial"
    },
    description: {
      en: "...",
      es: "..."
    },
    date: "2024-09-01",
    image: "/images/blog/cities-datalex.png",
    category: "project", //"experience",
    readTime: "8 min read",
    tags: {
      en: ["Urban Development", "Access to laws", "Chatbot", "Sustainability"],
      es: ["Desarrollo Urbano", "Acceso a leyes", "Chatbot", "Sostenibilidad"]
    },
    featured: true
  },
  {
    id: "3",
    slug: "rapidae",
    title: {
      en: "RapidAE: a library to deal with Autoencoders",
      es: "RapidAE: una librería para tratar con Autoencoders"
    },
    description: {
      en: "...",
      es: "..."
    },
    date: "2024-10-15",
    image: "/images/blog/rapidae.jpg",
    category: "project", //"learning",
    readTime: "10 min read",
    tags: {
      en: ["Autoencoders", "Deep Learning", "Software", "PyTorch"],
      es: ["Autoencoders", "Deep Learning", "Software", "PyTorch"]
    },
    featured: true
  }
]

// Helper functions
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogData.find(post => post.slug === slug)
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogData.filter(post => post.featured)
}

export function getBlogPostsByCategory(category: BlogPost['category']): BlogPost[] {
  return blogData.filter(post => post.category === category)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
