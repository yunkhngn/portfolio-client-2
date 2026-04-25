import { motion } from 'framer-motion'
import { PORTFOLIO_DATA } from '../../config'
import { SectionHeading } from '../shared/SectionHeading'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

export function Projects() {
  const { projects } = PORTFOLIO_DATA

  return (
    <div>
      <SectionHeading pill="WORKS">Branding</SectionHeading>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            {...fadeUp(index * 0.1)}
            className="card-dark rounded-2xl p-6 md:p-8 flex items-center gap-6 group cursor-default"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-bg flex-shrink-0 border border-border">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.innerHTML =
                    '<div class="w-full h-full flex items-center justify-center text-white/20 font-mono text-xs">📹</div>'
                }}
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30">
                  {project.category}
                </span>
                <span className="text-white/30 font-mono text-xs">{project.projectCount}</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold uppercase truncate">{project.title}</h3>
              {project.description ? (
                <p className="text-white/45 text-sm mt-2 line-clamp-2">{project.description}</p>
              ) : null}
            </div>

            <span className="text-white/30 text-2xl group-hover:text-accent group-hover:rotate-45 transition-all flex-shrink-0">
              +
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
