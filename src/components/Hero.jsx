import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../config';

const BoundingBox = ({ className }) => (
    <div className={`border-[1.5px] border-accent pointer-events-none z-0 ${className}`}>
        <div className="absolute -top-[4px] -left-[4px] w-[7px] h-[7px] bg-[#f1f1f1] border-[1.5px] border-accent" />
        <div className="absolute -top-[4px] -right-[4px] w-[7px] h-[7px] bg-[#f1f1f1] border-[1.5px] border-accent" />
        <div className="absolute -bottom-[4px] -left-[4px] w-[7px] h-[7px] bg-[#f1f1f1] border-[1.5px] border-accent" />
        <div className="absolute -bottom-[4px] -right-[4px] w-[7px] h-[7px] bg-[#f1f1f1] border-[1.5px] border-accent" />
        <div className="absolute top-1/2 -left-[4px] w-[7px] h-[7px] bg-[#f1f1f1] border-[1.5px] border-accent -translate-y-1/2 hidden sm:block" />
        <div className="absolute top-1/2 -right-[4px] w-[7px] h-[7px] bg-[#f1f1f1] border-[1.5px] border-accent -translate-y-1/2 hidden sm:block" />
        <div className="absolute -top-[4px] left-1/2 w-[7px] h-[7px] bg-[#f1f1f1] border-[1.5px] border-accent -translate-x-1/2 hidden sm:block" />
        <div className="absolute -bottom-[4px] left-1/2 w-[7px] h-[7px] bg-[#f1f1f1] border-[1.5px] border-accent -translate-x-1/2 hidden sm:block" />
    </div>
);

export const Hero = () => {
    return (
        <section className="w-full min-h-[100dvh] bg-[#f1f1f1] relative flex items-center justify-center overflow-hidden font-display p-4 md:p-8 select-none border-b-brutal">

            {/* The main scalable container */}
            <div className="relative w-full max-w-[1400px] h-full min-h-[600px] flex items-center justify-center">

                {/* --- BACKGROUND VECTOR ELEMENTS --- */}
                {/* Bezier Curve (Top Left-ish) */}
                <div className="absolute top-[12%] left-[18%] w-[280px] h-[100px] hidden lg:block z-0 opacity-80">
                    <svg width="100%" height="100%" viewBox="0 0 300 100" className="overflow-visible">
                        <path d="M 20 80 Q 80 10 150 50 T 280 20" fill="none" stroke="#E25A27" strokeWidth="1.5" />
                        <rect x="16" y="76" width="8" height="8" fill="#f1f1f1" stroke="#E25A27" strokeWidth="1.5" />
                        <rect x="146" y="46" width="8" height="8" fill="#f1f1f1" stroke="#E25A27" strokeWidth="1.5" />
                        <rect x="276" y="16" width="8" height="8" fill="#f1f1f1" stroke="#E25A27" strokeWidth="1.5" />
                        <g transform="translate(285, -20) rotate(30) scale(1.2)">
                            <polygon points="12,24 8,10 12,0 16,10" fill="#222" />
                            <circle cx="12" cy="14" r="2" fill="#f1f1f1" />
                            <rect x="11.5" y="14" width="1" height="10" fill="#f1f1f1" />
                        </g>
                    </svg>
                </div>

                {/* Top Left Icons */}
                <div className="absolute top-[10%] lg:top-[15%] left-[5%] lg:left-[10%] flex gap-3 z-10 scale-90 lg:scale-100">
                    <div className="w-14 h-14 bg-[#222] rounded-xl flex items-center justify-center text-white font-sans font-bold text-2xl tracking-tighter shadow-sm">
                        Pr
                    </div>
                    <div className="w-14 h-14 bg-[#222] rounded-xl flex items-center justify-center text-white font-sans font-bold text-2xl tracking-tighter shadow-sm">
                        Ae
                    </div>
                </div>

                {/* Top Right Badge */}
                <div className="absolute top-[12%] lg:top-[18%] right-[5%] lg:right-[15%] bg-[#E25A27] text-white font-bold text-3xl lg:text-4xl px-4 py-1 z-10 tracking-widest shadow-sm">
                    #24
                </div>


                {/* --- MAIN CENTER TEXT ("portfolio") --- */}
                <div className="relative flex items-center text-[12vw] md:text-[140px] lg:text-[180px] xl:text-[220px] font-black text-[#222] leading-none tracking-tighter z-10 w-full justify-center">

                    {/* Block 1: p + o */}
                    <div className="relative flex items-center">
                        <BoundingBox className="absolute -inset-y-4 -inset-x-6 md:-inset-x-8" />
                        <span className="relative z-10">p</span>
                        {/* Stylized O */}
                        <svg viewBox="0 0 100 100" className="w-[0.9em] h-[0.9em] inline-block mx-[0.02em] -translate-y-[5%] z-10">
                            <rect x="0" y="15" width="28" height="28" rx="8" fill="#E25A27" />
                            <rect x="42" y="25" width="55" height="12" rx="3" fill="#E25A27" />
                            <path d="M 14 55 v 10 a 36 36 0 0 0 72 0 v -10" fill="none" stroke="#222" strokeWidth="26" strokeLinecap="square" />
                        </svg>

                        {/* Orange Cursor pointer (Bottom left) */}
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#E25A27" strokeWidth="1.5" strokeLinejoin="round" className="absolute -bottom-10 -left-6 md:-bottom-20 md:-left-12 w-12 h-12 md:w-20 md:h-20 -rotate-12 z-20 drop-shadow-sm">
                            <path d="M4 2v20l5-5 4 8 3-1-4-8 7-2z" fill="#f1f1f1" strokeWidth="1.5" />
                        </svg>
                    </div>

                    {/* Block 2: rt */}
                    <div className="relative z-10 ml-2 md:ml-4">rt</div>

                    {/* Block 3: f (script) */}
                    <div className="relative z-10 mx-1 md:mx-2">
                        <span className="opacity-0">f</span>
                        <span className="absolute top-1/2 left-1/2 -translate-x-[45%] -translate-y-[55%] text-[#E25A27] font-handwriting text-[2em] z-30 -rotate-[8deg] drop-shadow-sm pointer-events-none">
                            f
                        </span>
                    </div>

                    {/* Block 4: olio */}
                    <div className="relative flex items-center">
                        <BoundingBox className="absolute -inset-y-4 -left-4 -right-4 md:-left-6 md:-right-6" />
                        <span className="relative z-10">olio</span>
                    </div>

                </div>


                {/* --- BOTTOM ELEMENTS --- */}

                {/* Bottom Left Fonts */}
                <div className="absolute bottom-[10%] left-[5%] lg:left-[10%] flex flex-col font-display text-[9px] md:text-sm font-bold uppercase tracking-widest text-[#222] z-10">
                    <span>OUTFIT</span>
                    <span>CAVEAT SCRIPT</span>
                </div>

                {/* Bottom Center Palette */}
                <div className="absolute bottom-[8%] left-[30%] lg:bottom-[15%] lg:left-[35%] flex items-center gap-2 md:gap-4 z-10 scale-75 md:scale-100">
                    <div className="text-[10px] md:text-xs font-bold uppercase leading-tight text-right text-[#222]">
                        Color<br />Palette
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                        <div className="w-5 h-5 md:w-7 md:h-7"></div>
                        <div className="w-5 h-5 md:w-7 md:h-7 bg-[#D9D9D9] shadow-sm"></div>
                        <div className="w-5 h-5 md:w-7 md:h-7 bg-[#333333] shadow-sm"></div>
                        <div className="w-5 h-5 md:w-7 md:h-7 bg-[#E25A27] shadow-sm"></div>
                    </div>
                </div>

                {/* Bottom Right Title & Name */}
                <div className="absolute bottom-[10%] right-[5%] lg:right-[10%] flex flex-col lg:flex-row items-end gap-4 lg:gap-10 z-10 scale-75 lg:scale-100 origin-bottom-right">

                    <div className="relative font-display text-[2rem] lg:text-[3rem] font-bold text-[#E25A27] leading-[0.9] tracking-tighter">
                        Video<br />
                        <div className="relative inline-block mt-1">
                            {/* The outlined "Editor" text with double layer fix for internal overlaps */}
                            <span className="relative z-10 block text-transparent" style={{ WebkitTextStroke: "3px #E25A27" }}>
                                Editor
                                <span className="absolute inset-0 text-[#f1f1f1]" style={{ WebkitTextStroke: "0px" }}>
                                    Editor
                                </span>
                            </span>

                            <BoundingBox className="absolute -inset-1" />
                            {/* Horizontal extension line */}
                            <div className="absolute top-1/2 -right-8 lg:-right-12 w-8 lg:w-12 h-[1.5px] bg-accent"></div>
                            <div className="absolute top-1/2 -right-8 lg:-right-12 w-[6px] h-[6px] bg-[#f1f1f1] border-[1.5px] border-accent -translate-y-1/2 translate-x-1/2"></div>

                            {/* Overlapping script 'signature' */}
                            <span className="absolute -bottom-6 lg:-bottom-8 right-0 text-[#222] font-handwriting text-5xl lg:text-6xl -rotate-12 pointer-events-none">
                                d
                            </span>
                        </div>
                    </div>

                    <div className="font-display font-black text-lg lg:text-2xl tracking-widest text-[#222] pb-1 uppercase whitespace-nowrap">
                        {PORTFOLIO_DATA.hero.name.replace(/\s+/g, '')}
                    </div>

                </div>

            </div>
        </section>
    );
};
