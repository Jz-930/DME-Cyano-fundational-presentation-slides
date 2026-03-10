'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';

export function TrafficIntro() {
    const { tag, title, description, quadrants } = content.trafficIntro;

    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center p-8 bg-[#02050a] overflow-hidden z-10 border-t border-white/5 pt-20 pb-20">
            {/* Platform Abstract Neural Network Background */}
            <div
                className="absolute inset-0 z-0 opacity-20 mix-blend-screen scale-110"
                style={{
                    backgroundImage: "url('/images/platforms_abstract_1773117656917.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            {/* Deep blue tech gradient overlay */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/30 via-black to-[#050a15]/90 pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full z-10 relative">
                <RevealWrapper className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 font-mono text-xs rounded-full border border-blue-500/20 mb-6 font-bold shadow-lg tracking-widest uppercase gap-2 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        {tag}
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-white leading-tight drop-shadow-xl" dangerouslySetInnerHTML={{ __html: title }} />
                    <p className="text-gray-300 text-xl max-w-2xl mx-auto font-light leading-relaxed bg-black/40 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
                        {description}
                    </p>
                </RevealWrapper>

                {/* Four Quadrants Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full perspective-[1000px]">
                    {quadrants.map((q, index) => (
                        <RevealWrapper key={index} delay={0.2 * (index + 1)} className="h-full">
                            <div className={`bg-[#050a15]/80 backdrop-blur-xl border border-${q.color}-500/20 p-8 lg:p-10 rounded-3xl h-full group hover:-translate-y-2 transition-transform duration-500 hover:border-${q.color}-500/50 hover:bg-[#0a1225]/90 shadow-xl hover:shadow-[0_20px_40px_rgba(var(--color-${q.color}-500-rgb),0.15)] relative overflow-hidden flex flex-col justify-between`}>
                                <div className={`absolute ${index % 2 === 0 ? 'top-0' : 'bottom-0'} right-0 w-32 h-32 bg-${q.color}-500/10 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-700 pointer-events-none`}></div>

                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className={`text-2xl lg:text-3xl font-bold text-white group-hover:text-${q.color}-100 transition-colors`}>{q.title}</h3>
                                        <div className="flex gap-2 flex-wrap justify-end ml-4">
                                            {q.platform.split(' / ').map((p, pIndex) => (
                                                <span key={pIndex} className={`px-3 py-1.5 bg-${q.color}-500/10 text-${q.color}-400 text-xs rounded-full font-mono uppercase border border-${q.color}-500/20 font-bold shadow-sm whitespace-nowrap flex-shrink-0`}>
                                                    {p}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-base lg:text-lg leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">{q.desc}</p>
                                </div>
                            </div>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
