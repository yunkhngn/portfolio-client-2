import { ArrowUpRight } from "lucide-react";

export function WhatIBring() {
    const items = [
        "Nhạy về nhịp dựng & tâm lý người xem",
        "Hiểu cách nội dung vận hành trên social media",
        "Tốc độ nhanh, chất lượng ổn định",
        "Phong cách dựng hiện đại, gọn gàng"
    ];

    return (
        <section className="bg-[#111] w-full py-24 md:py-32 select-none font-sans relative overflow-hidden border-t border-b border-[#333]">
            
            {/* Adobe-style corner markers for the section */}
            <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-[#E25A27] z-10 hidden md:block"></div>
            <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-[#E25A27] z-10 hidden md:block"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-[#E25A27] z-10 hidden md:block"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-[#E25A27] z-10 hidden md:block"></div>

            <div className="w-full max-w-[1400px] mx-auto px-8 md:px-12 xl:px-24 relative z-20">
                <div className="flex flex-col xl:flex-row gap-16 xl:gap-24 items-start">
                    
                    {/* Title Area */}
                    <div className="w-full xl:w-5/12 flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-3 h-3 bg-[#E25A27] rounded-sm"></div>
                            <span className="font-mono text-xs text-[#888] font-bold uppercase tracking-widest">
                                Core Values
                            </span>
                        </div>
                        <h2 className="font-display text-5xl sm:text-6xl lg:text-[5.5rem] font-black text-white uppercase tracking-tighter leading-[0.85] m-0">
                            WHAT <br />
                            <span className="text-[#888]">I BRING</span>
                        </h2>
                    </div>

                    {/* Features List as an editorial spec sheet */}
                    <div className="w-full xl:w-7/12 flex flex-col">
                        {items.map((item, idx) => (
                            <div 
                                key={idx} 
                                className="group flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#333] py-8 sm:py-12 cursor-default transition-colors hover:border-[#E25A27]"
                            >
                                <div className="flex items-start gap-6 sm:gap-12">
                                    <span className="font-mono text-xs sm:text-sm font-bold text-[#555] group-hover:text-[#E25A27] transition-colors mt-2 sm:mt-1">
                                        0{idx + 1}
                                    </span>
                                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight max-w-lg">
                                        {item}
                                    </h3>
                                </div>
                                <ArrowUpRight className="text-[#333] group-hover:text-[#E25A27] transition-all self-end sm:self-center mt-6 sm:mt-0" size={32} />
                            </div>
                        ))}
                        <div className="border-t border-[#333] w-full"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
