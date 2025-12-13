"use client";

import { useEffect, useState, use } from "react";
import { getThreads, ForumThread, INITIAL_CATEGORIES } from "@/lib/db";
import ThreadListItem from "@/components/forum/ThreadListItem";
import CreateThreadModal from "@/components/forum/CreateThreadModal";
import { useAuth } from "@/context/AuthContext";
import { Loader2, Plus, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category: categorySlug } = use(params);
    const { user } = useAuth();

    const [threads, setThreads] = useState<ForumThread[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const categoryInfo = INITIAL_CATEGORIES.find(c => c.slug === categorySlug);

    useEffect(() => {
        async function fetchThreads() {
            const data = await getThreads(categorySlug);
            setThreads(data);
            setLoading(false);
        }
        fetchThreads();
    }, [categorySlug]);

    if (loading) {
        return <div className="flex justify-center p-20"><Loader2 className="w-8 h-8 text-cyan-500 animate-spin" /></div>;
    }

    if (!categoryInfo) {
        return <div className="p-20 text-center text-red-500">Category not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                    <Link href="/forum" className="flex items-center gap-2 text-sm text-cyan-500 hover:text-cyan-400 mb-2">
                        <ArrowLeft className="w-4 h-4" /> Back to Forums
                    </Link>
                    <h1 className="text-3xl font-bold font-oswald uppercase tracking-wide text-white">
                        {categoryInfo.title}
                    </h1>
                    <p className="text-gray-400 text-sm mt-1">{categoryInfo.description}</p>
                </div>

                {user ? (
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded uppercase tracking-wider transition-colors shadow-lg shadow-cyan-900/20"
                    >
                        <Plus className="w-5 h-5" />
                        New Thread
                    </button>
                ) : (
                    <div className="text-sm text-gray-500 bg-gray-900 p-3 rounded border border-gray-800">
                        Log in to post a thread.
                    </div>
                )}
            </div>

            <div className="bg-[#0f1115] border border-gray-800 rounded-lg overflow-hidden min-h-[400px]">
                {threads.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                        <p>No threads yet. Be the first to post!</p>
                    </div>
                ) : (
                    threads.map(thread => (
                        <ThreadListItem key={thread.id} thread={thread} />
                    ))
                )}
            </div>

            <CreateThreadModal
                categoryId={categorySlug}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}
