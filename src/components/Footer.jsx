export function Footer() {
    return (
        <footer className="border-t-[4px] border-foreground bg-foreground text-background pt-24 pb-12">
            <div className="max-w-[90rem] mx-auto px-8 border-x-[4px] border-foreground/20">

                {/* Huge Text Box */}
                <div className="flex flex-col md:flex-row justify-between md:items-end mb-20 border-b-[4px] border-background/20 pb-16 gap-8">
                    <div>
                        <h2 className="font-display font-black text-6xl md:text-[8rem] lg:text-[10rem] leading-[0.8] tracking-tighter uppercase text-white">
                            TRẦN VĂN<br />
                            <span className="opacity-50">DŨNG</span><span className="text-accent">.</span>
                        </h2>
                        <div className="mt-12 flex items-center gap-6">
                            <span className="w-4 h-4 rounded-full bg-accent animate-pulse"></span>
                            <p className="font-mono text-xl md:text-2xl font-bold uppercase text-white/80 tracking-widest">VIDEO EDITOR / COLORIST</p>
                        </div>
                    </div>
                    <div className="text-left md:text-right">
                        <a href="#contact" className="inline-block bg-accent text-white px-8 py-4 font-bold font-mono text-xl uppercase hover:bg-white hover:text-foreground transition-colors outline outline-[4px] outline-transparent hover:outline-foreground">
                            HIRE ME
                        </a>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 font-mono text-lg font-bold uppercase">

                    {/* Contact Links */}
                    <div className="col-span-1 border-t-[4px] border-background/20 pt-6">
                        <p className="text-background/40 mb-6 text-sm tracking-widest">CONNECT</p>
                        <ul className="flex flex-col gap-4 text-white">
                            <li><a href="mailto:tr.dung209@gmail.com" className="hover:text-accent transition-colors">EMAIL</a></li>
                            <li><a href="tel:0981427148" className="hover:text-accent transition-colors">098 142 7148</a></li>
                            <li><a href="https://www.facebook.com/DugDSChip" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">FACEBOOK</a></li>
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div className="col-span-1 border-t-[4px] border-background/20 pt-6">
                        <p className="text-background/40 mb-6 text-sm tracking-widest">SITEMAP</p>
                        <ul className="flex flex-col gap-4 text-white">
                            <li><a href="#about" className="hover:text-accent transition-colors">ABOUT ME</a></li>
                            <li><a href="#projects" className="hover:text-accent transition-colors">PROJECTS</a></li>
                            <li><a href="#experience" className="hover:text-accent transition-colors">EXPERIENCE</a></li>
                        </ul>
                    </div>

                    {/* Big Signature Address */}
                    <div className="col-span-1 md:col-span-2 border-t-[4px] border-background/20 pt-6 flex flex-col justify-between md:text-right min-h-[150px]">
                        <p className="font-display font-black text-3xl lg:text-5xl tracking-tighter leading-tight text-white mb-8 border-l-[4px] md:border-l-0 md:border-r-[4px] border-accent pl-4 md:pl-0 md:pr-4">
                            BASED IN HÀ NỘI <br />
                            WORKING WORLDWIDE.
                        </p>
                        <div className="text-sm tracking-widest text-background/40 flex flex-col md:flex-row justify-end gap-2 md:gap-6 mt-auto">
                            <span>© {new Date().getFullYear()}</span>
                            <span>BUILT IN VIETNAM</span>
                            <span>ALL RIGHTS RESERVED.</span>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
