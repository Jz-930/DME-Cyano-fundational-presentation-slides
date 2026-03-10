'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';

export function ShortVideoFormula() {
    const { title, steps } = content.shortVideoFormula;

    return (
        <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center p-8 bg-[#050505] overflow-hidden z-10 border-t border-white/5">
            {/* Dark abstract bg */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-900/40 via-black to-black opacity-80 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto w-full z-10 relative flex flex-col items-center">
                <RevealWrapper className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 text-white leading-tight drop-shadow-xl">
                        {title.split('：')[0]}：<br />
                        {title.split('：')[1]?.split('的')[0]}的
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            {title.split('的')[1]}
                        </span>
                    </h2>
                </RevealWrapper>

                <div className="flex flex-col md:flex-row gap-6 lg:gap-8 w-full z-10 relative items-stretch justify-center perspective-[1000px]">

                    {steps.map((step: { phase: string, desc: string }, idx: number) => {
                        // Determine styling based on index to match original design intent
                        let colorBase = "red";
                        let bgClass = "bg-red-950/20 border-red-900/40 hover:border-red-500/50";
                        let lineClass = "bg-gradient-to-b from-red-500 via-rose-500 to-transparent shadow-[0_0_15px_rgba(239,68,68,0.5)]";
                        let labelClass = "text-red-400";
                        let quoteBg = "text-red-300";

                        // Default to cyan for the first step to match original text
                        if (idx === 0) {
                            colorBase = "red";
                        } else if (idx === 1) {
                            colorBase = "blue";
                            bgClass = "bg-blue-950/20 border-blue-900/40 hover:border-blue-500/50 mt-0 md:mt-12";
                            lineClass = "bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)]";
                            labelClass = "text-blue-400";
                            quoteBg = "text-blue-300";
                        } else if (idx === 2) {
                            colorBase = "emerald";
                            bgClass = "bg-emerald-950/20 border-emerald-900/40 hover:border-emerald-500/50 mt-0 md:mt-24";
                            lineClass = "bg-gradient-to-b from-emerald-500 via-teal-500 to-transparent shadow-[0_0_15px_rgba(16,185,129,0.5)]";
                            labelClass = "text-emerald-400";
                            quoteBg = "text-emerald-300";
                        }

                        // Split step description into main point and example/quote
                        const [mainPoint, ...quoteParts] = step.desc.split('“');
                        const quote = quoteParts.length > 0 ? `“${quoteParts.join('“')}` : '';

                        return (
                            <RevealWrapper key={idx} delay={0.2 + idx * 0.2} className="flex-1">
                                <div className={`backdrop-blur-xl border p-8 lg:p-10 rounded-[2rem] h-full relative overflow-hidden group hover:-translate-y-4 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] ${bgClass} flex flex-col`}>

                                    {/* Neon side line */}
                                    <div className={`absolute top-0 left-0 w-2 h-full ${lineClass} group-hover:w-3 transition-all duration-500`}></div>

                                    {/* Inner glow on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-${colorBase}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                    <div className="flex flex-col mb-8 relative z-10">
                                        <span className={`${labelClass} font-mono font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2 group-hover:tracking-[0.3em] transition-all duration-300`}>
                                            <span className={`w-1.5 h-1.5 rounded-full bg-${colorBase}-500`}></span>
                                            {step.phase.split(' ')[0] === '前' ? 'The Hook' : step.phase.split(' ')[0] === '中间' ? 'The Value' : 'The CTA'}
                                        </span>
                                        <h3 className="text-3xl lg:text-4xl font-black text-white drop-shadow-md">{step.phase}</h3>
                                    </div>

                                    <p className="text-gray-200 font-bold text-lg lg:text-xl mb-6 leading-relaxed relative z-10 flex-grow">
                                        {mainPoint}
                                    </p>

                                    {quote && (
                                        <div className="relative z-10 group/quote mt-auto">
                                            <div className="absolute -left-3 top-[-10px] text-5xl opacity-20 font-serif leading-none">&ldquo;</div>
                                            <div className={`bg-black/60 p-5 rounded-2xl border border-white/10 italic ${quoteBg} text-sm lg:text-base leading-relaxed shadow-inner group-hover/quote:bg-black/80 transition-colors duration-300 relative z-10`}>
                                                {quote}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </RevealWrapper>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}
