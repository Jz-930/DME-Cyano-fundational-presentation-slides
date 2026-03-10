'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';

export function BlackHoleSlide() {
    const { title, description } = content.functionalWeb.blackHole;

    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center p-8 bg-[#02050a] overflow-hidden z-10 border-t border-white/5">
            {/* Abstract Black Hole / Funnel Background */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60">
                <div className="w-[800px] h-[800px] bg-red-900/20 rounded-full blur-[100px] absolute mix-blend-screen scale-150 animate-pulse"></div>
                <div className="w-[400px] h-[400px] border border-red-500/10 rounded-full absolute mix-blend-screen animate-[spin_20s_linear_infinite]"></div>
                <div className="w-[300px] h-[300px] border border-red-500/30 rounded-full absolute mix-blend-screen animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="w-[100px] h-[100px] bg-black rounded-full shadow-[0_0_100px_40px_rgba(0,0,0,1)] z-10"></div>
            </div>

            <div className="max-w-4xl mx-auto w-full z-10 relative flex flex-col items-center">
                <RevealWrapper className="text-center mb-16 mt-20 relative z-10">
                    <div className="inline-flex items-center px-4 py-2 bg-red-500/10 text-red-400 font-mono text-xs lg:text-sm rounded-full border border-red-500/30 mb-8 font-bold shadow-lg tracking-widest uppercase gap-2 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                        Module 04 / Functional Web
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading mb-6 text-white leading-tight drop-shadow-xl">
                        {title.split('：')[0]}：<br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
                            {title.split('：')[1]}
                        </span>
                    </h2>
                </RevealWrapper>

                <RevealWrapper delay={0.3} className="w-full bg-[#0a0f1a]/80 backdrop-blur-2xl border border-red-900/50 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden text-center shadow-[0_0_80px_rgba(239,68,68,0.15)] group hover:shadow-[0_0_100px_rgba(239,68,68,0.25)] transition-shadow duration-700">
                    {/* Inner glowing effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent pointer-events-none"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-red-500/10 rounded-full blur-[50px] mix-blend-screen"></div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 relative z-10 flex items-center justify-center gap-3">
                        如果你没有一个高转化率的商业收网阵地 (Web)
                    </h3>

                    <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-10 mx-auto max-w-3xl relative z-10">
                        {description.split('，')[0]}，<strong className="text-red-400 bg-red-900/20 px-2 rounded">{description.split('，')[1]}，{description.split('，')[2]}</strong>
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left relative z-10">
                        <div className="bg-[#050a15] p-6 rounded-2xl border border-red-500/20 hover:border-red-500/50 transition-colors group/card">
                            <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> 流失原因一
                            </h4>
                            <p className="text-sm text-gray-400 leading-relaxed group-hover/card:text-gray-300 transition-colors">客户处于探索期，不想立刻开口求人暴露出底牌。</p>
                        </div>
                        <div className="bg-[#050a15] p-6 rounded-2xl border border-red-500/20 hover:border-red-500/50 transition-colors group/card">
                            <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> 流失原因二
                            </h4>
                            <p className="text-sm text-gray-400 leading-relaxed group-hover/card:text-gray-300 transition-colors">同行在对比，你的报价速度慢于其他拥有系统的 Broker。</p>
                        </div>
                        <div className="bg-gradient-to-br from-red-950/40 to-[#050a15] p-6 rounded-2xl border border-red-500/40 shadow-[0_0_20px_rgba(239,68,68,0.1)] hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all transform hover:-translate-y-1 group/card">
                            <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2 text-base">
                                <span className="text-lg">🔥</span> 绝杀一击
                            </h4>
                            <p className="text-sm text-gray-300 leading-relaxed">他们点进了竞争对手那个<strong className="text-white border-b border-red-500/50 pb-0.5">“看起来极其专业、能自助报价”</strong>的网站，直接留了资料。</p>
                        </div>
                    </div>
                </RevealWrapper>
            </div>
        </section>
    );
}
