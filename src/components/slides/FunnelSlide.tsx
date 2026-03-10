'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';

export function FunnelSlide() {
    const { title, subtitle, funnelSteps } = content.realFunnel;

    // We can extract the subtitle into two parts based on the colon to match the old design
    const [wrongPerception, ...rest] = subtitle?.split('对的认知：') || ['', ''];

    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center p-8 bg-black overflow-hidden z-10 border-t border-white/5">
            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 relative">

                {/* Left Side: Wrong Perception & Title */}
                <RevealWrapper className="flex flex-col justify-center">
                    <div className="p-10 rounded-3xl bg-red-950/30 border border-red-900/50 backdrop-blur-md shadow-2xl relative overflow-hidden group mb-16">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h3 className="text-red-400 font-bold uppercase tracking-widest mb-4 text-sm">
                            [ 错的认知 ]
                        </h3>
                        {/* Safely parse the wrong perception string which includes the equals sign */}
                        {wrongPerception.includes('=') ? (
                            <p className="text-2xl font-light text-gray-300">
                                {wrongPerception.split('=')[0].replace('错的认知：', '').trim()} <br />
                                <span className="text-4xl font-bold text-white mt-4 block">= {wrongPerception.split('=')[1].trim()}</span>
                            </p>
                        ) : (
                            <p className="text-2xl font-light text-gray-300">{wrongPerception}</p>
                        )}
                    </div>

                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading leading-tight text-white">
                            {title.split('：')[0]}：<br />
                            <span className="text-gray-400">{title.split('：')[1]}</span>
                        </h2>
                        <p className="text-gray-400 text-xl leading-relaxed">
                            对的认知：这四个齿轮，缺一个你的钱就白花了。今天，我们把这四个齿轮拆开，看看到底怎么装。
                        </p>
                    </div>
                </RevealWrapper>

                {/* Right Side: The Real Funnel Graphic + Steps */}
                <RevealWrapper delay={0.3} className="relative group rounded-3xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-xl p-8">
                    {/* Abstract Visual Asset from AI */}
                    <div
                        className="absolute inset-0 z-0 opacity-40 mix-blend-screen transition-transform duration-700 group-hover:scale-105"
                        style={{
                            backgroundImage: "url('/images/funnel_concept_ui_1773117643887.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

                    <div className="flex flex-col gap-4 relative z-10 pt-[10%]">
                        {funnelSteps?.map((step, idx) => {
                            // Map colors for the 4 steps
                            const colors = ['bg-blue-500 shadow-[0_0_15px_#3b82f6]', 'bg-purple-500 shadow-[0_0_15px_#a855f7]', 'bg-cyan-500 shadow-[0_0_15px_#06b6d4]', 'bg-emerald-500 shadow-[0_0_15px_#10b981]'];
                            return (
                                <RevealWrapper key={idx} delay={0.4 + idx * 0.1}>
                                    <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden hover:bg-white/10 transition-colors">
                                        <div className={`absolute left-0 top-0 bottom-0 w-2 ${colors[idx % colors.length]}`}></div>
                                        <h4 className="text-xl md:text-2xl font-bold mb-2 pl-4 text-white">
                                            {idx + 1}. {step.step}
                                        </h4>
                                        <p className="text-gray-300 pl-4 text-sm md:text-base font-light">{step.desc}</p>
                                    </div>
                                </RevealWrapper>
                            );
                        })}
                    </div>
                </RevealWrapper>
            </div>
        </section>
    );
}
