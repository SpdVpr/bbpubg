import { Mail, MessageSquare } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="font-display font-black text-4xl md:text-5xl text-slate-100 mb-4 uppercase tracking-tighter">
                Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">Line</span>
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
                        <div>
                            <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Secure Email</label>
                            <input type="email" id="email" className="w-full bg-slate-900 border border-slate-700 text-slate-100 px-4 py-3 rounded-sm focus:outline-none focus:border-cyan-500 transition-colors" placeholder="operative@example.com" />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Subject</label>
                            <input type="text" id="subject" className="w-full bg-slate-900 border border-slate-700 text-slate-100 px-4 py-3 rounded-sm focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Intel Submission / Inquiry" />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Transmission</label>
                            <textarea id="message" rows={6} className="w-full bg-slate-900 border border-slate-700 text-slate-100 px-4 py-3 rounded-sm focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Enter your message here..."></textarea>
                        </div>

                        <button type="submit" className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold uppercase tracking-widest transition-colors rounded-sm">
                            Send Transmission
                        </button>
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
