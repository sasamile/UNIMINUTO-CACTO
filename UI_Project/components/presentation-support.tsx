import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface PresentationSupportProps {
  backgroundColor?: string
  textColor?: string
  reverse?: boolean
  imageSrc: string
  title: string
  description: string
}

export default function PresentationSupport({
  backgroundColor = '#fff',
  textColor = '#000',
  reverse = false,
  title,
  description,
  imageSrc,
}: PresentationSupportProps) {
  return (
    <div
      className={cn(
        'flex md:flex-row flex-col justify-center sm:max-w-[1100px] max-w-screen-sm mx-auto text-muted',
        reverse && 'md:flex-row-reverse'
      )}
    >
      <div
        className="relative w-full md:min-w-[400px] min-w-full h-[300px]"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
        }}
      />
      <div
        className="py-6 lg:px-12 sm:px-8 px-4 md:translate-y-5 shadow-rounded"
        style={{ backgroundColor, color: textColor }}
      >
        <h3 className="text-[26px] font-semibold mb-10">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
