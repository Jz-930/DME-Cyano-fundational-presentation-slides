'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { Calculator, TrendingUp, HandCoins } from 'lucide-react';

export function ROICalcSlide() {
    const { title, subtitle, oldWay, newWay } = content.closing.roi;

    return (
        <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center p-8 bg-[#0a0a0a] z-10 border-t border-white/5 overflow-hidden">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 blur-[200px] rounded-full mix-blend-screen pointer-events-none" />

            <RevealWrapper className="z-10 relative text-center mb-16 pt-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 text-white leading-tight drop-shadow-md" dangerouslySetInnerHTML={{ __html: title }} />
                <p className="text-gray-400 text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto">
                    {subtitle}
                </p>
            </RevealWrapper>

            <div className="max-w-6xl mx-auto w-full z-10 relative">
                <div className="bg-[#050505]/80 border border-red-900/30 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row backdrop-blur-xl">

                    {/* Left: The Old Way Costs */}
                    <RevealWrapper delay={0.2} className="w-full md:w-1/2 p-10 md:p-12 border-b md:border-b-0 md:border-r border-red-900/20 bg-black/40 relative group">
                        {/* Subtle noise pattern overlay possible */}
                        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay"></div>

                        <h3 className="text-2xl font-bold text-gray-400 mb-8 flex items-center tracking-wide">
                            {oldWay.title}
                        </h3>

                        <div className="space-y-8 relative z-10">
                            {oldWay.costs.map((cost, index) => (
                                <div key={index} className="flex justify-between items-end border-b border-gray-800/50 pb-3 group/item hover:border-red-900/50 transition-colors">
                                    <div className="pr-4">
                                        <p className="text-gray-200 font-bold text-lg mb-1 group-hover/item:text-white transition-colors">{cost.name}</p>
                                        <p className="text-gray-500 text-sm font-light">{cost.desc}</p>
                                    </div>
                                    <p className="text-red-400/80 font-mono font-bold whitespace-nowrap text-lg tracking-wider group-hover/item:text-red-400 transition-colors">{cost.price}</p>
                                </div>
                            ))}

                            <div className="bg-red-950/20 border border-red-900/30 p-6 rounded-2xl flex justify-between items-center mt-10 shadow-inner">
                                <span className="text-gray-400 font-medium tracking-wide uppercase text-sm">{oldWay.totalLabel}</span>
                                <span className="text-3xl text-red-500 font-black font-mono drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]">{oldWay.totalPrice}</span>
                            </div>
                        </div>
                    </RevealWrapper>

                    {/* Right: The New Way ROI */}
                    <RevealWrapper delay={0.4} className="w-full md:w-1/2 p-10 md:p-12 bg-gradient-to-br from-red-900/20 via-[#0a0505] to-[#050202] relative overflow-hidden group">

                        {/* Ambient inner glow */}
                        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-600/10 blur-[100px] rounded-full group-hover:bg-red-600/20 transition-colors duration-1000"></div>

                        <h3 className="text-2xl font-bold text-red-400 mb-8 flex items-center tracking-wide">
                            <TrendingUp className="mr-4 text-red-500" size={28} />
                            {newWay.title}
                        </h3>

                        <div className="space-y-8 relative z-10">
                            <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: newWay.description }} />

                            <div className="bg-gradient-to-r from-red-950/40 to-black/40 border border-red-500/30 p-8 rounded-2xl relative overflow-hidden mt-10 shadow-[0_0_30px_rgba(239,68,68,0.1)] group-hover:shadow-[0_0_50px_rgba(239,68,68,0.15)] transition-shadow duration-500">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-red-400 to-red-600 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                                <div className="absolute -right-4 -bottom-4 opacity-5 text-red-500 rotate-12">
                                    <HandCoins size={120} />
                                </div>

                                <HandCoins size={36} className="text-red-400 mb-5 relative z-10" />
                                <h4 className="text-white font-bold text-2xl mb-3 relative z-10">{newWay.roiBox.title}</h4>
                                <p className="text-gray-300 text-base leading-relaxed relative z-10" dangerouslySetInnerHTML={{ __html: newWay.roiBox.desc }} />
                            </div>
                        </div>
                    </RevealWrapper>

                </div>
            </div>

        </section>
    );
}
