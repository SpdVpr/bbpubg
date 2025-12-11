'use client';

export function TrailerSection() {
    return (
        <section className="relative w-full h-[60vh] md:h-[80vh] bg-black overflow-hidden border-b border-white/5 group">
            {/* Video Overlay - Gradient to integrate with page */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50 pointer-events-none"></div>
            <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/20 to-slate-900/80 pointer-events-none"></div>

            {/* Label */}
            <div className="absolute top-8 left-8 z-20 flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                <span className="font-mono text-xs text-red-500 uppercase tracking-[0.2em] font-bold">Live Feed Override</span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
                <iframe
                    className="w-full h-[140%] md:h-[150%] aspect-video pointer-events-none scale-110 opacity-60 group-hover:opacity-100 transition-opacity duration-1000"
                    src="https://www.youtube.com/embed/Qj7x7iBAax4?autoplay=1&mute=1&controls=0&loop=1&playlist=Qj7x7iBAax4&playsinline=1&rel=0&showinfo=0&modestbranding=1"
                    title="PUBG Black Budget Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>

            {/* Decorative Scanlines */}
            <div className="absolute inset-0 z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
        </section>
    );
}
