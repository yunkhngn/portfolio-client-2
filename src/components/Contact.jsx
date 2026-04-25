import { PORTFOLIO_DATA } from "../config";
import { ArrowUpRight, Copy } from "lucide-react";

export function Contact() {
    const { contact } = PORTFOLIO_DATA;

    return (
        <section id="contact" className="section-container pt-32 pb-32 text-center bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')]">

            <div className="border-brutal bg-white p-8 sm:p-16 md:p-24 shadow-brutal relative overflow-hidden group">

                {/* Animated Background Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity duration-1000 z-0">
                    <h2 className="text-[15rem] font-black font-display uppercase leading-none">CONTACT</h2>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                    <div className="bg-accent text-white font-mono font-bold px-6 py-2 border-brutal text-xl uppercase mb-12 shadow-stack -rotate-2">
                        Got a project?
                    </div>

                    <h2 className="font-display text-6xl sm:text-7xl md:text-[9rem] font-black uppercase leading-[0.8] tracking-tighter cursor-default">
                        {contact.heading} <br />
                        <span className="text-outline-accent group-hover:text-accent transition-colors duration-500">{contact.subheading}</span>
                    </h2>

                    <div className="mt-20 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 w-full max-w-4xl mx-auto">

                        <a href={`mailto:${contact.email}`} className="group/btn relative w-full md:w-auto">
                            <div className="absolute inset-0 bg-foreground translate-x-2 translate-y-2 border-brutal transition-transform group-hover/btn:translate-x-3 group-hover/btn:translate-y-3"></div>
                            <div className="relative px-12 py-6 bg-white text-foreground font-black text-2xl uppercase tracking-widest border-brutal flex items-center justify-center gap-4 hover:-translate-y-1 hover:-translate-x-1 transition-all">
                                EMAIL ME <ArrowUpRight size={28} strokeWidth={3} />
                            </div>
                        </a>

                        <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="group/btn relative w-full md:w-auto">
                            <div className="absolute inset-0 bg-accent translate-x-2 translate-y-2 border-brutal transition-transform group-hover/btn:translate-x-3 group-hover/btn:translate-y-3"></div>
                            <div className="relative px-12 py-6 bg-white text-foreground font-black text-2xl uppercase tracking-widest border-brutal flex items-center justify-center gap-4 hover:-translate-y-1 hover:-translate-x-1 transition-all">
                                FACEBOOK <ArrowUpRight size={28} strokeWidth={3} />
                            </div>
                        </a>

                    </div>

                    <div className="mt-20 inline-flex items-center gap-4 bg-background px-6 py-3 border-brutal shadow-stack group-hover:-rotate-1 transition-transform">
                        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse border-2 border-foreground"></span>
                        <span className="font-mono font-bold text-2xl tracking-widest">{contact.phone}</span>
                        <button className="p-2 hover:bg-foreground hover:text-white border-2 border-transparent hover:border-foreground transition-colors rounded">
                            <Copy size={20} />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
