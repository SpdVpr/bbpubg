'use client';

import { Radio } from 'lucide-react';

export function NewsTicker() {
    const newsItems = [
        "LEAK: 5x10 Grid System confirmed via inventory screenshot",
        "RUMOR: 'Neon City' map will feature vertical extraction zones",
        "CONFIRMED: M416 returns with legacy stats but new attachment slots",
        "INTEL: AI factions will defend high-tier loot zones",
        "UPDATE: Krafton aiming for Late 2026 release window",
    ];

    return (
        <div className="bg-slate-950 border-y border-white/5 overflow-hidden py-2 relative">
            <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-slate-950 to-transparent w-20 z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-slate-950 to-transparent w-20 z-10"></div>

            <div className="flex items-center gap-4 animate-scroll whitespace-nowrap">
                {/* Double the array for seamless loop */}
                {[...newsItems, ...newsItems].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 text-sm font-mono text-slate-400">
                        <span className="text-amber-500/50">///</span>
                        <span className="hover:text-amber-500 cursor-default transition-colors">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
