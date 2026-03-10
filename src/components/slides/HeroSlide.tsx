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
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

            <FadeIn delay={0.2} direction="up" className="max-w-5xl z-10 relative">
                <p className="text-cyan-400 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
                    DME Studio & Cyano 联合呈现
                </p>
                <h1 className="text-5xl md:text-8xl font-bold font-heading leading-tight mb-8">
                    残酷真相：<br />
                    <span className="text-gray-300">为什么你的线上获客在</span><br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 drop-shadow-lg">
                        “烧钱空转”？
                    </span>
                </h1>

                <AnimatedText
                    as="p"
                    className="text-xl md:text-3xl text-gray-200 font-light leading-relaxed mb-16 max-w-3xl backdrop-blur-sm bg-black/20 p-6 rounded-2xl border border-white/5"
                    text="我们不教你怎么发朋友圈，我们为你搭建从“高质感视觉资产”、“交互式Web App”到“企业级AI系统”的自动化增长引擎。"
                    delay={0.5}
                />

                <div className="flex items-center text-sm md:text-base text-gray-400 uppercase tracking-widest animate-pulse">
                    Scroll down to begin <ArrowRight className="ml-2 rotate-90" size={18} />
                </div>
            </FadeIn>
        </Slide>
    );
}
