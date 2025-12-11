import { Lock } from 'lucide-react';
import Link from 'next/link';

export function ComingSoon({ title, description }: { title: string, description: string }) {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
            <div className="bg-slate-900/50 p-8 border border-slate-800 rounded-sm max-w-lg w-full flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6 border border-slate-700">
                    <Lock className="w-8 h-8 text-amber-500" />
                </div>

                <h1 className="font-display font-black text-3xl md:text-4xl text-slate-100 mb-4 uppercase tracking-wider">
                    {title}
                </h1>

                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                    {description}
                </p>

                <div className="flex gap-4">
                    <Link href="/" className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold uppercase tracking-wider rounded-sm transition-colors border border-slate-700">
                        Return Home
                    </Link>
                    <Link href="/news" className="px-6 py-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold uppercase tracking-wider rounded-sm transition-colors">
                        Read Intel
                    </Link>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-800 w-full">
                    <span className="text-xs font-mono text-slate-600 uppercase tracking-widest">
                        Access Restricted • Clearance Level 5 Required
                    </span>
                </div>
            </div>
        </div>
    );
}
