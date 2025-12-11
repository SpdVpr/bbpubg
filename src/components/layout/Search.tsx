'use client';

import { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X, Loader2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Mock search function (in a real app, this would query an API or search index)
import { weapons } from '@/data/weapons';
import { posts } from '@/data/posts';

type SearchResult = {
    type: 'weapon' | 'news';
    title: string;
    url: string;
    meta: string;
};

export function Search() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }

        const searchQuery = query.toLowerCase();

        // Search Weapons
        const weaponResults: SearchResult[] = weapons
            .filter(w => w.name.toLowerCase().includes(searchQuery) || w.category.toLowerCase().includes(searchQuery))
            .map(w => ({
                type: 'weapon',
                title: w.name,
                url: '/armory', // Ideally anchor to item, but armory list is fine for MVP
                meta: w.category
            }));

        // Search News
        const newsResults: SearchResult[] = posts
            .filter(p => p.title.toLowerCase().includes(searchQuery) || p.excerpt.toLowerCase().includes(searchQuery))
            .map(p => ({
                type: 'news',
                title: p.title,
                url: `/news/${p.slug}`,
                meta: p.date
            }));

        setResults([...weaponResults, ...newsResults].slice(0, 5));
    }, [query]);

    const handleSelect = (url: string) => {
        setIsOpen(false);
        setQuery('');
        router.push(url);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-md transition-colors"
            >
                <SearchIcon className="w-5 h-5" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 bg-slate-950/80 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="w-full max-w-2xl bg-slate-900 border border-cyan-400/30 shadow-2xl rounded-lg overflow-hidden flex flex-col"
                        >
                            <div className="flex items-center p-4 border-b border-white/5">
                                <SearchIcon className="w-5 h-5 text-cyan-400 mr-3" />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Search database..."
                                    className="flex-grow bg-transparent border-none outline-none text-slate-100 text-lg placeholder:text-slate-600 font-sans"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="p-2 max-h-[60vh] overflow-y-auto">
                                {results.length === 0 && query !== '' && (
                                    <div className="p-8 text-center text-slate-500">
                                        No intelligence found.
                                    </div>
                                )}

                                {results.length === 0 && query === '' && (
                                    <div className="p-8 text-center text-slate-500 text-sm">
                                        Type to search Weapons, Intel, and News...
                                    </div>
                                )}

                                {results.map((result, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleSelect(result.url)}
                                        className="w-full flex items-center justify-between p-3 hover:bg-white/5 text-left rounded-sm group transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border ${result.type === 'weapon' ? 'bg-orange-500/10 text-orange-500 border-orange-500/20' :
                                                'bg-blue-500/10 text-blue-500 border-blue-500/20'
                                                }`}>
                                                {result.type}
                                            </span>
                                            <span className="font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                                                {result.title}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs text-slate-500 font-mono hidden sm:inline-block">{result.meta}</span>
                                            <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <div className="bg-slate-950 p-2 text-center border-t border-white/5">
                                <span className="text-[10px] text-slate-500 uppercase tracking-widest">
                                    Secure Database Access
                                </span>
                            </div>
                        </motion.div>

                        {/* Backdrop Click to Close */}
                        <div className="absolute inset-0 z-[-1]" onClick={() => setIsOpen(false)}></div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
