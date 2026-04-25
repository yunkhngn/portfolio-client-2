import { motion } from 'framer-motion'
import { PORTFOLIO_DATA } from '../../config'
import { SectionHeading } from '../shared/SectionHeading'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

export function Experience() {
  const { experience } = PORTFOLIO_DATA

  return (
    <div>
      <SectionHeading pill="EXPERIENCE">My Journey</SectionHeading>

      <div className="space-y-6">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            {...fadeUp(index * 0.1)}
            className="card-dark rounded-2xl p-8 md:p-10 relative overflow-hidden group"
          >
            {exp.current && (
              <div className="absolute top-4 right-4">
                <span className="flex items-center gap-2 text-xs font-mono text-accent">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Present
                </span>
              </div>
            )}

            <h3 className="font-display text-2xl md:text-3xl font-bold uppercase">{exp.company}</h3>
            {exp.subtitle && (
              <p className="text-white/30 text-xs font-mono mt-1 uppercase tracking-wider">{exp.subtitle}</p>
            )}

            <p className="text-accent font-medium mt-2 text-lg uppercase tracking-wide">{exp.role}</p>

            <div className="mt-4">
              <span className="inline-block px-4 py-2 rounded-xl border border-border text-white/40 font-mono text-xs tracking-wider">
                {exp.year}
              </span>
            </div>

            <p className="text-white/50 mt-4 leading-relaxed max-w-2xl">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
