'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { FileDown, Sparkles, Loader2 } from 'lucide-react';

export function AutoProposalSlide() {
    const { title, before, after } = content.cyanoAi.autoProposal;

    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center p-8 bg-[#030712] overflow-hidden z-10 border-t border-white/5">

            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full z-10 relative flex flex-col items-center">
                <RevealWrapper className="text-center mb-16 pt-10">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading mb-6 text-white leading-tight drop-shadow-lg">
                        {title.split('：')[0]}：<br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                            {title.split('：')[1]}
                        </span>
                    </h2>
                </RevealWrapper>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 relative h-full w-full">

                    {/* The Pain */}
                    <RevealWrapper delay={0.2} className="space-y-8">
                        <h3 className="text-3xl font-bold text-white mb-4 relative inline-block">
                            {before.title}
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-red-500 to-transparent rounded-full"></span>
                        </h3>
                        <ol className="list-decimal list-inside space-y-5 text-gray-400 text-lg lg:text-xl font-light">
                            {before.steps.map((step, index) => (
                                <li key={index} className="leading-relaxed hover:text-gray-300 transition-colors pl-2">
                                    {step}
                                </li>
                            ))}
                        </ol>

                        <div className="bg-red-950/30 border border-red-900/50 p-6 rounded-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors pointer-events-none"></div>
                            <p className="text-red-400 text-base md:text-lg font-bold flex items-center shadow-sm">
                                <span className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 shadow-lg shadow-red-500/30 shrink-0">!</span>
                                {before.warning}
                            </p>
                        </div>
                    </RevealWrapper>

                    {/* The Cyano Solution */}
                    <RevealWrapper delay={0.4} className="h-full">
                        <div className="bg-[#050a15]/80 backdrop-blur-2xl border-2 border-indigo-500/30 rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.15)] group hover:border-indigo-500/50 transition-colors duration-500">
                            {/* Glow effect */}
                            <div className="absolute -inset-20 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 blur-[50px] pointer-events-none"></div>

                            {/* Mock Generation UI */}
                            <div className="bg-[#02050a] rounded-2xl border border-white/10 p-6 mb-10 font-mono text-sm shadow-inner relative overflow-hidden group/mock">
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 animate-pulse"></div>

                                <div className="flex items-center text-cyan-400 mb-5 border-b border-white/5 pb-4">
                                    <Loader2 className="animate-spin mr-3" size={18} />
                                    <span className="font-bold tracking-wide">{after.mockUi[0]}</span>
                                </div>

                                <div className="space-y-3 pl-2 border-l-2 border-indigo-500/30">
                                    <p className="text-gray-500 group-hover/mock:text-gray-400 transition-colors">{after.mockUi[1]}</p>
                                    <p className="text-gray-500 group-hover/mock:text-gray-400 transition-colors">{after.mockUi[2]}</p>
                                    <p className="text-white flex items-center font-medium bg-indigo-950/30 p-2 rounded -ml-2">
                                        <Sparkles size={16} className="text-indigo-400 mr-2 animate-pulse" />
                                        {after.mockUi[3]}
                                    </p>
                                </div>
                                <p className="text-emerald-400 font-bold mt-5 text-sm md:text-base border border-emerald-500/20 bg-emerald-950/20 px-3 py-2 rounded">
                                    {after.mockUi[4]}
                                </p>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <span className="bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-lg mr-3 text-sm tracking-widest uppercase">After</span>
                                {after.title}
                            </h3>
                            <ul className="space-y-5 text-gray-300 font-light text-lg">
                                {after.steps.map((step, index) => (
                                    <li key={index} className="flex items-start group/step">
                                        <span className="text-indigo-400 font-bold mr-4 mt-1 text-xl group-hover/step:translate-x-1 transition-transform">»</span>
                                        <span className="group-hover/step:text-white transition-colors leading-relaxed">{step}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full mt-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:from-indigo-500 hover:to-purple-500 transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transform hover:-translate-y-1">
                                <FileDown size={22} className="animate-bounce" /> {after.sampleText}
                            </button>

                        </div>
                    </RevealWrapper>

                </div>
            </div>
        </section>
    );
}
