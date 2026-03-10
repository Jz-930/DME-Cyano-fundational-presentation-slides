'use client';

import { Slide } from '@/components/layout/Slide';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { ArrowRight } from 'lucide-react';

export function HeroSlide() {
    return (
        <Slide theme="dark" className="relative group overflow-hidden">
            {/* Cinematic AI Generated Background */}
            <div
                className="absolute inset-0 z-0 opacity-40 mix-blend-screen scale-105 transition-transform duration-[10s] group-hover:scale-100"
                style={{
                    backgroundImage: "url('/images/hero_bg_cinematic_1773117611633.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            {/* Dark gradient overlay to ensure text legibility */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#02050a]/80 via-[#02050a]/60 to-[#02050a]/90" />

            {/* 3D Glowing Grid Floor */}
            <div className="absolute inset-x-0 bottom-0 h-[60%] z-0 overflow-hidden" style={{ perspective: "1000px" }}>
                <div className="absolute inset-0 z-0" style={{
                    backgroundImage: "linear-gradient(rgba(34, 211, 238, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.15) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                    transform: "rotateX(75deg) translateY(50px) scale(2.5)",
                    transformOrigin: "bottom center",
                    maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
                    WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)"
                }} />
                {/* Horizontal scanning scanline */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.8)] animate-[scan_4s_ease-in-out_infinite_alternate]" />
            </div>

            <FadeIn delay={0.2} direction="up" className="max-w-5xl z-10 relative">
                <p className="text-cyan-400 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
                    DME Studio & Cyano
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight mb-8">
                    如何让你的线上广告<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 drop-shadow-lg">
                        更有效
                    </span>
                    <br />
                    <span className="text-3xl md:text-5xl text-gray-300 mt-6 md:mt-8 block font-light">
                        今天我们只讲做法。
                    </span>
                </h1>

                <AnimatedText
                    as="p"
                    className="text-xl md:text-3xl text-gray-200 font-light leading-relaxed mb-16 max-w-3xl backdrop-blur-sm bg-black/20 p-6 rounded-2xl border border-white/5"
                    text={"尽量不讲太多术语和概念，跳脱小红书销售的话术，我们为你搭建从“高质感视觉资产”、“交互式Web\u00A0App”到“企业级AI系统”的自动化增长引擎。"}
                    delay={0.5}
                />

                <div className="flex items-center text-sm md:text-base text-gray-400 uppercase tracking-widest animate-pulse">
                    Scroll down to begin <ArrowRight className="ml-2 rotate-90" size={18} />
                </div>
            </FadeIn>
        </Slide>
    );
}
