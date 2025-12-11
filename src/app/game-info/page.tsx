
import { Gallery } from '@/components/game-info/Gallery';
import { AlertTriangle, Cpu, HardDrive, Monitor, Shield, Target, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Game Info - Features, System Requirements & Map",
    description: "Detailed breakdown of PUBG: Black Budget features, Coli Island map, Anomaly mechanics, and minimum PC system requirements for Alpha.",
};

export default function GameInfoPage() {
    return (
        <div className="min-h-screen bg-slate-950">
            {/* Hero Banner */}
            <div className="relative h-[40vh] flex items-center justify-center border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/ss_b48340d5a275e5dbafb9e93007002584efec5588.1920x1080.jpg')] bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                <div className="container relative z-10 px-4 text-center">
                    <h1 className="font-display font-black text-4xl md:text-5xl text-slate-100 mb-4 uppercase tracking-tighter">
                        Mission <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">Briefing</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Everything we know about PUBG: Black Budget. Alpha tests, features, and system requirements.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 space-y-20">

                {/* ALPHA TEST ALERT */}
                <div className="bg-cyan-500/10 border border-cyan-500/20 p-8 rounded-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <AlertTriangle className="w-32 h-32 text-cyan-500" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]"></span>
                            <h2 className="font-display font-bold text-2xl text-cyan-500 uppercase tracking-widest">Closed Alpha Test - December 2025</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 text-slate-300">
                            <div className="space-y-4">
                                <p>The test will be held for <strong className="text-white">PC (Steam)</strong> players across North America, Europe, and Asia.</p>
                                <ul className="list-disc list-inside space-y-1 text-slate-400 marker:text-cyan-500">
                                    <li>Supported Languages: Russian, English, Chinese, Korean</li>
                                    <li>Mode: <strong className="text-white">FPP Only</strong></li>
                                    <li>Access: Apply via Steam Store Page or Watch Twitch/Chzzk Drops</li>
                                </ul>
                            </div>
                            <div className="flex flex-col justify-center items-start border-l border-white/10 pl-8">
                                <p className="text-sm text-slate-400 italic mb-4">"As this is an Alpha test, players may encounter various technical issues."</p>
                                <a href="#" className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-6 py-3 uppercase tracking-widest rounded-sm transition-colors">
                                    Apply on Steam
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ABOUT SECTION */}
                <section className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="font-display font-bold text-3xl text-slate-100 uppercase tracking-widest border-l-4 border-cyan-500 pl-4">
                            The Anomaly Loop
                        </h3>
                        <div className="prose prose-invert prose-lg text-slate-400">
                            <p>
                                You are a <strong>Contractor</strong>, a hardened veteran hired for a classified operation on <span className="text-white">Coli Island</span>.
                            </p>
                            <p>
                                The island is trapped in a mysterious <strong>Time Loop</strong> caused by a supernatural phenomenon known as the <em>Anomaly</em>. This constantly shifting zone shrinks the playable area, forcing squads into closer quarters as the loop destabilizes.
                            </p>
                            <p>
                                Your objective: Infiltrate, scavenge black-budget tech and research samples, and <strong>extract</strong> before the loop resets or you are KIA.
                            </p>
                        </div>
                    </div>
                    <div className="relative aspect-video rounded-sm overflow-hidden border border-slate-800 group">
                        <Image
                            src="/images/ss_ceb765a0a85c946f3db9fdc552953807e5690da2.1920x1080.jpg"
                            alt="Gameplay Context"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </section>

                {/* KEY FEATURES */}
                <section>
                    <h3 className="font-display font-bold text-3xl text-slate-100 mb-8 uppercase tracking-widest text-center">
                        Operational Intel
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <FeatureCard
                            icon={Monitor}
                            title="2.5km² Open World"
                            desc="Coli Island features diverse biomes, POIs, and massive underground research facilities."
                        />
                        <FeatureCard
                            icon={Target}
                            title="45-Player Matches"
                            desc="Deploy in 3-man squads (max 15 teams) in 30-minute high-stakes extraction raids."
                        />
                        <FeatureCard
                            icon={Shield}
                            title="Persistent Loot"
                            desc="True extraction rules: Keep what you extract. Lose everything you brought if you die."
                        />
                        <FeatureCard
                            icon={Zap}
                            title="The Anomaly"
                            desc="A predictable but deadly force that shrinks the map, creating tense PvPvE choke points."
                        />
                        <FeatureCard
                            icon={HardDrive}
                            title="Base Management"
                            desc="Upgrade your personal Hideout with crafting stations, stash expansions, and passive income generators."
                        />
                        <FeatureCard
                            icon={Cpu}
                            title="Faction Warfare"
                            desc="Align with 3 rival factions. Complete contracts to earn reputation and exclusive gear."
                        />
                    </div>
                </section>

                {/* PROGRESSION LIST */}
                <section className="bg-slate-900/50 p-8 border border-slate-800 rounded-sm">
                    <h3 className="font-display font-bold text-2xl text-slate-100 mb-6 uppercase tracking-wider">
                        Meta-Progression Systems
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-4">
                        {[
                            "Deep weapon customization (Gunsmith)",
                            "Character proficiency skills (Stamina, Recoil Control)",
                            "Hideout upgrades (Medical Station, Intel Center)",
                            "Faction-specific cosmetic rewards",
                            "Dynamic difficulty scaling based on time-in-raid",
                            "PvPvE combat with hostile AI factions"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-400">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* GALLERY */}
                <Gallery />

                {/* SYSTEM REQS */}
                <section>
                    <h3 className="font-display font-bold text-2xl text-slate-100 mb-8 uppercase tracking-wider border-l-4 border-slate-700 pl-4">
                        System Requirements
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <ReqBox title="Minimum" specs={{
                            OS: "Windows 11",
                            Processor: "Intel® Core™ i5-8400, AMD Ryzen 5 2600",
                            Memory: "16 GB RAM",
                            Graphics: "NVIDIA RTX 2060 8GB, AMD Radeon RX 6600",
                            DirectX: "Version 12",
                            Storage: "30 GB available space"
                        }} />
                        <ReqBox title="Recommended" highlighted specs={{
                            OS: "Windows 11",
                            Processor: "Intel® Core™ i5-12400, AMD Ryzen 5 5600",
                            Memory: "16 GB RAM",
                            Graphics: "NVIDIA RTX 3070, AMD Radeon RX 6800",
                            DirectX: "Version 12",
                            Storage: "30 GB available space"
                        }} />
                    </div>
                </section>

            </div>
        </div>
    );
}

function FeatureCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="bg-slate-900 border border-slate-800 p-6 hover:border-amber-500/30 transition-colors group">
            <Icon className="w-8 h-8 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="font-bold text-slate-100 mb-2">{title}</h4>
            <p className="text-sm text-slate-400">{desc}</p>
        </div>
    );
}

function ReqBox({ title, specs, highlighted }: { title: string, specs: Record<string, string>, highlighted?: boolean }) {
    return (
        <div className={cn(
            "p-6 rounded-sm border",
            highlighted ? "bg-slate-900 border-amber-500/30" : "bg-slate-950 border-slate-800"
        )}>
            <h4 className={cn("font-bold uppercase tracking-widest mb-6", highlighted ? "text-amber-500" : "text-slate-400")}>
                {title} Configuration
            </h4>
            <div className="space-y-4">
                {Object.entries(specs).map(([key, val]) => (
                    <div key={key} className="grid grid-cols-3 gap-4 border-b border-white/5 pb-2 last:border-0">
                        <span className="text-slate-500 text-sm font-mono uppercase">{key}</span>
                        <span className="text-slate-200 text-sm col-span-2">{val}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
