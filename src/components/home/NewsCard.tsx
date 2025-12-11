import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

export function NewsCard({ title, date, category, excerpt, slug }: { title: string, date: string, category: string, excerpt: string, slug: string }) {
    return (
        <Link href={`/news/${slug}`} className="group block bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all p-6 rounded-sm h-full flex flex-col">
            <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-mono uppercase px-2 py-1 rounded border ${category === 'Official' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                    category === 'Guide' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                        'bg-slate-800 text-slate-400 border-slate-700'
                    }`}>
                    {category}
                </span>
                <span className="flex items-center gap-1 text-slate-500 text-xs">
                    <Calendar className="w-3 h-3" /> {date}
                </span>
            </div>

            <h3 className="font-display font-bold text-xl text-slate-100 mb-2 group-hover:text-amber-500 transition-colors leading-tight">
                {title}
            </h3>

            <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                {excerpt}
            </p>

            <div className="flex items-center text-amber-500 text-xs font-bold uppercase tracking-wider mt-auto">
                Read More <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
        </Link>
    );
}
