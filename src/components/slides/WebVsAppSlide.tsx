'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { LayoutTemplate, Layers, Zap } from 'lucide-react';

export function WebVsAppSlide() {
    const { title, points } = content.functionalWeb.vsApp;

    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center p-8 bg-[#02050a] overflow-hidden z-10 border-t border-white/5 pt-20 pb-20">
            {/* Deep space background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-950/20 via-[#050a15] to-[#02050a] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full z-10 relative flex flex-col items-center">

                <RevealWrapper className="text-center mb-16 w-full max-w-4xl">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading mb-6 text-white leading-tight drop-shadow-xl">
                        {title.split(' vs ')[0]} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic">
                            vs
                        </span>
                        <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 ml-0 md:ml-4">
                            {title.split(' vs ')[1]}
                        </span>
                    </h2>
                </RevealWrapper>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto w-full z-10 relative perspective-[1200px]">

                    {/* The Old Way */}
                    <RevealWrapper delay={0.2} className="h-full">
                        <div className="bg-[#0a0f1a]/80 backdrop-blur-xl border border-gray-800 p-8 lg:p-12 rounded-3xl group relative h-full flex flex-col hover:border-gray-700 transition-colors duration-500 grayscale opacity-80 hover:grayscale-0 hover:opacity-100">
                            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>

                            <div className="flex items-center justify-between border-b border-gray-800 pb-6 mb-8 relative z-10">
                                <div className="flex items-center">
                                    <div className="w-14 h-14 rounded-2xl bg-gray-900 flex items-center justify-center mr-4 border border-gray-800">
                                        <LayoutTemplate className="text-gray-500" size={28} />
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-400 group-hover:text-gray-300 transition-colors">{points[0]?.label || "名片网站 (Brochure)"}</h3>
                                </div>
                                <span className="text-gray-600 font-mono text-xs uppercase tracking-[0.2em] font-bold">{points[0]?.subtitle || "Web 1.0"}</span>
                            </div>

                            <p className="text-gray-400 text-lg mb-6 leading-relaxed flex-grow">
                                {points[0]?.desc}
                            </p>

                            <ul className="space-y-6 text-gray-500 text-lg lg:text-xl font-light relative z-10 flex-grow group-hover:text-gray-400 transition-colors">
                                {points[0]?.features?.map((feature: string, idx: number) => (
                                    <li key={idx} className="flex items-start group/items">
                                        <span className="text-red-900 mr-4 mt-1 font-bold group-hover/items:text-red-600 transition-colors">✕</span>
                                        <p>{feature}</p>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 bg-red-950/10 border border-red-900/30 p-5 rounded-2xl relative z-10">
                                <p className="text-gray-400 font-light flex items-center">
                                    <span className="text-red-500 font-bold mr-2 uppercase tracking-wide text-sm">{points[0]?.reactionTitle}</span>
                                    {points[0]?.reactionText}
                                </p>
                            </div>
                        </div>
                    </RevealWrapper>

                    {/* The New Way */}
                    <RevealWrapper delay={0.4} className="h-full">
                        <div className="bg-[#05101f]/90 backdrop-blur-xl border-2 border-cyan-500/30 p-8 lg:p-12 rounded-3xl relative overflow-hidden group shadow-[0_0_50px_rgba(6,182,212,0.15)] hover:shadow-[0_0_80px_rgba(6,182,212,0.3)] hover:-translate-y-2 transition-all duration-700 h-full flex flex-col z-10">

                            {/* Animated background glow */}
                            <div className="absolute -inset-10 bg-gradient-to-br from-cyan-500/20 via-blue-500/5 to-transparent blur-[80px] group-hover:opacity-100 opacity-60 transition-opacity duration-700 z-0"></div>

                            <div className="flex items-center justify-between border-b border-cyan-500/30 pb-6 mb-8 relative z-10">
                                <div className="flex items-center">
                                    <div className="w-14 h-14 rounded-2xl bg-cyan-950/50 flex items-center justify-center mr-4 border border-cyan-800/50 shadow-inner group-hover:scale-110 transition-transform duration-500">
                                        <Layers className="text-cyan-400 group-hover:animate-pulse" size={28} />
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white drop-shadow-md">{points[1]?.label || "Functional Web App"}</h3>
                                </div>
                                <span className="text-cyan-300 font-mono text-xs uppercase tracking-widest flex items-center bg-cyan-900/40 px-3 py-1.5 rounded-full border border-cyan-500/40 font-bold shadow-sm whitespace-nowrap ml-4">
                                    <Zap size={14} className="mr-1.5 text-yellow-400" /> {points[1]?.subtitle || "DME 核心技术"}
                                </span>
                            </div>

                            <p className="text-cyan-100/80 text-lg mb-6 leading-relaxed flex-grow">
                                {points[1]?.desc}
                            </p>

                            <ul className="space-y-6 text-white text-lg lg:text-xl font-light relative z-10 flex-grow">
                                {points[1]?.features?.map((feature: string, idx: number) => {
                                    // Highlight logic: if it mentions specific keywords, format them
                                    let formattedText: React.ReactNode = <span className="font-medium text-gray-200">{feature}</span>;

                                    const splitCalc = feature.split('交互式计算器 / 评测系统');
                                    if (splitCalc.length > 1) {
                                        formattedText = <p className="font-medium text-gray-200">{splitCalc[0]} <span className="text-cyan-300 font-bold bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/50">交互式计算器 / 评测系统</span>{splitCalc[1]}</p>;
                                    }

                                    const splitAuto = feature.split('自动生成定制方案');
                                    if (splitAuto.length > 1) {
                                        formattedText = <p className="font-medium text-gray-200">{splitAuto[0]}<span className="text-cyan-300 font-bold relative inline-block mx-1">自动生成定制方案<span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-transparent"></span></span>{splitAuto[1]}</p>;
                                    }

                                    return (
                                        <li key={idx} className="flex items-start hover:translate-x-2 transition-transform duration-300">
                                            <span className="text-cyan-400 mr-4 mt-1 font-bold text-xl drop-shadow-sm">✓</span>
                                            {formattedText}
                                        </li>
                                    );
                                })}
                            </ul>

                            <div className="mt-8 bg-gradient-to-r from-emerald-950/40 to-[#05101f] border border-emerald-900/50 p-5 rounded-2xl relative z-10 group/highlight overflow-hidden">
                                <div className="absolute inset-0 bg-emerald-500/10 -translate-x-full group-hover/highlight:translate-x-full transition-transform duration-1000"></div>
                                <p className="text-emerald-400 font-bold text-lg lg:text-xl flex items-center justify-center drop-shadow-md">
                                    转化率比传统名片网站提升 <span className="text-3xl font-black text-emerald-300 mx-2 tracking-tighter">{points[1]?.reactionText}</span> 以上！
                                </p>
                            </div>
                        </div>
                    </RevealWrapper>

                </div>
            </div>
        </section>
    );
}
