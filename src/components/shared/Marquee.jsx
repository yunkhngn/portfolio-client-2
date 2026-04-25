import { cn } from '@/lib/utils'

export function Marquee({ items, className, reverse = false }) {
  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-8 mx-4">
      <span className="text-lg md:text-xl font-display font-bold uppercase tracking-[0.2em] whitespace-nowrap">
        {item}
      </span>
      <span className="text-accent text-sm">✦</span>
    </span>
  ))

  return (
    <div className={cn('overflow-hidden py-4 bg-accent', className)}>
      <div className={cn('flex w-max', reverse ? 'animate-marquee-reverse' : 'animate-marquee')}>
        {content}
        {content}
      </div>
    </div>
  )
}
