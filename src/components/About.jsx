import { PORTFOLIO_DATA } from "../config";
import { SectionHeading } from "./SectionHeading";
import { Quote } from "lucide-react";

export function About() {
    const { about, experience } = PORTFOLIO_DATA;

    return (
        <section id="about" className="section-container border-b-brutal pt-24 pb-24">
            <SectionHeading>{about.title}</SectionHeading>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-brutal bg-white shadow-brutal relative">

                {/* Absolute Decorative Tag */}
                <div className="absolute -top-5 left-10 bg-accent text-white px-4 py-1 border-brutal font-mono font-bold text-lg uppercase shadow-stack -rotate-2 z-10 hidden sm:block">
                    WHO AM I?
                </div>

                {/* Left Column: Big Photo */}
                <div className="lg:col-span-4 p-6 md:p-8 border-b-brutal lg:border-b-0 lg:border-r-brutal bg-background flex flex-col items-center justify-center relative inner-shadow">
                    <div className="w-full aspect-[3/4] max-w-[280px] border-brutal bg-white p-4 shadow-brutal rotate-3 hover:rotate-0 transition-all duration-300">
                        <div className="w-full h-full border-2 border-foreground overflow-hidden relative">
                            <img src={about.avatar} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <p className="font-handwriting text-2xl text-center mt-3 font-bold">That's Me!</p>
                    </div>
                </div>

                {/* Right Column: Bio, Experience, Software */}
                <div className="lg:col-span-8 flex flex-col bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')]">
                    
                    {/* Bio Section */}
                    <div className="p-6 md:p-8 border-b-brutal border-foreground relative">
                        <Quote className="text-accent w-16 h-16 absolute top-4 left-4 opacity-20 -z-0" />
                        <p className="text-xl md:text-2xl font-black mb-4 text-foreground z-10 uppercase tracking-tight">
                            Hello! I'm Dũng.
                        </p>
                        <div className="text-base md:text-lg leading-relaxed font-medium z-10 relative">
                            {about.bio}
                        </div>
                    </div>

                    {/* Experience Section (Horizontal) */}
                    <div className="p-6 md:p-8 border-b-brutal border-foreground">
                        <h3 className="font-black uppercase tracking-widest text-sm mb-6 pb-2 border-b-2 border-foreground inline-block">Kinh nghiệm</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            {experience.map((exp, index) => (
                                <div key={index} className="flex flex-col group border-l-4 border-accent pl-4">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-mono text-[10px] font-bold bg-foreground text-background px-1.5 py-0.5">{exp.year}</span>
                                        <span className="font-bold text-xs uppercase text-accent truncate">{exp.company}</span>
                                    </div>
                                    <span className="font-bold text-sm leading-tight mb-1">{exp.role}</span>
                                    {exp.description && (
                                        <p className="text-[11px] opacity-70 leading-tight">{exp.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 flex-1">
                        {/* Software Section */}
                        <div className="p-6 md:p-8 border-b-brutal md:border-b-0 md:border-r-brutal border-foreground">
                            <h3 className="font-black uppercase tracking-widest text-sm mb-4 pb-2 border-b-2 border-foreground inline-block">Phần mềm</h3>
                            <div className="flex flex-wrap gap-3">
                                {about.tools.map((tool) => (
                                    <div key={tool.name} className="flex flex-col items-center gap-1 group">
                                        <div 
                                            className={`w-10 h-10 md:w-12 md:h-12 border-brutal flex items-center justify-center font-black text-xs transition-transform group-hover:-translate-y-1 ${tool.name === 'Capcut' ? 'rounded-lg' : ''}`}
                                            style={{ color: tool.color, backgroundColor: tool.bg, borderColor: tool.color }}
                                        >
                                            {tool.name === 'Capcut' ? (
                                                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                                                    {/* Simple Capcut-like stylized icon using CSS */}
                                                    <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                                                        <div className="w-4 h-4 bg-black rounded-full"></div>
                                                    </div>
                                                </div>
                                            ) : tool.name}
                                        </div>
                                        <span className="text-[10px] font-bold uppercase opacity-60">{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="p-6 md:p-8 bg-accent text-white flex flex-col justify-center">
                            <h3 className="font-black uppercase tracking-widest text-sm mb-2 opacity-80">Based In</h3>
                            <p className="font-display text-4xl font-black uppercase tracking-tighter">{about.education.school}</p>
                            <p className="mt-2 text-[10px] font-bold uppercase border border-white/40 px-2 py-0.5 inline-block self-start opacity-80">
                                {about.education.detail}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
