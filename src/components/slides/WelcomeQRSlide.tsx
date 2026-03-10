'use client';

import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function WelcomeQRSlide() {
    // 0: Wellcare, 1: Companies, 2: Speaker
    const [step, setStep] = useState(0);
    const [activeYear, setActiveYear] = useState(0);

    const timeline = [
        { year: "2020", title: "MCN 商业运营", desc: "主导短视频赛道的内容矩阵孵化与流量变现探索，深耕数字媒体生态。" },
        { year: "2021", title: "加盟 TikTok 官方", desc: "作为 TTCX & TT4B Creative Partner 及 Global Operator，深度参与 TikTok 商业化与全球创新内容生态建设。" },
        { year: "2021", title: "创立 DME Studio", desc: "扎根北美本土市场，专注为成长型中小企业提供品牌内容与数字化营销的一体化破局方案。" },
        { year: "2024", title: "投身 Cyano AI", desc: "聚焦 LLM 大模型领域的垂直研发与企业级应用落地，推动 AI 技术真正赋能业务生产力。" },
    ];

    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center p-4 md:p-8 bg-[#02050a] z-10 overflow-hidden snap-start">
            {/* Background Cinematic Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* Left Side: QR Code */}
                <RevealWrapper className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 text-white drop-shadow-md">
                        打开<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">此页面</span>
                    </h1>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-8 flex flex-col items-center shadow-[0_0_50px_rgba(6,182,212,0.15)] relative group transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_60px_rgba(6,182,212,0.25)]">
                        <div className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl mb-4 md:mb-6 transform group-hover:scale-105 transition-transform duration-500 shadow-xl border border-gray-100">
                            <QRCodeSVG
                                value="https://dme-cyano-fundational-presentation.vercel.app/"
                                size={180}
                                bgColor={"#ffffff"}
                                fgColor={"#050a15"}
                                level={"Q"}
                                includeMargin={false}
                                className="w-[140px] h-[140px] md:w-[180px] md:h-[180px]"
                            />
                        </div>
                        <div className="text-center w-full relative z-10">
                            <p className="text-white text-sm md:text-lg font-medium mb-1 md:mb-2">
                                扫描此二维码，用浏览器打开
                            </p>
                            <p className="text-cyan-400 text-xs md:text-base font-light tracking-wide bg-cyan-900/20 py-1 px-3 md:py-1.5 md:px-4 rounded-full inline-block border border-cyan-500/20">
                                实时跟踪查看此页面
                            </p>
                        </div>
                    </div>
                </RevealWrapper>

                {/* Right Side: Interactive Acknowledgments */}
                <RevealWrapper delay={0.2} className="relative min-h-[300px] md:min-h-[500px] flex items-center justify-center lg:justify-start lg:pl-10">
                    <AnimatePresence mode="wait">

                        {/* STATE 0: Wellcare Insurance */}
                        {step === 0 && (
                            <motion.div
                                key="wellcare"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-md"
                            >
                                <p className="text-gray-400 text-xl tracking-widest mb-6 lg:mb-10 uppercase font-light">鸣谢</p>

                                <div className="relative w-80 h-36 mb-8 group">
                                    <Image
                                        src="/images/logos/wellcare_logo_white.webp"
                                        alt="Wellcare Insurance Logo"
                                        fill
                                        className="object-contain lg:object-left drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                <p className="text-gray-300 text-base font-light leading-relaxed mb-12 border-l-2 border-indigo-500/50 pl-4 py-1">
                                    特别鸣谢 <strong>Wellcare Insurance</strong> 提供本次交流的机会，让我们在此探讨数字化与 AI 的无限可能。
                                </p>

                                <button
                                    onClick={() => setStep(1)}
                                    className="group flex flex-col items-center lg:items-start gap-2 transition-all duration-300 text-gray-400 hover:text-white"
                                >
                                    <div className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 px-8 py-3.5 rounded-full transition-colors shadow-lg">
                                        <span className="text-sm font-medium tracking-wide">了解我们</span>
                                        <svg className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </button>
                            </motion.div>
                        )}

                        {/* STATE 1: Companies */}
                        {step === 1 && (
                            <motion.div
                                key="companies"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col gap-8 w-full max-w-lg"
                            >
                                {/* DME Studio */}
                                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm relative group hover:border-indigo-500/40 transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="relative w-48 h-12">
                                            <Image src="/images/logos/DMESTUDIO_logo_white.webp" alt="DME Studio Logo" fill className="object-left object-contain" />
                                        </div>
                                        <span className="text-white font-bold text-xl tracking-widest border-l border-white/20 pl-4 py-1 whitespace-nowrap">DME Studio</span>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed font-light">
                                        为成长型企业提供品牌内容与 Web App 开发等一体化数字增长解决方案。以业务目标为核心，兼顾顶尖美感与商业转化。
                                    </p>
                                </div>

                                {/* Cyano AI */}
                                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm relative group hover:border-cyan-500/40 transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="relative w-48 h-12">
                                            <Image src="/images/logos/cyano_logo_green.webp" alt="Cyano Logo" fill className="object-left object-contain" />
                                        </div>
                                        <span className="text-cyan-400 font-bold text-xl tracking-widest border-l border-white/20 pl-4 py-1">Cyano AI</span>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed font-light">
                                        企业级 AI 生产力系统，囊括知识库权限化检索与 SOP 流程自动化。提供精确溯源护栏，让 AI 真正稳定赋能业务。
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 mt-2">
                                    <button
                                        onClick={() => setStep(0)}
                                        className="group flex flex-col items-center gap-2 transition-all duration-300 text-gray-500 hover:text-white"
                                    >
                                        <div className="p-3.5 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-colors">
                                            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                            </svg>
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => setStep(2)}
                                        className="group flex-1 flex justify-between items-center bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg"
                                    >
                                        <span className="text-sm font-medium tracking-wide text-gray-300 group-hover:text-white">关于演讲者</span>
                                        <svg className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* STATE 2: Speaker - Jiackey */}
                        {step === 2 && (
                            <motion.div
                                key="speaker"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col w-full max-w-lg bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 backdrop-blur-md shadow-2xl relative"
                            >
                                {/* Header / Profile */}
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.3)] shrink-0">
                                        <Image src="/images/Jiackey.jpg" alt="Jiackey" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <div className="flex items-baseline gap-3 mb-2">
                                            <h3 className="text-3xl font-bold text-white tracking-wide">Jiackey</h3>
                                            <span className="text-cyan-400 text-sm font-mono tracking-widest border border-cyan-500/30 px-2 py-0.5 rounded-full bg-cyan-900/20">MBA</span>
                                        </div>
                                        <p className="text-gray-300 text-xs md:text-sm font-light leading-relaxed">
                                            Co-founder of DME Studio & Cyano AI<br />
                                            Creative Partner of TTCX & TT4B
                                        </p>
                                    </div>
                                </div>

                                <hr className="border-white/10 mb-6" />

                                {/* Interactive Timeline */}
                                <div className="flex flex-col gap-0 relative">
                                    <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />
                                    {timeline.map((item, index) => (
                                        <div
                                            key={index}
                                            onClick={() => setActiveYear(index)}
                                            className="cursor-pointer relative pl-8 py-3 group"
                                        >
                                            {/* Timeline Node Dot */}
                                            <div className={`absolute left-[3px] top-[18px] w-[9px] h-[9px] rounded-full transition-all duration-300 border-2 ${activeYear === index ? 'bg-cyan-400 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]' : 'bg-[#02050a] border-white/30 group-hover:border-white/60'}`} />

                                            <h4 className={`font-bold transition-all duration-300 flex items-baseline gap-3 ${activeYear === index ? 'text-cyan-400 text-lg' : 'text-gray-400 text-base group-hover:text-gray-300'}`}>
                                                {item.year}
                                                <span className={`text-sm font-medium ${activeYear === index ? 'text-white' : 'text-gray-500'}`}>{item.title}</span>
                                            </h4>

                                            <AnimatePresence>
                                                {activeYear === index && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <p className="text-gray-300 text-sm font-light leading-relaxed mt-2 pb-2 mr-4">
                                                            {item.desc}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>

                                {/* Back Button inside Speaker Card */}
                                <button
                                    onClick={() => setStep(1)}
                                    className="absolute -top-4 -right-4 bg-[#050a15] border border-white/20 hover:border-cyan-500/50 rounded-full p-2.5 text-gray-400 hover:text-cyan-400 transition-colors shadow-lg group"
                                >
                                    <svg className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </RevealWrapper>

            </div>
        </section>
    );
}
