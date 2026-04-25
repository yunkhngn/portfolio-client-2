import { PORTFOLIO_DATA } from '../../config'
import { SectionHeading } from '../shared/SectionHeading'

export function Experience() {
  const { experience } = PORTFOLIO_DATA

  return (
    <section id="experience" className="section-container border-b-brutal pt-24 pb-24">
      <SectionHeading>KINH NGHIỆM</SectionHeading>

      <div className="border-brutal bg-white">
        {experience.map((exp, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row p-6 md:p-10 hover:bg-foreground hover:text-white transition-colors group ${
              index !== experience.length - 1 ? 'border-b-brutal' : ''
            }`}
          >
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <span className="font-mono text-lg font-bold group-hover:text-accent transition-colors">{exp.year}</span>
            </div>

            <div className="w-full md:w-3/4">
              <h3 className="font-display text-2xl md:text-4xl font-bold uppercase leading-tight">{exp.company}</h3>

              <div className="mt-2 md:mt-4">
                <p className="text-lg md:text-xl font-bold opacity-80 uppercase tracking-wide">{exp.role}</p>
                {exp.subtitle ? (
                  <p className="text-sm font-mono opacity-60 mt-1 uppercase">{exp.subtitle}</p>
                ) : null}
              </div>

              {exp.description ? (
                <p className="mt-4 font-medium opacity-90 max-w-3xl leading-relaxed">{exp.description}</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
