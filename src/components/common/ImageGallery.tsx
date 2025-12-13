"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ImageGalleryProps {
    images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
    const [index, setIndex] = useState(-1);

    if (!images.length) return null;

    return (
        <>
            <div className={`grid gap-2 ${images.length > 1 ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1"}`}>
                {images.map((src, i) => (
                    <div
                        key={i}
                        className="relative aspect-video cursor-pointer rounded-lg overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-colors"
                        onClick={() => setIndex(i)}
                    >
                        <Image
                            src={src}
                            alt={`Gallery image ${i + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                ))}
            </div>

            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={images.map(src => ({ src }))}
            />
        </>
    );
}
