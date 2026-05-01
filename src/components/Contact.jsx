import { PORTFOLIO_DATA } from "../config";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export function Contact() {
    const { contact } = PORTFOLIO_DATA;

    return (
        <section id="contact" className="bg-[#f2f2f2] w-full pt-32 pb-32 select-none font-sans">
            <div className="w-full max-w-[1400px] mx-auto px-8 md:px-12 xl:px-24">
                
                {/* Header */}
                <div className="mb-16 border-b-[2px] border-[#333] pb-6">
                    <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter font-black leading-[0.85] text-[#333] m-0">
                        GET READY TO <br />
                        <span className="text-[#E25A27]">CREATE GREAT</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    
                    {/* Left Side: Info */}
                    <div className="flex-1 flex flex-col gap-12">
                        <div className="flex flex-col gap-8">
                            {/* Email */}
                            <div className="flex items-start gap-4 border-b border-[#ddd] pb-6">
                                <div className="w-10 h-10 bg-[#333] flex items-center justify-center shrink-0 rounded-sm">
                                    <Mail size={18} className="text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-mono text-[10px] font-bold text-[#888] uppercase tracking-widest mb-1">E-mail</span>
                                    <a href={`mailto:${contact.email}`} className="font-bold text-[#333] text-lg hover:text-[#E25A27] transition-colors">
                                        {contact.email}
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-4 border-b border-[#ddd] pb-6">
                                <div className="w-10 h-10 bg-[#333] flex items-center justify-center shrink-0 rounded-sm">
                                    <MapPin size={18} className="text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-mono text-[10px] font-bold text-[#888] uppercase tracking-widest mb-1">Location</span>
                                    <span className="font-bold text-[#333] text-lg">
                                        Vietnam
                                    </span>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4 border-b border-[#ddd] pb-6">
                                <div className="w-10 h-10 bg-[#333] flex items-center justify-center shrink-0 rounded-sm">
                                    <Phone size={18} className="text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-mono text-[10px] font-bold text-[#888] uppercase tracking-widest mb-1">Contact</span>
                                    <span className="font-bold text-[#333] text-lg">
                                        {contact.phone}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="flex-[1.2]">
                        <div className="bg-white border border-[#ddd] p-8 md:p-12 relative group rounded-sm shadow-sm">
                            
                            {/* Adobe-style corner markers */}
                            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#E25A27]/50"></div>
                            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#E25A27]/50"></div>
                            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#E25A27]/50"></div>
                            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#E25A27]/50"></div>

                            <div className="mb-8 flex items-center gap-3">
                                <div className="w-3 h-3 bg-[#E25A27] rounded-sm"></div>
                                <h3 className="font-mono text-xs font-bold tracking-widest text-[#333] uppercase">
                                    Get in touch
                               </h3>
                            </div>

                            <form className="flex flex-col gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="font-mono text-[10px] font-bold text-[#888] uppercase tracking-widest">Name</label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-3 bg-[#f9f9f9] border border-[#ddd] text-[#333] text-sm focus:outline-none focus:border-[#E25A27] focus:bg-white transition-colors rounded-sm"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-mono text-[10px] font-bold text-[#888] uppercase tracking-widest">Phone</label>
                                        <input 
                                            type="tel" 
                                            className="w-full px-4 py-3 bg-[#f9f9f9] border border-[#ddd] text-[#333] text-sm focus:outline-none focus:border-[#E25A27] focus:bg-white transition-colors rounded-sm"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="font-mono text-[10px] font-bold text-[#888] uppercase tracking-widest">Email</label>
                                        <input 
                                            type="email" 
                                            className="w-full px-4 py-3 bg-[#f9f9f9] border border-[#ddd] text-[#333] text-sm focus:outline-none focus:border-[#E25A27] focus:bg-white transition-colors rounded-sm"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-mono text-[10px] font-bold text-[#888] uppercase tracking-widest">Subject</label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-3 bg-[#f9f9f9] border border-[#ddd] text-[#333] text-sm focus:outline-none focus:border-[#E25A27] focus:bg-white transition-colors rounded-sm"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="font-mono text-[10px] font-bold text-[#888] uppercase tracking-widest">Message</label>
                                    <textarea 
                                        rows={4}
                                        className="w-full px-4 py-3 bg-[#f9f9f9] border border-[#ddd] text-[#333] text-sm focus:outline-none focus:border-[#E25A27] focus:bg-white transition-colors resize-none rounded-sm"
                                    ></textarea>
                                </div>

                                <button 
                                    type="button"
                                    className="mt-4 w-full bg-[#E25A27] text-white py-4 font-bold font-mono text-sm uppercase tracking-widest hover:bg-[#333] transition-colors rounded-sm flex items-center justify-center gap-3 group"
                                >
                                    APPOINTMENT NOW
                                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
