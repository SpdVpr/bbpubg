import Link from 'next/link';
import { Github, Twitter, Disc, AlertTriangle } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 py-12 mt-20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block mb-4">
                            <span className="font-display font-bold text-2xl tracking-wider text-slate-100">
                                PUBG<span className="text-cyan-400">:</span> BLACK BUDGET
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm max-w-md mb-6 leading-relaxed">
                            The unofficial community hub for Project Black Budget. Tracking leaks, analyzing stats, and preparing for the next generation of extraction shooters.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-sm transition-colors border border-slate-800">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-sm transition-colors border border-slate-800">
                                <Disc className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-sm transition-colors border border-slate-800">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-slate-100 mb-6 uppercase tracking-wider text-sm">Intel</h4>
                        <ul className="space-y-3">
                            <li><Link href="/armory" className="text-slate-400 hover:text-cyan-400 text-sm">Weapon Database</Link></li>
                            <li><Link href="/intel" className="text-slate-400 hover:text-cyan-400 text-sm">Map Leaks</Link></li>
                            <li><Link href="/news" className="text-slate-400 hover:text-cyan-400 text-sm">Latest News</Link></li>
                            <li><Link href="/guides" className="text-slate-400 hover:text-cyan-400 text-sm">Extraction Guides</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-slate-100 mb-6 uppercase tracking-wider text-sm">Legal & Info</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-slate-400 hover:text-cyan-400 text-sm">About Us</Link></li>
                            <li><Link href="/privacy" className="text-slate-400 hover:text-cyan-400 text-sm">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-slate-400 hover:text-cyan-400 text-sm">Terms of Service</Link></li>
                            <li><Link href="/contact" className="text-slate-400 hover:text-cyan-400 text-sm">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <p className="text-slate-500 text-xs">
                        © {new Date().getFullYear()} bbpubg.com. All rights reserved.
                    </p>
                    <div className="flex items-start gap-3 bg-slate-900/50 p-4 rounded border border-slate-800/50 max-w-xl">
                        <AlertTriangle className="w-5 h-5 text-cyan-400/50 shrink-0 mt-0.5" />
                        <p className="text-slate-500 text-xs leading-relaxed">
                            This is a fan-made website and is not affiliated with, endorsed, sponsored, or specifically approved by Krafton, Inc. or PUBG Studios. All images and content relating to the game are property of their respective owners.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
