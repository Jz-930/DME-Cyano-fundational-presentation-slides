'use client';

import { useState } from 'react';
import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, RotateCcw } from 'lucide-react';

export function ShortVideoFormula() {
    const { title, steps } = content.shortVideoFormula;
    const [revealSecret, setRevealSecret] = useState(false);

    return (
        <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center p-8 bg-[#050505] overflow-hidden z-10 border-t border-white/5 pt-20 pb-20">
            {/* Dark abstract bg */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-900/40 via-black to-black opacity-80 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto w-full z-10 relative flex flex-col items-center">
                <RevealWrapper className="text-center mb-16 w-full max-w-4xl">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-white leading-tight drop-shadow-xl">
                        {title.split('：')[0]}：<br />
                        {title.split('：')[1]?.split('的')[0]}的
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            {title.split('的')[1]}
                        </span>
                    </h2>

                    {/* The Interactive Button */}
                    {!revealSecret && (
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            onClick={() => setRevealSecret(true)}
                            className="mt-6 group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-gradient-to-r from-cyan-600 to-blue-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600 hover:from-cyan-500 hover:to-blue-500 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                        >
                            <PlayCircle className="mr-2" size={24} />
                            写在最后的秘籍

                            {/* Inner glow effect on hover */}
                            <div className="absolute inset-0 h-full w-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-md mix-blend-overlay"></div>
                            </div>
                        </motion.button>
                    )}
                </RevealWrapper>

                <div className="relative w-full min-h-[500px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        {!revealSecret ? (
                            <motion.div
                                key="formula-cards"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95, y: -20, filter: "blur(10px)" }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col md:flex-row gap-6 lg:gap-8 w-full z-10 relative items-stretch justify-center perspective-[1000px] absolute inset-0"
                            >
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
                                                <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                                <div className="flex flex-col mb-8 relative z-10">
                                                    <span className={`${labelClass} font-mono font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2 group-hover:tracking-[0.3em] transition-all duration-300`}>
                                                        <span className={`w-1.5 h-1.5 rounded-full ${labelClass.replace('text', 'bg')}`}></span>
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
                            </motion.div>
                        ) : (
                            <motion.div
                                key="secret-reveal"
                                initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.3 } }}
                                transition={{ duration: 0.8, ease: "easeOut", type: "spring", bounce: 0.4 }}
                                onClick={() => setRevealSecret(false)}
                                className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-12 w-full z-20 cursor-pointer group/return"
                            >
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent opacity-80 blur-2xl -z-10 pointer-events-none"></div>

                                {/* Generated Image */}
                                <div className="w-full max-w-[400px] aspect-square rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative group-hover/return:border-cyan-500/30 transition-colors duration-500 group-hover/return:-translate-y-2 group-hover/return:shadow-[0_30px_60px_rgba(6,182,212,0.2)]">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="/images/clean-lens.png"
                                        alt="Professional cleaning phone lens"
                                        className="w-full h-full object-cover group-hover/return:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-4 left-4 z-20 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10">
                                        <span className="text-white/70 text-xs font-mono tracking-widest uppercase">Secret.01</span>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col items-start max-w-lg">
                                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 mb-6 drop-shadow-[0_10px_30px_rgba(255,255,255,0.2)] tracking-tight leading-tight group-hover/return:text-white transition-colors duration-500">
                                        把手机镜头<br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]">擦干净</span>
                                    </h2>

                                    <div className="mt-8 text-gray-500 opacity-50 group-hover/return:opacity-100 transition-opacity flex items-center justify-center w-12 h-12 rounded-full hover:bg-white/5">
                                        <RotateCcw size={24} className="group-hover/return:-rotate-90 transition-transform duration-500" />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
