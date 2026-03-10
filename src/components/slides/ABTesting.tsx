'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';

export function ABTesting() {
    const { title, description, example, variants, decision } = content.assets.abTesting;

    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center p-8 bg-[#050505] overflow-hidden z-10 border-t border-white/5 pt-20 pb-20">
            {/* Abstract A/B Testing Visualization */}
            <div
                className="absolute inset-0 z-0 opacity-40 mix-blend-screen scale-105"
                style={{
                    backgroundImage: "url('/images/ab_testing_flow_1773117689573.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full z-10 relative flex flex-col items-center">

                <RevealWrapper className="text-center mb-16 w-full max-w-4xl">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading mb-6 text-white leading-tight drop-shadow-xl">
                        {title.split('，')[0]}，<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            {title.split('，')[1]}
                        </span>
                    </h2>
                    <p className="text-gray-300 text-xl lg:text-2xl max-w-3xl mx-auto font-light leading-relaxed bg-black/40 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
                        {description.split('建立')[0]}建立<strong className="text-white drop-shadow-md">“资产赛马流水线”</strong>{description.split('建立')[1]?.split('”')[1] || "，让市场告诉你什么能赚钱。"}
                    </p>
                </RevealWrapper>

                <div className="w-full relative perspective-[1000px]">
                    <div className="bg-black/60 backdrop-blur-2xl border border-white/10 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group/container">

                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/container:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-10 border-b border-white/10 pb-6 flex items-center justify-center gap-4">
                            <span className="text-cyan-400">DME 实操案例：</span> {example.split('，')[0].replace('同时跑两个视频开头（', '').replace('）', '')}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-10">
                            {variants?.map((variant: any, index: number) => {
                                const isVariantA = variant.color === 'red';
                                const colorClass = isVariantA ? 'red' : 'cyan';

                                return (
                                    <RevealWrapper key={index} delay={0.2 + (index * 0.2)} className={`h-full ${!isVariantA ? 'z-10' : ''}`}>
                                        <div className={`bg-${colorClass}-950/20 backdrop-blur-xl border-2 border-${colorClass}-${isVariantA ? '500/30' : '400'} p-8 rounded-3xl relative overflow-hidden group hover:border-${colorClass}-${isVariantA ? '500/60' : '500'} hover:${isVariantA ? 'bg-red-950/40' : 'scale-[1.02] shadow-[0_0_50px_rgba(34,211,238,0.3)]'} transition-all duration-500 h-full flex flex-col ${isVariantA ? 'shadow-lg' : 'shadow-[0_0_30px_rgba(34,211,238,0.15)] z-10'}`}>

                                            {!isVariantA && (
                                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
                                            )}

                                            <div className={`absolute top-0 right-0 bg-${colorClass}-${isVariantA ? '500' : '400'} text-${isVariantA ? 'white' : 'black'} font-black px-6 py-2 rounded-bl-2xl text-xl shadow-md z-10`}>
                                                {variant.name}
                                            </div>
                                            <h4 className={`text-${colorClass}-400 font-bold mb-4 text-2xl mt-4 z-10 relative`}>{variant.type}</h4>
                                            <p className={`text-${isVariantA ? 'gray-300' : 'gray-200'} italic mb-8 text-lg font-light leading-relaxed flex-grow z-10 relative`}>
                                                {variant.quote}
                                            </p>

                                            <div className={`bg-black/60 p-5 rounded-2xl flex justify-between items-center border border-${colorClass}-900/50 shadow-inner group-hover:bg-black/80 transition-colors z-10 relative`}>
                                                <div className="flex flex-col">
                                                    <span className={`text-xs text-gray-${isVariantA ? '500' : '400'} uppercase tracking-wider font-bold mb-1`}>带来线索 (Leads)</span>
                                                    <span className={`text-lg text-${isVariantA ? 'gray-300 font-medium' : 'white font-bold'}`}>{variant.leads}</span>
                                                </div>
                                                <div className="flex flex-col items-end">
                                                    <span className={`text-xs text-${colorClass}-500/70 uppercase tracking-wider font-bold mb-1`}>成本</span>
                                                    <span className={`text-${colorClass}-400 font-black ${isVariantA ? 'text-2xl' : 'text-3xl drop-shadow-md'}`}>{variant.cost}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </RevealWrapper>
                                );
                            })}
                        </div>

                        <RevealWrapper delay={0.6} className="w-full">
                            <div className="bg-white/5 backdrop-blur-md p-6 lg:p-8 rounded-2xl text-center border border-white/10 relative overflow-hidden group/decision">
                                {/* Subtle animated background for decision box */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-blue-900/10 to-transparent -translate-x-full group-hover/decision:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                                <h4 className="text-white font-bold text-xl lg:text-2xl mb-3 flex items-center justify-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                    {decision?.title}
                                </h4>
                                <p className="text-gray-300 text-lg lg:text-xl font-light">
                                    {decision?.text.split('把本月剩下几千块全砸给B！')[0]}<br className="hidden md:block" />
                                    把本月剩下几千块全砸给B！ <span className="text-cyan-400 font-bold underline decoration-wavy underline-offset-4 decoration-cyan-400/50 ml-2">{decision?.highlight}</span>
                                </p>
                            </div>
                        </RevealWrapper>
                    </div>
                </div>
            </div>
        </section>
    );
}
