'use client'

import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
  type CarouselApi,
} from '@/components/ui/carousel'
import TestimonyCard from './testimony-card'
import { useEffect, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Testimonial } from '@/types'

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="py-5">
      <Carousel
      plugins={[
        Autoplay({
          delay: 5500,
        }),
      ]}
        setApi={setApi}
        className="mx-auto max-w-3xl w-full sm:px-6 lg:py-8 lg:px-8"
      >
        <CarouselContent>
          {testimonials.map((testimonial, i) => (
            <CarouselItem key={i} className="cursor-grab">
              <TestimonyCard testimony={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="max-lg:hidden" />
        <CarouselNext className="max-lg:hidden" />
      </Carousel>
      <div className="text-center text-sm text-muted-foreground">
        {current} of {count}
      </div>
    </div>
  )
}
