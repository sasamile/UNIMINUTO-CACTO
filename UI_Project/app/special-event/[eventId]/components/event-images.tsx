import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface EventImagesProps {
  images: string[]
}

export function EventImages({ images }: EventImagesProps) {
  return (
    <Carousel>
      <CarouselContent className="-ml-2 md:-ml-4">
        {images.map((image, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-8">
            <div
              className="relative p-1 w-full h-[400px] rounded-md bg-muted"
            >
              <Image
                src={image}
                alt="Carousel image"
                fill
                priority
                className="absolute inset-0 rounded-lg size-full object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
