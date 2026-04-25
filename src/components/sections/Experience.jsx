import { PORTFOLIO_DATA } from '../../config'

export function Experience() {
  const { experience } = PORTFOLIO_DATA

  return (
    <div className="py-12 w-full">
      <h2 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-16 opacity-10">
        Kinh Nghiệm
      </h2>

      <div className="space-y-0 border-t-2 border-foreground">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-12 py-8 border-b-2 border-foreground group hover:bg-foreground hover:text-background transition-colors px-4 -mx-4 cursor-default"
          >
            <div className="font-mono text-lg font-bold">{exp.year}</div>
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase">{exp.company}</h3>
              <p className="text-xl mt-2 font-medium group-hover:text-brand transition-colors">{exp.role}</p>
              {exp.description && (
                <p className="mt-4 opacity-80 max-w-2xl text-sm leading-relaxed tracking-wide">
                  {exp.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
