import { Crosshair, Map, Backpack, FileText, ArrowUpRight } from 'lucide-react';
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
        color: "text-cyan-400"
    },
    {
        icon: FileText,
        title: "Youtube Gameplay",
        desc: "Stay updated with the latest gameplay analysis and leaks.",
        href: "https://www.youtube.com/results?search_query=PUBG+Black+Budget+gameplay",
        color: "text-red-600",
        external: true
    },
    {
        icon: FileText,
        title: "Reddit Community",
        desc: "Join the discussion on r/PUBGBlackBudget for rumors and theories.",
        href: "https://www.reddit.com/r/PUBGBlackBudget/",
        color: "text-orange-500",
        external: true
    }
];

export function QuickLinks() {
    return (
        <section className="py-24 container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {features.map((feature, idx) => (
                    <Link
                        key={idx}
                        href={feature.href}
                        target={feature.external ? "_blank" : undefined}
                        className="group relative p-8 bg-slate-900/50 border border-slate-800 hover:border-cyan-400/30 transition-all hover:-translate-y-1"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div className="flex justify-between items-start">
                            <feature.icon className={`w-10 h-10 mb-6 ${feature.color} opacity-80 group-hover:opacity-100`} />
                            {feature.external && <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-slate-400" />}
                        </div>

                        <h3 className="font-display font-bold text-xl text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
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
