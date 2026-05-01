import { useState } from "react";
import { PORTFOLIO_DATA } from "../config";
import { ArrowRight, Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const getYoutubeId = (url) => {
    const match = url.match(/\/embed\/([^?]+)/);
    return match ? match[1] : null;
};
const getBentoClasses = (type, index) => {
    if (type === "short") {
        return "col-span-1 row-span-2"; // Tall vertical cell for Shorts
    } else {
        // "long" format (horizontal). Make the first one larger if desired, else standard wide
        return index === 0 ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2" : "col-span-2 row-span-1 md:col-span-2 md:row-span-1";
    }
};

function ProjectCard({ project, index, onPlayVideo }) {
    const hasVideos = project.videos && project.videos.length > 0;

    return (
        <div className="flex flex-col group w-full relative">
            {/* Numbering Badge */}
            <div className="absolute -left-2 -top-2 md:-left-6 md:-top-6 w-12 h-12 md:w-16 md:h-16 bg-accent text-white border-brutal flex items-center justify-center font-display text-2xl md:text-3xl font-black z-30 shadow-stack group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform">
                {index + 1}
            </div>

            {/* Info Section */}
            <div className="px-4 mb-6 md:mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 ml-8 md:ml-12">
                <div>
                    <span className="font-mono text-xs md:text-sm uppercase bg-white text-foreground px-3 py-1.5 border-brutal font-black inline-block shadow-stack mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                        {project.category}
                    </span>
                    <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none group-hover:text-accent transition-colors underline decoration-transparent group-hover:decoration-accent decoration-4 underline-offset-8">
                        {project.title}
                    </h3>
                </div>
                {project.description && (
                    <p className="text-foreground/80 font-bold text-base md:text-lg leading-snug w-full md:w-1/2 md:text-right border-l-4 md:border-l-0 md:border-r-4 border-accent pl-4 md:pr-4 md:pl-0">
                        {project.description}
                    </p>
                )}
            </div>

            {/* Selective Stretch Layout: Longs fill gaps, Shorts stay compact */}
            <div className="flex flex-wrap gap-3 md:gap-4 w-full relative z-10 items-start">
                {hasVideos ? (
                    project.videos.map((video, i) => {
                        const yId = getYoutubeId(video.url);
                        const thumbUrl = yId ? `https://img.youtube.com/vi/${yId}/maxresdefault.jpg` : "";
                        const isShort = video.type === "short";

                        return (
                            <div
                                key={i}
                                onClick={() => onPlayVideo(video.url)}
                                className={`relative bg-foreground border-brutal shadow-stack overflow-hidden group/item cursor-pointer hover:shadow-[6px_6px_0px_0px_rgba(226,90,39,1)] hover:-translate-y-1 transition-all duration-300 ${
                                    isShort 
                                        ? 'flex-none w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)]' 
                                        : 'flex-1 min-w-[calc(100%)] md:min-w-[calc(50%-1rem)]'
                                }`}
                            >
                                <div style={{ aspectRatio: isShort ? '9/16' : '16/9' }} className="w-full relative">
                                    <img
                                        src={thumbUrl}
                                        alt={`${project.title} - Video ${i + 1}`}
                                        className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover/item:opacity-100 transition-all duration-700 group-hover/item:scale-110"
                                        onError={(e) => { e.target.src = `https://img.youtube.com/vi/${yId}/hqdefault.jpg`; }}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="w-10 h-10 md:w-16 md:h-16 bg-accent text-white rounded-full flex items-center justify-center shadow-brutal opacity-0 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all duration-300 border-2 border-foreground">
                                            <Play fill="currentColor" size={24} className="ml-1 scale-75 md:scale-100" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <div className="w-full aspect-video bg-foreground/10 border-brutal border-dashed flex items-center justify-center">
                        <span className="text-foreground/40 font-display font-bold text-xl uppercase tracking-widest">
                            NO PREVIEW
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

export function Projects() {
    const { projects } = PORTFOLIO_DATA;
    const [activeVideo, setActiveVideo] = useState(null);

    return (
        <section id="projects" className="section-container border-b-brutal pt-32 pb-32">

            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-brutal pb-6 gap-6">
                <h2 className="font-display text-5xl sm:text-6xl md:text-8xl uppercase tracking-tighter font-black leading-none m-0">
                    SELECTED <br />
                    <span className="relative inline-block text-transparent" style={{ WebkitTextStroke: "4px #111111" }}>
                        WORKS
                        <span className="absolute inset-0 text-background" style={{ WebkitTextStroke: "0px" }}>
                            WORKS
                        </span>
                    </span>
                </h2>
                <p className="font-mono text-lg font-bold uppercase max-w-xs text-right bg-white p-4 border-brutal shadow-stack">
                    Turning raw footage into cinematic experiences.
                </p>
            </div>

            <div className="flex flex-col gap-24 md:gap-32">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col gap-24 md:gap-32">
                        <ProjectCard project={project} index={index} onPlayVideo={setActiveVideo} />
                        {index < projects.length - 1 && <div className="w-full border-b-[3px] border-foreground opacity-20"></div>}
                    </div>
                ))}
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-sm p-4 md:p-12"
                        onClick={() => setActiveVideo(null)}
                    >
                        <button
                            className="absolute top-4 right-4 md:top-8 md:right-8 p-3 md:p-4 bg-foreground text-background border-brutal shadow-brutal hover:bg-accent hover:-translate-y-1 transition-all z-[110]"
                            onClick={() => setActiveVideo(null)}
                        >
                            <X size={24} className="md:w-8 md:h-8" />
                        </button>
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="w-full max-w-6xl aspect-video border-brutal shadow-[16px_16px_0px_0px_rgba(226,90,39,1)] bg-black relative"
                            onClick={e => e.stopPropagation()}
                        >
                            <iframe
                                src={`${activeVideo}?autoplay=1`}
                                className="w-full h-full"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

