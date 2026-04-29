import { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "../config";

export function VideoIntro() {
    const [isPlaying, setIsPlaying] = useState(false);
    const { hero } = PORTFOLIO_DATA;

    return (
        <section className="section-container bg-white border-b-brutal pt-20 pb-32 relative overflow-hidden">
            {/* Decorative background text */}
            <div className="absolute top-10 right-[-5%] text-[10rem] font-black text-foreground/5 pointer-events-none select-none uppercase leading-none">
                INTRO REEL
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="mb-10 flex items-end justify-between border-b-brutal pb-4">
                    <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                        WHO <br /><span className="text-accent underline decoration-4 underline-offset-8">IS DŨNG?</span>
                    </h2>
                    <div className="hidden md:block text-right font-mono font-bold text-sm bg-foreground text-background px-4 py-2 border-brutal">
                        00:01:24:00 / 60 FPS
                    </div>
                </div>

                {/* Video Mockup Frame */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative border-brutal shadow-brutal aspect-video bg-foreground group"
                >
                    {/* Adobe-style Bounding Box Handles */}
                    <div className="absolute -top-[5px] -left-[5px] w-4 h-4 bg-accent border border-foreground z-30" />
                    <div className="absolute -top-[5px] -right-[5px] w-4 h-4 bg-accent border border-foreground z-30" />
                    <div className="absolute -bottom-[5px] -left-[5px] w-4 h-4 bg-accent border border-foreground z-30" />
                    <div className="absolute -bottom-[5px] -right-[5px] w-4 h-4 bg-accent border border-foreground z-30" />
                    <div className="absolute top-1/2 -left-[5px] -translate-y-1/2 w-4 h-4 bg-white border border-foreground z-30" />
                    <div className="absolute top-1/2 -right-[5px] -translate-y-1/2 w-4 h-4 bg-white border border-foreground z-30" />
                    <div className="absolute left-1/2 -top-[5px] -translate-x-1/2 w-4 h-4 bg-white border border-foreground z-30" />
                    <div className="absolute left-1/2 -bottom-[5px] -translate-x-1/2 w-4 h-4 bg-white border border-foreground z-30" />

                    {/* Content Area */}
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-10">
                        <AnimatePresence mode="wait">
                            {isPlaying ? (
                                <motion.div 
                                    key="video"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 z-50 bg-black flex items-center justify-center"
                                >
                                    <video 
                                        src={hero.video} 
                                        className="w-full h-full object-contain" 
                                        autoPlay 
                                        controls 
                                        playsInline
                                        onEnded={() => setIsPlaying(false)}
                                    />
                                    <button 
                                        onClick={() => setIsPlaying(false)}
                                        className="absolute top-4 right-4 z-[60] bg-accent text-white p-2 border-brutal shadow-stack hover:scale-110 transition-transform"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div 
                                    key="overlay"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setIsPlaying(true)}
                                    className="absolute inset-0 z-40 flex flex-col items-center justify-center cursor-pointer group/overlay"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent mix-blend-overlay z-10" />
                                    
                                    <div className="flex flex-col items-center relative z-20">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-accent border-[4px] border-foreground flex items-center justify-center text-white shadow-stack group-hover/overlay:bg-foreground transition-colors"
                                        >
                                            <Play fill="currentColor" className="ml-2 w-12 h-12 md:w-16 md:h-16" />
                                        </motion.div>
                                        <p className="mt-6 font-mono font-bold text-white uppercase tracking-[0.5em] text-xs md:text-sm animate-pulse">
                                            CLICK TO PLAY REEL
                                        </p>
                                    </div>

                                    {/* Top bar info */}
                                    <div className="absolute top-6 left-6 flex items-center gap-4 z-20">
                                        <div className="badge-editorial bg-white !py-1">PREVIEW</div>
                                        <span className="font-mono text-white/50 text-xs uppercase letter-spacing-widest">DUNGD_EDITOR_REEL_FINAL.MP4</span>
                                    </div>

                                    {/* Safe Areas */}
                                    <div className="absolute inset-8 border border-white/10 pointer-events-none z-20" />
                                    <div className="absolute inset-16 border border-white/5 pointer-events-none z-20" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Footer of the video block */}
                <div className="mt-8 flex flex-wrap gap-4">
                    <div className="flex-1 min-w-[200px] border-brutal p-4 bg-background font-bold text-lg leading-snug">
                        "Dẫn dắt cảm xúc người xem qua nhịp dựng và âm thanh điện ảnh. Đây là nơi tôi tổng hợp những sản phẩm tâm đắc nhất."
                    </div>
                    <div className="w-full md:w-[250px] border-brutal p-4 flex flex-col justify-between bg-accent text-white shadow-stack">
                        <span className="font-mono text-xs font-black uppercase opacity-60">Sequence Info</span>
                        <p className="font-display text-2xl font-black uppercase">MASTER REEL</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
