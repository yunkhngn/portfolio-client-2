import { PORTFOLIO_DATA } from "../config";
import { SectionHeading } from "./SectionHeading";
import { Quote } from "lucide-react";

export function About() {
    const { about } = PORTFOLIO_DATA;

    return (
        <section id="about" className="section-container border-b-brutal pt-32 pb-32">
            <SectionHeading>{about.title}</SectionHeading>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-brutal bg-white shadow-brutal relative">

                {/* Absolute Decorative Tag */}
                <div className="absolute -top-5 left-10 bg-accent text-white px-4 py-1 border-brutal font-mono font-bold text-lg uppercase shadow-stack -rotate-2 z-10 hidden sm:block">
                    WHO AM I?
                </div>

                {/* Left Column: Big Photo */}
                <div className="lg:col-span-4 p-8 border-b-brutal lg:border-b-0 lg:border-r-brutal bg-background flex flex-col items-center justify-center relative inner-shadow">
                    <div className="w-full aspect-[3/4] max-w-[300px] border-brutal bg-white p-4 shadow-brutal rotate-3 hover:rotate-0 transition-all duration-300">
                        <div className="w-full h-full border-2 border-foreground overflow-hidden relative">
                            <img src={about.avatar} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <p className="font-handwriting text-2xl text-center mt-3 font-bold">That's Me!</p>
                    </div>
                </div>

                {/* Middle Column: Bio */}
                <div className="lg:col-span-5 p-8 md:p-12 border-b-brutal lg:border-b-0 lg:border-r-brutal flex flex-col justify-center relative bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')]">
                    <Quote className="text-accent w-20 h-20 absolute top-8 left-8 opacity-20 -z-0" />
                    <p className="text-2xl md:text-3xl font-black mb-8 text-foreground z-10 uppercase tracking-tight">
                        Hello! I'm Dũng.
                    </p>
                    <div className="text-lg md:text-xl leading-relaxed font-medium z-10">
                        {about.bio.split(', ').map((sentence, i) => (
                            <p key={i} className="mb-4 bg-white/80 p-2 inline-block shadow-sm">
                                {sentence}{i !== about.bio.split(', ').length - 1 ? ',' : '.'}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Right Column: Mini stats & focus */}
                <div className="lg:col-span-3 flex flex-col bg-foreground text-background">
                    <div className="p-8 border-b-brutal border-background flex-1">
                        <h3 className="font-black uppercase tracking-widest text-sm mb-6 pb-2 border-b-2 border-background inline-block">My Focus</h3>
                        <div className="flex flex-col gap-3">
                            {about.skills.map((skill, index) => (
                                <div key={skill} className="flex items-center gap-4 group">
                                    <span className="font-mono text-accent font-bold group-hover:translate-x-2 transition-transform">0{index + 1}</span>
                                    <span className="font-bold uppercase text-lg group-hover:text-accent transition-colors">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 flex-1 bg-accent text-white flex flex-col justify-center relative overflow-hidden">
                        <h3 className="font-black uppercase tracking-widest text-sm mb-4 pb-2 border-b-2 border-white inline-block relative z-10">Based In</h3>
                        <p className="font-display text-4xl font-black uppercase relative z-10">{about.education.school}</p>
                        <p className="mt-4 text-sm font-bold uppercase border-brutal px-3 py-1 bg-white text-foreground inline-block relative z-10 shadow-stack">
                            {about.education.detail}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
