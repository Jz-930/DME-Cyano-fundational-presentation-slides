'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { CheckCircle2, XCircle } from 'lucide-react';

export function AssetsDefinition() {
    const { title, description, badAssets, premiumAssets } = content.assets.definition;

    return (
        <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center p-8 bg-[#0a0a0a] overflow-hidden z-10 border-t border-white/5 pt-20 pb-20">

            <RevealWrapper className="z-10 relative text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white leading-tight">
                    {title.split('\n').map((line: string, i: number) => (
                        <span key={i}>
                            {i === 1 ? (
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg">
                                    {line}
                                </span>
                            ) : (
                                line
                            )}
                            {i === 0 && <br />}
                        </span>
                    ))}
                </h2>
                <p className="text-gray-400 text-xl max-w-3xl mx-auto font-light">
                    {description}
                </p>
            </RevealWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full z-10 relative">

                {/* Bad Assets */}
                <RevealWrapper delay={0.2} className="h-full">
                    <div className="bg-red-950/20 backdrop-blur-md border border-red-900/40 p-8 rounded-3xl group h-full">
                        <div className="flex items-center mb-6">
                            <XCircle className="text-red-500 mr-3" size={32} />
                            <h3 className="text-3xl font-bold text-red-500">劣质素材</h3>
                        </div>

                        <ul className="space-y-6 text-gray-300 text-lg font-light">
                            {badAssets?.map((asset: string, index: number) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-red-500 mr-3 font-bold">×</span>
                                    {asset}
                                </li>
                            ))}
                        </ul>
                    </div>
                </RevealWrapper>

                {/* Premium Assets */}
                <RevealWrapper delay={0.4} className="h-full">
                    <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/20 backdrop-blur-md border border-cyan-500/40 p-8 rounded-3xl relative overflow-hidden group shadow-[0_0_50px_rgba(6,182,212,0.1)] h-full">
                        <div className="absolute inset-0 bg-[url('/images/hero_bg_cinematic_1773117611633.png')] opacity-10 mix-blend-screen bg-cover bg-center"></div>

                        <div className="relative z-10">
                            <div className="flex items-center mb-6">
                                <CheckCircle2 className="text-cyan-400 mr-3" size={32} />
                                <h3 className="text-3xl font-bold text-cyan-400">DME 交付标准：高级资产</h3>
                            </div>

                            <ul className="space-y-6 text-white text-lg font-light">
                                {premiumAssets?.map((asset: string, index: number) => (
                                    <li key={index} className="flex items-start bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                        <span className="text-cyan-400 mr-3 mt-1 font-bold">✓</span>
                                        {asset}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </RevealWrapper>

            </div>



        </section>
    );
}
