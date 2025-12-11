import { Link as HomeLink, Twitter, Disc, Gamepad2, ArrowRight } from 'lucide-react';

export function SocialCTA() {
    return (
        <section className="bg-amber-500 py-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500"></div>

            {/* Texture */}
            <div className="absolute inset-0 bg-[url('https://pubg.com/en/assets/images/bg_texture_black.webp')] bg-cover opacity-10 mix-blend-multiply"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="text-center lg:text-left">
                        <h2 className="font-display font-black text-3xl md:text-4xl text-slate-900 mb-2 uppercase italic tracking-tighter">
                            Join the Contractors
                        </h2>
                        <p className="text-slate-900/80 font-bold text-lg max-w-xl">
                            Follow us for the latest updates on PUBG: Black Budget!
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <SocialButton
                            href="https://x.com/PUBGBlackBudget"
                            icon={Twitter}
                            label="X (Twitter)"
                        />
                        <SocialButton
                            href="https://discord.gg/TsnS3UAPgM"
                            icon={Disc}
                            label="Discord"
                        />
                        <SocialButton
                            href="https://store.steampowered.com/app/4077740/PUBG_Black_Budget/"
                            icon={Gamepad2}
                            label="Steam Store"
                            primary
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function SocialButton({ href, icon: Icon, label, primary }: { href: string, icon: any, label: string, primary?: boolean }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-6 py-4 rounded-sm font-bold uppercase tracking-wider transition-all transform hover:-translate-y-1 shadow-lg ${primary
                    ? 'bg-slate-900 text-white hover:bg-slate-800'
                    : 'bg-white text-slate-900 hover:bg-slate-100'
                }`}
        >
            <Icon className="w-5 h-5" />
            {label}
        </a>
    );
}
