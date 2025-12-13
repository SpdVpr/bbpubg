"use client";

import dynamic from 'next/dynamic';

const InteractiveMap = dynamic(() => import('./InteractiveMap'), {
    ssr: false,
    loading: () => <div className="w-full h-[600px] flex items-center justify-center bg-[#0f1115] text-cyan-500 animate-pulse">Initializing Satellite Link...</div>
});

export default function MapWrapper() {
    return <InteractiveMap />;
}
