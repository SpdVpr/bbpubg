'use client';

import { weapons } from '@/data/weapons';
import { WeaponCard } from '@/components/armory/WeaponCard';
import { useState } from 'react';
import { Search } from 'lucide-react';

export function ArmoryList() {
    const [search, setSearch] = useState('');

    const filteredWeapons = weapons.filter(w =>
        w.name.toLowerCase().includes(search.toLowerCase()) ||
        w.category.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h1 className="font-display font-black text-5xl md:text-6xl text-slate-100 mb-4">THE ARMORY</h1>
                    <p className="text-slate-400 max-w-xl text-lg">
                        Confirmed and leaked weaponry for PUBG: Black Budget. Legacy stats from PUBG provided as baseline reference.
                    </p>
                </div>

                <div className="relative w-full md:w-auto">
                    <input
                        type="text"
                        placeholder="Search weapons..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full md:w-80 bg-slate-900 border border-slate-700 text-slate-100 px-4 py-3 pl-10 rounded-sm focus:outline-none focus:border-cyan-400 transition-colors uppercase font-mono text-sm"
                    />
                    <Search className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredWeapons.map((weapon) => (
                    <WeaponCard key={weapon.id} weapon={weapon} />
                ))}
            </div>

            {filteredWeapons.length === 0 && (
                <div className="text-center py-20 border border-dashed border-slate-800 rounded">
                    <p className="text-slate-500 font-mono">No weapons found matching your criteria.</p>
                </div>
            )}
        </div>
    );
}
