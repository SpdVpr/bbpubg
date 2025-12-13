import Link from "next/link";
import { ForumThread } from "@/lib/db";
import { Pin, Lock, MessageSquare, Clock } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";


interface ThreadListItemProps {
    thread: ForumThread;
}

export default function ThreadListItem({ thread }: ThreadListItemProps) {
    const router = useRouter();
    // Simple time formatter
    const date = thread.createdAt?.toDate ? thread.createdAt.toDate() : new Date();
    const timeAgo = date.toLocaleDateString(); // Simplified for now

    const handleClick = (e: React.MouseEvent) => {
        // Prevent navigation if clicking on a nested button or link (if any)
        if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('a')) {
            return;
        }
        router.push(`/forum/thread/${thread.slug || thread.id}`);
    };

    return (
        <div
            onClick={handleClick}
            className="flex items-start gap-4 p-4 bg-[#15171b] border-b border-gray-800 hover:bg-[#1a1c20] transition-colors group cursor-pointer"
        >
            <div className="flex-shrink-0">
                {/* User Avatar Placeholder if no photo */}
                <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden relative">
                    {thread.author?.photoURL ? (
                        <Image src={thread.author.photoURL} alt={thread.author.displayName} fill className="object-cover" />
                    ) : (
                        <div className="flex items-center justify-center w-full h-full text-xs font-bold text-gray-400">
                            {thread.author?.displayName?.[0] || "?"}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex-grow min-w-0">
                <div className="flex items-center gap-2 mb-1">
                    {thread.isPinned && <Pin className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />}
                    {thread.isLocked && <Lock className="w-4 h-4 text-red-400" />}

                    <Link href={`/forum/thread/${thread.slug || thread.id}`} className="text-lg font-medium text-gray-200 group-hover:text-cyan-400 transition-colors truncate block">
                        {thread.title}
                    </Link>
                </div>

                <div className="text-sm text-gray-400 line-clamp-1 mb-2 font-sans font-normal">
                    {thread.content.replace(/<[^>]*>?/gm, '') || (thread.content.includes('<img') ? '[Image/Media]' : 'No preview available')}
                </div>

                <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>by <span className="text-gray-400">{thread.author?.displayName}</span></span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {timeAgo}</span>
                </div>
            </div>

            <div className="items-center hidden gap-6 px-4 md:flex text-gray-500">
                <div className="text-center">
                    <span className="block text-lg font-bold text-gray-300">{thread.stats.replies}</span>
                    <span className="text-xs uppercase">Replies</span>
                </div>
                <div className="text-center">
                    <span className="block text-lg font-bold text-gray-300">{thread.stats.views}</span>
                    <span className="text-xs uppercase">Views</span>
                </div>
            </div>
        </div>
    );
}
