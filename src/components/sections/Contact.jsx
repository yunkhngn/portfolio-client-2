import { PORTFOLIO_DATA } from '../../config'

export function Contact() {
  const { contact } = PORTFOLIO_DATA

  return (
    <section id="contact" className="section-container pt-32 pb-20 text-center">
      <div className="border-brutal bg-white p-12 md:p-24 shadow-brutal">
        <h2 className="font-display text-6xl md:text-[8rem] font-bold uppercase leading-[0.8] tracking-tighter hover:text-accent transition-colors cursor-default">
          {contact.heading} <br /> {contact.subheading}
        </h2>

        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href={`mailto:${contact.email}`}
            className="px-8 py-4 bg-foreground text-background font-bold uppercase tracking-widest border-brutal hover:bg-accent transition-colors"
          >
            EMAIL ME
          </a>
          <a
            href={contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-foreground font-bold uppercase tracking-widest border-brutal hover:bg-background transition-colors shadow-brutal"
          >
            FACEBOOK
          </a>
        </div>

        <div className="mt-12 font-mono font-bold text-xl">{contact.phone}</div>
      </div>
    </section>
  )
}
