import { cn } from "../lib/utils";

export function Marquee({ items, className, reverse = false }) {
    const content = items.map((item, i) => (
        <span key={i} className="flex items-center gap-8 mx-6">
            <span className="text-xl md:text-2xl font-display font-bold uppercase tracking-[0.1em] whitespace-nowrap text-white">
                {item}
            </span>
            <span className="text-[#E25A27] text-3xl font-serif mt-2">✽</span>
        </span>
    ));

    return (
        <div className={cn("overflow-hidden py-4 border-y border-[#333] bg-[#111]", className)}>
            <div className={cn("flex w-max", reverse ? "animate-marquee-reverse" : "animate-marquee")}>
                {content}
                {content}
            </div>
        </div>
    );
}
