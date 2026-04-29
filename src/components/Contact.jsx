import { PORTFOLIO_DATA } from "../config";
import { ArrowUpRight, Copy, Star } from "lucide-react";

export function Contact() {
    const { contact } = PORTFOLIO_DATA;

    return (
        <section id="contact" className="w-full min-h-screen bg-foreground relative overflow-hidden flex flex-col border-t-brutal border-background">
            <div className="flex-1 flex flex-col md:flex-row h-full">
                
                {/* Left Side: Big Text */}
                <div className="flex-1 p-8 md:p-16 lg:p-24 border-b-brutal md:border-b-0 md:border-r-brutal border-background flex flex-col justify-center relative bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')]">
                    
                    <div className="absolute top-12 right-12 animate-spin-slow opacity-30 hidden lg:block">
                        <Star size={120} className="fill-accent text-accent" />
                    </div>

                    <div className="inline-block bg-accent text-white font-mono font-bold px-6 py-2 border-[2px] border-white uppercase mb-8 shadow-[4px_4px_0_0_#fff] self-start -rotate-2">
                        Got a project?
                    </div>

                    <h2 className="text-background font-display text-6xl sm:text-7xl lg:text-[10rem] xl:text-[12rem] font-black uppercase leading-[0.8] tracking-tighter my-12">
                        {contact.heading} <br />
                        <span className="text-transparent hover:text-accent transition-colors duration-500 cursor-default" style={{ WebkitTextStroke: "2px #E25A27" }}>{contact.subheading}</span>
                    </h2>

                    <p className="text-background font-mono text-lg xl:text-xl max-w-md opacity-80 border-l-4 border-accent pl-4">
                        Sẵn sàng biến ý tưởng của bạn thành những thước phim truyền cảm hứng. Hãy kết nối với tôi!
                    </p>
                </div>

                {/* Right Side: Links */}
                <div className="w-full md:w-[450px] lg:w-[600px] flex flex-col text-background">
                    
                    <a href={`mailto:${contact.email}`} className="flex-1 p-8 md:p-12 lg:p-16 border-b-brutal border-background flex flex-col justify-center group hover:bg-accent transition-colors relative overflow-hidden">
                        <ArrowUpRight size={64} strokeWidth={2} className="absolute top-8 right-8 group-hover:scale-125 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                        <span className="font-mono text-sm lg:text-base font-bold uppercase tracking-widest opacity-60 mb-2">Send an email</span>
                        <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase break-all">{contact.email}</span>
                    </a>

                    <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="flex-1 p-8 md:p-12 lg:p-16 border-b-brutal border-background flex flex-col justify-center group hover:bg-[#1877F2] hover:text-white transition-colors relative overflow-hidden">
                        <ArrowUpRight size={64} strokeWidth={2} className="absolute top-8 right-8 group-hover:scale-125 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                        <span className="font-mono text-sm lg:text-base font-bold uppercase tracking-widest opacity-60 mb-2">Connect on</span>
                        <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase">Facebook</span>
                    </a>

                    <div className="p-8 md:p-12 lg:p-16 bg-background text-foreground flex flex-col justify-center relative group">
                        <span className="font-mono text-sm font-bold uppercase tracking-widest opacity-60 mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Call me
                        </span>
                        <div className="flex items-center justify-between gap-4">
                            <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-widest truncate">{contact.phone}</span>
                            <button className="p-4 bg-foreground text-background border-brutal hover:-translate-y-1 hover:bg-accent transition-all shrink-0 shadow-stack" aria-label="Copy phone number">
                                <Copy size={32} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
