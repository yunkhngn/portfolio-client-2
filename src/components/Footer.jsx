export function Footer() {
    return (
        <footer className="bg-[#111] text-white pt-24 pb-12 select-none border-t border-[#333] font-sans">
            <div className="w-full max-w-[1400px] mx-auto px-8 md:px-12 xl:px-24">

                {/* Huge Text Box */}
                <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 border-b border-[#333] pb-16 gap-8">
                    <div>
                        <h2 className="font-display font-black text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] leading-[0.8] tracking-tighter uppercase text-white m-0">
                            TRẦN VĂN<br />
                            <span className="text-[#888]">DŨNG</span><span className="text-[#E25A27]">.</span>
                        </h2>
                        <div className="mt-8 flex items-center gap-4">
                            <span className="w-3 h-3 rounded-full bg-[#E25A27] animate-pulse"></span>
                            <p className="font-mono text-sm md:text-base font-bold uppercase tracking-widest text-[#ccc]">VIDEO EDITOR / COLORIST</p>
                        </div>
                    </div>
                    <div className="text-left md:text-right">
                        <a href="#contact" className="inline-block bg-[#E25A27] text-white px-8 py-4 font-bold font-mono text-sm uppercase tracking-widest hover:bg-white hover:text-[#111] transition-colors rounded-sm shadow-lg">
                            HIRE ME
                        </a>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 font-mono text-xs md:text-sm font-bold uppercase">

                    {/* Contact Links */}
                    <div className="col-span-1 pt-6 border-t border-[#333]">
                        <p className="text-[#555] mb-6 tracking-widest">CONNECT</p>
                        <ul className="flex flex-col gap-4 text-[#ccc]">
                            <li><a href="mailto:tr.dung209@gmail.com" className="hover:text-[#E25A27] transition-colors">EMAIL</a></li>
                            <li><a href="tel:0981427148" className="hover:text-[#E25A27] transition-colors">098 142 7148</a></li>
                            <li><a href="https://www.facebook.com/DugDSChip" target="_blank" rel="noreferrer" className="hover:text-[#E25A27] transition-colors">FACEBOOK</a></li>
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div className="col-span-1 pt-6 border-t border-[#333]">
                        <p className="text-[#555] mb-6 tracking-widest">SITEMAP</p>
                        <ul className="flex flex-col gap-4 text-[#ccc]">
                            <li><a href="#about" className="hover:text-[#E25A27] transition-colors">ABOUT ME</a></li>
                            <li><a href="#projects" className="hover:text-[#E25A27] transition-colors">PROJECTS</a></li>
                            <li><a href="#experience" className="hover:text-[#E25A27] transition-colors">EXPERIENCE</a></li>
                        </ul>
                    </div>

                    {/* Big Signature Address */}
                    <div className="col-span-1 md:col-span-2 pt-6 border-t border-[#333] flex flex-col justify-between md:text-right min-h-[150px]">
                        <p className="font-display font-black text-3xl lg:text-5xl tracking-tighter leading-tight text-white mb-8 border-l-[2px] md:border-l-0 md:border-r-[2px] border-[#E25A27] pl-4 md:pl-0 md:pr-6">
                            BASED IN HÀ NỘI <br />
                            WORKING WORLDWIDE.
                        </p>
                        <div className="text-[10px] tracking-widest text-[#555] flex flex-col md:flex-row justify-end gap-2 md:gap-6 mt-auto">
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
