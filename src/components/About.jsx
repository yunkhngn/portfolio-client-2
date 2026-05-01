import { PORTFOLIO_DATA } from "../config";
import { BookOpen, Palette, Video, Share2, MousePointer2, PenTool } from "lucide-react";

export function About() {
    const { about, experience } = PORTFOLIO_DATA;

    const skillIcons = {
        "Storytelling": <BookOpen className="text-white" size={18} strokeWidth={2} />,
        "Color Grading": <Palette className="text-white" size={18} strokeWidth={2} />,
        "Motion Graphics": <Video className="text-white" size={18} strokeWidth={2} />,
        "Social Media Viral": <Share2 className="text-white" size={18} strokeWidth={2} />,
    };

    return (
        <section id="about" className="bg-[#f2f2f2] w-full h-[100svh] overflow-hidden relative border-b-brutal flex items-center font-sans select-none">

            {/* Top UI Bar (Fake App Menu) */}
            <div className="absolute top-6 left-10 flex items-center gap-6 z-50">
                <div className="flex gap-1">
                    <div className="w-5 h-5 bg-[#E25A27] rounded-sm"></div>
                    <div className="w-5 h-5 bg-[#E25A27] rounded-t-full"></div>
                </div>
                <div className="flex items-center gap-4 text-xs font-bold text-[#333] uppercase">
                    <span className="bg-[#E25A27] text-white px-2 py-0.5">Yourself</span>
                    <span>Edit</span>
                    <span>Object</span>
                    <span>Type</span>
                </div>
            </div>

            <div className="w-full h-full flex relative pt-20 pb-12 px-16 md:px-24 xl:px-40">

                {/* --- LEFT COLUMN: CONTENT (55%) --- */}
                <div className="w-full lg:w-[55%] h-full flex flex-col justify-evenly z-10 relative pr-6 xl:pr-12 py-4">

                    {/* Header: Name and Bio */}
                    <div className="flex flex-col items-start gap-2 w-full">
                        <h2 className="text-[3rem] xl:text-[4rem] 2xl:text-[5rem] font-display font-black text-[#333] leading-none tracking-tighter m-0 whitespace-nowrap">
                            Trần Văn Dũng
                        </h2>
                        <p className="text-sm xl:text-base text-[#555] font-medium leading-relaxed max-w-2xl mt-1">
                            "{about.bio}"
                        </p>
                    </div>

                    {/* Creative field */}
                    <div>
                        <h3 className="text-2xl xl:text-4xl font-display font-black text-[#333] tracking-tighter mb-4">Creative field</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                            {about.skills.map((skill, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl bg-[#E25A27] flex items-center justify-center shrink-0">
                                        {skillIcons[skill] || <div className="w-3 h-3 bg-white rounded-full"></div>}
                                    </div>
                                    <span className="text-lg xl:text-xl font-bold text-[#333] tracking-tight">/{skill}/</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience */}
                    <div>
                        <h3 className="text-2xl xl:text-4xl font-display font-black text-[#333] tracking-tighter mb-4">Experience</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                            {experience.slice(0, 4).map((exp, index) => (
                                <div key={index} className="flex items-start gap-2">
                                    <span className="font-bold text-[#333] text-sm xl:text-base whitespace-nowrap">{exp.year}</span>
                                    <span className="text-[#ccc] font-bold text-sm xl:text-base">|</span>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-[#333] text-sm xl:text-base leading-tight">{exp.role}</span>
                                        <span className="text-[#777] font-medium text-xs xl:text-sm mt-0.5 leading-tight">{exp.company}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Software */}
                    <div className="flex items-center gap-4 xl:gap-6">
                        <h3 className="text-2xl xl:text-4xl font-display font-black text-[#333] tracking-tighter leading-none whitespace-nowrap">Software</h3>
                        <div className="flex flex-wrap gap-2 items-center">
                            {about.tools.map((tool) => (
                                <div
                                    key={tool.name}
                                    className={`w-12 h-12 xl:w-14 xl:h-14 rounded-lg flex items-center justify-center font-black text-base xl:text-xl shadow-sm ${tool.name === 'Capcut' ? 'bg-white p-1.5' : ''}`}
                                    style={tool.name !== 'Capcut' ? { color: tool.color, backgroundColor: tool.bg } : {}}
                                >
                                    {tool.name === 'Capcut' ? (
                                        <img src="/photo/capcut.svg" alt="Capcut" className="w-full h-full object-contain" />
                                    ) : tool.name}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* --- RIGHT COLUMN: IMAGE & UI ELEMENTS (45%) --- */}
                <div className="hidden lg:block w-[35%] h-full relative z-0">

                    {/* Bounding Box behind image */}
                    <div className="absolute top-[10%] bottom-[5%] right-0 left-[15%] border-[1px] border-[#E25A27] pointer-events-none z-10 opacity-70">
                        {/* Anchor points */}
                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-[#E25A27]"></div>
                        <div className="absolute -top-1 left-1/2 w-2 h-2 bg-white border border-[#E25A27] -translate-x-1/2"></div>
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-[#E25A27]"></div>
                        <div className="absolute top-1/2 -left-1 w-2 h-2 bg-white border border-[#E25A27] -translate-y-1/2"></div>
                        <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white border border-[#E25A27] -translate-y-1/2"></div>
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-[#E25A27]"></div>
                        <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-white border border-[#E25A27] -translate-x-1/2"></div>
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-[#E25A27]"></div>
                    </div>

                    {/* Toolbar (Left side) */}
                    <div className="absolute top-[15%] left-[5%] w-8 bg-[#333] rounded-sm py-2 px-1 z-30 flex flex-col items-center gap-2 shadow-lg">
                        <div className="w-4 h-4 bg-[#E25A27] rounded-sm mb-1"></div>
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="w-4 h-4 opacity-50 flex justify-center items-center">
                                <div className="w-3 h-3 border-2 border-white rounded-sm"></div>
                            </div>
                        ))}
                    </div>

                    {/* Layers Panel (Top Right) */}
                    <div className="absolute top-[8%] -right-8 w-28 bg-[#444] rounded-sm z-30 shadow-lg border border-[#333] overflow-hidden">
                        <div className="bg-[#333] text-gray-400 text-[10px] px-2 py-1 font-bold flex justify-between items-center">
                            Layer <span>≡</span>
                        </div>
                        <div className="p-1 text-[8px] text-white flex flex-col gap-0.5">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="flex items-center gap-1 bg-[#555] px-1 py-0.5 rounded-sm">
                                    <div className="w-2 h-2 bg-gray-400"></div>
                                    <span>&lt;Path&gt;</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pen Tool Path */}
                    <svg className="absolute top-[40%] left-[-20%] w-[50%] h-[30%] z-10 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M 0 0 C 40 10, 60 50, 80 100" fill="none" stroke="#E25A27" strokeWidth="1" />
                        <rect x="-2" y="-2" width="4" height="4" fill="white" stroke="#E25A27" strokeWidth="1" />
                        <rect x="38" y="25" width="4" height="4" fill="white" stroke="#E25A27" strokeWidth="1" />
                        <rect x="78" y="98" width="4" height="4" fill="white" stroke="#E25A27" strokeWidth="1" />
                    </svg>

                    {/* Pen Tool Icon */}
                    <div className="absolute top-[35%] left-[-15%] z-20 -rotate-45">
                        <PenTool size={36} className="text-[#222] fill-[#222]" />
                    </div>

                    {/* Cursor Icon */}
                    <div className="absolute top-[45%] -right-12 z-40 -rotate-12">
                        <MousePointer2 size={40} className="text-[#222] fill-white" />
                    </div>

                    {/* Right side orange icons block */}
                    <div className="absolute bottom-[20%] -right-6 flex flex-col gap-1 z-30">
                        <div className="flex gap-1">
                            <div className="w-8 h-8 bg-[#E25A27] rounded-sm"></div>
                            <div className="w-8 h-8 bg-[#E25A27] rounded-sm"></div>
                        </div>
                        <div className="flex gap-1">
                            <div className="w-8 h-8 bg-[#E25A27] rounded-sm"></div>
                            <div className="w-8 h-8 bg-[#E25A27] rounded-sm"></div>
                        </div>
                    </div>

                    {/* Main Image */}
                    <img
                        src="/photo/tach-nen.png"
                        alt="Trần Văn Dũng"
                        className="absolute bottom-0 right-[5%] w-auto h-[105%] object-contain object-bottom drop-shadow-2xl z-20"
                    />

                </div>
            </div>
        </section>
    );
}
