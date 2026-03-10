'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';

export function ClosingOfferSlide() {
    const { title, subtitle, description, beta } = content.closing.offer;

    return (
        <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center p-8 bg-black overflow-hidden border-t border-white/5 py-24">

            {/* Dramatic central light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.15)_0%,_transparent_70%)] pointer-events-none mix-blend-screen mix-blend-lighten" />

            <div className="max-w-4xl mx-auto w-full z-10 relative text-center">

                <RevealWrapper>
                    <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">{subtitle}</p>
                    <h2 className="text-5xl md:text-7xl font-bold font-heading mb-8 text-white leading-tight" dangerouslySetInnerHTML={{ __html: title }} />

                    <p className="text-gray-300 text-xl md:text-2xl font-light mb-16 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />

                    <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-10 rounded-3xl max-w-2xl mx-auto shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                        <h3 className="text-2xl font-bold text-white mb-6 relative z-10">{beta.title}</h3>
                        <p className="text-gray-400 text-sm mb-8 relative z-10 leading-relaxed max-w-lg mx-auto" dangerouslySetInnerHTML={{ __html: beta.description }} />

                        <div className="w-48 h-48 bg-white rounded-2xl mx-auto mb-6 p-2 flex items-center justify-center relative z-10 shadow-lg">
                            {/* Placeholder for QR Code */}
                            <div className="w-full h-full border-4 border-dashed border-gray-300 flex items-center justify-center bg-gray-50 text-gray-400 font-mono text-xs text-center flex-col">
                                <span>[ QR Code ]</span>
                                <span className="mt-2 text-[10px]">Scan with WeChat</span>
                            </div>
                        </div>

                        <p className="text-cyan-200 font-bold relative z-10 animate-pulse">
                            {beta.cta}
                        </p>
                    </div>
                </RevealWrapper>

            </div>

        </section>
    );
}
