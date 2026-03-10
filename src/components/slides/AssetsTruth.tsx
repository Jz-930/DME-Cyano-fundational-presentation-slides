'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { TrendingUp, AlertTriangle } from 'lucide-react';

export function AssetsTruth() {
    const { title, misconception, truth } = content.assetsTruth;

    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center p-8 bg-gradient-to-b from-[#050505] via-[#0a0505] to-red-950/20 overflow-hidden z-10 border-t border-white/5">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black opacity-60 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto w-full z-10 relative flex flex-col items-center">

                <RevealWrapper className="text-center mb-16 w-full max-w-4xl pt-10">
                    <div className="inline-flex items-center px-4 py-2 bg-white/5 text-gray-300 font-mono text-xs rounded-full border border-white/10 mb-6 font-bold shadow-lg tracking-widest uppercase gap-2 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        Module 03 / Creative Assets
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-white leading-tight drop-shadow-lg">
                        {title.split('：')[0]}：<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">{title.split('：')[1]?.split('，')[0]}</span>，<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-300">
                            {title.split('：')[1]?.split('，')[1]}
                        </span>
                    </h2>
                </RevealWrapper>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full z-10 relative items-stretch perspective-[1000px]">

                    {/* Left Side: The Misconception */}
                    <RevealWrapper delay={0.2} className="h-full">
                        <div className="bg-[#120a0a]/80 backdrop-blur-xl border border-red-900/30 p-8 lg:p-10 rounded-3xl h-full relative overflow-hidden group hover:border-red-500/40 hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/10 blur-[60px] rounded-full group-hover:bg-red-500/20 group-hover:scale-150 transition-all duration-700"></div>

                            {/* Subtle scanline effect */}
                            <div className="absolute inset-0 bg-[url('/images/scanlines.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>

                            <div className="flex justify-between items-start mb-8 relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-red-950/50 border border-red-800/50 flex items-center justify-center text-red-500 shadow-inner group-hover:rotate-12 transition-transform duration-300">
                                    <AlertTriangle size={32} />
                                </div>
                                <span className="font-mono text-xs text-red-500/50 tracking-widest font-bold">ERROR_01</span>
                            </div>

                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 relative z-10 group-hover:text-red-100 transition-colors">{misconception.title}</h3>

                            <div className="relative z-10 border-l-4 border-red-500 pl-5 mb-8 py-2">
                                <p className="text-gray-300 text-lg leading-relaxed font-medium italic drop-shadow-md">
                                    {misconception.quote}
                                </p>
                            </div>

                            <div className="bg-red-950/40 p-4 rounded-xl border border-red-900/50 relative z-10 overflow-hidden group/alert">
                                <div className="absolute inset-0 bg-red-500/10 -translate-x-full group-hover/alert:translate-x-full transition-transform duration-700"></div>
                                <p className="text-red-400 font-bold text-sm uppercase tracking-widest text-center flex items-center justify-center gap-2">
                                    <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                                    {misconception.status}
                                </p>
                            </div>
                        </div>
                    </RevealWrapper>

                    {/* Right Side: The Algorithm Truth */}
                    <RevealWrapper delay={0.4} className="h-full">
                        <div className="bg-[#0a120e]/80 backdrop-blur-xl border border-emerald-900/30 p-8 lg:p-10 rounded-3xl h-full relative overflow-hidden group hover:border-emerald-500/40 hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 blur-[60px] rounded-full group-hover:bg-emerald-500/20 group-hover:scale-150 transition-all duration-700"></div>

                            {/* Subtle data grid effect */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 mix-blend-overlay pointer-events-none"></div>

                            <div className="flex justify-between items-start mb-8 relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-emerald-950/50 border border-emerald-800/50 flex items-center justify-center text-emerald-500 shadow-inner group-hover:-rotate-12 transition-transform duration-300">
                                    <TrendingUp size={32} />
                                </div>
                                <span className="font-mono text-xs text-emerald-500/50 tracking-widest font-bold">SYSTEM_ACT</span>
                            </div>

                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 relative z-10 group-hover:text-emerald-50 transition-colors">{truth.title}</h3>

                            <div className="relative z-10">
                                <p className="text-gray-300 text-lg leading-relaxed font-light mb-4">
                                    {truth.description.split('如果你的')[0]}
                                </p>
                                <p className="text-gray-300 text-lg leading-relaxed font-light bg-black/30 p-5 rounded-2xl border border-white/5 shadow-inner">
                                    如果你的<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 font-bold drop-shadow-md">图丑、视频无聊、收音带回声</span>，没人点，算法就会惩罚你，你的广告费就会成倍飙升！你的钱，被算法“吃掉”了。
                                </p>
                            </div>
                        </div>
                    </RevealWrapper>

                </div>
            </div>
        </section>
    );
}
