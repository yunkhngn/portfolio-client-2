import { PORTFOLIO_DATA } from "../config";
import { SectionHeading } from "./SectionHeading";
import { Play, ArrowRight } from "lucide-react";

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col group cursor-pointer w-full relative">

                        {/* Numbering Badge */}
                        <div className="absolute -left-6 -top-6 w-16 h-16 bg-accent text-white border-brutal flex items-center justify-center font-display text-3xl font-black z-30 shadow-stack group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform">
                            {index + 1}
                        </div>

                        {/* Thumbnail Box */}
                        <div className="w-full aspect-[4/3] bg-foreground border-brutal shadow-brutal overflow-hidden mb-8 relative flex items-center justify-center transition-all group-hover:shadow-[12px_12px_0px_0px_rgba(226,90,39,1)]">

                            <div className="absolute inset-0 bg-accent/20 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity"></div>

                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>

                            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center z-20 border-brutal absolute scale-75 group-hover:scale-100 group-hover:bg-accent transition-all duration-300">
                                <Play className="text-foreground group-hover:text-white fill-current ml-1 w-8 h-8" />
                            </div>

                            {project.videoUrl ? (
                                <iframe
                                    src={project.videoUrl}
                                    className="absolute inset-0 w-full h-full z-15 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500"
                                    allowFullScreen
                                />
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
                ))}
            </div>
        </section>
    );
}
