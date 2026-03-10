'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { ArrowDown } from 'lucide-react';

export function SalesAutomationSlide() {
    const { title, steps } = content.functionalWeb.salesAutomation;

    return (
        <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center p-8 bg-black z-10 border-t border-white/5 pt-20 pb-20">

            <RevealWrapper className="text-center mb-16 max-w-4xl w-full">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 text-white leading-tight drop-shadow-md" dangerouslySetInnerHTML={{ __html: title }} />
            </RevealWrapper>

            <div className="max-w-4xl mx-auto w-full z-10 relative">
                <div className="flex flex-col items-center gap-6">

                    {steps.map((step, index) => (
                        <div key={step.id} className="w-full flex flex-col items-center">
                            <RevealWrapper
                                delay={0.2 * (index + 1)}
                                className={`w-full bg-zinc-900 border border-zinc-700 p-6 md:p-8 rounded-2xl flex items-center justify-between group hover:border-${step.color}-500/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg relative overflow-hidden`}
                            >
                                {index === steps.length - 1 && (
                                    <div className={`absolute top-0 left-0 w-2 h-full bg-${step.color}-500 shadow-[0_0_20px_rgba(16,185,129,0.8)]`}></div>
                                )}

                                <div className={`flex items-start md:items-center gap-6 z-10 ${index === steps.length - 1 ? 'pl-4' : ''}`}>
                                    <div className={`w-14 h-14 md:w-20 md:h-20 shrink-0 bg-${step.color}-500/10 text-${step.color}-400 rounded-full flex items-center justify-center font-black text-2xl md:text-3xl border border-${step.color}-500/20 shadow-[0_0_15px_rgba(var(--color-${step.color}-500-rgb),0.2)]`}>
                                        0{step.id}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">{step.description}</p>
                                    </div>
                                </div>
                                <div className={`hidden lg:block text-${step.color}-400/20 text-5xl md:text-6xl font-black italic z-0 pr-4 select-none`}>
                                    {step.tag}
                                </div>
                            </RevealWrapper>

                            {index < steps.length - 1 && (
                                <RevealWrapper delay={0.2 * (index + 1) + 0.1}>
                                    <ArrowDown className="text-gray-600 my-4 md:my-6 animate-bounce" size={32} />
                                </RevealWrapper>
                            )}
                        </div>
                    ))}

                </div>
            </div>

        </section>
    );
}
