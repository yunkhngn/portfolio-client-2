import { useState } from "react";
import { PORTFOLIO_DATA } from "../config";
import { Play, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const getYoutubeId = (url) => {
    const match = url.match(/\/embed\/([^?]+)/);
    return match ? match[1] : null;
};

function ProjectCard({ project, index, onPlayVideo }) {
    const hasVideos = project.videos && project.videos.length > 0;

    return (
        <div className="flex flex-col group w-full relative mb-12 md:mb-20">
            {/* Redesigned Info Section */}
            <div className="relative mb-6 md:mb-10">
                {/* Numbering as a decorative background element */}
                <div className="absolute -left-4 -top-8 md:-left-8 md:-top-12 select-none pointer-events-none opacity-20 transition-opacity duration-700 z-0">
                    <span className="font-display text-[100px] md:text-[160px] font-black leading-none text-[#ccc]">
                        {(index + 1).toString().padStart(2, '0')}
                    </span>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10 pl-2">
                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-[#E25A27] text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-display text-xl md:text-2xl font-black rounded-sm">
                                {index + 1}
                            </span>
                            <span className="font-mono text-[10px] md:text-xs uppercase bg-[#333] text-white px-3 py-1 font-bold tracking-wider rounded-sm">
                                {project.category}
                            </span>
                        </div>

                        <div className="relative inline-block group/title">
                            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none text-[#333] transition-all duration-500 group-hover:translate-x-2">
                                {project.title}
                            </h3>
                            {/* Animated underline */}
                            <div className="h-1 md:h-1.5 bg-[#E25A27] w-0 group-hover:w-full transition-all duration-700 mt-2"></div>
                        </div>
                    </div>

                    {project.description && (
                        <div className="w-full md:w-1/3 mt-4 md:mt-0">
                            <p className="text-[#555] font-medium text-sm md:text-base leading-relaxed border-l-[2px] border-[#E25A27] pl-4">
                                {project.description}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Selective Stretch Layout: Longs fill gaps, Shorts stay compact */}
            <div className="flex flex-wrap gap-4 w-full relative z-10 items-start">
                {hasVideos ? (
                    project.videos.map((video, i) => {
                        const yId = getYoutubeId(video.url);
                        const thumbUrl = yId ? `https://img.youtube.com/vi/${yId}/maxresdefault.jpg` : "";
                        const isShort = video.type === "short";

                        return (
                            <div
                                key={i}
                                onClick={() => onPlayVideo(video.url)}
                                className={`relative bg-[#222] overflow-hidden group/item cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-sm border border-[#ddd] ${isShort
                                    ? 'flex-none w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.666rem)]'
                                    : 'flex-1 min-w-[calc(100%)] md:min-w-[calc(50%-0.5rem)]'
                                    }`}
                            >
                                <div style={{ aspectRatio: isShort ? '9/16' : '16/9' }} className="w-full relative bg-black">
                                    <img
                                        src={thumbUrl}
                                        alt={`${project.title} - Video ${i + 1}`}
                                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/item:opacity-100 transition-all duration-700 group-hover/item:scale-105"
                                        onError={(e) => { e.target.src = `https://img.youtube.com/vi/${yId}/hqdefault.jpg`; }}
                                    />

                                    {/* Adobe-style corner markers */}
                                    <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white/50 z-20"></div>
                                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/50 z-20"></div>
                                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-white/50 z-20"></div>
                                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-white/50 z-20"></div>

                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                                        <div className="w-12 h-12 md:w-16 md:h-16 bg-[#E25A27] text-white rounded-full flex items-center justify-center opacity-0 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all duration-300 shadow-lg">
                                            <Play fill="currentColor" size={24} className="ml-1 md:ml-1.5 w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <div className="w-full aspect-video bg-[#e5e5e5] border border-[#ccc] border-dashed flex items-center justify-center rounded-sm">
                        <span className="text-[#888] font-display font-bold text-xl uppercase tracking-widest">
                            NO PREVIEW
                        </span>
                    </div>
                )}
            </div>

            {/* View More Link */}
            {project.viewMoreLink && (
                <div className="w-full mt-6 md:mt-8 flex justify-end">
                    <a
                        href={project.viewMoreLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-[#E25A27] hover:text-[#333] font-mono font-bold text-xs md:text-sm tracking-widest uppercase transition-colors group/link"
                    >
                        Xem thêm
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                </div>
            )}
        </div>
    );
}

export function Projects() {
    const { projects } = PORTFOLIO_DATA;
    const [activeVideo, setActiveVideo] = useState(null);

    return (
        <section id="projects" className="bg-[#f2f2f2] w-full pt-32 pb-32 border-b border-[#ddd] select-none font-sans">
            <div className="w-full max-w-[1400px] mx-auto px-8 md:px-12 xl:px-24">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-[2px] border-[#333] pb-6 gap-6">
                    <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter font-black leading-[0.85] text-[#333] m-0">
                        SELECTED <br />
                        <span className="text-[#E25A27]">WORKS</span>
                    </h2>
                    <p className="font-mono text-xs md:text-sm font-bold uppercase max-w-xs md:text-right text-[#555] leading-relaxed">
                        Turning raw footage into cinematic experiences.
                    </p>
                </div>

                <div className="flex flex-col gap-16 md:gap-24">
                    {projects.map((project, index) => (
                        <div key={index} className="flex flex-col gap-16 md:gap-24">
                            <ProjectCard project={project} index={index} onPlayVideo={setActiveVideo} />
                            {index < projects.length - 1 && <div className="w-full border-b-[1px] border-[#ccc]"></div>}
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
                            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111]/90 backdrop-blur-md p-4 md:p-12"
                            onClick={() => setActiveVideo(null)}
                        >
                            <button
                                className="absolute top-4 right-4 md:top-8 md:right-8 p-3 bg-[#E25A27] text-white rounded-sm hover:-translate-y-1 transition-all z-[110] shadow-lg"
                                onClick={() => setActiveVideo(null)}
                            >
                                <X size={24} />
                            </button>
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                className="w-full max-w-6xl aspect-video bg-black relative border-[1px] border-[#E25A27] shadow-2xl"
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
            </div>
        </section>
    );
}

