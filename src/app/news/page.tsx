import { posts } from '@/data/posts';
import { Calendar, User, Tag } from 'lucide-react';
import Link from 'next/link';

export default function NewsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="font-display font-black text-4xl md:text-5xl text-slate-100 mb-8">
                THE WIRE <span className="text-amber-500">INTEL FEED</span>
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <article key={post.slug} className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-colors p-6 rounded-sm group flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4">
                            <span className={`text-xs font-mono uppercase px-2 py-1 rounded border ${post.category === 'Official' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                                    post.category === 'Leak' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
                                        'bg-slate-800 text-slate-400 border-slate-700'
                                }`}>
                                {post.category}
                            </span>
                            <span className="flex items-center gap-1 text-slate-500 text-xs">
                                <Calendar className="w-3 h-3" /> {post.date}
                            </span>
                        </div>

                        <h2 className="font-display font-bold text-xl text-slate-100 mb-3 leading-tight group-hover:text-amber-500 transition-colors">
                            <Link href={`/news/${post.slug}`} className="hover:underline">
                                {post.title}
                            </Link>
                        </h2>

                        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                            {post.excerpt}
                        </p>

                        <div className="pt-4 border-t border-slate-800 flex items-center justify-between mt-auto">
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                <User className="w-3 h-3" /> {post.author}
                            </div>
                            <Link href={`/news/${post.slug}`} className="text-amber-500 text-xs font-bold uppercase tracking-wider hover:text-amber-400">
                                Read Intel &rarr;
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
