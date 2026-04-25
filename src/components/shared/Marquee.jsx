import { cn } from '@/lib/utils'

export function Marquee({ items, className, reverse = false }) {
  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-8 mx-6">
      <span className="text-xl md:text-3xl font-display font-bold uppercase tracking-wider whitespace-nowrap">
        {item}
      </span>
      <span className="text-accent text-3xl">✽</span>
    </span>
  ))

  return (
    <div className={cn('overflow-hidden py-6 border-y-brutal bg-foreground text-background', className)}>
      <div className={cn('flex w-max', reverse ? 'animate-marquee-reverse' : 'animate-marquee')}>
        {content}
        {content}
      </div>
    </div>
  )
}
