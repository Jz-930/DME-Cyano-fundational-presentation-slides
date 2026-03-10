'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';

export function Roadmap90Slide() {
    const { title, subtitle, months } = content.closing.roadmap;

    return (
        <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center p-8 bg-[#050505] z-10 border-t border-white/5 py-24">

            <RevealWrapper className="z-10 relative text-center mb-20 max-w-4xl w-full">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-white leading-tight drop-shadow-md" dangerouslySetInnerHTML={{ __html: title }} />
                <p className="text-gray-400 text-xl font-light tracking-wide">
                    {subtitle}
                </p>
            </RevealWrapper>

            <div className="max-w-6xl mx-auto w-full z-10 relative pl-4 md:pl-0">
                <div className="relative border-l-4 border-emerald-900/50 md:ml-12 pl-8 md:pl-16 space-y-20 before:absolute before:inset-y-0 before:-left-[2px] before:w-[2px] before:bg-gradient-to-b before:from-emerald-500/50 before:via-blue-500/50 before:to-purple-500/50">

                    {months.map((month, index) => {
                        const colorMap: Record<string, { bg: string, border: string, text: string, shadow: string, hoverBorder: string, hoverBg: string, bgGlow: string, groupHoverBgGlow: string, bgFade: string, textFade: string }> = {
                            emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500', text: 'text-emerald-400', shadow: 'shadow-[0_0_20px_rgba(16,185,129,0.5)]', hoverBorder: 'hover:border-emerald-400/80', hoverBg: 'hover:bg-zinc-900/80', bgGlow: 'bg-emerald-500/30', groupHoverBgGlow: 'group-hover:bg-emerald-500/10', bgFade: 'bg-emerald-500/5', textFade: 'text-emerald-500' },
                            blue: { bg: 'bg-blue-500/10', border: 'border-blue-500', text: 'text-blue-400', shadow: 'shadow-[0_0_20px_rgba(59,130,246,0.5)]', hoverBorder: 'hover:border-blue-400/80', hoverBg: 'hover:bg-zinc-900/80', bgGlow: 'bg-blue-500/30', groupHoverBgGlow: 'group-hover:bg-blue-500/10', bgFade: 'bg-blue-500/5', textFade: 'text-blue-500' },
                            purple: { bg: 'bg-purple-500/10', border: 'border-purple-500', text: 'text-purple-400', shadow: 'shadow-[0_0_20px_rgba(168,85,247,0.5)]', hoverBorder: 'hover:border-purple-400/80', hoverBg: 'hover:bg-zinc-900/80', bgGlow: 'bg-purple-500/30', groupHoverBgGlow: 'group-hover:bg-purple-500/10', bgFade: 'bg-purple-500/5', textFade: 'text-purple-500' }
                        };
                        const c = colorMap[month.color] || colorMap.emerald;

                        return (
                            <RevealWrapper key={month.id} delay={0.2 * (index + 1)} className="relative">
                                <div className={`absolute -left-[56px] md:-left-[88px] top-0 w-10 h-10 md:w-12 md:h-12 rounded-full ${c.bg} border-2 ${c.border} flex items-center justify-center ${c.text} font-black text-sm md:text-base ${c.shadow} z-10 backdrop-blur-md`}>
                                    {month.id}
                                </div>

                                <div className={`bg-black/60 backdrop-blur-sm border ${c.bgGlow} p-8 md:p-10 rounded-3xl shadow-xl group ${c.hoverBorder} ${c.hoverBg} transition-all duration-500 relative overflow-hidden`}>
                                    <div className={`absolute top-0 right-0 w-32 h-32 ${c.bgFade} rounded-bl-full pointer-events-none ${c.groupHoverBgGlow} transition-colors duration-500`}></div>

                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 relative z-10">{month.title}</h3>
                                    <p className={`${c.text} font-mono text-xs md:text-sm mb-8 uppercase tracking-widest relative z-10`}>{month.tag}</p>

                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-400 font-light relative z-10">
                                        {month.items.map((item, i) => (
                                            <li key={i} className="flex items-start group/item">
                                                <span className={`${c.textFade} mr-3 mt-1 opacity-70 group-hover/item:opacity-100 transition-opacity`}>»</span>
                                                <span className="leading-relaxed group-hover/item:text-gray-300 transition-colors">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </RevealWrapper>
                        );
                    })}

                </div>
            </div>

        </section>
    );
}
