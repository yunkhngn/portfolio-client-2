import { PORTFOLIO_DATA } from "../config";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export function Contact() {
    const { contact } = PORTFOLIO_DATA;

    return (
        <section id="contact" className="py-24 px-4 md:px-8 max-w-[90rem] mx-auto font-sans">
            {/* The soft, rounded container */}
            <div className="relative overflow-hidden bg-[#f8f9fa] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-20 border border-gray-100 flex flex-col lg:flex-row gap-12 lg:gap-24 shadow-sm">
                
                {/* Background glow */}
                <div className="absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-accent/15 rounded-full blur-[100px] pointer-events-none"></div>

                {/* Left Side: Info */}
                <div className="flex-1 relative z-10 flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-12 tracking-tight">
                        Get Ready To<br />Create Great
                    </h2>

                    <div className="flex flex-col gap-8">
                        {/* Email */}
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                                <Mail size={18} className="text-accent" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 mb-1">E-mail:</div>
                                <a href={`mailto:${contact.email}`} className="text-sm font-medium text-gray-900 hover:text-accent transition-colors">
                                    {contact.email}
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                                <MapPin size={18} className="text-accent" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 mb-1">Location:</div>
                                <div className="text-sm font-medium text-gray-900">
                                    Vietnam
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                                <Phone size={18} className="text-accent" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 mb-1">Contact:</div>
                                <div className="text-sm font-medium text-gray-900">
                                    {contact.phone}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="flex-[1.2] relative z-10 flex flex-col justify-center">
                    <h3 className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-8">
                        Get in touch
                    </h3>

                    <form className="flex flex-col gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                className="w-full px-6 py-4 rounded-xl bg-transparent border border-gray-200 text-sm focus:outline-none focus:border-accent focus:bg-white transition-colors"
                            />
                            <input 
                                type="tel" 
                                placeholder="Phone Number" 
                                className="w-full px-6 py-4 rounded-xl bg-transparent border border-gray-200 text-sm focus:outline-none focus:border-accent focus:bg-white transition-colors"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                className="w-full px-6 py-4 rounded-xl bg-transparent border border-gray-200 text-sm focus:outline-none focus:border-accent focus:bg-white transition-colors"
                            />
                            <input 
                                type="text" 
                                placeholder="Subject" 
                                className="w-full px-6 py-4 rounded-xl bg-transparent border border-gray-200 text-sm focus:outline-none focus:border-accent focus:bg-white transition-colors"
                            />
                        </div>

                        <textarea 
                            placeholder="Your Message" 
                            rows={5}
                            className="w-full px-6 py-4 rounded-xl bg-transparent border border-gray-200 text-sm focus:outline-none focus:border-accent focus:bg-white transition-colors resize-none"
                        ></textarea>

                        <button 
                            type="button"
                            className="mt-4 w-full md:w-auto self-start px-8 py-4 bg-accent hover:opacity-90 text-white text-sm font-semibold rounded-full flex items-center justify-center gap-2 transition-opacity group shadow-md"
                        >
                            Appointment Now
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}
