import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '#hero', label: 'Hero' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
]

export function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="bg-background text-foreground selection:bg-brand selection:text-white pb-32 min-h-screen">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-foreground/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center border-x border-foreground/10 relative">
          <div className="font-display font-bold text-xl tracking-tight">VD.</div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
          <nav
            id="site-nav"
            className={cn(
              'text-xs md:text-sm font-medium uppercase tracking-wider',
              'max-md:absolute max-md:top-full max-md:left-0 max-md:right-0 max-md:flex-col max-md:gap-4 max-md:bg-background max-md:border-b max-md:border-foreground/10 max-md:p-4 max-md:shadow-md',
              menuOpen ? 'max-md:flex' : 'max-md:hidden',
              'md:flex md:flex-row md:items-center md:gap-6 md:static md:border-0 md:p-0 md:shadow-none',
            )}
          >
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="hover:text-brand transition-colors py-1 md:py-0"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      {children}
    </div>
  )
}
