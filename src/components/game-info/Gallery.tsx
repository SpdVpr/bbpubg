'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const images = [
    "/images/ss_17f7eb1d45dda162ac4209844e0fcd96a167ffa8.1920x1080.jpg",
    "/images/ss_2474164f6221a26044967bb7d4cbaf2286b06a11.1920x1080.jpg",
    "/images/ss_30bb419572d7f4995fc82f40262ee2552c41897f.1920x1080.jpg",
    "/images/ss_3a3108cfeeb877196a48ba2dee9721f733eeb47d.1920x1080.jpg",
    "/images/ss_527400cc5c9a98c0525d03eb3fda1dbdd0f0f583.1920x1080.jpg",
    "/images/ss_6d0c7b4eee758abb487f06933509fe848550aa62.1920x1080.jpg",
    "/images/ss_86b404219fffc524395ee135f943a8eecd5ff07f.1920x1080.jpg",
    "/images/ss_b48340d5a275e5dbafb9e93007002584efec5588.1920x1080.jpg",
    "/images/ss_ceb765a0a85c946f3db9fdc552953807e5690da2.1920x1080.jpg",
    "/images/ss_d2f33425d229e4a27a280df72d6b646f71f2bccb.1920x1080.jpg",
    "/images/ss_f5a07fb8880cb77c8fd02744458539f347d8ce5c.1920x1080.jpg",
];

export function Gallery() {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <section className="py-12">
            <h3 className="font-display font-bold text-2xl text-slate-100 mb-8 uppercase tracking-wider border-l-4 border-amber-500 pl-4">
                Visual Intel
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((src, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="aspect-video relative rounded-sm overflow-hidden border border-slate-800 cursor-pointer"
                        onClick={() => setSelected(src)}
                    >
                        <Image
                            src={src}
                            alt={`Game screenshot ${idx + 1}`}
                            fill
                            className="object-cover hover:opacity-80 transition-opacity"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            {selected && (
                <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
                    <div className="relative max-w-7xl w-full aspect-video">
                        <Image
                            src={selected}
                            alt="Full size screenshot"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
