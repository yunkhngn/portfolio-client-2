import { PORTFOLIO_DATA } from '../../config'

export function Footer() {
  const { footer } = PORTFOLIO_DATA

  return (
    <footer className="bg-bg border-t border-border py-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-3">
            {footer.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith('http') ? '_blank' : undefined}
                rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="pill-badge hover:bg-accent hover:text-white hover:border-accent transition-all"
              >
                {social.name}
              </a>
            ))}
          </div>

          <p className="text-white/30 text-xs font-mono">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
