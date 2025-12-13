"use client";

import { useEffect, useState, use, useRef } from "react";
import { getThread, getPosts, createReply, updateThread, updatePost, deleteThread, deletePost, getThreadBySlug, ForumThread, ForumPost } from "@/lib/db";
import { useAuth } from "@/context/AuthContext";
import { Loader2, ArrowLeft, Send, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import RichTextEditor from "@/components/editor/RichTextEditor";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Helper to safely render HTML content
function SafeHTML({ content, onImageClick }: { content: string, onImageClick: (src: string) => void }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleImageClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'IMG') {
                onImageClick((target as HTMLImageElement).src);
            }
        };

        container.addEventListener('click', handleImageClick);
        return () => container.removeEventListener('click', handleImageClick);
    }, [content, onImageClick]);

    return (
        <div
            ref={containerRef}
            className="prose prose-invert max-w-none text-slate-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}

export default function ThreadPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const { userProfile } = useAuth();
    const router = useRouter();

    const [thread, setThread] = useState<ForumThread | null>(null);
    const [posts, setPosts] = useState<ForumPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [replyContent, setReplyContent] = useState("");
    const [submitting, setSubmitting] = useState(false);

    // Editing State
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editContent, setEditContent] = useState("");
    const [savingEdit, setSavingEdit] = useState(false);

    // Lightbox state
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxSrc, setLightboxSrc] = useState("");

    useEffect(() => {
        async function fetchData() {
            // Note: getThreadBySlug handles both slug and ID fallback
            const t = await getThreadBySlug(slug);
            if (t) {
                const p = await getPosts(t.id); // Must use t.id, not slug for posts
                setThread(t);
                setPosts(p);
            }
            setLoading(false);
        }
        fetchData();
    }, [slug]);

    async function handleReply(e: React.FormEvent) {
        e.preventDefault();
        if (!userProfile || !replyContent.trim() || !thread) return;
        if (replyContent === '<p></p>') return;

        setSubmitting(true);
        try {
            await createReply(thread.id, replyContent, userProfile);
            setReplyContent("");
            const p = await getPosts(thread.id);
            setPosts(p);
        } catch (error) {
            console.error("Failed to reply", error);
        } finally {
            setSubmitting(false);
        }
    }

    const openLightbox = (src: string) => {
        setLightboxSrc(src);
        setLightboxOpen(true);
    };

    // --- Actions ---

    const startEdit = (itemId: string, currentContent: string) => {
        setEditingId(itemId);
        setEditContent(currentContent);
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditContent("");
    };

    const saveEdit = async (isThread: boolean) => {
        if (!editContent.trim() || editContent === '<p></p>' || !thread) return;
        setSavingEdit(true);
        try {
            if (isThread) {
                await updateThread(thread.id, editContent);
                // Update local state
                if (thread) setThread({ ...thread, content: editContent });
            } else {
                // It's a post
                if (editingId) {
                    await updatePost(editingId, editContent);
                    // Update local state
                    setPosts(posts.map(p => p.id === editingId ? { ...p, content: editContent } : p));
                }
            }
            setEditingId(null);
        } catch (error) {
            console.error("Failed to save edit", error);
            alert("Failed to save changes.");
        } finally {
            setSavingEdit(false);
        }
    };

    const handleDelete = async (isThread: boolean, itemId: string) => {
        if (!confirm("Are you sure you want to delete this? This cannot be undone.")) return;

        try {
            if (isThread) {
                await deleteThread(itemId);
                // Redirect to category
                if (thread) router.push(`/forum/${thread.categoryId}`);
            } else {
                await deletePost(itemId);
                // Remove from local list
                setPosts(posts.filter(p => p.id !== itemId));
            }
        } catch (error) {
            console.error("Failed to delete", error);
            alert("Failed to delete item.");
        }
    };

    if (loading) return <div className="flex justify-center p-20"><Loader2 className="animate-spin text-cyan-500" /></div>;
    if (!thread) return <div className="p-20 text-center text-red-500">Thread not found</div>;

    const isThreadOwner = userProfile?.uid === thread?.author?.uid;

    return (
        <div className="container mx-auto px-4 py-8">
            <Link href={`/forum/${thread.categoryId}`} className="inline-flex items-center gap-2 text-sm text-cyan-500 hover:text-cyan-400 mb-6">
                <ArrowLeft className="w-4 h-4" /> Back to Category
            </Link>

            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-100 font-oswald uppercase tracking-wide mb-2">
                    {thread.title}
                </h1>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>Posted by <span className="text-gray-300 font-medium">{thread.author.displayName}</span></span>
                    <span>•</span>
                    <span>{thread.createdAt?.toDate ? thread.createdAt.toDate().toLocaleDateString() : 'Just now'}</span>
                </div>
            </div>

            {/* Main Thread Content */}
            <div className="bg-[#0f1115] border border-gray-800 rounded-lg p-6 mb-6">
                <div className="flex gap-4">
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded bg-gray-700 overflow-hidden relative">
                            {thread.author?.photoURL && (
                                <Image src={thread.author.photoURL} alt={thread.author.displayName} fill className="object-cover" />
                            )}
                        </div>
                    </div>
                    <div className="flex-grow min-w-0">
                        {editingId === thread.id ? (
                            <div className="space-y-4">
                                <RichTextEditor content={editContent} onChange={setEditContent} />
                                <div className="flex gap-2 justify-end">
                                    <button
                                        onClick={cancelEdit}
                                        className="px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 rounded text-gray-200"
                                        disabled={savingEdit}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={() => saveEdit(true)}
                                        className="px-3 py-1 text-sm bg-cyan-600 hover:bg-cyan-500 rounded text-white flex items-center gap-2"
                                        disabled={savingEdit}
                                    >
                                        {savingEdit && <Loader2 className="w-3 h-3 animate-spin" />}
                                        Save
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <SafeHTML content={thread.content} onImageClick={openLightbox} />
                                {isThreadOwner && (
                                    <div className="flex gap-2 mt-4 pt-4 border-t border-gray-800/50 justify-end">
                                        {/* Note: Added 'group' to parent is required to show on hover, but parent doesn't have it. 
                                            Let's just show it always or change opacity triggers. 
                                            For mobile friendliness, always visible or small icons is better.
                                         */}
                                        <button onClick={() => startEdit(thread.id, thread.content)} className="text-gray-400 hover:text-cyan-400 text-sm font-medium">Edit</button>
                                        <button onClick={() => handleDelete(true, thread.id)} className="text-gray-400 hover:text-red-400">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Replies */}
            <div className="space-y-4 mb-12">
                {posts.map(post => {
                    const isPostOwner = userProfile?.uid === post.author?.uid;
                    return (
                        <div key={post.id} className="bg-[#15171b] border border-gray-800/50 rounded-lg p-6 group">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 rounded bg-gray-700 overflow-hidden relative">
                                        {post.author?.photoURL && (
                                            <Image src={post.author.photoURL} alt={post.author.displayName} fill className="object-cover" />
                                        )}
                                    </div>
                                </div>
                                <div className="flex-grow min-w-0">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-bold text-gray-300">{post.author.displayName}</span>
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs text-gray-600">{post.createdAt?.toDate ? post.createdAt.toDate().toLocaleDateString() : 'Just now'}</span>
                                            {isPostOwner && !editingId && (
                                                <div className="flex gap-2">
                                                    <button onClick={() => startEdit(post.id, post.content)} className="text-gray-500 hover:text-cyan-400 text-xs">Edit</button>
                                                    <button onClick={() => handleDelete(false, post.id)} className="text-gray-500 hover:text-red-400">
                                                        <Trash2 className="w-3 h-3" />
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {editingId === post.id ? (
                                        <div className="space-y-4">
                                            <RichTextEditor content={editContent} onChange={setEditContent} />
                                            <div className="flex gap-2 justify-end">
                                                <button
                                                    onClick={cancelEdit}
                                                    className="px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 rounded text-gray-200"
                                                    disabled={savingEdit}
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    onClick={() => saveEdit(false)}
                                                    className="px-3 py-1 text-sm bg-cyan-600 hover:bg-cyan-500 rounded text-white flex items-center gap-2"
                                                    disabled={savingEdit}
                                                >
                                                    {savingEdit && <Loader2 className="w-3 h-3 animate-spin" />}
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <SafeHTML content={post.content} onImageClick={openLightbox} />
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Reply Box */}
            {userProfile ? (
                <div className="bg-[#0f1115] border border-gray-800 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-white mb-4">Leave a Reply</h3>
                    <form onSubmit={handleReply}>
                        <div className="mb-4">
                            <RichTextEditor
                                content={replyContent}
                                onChange={setReplyContent}
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={submitting || !replyContent.trim() || replyContent === '<p></p>'}
                                className="flex items-center gap-2 px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded uppercase tracking-wider transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                                Post Reply
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="bg-gray-900/50 border border-gray-800 rounded p-8 text-center">
                    <p className="text-gray-400">Please <span className="text-cyan-500 font-bold">Log In</span> to join the discussion.</p>
                </div>
            )
            }

            {/* Lightbox for viewing images */}
            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={[{ src: lightboxSrc }]}
                controller={{ closeOnBackdropClick: true }}
            />
        </div >
    );
}
