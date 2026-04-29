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

                {/* Row 1: Bio & Photo */}
                <div className="lg:col-span-8 p-6 md:p-12 border-b-brutal border-foreground relative bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')]">
                    <Quote className="text-accent w-20 h-20 absolute top-4 left-4 opacity-10 -z-0" />
                    <p className="text-2xl md:text-4xl font-black mb-6 text-foreground z-10 uppercase tracking-tighter">
                        Hello! I'm Dũng.
                    </p>
                    <div className="text-lg md:text-xl leading-relaxed font-medium z-10 relative max-w-3xl">
                        {about.bio}
                    </div>
                </div>

                <div className="lg:col-span-4 p-8 border-b-brutal lg:border-l-brutal border-foreground bg-background flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="w-full aspect-square max-w-[280px] border-brutal bg-white p-3 shadow-stack rotate-2 hover:rotate-0 transition-all duration-500 z-10">
                        <div className="w-full h-full border-2 border-foreground overflow-hidden relative">
                            <img src={about.avatar} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                        </div>
                    </div>
                    <p className="font-handwriting text-2xl text-center mt-6 font-bold z-10">That's Me!</p>
                    {/* Decorative element */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
                </div>

                {/* Row 2: Experience */}
                <div className="lg:col-span-12 p-6 md:p-12 border-b-brutal border-foreground">
                    <h3 className="font-black uppercase tracking-widest text-sm mb-10 pb-2 border-b-4 border-accent inline-block">Lộ trình sự nghiệp</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        {experience.map((exp, index) => (
                            <div key={index} className="flex flex-col group relative">
                                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-accent/20 group-hover:bg-accent transition-colors"></div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="font-mono text-xs font-bold bg-foreground text-background px-2 py-1 shadow-stack">{exp.year}</span>
                                    <span className="font-bold text-sm uppercase text-accent tracking-wider">{exp.company}</span>
                                </div>
                                <span className="font-display text-2xl font-black leading-tight mb-3 group-hover:translate-x-2 transition-transform inline-block">{exp.role}</span>
                                {exp.description && (
                                    <p className="text-sm md:text-base opacity-70 leading-relaxed max-w-xl">{exp.description}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 3: Software & Location */}
                <div className="lg:col-span-7 p-6 md:p-12 border-b-brutal lg:border-b-0 lg:border-r-brutal border-foreground flex flex-col">
                    <h3 className="font-black uppercase tracking-widest text-sm mb-8 pb-2 border-b-4 border-foreground inline-block self-start">Vũ khí của tôi</h3>
                    <div className="flex flex-wrap gap-6">
                        {about.tools.map((tool) => (
                            <div key={tool.name} className="flex flex-col items-center gap-2 group">
                                <div 
                                    className={`w-14 h-14 md:w-16 md:h-16 border-brutal flex items-center justify-center font-black text-lg transition-all group-hover:-translate-y-2 group-hover:shadow-stack ${tool.name === 'Capcut' ? 'bg-white p-2' : ''}`}
                                    style={tool.name !== 'Capcut' ? { color: tool.color, backgroundColor: tool.bg, borderColor: tool.color } : {}}
                                >
                                    {tool.name === 'Capcut' ? (
                                        <img src="/photo/capcut.svg" alt="Capcut" className="w-full h-full object-contain" />
                                    ) : tool.name}
                                </div>
                                <span className="text-xs font-bold uppercase opacity-40 group-hover:opacity-100 transition-opacity">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="lg:col-span-5 p-6 md:p-12 bg-accent text-white flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-full h-full bg-foreground opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
                    <h3 className="font-black uppercase tracking-widest text-sm mb-4 opacity-80">Địa bàn hoạt động</h3>
                    <p className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">{about.education.school}</p>
                    <div className="inline-block self-start px-4 py-2 bg-white text-foreground font-bold uppercase text-sm border-brutal shadow-stack">
                        {about.education.detail}
                    </div>
                </div>

            </div>
        </section>
    );
}
