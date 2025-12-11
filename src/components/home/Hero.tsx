'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Timer, ArrowRight, Skull } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    // Set target date to Nov 15, 2026 (Speculative release)
    useEffect(() => {
        const targetDate = new Date('2026-11-15T00:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-white/5">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="PUBG Black Budget Concept"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
            </div>

            {/* Background Grid & Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>
            <div className="absolute inset-0 bg-radial-gradient from-slate-900/80 via-slate-900/90 to-slate-950 z-0"></div>

            <div className="container relative z-10 px-4 flex flex-col items-center text-center">

                {/* Release Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-mono font-bold uppercase tracking-widest mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                    PUBG: Black Budget Info Hub
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="font-display font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-6"
                >
                    PUBG:<br />
                    <span className="text-stroke-1 text-transparent bg-clip-text bg-gradient-to-b from-amber-500 to-amber-700">BLACK BUDGET</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed"
                >
                    The next generation extraction shooter from Krafton is coming. <br />
                    Secure the loot, survive the zone, and escape with your life.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mb-12"
                >
                    <div className="inline-flex flex-col items-center p-6 bg-slate-900/80 border border-amber-500/30 rounded-sm backdrop-blur-md">
                        <span className="text-amber-500 text-sm font-bold tracking-[0.3em] uppercase mb-2">Current Status</span>
                        <span className="text-4xl md:text-5xl font-display font-black text-white tracking-widest">
                            ALPHA <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-200">LIVE</span>
                        </span>
                        <span className="text-slate-400 text-sm font-mono mt-2">DECEMBER 2025 • PC STEAM</span>
                    </div>
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link href="/armory" className="group relative px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold uppercase tracking-widest transition-all clip-path-slant">
                        <span className="relative z-10 flex items-center gap-2">
                            Browse Armory <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </Link>

                    <Link href="/news" className="group px-8 py-4 bg-transparent border border-white/10 hover:border-amber-500/50 text-slate-300 hover:text-white font-bold uppercase tracking-widest transition-all">
                        <span className="flex items-center gap-2">
                            Latest Intel
                        </span>
                    </Link>
                </motion.div>
            </div>

            {/* Decorative Texture */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
        </section>
    );
}

function CountdownUnit({ value, label }: { value: number, label: string }) {
    return (
        <div className="flex flex-col items-center bg-slate-900/50 backdrop-blur border border-white/5 p-4 min-w-[100px] rounded-sm">
            <span className="font-mono text-4xl md:text-5xl font-bold text-slate-100 tabular-nums">
                {value.toString().padStart(2, '0')}
            </span>
            <span className="text-xs text-slate-500 uppercase tracking-widest mt-2">{label}</span>
        </div>
    );
}
