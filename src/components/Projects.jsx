import { useState } from "react";
import { PORTFOLIO_DATA } from "../config";
import { Play, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

function ProjectCard({ project, index }) {
    const [currentVideoIdx, setCurrentVideoIdx] = useState(0);
    const hasVideos = project.videoUrls && project.videoUrls.length > 0;

    const nextVideo = (e) => {
        e.stopPropagation();
        if (hasVideos) {
            setCurrentVideoIdx((prev) => (prev + 1) % project.videoUrls.length);
        }
    };

    const prevVideo = (e) => {
        e.stopPropagation();
        if (hasVideos) {
            setCurrentVideoIdx((prev) => (prev - 1 + project.videoUrls.length) % project.videoUrls.length);
        }
    };

    return (
        <div className="flex flex-col group w-full relative">
            {/* Numbering Badge */}
            <div className="absolute -left-6 -top-6 w-16 h-16 bg-accent text-white border-brutal flex items-center justify-center font-display text-3xl font-black z-30 shadow-stack group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform">
                {index + 1}
            </div>

            {/* Thumbnail Box */}
            <div className="w-full aspect-video bg-foreground border-brutal shadow-brutal overflow-hidden mb-8 relative flex items-center justify-center transition-all group-hover:shadow-[12px_12px_0px_0px_rgba(226,90,39,1)]">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>

                {hasVideos ? (
                    <>
                        <iframe
                            src={project.videoUrls[currentVideoIdx]}
                            className="absolute inset-0 w-full h-full z-15"
                            allowFullScreen
                        />
                        {project.videoUrls.length > 1 && (
                            <>
                                <button
                                    onClick={prevVideo}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-accent hover:text-white text-foreground p-2 border-brutal transition-colors shadow-stack opacity-0 group-hover:opacity-100"
                                >
                                    <ChevronLeft size={24} strokeWidth={3} />
                                </button>
                                <button
                                    onClick={nextVideo}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-accent hover:text-white text-foreground p-2 border-brutal transition-colors shadow-stack opacity-0 group-hover:opacity-100"
                                >
                                    <ChevronRight size={24} strokeWidth={3} />
                                </button>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {project.videoUrls.map((_, i) => (
                                        <div key={i} className={`w-3 h-3 border-2 border-foreground rounded-full ${i === currentVideoIdx ? 'bg-accent' : 'bg-white'}`}></div>
                                    ))}
                                </div>
                            </>
                        )}
                    </>
                ) : (
                    <span className="text-background/40 font-display font-bold text-2xl uppercase tracking-widest absolute z-0 select-none group-hover:scale-110 transition-transform duration-500">
                        NO PREVIEW
                    </span>
                )}
            </div>

            {/* Info */}
            <div className="px-4">
                <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-sm uppercase bg-white text-foreground px-3 py-1.5 border-brutal font-black inline-block shadow-stack">
                        {project.category}
                    </span>
                    <ArrowRight className="text-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all w-8 h-8" />
                </div>
                <h3 className="font-display text-4xl md:text-5xl font-black uppercase leading-none mb-4 group-hover:text-accent transition-colors underline decoration-transparent group-hover:decoration-accent decoration-4 underline-offset-8">
                    {project.title}
                </h3>
                <p className="text-foreground/80 font-bold text-lg leading-snug w-full md:w-5/6">
                    {project.description}
                </p>
            </div>
        </div>
    );
}

export function Projects() {
    const { projects } = PORTFOLIO_DATA;

    return (
        <section id="projects" className="section-container border-b-brutal pt-32 pb-32">

            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-brutal pb-6 gap-6">
                <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tighter font-black leading-none m-0">
                    SELECTED <br /><span className="text-transparent" style={{ WebkitTextStroke: "2px #111111" }}>WORKS</span>
                </h2>
                <p className="font-mono text-lg font-bold uppercase max-w-xs text-right bg-white p-4 border-brutal shadow-stack">
                    Turning raw footage into cinematic experiences.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-y-24">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}

