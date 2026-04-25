import { motion } from 'framer-motion'

export function Section({ id, className, children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto border-x border-foreground/10 ${className || ''}`}
    >
      {children}
    </motion.section>
  )
}
