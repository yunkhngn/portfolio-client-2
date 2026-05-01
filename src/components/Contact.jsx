import { PORTFOLIO_DATA } from "../config";
import { ArrowUpRight, Copy, Star } from "lucide-react";

export function Contact() {
    const { contact } = PORTFOLIO_DATA;

    return (
        <section id="contact" className="section-container py-24 md:py-32">
            <div className="bg-white text-foreground border-brutal shadow-brutal relative overflow-hidden flex flex-col md:flex-row min-h-[500px]">
                
                {/* Left Side: Big Text */}
                <div className="flex-1 p-6 sm:p-8 md:p-16 border-b-brutal md:border-b-0 md:border-r-brutal border-foreground flex flex-col justify-between relative bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')]">
                    
                    <div className="absolute top-6 right-6 md:top-8 md:right-8 animate-spin-slow opacity-50 hidden sm:block">
                        <Star size={64} className="fill-accent text-accent" />
                    </div>

                    <div className="inline-block bg-accent text-white font-mono font-bold px-6 py-2 border-[2px] border-foreground uppercase mb-8 shadow-stack self-start -rotate-2">
                        Got a project?
                    </div>

                    <h2 className="font-display text-4xl sm:text-6xl lg:text-[7rem] font-black uppercase leading-[0.85] tracking-tighter mt-10 mb-10 md:mt-12 md:mb-12">
                        {contact.heading} <br />
                        <span className="relative inline-block text-transparent group cursor-default" style={{ WebkitTextStroke: "4px #E25A27" }}>
                            {contact.subheading}
                            <span className="absolute inset-0 text-white group-hover:text-accent transition-colors duration-500" style={{ WebkitTextStroke: "0px" }}>
                                {contact.subheading}
                            </span>
                        </span>
                    </h2>

                    <p className="font-mono text-lg max-w-md opacity-80 border-l-4 border-accent pl-4">
                        Sẵn sàng biến ý tưởng của bạn thành những thước phim truyền cảm hứng. Hãy kết nối với tôi!
                    </p>
                </div>

                {/* Right Side: Links */}
                <div className="w-full md:w-[400px] lg:w-[450px] flex flex-col">
                    
                    <a href={`mailto:${contact.email}`} className="flex-1 p-6 sm:p-8 md:p-12 border-b-brutal border-foreground flex flex-col justify-center group hover:bg-accent hover:text-white transition-colors relative overflow-hidden">
                        <ArrowUpRight size={40} strokeWidth={2} className="absolute top-6 right-6 md:top-8 md:right-8 group-hover:scale-125 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                        <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest opacity-60 mb-2">Send an email</span>
                        <span className="font-display text-xl sm:text-2xl md:text-3xl font-black uppercase break-all">{contact.email}</span>
                    </a>

                    <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="flex-1 p-6 sm:p-8 md:p-12 border-b-brutal border-foreground flex flex-col justify-center group hover:bg-[#1877F2] hover:text-white transition-colors relative overflow-hidden">
                        <ArrowUpRight size={40} strokeWidth={2} className="absolute top-6 right-6 md:top-8 md:right-8 group-hover:scale-125 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                        <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest opacity-60 mb-2">Connect on</span>
                        <span className="font-display text-xl sm:text-2xl md:text-3xl font-black uppercase">Facebook</span>
                    </a>

                    <div className="p-6 sm:p-8 md:p-12 bg-background text-foreground flex flex-col justify-center relative group">
                        <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest opacity-60 mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Call me
                        </span>
                        <div className="flex items-center justify-between gap-4">
                            <span className="font-display text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-widest truncate">{contact.phone}</span>
                            <button className="p-2 sm:p-3 bg-foreground text-background border-brutal hover:-translate-y-1 hover:bg-accent transition-all shrink-0 shadow-stack" aria-label="Copy phone number">
                                <Copy size={24} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
