'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { Camera, FileText, AlertOctagon, Heart } from 'lucide-react';

export function XHSSlide() {
    const { title, points, mockPosts } = content.platforms.xiaohongshu;

    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center p-8 bg-[#0a0505] overflow-hidden z-10 border-t border-white/5 pt-20 pb-20">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-950/60 via-black to-black opacity-80 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 relative">

                {/* Left Side: Content */}
                <div className="flex flex-col justify-center">
                    <RevealWrapper className="mb-10">
                        <div className="inline-flex items-center px-4 py-2 bg-red-500/10 text-red-500 font-mono text-xs rounded-full border border-red-500/30 mb-6 uppercase tracking-widest gap-2 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span>
                            Platform 05 / 小红书 (Red)
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-white leading-tight">
                            {title.split('：')[0]}：<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
                                {title.split('：')[1]}
                            </span>
                        </h2>
                    </RevealWrapper>

                    <div className="space-y-6">
                        {points?.map((point: string, idx: number) => {
                            const [heading, ...rest] = point.split('：');
                            const body = rest.join('：');

                            // Determine which icon/style to use based on index or content
                            let Icon = Camera;
                            let iconBgClass = "bg-white/10 text-white";
                            let borderClass = "border-transparent";

                            if (heading.includes('避坑') || heading.includes('绝')) {
                                Icon = AlertOctagon;
                                iconBgClass = "bg-red-500/20 text-red-400";
                                borderClass = "border-red-500/30";
                            } else if (heading.includes('打法')) {
                                Icon = FileText;
                            }

                            return (
                                <RevealWrapper key={idx} delay={0.3 + idx * 0.1}>
                                    <div className="flex items-start group">
                                        <div className={`p-3 rounded-xl mr-5 border ${borderClass} ${iconBgClass} shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon size={24} />
                                        </div>
                                        <div className="bg-white/5 border border-white/5 p-4 rounded-2xl group-hover:bg-white/10 transition-colors duration-300 w-full">
                                            <h3 className="text-xl font-bold text-white mb-2">{heading}</h3>
                                            <p className="text-gray-400 text-base font-light leading-relaxed">
                                                {body || point}
                                            </p>
                                        </div>
                                    </div>
                                </RevealWrapper>
                            );
                        })}
                    </div>
                </div>

                {/* Right Side: Masonry Grid Layout to mock XHS Feed */}
                <RevealWrapper delay={0.4} className="relative w-full flex justify-center">
                    <div className="columns-2 gap-5 w-full max-w-lg perspective-[1000px]">

                        {/* Note 1: High value cover */}
                        <div className="bg-[#121212] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] mb-5 group cursor-pointer hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] hover:-translate-y-2 transition-all duration-500">
                            <div className="aspect-[3/4] bg-gradient-to-br from-red-600 via-rose-500 to-orange-400 relative p-4 flex flex-col justify-center items-center text-center overflow-hidden">
                                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay"></div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-3xl rounded-full"></div>

                                <div className="bg-white/20 backdrop-blur-md w-full p-5 rounded-2xl border border-white/40 transform group-hover:scale-[1.03] transition-transform duration-500 z-10 shadow-xl">
                                    <h4 className="text-white font-black text-2xl leading-tight mb-3 tracking-wide drop-shadow-md">{mockPosts?.[0]?.coverTitle1}</h4>
                                    <p className="text-red-600 text-sm font-black bg-white inline-block px-3 py-1.5 rounded-full shadow-md uppercase tracking-widest">{mockPosts?.[0]?.coverTitle2}</p>
                                </div>
                            </div>
                            <div className="p-4">
                                <h5 className="text-white text-[15px] font-bold leading-snug line-clamp-2 group-hover:text-red-400 transition-colors">{mockPosts?.[0]?.title}</h5>
                                <div className="flex justify-between items-center mt-3">
                                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                                        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-rose-400 to-red-600"></div>
                                        <span>{mockPosts?.[0]?.author}</span>
                                    </div>
                                    <span className="text-gray-400 text-xs flex items-center font-semibold"><Heart size={14} className="mr-1 inline text-red-500 fill-red-500" /> {mockPosts?.[0]?.likes}</span>
                                </div>
                            </div>
                        </div>

                        {/* Note 2: Personal IP (Bad Example) */}
                        <div className="bg-[#121212] rounded-3xl overflow-hidden border border-white/5 shadow-xl opacity-40 mb-5 relative group cursor-pointer hover:opacity-100 transition-all duration-500 hover:border-white/20 grayscale hover:grayscale-0">
                            <div className="aspect-square bg-slate-900 relative flex items-center justify-center p-4">
                                <div className="text-red-500 absolute top-3 right-3 border border-red-500/50 rounded bg-red-500/10 px-2 py-1 text-[10px] uppercase font-bold backdrop-blur-sm z-10">Low Traffic</div>
                                <div className="text-center text-gray-500 text-sm font-mono border border-dashed border-gray-700 w-full h-full flex items-center justify-center rounded-xl bg-gray-800/30">
                                    {mockPosts?.[1]?.coverText}
                                </div>
                            </div>
                            <div className="p-4">
                                <h5 className="text-gray-400 text-sm font-bold line-clamp-2">{mockPosts?.[1]?.title}</h5>
                                <div className="flex justify-between items-center mt-3 opacity-50">
                                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                                        <div className="w-5 h-5 rounded-full bg-gray-700"></div>
                                        <span>{mockPosts?.[1]?.author}</span>
                                    </div>
                                    <span className="text-gray-500 text-xs flex items-center"><Heart size={14} className="mr-1 inline" /> {mockPosts?.[1]?.likes}</span>
                                </div>
                            </div>
                        </div>

                        {/* Note 3: Another good cover */}
                        <div className="bg-[#121212] rounded-3xl overflow-hidden border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.5)] group cursor-pointer hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:-translate-y-2 transition-all duration-500">
                            <div className="aspect-[4/5] bg-gradient-to-br from-slate-900 via-blue-950 to-black relative p-6 flex flex-col justify-between overflow-hidden">
                                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 to-transparent"></div>

                                <span className="text-blue-400 font-mono text-xs font-bold tracking-widest uppercase relative z-10 border border-blue-500/30 inline-block self-start px-2 py-1 rounded bg-blue-900/30 backdrop-blur-sm">{mockPosts?.[2]?.coverTag}</span>

                                <div className="relative z-10 bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                    <h4 className="text-white font-bold text-2xl leading-tight mb-2 drop-shadow-lg">{mockPosts?.[2]?.coverTitle1}</h4>
                                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 text-xl font-black drop-shadow-md">{mockPosts?.[2]?.coverTitle2}</p>
                                </div>
                            </div>
                            <div className="p-4">
                                <h5 className="text-white text-[14px] font-bold line-clamp-2 leading-relaxed group-hover:text-blue-300 transition-colors">{mockPosts?.[2]?.title}</h5>
                                <div className="flex justify-between items-center mt-3">
                                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-slate-400 to-gray-600"></div>
                                        <span>{mockPosts?.[2]?.author}</span>
                                    </div>
                                    <span className="text-gray-400 text-xs flex items-center font-semibold"><Heart size={14} className="mr-1 inline text-red-500 fill-red-500" /> {mockPosts?.[2]?.likes}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </RevealWrapper>

            </div>
        </section>
    );
}
