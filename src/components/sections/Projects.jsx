import { PORTFOLIO_DATA } from '../../config'
import { SectionHeading } from '../shared/SectionHeading'

export function Projects() {
  const { projects } = PORTFOLIO_DATA

  return (
    <section id="projects" className="section-container border-b-brutal pt-24 pb-24">
      <SectionHeading>SELECTED WORKS</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col group">
            <div className="aspect-[4/3] bg-white border-brutal shadow-brutal overflow-hidden mb-6 relative flex items-center justify-center">
              <span className="text-foreground/20 font-display font-bold text-lg absolute z-0 select-none">
                VIDEO PREVIEW
              </span>
              {project.videoUrl ? (
                <iframe src={project.videoUrl} className="absolute inset-0 w-full h-full z-10" allowFullScreen title={project.title} />
              ) : null}
            </div>

            <div>
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs uppercase bg-accent text-white px-2 py-1 border-brutal mb-3 inline-block">
                  {project.category}
                </span>
              </div>
              <h3 className="font-display text-3xl font-bold uppercase leading-tight mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-foreground/80 font-medium leading-snug">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
