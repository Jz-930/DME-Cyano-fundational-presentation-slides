'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { Play, Heart, MessageCircle, Share2, Flame } from 'lucide-react';
import { TikTokIcon } from '@/components/ui/icons/PlatformIcons';

export function TikTokAdsSlide() {
    const { title, points, mockVideo } = content.platforms.tiktok;

    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center p-8 bg-[#0a0a0a] overflow-hidden z-10 border-t border-white/5 pt-20 pb-20">
            {/* Dynamic TikTok-style Background Glow */}
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-cyan-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#ff0050]/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse z-10 relative">

                {/* Right Side: Mock TikTok Phone Interface */}
                <RevealWrapper className="flex justify-center order-1 lg:order-2 w-full">
                    <div className="w-[300px] h-[600px] bg-black rounded-[40px] border-[8px] border-gray-800 shadow-[0_0_50px_rgba(255,0,80,0.15)] relative overflow-hidden group hover:border-gray-700 transition-colors duration-500">
                        {/* Speaker Grill */}
                        <div className="absolute top-0 inset-x-0 h-6 flex justify-center items-center z-20">
                            <div className="w-16 h-1.5 bg-gray-800 rounded-full"></div>
                        </div>

                        {/* Screen Content */}
                        <div className="absolute inset-0 bg-zinc-900 flex flex-col justify-between p-4 pt-8">
                            <div className="flex justify-center mt-2 z-10">
                                <div className="text-white/60 font-bold tracking-widest text-xs flex gap-5">
                                    <span className="hover:text-white cursor-pointer transition-colors">Following</span>
                                    <span className="text-white relative cursor-pointer">
                                        For You
                                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-1 bg-white rounded-full"></span>
                                    </span>
                                </div>
                            </div>

                            {/* Mock Video Element */}
                            <div className="absolute inset-0 flex items-center justify-center -z-10 group-hover:scale-[1.03] transition-transform duration-700">
                                <div className="w-full h-full bg-gradient-to-b from-slate-900 via-gray-900 to-black"></div>
                                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay"></div>
                                <Play className="text-white/30 absolute group-hover:text-[#ff0050]/80 transition-colors duration-500 drop-shadow-[0_0_15px_rgba(255,0,80,0.5)] group-hover:scale-110" size={80} />
                            </div>

                            <div className="flex justify-between items-end mb-4 z-10">
                                <div className="flex flex-col gap-3 max-w-[75%] p-2 rounded-xl bg-gradient-to-t from-black/80 to-transparent">
                                    <div className="bg-white/10 backdrop-blur-md self-start text-[10px] font-bold px-2 py-1 rounded text-white flex items-center border border-white/10">
                                        <Flame size={12} className="text-[#ff0050] mr-1 animate-pulse" />
                                        Sponsored
                                    </div>
                                    <h4 className="text-white font-bold text-sm drop-shadow-md">{mockVideo?.author}</h4>
                                    <p className="text-white/90 text-[13px] font-light leading-relaxed drop-shadow-md">
                                        {mockVideo?.desc}
                                    </p>
                                    <div className="bg-[#ff0050] hover:bg-[#ff0050]/80 text-white font-bold text-[13px] text-center py-2.5 rounded mt-1 cursor-pointer shadow-[0_0_20px_rgba(255,0,80,0.4)] transition-colors active:scale-95 duration-200">
                                        {mockVideo?.cta}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-5 items-center text-white pb-2 pr-1">
                                    <div className="w-11 h-11 bg-gray-500 rounded-full border-2 border-white shadow-lg relative cursor-pointer">
                                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#ff0050] w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shadow-md">+</div>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 group/icon cursor-pointer">
                                        <Heart size={32} className="group-hover:fill-[#ff0050] group-hover:text-[#ff0050] transition-all duration-300 drop-shadow-md" />
                                        <span className="text-xs font-semibold drop-shadow-md">{mockVideo?.stats.likes}</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 group/icon cursor-pointer">
                                        <MessageCircle size={32} className="group-hover:fill-white transition-all duration-300 drop-shadow-md" />
                                        <span className="text-xs font-semibold drop-shadow-md">{mockVideo?.stats.comments}</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 group/icon cursor-pointer">
                                        <Share2 size={32} className="group-hover:scale-110 transition-transform duration-300 drop-shadow-md" />
                                        <span className="text-xs font-semibold drop-shadow-md">{mockVideo?.stats.shares}</span>
                                    </div>
                                    <div className="w-10 h-10 bg-gray-800 rounded-full animate-spin-slow border-2 border-gray-600 mt-2 shadow-[0_0_15px_rgba(255,0,80,0.2)] flex items-center justify-center">
                                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-[#ff0050]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealWrapper>

                {/* Left Side: Content */}
                <div className="order-2 lg:order-1 flex flex-col justify-center">
                    <RevealWrapper delay={0.2} className="mb-10">
                        <div className="inline-flex items-center px-4 py-2 bg-[#ff0050]/10 text-[#ff0050] font-mono text-xs rounded-full border border-[#ff0050]/30 mb-6 drop-shadow-[0_0_15px_rgba(255,0,80,0.2)] uppercase tracking-widest gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#ff0050] animate-ping"></span>
                            Platform 04 / TikTok
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)] text-white">
                                <TikTokIcon size={48} />
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold font-heading text-white leading-tight">
                                {title.split('：')[0]}：<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
                                    {title.split('：')[1]}
                                </span>
                            </h2>
                        </div>
                    </RevealWrapper>

                    <div className="space-y-6">
                        {points?.map((point, idx) => {
                            const [heading, ...rest] = point.split('：');
                            const body = rest.join('：');

                            return (
                                <RevealWrapper key={idx} delay={0.3 + idx * 0.1}>
                                    <div className="flex flex-col gap-2 group">
                                        <h3 className="text-xl md:text-2xl font-bold text-white flex items-center group-hover:text-cyan-400 transition-colors">
                                            <span className="text-[#ff0050] mr-3 text-xl font-black group-hover:scale-125 transition-transform duration-300">»</span>
                                            {heading}
                                        </h3>
                                        <p className="text-gray-400 text-lg font-light pl-7 leading-relaxed bg-white/5 border border-transparent p-4 rounded-xl group-hover:border-[#ff0050]/20 transition-all duration-300">
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
