"use client";

import { useEffect, useState } from "react";
import L from "leaflet";
import { MapContainer, ImageOverlay, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
    Crosshair,
    Skull,
    Zap,
    Box,
    Activity,
    Cpu,
    FlaskConical,
    Leaf,
    Mountain,
    FileText,
    Hammer,
    ShieldAlert,
    User,
    Ghost,
    Dna
} from "lucide-react";
import { renderToStaticMarkup } from "react-dom/server";

// Helper to create custom icon from Lucide React component
const createCustomIcon = (icon: React.ReactNode, color: string) => {
    const iconHtml = renderToStaticMarkup(
        <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 border-[${color}] bg-slate-900/90 text-[${color}] shadow-[0_0_10px_${color}]`}>
            {icon}
        </div>
    );

    return L.divIcon({
        html: iconHtml,
        className: 'custom-marker-icon',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -20]
    });
};

interface MapMarker {
    id: string;
    type: "poi" | "biological" | "botanical" | "chemical" | "geological" | "high-tech" | "intel" | "material" | "medical" | "military" | "personal" | "artifact" | "mutant" | "danger";
    x: number;
    y: number;
    title: string;
    description: string;
}

// Coordinate System: [0,0] bottom-left to [2000,3500] top-right (Approx 16:9 ratio)
const MAP_WIDTH = 3440; // Approx based on UWQHD screenshots
const MAP_HEIGHT = 1440;
const MAP_BOUNDS: L.LatLngBoundsExpression = [[0, 0], [MAP_HEIGHT, MAP_WIDTH]];

// POI Data (Estimated from Screenshots)
const POI_MARKERS: MapMarker[] = [
    { id: "poi_port", type: "poi", x: 650, y: 1100, title: "PORT", description: "Large industrial dock area. High contractor activity." },
    { id: "poi_depot", type: "poi", x: 1400, y: 1250, title: "DEPOT", description: "Storage facility with potential high-tier loot." },
    { id: "poi_nebula", type: "poi", x: 2200, y: 1200, title: "NEBULA QUARTERS", description: "Residential zone, likely civilian loot and personal items." },
    { id: "poi_spec", type: "poi", x: 1900, y: 1100, title: "SPEC", description: "Specialized operations center." },
    { id: "poi_hq", type: "poi", x: 1720, y: 950, title: "HQ", description: "Central Command. Extremely dangerous." },
    { id: "poi_treehouse", type: "poi", x: 2000, y: 900, title: "TREEHOUSE", description: "Elevated structure in the forest sector." },
    { id: "poi_europa", type: "poi", x: 2400, y: 900, title: "EUROPA QUARTERS", description: "Eastern residential sector." },
    { id: "poi_watts", type: "poi", x: 900, y: 850, title: "WATTS QUARTERS", description: "Western residential sector." },
    { id: "poi_arc", type: "poi", x: 1400, y: 800, title: "ARC", description: "Advanced Research Complex. High-tech loot." },
    { id: "poi_waterworks", type: "poi", x: 2100, y: 650, title: "WATERWORKS", description: "Utilities and filtration plant." },
    { id: "poi_clinic", type: "poi", x: 1300, y: 550, title: "CLINIC", description: "Medical supplies and chemical spawns." },
    { id: "poi_sirius", type: "poi", x: 1700, y: 350, title: "SIRIUS QUARTERS", description: "Southern residential block." },
];

const MapController = ({ bounds }: { bounds: L.LatLngBoundsExpression }) => {
    const map = useMap();
    useEffect(() => {
        map.fitBounds(bounds);
    }, [map, bounds]);
    return null;
};

// Icon mapping
const getIconForType = (type: string) => {
    switch (type) {
        case 'poi': return createCustomIcon(<Crosshair size={20} color="#22d3ee" />, "#22d3ee"); // Cyan
        case 'biological': return createCustomIcon(<Dna size={18} color="#bef264" />, "#bef264"); // Lime
        case 'botanical': return createCustomIcon(<Leaf size={18} color="#4ade80" />, "#4ade80"); // Green
        case 'chemical': return createCustomIcon(<FlaskConical size={18} color="#facc15" />, "#facc15"); // Yellow
        case 'geological': return createCustomIcon(<Mountain size={18} color="#a8a29e" />, "#a8a29e"); // Stone
        case 'high-tech': return createCustomIcon(<Cpu size={18} color="#60a5fa" />, "#60a5fa"); // Blue
        case 'intel': return createCustomIcon(<FileText size={18} color="#fff" />, "#ffffff"); // White
        case 'material': return createCustomIcon(<Box size={18} color="#fb923c" />, "#fb923c"); // Orange
        case 'medical': return createCustomIcon(<Activity size={18} color="#f43f5e" />, "#f43f5e"); // Red
        case 'military': return createCustomIcon(<ShieldAlert size={18} color="#ef4444" />, "#ef4444"); // Red
        case 'personal': return createCustomIcon(<User size={18} color="#c084fc" />, "#c084fc"); // Purple
        case 'artifact': return createCustomIcon(<Ghost size={18} color="#e879f9" />, "#e879f9"); // Pink
        case 'mutant': return createCustomIcon(<Skull size={18} color="#a3e635" />, "#a3e635"); // Lime
        default: return createCustomIcon(<Crosshair size={18} />, "#ffffff");
    }
};

export default function InteractiveMap() {
    const [activeFilters, setActiveFilters] = useState<string[]>(['poi']);

    // Toggle filter logic
    const toggleFilter = (filter: string) => {
        setActiveFilters(prev =>
            prev.includes(filter)
                ? prev.filter(f => f !== filter)
                : [...prev, filter]
        );
    };

    const filters = [
        { id: 'poi', label: 'Locations', icon: <Crosshair size={14} />, color: 'text-cyan-400 border-cyan-500/50' },
        { id: 'biological', label: 'Biological', icon: <Dna size={14} />, color: 'text-lime-300 border-lime-500/50' },
        { id: 'botanical', label: 'Botanical', icon: <Leaf size={14} />, color: 'text-green-400 border-green-500/50' },
        { id: 'chemical', label: 'Chemical', icon: <FlaskConical size={14} />, color: 'text-yellow-400 border-yellow-500/50' },
        { id: 'geological', label: 'Geological', icon: <Mountain size={14} />, color: 'text-stone-400 border-stone-500/50' },
        { id: 'high-tech', label: 'High-Tech', icon: <Cpu size={14} />, color: 'text-blue-400 border-blue-500/50' },
        { id: 'intel', label: 'Intel', icon: <FileText size={14} />, color: 'text-white border-white/50' },
        { id: 'material', label: 'Material', icon: <Box size={14} />, color: 'text-orange-400 border-orange-500/50' },
        { id: 'medical', label: 'Medical', icon: <Activity size={14} />, color: 'text-rose-400 border-rose-500/50' },
        { id: 'military', label: 'Military', icon: <ShieldAlert size={14} />, color: 'text-red-500 border-red-500/50' },
        { id: 'personal', label: 'Personal', icon: <User size={14} />, color: 'text-purple-400 border-purple-500/50' },
        { id: 'artifact', label: 'Artifact', icon: <Ghost size={14} />, color: 'text-pink-400 border-pink-500/50' },
        // { id: 'mutant', label: 'Mutant', icon: <Skull size={14} />, color: 'text-lime-500 border-lime-500/50' }, // Not seen on list explicitly but implied
    ];

    const activeMarkers = POI_MARKERS.filter(m => activeFilters.includes(m.type));

    return (
        <div className="flex flex-col lg:flex-row gap-6 h-[80vh] min-h-[600px]">
            {/* Sidebar Controls */}
            <div className="w-full lg:w-64 flex-shrink-0 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                <div className="bg-slate-900/50 border border-slate-700/50 p-4 rounded-lg">
                    <h3 className="text-cyan-400 font-oswald uppercase tracking-widest text-sm mb-4 border-b border-cyan-500/20 pb-2">
                        Toggle Layers
                    </h3>
                    <div className="space-y-2">
                        {filters.map(filter => (
                            <button
                                key={filter.id}
                                onClick={() => toggleFilter(filter.id)}
                                className={`w-full flex items-center gap-3 px-3 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all border ${activeFilters.includes(filter.id)
                                        ? `bg-slate-800 ${filter.color} shadow-[0_0_10px_inset_rgba(0,0,0,0.5)]`
                                        : 'bg-transparent border-transparent text-slate-500 hover:text-slate-300 hover:bg-slate-800/50'
                                    }`}
                            >
                                <span className={activeFilters.includes(filter.id) ? 'opacity-100' : 'opacity-50'}>
                                    {filter.icon}
                                </span>
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded text-xs text-yellow-500/80">
                    <p className="flex items-start gap-2">
                        <Activity size={14} className="mt-0.5" />
                        Live intel feed is strictly monitored. Locations are approximate based on latest drone recon.
                    </p>
                </div>
            </div>

            {/* Map Area */}
            <div className="flex-1 relative bg-[#050505] border border-slate-800 rounded-lg overflow-hidden shadow-2xl group">
                <MapContainer
                    crs={L.CRS.Simple}
                    bounds={MAP_BOUNDS}
                    center={[MAP_HEIGHT / 2, MAP_WIDTH / 2]}
                    zoom={-0.5}
                    minZoom={-2}
                    maxZoom={2}
                    scrollWheelZoom={true}
                    className="w-full h-full z-0"
                    style={{ background: '#050505' }}
                    attributionControl={false}
                >
                    <ImageOverlay
                        url="/images/intel-map-base.png"
                        bounds={MAP_BOUNDS}
                    />

                    {activeMarkers.map(marker => (
                        <Marker
                            key={marker.id}
                            position={[marker.y, marker.x]}
                            icon={getIconForType(marker.type)}
                        >
                            <Popup className="custom-popup bg-slate-900 border border-cyan-500/30 text-slate-200">
                                <div className="p-1 min-w-[200px]">
                                    <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-700">
                                        <h4 className="font-bold text-cyan-400 uppercase tracking-wider font-oswald">{marker.title}</h4>
                                        <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400 border border-slate-700">{marker.type}</span>
                                    </div>
                                    <p className="text-xs text-slate-400 leading-relaxed font-sans">{marker.description}</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                    <MapController bounds={MAP_BOUNDS} />
                </MapContainer>

                {/* Grid Overlay Effect */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] z-10"></div>

                {/* Vignette */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.8)_100%)] z-10"></div>
            </div>
        </div>
    );
}
