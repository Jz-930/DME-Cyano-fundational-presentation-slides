'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// Generate random dots for the background
const generateParticles = (count: number) => {
    return Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100, // percentage
        y: Math.random() * 100, // percentage
        size: Math.random() * 2 + 1, // 1-3px
        duration: Math.random() * 20 + 20, // 20-40s
        delay: Math.random() * 10,
        opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4
    }));
};

export function ParticlesBackground() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const particles = useMemo(() => {
        if (!isMounted) return [];
        return generateParticles(40);
    }, [isMounted]);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#02040a]">
            {/* Base Grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.5) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Subtle Ambient Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] mix-blend-screen opacity-40" />

            {/* Floating Particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                    style={{
                        left: `${particle.x}%`,
                        width: particle.size,
                        height: particle.size,
                        opacity: particle.opacity,
                    }}
                    initial={{ y: `${particle.y}vh` }}
                    animate={{
                        y: [`${particle.y}vh`, '-10vh'],
                        opacity: [0, particle.opacity, 0]
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
}
