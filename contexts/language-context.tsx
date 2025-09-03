"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.portfolio": "Research",
    "nav.articles": "Teaching",
    "nav.talks": "Services",
    "nav.cv": "CV", // CV download link
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Welcome to my **personal portfolio**",
    "hero.title": "I explore how machine learning can help people make better decisions in healthcare and industry",
    "hero.card1": "Medical: AI for EHRs, ECGs, and imaging (X-rays & PET scans)",
    "hero.card2": "Industrial: Data-driven insights for batteries, aircraft engines & fans",
    "hero.card3": "Teaching: Guiding students to define and pursue their own goals",
    "hero.card4": "Talks & Courses: Bringing AI to academia, industry & the public",
    // Trusted By Section
    "trustedBy.title": "Trusted by",
    "trustedBy.subtitle":
      "Companies and organizations that I have work or collaborated with.",

    // Portfolio Section
    "teaching.title": "Teaching",
    "teaching.subtitle": "Study Materials and Projects",
    "teaching.generativeNetworks": "Generative Networks",
    "teaching.businessIntelligence": "Business Intelligence", 
    "teaching.algorithmics": "Algorithmics",
    "teaching.innovationProjects": "Innovation Projects",
    "teaching.mentoredStudents.title": "Mentored Students",
    "teaching.mentoredStudents.subtitle": "Students I've guided in their research and academic projects",

    // Teaching Course Pages
    "teaching.backToTeaching": "Back to teaching",
    "teaching.courseOverview": "Course Overview",
    "teaching.learningObjectives": "Learning Objectives",
    "teaching.topicsCovered": "Topics Covered",
    "teaching.courseInformation": "Course Information",
    "teaching.resources": "Resources",
    "teaching.assessment": "Assessment",
    "teaching.duration": "Duration",
    "teaching.credits": "Credits",
    "teaching.language": "Language",
    "teaching.prerequisites": "Prerequisites",
    "teaching.advancedLevel": "Advanced Level",
    "teaching.intermediateLevel": "Intermediate Level",
    "teaching.allLevelsWelcome": "All Levels Welcome",
    "teaching.mastersCourse": "Master's Course",
    "teaching.undergraduateCourse": "Undergraduate Course",
    "teaching.innovationProgram": "Innovation Program",
    "teaching.weeks": "weeks",
    "teaching.months": "months",
    "teaching.englishSpanish": "English/Spanish",
    "teaching.spanishEnglish": "Spanish/English",

    // Generative Networks Course
    "teaching.generativeNetworks.title": "Generative Networks",
    "teaching.generativeNetworks.description": "Explore the world of generative models, from GANs to Transformers and modern diffusion models. Learn how these networks can create new data samples and understand the mathematical foundations behind generative artificial intelligence.",
    "teaching.generativeNetworks.overview": "This advanced course covers the theoretical foundations and practical applications of generative models in machine learning. Students will explore various architectures including Generative Adversarial Networks (GANs), Variational Autoencoders (VAEs), and modern diffusion models.",
    "teaching.generativeNetworks.overview2": "The course combines mathematical rigor with hands-on implementation, ensuring students understand both the theory behind these models and how to apply them to real-world problems in computer vision and natural language processing.",
    "teaching.generativeNetworks.objective1": "Understand the mathematical foundations of generative modeling",
    "teaching.generativeNetworks.objective3": "Apply generative models to image synthesis, text generation, and data augmentation",
    "teaching.generativeNetworks.objective4": "Evaluate and compare different generative approaches",
    "teaching.generativeNetworks.objective5": "Understand current research trends and future directions",
    "teaching.generativeNetworks.foundations": "Foundations",
    "teaching.generativeNetworks.models": "Models",
    "teaching.generativeNetworks.foundation1": "Probability theory and statistics",
    "teaching.generativeNetworks.foundation2": "Information theory basics",
    "teaching.generativeNetworks.foundation3": "Maximum likelihood estimation",
    "teaching.generativeNetworks.foundation4": "Variational inference",
    "teaching.generativeNetworks.model1": "Variational Autoencoders (VAEs)",
    "teaching.generativeNetworks.model2": "Generative Adversarial Networks (GANs)",
    "teaching.generativeNetworks.model3": "Normalizing Flows",
    "teaching.generativeNetworks.model4": "Flow Matching",
    "teaching.generativeNetworks.model5": "Transformers",
    "teaching.generativeNetworks.model6": "Diffusion Models",
    "teaching.generativeNetworks.prerequisites": "Machine Learning, Linear Algebra, Python",
    "teaching.generativeNetworks.courseSyllabus": "Course Syllabus",
    "teaching.generativeNetworks.lectureNotes": "Lecture Notes",
    "teaching.generativeNetworks.codeExamples": "Code Examples",
    "teaching.generativeNetworks.theoryExam": "Theory Exam",
    "teaching.generativeNetworks.programmingAssignments": "Programming Assignments",
    "teaching.generativeNetworks.finalProject": "Final Project",

    // Algorithmics Course
    "teaching.algorithmics.title": "Algorithmics",
    "teaching.algorithmics.subtitle": "Algoritmia",
    "teaching.algorithmics.description": "Master the fundamental principles of algorithm design and analysis. Learn to solve complex computational problems efficiently through divide-and-conquer, dynamic programming, greedy algorithms, and graph theory.",
    "teaching.algorithmics.overview": "This course provides a comprehensive foundation in algorithm design and computational complexity analysis. Students will learn to think algorithmically and develop efficient solutions to computational problems across various domains.",
    "teaching.algorithmics.overview2": "Through rigorous mathematical analysis and practical programming exercises, students will master fundamental algorithmic techniques and data structures, preparing them for advanced computer science courses and real-world software development challenges.",
    "teaching.algorithmics.objective1": "Analyze time and space complexity using Big O notation",
    "teaching.algorithmics.objective2": "Design efficient algorithms using various paradigms",
    "teaching.algorithmics.objective3": "Implement and optimize fundamental data structures",
    "teaching.algorithmics.objective4": "Solve graph algorithms and network flow problems",
    "teaching.algorithmics.objective5": "Apply algorithmic thinking to real-world problems",
    "teaching.algorithmics.algorithmParadigms": "Algorithm Paradigms",
    "teaching.algorithmics.coreTechniques": "Core Techniques",
    "teaching.algorithmics.advancedTopics": "Advanced Topics",
    "teaching.algorithmics.technique1": "Divide and Conquer",
    "teaching.algorithmics.technique2": "Dynamic Programming",
    "teaching.algorithmics.technique3": "Greedy Algorithms",
    "teaching.algorithmics.technique4": "Backtracking",
    "teaching.algorithmics.topic1": "Graph Algorithms",
    "teaching.algorithmics.topic2": "Network Flows",
    "teaching.algorithmics.topic3": "String Algorithms",
    "teaching.algorithmics.topic4": "Computational Geometry",
    "teaching.algorithmics.dataStructures": "Data Structures",
    "teaching.algorithmics.linkedLists": "Linked Lists",
    "teaching.algorithmics.trees": "Trees",
    "teaching.algorithmics.heaps": "Heaps",
    "teaching.algorithmics.hashTables": "Hash Tables",
    "teaching.algorithmics.graphs": "Graphs",
    "teaching.algorithmics.avlTrees": "AVL Trees",
    "teaching.algorithmics.programmingChallenges": "Programming Challenges",
    "teaching.algorithmics.challengesDescription": "Students will solve progressively challenging algorithmic problems, from basic sorting and searching to complex optimization problems. Weekly programming contests help develop competitive programming skills and reinforce theoretical concepts.",
    "teaching.algorithmics.onlineJudges": "Online Judges",
    "teaching.algorithmics.languages": "Languages",
    "teaching.algorithmics.judges": "LeetCode, Codeforces, AtCoder",
    "teaching.algorithmics.programmingLanguages": "C++, Python, Java",
    "teaching.algorithmics.prerequisites": "Programming, Mathematics",
    "teaching.algorithmics.algorithmTemplates": "Algorithm Templates",
    "teaching.algorithmics.codeRepository": "Code Repository",
    "teaching.algorithmics.practiceProblems": "Practice Problems",
    "teaching.algorithmics.programmingContests": "Programming Contests",
    "teaching.algorithmics.assignments": "Assignments",
	"teaching.internships.title": "Internships",

    // Business Intelligence Course
    "teaching.businessIntelligence.title": "Text Mining",
    "teaching.businessIntelligence.description": "This course is part of the \"Business Intelligence\" course. Here, you will learn about text mining and how to use it to extract insights from text data.",
    "teaching.businessIntelligence.overview": "This comprehensive course provides an overview of text mining and how to use it to extract insights from text data, from the basics like TF-IDF, word2vec, and sentence transformers to more advanced techniques like topic modeling, sentiment analysis, and text classification.",
    "teaching.businessIntelligence.overview2": "The course mixes theoretical knowledge with practical applications, ensuring students understand both the theory behind these techniques and how to apply them to real-world problems.",
    "teaching.businessIntelligence.objective1": "Understand the basics of text mining and how to use it to extract insights from text data",
    "teaching.businessIntelligence.objective2": "Apply text mining techniques to extract insights from text data",
    "teaching.businessIntelligence.objective3": "Use pre-trained models",
    "teaching.businessIntelligence.objective4": "Evaluate and compare different text mining techniques",
    "teaching.businessIntelligence.topic1": "Introduction",
    "teaching.businessIntelligence.topic2": "Data collection and preprocessing",
    "teaching.businessIntelligence.topic3": "From words to vectors",
    "teaching.businessIntelligence.topic4": "Recurrent Neural Networks",
    "teaching.businessIntelligence.topic5": "Attention Mechanism",
    "teaching.businessIntelligence.topic6": "Transformers",
    "teaching.businessIntelligence.topic7": "Large Language Models",
    "teaching.businessIntelligence.topic8": "Project",
    "teaching.businessIntelligence.toolsTechnologies": "Tools & Technologies",
    "teaching.businessIntelligence.prerequisites": "Data Visualization, Databases, Statistics",
	"teaching.businessIntelligence.courseMaterials": "Course Materials",

    // Innovation Projects Course
    "teaching.innovationProjects.title": "Innovation Projects",
    "teaching.innovationProjects.subtitle": "Teaching Innovation",
    "teaching.innovationProjects.description": "This page lists teaching innovation projects focused on improving learning outcomes with data and AI. Each project includes references and artifacts when available.",
    "teaching.innovationProjects.programOverview": "Overview",
    "teaching.innovationProjects.overview": "This page lists teaching innovation projects focused on improving learning outcomes with data and AI.",
    "teaching.innovationProjects.overview2": "Each project includes references and artifacts when available.",
    "teaching.innovationProjects.whatMakesSpecial": "What Makes This Special",
    "teaching.innovationProjects.awardWinningProjects": "Award-Winning Projects",
    "teaching.innovationProjects.startupLaunches": "Startup Launches",
    "teaching.innovationProjects.awardDescription": "Several projects have won national and international innovation competitions",
    "teaching.innovationProjects.startupDescription": "Multiple startups have been successfully launched from this program",
    "teaching.innovationProjects.innovationTracks": "Innovation Tracks",
    "teaching.innovationProjects.aiML": "AI & Machine Learning",
    "teaching.innovationProjects.sustainableTech": "Sustainable Technology",
    "teaching.innovationProjects.healthcareInnovation": "Healthcare Innovation",
    "teaching.innovationProjects.fintechBlockchain": "FinTech & Blockchain",
    "teaching.innovationProjects.aiMLDescription": "Develop intelligent systems that solve real-world problems using cutting-edge AI technologies.",
    "teaching.innovationProjects.sustainableDescription": "Create environmentally conscious solutions that promote sustainability and green innovation.",
    "teaching.innovationProjects.healthcareDescription": "Design medical technologies and health solutions that improve patient outcomes and accessibility.",
    "teaching.innovationProjects.fintechDescription": "Build the next generation of financial technologies and decentralized applications.",
    "teaching.innovationProjects.successStories": "Success Stories",
    "teaching.innovationProjects.ecosmart": "🏆 EcoSmart Energy (2023)",
    "teaching.innovationProjects.medai": "🚀 MedAI Diagnostics (2022)",
    "teaching.innovationProjects.cityflow": "💡 CityFlow (2024)",
    "teaching.innovationProjects.ecosmartDescription": "Smart grid optimization system that won the National Innovation Award and secured €2M in funding.",
    "teaching.innovationProjects.medaiDescription": "AI-powered medical imaging platform now used in 15+ hospitals across Europe.",
    "teaching.innovationProjects.cityflowDescription": "Urban traffic optimization system reducing city congestion by 30% in pilot programs.",
    "teaching.innovationProjects.programDetails": "Program Details",
    "teaching.innovationProjects.investment": "Investment",
    "teaching.innovationProjects.requirements": "Requirements",
    "teaching.innovationProjects.investmentValue": "€50,000+ per project",
    "teaching.innovationProjects.requirementsValue": "Innovative idea + passion",
    "teaching.innovationProjects.applicationProcess": "Application Process",
    "teaching.innovationProjects.submitIdea": "Submit Idea",
    "teaching.innovationProjects.evaluation": "Evaluation",
    "teaching.innovationProjects.development": "Development",
    "teaching.innovationProjects.submitDescription": "Present your innovative concept",
    "teaching.innovationProjects.evaluationDescription": "Expert panel review",
    "teaching.innovationProjects.developmentDescription": "Build your solution",
    "teaching.innovationProjects.applicationForm": "Application Form",
    "teaching.innovationProjects.ideaGuidelines": "Idea Guidelines",
    "teaching.innovationProjects.successStoriesButton": "Success Stories",
    "teaching.innovationProjects.supportProvided": "Support Provided",
    "teaching.innovationProjects.expertMentorship": "Expert Mentorship",
    "teaching.innovationProjects.fundingSupport": "Funding Support",
    "teaching.innovationProjects.technicalResources": "Technical Resources",
    "teaching.innovationProjects.marketAccess": "Market Access",
    "teaching.innovationProjects.legalGuidance": "Legal Guidance",

    // Teaching Innovation Projects
    "teaching.innovationProjects.teachingTitle": "Teaching Innovation Projects",
    "teaching.innovationProjects.labels.code": "Code",
    "teaching.innovationProjects.labels.period": "Period",
    "teaching.innovationProjects.labels.role": "Role",
    "teaching.innovationProjects.labels.publications": "Publications",
    "teaching.innovationProjects.actions.viewPublication": "View publication",

    // Project: UO-177745
    "teaching.innovationProjects.UO177745.title": "Automated Moodle quiz creation and optimization using learning analytics, application to learning programming languages",
    
    // Project: RAG Assistant
    "teaching.innovationProjects.RAGAssistant.title": "Integration of an intelligent assistant in the educational field through language models and RAG techniques",

    // About Section
    "about.title": "ABOUT ME",
    "about.bio1":
      "Hello, my name is *Nahuel* (it means Jaguar in Mapuche language), I'm an ML researcher and professor at the University of Oviedo.",
    "about.bio2":
      "My research focuses on maximizing the potential of Machine Learning to anticipate potential outcomes and support decision-making in monitoring systems, particularly in scenarios with limited data. I've worked both on the *biomedical field*, on problems such as arrhythmia detection and classification, analysis of X-ray images and functional PET images from patients in deep coma; as well as in the *industrial domain*, doing monitoring and prognostics for lithium-ion batteries, aircraft engines, and jet fans. I am particularly interested in developing models that are robust and effective, but also interpretable and easily accessible to non-ML/AI experts.",
    "about.bio3":
      //"As an educator, I aim to convey my enthusiasm to students and provide them with the necessary tools to define and pursue their own goals. <br><br> I also love to spread the word about my work and about AI in general, that's why *I offer outreach activities (workshops, courses, talks) as well as training (primarily tailored for companies) focused on AI.* <br><br> 💬 Feel free to reach out to me if you are interested in my research, looking for colaboration, or are interested in some talks or training for your company/organization.",
	  "I love to spread the word about my work and about AI in general, that's why I offer outreach services *(workshops, courses, talks)* as well as *training (primarily tailored for companies) focused on AI.* <br><br> 💬 Feel free to reach out to me if you are interested in my research, looking for colaboration, or are interested in some talks or training for your company/organization.",
    "about.links.title": "Links",
    "about.cta": "BOOK A MEETING WITH ME",

    // Experience Section
    "experience.title": " ",
	"experience.becario.company": "University of Oviedo",
	"experience.becario.position": "Research intern",
	"experience.becario.period": "Oct 2018 - Jul 2019",
	"experience.becario.location": "Gijón",
	"experience.becario.description": "Analysis of intracardiac electrocardiograms for the prediction of cardiovascular diseases.",
	"experience.technician.company": "University of Oviedo",
	"experience.technician.position": "Research technician",
	"experience.technician.period": "Oct 2019 - Jan 2021",
	"experience.technician.location": "Gijón",
	"experience.technician.description": "Development of computational health models for the treatment of rechargeable batteries.",
	"experience.hawaii.company": "University of Hawaii at Manoa",
    "experience.hawaii.position": "Visiting Researcher",
    "experience.hawaii.period": "May 2022 - Sept 2022",
    "experience.hawaii.location": "Honolulu",
    "experience.hawaii.description": "Research and development of Machine Learning tools for diagnosis and prognosis of lithium-ion batteries at the Hawaii Natural Energy Institute (HNEI).",
    "experience.montpellier.company": "Université de Montpellier",
    "experience.montpellier.position": "Visiting Researcher",
    "experience.montpellier.period": "May 2023 - Jul 2023",
    "experience.montpellier.location": "Montpellier",
    "experience.montpellier.description": "Research and development of automatic learning diagnostic methods for positron emission tomography (PET) images at the Laboratory of Computer Science, Robotics and Microelectronics of Montpellier (LIRMM).",
    "experience.lecturer.company": "University of Oviedo",
    "experience.lecturer.position": "Lecturer",
    "experience.lecturer.period": "Feb 2021 - Aug 2023",
    "experience.lecturer.location": "Oviedo",
    "experience.lecturer.description": "Subjects I taught:\n-Business Intelligence\n-Data Visualization\n-Algorithmics\n-Operating Systems\n-Databases\n-Programming methodology\n-Introduction to programming",
	"experience.assistant.company": "University of Oviedo",
    "experience.assistant.position": "Assistant Professor",
    "experience.assistant.period": "Sep 2024 - Present",
    "experience.assistant.location": "Oviedo",
    "experience.assistant.description": "Subjects I teach:\n- Generative models\n- Business Intelligence\n- Data Visualization\n- Algorithmics",
	"experience.ceu.company": "CEU San Pablo University",
    "experience.ceu.position": "Visiting Professor",
    "experience.ceu.period": "Jan 2025 - Mar 2025",
    "experience.ceu.location": "Madrid",
    "experience.ceu.description": "ECG analysis with Large Vision Language Models",
	"experience.alberta.company": "University of Alberta",
    "experience.alberta.position": "Visiting Professor",
    "experience.alberta.period": "April 2025 - July 2025",
    "experience.alberta.location": "Edmonton",
    "experience.alberta.description": "Multimodal longitudinal analysis of EHR and ECGs",


    // Research Section
    "research.title": "Research",
    "research.description":
      "I am an **international speaker**, delivering practical talks and workshops on **UX Design, Marketing, Sustainability**, and **exponential technologies** such as **crypto, blockchain, and Artificial Intelligence**. My approach combines **theory and practical experience** to empower **entrepreneurs and professionals** in the **digital era**.",
    "research.cta": "REQUEST A TALK/WORKSHOP",
    "research.argentina": "Argentina",
    "research.international": "International",
    
    // Research Topics
    "research.topics.title": "Research Areas",
    "research.topics.subtitle": "Main topics and problems I work with",
    "research.topics.industrial.title": "Industrial",
    "research.topics.industrial.emoji": "🏭",
    "research.topics.industrial.problems": [
      "Battery health monitoring and prognostics",
      "Aircraft engine condition monitoring", 
      "Jet fan predictive maintenance",
      "Industrial IoT systems",
      "Energy management optimization"
    ],
    "research.topics.medical.title": "Medical",
    "research.topics.medical.emoji": "🏥",
    "research.topics.medical.problems": [
      "Cardiovascular disease prediction",
      "ECG analysis and arrhythmia detection",
      "Medical image analysis (X-ray, PET scans)",
      "Electronic Health Records (EHR) analysis",
      "Neurological disorder diagnosis"
    ],
    "research.topics.others.title": "Others",
    "research.topics.others.emoji": "🔬",
    "research.topics.others.problems": [
      "Machine learning with limited data",
      "Explainable AI methods",
      "Multimodal data fusion",
      "Robust model development",
      "Educational AI applications"
    ],
    "research.projects.title": "Research Projects",
    "research.projects.subtitle": "Past and current research projects",
    
    // Research Projects Data
    "research.projects": [
	{
		"title": "GEOAI-Based Augmentation of Multi-source Urban GIS",
		"code": "NAC-ES-PUB-ASV-2025 PCI2025-163245",
		"type": "European",
		"description": "Still work to be done!",
		"date": "2025-Present",
		"participation": "Team member"
		},
	{
		"title": "Intelligent Computing For Disruptive Data",
		"code": "SEK-25-GRU-GIC-24-055",
		"type": "Regional",
		"description": "The use of incomplete, inaccurate or partial data in machine learning can lead to biased or inefficient decisions. Commonly, large data sets are used, selecting informative elements and discarding those that do not meet a minimum quality level. Our research group proposes an alternative approach for scenarios where data scarcity requires maximising every piece of available information, a frequent challenge in areas such as industry, finance, economics, and medicine.",
		"date": "2025-Present",
		"participation": "Team member"
		},
	{
		"title": "Sustainable Computing in Limited Information Scenarios",
		"code": "MCINN-24-PID2023-146257OB-I00 ",
		"type": "National",
		"description": "This project is dedicated to developing new methods and applications to address ML challenges in environments characterized by sparse information. It gives priority to the use of low quality data, which is often overlooked. In alignment with Green AI principles, our approach includes designing methodologies that enhance computational efficiency and, as a result, reduce energy consumption. Furthermore, we are adapting these methodologies to address specific industrial challenges, focusing on sustainable practices such as extending the lifespan of equipment and efficiently managing resources like water and energy.",
		"date": "2025-Present",
		"participation": "Team member"
		},
      {
        "title": "Observatory for the Implementation of the 2030 Agenda in the Spanish University System",
		"code": "MDSC-24-2024D179-Agenda2030",
		"type": "National",
        "description": "Working on CITIES DATALEX®, a software whose purpose is to improve access to legal regulations resulting from the application in actions in the urban environment and, in general, in the processes of sustainable urban and territorial development. Also, supervising the IT team in helping gather and process data for the main purpose of the project.",
		"date": "2025-Present",
        "participation": "Team member"
      },
      {
        "title": "Accurate estimation of health status and remaining life in advanced lithium-ion technologies",
		"code": "MCI-23-PID2022-141792OB-I00",
		"type": "National",
        "description": "Project led by my colleague and friend David Anseán. We are working on training machine learning models with simulated data from battery digital twins such as 'Alawa, and adapt them to real data to estimate the health status and remaining life of lithium-ion batteries.",
		"date": "2023-Present",
        "participation": "Collaborating researcher"
      },
      {
        "title": "Artificial Intelligence applied to Data Analysis and Process Modeling",
		"code": "FUO-354-23",
		"type": "Industry, TOTAL ENERGIES, S.A.",
        "description": "Project framed within the Total Energies Chair of Data Analytics and Artificial Intelligence. Projects developed with student participation were addressed, including: RAG with chatbots for internal company documentation, rainfall and river flow modelling for reservoir management, predictive models for demand forecasting, survival models for customer churning and retention, etc.",
		"date": "2022-Present",
        "participation": "Team member"
      },
      {
        "title": "Computational intelligence for emissions mitigation: new learning methodologies with incomplete data",
		"code": "MCI-21-PID2020-112726RB-I00 ",
		"type": "National",
        "description": "We worked on developing new ways to model knowledge when the available data is of low quality.",
		"date": "2021-2024",
        "participation": "Team member"
      },
      {
        "title": "Intelligent and explainable condition monitoring of jet fans",
		"code": "FUO-231-22",
		"type": "Industry, TALLERES ZITRÓN, S.A.",
        "description": "Development of a condition monitoring system that can be embedded in jet fans to monitor their health and detect potential anomalies.",
		"date": "2022-2023",
        "participation": "Team member"
      },
      {
        "title": "Data engineering applied to eco-efficient energy management (IDAGEE)",
        "code": "FC-GRUPIN-IDI/2018/000226",
		"type": "Regional",
		"description": "Analysis of intracardiac electrocardiograms for the prediction of cardiovascular diseases.",
		"date": "2019-2020",
        "participation": "Collaborating researcher",
      }
    ],

    // Services Section
    "services.title": "Services",
	"services.subtitle2": "Consulting, Talks & Workshops",
    "services.subtitle": "Here you can find some of the courses, workshops and talks I have given.",
    "services.readMore": "See more",
    "services.noArticles": "No entries found. Check back soon!",
    "services.viewAll": "View Latest 10 Entries",
    "services.currentCourses": "Current Courses",
    "services.currentCoursesSubtitle": "Discover the latest teachingal offerings designed to advance your skills in AI and technology.",
    "services.pastExperiences": "Past Experiences",
    "services.pastExperiencesSubtitle": "Here you can find some of the past courses, workshops and talks I have given.",
    "services.searchPast": "Search past entries...",
    "services.noPastServices": "No past entries found matching",
    "services.noPastServicesDefault": "No past entries available at the moment.",
    "services.reviews": "Client Reviews",
    "services.reviewsSubtitle": "What clients say about working with me",

    // Footer
    "footer.portfolio": "PORTFOLIO",
    "footer.teaching.design": "Product Design",
    "footer.about": "ABOUT ME",
    "footer.about.bio": "Short Biography",
	"footer.about.research": "Research",
	"footer.about.teaching": "Teaching",
    "footer.about.talks": "Talks and Workshops",
    "footer.others": "OTHERS",
    "footer.others.blog": "Blog",
    "footer.others.cv": "CV",
    "footer.connect": "LET'S CONNECT",
    "footer.connect.project": "✉️ You can shoot me a message at costanahuel@uniovi.es or any of my other social networks, I'll try to respond as soon as I can!",
    "footer.connect.touch": "Get in touch",

    // Streaming Section
    "streaming.title": "Live Streaming",
    "streaming.backHome": "Back to Home",
    "streaming.description":
      "Join me live for discussions about design, technology, and entrepreneurship. Follow along as I share insights, work on projects, and connect with the community.",
    "streaming.joinWhatsApp": "Join WhatsApp Group",
  },
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.about": "Acerca",
    "nav.portfolio": "Investigación",
    "nav.articles": "Docencia",
    "nav.talks": "Servicios",
    "nav.cv": "CV", // CV download link
    "nav.contact": "Contacto",

    // Hero Section
    "hero.greeting": "Bienvenido a mi **portfolio personal**",
    "hero.title": "Exploro cómo la IA puede ayudar a las personas a tomar mejores decisiones en el ámbito de la salud e industrial",
    "hero.card1": "Medicina: Proyectos en EHRs, ECGs y análisis de imágenes (rayos X y PET)",
    "hero.card2": "Industrial: Análisis de baterías, motores de aviación y ventiladores",
    "hero.card3": "Docencia: Guío a mis estudiantes a que definan y persigan sus propios objetivos",
    "hero.card4": "Charlas y formación: Llevando la IA al ámbito académico, industrial y público",

    // Trusted By Section
    "trustedBy.title": "Confían en mí",
    "trustedBy.subtitle":
      "Empresas y organizaciones con las que he trabajado o colaborado.",

    // Portfolio Section
    "teaching.title": "Docencia",
    "teaching.subtitle": "Materiales de estudio y proyectos educativos",
    "teaching.generativeNetworks": "Redes generativas",
    "teaching.businessIntelligence": "Inteligencia de Negocio",
    "teaching.algorithmics": "Algoritmia", 
    "teaching.innovationProjects": "Proyectos de Innovación",
    "teaching.mentoredStudents.title": "Estudiantes Mentorizados",
    "teaching.mentoredStudents.subtitle": "Estudiantes que he guiado en sus proyectos de investigación y académicos",
	"teaching.internships.title": "Prácticas",

    // Teaching Course Pages
    "teaching.backToTeaching": "Volver a docencia",
    "teaching.courseOverview": "Resumen del Curso",
    "teaching.learningObjectives": "Objetivos de Aprendizaje",
    "teaching.topicsCovered": "Temas Cubiertos",
    "teaching.courseInformation": "Información del Curso",
    "teaching.resources": "Recursos",
    "teaching.assessment": "Evaluación",
    "teaching.duration": "Duración",
    "teaching.credits": "Créditos",
    "teaching.language": "Idioma",
    "teaching.prerequisites": "Prerrequisitos",
    "teaching.advancedLevel": "Nivel Avanzado",
    "teaching.intermediateLevel": "Nivel Intermedio",
    "teaching.allLevelsWelcome": "Todos los Niveles Bienvenidos",
    "teaching.mastersCourse": "Curso de Máster",
    "teaching.undergraduateCourse": "Curso de Grado",
    "teaching.innovationProgram": "Programa de Innovación",
    "teaching.weeks": "semanas",
    "teaching.months": "meses",
    "teaching.englishSpanish": "Inglés/Español",
    "teaching.spanishEnglish": "Español/Inglés",

    // Generative Networks Course
    "teaching.generativeNetworks.title": "Generative Networks",
    "teaching.generativeNetworks.description": "Explora el mundo de los modelos generativos, desde GANs hasta Transformers y modelos de difusión modernos. Aprende cómo estas redes pueden crear nuevas muestras de datos y comprende los fundamentos matemáticos detrás de la inteligencia artificial generativa.",
    "teaching.generativeNetworks.overview": "Este curso avanzado cubre los fundamentos teóricos y las aplicaciones prácticas de los modelos generativos en el aprendizaje automático. Los estudiantes explorarán varias arquitecturas incluyendo Redes Generativas Adversarias (GANs), Autoencoders Variacionales (VAEs) y modelos de difusión modernos.",
    "teaching.generativeNetworks.overview2": "El curso combina rigor matemático con implementación práctica, asegurando que los estudiantes comprendan tanto la teoría detrás de estos modelos como cómo aplicarlos a problemas del mundo real en visión por computador y procesamiento de lenguaje natural.",
    "teaching.generativeNetworks.objective1": "Comprender los fundamentos matemáticos del modelado generativo",
    "teaching.generativeNetworks.objective3": "Aplicar modelos generativos a síntesis de imágenes, generación de texto y aumento de datos",
    "teaching.generativeNetworks.objective4": "Evaluar y comparar diferentes enfoques generativos",
    "teaching.generativeNetworks.objective5": "Comprender las tendencias actuales de investigación y direcciones futuras",
    "teaching.generativeNetworks.foundations": "Fundamentos",
    "teaching.generativeNetworks.models": "Modelos",
    "teaching.generativeNetworks.foundation1": "Teoría de probabilidad y estadística",
    "teaching.generativeNetworks.foundation2": "Fundamentos de teoría de la información",
    "teaching.generativeNetworks.foundation3": "Estimación de máxima verosimilitud",
    "teaching.generativeNetworks.foundation4": "Inferencia variacional",
    "teaching.generativeNetworks.model1": "Autoencoders Variacionales (VAEs)",
    "teaching.generativeNetworks.model2": "Redes Generativas Adversarias (GANs)",
    "teaching.generativeNetworks.model3": "Normalizing Flows",
	"teaching.generativeNetworks.model4": "Flow Matching",
	"teaching.generativeNetworks.model5": "Transformers",
    "teaching.generativeNetworks.model6": "Modelos de Difusión",
    "teaching.generativeNetworks.prerequisites": "Aprendizaje Automático, Álgebra Lineal, Python",
    "teaching.generativeNetworks.courseSyllabus": "Programa del Curso",
    "teaching.generativeNetworks.lectureNotes": "Apuntes de Clase",
    "teaching.generativeNetworks.codeExamples": "Ejemplos de Código",

    // Algorithmics Course
    "teaching.algorithmics.title": "Algoritmia",
    "teaching.algorithmics.subtitle": "Algorithmics",
    "teaching.algorithmics.description": "Domina los principios fundamentales del diseño y análisis de algoritmos. Aprende a resolver problemas computacionales complejos de manera eficiente a través de divide y vencerás, programación dinámica, algoritmos voraces y teoría de grafos.",
    "teaching.algorithmics.overview": "Este curso proporciona una base integral en el diseño de algoritmos y el análisis de complejidad computacional. Los estudiantes aprenderán a pensar algorítmicamente y desarrollar soluciones eficientes a problemas computacionales en varios dominios.",
    "teaching.algorithmics.overview2": "A través de análisis matemático riguroso y ejercicios prácticos de programación, los estudiantes dominarán técnicas algorítmicas fundamentales y estructuras de datos, preparándolos para cursos avanzados de ciencias de la computación y desafíos de desarrollo de software del mundo real.",
    "teaching.algorithmics.objective1": "Analizar la complejidad temporal y espacial usando notación Big O",
    "teaching.algorithmics.objective2": "Diseñar algoritmos eficientes usando varios paradigmas",
    "teaching.algorithmics.objective3": "Implementar y optimizar estructuras de datos fundamentales",
    "teaching.algorithmics.objective4": "Resolver algoritmos de grafos y problemas de flujo de red",
    "teaching.algorithmics.objective5": "Aplicar pensamiento algorítmico a problemas del mundo real",
    "teaching.algorithmics.algorithmParadigms": "Paradigmas Algorítmicos",
    "teaching.algorithmics.coreTechniques": "Técnicas Principales",
    "teaching.algorithmics.advancedTopics": "Temas Avanzados",
    "teaching.algorithmics.technique1": "Divide y Vencerás",
    "teaching.algorithmics.technique2": "Programación Dinámica",
    "teaching.algorithmics.technique3": "Algoritmos Voraces",
    "teaching.algorithmics.technique4": "Vuelta Atrás",
    "teaching.algorithmics.topic1": "Algoritmos de Grafos",
    "teaching.algorithmics.topic2": "Flujos de Red",
    "teaching.algorithmics.topic3": "Algoritmos de Cadenas",
    "teaching.algorithmics.topic4": "Geometría Computacional",
    "teaching.algorithmics.dataStructures": "Estructuras de Datos",
    "teaching.algorithmics.linkedLists": "Listas Enlazadas",
    "teaching.algorithmics.trees": "Árboles",
    "teaching.algorithmics.heaps": "Montículos",
    "teaching.algorithmics.hashTables": "Tablas Hash",
    "teaching.algorithmics.graphs": "Grafos",
    "teaching.algorithmics.avlTrees": "Árboles AVL",
    "teaching.algorithmics.programmingChallenges": "Desafíos de Programación",
    "teaching.algorithmics.challengesDescription": "Los estudiantes resolverán problemas algorítmicos progresivamente desafiantes, desde ordenamiento y búsqueda básicos hasta problemas de optimización complejos. Los concursos de programación semanales ayudan a desarrollar habilidades de programación competitiva y refuerzan conceptos teóricos.",
    "teaching.algorithmics.onlineJudges": "Jueces en Línea",
    "teaching.algorithmics.languages": "Lenguajes",
    "teaching.algorithmics.judges": "LeetCode, Codeforces, AtCoder",
    "teaching.algorithmics.programmingLanguages": "C++, Python, Java",
    "teaching.algorithmics.prerequisites": "Programación, Matemáticas",
    "teaching.algorithmics.algorithmTemplates": "Plantillas de Algoritmos",
    "teaching.algorithmics.codeRepository": "Repositorio de Código",
    "teaching.algorithmics.practiceProblems": "Problemas de Práctica",
    "teaching.algorithmics.programmingContests": "Concursos de Programación",
    "teaching.algorithmics.assignments": "Tareas",

    // Business Intelligence Cours
    "teaching.businessIntelligence.title": "Minería de Texto",
    "teaching.businessIntelligence.description": "Esta parte del curso de \"Inteligencia de Negocios\" se enfoca en la minería de texto. Aquí, aprenderás a extraer insights de texto a través de técnicas como TF-IDF, word2vec, y Transformers.",
    "teaching.businessIntelligence.overview": "Este curso de minería de texto proporciona a los estudiantes el conocimiento y las habilidades necesarias para diseñar, implementar y gestionar soluciones de minería de texto. Los estudiantes aprenderán cómo extraer valor de los datos a través de modelado de datos adecuado, técnicas de almacenamiento y análisis avanzado.",
    "teaching.businessIntelligence.overview2": "El curso cubre toda la minería de texto desde la recolección y almacenamiento de datos hasta la visualización y reportes, con experiencia práctica usando herramientas estándar de la industria incluyendo Pytorch, Hugging Face y Python para análisis de datos.",
    "teaching.businessIntelligence.objective1": "Entender los fundamentos de la minería de texto",
    "teaching.businessIntelligence.objective2": "Aplicar técnicas de minería de texto a problemas del mundo real",
    "teaching.businessIntelligence.objective3": "Evaluar y comparar diferentes técnicas de minería de texto",
    "teaching.businessIntelligence.objective4": "Aplicar análisis estadístico y técnicas de minería de datos",
    "teaching.businessIntelligence.objective5": "Comprender requisitos empresariales y traducirlos en soluciones técnicas",
    "teaching.businessIntelligence.topic1": "Introducción",
    "teaching.businessIntelligence.topic2": "Recolección y preprocesamiento de datos",
    "teaching.businessIntelligence.topic3": "De palabras a vectores",
    "teaching.businessIntelligence.topic4": "Redes neuronales recurrentes",
    "teaching.businessIntelligence.topic5": "Mecanismos de atención",
    "teaching.businessIntelligence.topic6": "Transformers",
    "teaching.businessIntelligence.topic7": "Grandes modelos de lenguaje",
    "teaching.businessIntelligence.topic8": "Proyecto",
    "teaching.businessIntelligence.toolsTechnologies": "Herramientas y Tecnologías",
    "teaching.businessIntelligence.prerequisites": "Bases de Datos, Estadística, Python",
    "teaching.businessIntelligence.courseMaterials": "Materiales del Curso",

    // Innovation Projects Course
    "teaching.innovationProjects.title": "Proyectos de Innovación",
    "teaching.innovationProjects.subtitle": "Innovación Docente",
    "teaching.innovationProjects.description": "Esta página lista proyectos de innovación docente enfocados en mejorar el aprendizaje. Cada proyecto incluye referencias cuando están disponibles.",
    "teaching.innovationProjects.programOverview": "Resumen",
    "teaching.innovationProjects.overview": "Esta página lista proyectos de innovación docente enfocados en mejorar el aprendizaje.",
    "teaching.innovationProjects.overview2": "Cada proyecto incluye referencias cuando están disponibles.",
    "teaching.innovationProjects.whatMakesSpecial": "Qué lo Hace Especial",
    "teaching.innovationProjects.awardWinningProjects": "Proyectos Ganadores de Premios",
    "teaching.innovationProjects.startupLaunches": "Lanzamientos de Startups",
    "teaching.innovationProjects.awardDescription": "Varios proyectos han ganado competencias nacionales e internacionales de innovación",
    "teaching.innovationProjects.startupDescription": "Múltiples startups han sido lanzadas exitosamente desde este programa",
    "teaching.innovationProjects.innovationTracks": "Pistas de Innovación",
    "teaching.innovationProjects.aiML": "IA y Aprendizaje Automático",
    "teaching.innovationProjects.sustainableTech": "Tecnología Sostenible",
    "teaching.innovationProjects.healthcareInnovation": "Innovación en Salud",
    "teaching.innovationProjects.fintechBlockchain": "FinTech y Blockchain",
    "teaching.innovationProjects.aiMLDescription": "Desarrolla sistemas inteligentes que resuelvan problemas del mundo real usando tecnologías de IA de vanguardia.",
    "teaching.innovationProjects.sustainableDescription": "Crea soluciones ambientalmente conscientes que promuevan la sostenibilidad y la innovación verde.",
    "teaching.innovationProjects.healthcareDescription": "Diseña tecnologías médicas y soluciones de salud que mejoren los resultados de los pacientes y la accesibilidad.",
    "teaching.innovationProjects.fintechDescription": "Construye la próxima generación de tecnologías financieras y aplicaciones descentralizadas.",
    "teaching.innovationProjects.successStories": "Historias de Éxito",
    "teaching.innovationProjects.ecosmart": "🏆 EcoSmart Energy (2023)",
    "teaching.innovationProjects.medai": "🚀 MedAI Diagnostics (2022)",
    "teaching.innovationProjects.cityflow": "💡 CityFlow (2024)",
    "teaching.innovationProjects.ecosmartDescription": "Sistema de optimización de red inteligente que ganó el Premio Nacional de Innovación y aseguró €2M en financiación.",
    "teaching.innovationProjects.medaiDescription": "Plataforma de imágenes médicas impulsada por IA ahora utilizada en más de 15 hospitales en Europa.",
    "teaching.innovationProjects.cityflowDescription": "Sistema de optimización de tráfico urbano que reduce la congestión de la ciudad en un 30% en programas piloto.",
    "teaching.innovationProjects.programDetails": "Detalles del Programa",
    "teaching.innovationProjects.investment": "Inversión",
    "teaching.innovationProjects.requirements": "Requisitos",
    "teaching.innovationProjects.investmentValue": "€50,000+ por proyecto",
    "teaching.innovationProjects.requirementsValue": "Idea innovadora + pasión",
    "teaching.innovationProjects.applicationProcess": "Proceso de Aplicación",
    "teaching.innovationProjects.submitIdea": "Enviar Idea",
    "teaching.innovationProjects.evaluation": "Evaluación",
    "teaching.innovationProjects.development": "Desarrollo",
    "teaching.innovationProjects.submitDescription": "Presenta tu concepto innovador",
    "teaching.innovationProjects.evaluationDescription": "Revisión de panel de expertos",
    "teaching.innovationProjects.developmentDescription": "Construye tu solución",
    "teaching.innovationProjects.applicationForm": "Formulario de Aplicación",
    "teaching.innovationProjects.ideaGuidelines": "Pautas de Ideas",
    "teaching.innovationProjects.successStoriesButton": "Historias de Éxito",
    "teaching.innovationProjects.supportProvided": "Apoyo Proporcionado",
    "teaching.innovationProjects.expertMentorship": "Mentoría de Expertos",
    "teaching.innovationProjects.fundingSupport": "Apoyo de Financiación",
    "teaching.innovationProjects.technicalResources": "Recursos Técnicos",
    "teaching.innovationProjects.marketAccess": "Acceso al Mercado",
    "teaching.innovationProjects.legalGuidance": "Orientación Legal",

    // Teaching Innovation Projects
    "teaching.innovationProjects.teachingTitle": "Proyectos de Innovación Docente",
    "teaching.innovationProjects.labels.code": "Código",
    "teaching.innovationProjects.labels.period": "Periodo",
    "teaching.innovationProjects.labels.role": "Rol",
    "teaching.innovationProjects.labels.publications": "Publicaciones",
    "teaching.innovationProjects.actions.viewPublication": "Ver publicación",

    // Project: UO-177745
    "teaching.innovationProjects.UO177745.title": "Generación automática y optimización de cuestionarios en Moodle usando analítica del aprendizaje, aplicación al aprendizaje de lenguajes de programación",
    
    // Project: RAG Assistant
    "teaching.innovationProjects.RAGAssistant.title": "Integración de un asistente inteligente en el ámbito educativo mediante modelos de lenguaje y técnicas de RAG",

    // About Section
    "about.title": "ACERCA DE MÍ",
    "about.bio1":
      "Hola! Mi nombre es Nahuel (significa Jaguar en lengua Mapuche), soy investigador de IA y profesor en la Universidad de Oviedo.",
    "about.bio2":
      "Mi investigación se centra en maximizar el potencial de la IA para anticipar potenciales resultados futuros y apoyar la toma de decisiones en sistemas de monitoreo, particularmente en escenarios con datos limitados. He trabajado tanto en el ámbito biomédico (en problemas como la detección y clasificación de arritmias, el análisis de imágenes de rayos X y PET funcionales de pacientes en coma profundo), así como en el ámbito industrial, monitorizando y pronósticando baterías de iones de litio, motores de aviación y ventiladores de túneles. Estoy especialmente interesado en desarrollar modelos que sean robustos y efectivos, pero también interpretables y accesibles para personas no especialistas en IA.",
    "about.bio3":
      //"Como docente, mi objetivo es transmitir mi entusiasmo a mis estudiantes y proporcionarles las herramientas necesarias para definir y perseguir sus propios objetivos. <br><br> También me encanta hablar sobre mi trabajo y sobre la IA en general, por eso *ofrezco actividades de difusión (talleres, cursos, charlas), así como formación (principalmente orientada para empresas) enfocada en IA.* <br><br> 💬 No dudes en contactarme si estás interesado en mi investigación, buscando colaboración, o estás interesado en alguna charla o formación para tu empresa/organización."
	  "Me encanta divulgar sobre mi trabajo y la IA en general, por eso *ofrezco servicios de difusión (talleres, cursos, charlas), así como formación (principalmente orientada para empresas) enfocados en IA.* <br><br> 💬 No dudes en contactarme si estás interesado en mi investigación, buscando colaboración, o estás interesado en alguna charla o formación para tu empresa/organización.",
    "about.links.title": "Enlaces",
    "about.cta": "RESERVA UNA REUNIÓN CONMIGO",

    // Experience Section
    "experience.title": " ",
	"experience.becario.company": "Universidad de Oviedo",
	"experience.becario.position": "Becario de investigación",
	"experience.becario.period": "Oct 2018 - Jul 2019",
	"experience.becario.location": "Gijón",
	"experience.becario.description": "Análisis de electrocardiogramas intracardiacos para la predicción de enfermedades cardiovasculares.",
	"experience.technician.company": "Universidad de Oviedo",
	"experience.technician.position": "Técnico de investigación",
	"experience.technician.period": "Oct 2019 - Jan 2021",
	"experience.technician.location": "Gijón",
	"experience.technician.description": "Desarrollo de modelos computacionales para el tratamiento de baterías recargables.",
	"experience.hawaii.company": "University of Hawaii at Manoa",
    "experience.hawaii.position": "Estancia de investigación",
    "experience.hawaii.period": "May 2022 - Sept 2022",
    "experience.hawaii.location": "Honolulu",
    "experience.hawaii.description": "Desarrollo de herramientas de IA para diagnóstico y pronóstico de baterías de iones de litio en el Instituto Natural de Energía de Hawái (HNEI).",
    "experience.montpellier.company": "Université de Montpellier",
    "experience.montpellier.position": "Estancia de investigación",
    "experience.montpellier.period": "May 2023 - Jul 2023",
    "experience.montpellier.location": "Montpellier",
    "experience.montpellier.description": "Desarrollo de métodos de aprendizaje automático para diagnóstico y pronóstico de imágenes de tomografía por emisión de positrones (PET) en el Laboratorio de Informática, Robótica y Microelectrónica de Montpellier (LIRMM).",
    "experience.lecturer.company": "Universidad de Oviedo",
    "experience.lecturer.position": "Lecturer",
    "experience.lecturer.period": "Feb 2021 - Aug 2023",
    "experience.lecturer.location": "Oviedo",
    "experience.lecturer.description": "Asignaturas que enseño:\n\n-Inteligencia de Negocios\n-Visualización de Datos\n-Algoritmos\n-Sistemas Operativos\n-Bases de Datos\n-Metodología de Programación\n-Introducción a la Programación",
	"experience.assistant.company": "Universidad de Oviedo",
    "experience.assistant.position": "Asistente de investigación",
    "experience.assistant.period": "Sep 2024 - Present",
    "experience.assistant.location": "Oviedo",
    "experience.assistant.description": "Asignaturas que enseño:\n-Modelos Generativos\n-Inteligencia de Negocios\n-Visualización de Datos\n-Algoritmos",
	"experience.ceu.company": "Universidad CEU San Pablo",
    "experience.ceu.position": "Estancia de investigación",
    "experience.ceu.period": "Jan 2025 - Mar 2025",
    "experience.ceu.location": "Madrid",
    "experience.ceu.description": "Análisis de ECG con Modelos de Lenguaje de Vision Grande",
	"experience.alberta.company": "University of Alberta",
    "experience.alberta.position": "Estancia de investigación",
    "experience.alberta.period": "April 2025 - July 2025",
    "experience.alberta.location": "Edmonton",
    "experience.alberta.description": "Análisis multimodal longitudinal de EHR y ECGs",

    // Research Section
    "research.title": "Investigación",
    "research.description":
      "Soy un **speaker internacional**, brindando charlas prácticas y talleres sobre **Diseño UX, Marketing, Sostenibilidad**, y **tecnologías exponenciales** como **crypto, blockchain e Inteligencia Artificial**. Mi enfoque combina **teoría y experiencia práctica** para empoderar **emprendedores y profesionales** en la **era digital**.",
    "research.cta": "SOLICITAR CHARLA/TALLER",
    "research.argentina": "Argentina",
    "research.international": "Internacional",
    
    // Research Topics
    "research.topics.title": "Áreas de Investigación",
    "research.topics.subtitle": "Principales temas y problemas en los que trabajo",
    "research.topics.industrial.title": "Industrial",
    "research.topics.industrial.emoji": "🏭",
    "research.topics.industrial.problems": [
      "Monitoreo y pronóstico de salud de baterías",
      "Monitoreo de condición de motores de aeronaves",
      "Mantenimiento predictivo de ventiladores",
      "Sistemas IoT industriales",
      "Optimización de gestión energética"
    ],
    "research.topics.medical.title": "Medicina",
    "research.topics.medical.emoji": "🏥",
    "research.topics.medical.problems": [
      "Predicción de enfermedades cardiovasculares",
      "Análisis de ECG y detección de arritmias",
      "Análisis de imágenes médicas (rayos X, PET)",
      "Análisis de Historiales Clínicos Electrónicos",
      "Diagnóstico de trastornos neurológicos"
    ],
    "research.topics.others.title": "Otros",
    "research.topics.others.emoji": "🔬",
    "research.topics.others.problems": [
      "Aprendizaje automático con datos limitados",
      "Métodos de IA explicable",
      "Fusión de datos multimodales",
      "Desarrollo de modelos robustos",
      "Aplicaciones educativas de IA"
    ],
    "research.projects.title": "Proyectos de Investigación",
    "research.projects.subtitle": "Proyectos de investigación pasados y actuales",
    
    // Research Projects Data
    "research.projects": [
		{
			"title": "GEOAI-Based Augmentation of Multi-source Urban GIS",
			"code": "NAC-ES-PUB-ASV-2025 PCI2025-163245",
			"type": "European",
			"description": "Aún por definir!",
			"date": "2025-Present",
			"participation": "Team member"
			},
		{
			"title": "Inteligencia Computacional para Datos Disruptivos",
			"code": "SEK-25-GRU-GIC-24-055",
			"type": "Regional",
			"description": "El uso de datos incompletos, inexactos o parciales en el aprendizaje automático puede llevar a decisiones sesgadas o ineficientes. Normalmente, se utilizan grandes conjuntos de datos, seleccionando elementos informativos y descartando aquellos que no cumplen con un nivel mínimo de calidad. Nuestro grupo de investigación propone un enfoque alternativo para escenarios donde la escasez de datos requiere maximizar cada pieza de información disponible, un desafío frecuente en áreas como la industria, la finanzas, la economía y la medicina.",
			"date": "2025-Present",
			"participation": "Team member"
			},
		{
			"title": "Computación Sostenible en Escenarios de Información Limitada",
			"code": "MCINN-24-PID2023-146257OB-I00 ",
			"type": "National",
			"description": "Este proyecto está dedicado a desarrollar nuevos métodos y aplicaciones para abordar desafíos en el aprendizaje automático en entornos caracterizados por información escasa. Prioriza el uso de datos de baja calidad, que a menudo se pasan por alto. En alineación con los principios de Green AI, nuestro enfoque incluye diseñar metodologías que mejoren la eficiencia computacional y, como resultado, reduzcan el consumo de energía. Además, adaptamos estas metodologías para abordar desafíos específicos de la industria, enfocándonos en prácticas sostenibles como la extensión de la vida útil de equipos y la gestión eficiente de recursos como el agua y la energía.",
			"date": "2025-Present",
			"participation": "Team member"
			},
		  {
			"title": "Observatorio para la Implementación de la Agenda 2030 en el Sistema Universitario Español",
			"code": "MDSC-24-2024D179-Agenda2030",
			"type": "National",
			"description": "Trabajando en CITIES DATALEX®, un software cuyo propósito es mejorar el acceso a las normativas legales resultantes de la aplicación en acciones en el entorno urbano y, en general, en los procesos de desarrollo urbano y territorial sustentable. También, supervisando el equipo IT en ayudar a recopilar y procesar datos para el propósito principal del proyecto.",
			"date": "2025-Present",
			"participation": "Team member"
		  },
		  {
			"title": "Estimación Precisa de Estado de Salud y Vida Útil Restante en Tecnologías de Litio Avanzadas",
			"code": "MCI-23-PID2022-141792OB-I00",
			"type": "National",
			"description": "Proyecto liderado por mi colega y amigo David Anseán. Estamos trabajando en entrenar modelos de aprendizaje automático con datos simulados desde baterías digitales de gemelos como 'Alawa, y adaptarlas a datos reales para estimar el estado de salud y la vida útil restante de baterías de iones de litio.",
			"date": "2023-Present",
			"participation": "Collaborating researcher"
		  },
		  {
			"title": "Inteligencia Artificial aplicada al Análisis de Datos y Modelado de Procesos",
			"code": "FUO-354-23",
			"type": "Industry, TOTAL ENERGIES, S.A.",
			"description": "Proyecto enmarcado dentro de la Cátedra Total Energies de Análisis de Datos e Inteligencia Artificial. Se abordaron proyectos desarrollados con participación de estudiantes, entre los que se incluyen: RAG con chatbots para documentación interna de la empresa, modelado de pluviosidad y caudal de ríos para gestión de embalses, modelos predictivos para pronóstico de demanda, modelos de supervivencia para churning y retención de clientes, etc.",
			"date": "2022-Present",
			"participation": "Team member"
		  },
		  {
			"title": "Inteligencia Computacional para Mitigación de Emisiones: Nuevas Metodologías de Aprendizaje con Datos Incompletos",
			"code": "MCI-21-PID2020-112726RB-I00 ",
			"type": "National",
			"description": "Trabajamos en desarrollar nuevas formas de modelar conocimiento cuando los datos disponibles son de baja calidad.",
			"date": "2021-2024",
			"participation": "Team member"
		  },
		  {
			"title": "Monitoreo de Condición Inteligente y Explicable de Ventiladores de Chorro",
			"code": "FUO-231-22",
			"type": "Industry, TALLERES ZITRÓN, S.A.",
			"description": "Desarrollo de un sistema de monitorización de condición que puede integrarse en ventiladores de jet para monitorear su estado y detectar posibles anomalías.",
			"date": "2022-2023",
			"participation": "Team member"
		  },
		  {
			"title": "Ingeniería de Datos aplicada a la Gestión Energética Ecologista (IDAGEE)",
			"code": "FC-GRUPIN-IDI/2018/000226",
			"type": "Regional",
			"description": "Análisis de electrocardiogramas intracardiacos para la predicción de enfermedades cardiovasculares.",
			"date": "2019-2020",
			"participation": "Collaborating researcher",
		  }
    ],

    // Services Section
    "services.title": "Servicios",
    "services.subtitle2": "Consultoría, Charlas y Talleres",
    "services.subtitle": "Aquí puedes encontrar algunos de los cursos, talleres y charlas que he dado.",
    "services.readMore": "Ver más",
    "services.noArticles": "No se encontraron entradas. ¡Vuelve pronto!",
    "services.viewAll": "Ver Últimas 10 Entradas",
    "services.currentCourses": "Cursos Actuales",
    "services.currentCoursesSubtitle": "Descubre las últimas ofertas educativas diseñadas para avanzar tus habilidades en IA y tecnología.",
    "services.pastExperiences": "Experiencias Pasadas",
    "services.pastExperiencesSubtitle": "Aquí puedes encontrar algunos de los cursos, talleres y charlas que he dado.",
    "services.searchPast": "Buscar servicios pasados...",
    "services.noPastServices": "No se encontraron servicios pasados que coincidan con",
    "services.noPastServicesDefault": "No hay servicios pasados disponibles en este momento.",
    "services.reviews": "Reseñas de Clientes",
    "services.reviewsSubtitle": "Lo que dicen los clientes sobre trabajar conmigo",

    // Footer
    "footer.portfolio": "PORTAFOLIO",
    "footer.teaching.design": "Diseño de Productos",
    "footer.about": "ACERCA DE MÍ",
    "footer.about.bio": "Biografía Corta",
	"footer.about.research": "Investigación",
	"footer.about.teaching": "Docencia",
    "footer.about.talks": "Charlas y Talleres",
    "footer.others": "OTROS",
    "footer.others.blog": "Blog",
    "footer.others.cv": "CV",
    "footer.connect": "CONECTEMOS",
    "footer.connect.project": "✉️ Puedes enviarme un mensaje a costanahuel@uniovi.es o a cualquiera de mis otras redes sociales, intentaré responder lo antes posible!",
    "footer.connect.touch": "Ponte en contacto",

    // Streaming Section
    "streaming.title": "Transmisión en Vivo",
    "streaming.backHome": "Volver al Inicio",
    "streaming.description":
      "Acompáñame en vivo para discusiones sobre diseño, tecnología y emprendimiento. Sígueme mientras comparto insights, trabajo en proyectos y me conecto con la comunidad.",
    "streaming.joinWhatsApp": "Únete al Grupo de WhatsApp",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): any => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
