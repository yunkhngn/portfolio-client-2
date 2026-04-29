import { PORTFOLIO_DATA } from "../config";
import { ArrowDownRight } from "lucide-react";

export function Experience() {
    const { experience } = PORTFOLIO_DATA;

    return (
        <section id="experience" className="section-container border-b-brutal pt-32 pb-32 bg-white">

            <div className="flex border-b-brutal pb-6 mb-16">
                <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter">
                    EXPERIENCE
                </h2>
            </div>

            <div className="flex flex-col gap-6">
                {experience.map((exp, index) => (
                    <div
                        key={index}
                        className="flex flex-col lg:flex-row bg-background border-brutal shadow-brutal p-6 sm:p-8 md:p-12 hover:bg-foreground hover:text-white transition-all duration-300 group relative overflow-hidden"
                    >
                        {/* Background Accent Hover */}
                        <div className="absolute top-0 right-0 w-full h-full bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0"></div>

                        {/* Content (z-10 relative) */}
                        <div className="z-10 flex flex-col lg:flex-row w-full justify-between items-start lg:items-center">

                            {/* Year & Role */}
                            <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
                                <span className="font-mono text-xl font-bold bg-white text-foreground px-4 py-2 border-brutal inline-block mb-4 shadow-stack group-hover:bg-foreground group-hover:text-white transition-colors">
                                    {exp.year}
                                </span>
                                <p className="text-2xl md:text-3xl font-black uppercase tracking-wide group-hover:text-background leading-tight">
                                    {exp.role}
                                </p>
                            </div>

                            {/* Company & Desc */}
                            <div className="w-full lg:w-1/2 flex items-start gap-6">
                                <div className="hidden md:block mt-2">
                                    <ArrowDownRight className="w-12 h-12 text-foreground group-hover:text-white transition-colors" strokeWidth={3} />
                                </div>
                                <div>
                                    <h3 className="font-display text-4xl md:text-5xl font-black uppercase leading-none mb-3">
                                        {exp.company}
                                    </h3>
                                    {exp.subtitle && (
                                        <p className="text-sm font-mono font-bold mt-2 uppercase bg-foreground text-white px-2 py-1 inline-block group-hover:bg-white group-hover:text-foreground">
                                            {exp.subtitle}
                                        </p>
                                    )}
                                    {exp.description && (
                                        <p className="mt-6 text-xl font-medium max-w-xl leading-relaxed opacity-90">
                                            {exp.description}
                                        </p>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
