import { Hero } from "@/components/home/Hero";
import { TrailerSection } from "@/components/home/TrailerSection";
import { NewsTicker } from "@/components/home/NewsTicker";
import { QuickLinks } from "@/components/home/QuickLinks";
import { SocialCTA } from "@/components/home/SocialCTA";
import { NewsCard } from "@/components/home/NewsCard";
import { posts } from "@/data/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PUBG: Black Budget - News, Leaks & Community Hub",
  description: "Your source for PUBG: Black Budget (Project Black) news. Alpha test signups, release date rumors, gameplay leaks, and weapon guides.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrailerSection />
      <div className="container mx-auto px-4 py-8">
        <h2 className="font-display font-black text-3xl text-slate-100 mb-6 uppercase tracking-wider border-l-4 border-cyan-400 pl-4">
          Frontline <span className="text-cyan-400">Intel</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 9).map((post) => (
            <NewsCard
              key={post.slug}
              title={post.title}
              date={post.date}
              category={post.category}
              excerpt={post.excerpt}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
      <QuickLinks />
      <SocialCTA />
    </div>
  );
}
