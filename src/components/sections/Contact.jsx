import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { PORTFOLIO_DATA } from '../../config'

export function Contact() {
  const { contact } = PORTFOLIO_DATA

  return (
    <div className="text-center py-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-handwriting text-5xl md:text-7xl text-white/80 italic">{contact.headingLine1}</h2>
        <h2 className="font-display text-6xl md:text-[8rem] lg:text-[10rem] font-bold uppercase leading-[0.85] tracking-tighter text-accent">
          {contact.headingAccent}
        </h2>
        <h2 className="font-handwriting text-5xl md:text-7xl text-white/80 italic">{contact.headingLine2}</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-16"
      >
        <a
          href={contact.ctaHref}
          className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-white font-display font-bold uppercase tracking-wider text-sm rounded-full hover:bg-accent-light hover:scale-105 transition-all shadow-lg shadow-accent/20"
        >
          {contact.ctaLabel}
          <ArrowRight size={18} />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-10 flex justify-center"
      >
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-bg-card border border-border">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs">🎬</div>
          <div className="text-left">
            <p className="text-white text-sm font-semibold">{contact.availability}</p>
            <p className="text-white/40 text-xs font-mono">Availability: Now</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
