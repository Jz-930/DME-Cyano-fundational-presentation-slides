'use client';

import { useState } from 'react';
import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { AnimatePresence, motion } from 'framer-motion';

const LogoGoogle = () => (
    <svg viewBox="0 0 48 48" className="w-16 h-16 drop-shadow-md">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
    </svg>
);

const LogoTiktokMeta = () => (
    <div className="flex -space-x-3 items-center">
        <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center shadow-lg border border-white/10 z-10 p-2">
            <svg viewBox="0 0 448 512" fill="#fff" className="w-8 h-8 drop-shadow-[2px_2px_0_#ff0050] drop-shadow-[-2px_-2px_0_#00f2fe]">
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
            </svg>
        </div>
        <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center p-2 shadow-lg border border-white/10 opacity-90 transform translate-y-2">
            <span className="font-bold text-white text-4xl font-sans leading-none pb-1 pr-1">f</span>
        </div>
    </div>
);

const LogoYoutube = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-[#FF0000] drop-shadow-lg">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        <circle cx="12" cy="12" r="3" fill="transparent" />
    </svg>
);

const LogoXhsWechat = () => (
    <div className="flex -space-x-4 items-center">
        <div className="w-14 h-14 bg-[#FF2442] rounded-xl flex items-center justify-center shadow-lg border border-white/10 z-10 px-1">
            <span className="text-white font-bold text-xl tracking-tighter mix-blend-plus-lighter drop-shadow-sm">小红书</span>
        </div>
        <div className="w-14 h-14 bg-[#07C160] rounded-xl flex items-center justify-center shadow-lg border border-white/10 opacity-95 transform translate-y-3 p-2">
            <svg viewBox="0 0 448 512" fill="#fff" className="w-8 h-8 drop-shadow-sm">
                <path d="M224 53.33c-88.37 0-160 59.73-160 133.33 0 42.17 23.63 79.54 60.18 102.8l-15.65 46.99 53.6-26.69A174.61 174.61 0 0 0 224 320c88.37 0 160-59.73 160-133.34S312.37 53.33 224 53.33zm-48 106.67c-13.25 0-24-10.75-24-24s10.75-24 24-24 24 10.75 24 24-10.75 24-24 24zm80-24c0 13.25-10.75 24-24 24s-24-10.75-24-24 10.75-24 24-24 24 10.75 24 24z" />
            </svg>
        </div>
    </div>
);

const renderLogo = (platform: string) => {
    switch (platform) {
        case "Google Search": return <LogoGoogle />;
        case "TikTok / Meta": return <LogoTiktokMeta />;
        case "YouTube": return <LogoYoutube />;
        case "小红书 / 微信": return <LogoXhsWechat />;
        default: return null;
    }
}

export function TrafficIntro() {
    const { tag, title, description, quadrants } = content.trafficIntro;
    const [selectedPopup, setSelectedPopup] = useState<number | null>(null);

    // Provide safe style mappings for dynamic colors since dynamic Tailwind classes might be purged.
    const getColorClass = (color: string, type: 'border' | 'bg' | 'text' | 'shadow' | 'hoverBorder' | 'hoverText' | 'btn') => {
        const colorMap: Record<string, Record<string, string>> = {
            blue: {
                border: 'border-blue-500/30', bg: 'bg-blue-500/20', text: 'text-blue-400', shadow: 'shadow-blue-500/20', hoverBorder: 'hover:border-blue-500/60', hoverText: 'group-hover:text-blue-200', btn: 'bg-blue-500 hover:bg-blue-600'
            },
            fuchsia: {
                border: 'border-fuchsia-500/30', bg: 'bg-fuchsia-500/20', text: 'text-fuchsia-400', shadow: 'shadow-fuchsia-500/20', hoverBorder: 'hover:border-fuchsia-500/60', hoverText: 'group-hover:text-fuchsia-200', btn: 'bg-fuchsia-500 hover:bg-fuchsia-600'
            },
            red: {
                border: 'border-red-500/30', bg: 'bg-red-500/20', text: 'text-red-400', shadow: 'shadow-red-500/20', hoverBorder: 'hover:border-red-500/60', hoverText: 'group-hover:text-red-200', btn: 'bg-red-500 hover:bg-red-600'
            },
            emerald: {
                border: 'border-emerald-500/30', bg: 'bg-emerald-500/20', text: 'text-emerald-400', shadow: 'shadow-emerald-500/20', hoverBorder: 'hover:border-emerald-500/60', hoverText: 'group-hover:text-emerald-200', btn: 'bg-emerald-500 hover:bg-emerald-600'
            }
        };
        return colorMap[color]?.[type] || colorMap['blue'][type];
    };

    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center p-8 bg-[#02050a] overflow-hidden z-10 border-t border-white/5 pt-20 pb-20">
            {/* Platform Abstract Neural Network Background */}
            <div
                className="absolute inset-0 z-0 opacity-20 mix-blend-screen scale-110"
                style={{
                    backgroundImage: "url('/images/platforms_abstract_1773117656917.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            {/* Deep blue tech gradient overlay */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/30 via-black to-[#050a15]/90 pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full z-10 relative">
                <RevealWrapper className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 font-mono text-xs rounded-full border border-blue-500/20 mb-6 font-bold shadow-lg tracking-widest uppercase gap-2 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        {tag}
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-white leading-tight drop-shadow-xl" dangerouslySetInnerHTML={{ __html: title }} />
                    <p className="text-gray-300 text-xl max-w-2xl mx-auto font-light leading-relaxed bg-black/40 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
                        {description}
                    </p>
                </RevealWrapper>

                {/* Four Quadrants Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full perspective-[1000px]">
                    {quadrants.map((q: any, index: number) => (
                        <RevealWrapper key={index} delay={0.2 * (index + 1)} className="h-full">
                            <div
                                onClick={() => setSelectedPopup(index)}
                                className={`bg-[#050a15]/80 backdrop-blur-xl border ${getColorClass(q.color, 'border')} p-8 lg:p-10 rounded-3xl h-full group hover:-translate-y-2 transition-all duration-500 ${getColorClass(q.color, 'hoverBorder')} hover:bg-[#0a1225]/90 shadow-xl hover:${getColorClass(q.color, 'shadow')} relative overflow-hidden flex flex-col justify-between cursor-pointer`}
                            >
                                <div className={`absolute ${index % 2 === 0 ? 'top-0' : 'bottom-0'} right-0 w-40 h-40 ${getColorClass(q.color, 'bg')} rounded-full blur-[50px] group-hover:scale-150 transition-transform duration-700 pointer-events-none`}></div>

                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className={`text-2xl lg:text-3xl font-bold text-white ${getColorClass(q.color, 'hoverText')} transition-colors w-2/3`}>{q.title}</h3>
                                        <div className="flex justify-end items-center mb-2 transform group-hover:scale-110 transition-transform duration-300 origin-right">
                                            {renderLogo(q.platform)}
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-base lg:text-lg leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">{q.desc}</p>
                                </div>

                                <div className="mt-8">
                                    <div className={`inline-flex items-center text-sm font-bold ${getColorClass(q.color, 'text')} opacity-80 group-hover:opacity-100 transition-opacity bg-white/5 px-4 py-2 rounded-full border border-white/5`}>
                                        <span className="mr-2 border border-current rounded-full w-5 h-5 flex items-center justify-center text-[10px]">+</span>
                                        点击查看平台核心特点
                                    </div>
                                </div>
                            </div>
                        </RevealWrapper>
                    ))}
                </div>
            </div>

            {/* Popup Modal */}
            <AnimatePresence>
                {selectedPopup !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-md"
                        onClick={() => setSelectedPopup(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className={`bg-[#0a0f18] border ${getColorClass(quadrants[selectedPopup].color, 'border')} p-8 md:p-12 rounded-3xl max-w-xl w-full shadow-2xl relative overflow-hidden`}
                            onClick={e => e.stopPropagation()}
                        >
                            <div className={`absolute top-0 right-0 w-64 h-64 ${getColorClass(quadrants[selectedPopup].color, 'bg')} rounded-full blur-[60px] pointer-events-none`}></div>
                            <div className={`absolute bottom-0 left-0 w-40 h-40 ${getColorClass(quadrants[selectedPopup].color, 'bg')} rounded-full blur-[40px] pointer-events-none`}></div>

                            <div className="flex items-center gap-6 mb-8 relative z-10">
                                <div className="scale-125 transform origin-left">
                                    {renderLogo(quadrants[selectedPopup].platform)}
                                </div>
                                <h3 className="text-3xl font-bold text-white tracking-tight">
                                    {quadrants[selectedPopup].popupTitle}
                                </h3>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed mb-10 relative z-10">
                                {quadrants[selectedPopup].popupText}
                            </p>

                            <button
                                onClick={() => setSelectedPopup(null)}
                                className={`w-full py-4 ${getColorClass(quadrants[selectedPopup].color, 'btn')} text-white rounded-xl font-bold transition-colors shadow-lg shadow-black/20 active:scale-[0.98]`}
                            >
                                我明白了
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
