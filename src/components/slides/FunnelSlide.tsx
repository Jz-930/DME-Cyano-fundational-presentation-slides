'use client';

import { useState } from 'react';
import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { AnimatePresence, motion } from 'framer-motion';

export function FunnelSlide() {
    const { title, subtitle, funnelSteps } = content.realFunnel;
    const [isRevealed, setIsRevealed] = useState(false);
    const [activePopup, setActivePopup] = useState<number | null>(null);

    // We can extract the subtitle into two parts based on the colon to match the old design
    const [wrongPerception, ...rest] = subtitle?.split('对的认知：') || ['', ''];

    return (
        <section
            className="relative min-h-[100dvh] w-full flex items-center justify-center p-8 bg-black overflow-hidden z-10 border-t border-white/5 cursor-pointer"
            onClick={() => !isRevealed && setIsRevealed(true)}
        >
            <div className={`w-full mx-auto grid grid-cols-1 ${isRevealed ? 'max-w-7xl lg:grid-cols-2' : 'max-w-3xl lg:grid-cols-1'} gap-16 items-center z-10 relative transition-all duration-700`}>

                {/* Left Side: Wrong Perception & Title */}
                <RevealWrapper className="flex flex-col justify-center">
                    <div className="p-10 rounded-3xl bg-red-950/30 border border-red-900/50 backdrop-blur-md shadow-2xl relative overflow-hidden group mb-16 hover:bg-red-900/40 transition-colors">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h3 className="text-red-400 font-bold uppercase tracking-widest mb-4 text-sm">
                            [ 错误认知 ]
                        </h3>
                        {/* Safely parse the wrong perception string which includes the equals sign */}
                        {wrongPerception.includes('=') ? (
                            <p className="text-2xl md:text-3xl font-light text-gray-300">
                                {wrongPerception.split('=')[0].replace('错的认知：', '').trim()} <br />
                                <span className="text-4xl md:text-5xl font-bold text-white mt-6 block tracking-wide">= {wrongPerception.split('=')[1].trim()}</span>
                            </p>
                        ) : (
                            <p className="text-2xl font-light text-gray-300">{wrongPerception}</p>
                        )}

                        {!isRevealed && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2, duration: 1 }}
                                className="absolute bottom-4 right-6 text-red-500/60 text-sm animate-pulse"
                            >
                                点击屏幕揭晓真相 ↘
                            </motion.div>
                        )}
                    </div>

                    <div className={`transition-all duration-1000 transform ${isRevealed ? 'opacity-100 translate-y-0 block' : 'opacity-0 translate-y-10 hidden'}`}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading leading-tight text-white">
                            {title.split('：')[0]}：<br />
                            <span className="text-gray-400">{title.split('：')[1]}</span>
                        </h2>
                        <div className="text-gray-400 text-xl leading-relaxed">
                            <span className="text-gray-300 mb-2 block">对的认知：</span>
                            <span className="text-red-400 font-bold text-2xl block mt-4 px-6 py-5 bg-red-950/40 border-l-4 border-red-500 rounded-r-xl shadow-lg relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent"></div>
                                ⚠️ 这四个齿轮，<span className="text-white underline decoration-red-500 decoration-4 underline-offset-4">缺一个</span>你的钱就白花了。
                            </span>
                            <span className="block mt-6 text-lg text-gray-400">
                                今天，我们把这四个齿轮拆开，看看到底怎么装。
                            </span>
                        </div>
                    </div>
                </RevealWrapper>

                {/* Right Side: The Real Funnel Graphic + Steps */}
                {isRevealed && (
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
                            {funnelSteps?.map((step: any, idx: number) => {
                                // Map colors for the 4 steps
                                const colors = ['bg-blue-500 shadow-[0_0_15px_#3b82f6]', 'bg-purple-500 shadow-[0_0_15px_#a855f7]', 'bg-cyan-500 shadow-[0_0_15px_#06b6d4]', 'bg-emerald-500 shadow-[0_0_15px_#10b981]'];
                                return (
                                    <RevealWrapper key={idx} delay={0.4 + idx * 0.1}>
                                        <div
                                            className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer group/item hover:border-white/30 hover:shadow-2xl"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActivePopup(idx);
                                            }}
                                        >
                                            <div className={`absolute left-0 top-0 bottom-0 w-2 ${colors[idx % colors.length]}`}></div>
                                            <div className="flex justify-between items-center pr-2">
                                                <h4 className="text-xl md:text-2xl font-bold mb-2 pl-4 text-white">
                                                    {idx + 1}. {step.step}
                                                </h4>
                                                <span className="text-white/30 group-hover/item:text-white/80 transition-colors border border-white/20 rounded-full px-3 py-1 text-xs whitespace-nowrap bg-white/5 ml-4 flex-shrink-0">
                                                    点击解释 ↗
                                                </span>
                                            </div>
                                            <p className="text-gray-400 pl-4 text-sm md:text-base font-light">{step.desc}</p>
                                        </div>
                                    </RevealWrapper>
                                );
                            })}
                        </div>
                    </RevealWrapper>
                )}
            </div>

            {/* Modal for Popups */}
            <AnimatePresence>
                {activePopup !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                        onClick={(e) => {
                            e.stopPropagation();
                            setActivePopup(null);
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: 20, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="bg-zinc-950 border border-white/10 p-8 md:p-10 rounded-3xl max-w-xl w-full relative overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500`} />

                            <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 mt-2">
                                {funnelSteps[activePopup].step}
                            </h4>
                            <div className="w-16 h-1 bg-white/20 rounded-full mb-6" />

                            {funnelSteps[activePopup].popupImage && (
                                <div className="mb-6 rounded-2xl overflow-hidden border border-white/10 shadow-xl relative">
                                    <div className="aspect-[16/9] w-full">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={funnelSteps[activePopup].popupImage}
                                            alt={funnelSteps[activePopup].step}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
                                </div>
                            )}

                            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light tracking-wide">
                                {funnelSteps[activePopup].popupText}
                            </p>

                            <button
                                className="mt-10 w-full py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors"
                                onClick={() => setActivePopup(null)}
                            >
                                我明白了 (Close)
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
