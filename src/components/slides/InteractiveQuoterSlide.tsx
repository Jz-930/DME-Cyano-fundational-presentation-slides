'use client';

import { content } from '@/config/content';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, User, HeartPulse, RefreshCw, CheckCircle2 } from 'lucide-react';

export function InteractiveQuoterSlide() {
    const [step, setStep] = useState(1);
    const [ageRange, setAgeRange] = useState('');
    const [smokerStatus, setSmokerStatus] = useState('');
    const [coverage, setCoverage] = useState('');

    const { title, description, whyItWorks, demoApp } = content.functionalWeb.interactiveQuoter;

    const nextStep = () => {
        if (step < 4) setStep(step + 1);
    };

    const resetForm = () => {
        setStep(1);
        setAgeRange('');
        setSmokerStatus('');
        setCoverage('');
    };

    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center p-8 bg-[#02050a] overflow-hidden z-10 border-t border-white/5">
            {/* Dynamic tech background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#050a15] to-[#02050a] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/images/grid_pattern.svg')] opacity-[0.03] bg-repeat pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto w-full z-10 relative items-center">

                {/* Left Side: Content */}
                <RevealWrapper delay={0.2} className="lg:pr-8 flex flex-col justify-center h-full">
                    <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 text-cyan-400 font-mono text-xs lg:text-sm rounded-full border border-cyan-500/30 mb-8 font-bold shadow-lg tracking-widest uppercase gap-2 backdrop-blur-md self-start">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        Live Demo: Interactive Quoter
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 text-white leading-tight drop-shadow-xl">
                        {title.split('“')[0]}<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">“微交互”</span><br className="hidden lg:block" />{title.split('”')[1]}
                    </h2>

                    <div className="text-gray-300 text-lg lg:text-xl font-light leading-relaxed mb-10 space-y-4">
                        <p>{description[0]}</p>
                        <p>{description[1]}</p>
                    </div>

                    <div className="bg-[#0a0f1a]/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-[40px] group-hover:bg-cyan-500/10 transition-colors duration-500 pointer-events-none"></div>

                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 flex items-center">
                            <span className="text-cyan-400 mr-3">💎</span> {whyItWorks.title}
                        </h3>
                        <ul className="space-y-4 text-base lg:text-lg text-gray-300 font-light">
                            {whyItWorks.points.map((point, idx) => (
                                <li key={idx} className="flex items-start group/item">
                                    <span className="text-emerald-400 mr-3 mt-1 font-bold group-hover/item:scale-125 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">✓</span>
                                    <span className="group-hover/item:text-white transition-colors duration-300">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </RevealWrapper>

                {/* Right Side: Interactive Component Mockup */}
                <RevealWrapper delay={0.4} className="relative h-full min-h-[600px] flex justify-center items-center perspective-[1000px]">

                    {/* Glowing Background Ring */}
                    <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full mix-blend-screen scale-90 lg:scale-110 pointer-events-none animate-pulse-slow"></div>

                    <div className="w-full max-w-md bg-[#0a0f1a]/90 backdrop-blur-2xl border border-cyan-500/30 rounded-[2.5rem] shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden relative z-10 group hover:shadow-[0_0_80px_rgba(6,182,212,0.25)] transition-shadow duration-700 hover:-translate-y-2">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-900/90 to-cyan-900/90 p-6 flex items-center justify-between border-b border-cyan-500/30 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>

                            <div className="flex items-center gap-4 relative z-10">
                                <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-md border border-white/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
                                    <Calculator className="text-cyan-50" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg drop-shadow-sm">{demoApp.title}</h3>
                                    <p className="text-cyan-200 text-xs font-medium tracking-wide">{demoApp.subtitle}</p>
                                </div>
                            </div>
                            {step === 4 && (
                                <button onClick={resetForm} className="text-white/60 hover:text-white hover:rotate-180 transition-all duration-500 relative z-10 bg-white/5 p-2 rounded-full hover:bg-white/10">
                                    <RefreshCw size={18} />
                                </button>
                            )}
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-[#050a15] h-1.5 relative overflow-hidden">
                            <div
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-700 ease-in-out"
                                style={{ width: `${(step / 4) * 100}%` }}
                            ></div>
                        </div>

                        {/* Body */}
                        <div className="p-6 md:p-8 pb-10 min-h-[520px] flex flex-col justify-center relative">
                            {/* Inner subtle glow */}
                            <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/5 to-transparent pointer-events-none"></div>

                            {/* Step 1 */}
                            {step === 1 && (
                                <div className="animate-in fade-in slide-in-from-right-8 duration-500 relative z-10">
                                    <div className="flex items-center gap-3 mb-8 text-cyan-400">
                                        <div className="bg-cyan-500/10 p-2 rounded-lg border border-cyan-500/20">
                                            <User size={20} />
                                        </div>
                                        <h4 className="text-xl font-bold text-white drop-shadow-sm">{demoApp.steps[0].question}</h4>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        {demoApp.steps[0].options?.map((age) => (
                                            <button
                                                key={age}
                                                onClick={() => { setAgeRange(age); setTimeout(nextStep, 350); }}
                                                className={`py-4 rounded-xl border text-sm font-bold transition-all duration-300 hover:scale-[1.02] ${ageRange === age
                                                    ? 'bg-gradient-to-br from-cyan-400 to-blue-500 text-black border-transparent shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                                                    : 'bg-[#0f172a]/60 text-gray-300 border-gray-700 hover:border-cyan-500/50 hover:bg-[#1e293b]/80'
                                                    }`}
                                            >
                                                {age}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Step 2 */}
                            {step === 2 && (
                                <div className="animate-in fade-in slide-in-from-right-8 duration-500 relative z-10">
                                    <div className="flex items-center gap-3 mb-4 text-cyan-400">
                                        <div className="bg-cyan-500/10 p-2 rounded-lg border border-cyan-500/20">
                                            <HeartPulse size={20} />
                                        </div>
                                        <h4 className="text-xl font-bold text-white drop-shadow-sm">{demoApp.steps[1].question}</h4>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-8 font-light italic bg-white/5 p-3 rounded-lg border border-white/5 inline-block">{demoApp.steps[1].hint}</p>
                                    <div className="space-y-4">
                                        {demoApp.steps[1].options?.map((status) => (
                                            <button
                                                key={status}
                                                onClick={() => { setSmokerStatus(status); setTimeout(nextStep, 350); }}
                                                className={`w-full py-4 px-6 rounded-xl border text-sm font-bold flex justify-between items-center transition-all duration-300 hover:scale-[1.02] ${smokerStatus === status
                                                    ? 'bg-gradient-to-br from-cyan-400 to-blue-500 text-black border-transparent shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                                                    : 'bg-[#0f172a]/60 text-gray-300 border-gray-700 hover:border-cyan-500/50 hover:bg-[#1e293b]/80'
                                                    }`}
                                            >
                                                <span>{status}</span>
                                                {smokerStatus === status && <CheckCircle2 size={20} className="text-black drop-shadow-sm" />}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Step 3 */}
                            {step === 3 && (
                                <div className="animate-in fade-in slide-in-from-right-8 duration-500 relative z-10">
                                    <div className="flex items-center gap-3 mb-8 text-cyan-400">
                                        <div className="bg-cyan-500/10 p-2 rounded-lg border border-cyan-500/20">
                                            <ShieldCheck size={20} />
                                        </div>
                                        <h4 className="text-xl font-bold text-white drop-shadow-sm">{demoApp.steps[2].question}</h4>
                                    </div>
                                    <div className="space-y-4 mb-10">
                                        {demoApp.steps[2].options?.map((amt: string) => (
                                            <button
                                                key={amt}
                                                onClick={() => setCoverage(amt)}
                                                className={`w-full py-3 px-6 rounded-xl border text-sm font-bold flex justify-center transition-all duration-300 hover:scale-[1.02] ${coverage === amt
                                                    ? 'bg-gradient-to-br from-cyan-400 to-blue-500 text-black border-transparent shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                                                    : 'bg-[#0f172a]/60 text-gray-300 border-gray-700 hover:border-cyan-500/50 hover:bg-[#1e293b]/80'
                                                    }`}
                                            >
                                                {amt}
                                            </button>
                                        ))}
                                    </div>
                                    <button
                                        disabled={!coverage}
                                        onClick={nextStep}
                                        className="w-full bg-gradient-to-r from-blue-500 flex-grow to-cyan-400 text-white font-bold py-4 rounded-xl shadow-[0_4px_14px_0_rgba(6,182,212,0.39)] hover:shadow-[0_6px_20px_rgba(6,182,212,0.23)] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none transition-all flex justify-center items-center gap-3 text-lg"
                                    >
                                        {demoApp.steps[2].action} <ArrowRight size={20} className={coverage ? "animate-pulse" : ""} />
                                    </button>
                                </div>
                            )}

                            {/* Step 4: The Lead Capture */}
                            {step === 4 && (
                                <div className="animate-in fade-in zoom-in-95 duration-700 text-center relative z-10 flex flex-col h-full justify-between">
                                    <div>
                                        <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.2)] relative">
                                            <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-20"></div>
                                            <ShieldCheck className="text-emerald-400 relative z-10" size={40} />
                                        </div>
                                        <h4 className="text-3xl font-bold text-white mb-3 drop-shadow-md">{demoApp.steps[3].title}</h4>
                                        <p className="text-gray-300 text-sm mb-6 leading-relaxed bg-black/40 p-4 rounded-xl border border-white/5 mx-2">
                                            {demoApp.steps[3].resultText?.[0]} <strong className="text-cyan-300">{ageRange}、{smokerStatus.split(' ')[0]}</strong> {demoApp.steps[3].resultText?.[1]} <strong className="text-cyan-300">{coverage.split(' ')[0]}</strong> {demoApp.steps[3].resultText?.[2]}<br />
                                            {demoApp.steps[3].resultText?.[3]}<span className="text-emerald-400 font-bold ml-1">{demoApp.steps[3].resultText?.[4]}</span>。
                                        </p>
                                    </div>

                                    <div className="bg-[#0f172a]/80 border border-cyan-900/50 p-5 rounded-2xl space-y-4 text-left shadow-inner backdrop-blur-sm">
                                        <input type="text" placeholder={demoApp.steps[3].fields?.[0]} className="w-full bg-[#050a15] border border-gray-800 rounded-xl p-3.5 text-white text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors outline-none placeholder:text-gray-600 font-light" />
                                        <input type="tel" placeholder={demoApp.steps[3].fields?.[1]} className="w-full bg-[#050a15] border border-gray-800 rounded-xl p-3.5 text-white text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors outline-none placeholder:text-gray-600 font-light" />
                                        <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-400 text-white font-black py-4 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:-translate-y-1 transition-all text-base tracking-wide mt-2">
                                            {demoApp.steps[3].action}
                                        </button>
                                        <p className="text-gray-500 text-[11px] text-center mt-3 font-light leading-tight px-2">{demoApp.steps[3].disclaimer}</p>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </RevealWrapper>

            </div>

        </section>
    );
}
