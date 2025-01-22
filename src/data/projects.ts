import { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: "Bndle - Online Marketplace",
    description: "Bndle is an innovative online marketplace connecting modern parents and families with independent baby brands. Founded in 2021, Bndle offers a curated selection of baby essentials, children's clothing, and other products designed to support families throughout their parenting journey.",
    tech: ["AWS","Postgress","Node.js","Laravel","React"],
    image: "https://plus.unsplash.com/premium_photo-1683288446489-71997f24255d?q=80&w=2574&auto=format&fit=crop&&w=1400&q=80",
    metrics: [
      { value: "10k+", label: "Active Users" },
      { value: "99.99%", label: "Uptime" }
    ],
    status: "completed"
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Led the development of an AI-powered analytics platform that processes 10TB+ of data daily.",
    tech: ["Python", "TensorFlow", "React", "PostgreSQL", "Redis"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    metrics: [
      { value: "1TB+", label: "Daily Data" },
      { value: "60%", label: "Cost Reduction" }
    ],
    status: "completed"
  },
  {
    title: "Tutti- Music Space Booking Platform",
    "description": "Tutti is a platform for booking creative spaces like rehearsal rooms, recording studios, and event venues. It offers easy booking, personalized recommendations, and supports sustainability by donating 1% of revenue to carbon removal. Designed for musicians and creators, it connects users to a wide range of spaces for rehearsals, shoots, and events.",
    tech: ["Next.js", "Node.js", "Stripe", "MongoDB", "Google Maps API"],
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    metrics: [
      { value: "300+", label: "Venues" },
      { value: "2K+", label: "Musicians" }
    ],
    status: "in-progress"
  },
  {
    title: "AI Roof Damage Inspector",
    "description": "The inspection tool uses machine learning to detect roof damages, such as cracks and leaks, from images or data. It generates dynamic, real-time reports, offering detailed insights for efficient damage assessment and prioritization of repairs.",
    tech: ["Python", "ML", "SQL","Next.js" ],
    image: "https://plus.unsplash.com/premium_photo-1678293088678-5eb08b9c283e?q=80&w=2670&auto=format&fit=crop&w=1400&q=80",
    metrics: [
      { value: "2k+", label: "Active Users" },
      { value: "99.99%", label: "Uptime" }
    ],
    status: "completed"
  },
  {
    title: "Kinetics: Empowering CX Leaders with Strategic Analytics",
    "description": "Kinetics is a strategic analytics platform that helps Customer Experience (CX) and Business Leaders quickly identify CX issues, find solutions, and measure the impact of CX initiatives. It enables businesses to align their efforts with customer needs, driving improvements that enhance customer lifetime value and overall satisfaction.",
    tech: ["Python", "PostgreSql", "React", "Node","GCP",'Event Driven Architecture' ],
    image: "https://plus.unsplash.com/premium_photo-1678293088678-5eb08b9c283e?q=80&w=2670&auto=format&fit=crop&w=1400&q=80",
    metrics: [
      { value: "4k+", label: "Active Users" },
      { value: "99.99%", label: "Uptime" }
    ],
    status: "in-progress"
  }
];
