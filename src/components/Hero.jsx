import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../config";
import { MoveDown, Play } from "lucide-react";

export function Hero() {
    const { hero, about } = PORTFOLIO_DATA;

    return (
        <section className="section-container min-h-[100dvh] relative overflow-hidden bg-background flex flex-col justify-between border-b-brutal border-t-brutal">

            {/* Background Graphic elements */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#111 2px, transparent 2px), linear-gradient(90deg, #111 2px, transparent 2px)', backgroundSize: '100px 100px' }}></div>

            {/* Top Header Bar inside Hero */}
            <div className="w-full flex justify-between items-center p-6 md:p-8 border-b-[3px] border-foreground z-10 relative bg-background/90 backdrop-blur-sm">
                <div className="flex items-center gap-3 bg-foreground text-background px-4 py-2 border-[2px] border-foreground hover:bg-background hover:text-foreground transition-colors shadow-[4px_4px_0_0_#E25A27] cursor-default">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest">{about.education.school} BASED</span>
                </div>

                <div className="text-right">
                    <p className="font-display font-black text-xl md:text-2xl uppercase tracking-tighter">PORTFOLIO '26</p>
                </div>
            </div>

            {/* Main Massive Typography (Background/Middle ground) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center z-10 pointer-events-none select-none">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full px-4 md:px-12 flex justify-start"
                >
                    <h1 className="font-display text-[15vw] md:text-[18vw] font-black uppercase leading-[0.75] tracking-tighter text-foreground hover:text-accent transition-colors duration-500">
                        TRẦN VĂN
                    </h1>
                </motion.div>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="w-full px-4 md:px-12 flex justify-end mt-4 md:mt-0"
                >
                    <h1 className="font-display text-[15vw] md:text-[18vw] font-black uppercase leading-[0.75] tracking-tighter text-transparent" style={{ WebkitTextStroke: "4px #111111" }}>
                        DŨNG<span className="text-accent" style={{ WebkitTextStroke: "0px" }}>.</span>
                    </h1>
                </motion.div>
            </div>

            {/* Image Collage Overlay */}
            <div className="relative z-20 w-full flex-1 flex items-center justify-center pointer-events-none">

                {/* Main Center Image */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] md:-translate-y-1/2 w-[60vw] md:w-[30vw] aspect-[4/5] bg-white p-3 border-[4px] border-foreground shadow-[12px_12px_0_0_#111] pointer-events-auto group"
                >
                    <div className="w-full h-full border-2 border-foreground relative overflow-hidden">

                        {/* Play button overlay hover */}
                        <div className="absolute inset-0 bg-accent/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center mix-blend-multiply"></div>
                        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity scale-50 group-hover:scale-100 duration-300">
                            <div className="w-20 h-20 bg-background border-[4px] border-foreground rounded-full flex items-center justify-center">
                                <Play className="text-foreground fill-current ml-2 w-8 h-8" />
                            </div>
                        </div>
                        <img src={hero.photos[1]} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    </div>

                    {/* Duct Tape */}
                    <div className="absolute -top-4 -left-6 w-32 h-8 bg-[#e2e2e2] border-2 border-foreground/20 rotate-[-15deg] opacity-80 backdrop-blur-sm mix-blend-multiply shadow-sm"></div>
                </motion.div>

                {/* Small Floating Image Top Right */}
                <motion.div
                    initial={{ x: 50, opacity: 0, rotate: 0 }}
                    animate={{ x: 0, opacity: 1, rotate: 12 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="absolute top-[10%] right-[5%] md:right-[15%] w-[35vw] md:w-[15vw] aspect-square bg-white p-2 border-[3px] border-foreground shadow-[6px_6px_0_0_#E25A27] pointer-events-auto hover:rotate-0 hover:z-30 transition-transform duration-300"
                >
                    <img src={hero.photos[0]} className="w-full h-full object-cover border-2 border-foreground" />
                </motion.div>

                {/* Small Floating Image Bottom Left */}
                <motion.div
                    initial={{ x: -50, opacity: 0, rotate: 0 }}
                    animate={{ x: 0, opacity: 1, rotate: -8 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="absolute bottom-[20%] left-[5%] md:left-[10%] w-[40vw] md:w-[18vw] aspect-[4/3] bg-white p-2 border-[3px] border-foreground shadow-[8px_8px_0_0_#111] pointer-events-auto hover:rotate-0 hover:z-30 transition-transform duration-300"
                >
                    <img src={hero.photos[2]} className="w-full h-full object-cover border-2 border-foreground" />
                </motion.div>

                {/* Diagonal Marquee Ribbon */}
                <div className="absolute top-[30%] -right-20 w-[150vw] bg-accent text-white py-2 border-y-[3px] border-foreground rotate-[-10deg] z-10 shadow-[0_5px_0_0_rgba(17,17,17,0.5)] overflow-hidden">
                    <div className="flex animate-marquee whitespace-nowrap font-mono font-black text-xl tracking-widest uppercase">
                        <span className="mx-4">{hero.slogan}</span><span className="mx-4">✦</span>
                        <span className="mx-4">{hero.slogan}</span><span className="mx-4">✦</span>
                        <span className="mx-4">{hero.slogan}</span><span className="mx-4">✦</span>
                        <span className="mx-4">{hero.slogan}</span><span className="mx-4">✦</span>
                    </div>
                </div>

            </div>

            {/* Bottom Footer of Hero */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-8 border-t-[3px] border-foreground z-30 bg-white">

                <div className="flex flex-col justify-center">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-foreground/50 mb-2">SPECIALTIES</span>
                    <div className="flex gap-4">
                        <p className="font-display text-xl md:text-2xl font-black uppercase text-accent border-b-[3px] border-accent">{hero.roles[0]}</p>
                        <p className="font-display text-xl md:text-2xl font-black uppercase text-foreground">{hero.roles[1]}</p>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <a href="#about" className="group flex items-center justify-center p-4 border-[3px] border-foreground bg-accent text-white rounded-full hover:bg-foreground transition-colors shadow-[4px_4px_0_0_#111] hover:translate-x-1 hover:translate-y-1 hover:shadow-none duration-300">
                        <MoveDown className="w-8 h-8 group-hover:animate-bounce" strokeWidth={3} />
                    </a>
                </div>

                <div className="flex flex-col justify-center items-end text-right">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-foreground/50 mb-2">EXPERIENCE</span>
                    <p className="font-display text-3xl font-black uppercase tracking-tight">{hero.experience}</p>
                </div>

            </div>

        </section>
    );
}
