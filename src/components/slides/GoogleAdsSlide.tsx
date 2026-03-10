'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { Search } from 'lucide-react';

export function GoogleAdsSlide() {
    const { title, points, mockSearch } = content.platforms.google;

    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center p-8 bg-[#00050A] overflow-hidden z-10 border-t border-white/5 pt-20 pb-20">
            {/* Ambient Base Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black opacity-60"></div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">

                {/* Left Side: Mock Search Bar Visual */}
                <RevealWrapper className="lg:col-span-5 flex justify-center w-full">
                    <div className="relative w-full max-w-md group">
                        {/* Glow behind */}
                        <div className="absolute inset-0 bg-blue-500/30 blur-[60px] rounded-full transition-opacity duration-700 group-hover:opacity-70" />

                        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-6 rounded-[2rem] shadow-2xl relative transition-transform duration-500 group-hover:scale-[1.02]">
                            {/* Search Input Mock */}
                            <div className="flex items-center gap-4 bg-black/60 border border-white/5 p-4 rounded-full mb-8 shadow-inner">
                                <Search className="text-blue-400" size={24} />
                                <span className="text-white font-mono opacity-80 typing-animation overflow-hidden whitespace-nowrap border-r-2 border-blue-400 pr-2">
                                    {mockSearch?.keyword || "Search"}
                                </span>
                            </div>

                            {/* Mock Ad Result */}
                            <div className="bg-gradient-to-r from-blue-900/40 to-transparent border-l-4 border-blue-400 p-5 rounded-r-2xl mb-4 relative overflow-hidden">
                                <div className="absolute inset-0 bg-blue-400/5 shimmer-effect"></div>
                                <p className="text-xs text-blue-300 font-bold mb-2 uppercase tracking-wider">Sponsored</p>
                                <h4 className="text-lg text-white font-bold mb-2 cursor-pointer hover:underline text-blue-100">{mockSearch?.adResult.title}</h4>
                                <p className="text-sm text-gray-400 leading-relaxed">{mockSearch?.adResult.desc}</p>
                            </div>

                            {/* Mock Organic Result */}
                            <div className="p-5 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500">
                                <h4 className="text-lg text-white font-bold mb-2">{mockSearch?.organicResult.title}</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">{mockSearch?.organicResult.desc}</p>
                            </div>
                        </div>

                        {/* Price Tag Overlay */}
                        <div className="absolute -right-8 -bottom-8 bg-black/80 backdrop-blur-xl border border-blue-500/30 text-white font-bold px-8 py-5 rounded-3xl shadow-[0_0_30px_rgba(59,130,246,0.2)] transform rotate-6 flex flex-col items-center">
                            <span className="text-xs text-blue-400 uppercase tracking-widest mb-1">{mockSearch?.priceTag.label}</span>
                            <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{mockSearch?.priceTag.price}</span>
                        </div>
                    </div>
                </RevealWrapper>

                {/* Right Side: Content */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                    <RevealWrapper delay={0.2} className="mb-10">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 font-mono text-xs rounded-full border border-blue-500/20 mb-6 uppercase tracking-widest shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                            <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
                            Platform 01 / Search Intent
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-white leading-tight">
                            {title.split('：')[0]}：<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                {title.split('：')[1]}
                            </span>
                        </h2>
                    </RevealWrapper>

                    <div className="space-y-6">
                        {points?.map((point, idx) => (
                            <RevealWrapper key={idx} delay={0.3 + idx * 0.1}>
                                <div className="flex items-start bg-white/5 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
                                    <div className="text-blue-400 mr-6 font-mono font-bold text-xl opacity-50 shrink-0 mt-1">
                                        0{idx + 1}
                                    </div>
                                    <div>
                                        {/* Split bullet points by colon or standard punctuation to style the heading vs body separately if possible */}
                                        {point.includes('：') ? (
                                            <>
                                                <h3 className="text-xl font-bold text-white mb-2">{point.split('：')[0]}</h3>
                                                <p className="text-gray-400 text-base font-light leading-relaxed">
                                                    {point.substring(point.indexOf('：') + 1)}
                                                </p>
                                            </>
                                        ) : (
                                            <p className="text-gray-300 text-lg leading-relaxed">{point}</p>
                                        )}
                                    </div>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
