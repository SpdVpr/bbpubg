import { Crosshair, Map, Backpack, FileText } from 'lucide-react';
import Link from 'next/link';

const features = [
    {
        icon: Crosshair,
        title: "Weapon Armory",
        desc: "Complete database of confirmed & leaked firearms with stats.",
        href: "/armory",
        color: "text-red-500"
    },
    {
        icon: Map,
        title: "Map Intel",
        desc: "Interactive maps showing rumored POIs and extraction points.",
        href: "/intel",
        color: "text-emerald-500"
    },
    {
        icon: Backpack,
        title: "Loadout Builder",
        desc: "Theorycraft your extract inventory. Calculate value per slot.",
        href: "/loadout",
        color: "text-amber-500"
    },
    {
        icon: FileText,
        title: "Extraction Guides",
        desc: "Master the economy, survival mechanics, and loot pathing.",
        href: "/guides",
        color: "text-blue-500"
    }
];

export function QuickLinks() {
    return (
        <section className="py-24 container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, idx) => (
                    <Link
                        key={idx}
                        href={feature.href}
                        className="group relative p-8 bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-all hover:-translate-y-1"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <feature.icon className={`w-10 h-10 mb-6 ${feature.color} opacity-80 group-hover:opacity-100`} />

                        <h3 className="font-display font-bold text-xl text-slate-100 mb-3 group-hover:text-amber-500 transition-colors">
                            {feature.title}
                        </h3>

                        <p className="text-slate-400 text-sm leading-relaxed">
                            {feature.desc}
                        </p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
