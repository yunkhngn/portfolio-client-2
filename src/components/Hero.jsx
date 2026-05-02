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
    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            }
        }
    };

    const letterVariants = {
        hidden: { y: 100, opacity: 0, rotate: -10 },
        visible: {
            y: 0,
            opacity: 1,
            rotate: 0,
            transition: { type: "spring", damping: 12, stiffness: 100 }
        }
    };

    const fVariants = {
        hidden: { scale: 0, opacity: 0, rotate: -45 },
        visible: {
            scale: 1,
            opacity: 1,
            rotate: -8,
            transition: { type: "spring", damping: 10, stiffness: 100, delay: 0.8 }
        }
    };

    return (
        <section className="w-full min-h-[100dvh] bg-[#f1f1f1] relative flex items-center justify-center overflow-hidden font-display p-4 md:p-8 select-none border-b-brutal bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:64px_64px]">

            {/* Floating Decorative Elements to fill space */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[25%] right-[25%] text-accent opacity-40 z-0"
            >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7" /></svg>
            </motion.div>
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[25%] left-[20%] w-8 h-8 rounded-full border-[3px] border-[#222] opacity-30 z-0"
            />
            <div className="absolute top-[40%] left-[8%] w-4 h-4 bg-accent opacity-50 rotate-45 z-0" />
            <div className="absolute bottom-[35%] right-[15%] w-6 h-6 border-[3px] border-[#222] opacity-20 z-0" />

            {/* The main scalable container */}
            <div className="relative w-full max-w-[1400px] h-full min-h-[600px] flex items-center justify-center">

                {/* --- BACKGROUND VECTOR ELEMENTS --- */}
                {/* Bezier Curve (Top Left-ish) */}
                <motion.div
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ duration: 1 }}
                    className="absolute top-[12%] left-[18%] w-[280px] h-[100px] hidden lg:block z-0"
                >
                    <svg width="100%" height="100%" viewBox="0 0 300 100" className="overflow-visible">
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            d="M 20 80 Q 80 10 150 50 T 280 20" fill="none" stroke="#E25A27" strokeWidth="1.5"
                        />
                        <rect x="16" y="76" width="8" height="8" fill="#f1f1f1" stroke="#E25A27" strokeWidth="1.5" />
                        <rect x="146" y="46" width="8" height="8" fill="#f1f1f1" stroke="#E25A27" strokeWidth="1.5" />
                        <rect x="276" y="16" width="8" height="8" fill="#f1f1f1" stroke="#E25A27" strokeWidth="1.5" />
                        <g transform="translate(285, -20) rotate(30) scale(1.2)">
                            <polygon points="12,24 8,10 12,0 16,10" fill="#222" />
                            <circle cx="12" cy="14" r="2" fill="#f1f1f1" />
                            <rect x="11.5" y="14" width="1" height="10" fill="#f1f1f1" />
                        </g>
                    </svg>
                </motion.div>

                {/* Top Left Icons */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute top-[10%] lg:top-[15%] left-[5%] lg:left-[10%] flex gap-3 z-10 scale-90 lg:scale-100"
                >
                    <div className="w-14 h-14 bg-[#222] rounded-xl flex items-center justify-center text-white font-sans font-bold text-2xl tracking-tighter shadow-sm hover:scale-110 transition-transform cursor-pointer">
                        Pr
                    </div>
                    <div className="w-14 h-14 bg-[#222] rounded-xl flex items-center justify-center text-white font-sans font-bold text-2xl tracking-tighter shadow-sm hover:scale-110 transition-transform cursor-pointer">
                        Ae
                    </div>
                </motion.div>

                {/* Top Right Badge */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute top-[12%] lg:top-[18%] right-[5%] lg:right-[15%] bg-[#E25A27] text-white font-bold text-3xl lg:text-4xl px-4 py-1 z-10 tracking-widest shadow-sm hover:rotate-3 transition-transform cursor-default"
                >
                    #24
                </motion.div>

                {/* --- MAIN CENTER TEXT ("portfolio") --- */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative flex items-center justify-center w-full max-w-[1200px] mx-auto text-[11vw] md:text-[130px] lg:text-[160px] xl:text-[190px] font-black text-[#222] leading-none tracking-tighter z-10 gap-3 md:gap-6 lg:gap-10"
                >

                    {/* True Handwriting SVG 'f' with perfected smooth path */}
                    <motion.svg
                        viewBox="0 0 100 250"
                        className="absolute z-40 pointer-events-none drop-shadow-sm text-[#E25A27] overflow-visible"
                        style={{
                            width: "0.9em",
                            height: "2em",
                            left: "54%",
                            top: "50%",
                            transform: "translate(-50%, -50%) rotate(-4deg)"
                        }}
                    >
                        {/* Single continuous loop for perfect writing animation */}
                        <motion.path
                            d="M 15 130 C 45 110, 60 60, 60 30 C 60 10, 40 10, 40 30 L 40 200 C 40 240, 10 240, 10 210 C 10 180, 25 150, 80 140"
                            fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
                        />
                    </motion.svg>

                    {/* Block 1: p o r t */}
                    <div className="relative flex items-center">
                        <BoundingBox className="absolute -inset-y-4 -inset-x-4 md:-inset-x-8" />
                        <motion.span variants={letterVariants} className="relative z-10 block">p</motion.span>
                        <motion.span variants={letterVariants} className="relative z-10 block">o</motion.span>
                        <motion.span variants={letterVariants} className="relative z-10 ml-1 md:ml-2">r</motion.span>
                        <motion.span variants={letterVariants} className="relative z-10">t</motion.span>

                        {/* Orange Cursor pointer (Bottom left) */}
                        <motion.svg
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1.5, type: "spring" }}
                            width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#E25A27" strokeWidth="1.5" strokeLinejoin="round"
                            className="absolute -bottom-10 -left-6 md:-bottom-20 md:-left-12 w-12 h-12 md:w-20 md:h-20 -rotate-12 z-20 drop-shadow-sm overflow-visible"
                        >
                            <path d="M4 2v20l5-5 4 8 3-1-4-8 7-2z" fill="#f1f1f1" strokeWidth="1.5" />
                        </motion.svg>
                    </div>

                    {/* Block 2: o l i o */}
                    <div className="relative flex items-center">
                        <BoundingBox className="absolute -inset-y-4 -inset-x-4 md:-inset-x-8" />
                        <motion.span variants={letterVariants} className="relative z-10">o</motion.span>
                        <motion.span variants={letterVariants} className="relative z-10">l</motion.span>
                        <motion.span variants={letterVariants} className="relative z-10">i</motion.span>
                        <motion.span variants={letterVariants} className="relative z-10">o</motion.span>
                    </div>

                </motion.div>


                {/* --- BOTTOM ELEMENTS --- */}

                {/* Bottom Left Fonts */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="absolute bottom-[10%] left-[5%] lg:left-[10%] flex flex-col font-display text-[9px] md:text-sm font-bold uppercase tracking-widest text-[#222] z-10"
                >
                    <span>COOLVETICA</span>
                    <span>MTD HOUSTONER SCRIPT</span>
                </motion.div>

                {/* Bottom Center Palette */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-[2%] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:bottom-[15%] lg:left-[35%] flex items-center gap-2 md:gap-4 z-10 scale-75 md:scale-100"
                >
                    <div className="text-[10px] md:text-xs font-bold uppercase leading-tight text-right text-[#222]">
                        Color<br />Palette
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                        <div className="w-5 h-5 md:w-7 md:h-7"></div>
                        <div className="w-5 h-5 md:w-7 md:h-7 bg-[#D9D9D9] shadow-sm hover:scale-110 transition-transform"></div>
                        <div className="w-5 h-5 md:w-7 md:h-7 bg-[#333333] shadow-sm hover:scale-110 transition-transform"></div>
                        <div className="w-5 h-5 md:w-7 md:h-7 bg-[#E25A27] shadow-sm hover:scale-110 transition-transform"></div>
                    </div>
                </motion.div>

                {/* Bottom Right Title & Name */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.2, type: "spring" }}
                    className="absolute bottom-[10%] right-[5%] lg:right-[10%] flex flex-col lg:flex-row items-end gap-4 lg:gap-10 z-10 scale-75 lg:scale-100 origin-bottom-right"
                >

                    <div className="relative font-display text-[2rem] lg:text-[3rem] font-bold text-[#E25A27] leading-[0.9] tracking-tighter hover:scale-105 transition-transform cursor-pointer">
                        Video<br />
                        <div className="relative inline-block mt-1">
                            {/* The outlined "Editor" text with double layer fix for internal overlaps */}
                            <span className="relative z-10 block text-transparent" style={{ WebkitTextStroke: "3px #E25A27" }}>
                                Editor
                                <span className="absolute inset-0 text-[#f1f1f1]" style={{ WebkitTextStroke: "0px" }}>
                                    Editor
                                </span>
                            </span>

                            <BoundingBox className="absolute -left-[30px] -right-[30px] -top-[6px] -bottom-[6px]" />
                            {/* Horizontal extension line */}
                            <div className="absolute top-1/2 -right-[70px] lg:-right-[90px] w-[40px] lg:w-[60px] h-[1.5px] bg-accent"></div>
                            <div className="absolute top-1/2 -right-[70px] lg:-right-[90px] w-[6px] h-[6px] bg-[#f1f1f1] border-[1.5px] border-accent -translate-y-1/2 translate-x-1/2"></div>
                        </div>
                    </div>

                    <div className="font-display font-black text-lg lg:text-2xl tracking-[0.2em] text-[#222] pb-1 uppercase whitespace-nowrap ml-2 lg:ml-4">
                        {PORTFOLIO_DATA.hero.name}
                    </div>

                </motion.div>

            </div>
        </section>
    );
};
