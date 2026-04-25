import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function Section({ id, className, children, light = false }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'py-24 md:py-32 relative',
        light ? 'bg-bg-light text-[#111]' : 'bg-bg text-white',
        className,
      )}
    >
      <div className="section-container relative z-10">{children}</div>
    </motion.section>
  )
}
