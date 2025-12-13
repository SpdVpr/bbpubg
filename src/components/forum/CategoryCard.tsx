import Link from "next/link";
import { ForumCategory } from "@/lib/db";
import { Radio, Crosshair, Map, Users, Coffee, MessageSquare, FileText } from "lucide-react";

const iconMap: Record<string, any> = {
    Radio,
    Crosshair,
    Map,
    Users,
    Coffee
};

interface CategoryCardProps {
    category: ForumCategory;
}

export default function CategoryCard({ category }: CategoryCardProps) {
    const Icon = iconMap[category.iconName] || MessageSquare;

    return (
        <Link
            href={`/forum/${category.slug}`}
            className="group relative overflow-hidden p-6 bg-[#0f1115] border border-white/5 hover:border-cyan-500/50 transition-all duration-300 rounded-sm"
        >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Icon className="w-24 h-24" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-cyan-950/30 rounded border border-cyan-900/30 group-hover:border-cyan-500/30 transition-colors">
                        <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                </div>

                <h3 className="text-xl font-bold font-oswald uppercase tracking-wider text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                    {category.title}
                </h3>

                <p className="text-slate-400 text-sm mb-6 flex-grow">
                    {category.description}
                </p>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                    <div className="flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5" />
                        <span>{category.stats.threads} Threads</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>{category.stats.posts} Posts</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
