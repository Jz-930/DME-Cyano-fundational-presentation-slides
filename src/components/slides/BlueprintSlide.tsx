'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';

export function BlueprintSlide() {
    const { title, description, steps } = content.functionalWeb.blueprint;

    // Define colors for each step mapping
    const stepColors = [
        { border: 'border-amber-500/30', shadow: 'shadow-[0_0_30px_rgba(245,158,11,0.15)]', bg: 'bg-amber-500/20', text: 'text-amber-500', innerText: 'text-amber-400', tagTag: 'text-amber-500 border-amber-500/20' },
        { border: 'border-cyan-500/30', shadow: 'shadow-[0_0_30px_rgba(6,182,212,0.15)]', bg: 'bg-cyan-500/20', text: 'text-cyan-400', innerText: 'text-cyan-400', tagTag: 'text-cyan-400 border-cyan-500/20' },
        { border: 'border-emerald-500/30', shadow: 'shadow-[0_0_30px_rgba(16,185,129,0.15)]', bg: 'bg-emerald-500/20', text: 'text-emerald-400', innerText: 'text-emerald-400', tagTag: 'text-emerald-400 border-emerald-500/20' },
        { border: 'border-indigo-500/30', shadow: 'shadow-[0_0_30px_rgba(99,102,241,0.15)]', bg: 'bg-indigo-500/20', text: 'text-indigo-400', innerText: 'text-indigo-400', tagTag: 'text-indigo-400 border-indigo-500/20' },
    ];

    return (
        <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center p-8 bg-[#050505] overflow-hidden z-10 border-t border-white/5">

            {/* The Money Machine Blueprint Image */}
            <div
                className="absolute inset-0 z-0 mix-blend-screen opacity-100"
                style={{
                    backgroundImage: "url('/images/blueprint_machine_1773117702717.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#02050a] via-[#02050a]/80 to-[#02050a]/40" />
            <div className="absolute inset-0 bg-[url('/images/grid_pattern.svg')] opacity-[0.03] bg-repeat pointer-events-none"></div>

            <RevealWrapper className="z-10 relative text-center mb-16 pt-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-white leading-tight drop-shadow-xl">
                    {title.split('，')[0]}，<br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                        {title.split('，')[1]}
                    </span>
                </h2>
                <p className="text-gray-300 text-lg lg:text-xl font-light max-w-2xl mx-auto shadow-black drop-shadow-lg">
                    {description}
                </p>
            </RevealWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full z-10 relative">
                {steps.map((step, index) => {
                    const colors = stepColors[index % stepColors.length];
                    return (
                        <RevealWrapper
                            key={index}
                            delay={0.2 + (index * 0.1)}
                            className={`bg-[#0a0f1a]/80 backdrop-blur-xl border ${colors.border} p-8 rounded-3xl h-full flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500 group relative overflow-hidden`}
                        >
                            {/* Inner glow on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-${colors.text.split('-')[1]}-500/10 transition-colors duration-500 pointer-events-none`}></div>

                            <div className="relative z-10">
                                <div className={`${colors.bg} w-12 h-12 rounded-full flex items-center justify-center ${colors.text} font-bold text-xl mb-6 shadow-inner border border-white/5 group-hover:scale-110 transition-transform`}>
                                    {step.id}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light group-hover:text-gray-300 transition-colors">
                                    {step.description}
                                </p>
                            </div>
                            <span className={`${colors.tagTag} font-mono text-xs uppercase tracking-widest border-t pt-4 block relative z-10`}>
                                {step.tag}
                            </span>
                        </RevealWrapper>
                    );
                })}
            </div>

        </section>
    );
}
