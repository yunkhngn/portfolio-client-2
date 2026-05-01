import { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "../config";

export function VideoIntro() {
    const [isPlaying, setIsPlaying] = useState(false);
    const { hero } = PORTFOLIO_DATA;

    return (
        <section className="bg-[#f2f2f2] w-full pt-24 pb-32 relative overflow-hidden flex flex-col items-center border-b border-[#ddd] font-sans select-none">
            {/* Decorative background text */}
            <div className="absolute top-10 right-[-5%] text-[6rem] md:text-[12rem] font-display font-black text-[#e5e5e5] pointer-events-none uppercase leading-none tracking-tighter z-0">
                INTRO REEL
            </div>

            <div className="w-full max-w-[1400px] mx-auto px-8 md:px-12 xl:px-24 relative z-10">
                
                {/* Header Section */}
                <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-[2px] border-[#333] pb-6">
                    <h2 className="font-display text-5xl md:text-7xl font-black text-[#333] tracking-tighter leading-[0.85] m-0">
                        WHO <br />
                        <span className="text-[#E25A27]">IS DŨNG?</span>
                    </h2>
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex gap-1">
                            <div className="w-4 h-4 bg-[#E25A27] rounded-sm"></div>
                            <div className="w-4 h-4 bg-[#E25A27] rounded-t-full"></div>
                        </div>
                        <div className="font-mono font-bold text-xs bg-[#333] text-white px-4 py-2 rounded-sm tracking-wider">
                            00:01:24:00 / 60 FPS
                        </div>
                    </div>
                </div>

                {/* Video Mockup Frame */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative w-full aspect-video bg-[#111] border-[1px] border-[#E25A27] z-20 group"
                >
                    {/* Adobe-style Bounding Box Handles */}
                    <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-[#E25A27] z-30" />
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border border-[#E25A27] z-30" />
                    <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-[#E25A27] z-30" />
                    <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-white border border-[#E25A27] z-30" />
                    <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white border border-[#E25A27] z-30" />
                    <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-[#E25A27] z-30" />
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border border-[#E25A27] z-30" />
                    <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-[#E25A27] z-30" />

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
                                        className="absolute top-4 right-4 z-[60] bg-[#E25A27] text-white p-2 rounded-sm hover:scale-105 transition-transform"
                                    >
                                        <X className="w-5 h-5" />
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
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#E25A27]/10 to-transparent mix-blend-overlay z-10" />
                                    
                                    <div className="flex flex-col items-center relative z-20">
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#E25A27] flex items-center justify-center text-white shadow-lg transition-transform"
                                        >
                                            <Play fill="currentColor" className="ml-2 w-10 h-10 md:w-14 md:h-14" />
                                        </motion.div>
                                        <p className="mt-6 font-mono font-bold text-white uppercase tracking-[0.3em] text-[10px] md:text-xs opacity-70 group-hover/overlay:opacity-100 transition-opacity">
                                            CLICK TO PLAY REEL
                                        </p>
                                    </div>

                                    {/* Top bar info */}
                                    <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-3 z-20">
                                        <div className="bg-white text-[#333] px-2 py-0.5 text-[10px] font-bold uppercase rounded-sm">PREVIEW</div>
                                        <span className="font-mono text-white/50 text-[10px] md:text-xs uppercase tracking-wider">DUNGD_EDITOR_REEL_FINAL.MP4</span>
                                    </div>

                                    {/* Safe Areas (Camera guides) */}
                                    <div className="absolute inset-4 md:inset-8 border-[0.5px] border-white/20 pointer-events-none z-20" />
                                    <div className="absolute inset-x-12 inset-y-16 border-[0.5px] border-white/10 pointer-events-none z-20 hidden md:block" />
                                    
                                    {/* Center Crosshair */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border-[0.5px] border-white/20 pointer-events-none z-20" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Footer of the video block */}
                <div className="mt-6 flex flex-col md:flex-row gap-4 w-full">
                    <div className="flex-1 bg-white border border-[#ddd] p-5 rounded-sm">
                        <p className="font-medium text-[#555] text-sm md:text-base leading-relaxed">
                            "Dẫn dắt cảm xúc người xem qua nhịp dựng và âm thanh điện ảnh. Đây là nơi tôi tổng hợp những sản phẩm tâm đắc nhất."
                        </p>
                    </div>
                    <div className="w-full md:w-[250px] bg-[#E25A27] p-5 flex flex-col justify-center rounded-sm text-center md:text-left">
                        <span className="font-mono text-[10px] font-bold text-white/70 uppercase tracking-widest mb-1">Sequence Info</span>
                        <p className="font-display text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-none">MASTER REEL</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
