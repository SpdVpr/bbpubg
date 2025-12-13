"use client";

import { useEffect, useState } from "react";
import L from "leaflet";
import { MapContainer, ImageOverlay, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet Default Icon Issue in Next.js
// Leaflet icons break in webpack/nextjs environments without this
const DefaultIcon = L.icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

interface MapMarker {
    id: string;
    type: "extraction" | "loot" | "danger" | "poi";
    x: number;
    y: number;
    title: string;
    description: string;
}

// Sample Data (To be replaced by DB or Props later)
const MOCK_MARKERS: MapMarker[] = [
    { id: "1", type: "extraction", x: 500, y: 500, title: "Alpha Extract", description: "Rooftop extraction point." },
    { id: "2", type: "poi", x: 300, y: 700, title: "Research Lab", description: "High value loot area." },
];

const MapController = ({ bounds }: { bounds: L.LatLngBoundsExpression }) => {
    const map = useMap();
    useEffect(() => {
        map.fitBounds(bounds as L.LatLngBoundsExpression);
    }, [map, bounds]);
    return null;
};

export default function InteractiveMap() {
    // Map Configuration
    // Game maps are usually simple XY planes, not Lat/Lng.
    // We use CRS.Simple for direct pixel coordinates.
    // Example map size: 1000x1000 "game units" mapped to image size.
    const mapWidth = 2000;
    const mapHeight = 2000; // Assuming square map for now
    const bounds: L.LatLngBoundsExpression = [[0, 0], [mapHeight, mapWidth]];

    const [markers, setMarkers] = useState<MapMarker[]>(MOCK_MARKERS);
    const [filter, setFilter] = useState<string>("all");

    // Filter Logic
    const filteredMarkers = filter === "all"
        ? markers
        : markers.filter(m => m.type === filter);

    // Custom Icons (Can be improved with game assets)
    const getIcon = (type: string) => {
        let color = "blue";
        if (type === "extraction") color = "green";
        if (type === "danger") color = "red";
        if (type === "loot") color = "gold";

        // Using a simple divIcon for now with Lucide-like SVG or FontAwesome would be better
        // For prototype, standard pin is fine, maybe tinted?
        // Let's us CSS filters on the image itself via className if we had custom SVG
        return DefaultIcon;
    };

    return (
        <div className="relative w-full h-[600px] md:h-[800px] bg-[#0f1115] border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
            {/* Sidebar / Overlay UI */}
            <div className="absolute top-4 left-4 z-[1000] bg-slate-900/90 backdrop-blur border border-gray-700 p-4 rounded-lg shadow-lg max-w-xs">
                <h3 className="text-cyan-400 font-bold mb-2 uppercase tracking-widest font-oswald text-lg">Intel Filters</h3>
                <div className="space-y-2">
                    {['all', 'extraction', 'loot', 'poi', 'danger'].map(type => (
                        <button
                            key={type}
                            onClick={() => setFilter(type)}
                            className={`block w-full text-left px-3 py-1.5 rounded text-sm transition-colors uppercase ${filter === type
                                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            <MapContainer
                crs={L.CRS.Simple}
                bounds={bounds}
                maxBounds={bounds}
                maxBoundsViscosity={1.0}
                center={[mapHeight / 2, mapWidth / 2]}
                zoom={-1}
                minZoom={-2} // Adjusted to prevent too small zoom
                maxZoom={2}
                scrollWheelZoom={true}
                className="w-full h-full"
                style={{ background: '#0f1115' }} // Match container bg to hide gaps
                attributionControl={false}
            >
                <ImageOverlay
                    url="/images/intel_placeholder.png"
                    bounds={bounds}
                />

                {filteredMarkers.map(marker => (
                    <Marker
                        key={marker.id}
                        position={[marker.y, marker.x]}
                        icon={getIcon(marker.type)}
                    >
                        <Popup className="custom-popup">
                            <div className="p-1">
                                <h4 className="font-bold text-slate-900">{marker.title}</h4>
                                <p className="text-sm text-slate-700">{marker.description}</p>
                                <div className="text-xs uppercase font-bold mt-1 text-slate-500">{marker.type}</div>
                            </div>
                        </Popup>
                    </Marker>
                ))}

                <MapController bounds={bounds} />
            </MapContainer>
        </div>
    );
}
