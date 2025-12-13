"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { createThread } from "@/lib/db";
import { X, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import RichTextEditor from "../editor/RichTextEditor";

interface CreateThreadModalProps {
    categoryId: string;
    isOpen: boolean;
    onClose: () => void;
}

export default function CreateThreadModal({ categoryId, isOpen, onClose }: CreateThreadModalProps) {
    const { userProfile, user } = useAuth();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    if (!isOpen) return null;

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!userProfile) return;

        setLoading(true);
        try {
            const threadId = await createThread(categoryId, title, content, userProfile);
            onClose();
            // Redirect or Refresh
            // Refreshing the page to show new thread usually, but navigation might be better if we went to detail
            // Let's just refresh the current list by triggering a reload or callback. 
            // Ideally we pass a callback, but specific implementation for now:
            router.push(`/forum/thread/${threadId}`);
        } catch (error) {
            console.error("Failed to create thread", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="w-full max-w-2xl bg-[#0f1115] border border-gray-800 rounded-lg shadow-2xl">
                <div className="flex items-center justify-between p-4 border-b border-gray-800">
                    <h2 className="text-xl font-bold text-white font-oswald uppercase">Create New Thread</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Title</label>
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-2 bg-[#1a1c22] border border-gray-800 rounded text-white focus:outline-none focus:border-cyan-500"
                            placeholder="Enter thread title..."
                        />
                    </div>

                    <div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Content</label>
                            <RichTextEditor
                                content={content}
                                onChange={setContent}
                            />
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex items-center gap-2 px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded uppercase tracking-wider transition-colors disabled:opacity-50"
                        >
                            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                            Post Thread
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
