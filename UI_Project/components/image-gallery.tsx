"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex max-sm:flex-col justify-center gap-4 p-4 xl:max-w-6xl w-full mx-auto">
      <div className="sm:flex-1 relative xl:max-w-6xl max-sm:h-[60vh] rounded-md bg-muted">
        <Image
          src={selectedImage}
          alt="Selected"
          fill
          className="absolute w-full h-full object-cover rounded-md"
        />
      </div>
      <div
        className="sm:grid sm:grid-cols-[repeat(auto-fill,minmax(100px,1fr))] sm:gap-2 flex max-sm:space-x-2 max-sm:overflow-x-auto overflow-auto sm:h-[511.934px]"
        // onWheel={handleScroll}
      >
        {images.map((image, index) => (
          <Button
            variant="ghost"
            key={index}
            className={cn(
              "group grow relative w-24 h-20 min-w-24 min-h-20 sm:w-32 lg:w-40 lg:h-24 overflow-hidden transition-shadow hover:shadow-lg",
              selectedImage === image && "border-2 border-blue-500"
            )}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              fill
              className={cn(
                "absolute w-full h-full object-cover rounded-sm transition-transform duration-300 group-hover:scale-[1.3]"
              )}
            />
          </Button>
        ))}
      </div>
    </div>
  );
}
