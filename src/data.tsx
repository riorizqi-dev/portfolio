import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export const siteData = {
  name: 'Alex Chen',
  role: 'Frontend Developer',
  bio: 'I craft pixel-perfect, accessible, and performant web experiences. Passionate about design systems, micro-interactions, and the intersection of design and engineering.',
  status: 'Available for work',
  email: 'alex@example.com',
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  tagline: {
    projects: 'Portfolio Showcase',
    projectsSub: 'A selection of recent work — crafted with care and attention to detail.',
    tech: 'Tech Stack',
    contact: "Let's work together",
    contactSub: 'Have a project in mind? I would love to hear about it.',
  },
  footer: `© ${new Date().getFullYear()} Alex Chen. All rights reserved.`,
}

export interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    title: 'Dashflow',
    description:
      'A responsive analytics dashboard with real-time data visualization, dark mode, and customizable widgets.',
    tags: ['React', 'TypeScript', 'TanStack Query', 'Recharts'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Threadly',
    description:
      'A real-time messaging app with typing indicators, read receipts, and file sharing. Built with WebSockets.',
    tags: ['Next.js', 'Socket.io', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Modulist',
    description:
      'A modular component library with 50+ accessible, themeable UI primitives. Storybook and unit tests included.',
    tags: ['React', 'Storybook', 'Vitest', 'Radix UI'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Retain',
    description:
      'A spaced-repetition learning platform with intelligent scheduling, progress tracking, and rich note editing.',
    tags: ['Vue', 'Firebase', 'Tailwind CSS', 'Tiptap'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Aperture',
    description:
      'A photography portfolio with lazy-loaded images, masonry layout, and a custom CMS for content management.',
    tags: ['Astro', 'MDX', 'Cloudinary', 'GSAP'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Formant',
    description:
      'A drag-and-drop form builder with conditional logic, validation rules, and export to JSON schema.',
    tags: ['React', 'DnD Kit', 'Zod', 'Zustand'],
    github: 'https://github.com',
    live: undefined,
  },
]

export interface TechItem {
  name: string
  icon: React.ComponentType<{ className?: string }>
}

export const techStack: TechItem[] = [
  { name: 'React', icon: () => <span className="text-[#61DAFB] font-bold text-lg">R</span> },
  { name: 'TypeScript', icon: () => <span className="text-[#3178C6] font-bold text-lg">TS</span> },
  { name: 'Next.js', icon: () => <span className="font-bold text-lg">N</span> },
  { name: 'Tailwind CSS', icon: () => <span className="text-[#06B6D4] font-bold text-lg">T</span> },
  { name: 'Node.js', icon: () => <span className="text-[#339933] font-bold text-lg">N</span> },
  { name: 'Framer Motion', icon: () => <span className="text-[#FF0055] font-bold text-lg">F</span> },
  { name: 'PostgreSQL', icon: () => <span className="text-[#336791] font-bold text-lg">PG</span> },
  { name: 'Vitest', icon: () => <span className="text-[#6E9F18] font-bold text-lg">V</span> },
  { name: 'Docker', icon: () => <span className="text-[#2496ED] font-bold text-lg">D</span> },
  { name: 'Git', icon: () => <span className="text-[#F05032] font-bold text-lg">G</span> },
  { name: 'Figma', icon: () => <span className="text-[#F24E1E] font-bold text-lg">F</span> },
  { name: 'GraphQL', icon: () => <span className="text-[#E10098] font-bold text-lg">GQ</span> },
]

export const heroTags = ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js']

export const socialLinks = [
  { label: 'GitHub', href: siteData.social.github, icon: Github },
  { label: 'LinkedIn', href: siteData.social.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${siteData.email}`, icon: Mail },
  { label: 'Open to work', href: '#', icon: ExternalLink },
]