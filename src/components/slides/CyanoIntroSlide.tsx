'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';

export function CyanoIntroSlide() {
    const { intro } = content.cyanoAi;

    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center p-8 bg-[#030712] overflow-hidden z-10 border-t border-white/5">

            {/* Holographic Brain AI Image */}
            <div
                className="absolute inset-0 z-0 opacity-40 mix-blend-screen scale-[1.05] transition-transform duration-[10s] hover:scale-110"
                style={{
                    backgroundImage: "url('/images/ai_hologram_brain_1773117670475.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Dark vignette overlay */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#030712_80%)]" />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/50" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full z-10 relative">

                {/* Left Side: Problem Statement */}
                <RevealWrapper className="lg:pr-12">
                    <div className="inline-block px-4 py-2 bg-indigo-500/10 text-indigo-400 font-mono text-sm rounded-full border border-indigo-500/20 mb-6 font-bold shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                        Module 05 / Cyano AI
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading mb-6 text-white leading-tight drop-shadow-lg">
                        {intro.title.split('ChatGPT')[0]}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">ChatGPT</span> <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                            {intro.title.split('ChatGPT')[1]}
                        </span>
                    </h2>

                    <div className="space-y-6 mt-8">
                        {intro.painPoints.map((point, index) => (
                            <div key={index} className="bg-red-950/40 backdrop-blur-md border border-red-900/60 p-6 rounded-2xl relative shadow-[0_0_20px_rgba(239,68,68,0.1)] hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-shadow">
                                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-bl-xl shadow-md">Pain Point {index + 1}</div>
                                <h3 className="text-xl font-bold text-red-400 mb-3">{point.title}</h3>
                                <p className="text-red-200/80 text-sm md:text-base font-light leading-relaxed">{point.desc}</p>
                            </div>
                        ))}
                    </div>
                </RevealWrapper>

                {/* Right Side: Introduction of Cyano */}
                <RevealWrapper delay={0.4} className="relative group perspective-[1000px]">
                    {/* Background glow that intensifies on hover */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-[2.5rem] blur-[30px] opacity-30 group-hover:opacity-70 transition duration-1000"></div>

                    <div className="bg-[#050a15]/80 backdrop-blur-3xl border border-indigo-500/30 p-10 md:p-14 rounded-[2.5rem] relative z-10 flex flex-col items-center text-center shadow-2xl transform-gpu group-hover:rotate-y-[2deg] group-hover:rotate-x-[2deg] transition-transform duration-700">
                        {/* Inner technical styling */}
                        <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-cyan-500/50 rounded-tl-xl"></div>
                        <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-indigo-500/50 rounded-br-xl"></div>

                        <div className="mb-10 relative">
                            <span className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-blue-500 to-indigo-600 font-heading drop-shadow-sm filter">
                                {intro.solution.title}
                            </span>
                            <p className="text-cyan-400 font-mono text-sm tracking-widest mt-4 uppercase border border-cyan-500/30 inline-block px-4 py-1.5 rounded-full bg-cyan-950/30">
                                {intro.solution.subtitle}
                            </p>
                        </div>

                        <div className="text-gray-300 text-lg font-light leading-relaxed mb-10 border-t border-b border-indigo-500/20 py-8 relative">
                            {/* Decorative line accents */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

                            <p>
                                {intro.solution.description[0]}<br />
                                <strong className="text-white bg-indigo-900/30 px-2 py-0.5 rounded text-xl inline-block my-2">
                                    {intro.solution.description[1]}
                                </strong><br />
                                {intro.solution.description[2]}
                            </p>
                        </div>

                        <div className="w-full grid grid-cols-2 gap-6">
                            {intro.solution.tags.map((tag, index) => (
                                <div key={index} className="bg-[#02050a]/60 border border-indigo-500/30 rounded-2xl p-5 shadow-inner hover:border-cyan-500/50 transition-colors group/tag">
                                    <p className={`${index === 0 ? 'text-indigo-400' : 'text-cyan-400'} text-xs uppercase tracking-widest mb-2 font-mono group-hover/tag:text-white transition-colors`}>{tag.label}</p>
                                    <p className="text-white font-bold text-lg">{tag.value}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </RevealWrapper>

            </div>

        </section>
    );
}
