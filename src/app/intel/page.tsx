import { Metadata } from 'next';
import MapWrapper from '@/components/intel/MapWrapper';

export const metadata: Metadata = {
    title: "Intel Map - PUBG: Black Budget",
    description: "Interactive tactical map of Coli Island. Extraction points, loot spawns, and danger zones.",
};

export default function IntelPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-white font-oswald uppercase tracking-wide mb-2">
                    Operative Intel Map
                </h1>
                <p className="text-gray-400 max-w-2xl">
                    Detailed tactical overview of the exclusion zone. Use filters to locate potential extraction points and high-value targets.
                    <span className="text-yellow-500 block mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded text-sm">
                        <strong className="uppercase block mb-1">Status Update:</strong>
                        Official high-resolution map data is currently <strong className="text-yellow-400">unavailable</strong>. The current display is a placeholder simulation. As soon as official intel or reliable leaks are available, this map will be immediately updated with accurate topography and POIs.
                    </span>
                </p>
            </div>

            <MapWrapper />
        </div>
    );
}
