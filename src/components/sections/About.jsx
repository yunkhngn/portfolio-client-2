import { Globe, Mail, Phone } from 'lucide-react'
import { PORTFOLIO_DATA } from '../../config'

export function About() {
  const { about, contact } = PORTFOLIO_DATA

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-12">
      <div className="space-y-8">
        <h2 className="font-display text-5xl font-bold uppercase tracking-tight border-b-8 border-brand pb-4 inline-block">
          Profile
        </h2>

        <div className="prose prose-lg text-foreground/80 font-medium max-w-none">
          <p className="font-bold text-xl text-foreground">{about.greeting}</p>
          <p className="whitespace-pre-wrap">{about.description}</p>
        </div>

        <div className="pt-8 border-t border-foreground/20">
          <h3 className="font-display text-2xl font-bold uppercase mb-4">Sở Thích</h3>
          <p className="text-foreground/80 leading-relaxed">{about.hobbies}</p>
        </div>
      </div>

      <div className="space-y-12 bg-white border-2 border-foreground p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
        <div>
          <h3 className="font-display text-2xl font-bold uppercase mb-4 pb-2 border-b-2 border-foreground/20">
            Thành Tích
          </h3>
          <ul className="space-y-4">
            {about.achievements.map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="text-brand font-bold mt-1">★</span>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-8 border-t-2 border-foreground/20">
          <h3 className="font-display text-2xl font-bold uppercase mb-4 pb-2 border-b-2 border-foreground/20">
            Contact
          </h3>
          <ul className="space-y-4 font-mono">
            <li className="flex items-start justify-between border-b border-foreground/10 pb-2 gap-4">
              <span className="font-bold shrink-0 inline-flex items-center gap-2">
                <Phone className="size-4 text-brand shrink-0" aria-hidden />
                Phone
              </span>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-right hover:text-brand transition-colors">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-start justify-between border-b border-foreground/10 pb-2 gap-4">
              <span className="font-bold shrink-0 inline-flex items-center gap-2">
                <Mail className="size-4 text-brand shrink-0" aria-hidden />
                Email
              </span>
              <a href={`mailto:${contact.email}`} className="text-right break-all hover:text-brand transition-colors">
                {contact.email}
              </a>
            </li>
            <li className="flex items-start justify-between border-b border-foreground/10 pb-2 gap-4">
              <span className="font-bold shrink-0 inline-flex items-center gap-2">
                <Globe className="size-4 text-brand shrink-0" aria-hidden />
                Facebook
              </span>
              <a
                href={`https://facebook.com${contact.facebook}`}
                target="_blank"
                rel="noreferrer"
                className="text-right break-all hover:text-brand transition-colors"
              >
                {contact.facebook}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
