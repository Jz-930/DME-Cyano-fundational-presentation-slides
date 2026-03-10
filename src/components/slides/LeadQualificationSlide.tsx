'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { Mail, Clock, MapPin, CheckCircle, TrendingUp, Phone, Shield, User, ChevronRight } from 'lucide-react';

export function LeadQualificationSlide() {
    const { title, description, crmMock } = content.functionalWeb.leadQualification;

    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center p-8 bg-[#02050a] overflow-hidden z-10 border-t border-white/5">
            {/* Dynamic tech background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-[#050a15] to-[#02050a] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/images/grid_pattern.svg')] opacity-[0.03] bg-repeat pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto w-full z-10 relative items-center">

                {/* Left Side: Content */}
                <RevealWrapper delay={0.2} className="lg:pr-8 flex flex-col justify-center h-full">
                    <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 text-emerald-400 font-mono text-xs lg:text-sm rounded-full border border-emerald-500/30 mb-8 font-bold shadow-lg tracking-widest uppercase gap-2 backdrop-blur-md self-start">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Automated System
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 text-white leading-tight drop-shadow-xl">
                        {title.split('(')[0]}<br className="hidden lg:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                            ({title.split('(')[1]}
                        </span>
                    </h2>

                    <div className="text-gray-300 text-lg lg:text-xl font-light leading-relaxed mb-10 space-y-4">
                        <p>{description.split('，')[0]}，<br className="hidden lg:block" />{description.split('，')[1]}</p>
                    </div>

                    <div className="bg-[#0a0f1a]/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[40px] group-hover:bg-emerald-500/10 transition-colors duration-500 pointer-events-none"></div>

                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 flex items-center">
                            <TrendingUp className="text-emerald-400 mr-3" size={24} /> {crmMock.salesHint.split('：')[0]}
                        </h3>
                        <p className="text-base lg:text-lg text-emerald-300/80 font-light leading-relaxed italic border-l-2 border-emerald-500/50 pl-4 py-1">
                            {crmMock.salesHint.split('：')[1]}
                        </p>
                    </div>
                </RevealWrapper>

                {/* Right Side: Email/CRM Mockup */}
                <RevealWrapper delay={0.4} className="relative h-full min-h-[600px] flex justify-center items-center perspective-[1000px]">

                    {/* Glowing Background Ring */}
                    <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full mix-blend-screen scale-90 lg:scale-110 pointer-events-none animate-pulse-slow"></div>

                    <div className="w-full max-w-[480px] bg-[#0a0f1a]/90 backdrop-blur-2xl border border-emerald-500/30 rounded-[2.5rem] shadow-[0_0_50px_rgba(16,185,129,0.15)] overflow-hidden relative z-10 group hover:shadow-[0_0_80px_rgba(16,185,129,0.25)] transition-shadow duration-700 hover:-translate-y-2">
                        {/* Browser/System Top Bar */}
                        <div className="bg-[#050a15] p-4 flex items-center gap-3 border-b border-white/10">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                            </div>
                            <div className="bg-white/5 rounded-md text-[11px] text-gray-500 px-3 py-1.5 flex-1 text-center font-mono font-medium flex items-center justify-center gap-2">
                                <Shield size={12} className="text-emerald-500/50" /> {crmMock.title}
                            </div>
                        </div>

                        {/* Notification Header */}
                        <div className="bg-gradient-to-r from-emerald-900/40 to-[#0a0f1a] p-8 border-b border-emerald-500/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[50px] pointer-events-none"></div>
                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <div>
                                    <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full mb-3 border border-emerald-500/30">
                                        <CheckCircle size={14} /> {crmMock.tag}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                                        {crmMock.contact.name}
                                        <span className="bg-emerald-500 text-black text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm font-black transform -skew-x-12">New</span>
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1 flex items-center gap-2">
                                        <MapPin size={14} className="text-emerald-500/70" /> {crmMock.contact.status}
                                    </p>
                                </div>
                                <div className="text-right flex flex-col items-end">
                                    <div className="bg-[#050a15] text-gray-400 text-xs font-mono px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                                        <Clock size={12} className="text-emerald-500" /> {crmMock.contact.time}
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 relative z-10">
                                <a href={`tel:${crmMock.contact.phone.replace(/-/g, '')}`} className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors group/btn">
                                    <Phone size={16} className="text-emerald-400 group-hover/btn:animate-pulse" /> {crmMock.contact.phone}
                                </a>
                                <a href={`mailto:${crmMock.contact.email}`} className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors group/btn">
                                    <Mail size={16} className="text-cyan-400 group-hover/btn:animate-bounce" /> Email
                                </a>
                            </div>
                        </div>

                        {/* CRM Data Fields */}
                        <div className="p-8 space-y-5 bg-[#0a0f1a]">
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <User size={14} /> Qualification Data
                            </h4>
                            {crmMock.data.map((item, index) => (
                                <div key={index} className="flex justify-between items-center group/row border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                    <span className="text-gray-400 text-sm font-medium">{item.label}</span>
                                    <span className="text-white font-bold text-right flex items-center gap-2 group-hover/row:text-emerald-400 transition-colors">
                                        {item.value} <ChevronRight size={14} className="text-white/20 group-hover/row:text-emerald-400 group-hover/row:translate-x-1 transition-all" />
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </RevealWrapper>

            </div>

        </section>
    );
}
