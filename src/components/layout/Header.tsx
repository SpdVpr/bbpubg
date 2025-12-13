'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search as SearchIcon, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Search } from './Search';
import UserProfile from '../auth/UserProfile';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/images/ar4pqc.webp"
                        alt="PUBG: Black Budget Logo"
                        width={250}
                        height={60}
                        className="object-contain w-[200px] md:w-[250px] h-auto"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/game-info" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-widest">
                        Game Info
                    </Link>
                    <Link href="/armory" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-widest">
                        The Armory
                    </Link>
                    <Link href="/intel" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-widest">
                        Intel Map
                    </Link>
                    <Link href="/loadout" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-widest">
                        Theorycraft
                    </Link>
                    <Link href="/news" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-widest">
                        The Wire
                    </Link>
                    <Link href="/forum" className="text-sm font-bold text-cyan-400 border border-cyan-500/80 px-4 py-1.5 rounded hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-105 uppercase tracking-widest shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                        Forum
                    </Link>
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Search />
                    <UserProfile />
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-slate-200"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div className={cn(
                "md:hidden absolute top-16 left-0 right-0 bg-slate-900 border-b border-slate-800 transition-all duration-300 overflow-hidden",
                isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            )}>
                <nav className="flex flex-col p-4 gap-4">
                    <Link href="/armory" className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded">The Armory</Link>
                    <Link href="/intel" className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded">Intel Map</Link>
                    <Link href="/loadout" className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded">Theorycraft</Link>
                    <Link href="/news" className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded">The Wire</Link>
                    <Link href="/forum" className="p-2 text-cyan-400 font-bold hover:text-white hover:bg-slate-800 rounded flex items-center gap-2">
                        Forum <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
