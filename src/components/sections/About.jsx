import { PORTFOLIO_DATA } from '../../config'
import { SectionHeading } from '../shared/SectionHeading'

export function About() {
  const { about } = PORTFOLIO_DATA

  return (
    <section id="about" className="section-container border-b-brutal pt-24 pb-24">
      <SectionHeading>{about.title}</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-brutal bg-white">
        <div className="p-8 md:p-12 border-b-brutal md:border-b-0 md:border-r-brutal flex flex-col justify-center">
          <p className="text-xl md:text-2xl font-bold mb-6 text-accent">{about.greeting}</p>
          <p className="text-base md:text-lg leading-relaxed font-medium">{about.bio}</p>
        </div>

        <div className="flex flex-col">
          <div className="p-8 border-b-brutal flex-1">
            <h3 className="font-bold uppercase tracking-widest text-sm mb-4">Focus</h3>
            <div className="flex flex-wrap gap-2">
              {about.skills.map((skill) => (
                <span key={skill} className="badge-editorial bg-background">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 flex-1">
            <h3 className="font-bold uppercase tracking-widest text-sm mb-4">Location & Goal</h3>
            <p className="font-display text-xl font-bold uppercase">{about.education.school}</p>
            <p className="mt-2 text-sm font-mono text-foreground/60">{about.education.detail}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
