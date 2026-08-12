import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { Project } from '../data'

interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ borderColor: 'rgba(255,255,255,0.15)' }}
      className="group rounded-xl border border-white/5 bg-white/[0.03] p-6 transition-colors"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-neutral-500 hover:text-white hover:bg-white/10 transition-colors"
              aria-label={`${project.title} GitHub`}
            >
              <Github size={16} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-neutral-500 hover:text-white hover:bg-white/10 transition-colors"
              aria-label={`${project.title} live`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <p className="mt-3 text-sm text-neutral-400 leading-relaxed">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-md border border-white/5 bg-white/[0.02] px-2.5 py-0.5 text-[11px] text-neutral-500">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}