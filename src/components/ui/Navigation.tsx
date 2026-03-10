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
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center w-full pointer-events-auto">
                <Link
                    href="https://dmestudio-portfolio.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block h-10 w-40 hover:opacity-80 transition-opacity"
                >
                    <Image
                        src="/images/logos/dmmi_logo_white.webp"
                        alt="DME Studio Logo"
                        fill
                        className="object-contain object-left drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    />
                </Link>
                <Link
                    href="https://cyano-display.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block h-8 w-32 hover:opacity-80 transition-opacity"
                >
                    <Image
                        src="/images/logos/cyano_logo_green.webp"
                        alt="Cyano Logo"
                        fill
                        className="object-contain object-right drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                    />
                </Link>
            </div>
        </nav>
    );
}
