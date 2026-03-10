'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { Smartphone, BookOpen, Video } from 'lucide-react';
import { WeChatIcon } from '@/components/ui/icons/PlatformIcons';

export function WeChatSlide() {
    const { title, points } = content.platforms.wechat;

    return (
        <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center p-8 bg-[#020a05] overflow-hidden z-10 border-t border-white/5">
            {/* Subtle green ambient light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#07c160]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-[#07c160]/5 to-transparent pointer-events-none" />

            <div className="z-10 relative text-center mb-20 w-full max-w-4xl mx-auto">
                <RevealWrapper>
                    <div className="inline-flex items-center px-5 py-2.5 bg-[#07c160]/10 text-[#07c160] font-mono text-sm rounded-full border border-[#07c160]/30 mb-8 font-bold shadow-[0_0_20px_rgba(7,193,96,0.2)] tracking-widest uppercase gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#07c160] animate-pulse"></span>
                        Platform 06 / WeChat Ecosystem
                    </div>
                </RevealWrapper>

                <RevealWrapper delay={0.2}>
                    <div className="flex flex-col items-center gap-4 mb-6">
                        <div className="p-3 bg-[#07c160]/10 rounded-2xl border border-[#07c160]/20 backdrop-blur-md shadow-[0_0_20px_rgba(7,193,96,0.15)] flex items-center justify-center">
                            <WeChatIcon size={56} />
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-tight drop-shadow-xl">
                            {title.split('：')[0]}：<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#07c160] to-emerald-300">
                                {title.split('：')[1]}
                            </span>
                        </h2>
                    </div>
                </RevealWrapper>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full z-10 relative perspective-[1000px]">

                {points?.map((point, idx) => {
                    const [heading, ...rest] = point.split('：');
                    const body = rest.join('：');

                    // Assign icons and specific styling based on index
                    let Icon = Smartphone;
                    if (idx === 1) Icon = BookOpen;
                    if (idx === 2) Icon = Video;

                    // Delay calculation for staggered reveal
                    const delay = 0.3 + (idx * 0.2);

                    return (
                        <RevealWrapper key={idx} delay={delay} className="h-full">
                            <div className="bg-[#121a15]/80 backdrop-blur-xl border border-white/5 p-8 lg:p-10 rounded-[2rem] h-full group hover:border-[#07c160]/40 hover:bg-[#15251b]/90 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_rgba(7,193,96,0.15)] hover:-translate-y-2 flex flex-col relative overflow-hidden">

                                {/* Inner glow on hover */}
                                <div className="absolute inset-0 bg-gradient-to-b from-[#07c160]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#07c160]/20 to-transparent flex items-center justify-center mb-8 text-[#07c160] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg border border-[#07c160]/20 relative z-10">
                                    <Icon size={36} strokeWidth={1.5} />
                                </div>

                                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-5 relative z-10 drop-shadow-sm group-hover:text-emerald-50 transition-colors">
                                    {heading}
                                </h3>

                                <p className="text-gray-400 text-base lg:text-lg font-light leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">
                                    {/* Bold certain keywords for emphasis if they exist in the text matching the original slide */}
                                    {body.includes("日常工作照") ? (
                                        <span dangerouslySetInnerHTML={{ __html: body.replace('“靠谱与繁忙”', '<strong class="text-[#07c160]">“靠谱与繁忙”</strong>') }} />
                                    ) : body.includes("白皮书") ? (
                                        <span dangerouslySetInnerHTML={{ __html: body.replace('“白皮书”', '<strong class="text-[#07c160]">“白皮书”</strong>') }} />
                                    ) : body.includes("熟人社交链") ? (
                                        <span dangerouslySetInnerHTML={{ __html: body.replace('朋友点赞', '<strong class="text-[#07c160]">朋友点赞</strong>') }} />
                                    ) : body}
                                </p>

                                {/* Decorative network effect graphic for the 3rd card */}
                                {idx === 2 && (
                                    <div className="absolute -bottom-16 -right-16 w-52 h-52 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#07c160]/20 to-transparent opacity-50 z-0 group-hover:opacity-80 transition-opacity duration-500 rounded-full blur-2xl"></div>
                                )}
                            </div>
                        </RevealWrapper>
                    );
                })}

            </div>
        </section>
    );
}
