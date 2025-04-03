import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

interface NewsCardProps {
  imageWidth?: number
  imageHeight?: number
  imageAspectRatio?: string
  imageSrc: string
  title: string
  paragraph: string
  href: string
  mainNews?: boolean
}

export default function NewsCard({
  imageSrc,
  title,
  paragraph,
  imageHeight = 200,
  imageWidth = 300,
  imageAspectRatio = '300/200',
  href,
  mainNews = false,
}: NewsCardProps) {
  return (
    <Link
      href={href}
      target='_blank'
      className={cn(
        !mainNews &&
          'relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2'
      )}
    >
      <Image
        alt="News image"
        className={cn('object-cover w-full h-48', mainNews && 'h-80')}
        height={imageHeight}
        width={imageWidth}
        src={imageSrc}
        style={{
          aspectRatio: imageAspectRatio,
          objectFit: 'cover',
        }}
      />
      <div className={cn('bg-white p-4 dark:bg-gray-950', mainNews && 'p-6')}>
        <h4
          className={cn(
            'group group-hover:underline font-bold text-lg mb-2',
            mainNews && 'font-bold text-2xl'
          )}
        >
          {title}
        </h4>
        <p
          className={cn(
            'text-gray-500 dark:text-gray-400 text-sm',
            mainNews && 'text-base mb-4'
          )}
        >
          {paragraph}
        </p>
        {mainNews && <Button size="sm">Ver más</Button>}
      </div>
    </Link>
  )
}
