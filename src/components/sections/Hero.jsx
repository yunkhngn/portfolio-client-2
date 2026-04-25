import { motion } from 'framer-motion'
import { PORTFOLIO_DATA } from '../../config'

export function Hero() {
  const { hero, meta } = PORTFOLIO_DATA

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-bg overflow-hidden glow-border"
    >
      <div className="absolute inset-0 grid-bg" />

      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        <span className="w-2.5 h-2.5 rounded-full bg-accent" />
        <span className="w-2.5 h-2.5 rounded-full bg-accent" />
        <span className="w-2.5 h-2.5 rounded-full bg-accent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative z-10 mt-24 mb-10 flex items-center gap-4"
      >
        <span className="pill-badge">
          <span className="text-accent text-base">🎬</span>
          <span>BY {meta.shortName}</span>
        </span>
        <span className="text-white/30 font-mono text-sm">{meta.year}</span>
      </motion.div>

      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-bold uppercase leading-[0.85] tracking-tighter text-accent"
        >
          {hero.titleLine1}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="font-mono text-xs md:text-sm uppercase tracking-[0.4em] text-white/40 my-3 md:my-5"
        >
          {hero.slogan}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-7xl md:text-[9rem] lg:text-[11rem] font-bold uppercase leading-[0.85] tracking-tighter text-accent"
        >
          {hero.titleLine2}
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-14 flex flex-col items-center gap-3 z-10"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/35">
          {hero.scrollText}
        </span>
        <div className="w-px bg-white/25 animate-scroll-line" />
      </motion.div>
    </section>
  )
}
