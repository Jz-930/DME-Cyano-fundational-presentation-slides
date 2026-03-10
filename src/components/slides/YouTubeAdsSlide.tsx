'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { PlayCircle } from 'lucide-react';

export function YouTubeAdsSlide() {
    const { title, points, mockVideo } = content.platforms.youtube;

    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center p-8 bg-[#050505] overflow-hidden z-10 border-t border-white/5 pt-20 pb-20">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black opacity-80 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse z-10 relative">

                {/* Right Side: Mock YouTube Player */}
                <RevealWrapper className="flex justify-center order-1 lg:order-2 w-full">
                    <div className="w-full max-w-lg bg-black/80 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(239,68,68,0.1)] group hover:border-red-500/30 transition-colors duration-500">
                        {/* Video Area */}
                        <div className="aspect-video bg-gray-950 relative flex items-center justify-center cursor-pointer overflow-hidden group/video">
                            {/* Subtle background image or gradient */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-black transition-transform duration-700 group-hover/video:scale-105" />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent z-0" />

                            <PlayCircle size={72} className="text-white/60 group-hover/video:text-red-500 transition-all duration-300 z-10 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)] group-hover/video:scale-110" />
                            <div className="absolute bottom-4 right-4 bg-black/90 px-2 py-1 text-xs font-mono text-white rounded z-10 border border-white/10">5:24</div>

                            {/* Mock Ad Tag */}
                            <div className="absolute top-4 left-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-sm shadow-lg z-10">Ad · 0:30</div>

                            {/* Progress bar mock */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
                                <div className="h-full bg-red-500 w-[15%]"></div>
                            </div>
                        </div>

                        {/* Video Info */}
                        <div className="p-6">
                            <h4 className="text-white font-bold text-lg mb-2">{mockVideo?.title}</h4>
                            <p className="text-gray-400 text-sm mb-4">{mockVideo?.info}</p>

                            <div className="flex items-center gap-4 border-t border-white/10 pt-4 mt-2">
                                <div className="bg-red-500/10 text-red-400 text-xs font-mono px-3 py-1 rounded-full border border-red-500/20">
                                    {mockVideo?.metric}
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealWrapper>

                {/* Left Side: Content */}
                <div className="order-2 lg:order-1 flex flex-col justify-center">
                    <RevealWrapper delay={0.2} className="mb-10">
                        <div className="inline-flex items-center px-4 py-2 bg-red-500/10 text-red-500 font-mono text-xs rounded-full border border-red-500/20 mb-6 uppercase tracking-widest gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            Platform 02 / YouTube Ads
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-white leading-tight">
                            {title.split('：')[0]}：<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
                                {title.split('：')[1]}
                            </span>
                        </h2>
                    </RevealWrapper>

                    <div className="space-y-6">
                        {points?.map((point, idx) => {
                            // Split '底层机制：内容' or '实操打法：内容' format
                            const [heading, ...rest] = point.split('：');
                            const body = rest.join('：');

                            return (
                                <RevealWrapper key={idx} delay={0.3 + idx * 0.1}>
                                    <div className="flex flex-col gap-2 group">
                                        <h3 className="text-xl md:text-2xl font-bold text-white flex items-center group-hover:text-red-400 transition-colors">
                                            <span className="text-red-500/50 mr-3 text-xl group-hover:text-red-500 transition-colors">#</span>
                                            {heading}
                                        </h3>
                                        <p className="text-gray-400 text-lg font-light pl-7 leading-relaxed bg-white/5 border border-transparent p-4 rounded-xl group-hover:border-red-500/20 transition-all duration-300">
                                            {body || point}
                                        </p>
                                    </div>
                                </RevealWrapper>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
