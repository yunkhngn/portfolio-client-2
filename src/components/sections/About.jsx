import { motion } from 'framer-motion'
import { PORTFOLIO_DATA } from '../../config'
import { SectionHeading } from '../shared/SectionHeading'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

export function About() {
  const { about } = PORTFOLIO_DATA

  return (
    <div className="space-y-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div {...fadeUp()} className="relative flex justify-center">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 rounded-2xl bg-accent translate-x-3 translate-y-3" />
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#222] bg-bg-card">
              <img
                src={about.avatar}
                alt="Trần Văn Dũng"
                className="w-full aspect-[3/4] object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.innerHTML =
                    '<div class="w-full aspect-[3/4] bg-bg-card flex items-center justify-center"><span class="text-white/20 font-mono text-sm">Photo</span></div>'
                }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.2)} className="space-y-6">
          <SectionHeading pill="ABOUT">About Me</SectionHeading>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white">{about.greeting}</h3>
          <p className="text-white/60 leading-relaxed text-base md:text-lg">{about.bio}</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div {...fadeUp(0)} className="card-dark rounded-2xl p-8">
          <span className="pill-badge text-accent border-accent/30 mb-4 inline-flex">{about.education.label}</span>
          <h4 className="font-display text-lg font-bold uppercase mt-3 text-accent">{about.education.school}</h4>
          <p className="text-white/50 mt-2 text-sm leading-relaxed">{about.education.detail}</p>
          <p className="font-mono text-xs text-white/30 mt-3">{about.education.period}</p>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="card-dark rounded-2xl p-8">
          <span className="pill-badge text-accent border-accent/30 mb-4 inline-flex">SKILLS</span>
          <ul className="space-y-3 mt-3">
            {about.skills.map((skill) => (
              <li key={skill} className="flex items-center gap-3">
                <span className="text-accent text-xs">◆</span>
                <span className="text-white/70 text-sm font-medium uppercase tracking-wide">{skill}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...fadeUp(0.2)} className="card-dark rounded-2xl p-8">
          <span className="pill-badge text-accent border-accent/30 mb-4 inline-flex">TOOLS</span>
          <div className="grid grid-cols-3 gap-3 mt-3">
            {about.tools.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center gap-1.5 p-3 rounded-xl hover:scale-105 transition-transform cursor-default"
                style={{ backgroundColor: tool.bg }}
              >
                <span className="text-xl font-bold font-mono" style={{ color: tool.color }}>
                  {tool.short}
                </span>
                <span className="text-[9px] text-white/50 uppercase tracking-wider text-center leading-tight">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
