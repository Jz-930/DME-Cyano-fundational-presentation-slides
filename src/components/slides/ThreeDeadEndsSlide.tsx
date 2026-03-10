'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';

export function ThreeDeadEndsSlide() {
    const { title, points } = content.threeDeadEnds;

    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center p-8 bg-black overflow-hidden z-10 border-t border-white/5">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00F0FF10_1px,transparent_1px),linear-gradient(to_bottom,#00F0FF10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

            <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col items-center">
                <RevealWrapper className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">
                        {title}
                    </h2>
                </RevealWrapper>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {points?.map((point, idx) => (
                        <RevealWrapper key={idx} delay={0.2 + idx * 0.1}>
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl h-full flex flex-col items-start hover:border-[var(--color-brand)]/50 transition-colors duration-300 group">
                                <span className="text-5xl font-heading font-black text-white/10 group-hover:text-[var(--color-brand)]/20 transition-colors mb-4">
                                    0{idx + 1}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {point.title}
                                </h3>
                                <p className="text-gray-400 font-light leading-relaxed">
                                    {point.desc}
                                </p>
                            </div>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
