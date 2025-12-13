"use client";

import { useEffect, useState } from "react";
import { getCategories, initializeCategories, ForumCategory } from "@/lib/db";
import CategoryCard from "@/components/forum/CategoryCard";
import { Loader2 } from "lucide-react";

export default function ForumPage() {
    const [categories, setCategories] = useState<ForumCategory[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCategories() {
            // Initialize if empty (dev only mostly, but good for first run)
            await initializeCategories();
            const data = await getCategories();
            setCategories(data);
            setLoading(false);
        }
        fetchCategories();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-cyan-500 animate-spin" />
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-oswald uppercase tracking-widest mb-4">
                    <span className="text-cyan-400">Black Budget</span> Comm Link
                </h1>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Join the conversation. Share data, find squads, and discuss the alpha.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                    <CategoryCard key={category.slug} category={category} />
                ))}
            </div>
        </div>
    );
}
