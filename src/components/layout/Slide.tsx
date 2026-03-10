import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface SlideProps extends HTMLMotionProps<"section"> {
    children: React.ReactNode;
    className?: string;
    theme?: 'dark' | 'light';
}

export function Slide({ children, className, theme = 'dark', ...props }: SlideProps) {
    return (
        <motion.section
            className={cn(
                'w-full min-h-[100dvh] flex flex-col justify-center items-center',
                'snap-start snap-always relative overflow-hidden',
                theme === 'dark' ? 'bg-black text-white' : 'bg-gray-50 text-gray-900',
                className
            )}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            {...props}
        >
            <div className="max-w-7xl w-full px-6 md:px-12 lg:px-24 py-16 z-10">
                {children}
            </div>
        </motion.section>
    );
}
