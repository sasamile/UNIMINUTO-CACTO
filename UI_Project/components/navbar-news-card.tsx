import React from 'react'
import Image from 'next/image'
import { NavbarNews } from '@/types'

interface NavbarNewsCardProps {
  news: NavbarNews
}

export default function NavbarNewsCard({ news }: NavbarNewsCardProps) {
  const { label, href, imageSrc } = news

  return (
    <div className="space-y-2 w-fit">
      <picture>
        <Image
          src={imageSrc}
          alt="New Image"
          width={168}
          height={168}
          className="object- w-full h-[128px]"
        />
      </picture>
      <h3 className="text-center">
        <a
          href={href}
          className="text-[13px] text-center underline text-[#004a93] font-medium"
        >
          {label}
        </a>
      </h3>
    </div>
  )
}
