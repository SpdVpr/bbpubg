import Link from "next/link";
import { Users, Database, Shield } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="font-display font-black text-4xl md:text-5xl text-slate-100 mb-4 uppercase tracking-tighter">
                About the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">Network</span>
            </h1>

            <div className="prose prose-invert prose-slate max-w-none prose-lg">
                <p className="lead border-l-4 border-cyan-500 pl-6 italic text-slate-300">
                    BB:PUBG Intel is an UNOFFICIAL community hub. We are not employed by, affiliated with, or sponsored by Krafton, Inc. or PUBG Studios.
                </p>
                <p className="text-xl text-slate-300 leading-relaxed font-light">
                    <strong>PUBG: Black Budget Intel</strong> (bbpubg.com) is the premier unofficial community hub dedicated to Krafton's upcoming extraction shooter, <em>Project Black Budget</em>.
                </p>

                <p>
                    Our mission is simple: to provide the most accurate intelligence, detailed weapon statistics, and advanced theorycrafting tools for Contractors preparing for deployment.
                </p>

                <hr className="border-slate-800 my-12" />

                <div className="grid md:grid-cols-3 gap-8 not-prose mb-12">
                    <div className="bg-slate-900/50 p-6 border border-slate-800 rounded-sm">
                        <Database className="w-8 h-8 text-amber-500 mb-4" />
                        <h3 className="font-display font-bold text-slate-100 text-lg uppercase mb-2">Data Driven</h3>
                        <p className="text-slate-400 text-sm">We analyze every leak, trailer, and dev blog to build the most comprehensive database available.</p>
                    </div>
                    <div className="bg-slate-900/50 p-6 border border-slate-800 rounded-sm">
                        <Shield className="w-8 h-8 text-amber-500 mb-4" />
                        <h3 className="font-display font-bold text-slate-100 text-lg uppercase mb-2">Community First</h3>
                        <p className="text-slate-400 text-sm">Built by fans, for fans. We are a non-profit archival project dedicated to the game.</p>
                    </div>
                    <div className="bg-slate-900/50 p-6 border border-slate-800 rounded-sm">
                        <Users className="w-8 h-8 text-amber-500 mb-4" />
                        <h3 className="font-display font-bold text-slate-100 text-lg uppercase mb-2">Squad Ready</h3>
                        <p className="text-slate-400 text-sm">Find loadouts, guides, and teammates to ensure your extraction is successful.</p>
                    </div>
                </div>

                <h3>Disclaimer</h3>
                <p>
                    This website is a fan-made project and is <strong>not affiliated with, endorsed, sponsored, or specifically approved by Krafton, Inc., PUBG Studios, or any of their partners</strong>.
                </p>
                <p>
                    "PUBG", "Project Black Budget", and related logos are trademarks or registered trademarks of Krafton, Inc. All content, game images, and creative assets used on this site are the property of their respective owners and are used here for informational and educational purposes only.
                </p>
            </div>
        </div>
    );
}
