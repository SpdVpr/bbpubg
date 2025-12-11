import { posts } from '@/data/posts';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Intel Not Found',
        }
    }

    return {
        title: post.title,
        description: post.excerpt,
        keywords: [post.category, "PUBG Black Budget News", "Project Black Budget Update"],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        }
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <Link href="/news" className="inline-flex items-center gap-2 text-slate-500 hover:text-amber-500 mb-8 transition-colors text-sm uppercase tracking-wider font-bold">
                <ArrowLeft className="w-4 h-4" /> Back to Intelligence
            </Link>

            <article>
                <header className="mb-12 border-b border-white/5 pb-12">
                    <div className="flex gap-4 mb-6">
                        <span className={`text-xs font-mono uppercase px-2 py-1 rounded border ${post.category === 'Official' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                            post.category === 'Leak' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
                                'bg-slate-800 text-slate-400 border-slate-700'
                            }`}>
                            {post.category}
                        </span>
                    </div>

                    <h1 className="font-display font-black text-4xl md:text-5xl text-slate-100 mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm font-mono uppercase tracking-wider">
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-amber-500" /> {post.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <User className="w-4 h-4 text-amber-500" /> {post.author}
                        </span>
                        <button className="ml-auto text-slate-500 hover:text-slate-300 flex items-center gap-2">
                            <Share2 className="w-4 h-4" /> Share
                        </button>
                    </div>
                </header>

                <div
                    className="prose prose-invert prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content || '' }}
                ></div>
            </article>
        </div>
    );
}
