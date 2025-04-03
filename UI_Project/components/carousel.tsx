"use client"

import React, { useCallback, useEffect, useState } from "react"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CarouselProps {
  children: React.ReactNode
  slidesLenght: number
  autoSlide?: boolean
  autoSlideInterval?: number
}

export default function Carousel({
  slidesLenght,
  children,
  autoSlide,
  autoSlideInterval = 8000,
}: CarouselProps) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((current) => (current === slidesLenght - 1 ? 0 : current + 1))
  }, [slidesLenght])

  const prev = () => {
    setCurrent(current === 0 ? slidesLenght - 1 : current - 1)
  }

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [autoSlide, autoSlideInterval, next])

  return (
    <div className="relative overflow-hidden lg:mt-[86px] sm:mt-[148.84px] mt-[70.84px]">
      <div
        className="flex transition ease-out duration-500"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {children}
      </div>

      <Button
        size="icon"
        onClick={prev}
        variant="ghost"
        className="max-lg:hidden absolute top-[50%] left-4 rounded-full bg-slate-300/80 group z-20"
      >
        <ChevronLeft className="text-primary" />
      </Button>
      <Button
        size="icon"
        onClick={next}
        variant="ghost"
        className="max-lg:hidden absolute top-[50%] right-4  rounded-full bg-slate-300/80 group z-20"
      >
        <ChevronRight className="text-primary" />
      </Button>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {Array(slidesLenght)
            .fill(0)
            .map((_, i) => (
              <div
                onClick={() => setCurrent(i)}
                key={i}
                className={cn(
                  "transition-all w-3 h-3 rounded-full bg-gray-200 cursor-pointer border border-gray-500",
                  current !== i && "bg-opacity-50"
                )}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
