"use client"

import { useRef, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { EventItem } from "./event-item"
import { Button } from "@/components/ui/button"
import { Event } from "@/types"

interface EventsCarouselProps {
  events: Event[]
}

export default function EventsCarousel({ events }: EventsCarouselProps) {
  const [api, setApi] = useState<any>()
  const plugin = useRef(Autoplay({ delay: 2000 }))

  return (
    <>
      <div className="w-full flex items-center justify-center size-fit mx-auto bg-white m-4 mr-0">
        <Carousel
          plugins={[plugin.current]}
          setApi={setApi}
          className="relative w-full pt-[35px] pl-[30px] pb-[25px] pr-0 cursor-grab"
        >
          <CarouselContent className="-ml-0 w-full">
            {events.map((event, index) => (
              <CarouselItem
                key={index}
                className="pl-0 max-w-[190px] h-[186px] mb-1.5"
              >
                <EventItem event={event} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="w-full flex items-center justify-center mt-4 space-x-2">
        <Button
          size="icon"
          className="bg-white size-[27px] rounded-full text-secondary-foreground hover:bg-secondary/90"
          onClick={() => api?.scrollPrev()}
        >
          <ChevronLeft className="size-5 shrink-0" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          size="icon"
          className="bg-white size-[27px] rounded-full text-secondary-foreground hover:bg-secondary/90"
          onClick={() => api?.scrollNext()}
        >
          <ChevronRight className="size-5 shrink-0" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </>
  )
}
