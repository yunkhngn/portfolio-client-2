export function Footer() {
    return (
        <footer className="border-t-[4px] border-foreground bg-foreground text-background">

            {/* Big scrolling ticker in footer */}
            <div className="w-full overflow-hidden border-b-[4px] border-background/20 py-4">
                <div className="flex w-max animate-marquee font-display font-black text-5xl uppercase opacity-20">
                    <span className="mx-4">AVAILABLE FOR WORK</span><span className="mx-4">✦</span>
                    <span className="mx-4">AVAILABLE FOR WORK</span><span className="mx-4">✦</span>
                    <span className="mx-4">AVAILABLE FOR WORK</span><span className="mx-4">✦</span>
                    <span className="mx-4">AVAILABLE FOR WORK</span><span className="mx-4">✦</span>
                </div>
            </div>

            <div className="max-w-[90rem] mx-auto px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

                    <div>
                        <div className="font-display font-black text-4xl uppercase text-white mb-2 leading-none">
                            Trần Văn Dũng <span className="text-accent">.</span>
                        </div>
                        <div className="font-mono text-sm opacity-60 uppercase tracking-widest font-bold">
                            VIDEO EDITOR / COLORIST
                        </div>
                    </div>

                    <div className="flex gap-12">
                        <div className="flex flex-col gap-2 font-mono text-sm font-bold opacity-80 uppercase">
                            <a href="#about" className="hover:text-accent transition-colors">About</a>
                            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
                            <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
                        </div>
                        <div className="flex flex-col gap-2 font-mono text-sm font-bold opacity-80 uppercase text-right md:text-left">
                            <p>© 2026</p>
                            <p>BUILT IN VIETNAM</p>
                            <p>ALL RIGHTS RESERVED</p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
