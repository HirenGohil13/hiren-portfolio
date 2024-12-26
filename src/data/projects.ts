import { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: "Cloud Infrastructure Platform",
    description: "Designed and implemented a scalable cloud infrastructure platform serving 1M+ users. Utilized AWS, Kubernetes, and Terraform.",
    tech: ["AWS", "Kubernetes", "Terraform", "Go", "React"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    metrics: [
      { value: "1M+", label: "Active Users" },
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
      { value: "10TB+", label: "Daily Data" },
      { value: "60%", label: "Cost Reduction" }
    ],
    status: "completed"
  },
  {
    title: "Music Space Booking Platform",
    description: "A comprehensive platform for musicians to discover, book, and manage rehearsal spaces, recording studios, and performance venues. Inspired by Tutti Space.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Google Maps API"],
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    metrics: [
      { value: "500+", label: "Venues" },
      { value: "10K+", label: "Musicians" }
    ],
    status: "planned"
  }
];