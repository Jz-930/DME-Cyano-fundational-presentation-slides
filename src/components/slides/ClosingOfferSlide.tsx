'use client';

import { useState } from 'react';
import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone } from 'lucide-react';

export function ClosingOfferSlide() {
    const { title, subtitle, description } = content.closing.offer;
    const [activeQr, setActiveQr] = useState<{ src: string, label: string } | null>(null);

    return (
        <section id="contact" className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center p-8 bg-black overflow-hidden border-t border-white/5 py-24">

            {/* Dramatic central light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.15)_0%,_transparent_70%)] pointer-events-none mix-blend-screen mix-blend-lighten" />

            <div className="max-w-6xl mx-auto w-full z-10 relative text-center">

                <RevealWrapper>
                    <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">{subtitle}</p>
                    <h2 className="text-5xl md:text-7xl font-bold font-heading mb-8 text-white leading-tight" dangerouslySetInnerHTML={{ __html: title }} />

                    <p className="text-gray-300 text-xl md:text-2xl font-light mb-16 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />

                    <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-10 lg:p-14 rounded-[2.5rem] w-full mx-auto shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-center justify-center relative z-10 w-full">

                            {/* Left: Profile Info */}
                            <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-[40%]">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 mb-6 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-black relative">
                                        <Image src="/images/jiackey-avatar.jpg" alt="Jiackey Zhang" fill className="object-cover" />
                                    </div>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">Jiackey Zhang</h3>
                                <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-6">Managing Director</p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-[280px]">
                                    Ready to scale your insurance business? Scan to seamlessly integrate DME & Cyano AI into your workflow.
                                </p>
                                <div className="flex flex-col items-center lg:items-start w-full gap-3">
                                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-white/10 transition-colors w-fit">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                                            <Phone size={16} />
                                        </div>
                                        <span className="text-sm text-gray-300 font-mono tracking-wide">+1 647-870-6338</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-white/10 transition-colors w-fit">
                                        <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                                            <Mail size={16} />
                                        </div>
                                        <span className="text-sm text-gray-300 font-mono tracking-wide">jiackey.zhang@dmestudio.net</span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-px h-px lg:h-64 bg-gradient-to-r lg:bg-gradient-to-b from-transparent via-white/20 to-transparent my-4 lg:my-0 hidden lg:block"></div>

                            {/* Right: QR Codes */}
                            <div className="flex flex-col sm:flex-row gap-8 lg:gap-10 justify-center items-center lg:w-[60%] overflow-visible">
                                {/* VCard */}
                                <div
                                    className="flex flex-col items-center group/qr cursor-pointer"
                                    onClick={() => setActiveQr({ src: '/images/qr-vcard.png', label: 'Save Contact / 名片' })}
                                >
                                    <div className="w-36 h-36 lg:w-44 lg:h-44 bg-white rounded-2xl p-2.5 mb-4 shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover/qr:-translate-y-2 group-hover/qr:shadow-[0_20px_40px_rgba(34,211,238,0.2)] transition-all duration-500 relative">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-2xl -z-10 blur-xl opacity-0 group-hover/qr:opacity-40 transition-opacity duration-500"></div>
                                        <div className="w-full h-full relative rounded-xl overflow-hidden border border-gray-100">
                                            <Image src="/images/qr-vcard.png" alt="VCard QR Code" fill className="object-cover" />
                                        </div>
                                    </div>
                                    <p className="text-white font-medium mb-1 drop-shadow-md group-hover/qr:text-cyan-300 transition-colors">Save Contact</p>
                                    <p className="text-cyan-400/80 font-mono text-xs uppercase tracking-widest">vCard / 名片</p>
                                </div>

                                {/* WeChat */}
                                <div
                                    className="flex flex-col items-center group/qr cursor-pointer"
                                    onClick={() => setActiveQr({ src: '/images/qr-wechat.jpg', label: 'WeChat / 微信' })}
                                >
                                    <div className="w-36 h-36 lg:w-44 lg:h-44 bg-white rounded-2xl p-2.5 mb-4 shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover/qr:-translate-y-2 group-hover/qr:shadow-[0_20px_40px_rgba(52,211,153,0.2)] transition-all duration-500 relative">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-green-500 rounded-2xl -z-10 blur-xl opacity-0 group-hover/qr:opacity-40 transition-opacity duration-500"></div>
                                        <div className="w-full h-full relative rounded-xl overflow-hidden border border-gray-100">
                                            <Image src="/images/qr-wechat.jpg" alt="WeChat QR Code" fill className="object-cover" />
                                        </div>
                                    </div>
                                    <p className="text-white font-medium mb-1 drop-shadow-md group-hover/qr:text-emerald-300 transition-colors">WeChat</p>
                                    <p className="text-emerald-400/80 font-mono text-xs uppercase tracking-widest">微信</p>
                                </div>

                                {/* WhatsApp */}
                                <div
                                    className="flex flex-col items-center group/qr cursor-pointer"
                                    onClick={() => setActiveQr({ src: '/images/qr-whatsapp.jpg', label: 'WhatsApp' })}
                                >
                                    <div className="w-36 h-36 lg:w-44 lg:h-44 bg-white rounded-2xl p-2.5 mb-4 shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover/qr:-translate-y-2 group-hover/qr:shadow-[0_20px_40px_rgba(45,212,191,0.2)] transition-all duration-500 relative">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-teal-400 to-cyan-500 rounded-2xl -z-10 blur-xl opacity-0 group-hover/qr:opacity-40 transition-opacity duration-500"></div>
                                        <div className="w-full h-full relative rounded-xl overflow-hidden border border-gray-100">
                                            <Image src="/images/qr-whatsapp.jpg" alt="WhatsApp QR Code" fill className="object-cover" />
                                        </div>
                                    </div>
                                    <p className="text-white font-medium mb-1 drop-shadow-md group-hover/qr:text-teal-300 transition-colors">WhatsApp</p>
                                    <p className="text-teal-400/80 font-mono text-xs uppercase tracking-widest">Message</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </RevealWrapper>

            </div>

            {/* Modal for enlarged QR */}
            <AnimatePresence>
                {activeQr && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl"
                        onClick={() => setActiveQr(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative bg-white p-6 rounded-[2rem] shadow-2xl max-w-sm w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setActiveQr(null)}
                                className="absolute -top-4 -right-4 bg-zinc-900 border border-white/20 text-white p-2 rounded-full hover:bg-zinc-800 transition-colors shadow-xl"
                            >
                                <X size={20} />
                            </button>

                            <div className="w-full aspect-square relative rounded-2xl overflow-hidden mb-6 bg-white">
                                <Image src={activeQr.src} alt={activeQr.label} fill className="object-contain p-2" />
                            </div>

                            <div className="text-center">
                                <h4 className="text-xl font-bold text-gray-900">{activeQr.label.split(' / ')[0]}</h4>
                                {activeQr.label.includes(' / ') && (
                                    <p className="text-gray-500 font-medium text-sm mt-1">{activeQr.label.split(' / ')[1]}</p>
                                )}
                                <p className="text-cyan-600 font-mono text-xs tracking-widest uppercase mt-4">Scan QR Code</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}
