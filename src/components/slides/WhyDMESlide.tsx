'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';

export function WhyDMESlide() {
    const { title, market, dme, team } = content.closing.whyUs;

    return (
        <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center p-8 bg-[#030712] z-10 border-t border-white/5 overflow-hidden">

            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-900/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

            <RevealWrapper className="z-10 relative text-center mb-16 pt-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 text-white leading-tight drop-shadow-md" dangerouslySetInnerHTML={{ __html: title }} />
            </RevealWrapper>

            <div className="max-w-6xl mx-auto w-full z-10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <RevealWrapper delay={0.2} className="space-y-8">
                        <div className="bg-red-950/20 border border-red-900/30 p-8 rounded-3xl relative overflow-hidden group hover:bg-red-950/40 transition-colors">
                            <h3 className="text-2xl font-bold text-red-500 mb-4">{market.title}</h3>
                            <p className="text-gray-300 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: market.description }} />
                        </div>

                        <div className="bg-cyan-950/20 border border-cyan-500/30 p-8 rounded-3xl relative overflow-hidden group hover:bg-cyan-950/40 transition-colors shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                            <h3 className="text-2xl font-bold text-cyan-400 mb-4">{dme.title}</h3>
                            <p className="text-gray-300 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: dme.description }} />
                        </div>
                    </RevealWrapper>

                    <RevealWrapper delay={0.4} className="relative">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            {team.map((member, index) => (
                                <div key={index} className="bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center relative overflow-hidden group min-h-[160px]">
                                    <div className={`absolute inset-0 bg-${member.color}-500/10 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                    <div className={`text-${member.color}-400 font-bold mb-3 text-lg`}>{member.title}</div>
                                    <p className="text-sm text-gray-400 leading-relaxed max-w-[200px]">{member.desc}</p>
                                </div>
                            ))}

                        </div>
                    </RevealWrapper>

                </div>
            </div>

        </section>
    );
}
