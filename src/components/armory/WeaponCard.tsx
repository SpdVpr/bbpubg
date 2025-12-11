import { Weapon } from '@/data/weapons';
import { Crosshair, Zap, Package, AlertCircle } from 'lucide-react';

interface WeaponCardProps {
    weapon: Weapon;
}

export function WeaponCard({ weapon }: WeaponCardProps) {
    // Destructure weapon properties for easier use, as implied by the Code Edit
    const { id, name, category: type, ammo, description, baseDamage, fireRate, slots, confidenceLevel, status } = weapon;

    return (
        <div className="group relative bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 rounded-sm overflow-hidden">
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            {/* Header / Image Placeholder */}
            <div className="h-32 bg-slate-950 flex items-center justify-center relative border-b border-slate-800 group-hover:bg-slate-900/50 transition-colors">
                <span className="font-display font-bold text-4xl text-slate-800 group-hover:text-slate-700 transition-colors uppercase tracking-widest select-none">
                    {id}
                </span>

                <div className="absolute top-2 right-2 flex gap-2">
                    <span className="text-[10px] font-mono uppercase bg-slate-800 text-slate-400 px-2 py-1 rounded-sm border border-slate-700">
                        {type}
                    </span>
                    {status === 'rumored' && (
                        <span className="text-[10px] font-mono uppercase bg-amber-500/10 text-amber-500 px-2 py-1 rounded-sm border border-amber-500/20 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> Rumor
                        </span>
                    )}
                </div>
            </div>

            {/* Body */}
            <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="font-display font-bold text-2xl text-slate-100 mb-1 group-hover:text-cyan-400 transition-colors">{name}</h3>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">{type}</span>
                    <span className="text-xs font-bold text-cyan-600 bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-900/50">{ammo}</span>
                </div>
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                    {description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <StatBox label="DMG" value={baseDamage} icon={Crosshair} max={100} />
                    <StatBox label="RPM" value={fireRate} icon={Zap} max={1200} />
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500 uppercase font-mono tracking-wider">
                    <span className="flex items-center gap-2">
                        <Package className="w-4 h-4" /> {slots} Slots
                    </span>
                    <span className={confidenceLevel === 'Confirmed' ? 'text-emerald-500' : 'text-slate-500'}>
                        {confidenceLevel}
                    </span>
                </div>
            </div>
        </div>
    );
}

function StatBox({ label, value, icon: Icon, max }: { label: string, value: number, icon: any, max: number }) {
    const percentage = Math.min((value / max) * 100, 100);

    return (
        <div className="bg-slate-950/50 p-2 border border-slate-800 rounded-sm">
            <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-slate-500 font-bold flex items-center gap-1">
                    <Icon className="w-3 h-3" /> {label}
                </span>
                <span className="text-xs text-slate-200 font-mono">{value}</span>
            </div>
            <div className="h-1 bg-slate-800 w-full rounded-full overflow-hidden">
                <div
                    className="h-full bg-amber-500 transition-all duration-1000 ease-out"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}
