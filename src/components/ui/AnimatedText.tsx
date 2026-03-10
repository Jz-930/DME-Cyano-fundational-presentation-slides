'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';

interface AnimatedTextProps {
    text: string;
    className?: string;
    delay?: number;
    as?: React.ElementType;
}

export function AnimatedText({ text, className, delay = 0, as: Component = 'span' }: AnimatedTextProps) {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: delay * 0.1 },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring' as const,
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: 'spring' as const,
                damping: 12,
                stiffness: 100,
            },
        },
    };

    const MotionComponent = motion(Component);

    return (
        <MotionComponent
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", gap: "0.25em" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className={className}
        >
            {words.map((word, index) => (
                <motion.span variants={child} key={index}>
                    {word}
                </motion.span>
            ))}
        </MotionComponent>
    );
}
