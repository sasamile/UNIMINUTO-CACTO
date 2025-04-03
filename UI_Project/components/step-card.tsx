import React from 'react'
import { Separator } from './ui/separator'
import { cn } from '@/lib/utils'

interface StepCardProps {
  stepNumber: string
  title: string
  indication: string
}

// bg-gradient-to-r from-[#ff6b6b] to-[#ffa500]

export default function StepCard({
  indication,
  title,
  stepNumber,
}: StepCardProps) {
  return (
    <div className="flex items-center justify-center xs:gap-10 gap-5 max-w-[600px] mx-auto">
      <div className="flex items-center justify-center h-full">
        <div className="relative flex items-center justify-center xs:w-[80px] xs:h-[80px] w-[60px] h-[60px] rounded-full bg-gradient-to-r from-[#003698] to-[#0077b6] p-2">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#003698] to-[#0077b6] opacity-50 blur-md" />
          <span className="text-3xl font-bold text-white dark:text-gray-100 z-10">
            {stepNumber}
          </span>
        </div>
      </div>
      <Separator
        orientation="vertical"
        className="h-[100px] p-[2px] max-xs:hidden"
      />
      <div className="sm:w-[50%] w-[80%]">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{indication}</p>
      </div>
    </div>
  )
}
