'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 pointer-events-none ${scrolled ? 'bg-black/60 backdrop-blur-md border-b border-white/10 py-4 shadow-lg' : 'bg-transparent py-6'
            }`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-end gap-x-6 items-center w-full pointer-events-auto">
                <Link
                    href="https://dmestudio-portfolio.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-2 hover:opacity-80 transition-opacity"
                >
                    <div className="relative h-8 w-10">
                        <Image
                            src="/images/logos/dmmi_logo_white.webp"
                            alt="DME Studio Logo"
                            fill
                            className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                        />
                    </div>
                    <span className="text-white font-bold text-sm tracking-widest hidden sm:inline-block">DME Studio</span>
                </Link>

                <div className="w-px h-5 bg-white/20 mx-1"></div>

                <Link
                    href="https://cyano-display.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-2 hover:opacity-80 transition-opacity"
                >
                    <div className="relative h-6 w-8">
                        <Image
                            src="/images/logos/cyano_logo_green.webp"
                            alt="Cyano Logo"
                            fill
                            className="object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                        />
                    </div>
                    <span className="text-cyan-400 font-bold text-sm tracking-widest hidden sm:inline-block">Cyano AI</span>
                </Link>

                <div className="w-px h-5 bg-white/20 mx-1"></div>

                <Link
                    href="/contact"
                    className="flex items-center justify-center px-4 py-1.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors text-white font-medium text-sm ml-2"
                >
                    联系我们
                </Link>
            </div>
        </nav>
    );
}
