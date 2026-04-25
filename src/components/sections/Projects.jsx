import { useState } from 'react'
import { Play } from 'lucide-react'
import { PORTFOLIO_DATA } from '../../config'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function Projects() {
  const { projects } = PORTFOLIO_DATA
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <div className="py-12">
      <h2 className="font-display text-5xl font-bold uppercase tracking-tight border-b-8 border-brand pb-4 inline-block mb-12">
        Featured Edits
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col gap-0 overflow-hidden rounded-none border-2 border-foreground bg-white py-0 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] transition-all hover:shadow-[12px_12px_0px_0px_rgba(226,90,39,1)] ring-0"
          >
            <div className="aspect-video border-b-2 border-foreground relative overflow-hidden bg-black">
              {activeIndex === index ? (
                <iframe
                  src={project.videoUrl}
                  title={project.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <img
                    src={project.thumbnail}
                    alt=""
                    className="w-full h-full object-cover opacity-95"
                    width={1280}
                    height={720}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/35">
                    <Button
                      type="button"
                      variant="secondary"
                      size="lg"
                      className="gap-2 font-display uppercase shadow-md"
                      onClick={() => setActiveIndex(index)}
                    >
                      <Play className="size-5 fill-current" aria-hidden />
                      Xem video
                    </Button>
                  </div>
                </>
              )}
            </div>
            <CardHeader className="flex flex-row flex-wrap items-start justify-between gap-4 border-0 px-6 pt-6 pb-0 space-y-0">
              <CardTitle className="font-display text-2xl font-bold uppercase leading-tight">
                {project.title}
              </CardTitle>
              <span className="font-mono text-xs px-2 py-1 bg-foreground text-background whitespace-nowrap shrink-0 rounded-sm">
                {project.type}
              </span>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-4">
              <CardDescription className="text-foreground/80 text-base font-medium">
                {project.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
