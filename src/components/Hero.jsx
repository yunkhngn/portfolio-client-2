import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "../config";
import { MoveDown, Play } from "lucide-react";

export function Hero() {
    const { hero } = PORTFOLIO_DATA;
    const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhotoIdx((prev) => (prev + 1) % hero.photos.length);
        }, 3000); // switch every 3 seconds
        return () => clearInterval(interval);
    }, [hero.photos.length]);

    return (
        <section className="section-container min-h-[95dvh] relative overflow-hidden bg-background pt-32 pb-32 flex flex-col justify-center">

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#111 2px, transparent 2px), linear-gradient(90deg, #111 2px, transparent 2px)', backgroundSize: '64px 64px' }}></div>

            <div className="w-full max-w-[85rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 border-brutal bg-white shadow-[16px_16px_0_0_#111] relative z-10">

                {/* Top Bar spanning full width of the box */}
                <div className="lg:col-span-12 w-full flex justify-between items-center p-4 md:p-6 border-b-brutal bg-background/50">
                    <div className="flex items-center gap-3 bg-foreground text-background px-4 py-2 border-[2px] border-foreground hover:bg-background hover:text-foreground transition-colors shadow-stack cursor-default">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest">AVAILABLE TRẦN DŨNG</span>
                    </div>
                    <div className="font-display font-black text-xl uppercase tracking-tighter hidden md:block">
                        VIDEO EDITOR PORTFOLIO
                    </div>
                </div>

                {/* Left Column - Photography & Collage */}
                <div className="lg:col-span-5 relative p-8 md:p-12 border-b-brutal lg:border-b-0 lg:border-r-brutal flex flex-col items-center justify-center min-h-[500px] overflow-hidden bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')]">

                    {/* Big Center Photo */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, rotate: -5 }}
                        animate={{ scale: 1, opacity: 1, rotate: 2 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="w-[85%] aspect-[4/5] bg-white p-3 border-brutal shadow-stack z-20 group relative hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="w-full h-full border-2 border-foreground relative overflow-hidden">
                            <div className="absolute inset-0 bg-accent/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center mix-blend-multiply"></div>
                            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity scale-50 group-hover:scale-100 duration-300">
                                <div className="w-16 h-16 bg-background border-[3px] border-foreground rounded-full flex items-center justify-center cursor-pointer hover:bg-accent hover:text-white transition-colors">
                                    <Play className="fill-current ml-1 w-6 h-6" />
                                </div>
                            </div>
                            <AnimatePresence>
                                <motion.img
                                    key={currentPhotoIdx}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    src={hero.photos[currentPhotoIdx]}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    alt="Slideshow"
                                />
                            </AnimatePresence>
                        </div>
                        <div className="absolute -top-4 -right-4 w-24 h-6 bg-[#e2e2e2] border-2 border-foreground/20 rotate-[15deg] opacity-80 backdrop-blur-sm shadow-sm"></div>
                    </motion.div>

                    {/* Secondary Photo Background */}
                    <motion.div
                        initial={{ x: -20, opacity: 0, rotate: 10 }}
                        animate={{ x: 0, opacity: 1, rotate: -8 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute bottom-10 left-4 w-1/2 aspect-square bg-white p-2 border-brutal shadow-stack z-10"
                    >
                        <img src={hero.photos[2]} className="w-full h-full object-cover opacity-50" />
                    </motion.div>

                    {/* Spinning Stamp */}
                    <div className="absolute bottom-12 right-12 z-30">
                        <div className="relative w-24 h-24">
                            <svg className="animate-spin-slow w-full h-full" viewBox="0 0 100 100">
                                <path id="curve" fill="transparent" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                                <text width="500" className="text-[12px] font-bold font-mono tracking-widest fill-foreground">
                                    <textPath href="#curve">
                                        VIDEO EDITOR • COLOR GRADING •
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Right Column - Typography & Details */}
                <div className="lg:col-span-7 flex flex-col justify-between">

                    {/* Typography Area */}
                    <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                        <div className="mb-4">
                            <span className="badge-editorial bg-accent text-white shadow-stack">EST. 2026</span>
                        </div>
                        <h1 className="font-display font-black uppercase leading-[0.85] tracking-tighter mb-8 flex flex-col">
                            <span className="text-[4rem] sm:text-[5rem] lg:text-[7.5rem] tracking-tighter">TRẦN</span>
                            <span className="text-[4rem] sm:text-[5rem] lg:text-[7.5rem] tracking-tighter text-accent -mt-2">VĂN</span>
                            <span className="text-[5rem] sm:text-[6.5rem] lg:text-[9rem] text-transparent -mt-4 shadow-text" style={{ WebkitTextStroke: "3px #111111", textShadow: "4px 4px 0px #E25A27" }}>
                                DŨNG.
                            </span>
                        </h1>
                        <p className="font-mono text-lg md:text-xl font-bold uppercase max-w-md leading-relaxed border-l-[4px] border-accent pl-4">
                            "{hero.slogan}"
                        </p>
                    </div>

                    {/* Footer Info Area */}
                    <div className="grid grid-cols-2 border-t-brutal bg-foreground text-background">
                        <div className="p-6 md:p-8 border-r-2 border-background/20 flex flex-col justify-center hover:bg-background hover:text-foreground transition-colors cursor-default">
                            <span className="font-mono text-xs font-bold uppercase tracking-widest opacity-60 mb-1">ROLE</span>
                            <p className="font-display text-xl md:text-2xl font-black uppercase">
                                {hero.roles[0]}
                            </p>
                        </div>
                        <div className="p-6 md:p-8 flex flex-col justify-center hover:bg-background hover:text-foreground transition-colors cursor-default">
                            <span className="font-mono text-xs font-bold uppercase tracking-widest opacity-60 mb-1">EXPERIENCE</span>
                            <p className="font-display text-xl md:text-2xl font-black uppercase text-accent">
                                {hero.experience}
                            </p>
                        </div>
                    </div>

                </div>

                {/* Floating Scroll Down Arrow */}
                <motion.a
                    href="#about"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    className="absolute -bottom-8 -right-8 lg:bottom-12 lg:-right-8 w-16 h-16 bg-accent border-brutal rounded-full flex items-center justify-center text-white shadow-stack hover:scale-110 transition-transform z-40 hidden md:flex"
                >
                    <MoveDown strokeWidth={3} className="animate-bounce" />
                </motion.a>

            </div>
        </section>
    );
}
