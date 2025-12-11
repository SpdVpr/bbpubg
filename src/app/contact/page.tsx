import { Mail, MessageSquare } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="font-display font-black text-4xl md:text-5xl text-slate-100 mb-8 uppercase">
                Contact <span className="text-amber-500">Intel</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-xl text-slate-300 leading-relaxed font-light">
                        Have a leak? Found a bug? Or just want to discuss loadout theories? We want to hear from you.
                    </p>

                    <p>
                        As this is a community project, we do our best to respond to all inquiries within 48 hours. Please do not send official support requests for the game itself; those should be directed to Krafton Support.
                    </p>

                    <div className="not-prose mt-12 space-y-6">
                        <div className="flex items-start gap-4 p-6 bg-slate-900 border border-slate-800 rounded-sm">
                            <Mail className="w-6 h-6 text-amber-500 mt-1" />
                            <div>
                                <h3 className="font-bold text-slate-100 text-lg uppercase mb-1">General Inquiries</h3>
                                <p className="text-slate-400 mb-2">For partnership, feedback, or general questions.</p>
                                <a href="mailto:michalvesecky@gmail.com" className="text-amber-500 font-bold hover:text-white transition-colors">
                                    michalvesecky@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-slate-900 border border-slate-800 rounded-sm">
                            <MessageSquare className="w-6 h-6 text-amber-500 mt-1" />
                            <div>
                                <h3 className="font-bold text-slate-100 text-lg uppercase mb-1">Community Discord</h3>
                                <p className="text-slate-400 mb-2">Join the conversation with other contractors.</p>
                                <a href="https://discord.gg/TsnS3UAPgM" target="_blank" className="text-amber-500 font-bold hover:text-white transition-colors">
                                    Join Server &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Map / Visual */}
                <div className="relative h-full min-h-[400px] bg-slate-900 rounded-sm border border-slate-800 overflow-hidden hidden md:block">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://pubg.com/en/assets/images/bg_texture_black.webp')] bg-cover"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-8">
                            <span className="block text-6xl mb-4 opacity-20 pb-4">📡</span>
                            <p className="font-mono text-sm text-amber-500 tracking-widest uppercase mb-2">Secure Line Active</p>
                            <p className="font-mono text-xs text-slate-500">ENCRYPTION: AES-256</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
