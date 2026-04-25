import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function SectionHeading({ children, pill, className, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn('mb-14', className)}
    >
      {pill && (
        <span
          className={cn('pill-badge mb-4 inline-flex', light && 'border-[#111]/20 text-[#111]/60')}
        >
          {pill}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight">{children}</h2>
    </motion.div>
  )
}
