'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { Target, Users, Heart, Home } from 'lucide-react';

export function MetaAdsSlide() {
    const { title, points, assetsTrends, targetingTags } = content.platforms.meta;

    // Splitting description and other bullet points based on the config structure
    const mainDesc = points?.[0] || "";
    const priceDesc = points?.[1] || "";
    const tacticDesc = points?.[2] || "";

    // Map string names from targetingTags to lucide-react icons
    const renderIcon = (iconName: string, iconProps: any) => {
        switch (iconName) {
            case "Home": return <Home {...iconProps} />;
            case "Heart": return <Heart {...iconProps} />;
            case "Users": return <Users {...iconProps} />;
            default: return null;
        }
    };

    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center p-8 bg-[#020617] overflow-hidden z-10 border-t border-white/5 pt-20 pb-20">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-blue-950/20 to-black opacity-80 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 relative">

                <div className="flex flex-col justify-center">
                    <RevealWrapper>
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-purple-400 font-mono text-xs rounded-full border border-purple-500/20 mb-6 uppercase tracking-widest gap-2 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                            Platform 03 / Meta (FB & IG)
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-white leading-tight">
                            {title.split('：')[0]}：<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                {title.split('：')[1] || "Meta 强推算法"}
                            </span>
                        </h2>

                        <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-8 bg-white/5 border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
                            {mainDesc.split('。')[0]}。<br />
                            {priceDesc.split('。')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">$30 - $80</span> 加币。
                        </p>
                    </RevealWrapper>

                    <RevealWrapper delay={0.2}>
                        <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 p-6 rounded-2xl hover:border-purple-500/40 transition-colors duration-300 group shadow-[0_4px_30px_rgba(168,85,247,0.1)]">
                            <h3 className="text-white font-bold mb-4 flex items-center text-lg">
                                <Target className="text-purple-400 mr-2 group-hover:scale-110 transition-transform" size={20} />
                                主流 Assets 趋势
                            </h3>
                            <ul className="space-y-4 text-gray-300 text-sm md:text-base">
                                {assetsTrends?.map((trend, index) => (
                                    <li key={index} className="flex items-center p-2 rounded-lg hover:bg-white/5 transition-colors">
                                        <span className={`w-2 h-2 rounded-full bg-${trend.color}-500 mr-3 shadow-[0_0_8px_var(--color-${trend.color}-500, #a855f7)]`}></span>
                                        <span className={`font-mono text-${trend.color}-300 mr-2`}>[{trend.platform}]</span> {trend.desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </RevealWrapper>
                </div>

                <RevealWrapper delay={0.3} className="relative w-full flex justify-center perspective-[1000px]">
                    {/* UI Mockup for Life Events Targeting */}
                    <div className="w-full max-w-lg bg-[#18191A] border border-[#3E4042] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
                        <div className="bg-[#242526] p-4 border-b border-[#3E4042] flex justify-between items-center">
                            <span className="text-white font-bold tracking-wide">Detailed Targeting</span>
                            <span className="text-[#2D88FF] text-sm font-semibold cursor-pointer hover:underline">Browse</span>
                        </div>

                        <div className="p-6 space-y-6">
                            <div>
                                <p className="text-gray-400 text-xs mb-3 uppercase tracking-wider font-semibold">Include people who match</p>

                                <div className="space-y-3">
                                    {/* Targeting Tags */}
                                    {targetingTags?.map((tag, index) => (
                                        <div key={index} className={`flex items-center justify-between bg-[#3A3B3C] px-4 py-3 rounded-xl border-l-4 border-${tag.color}-500 group/item hover:bg-[#4A4B4C] transition-colors cursor-pointer`}>
                                            <div className="flex items-center">
                                                {renderIcon(tag.icon, { className: `text-gray-300 mr-3 group-hover/item:text-${tag.color}-400 transition-colors`, size: 18 })}
                                                <span className="text-white text-sm">{tag.label}</span>
                                            </div>
                                            <span className="text-[10px] text-gray-500 uppercase tracking-widest hidden sm:block">{tag.category}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-purple-500/30 p-5 rounded-2xl mt-6 relative overflow-hidden group/tactic">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/tactic:translate-x-full transition-transform duration-1000"></div>
                                <p className="text-blue-200 text-sm font-light leading-relaxed relative z-10">
                                    <strong className="text-purple-400 font-bold block mb-2 text-base">实操杀手锏 (Life Events)：</strong>
                                    {tacticDesc.replace('核心打法：Life Events 定向。', '')}
                                </p>
                            </div>
                        </div>
                    </div>
                </RevealWrapper>

            </div>
        </section>
    );
}
