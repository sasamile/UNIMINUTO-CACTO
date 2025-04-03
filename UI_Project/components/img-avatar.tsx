import { UserRound } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { cn } from '@/lib/utils'
import React from 'react'

interface ImgAvatarProps {
  imageSrc: string
  className?: string
  children?: React.ReactNode
}

export default function ImgAvatar({
  imageSrc,
  className,
  children,
}: ImgAvatarProps) {
  return (
    <Avatar
      className={cn(
        'relative w-[120px] h-[120px] rounded-full bg-gray-500/20',
        className
      )}
    >
      <AvatarImage src={imageSrc} className="object-cover" />
      <AvatarFallback>
        <UserRound className="h-12 w-12 text-gray-500" />
      </AvatarFallback>
      {children}
    </Avatar>
  )
}
