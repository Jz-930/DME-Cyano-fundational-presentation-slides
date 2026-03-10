'use client';

import { Slide } from '@/components/layout/Slide';
import { FadeIn } from '@/components/ui/FadeIn';
import { Modal } from '@/components/ui/Modal';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, AlertTriangle, ShieldX, Ghost } from 'lucide-react';

export function PainPointsSlide() {
    const [activeModal, setActiveModal] = useState<number | null>(null);
    const [modal3Page, setModal3Page] = useState<1 | 2>(1);

    return (
        <Slide theme="dark" className="relative">
            {/* 3D Generated Background Layer */}
            <div
                className="absolute inset-0 z-0 opacity-20 mix-blend-screen"
                style={{
                    backgroundImage: "url('/images/pain_points_3d_1773117631911.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/80 to-black/20" />

            <FadeIn direction="up" className="z-10 relative">
                <h2 className="text-3xl md:text-6xl font-bold mb-8 md:mb-16 text-center text-white">
                    <span className="text-red-500 inline-block px-2 mr-2">三大抱怨</span>，我听到耳朵起茧
                </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto z-10 relative px-2 md:px-0">
                {/* Card 1 */}
                <FadeIn delay={0.2} direction="up" className="h-full">
                    <div
                        onClick={() => setActiveModal(1)}
                        className="backdrop-blur-md bg-white/5 border border-red-500/20 rounded-2xl p-6 md:p-8 cursor-pointer hover:bg-white/10 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center min-h-[200px] md:h-[350px] group"
                    >
                        <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-red-500/10 flex items-center justify-center mb-4 md:mb-6 text-red-500 group-hover:scale-110 group-hover:bg-red-500/20 transition-all">
                            <AlertTriangle size={28} className="md:hidden" />
                            <AlertTriangle size={36} className="hidden md:block" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white">转介绍<br />遇到天花板</h3>
                        <p className="text-gray-400 text-base mb-6 flex-grow">
                            老客户的圈层洗完了，大单全靠碰运气...
                        </p>
                        <span className="text-red-400 text-sm font-semibold flex items-center group-hover:opacity-100 opacity-60 transition-opacity">
                            击碎幻觉 - 查看真相 <ArrowRight size={14} className="ml-1" />
                        </span>
                    </div>
                </FadeIn>

                {/* Card 2 */}
                <FadeIn delay={0.4} direction="up" className="h-full">
                    <div
                        onClick={() => setActiveModal(2)}
                        className="backdrop-blur-md bg-white/5 border border-orange-500/20 rounded-2xl p-6 md:p-8 cursor-pointer hover:bg-white/10 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center min-h-[200px] md:h-[350px] group"
                    >
                        <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-orange-500/10 flex items-center justify-center mb-4 md:mb-6 text-orange-400 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all">
                            <ShieldX size={28} className="md:hidden" />
                            <ShieldX size={36} className="hidden md:block" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white">买来的<br />二手 Lead 有毒</h3>
                        <p className="text-gray-400 text-base mb-6 flex-grow">
                            花钱买名单接通率极低，员工每天打到崩溃...
                        </p>
                        <span className="text-orange-400 text-sm font-semibold flex items-center group-hover:opacity-100 opacity-60 transition-opacity">
                            击碎幻觉 - 查看真相 <ArrowRight size={14} className="ml-1" />
                        </span>
                    </div>
                </FadeIn>

                {/* Card 3 */}
                <FadeIn delay={0.6} direction="up" className="h-full">
                    <div
                        onClick={() => {
                            setModal3Page(1);
                            setActiveModal(3);
                        }}
                        className="backdrop-blur-md bg-white/5 border border-purple-500/20 rounded-2xl p-6 md:p-8 cursor-pointer hover:bg-white/10 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center min-h-[200px] md:h-[350px] group"
                    >
                        <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 md:mb-6 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                            <Ghost size={28} className="md:hidden" />
                            <Ghost size={36} className="hidden md:block" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white">发自媒体<br />纯属自嗨</h3>
                        <p className="text-gray-400 text-base mb-6 flex-grow">
                            花几小时做视频，点赞的全是同行刺探情报...
                        </p>
                        <span className="text-purple-400 text-sm font-semibold flex items-center group-hover:opacity-100 opacity-60 transition-opacity">
                            击碎幻觉 - 查看真相 <ArrowRight size={14} className="ml-1" />
                        </span>
                    </div>
                </FadeIn>
            </div>

            {/* MODALS */}
            <Modal isOpen={activeModal === 1} onClose={() => setActiveModal(null)} title="死局 1：转介绍（Referral）遇到天花板">
                <div className="space-y-4">
                    <div className="w-full relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10">
                        <Image src="/images/001.webp" alt="死局 1：转介绍" fill className="object-contain" />
                    </div>
                    <p className="text-xl text-gray-300 font-light border-l-4 border-red-500 pl-4">
                        你的专业能力再强，每个人的社交圈也是有物理边界的。
                    </p>
                    <p className="text-lg text-gray-400 font-light">
                        当最亲密的亲戚朋友、以前的同学同事都被“洗”过一遍后，你发现大单全靠碰运气，完全无法预测下个月的业绩。转介绍是一种被动的增长，不可扩展。
                    </p>
                </div>
            </Modal>

            <Modal isOpen={activeModal === 2} onClose={() => setActiveModal(null)} title="死局 2：买来的二手 Lead（线索）有毒">
                <div className="space-y-4">
                    <div className="w-full relative aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-white/10">
                        <Image src="/images/002.webp" alt="死局 2：二手 Lead" fill className="object-contain" />
                    </div>
                    <p className="text-xl text-gray-300 font-light border-l-4 border-orange-500 pl-4">
                        为了获客，很多团队花高价去第三方买名单。当你或你的助理打过去核实，客户的反应通常是：“我没填过这个！”、“别烦我了！”
                    </p>
                    <p className="text-lg text-gray-400 font-light">
                        接通率极低，不仅浪费了购买名单的钱，更可怕的是极大地摧毁了销售团队的信心。员工每天打电话打到崩溃。
                    </p>
                </div>
            </Modal>

            <Modal isOpen={activeModal === 3} onClose={() => setActiveModal(null)} title="死局 3：发自媒体纯属“自嗨”">
                <div className="grid grid-cols-1 grid-rows-1 overflow-hidden relative">
                    {/* Page 1 */}
                    <div
                        className={`col-start-1 row-start-1 transition-all duration-500 ease-in-out ${modal3Page === 1
                            ? 'opacity-100 translate-x-0 pointer-events-auto'
                            : 'opacity-0 -translate-x-full pointer-events-none'
                            }`}
                    >
                        <div className="space-y-4">
                            <div className="w-full relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10">
                                <Image src="/images/003.webp" alt="死局 3：自嗨自媒体" fill className="object-contain" />
                            </div>
                            <p className="text-xl text-gray-300 font-light border-l-4 border-purple-500 pl-4">
                                看到同行做小红书或者视频号，你也跟着做。花了几小时剪出来的干货视频，一看播放量只有200。
                            </p>
                            <p className="text-lg text-gray-400 font-light">
                                点赞的还全是同行来刺探情报的。真实的 C 端高客挂零。因为你陷入了“以自我为中心”的内容沼泽，没搞懂平台算法到底想要什么。
                            </p>
                            <div className="pt-4 flex justify-end">
                                <button
                                    onClick={() => setModal3Page(2)}
                                    className="px-6 py-2 bg-purple-500/20 text-purple-400 rounded-full hover:bg-purple-500/40 transition-colors flex items-center group"
                                >
                                    所以真相是什么？ <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Page 2 */}
                    <div
                        className={`col-start-1 row-start-1 transition-all duration-500 ease-in-out ${modal3Page === 2
                            ? 'opacity-100 translate-x-0 pointer-events-auto'
                            : 'opacity-0 translate-x-full pointer-events-none'
                            }`}
                    >
                        <div className="space-y-6 flex flex-col h-full justify-center pb-8 pt-4">
                            <p className="text-xl text-gray-300 font-light leading-relaxed">
                                自媒体只是看起来不花钱，其实是一条<span className="text-purple-400 font-medium">成本很高</span>的途径。
                            </p>
                            <p className="text-xl text-gray-300 font-light leading-relaxed">
                                因为内容要挖空心思，没有办法强制观众观看。不爱就会立刻划走。
                            </p>

                            <div className="mt-8 p-6 bg-purple-500/10 border border-purple-500/30 rounded-xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500" />
                                <h4 className="text-2xl text-white font-bold mb-2">残酷的真相：</h4>
                                <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 font-bold tracking-wide">
                                    自媒体，本质是服务业。
                                </p>
                            </div>

                            <div className="pt-8 flex justify-start">
                                <button
                                    onClick={() => setModal3Page(1)}
                                    className="px-6 py-2 bg-white/5 text-gray-400 rounded-full hover:bg-white/10 hover:text-white transition-colors flex items-center group"
                                >
                                    <ArrowRight size={16} className="mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" /> 返回上一页
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

        </Slide>
    );
}
