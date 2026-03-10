'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { Search, BrainCircuit, MessageSquareText } from 'lucide-react';

export function KnowledgeBaseSlide() {
    const { title, traditional, cyano, mockChat } = content.cyanoAi.knowledgeBase;

    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center p-8 bg-[#030712] overflow-hidden z-10 border-t border-white/5">

            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full z-10 relative flex flex-col items-center">
                <RevealWrapper className="text-center mb-16 pt-10">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading mb-6 text-white leading-tight drop-shadow-lg">
                        {title.split('：')[0]}：<br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                            {title.split('：')[1]}
                        </span>
                    </h2>
                </RevealWrapper>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 relative h-full w-full">

                    {/* Left Side: Traditional vs Cyano */}
                    <RevealWrapper delay={0.2} className="space-y-12">

                        <div className="bg-[#050a15]/50 border border-white/5 p-8 rounded-3xl relative">
                            {/* Strikethrough effect on title */}
                            <div className="absolute top-12 left-8 right-8 h-1 bg-gradient-to-r from-red-600 to-transparent -rotate-1 opacity-70"></div>
                            <h3 className="text-2xl font-bold text-gray-500 mb-6">{traditional.title}</h3>
                            <p className="text-gray-400 text-lg font-light leading-relaxed">
                                “{traditional.description[0]}”<br /><br />
                                {traditional.description[1]}
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-cyan-950/40 to-[#030712] border border-cyan-500/30 p-8 rounded-3xl relative shadow-[0_0_30px_rgba(6,182,212,0.1)] group hover:shadow-[0_0_50px_rgba(6,182,212,0.2)] transition-shadow duration-500">
                            {/* Accent line */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3/4 bg-gradient-to-b from-cyan-400 to-transparent rounded-r-lg"></div>

                            <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                                <div className="bg-cyan-500/20 p-2 rounded-xl mr-4 group-hover:bg-cyan-500/30 transition-colors">
                                    <BrainCircuit className="text-cyan-400" size={28} />
                                </div>
                                {cyano.title}
                            </h3>
                            <p className="text-gray-300 text-lg font-light leading-relaxed">
                                {cyano.description[0].split('全部丢进 Cyano 的企业专属知识库 (RAG)。')[0]}
                                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold block mt-2 text-xl">全部丢进 Cyano 的企业专属知识库 (RAG)。</strong>
                                <span className="block mt-4">{cyano.description[1]}</span>
                            </p>
                        </div>
                    </RevealWrapper>

                    {/* Right Side: Cyano Chat Mockup */}
                    <RevealWrapper delay={0.4} className="relative h-[600px]">
                        <div className="absolute inset-0 bg-[#0a0f1a]/90 backdrop-blur-2xl border border-cyan-500/30 rounded-3xl flex flex-col overflow-hidden shadow-[0_0_60px_rgba(6,182,212,0.15)] group hover:border-cyan-500/50 transition-colors duration-500">

                            {/* Inner glow */}
                            <div className="absolute -inset-10 bg-gradient-to-br from-cyan-500/10 to-transparent blur-[40px] pointer-events-none"></div>

                            <div className="bg-[#02050a]/80 border-b border-cyan-500/20 p-5 flex items-center gap-4 relative z-10">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex justify-center items-center shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                                    <span className="text-[#02050a] font-black text-lg">C</span>
                                </div>
                                <div>
                                    <p className="text-white font-bold tracking-wide">{mockChat.botName}</p>
                                    <p className="text-emerald-400 text-xs flex items-center mt-0.5 font-mono">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 flex items-center justify-center mr-1.5 shadow-[0_0_8px_rgba(16,185,129,0.8)]">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                                        </span>
                                        {mockChat.status}
                                    </p>
                                </div>
                            </div>

                            <div className="flex-1 p-6 lg:p-8 flex flex-col gap-6 overflow-hidden relative z-10">
                                {/* Scrollable area - simplified for presentation to avoid actual scrolling */}
                                <div className="flex flex-col gap-8 w-full">
                                    {/* User Message */}
                                    <div className="flex gap-4 self-end w-[85%] flex-row-reverse">
                                        <div className="w-10 h-10 rounded-full border border-gray-600 bg-gray-800 flex-shrink-0 flex items-center justify-center text-xs font-bold text-gray-300">Me</div>
                                        <div className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 text-white p-5 rounded-2xl rounded-tr-sm text-sm lg:text-base leading-relaxed shadow-lg">
                                            {mockChat.userMessage}
                                        </div>
                                    </div>

                                    {/* Bot Message */}
                                    <div className="flex gap-4 w-[95%]">
                                        <div className="w-10 h-10 rounded-full border border-cyan-500/50 bg-[#02050a] flex-shrink-0 flex items-center justify-center text-cyan-400 font-bold text-sm shadow-[0_0_15px_rgba(6,182,212,0.3)]">C</div>
                                        <div className="bg-[#05101f] border border-cyan-900 text-white p-6 rounded-2xl rounded-tl-sm text-sm lg:text-base leading-relaxed shadow-xl">
                                            <p className="mb-5 text-gray-300">
                                                {mockChat.botResponse.reference.split('Equitable Life 2025 Underwriting Guide (Page 42 - Cardiovascular)')[0]}
                                                <strong className="text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/50">Equitable Life 2025 Underwriting Guide (Page 42 - Cardiovascular)</strong>
                                                {mockChat.botResponse.reference.split('Equitable Life 2025 Underwriting Guide (Page 42 - Cardiovascular)')[1]}
                                            </p>
                                            <ul className="list-disc pl-5 mb-6 text-gray-300 space-y-3">
                                                {mockChat.botResponse.bullets.map((bullet, index) => {
                                                    // Simple highlighting logic based on content
                                                    if (bullet.includes('延期 (Postpone)')) {
                                                        const parts = bullet.split('延期 (Postpone) 直至症状稳定6个月');
                                                        return (
                                                            <li key={index}>
                                                                {parts[0]}<strong className="text-red-400 bg-red-950/30 px-1 rounded">延期 (Postpone) 直至症状稳定6个月</strong>{parts[1]}
                                                            </li>
                                                        );
                                                    }
                                                    if (bullet.includes('Sub-standard')) {
                                                        const parts = bullet.split('Sub-standard (加费评级，约 +50% 至 +100% 额外费率)');
                                                        return (
                                                            <li key={index}>
                                                                {parts[0]}<strong className="text-amber-400 bg-amber-950/30 px-1 rounded">Sub-standard (加费评级，约 +50% 至 +100% 额外费率)</strong>{parts[1]}
                                                            </li>
                                                        );
                                                    }
                                                    return <li key={index}>{bullet}</li>;
                                                })}
                                            </ul>
                                            <div className="bg-[#02050a] p-4 rounded-xl border border-white/5 relative group/source">
                                                {/* Hover effect for source link */}
                                                <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover/source:opacity-100 transition-opacity rounded-xl"></div>
                                                <p className="text-xs text-gray-500 mb-2 flex items-center uppercase tracking-wider font-bold">
                                                    <Search size={14} className="mr-2 text-cyan-500" /> Source Reference
                                                </p>
                                                <p className="text-cyan-100/70 text-sm italic border-l-2 border-cyan-500/30 pl-3 py-1">
                                                    {mockChat.botResponse.source}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#02050a]/80 p-5 lg:p-6 border-t border-white/5 relative z-10">
                                <div className="bg-[#050a15] rounded-full flex items-center px-6 py-4 border border-white/10 group-hover:border-cyan-500/50 transition-colors shadow-inner">
                                    <MessageSquareText size={20} className="text-gray-500 mr-4 group-hover:text-cyan-500 transition-colors" />
                                    <span className="text-gray-500 font-mono text-sm tracking-wide group-hover:text-gray-400 transition-colors">{mockChat.inputPlaceholder}</span>
                                </div>
                            </div>

                        </div>
                    </RevealWrapper>

                </div>
            </div>
        </section>
    );
}
