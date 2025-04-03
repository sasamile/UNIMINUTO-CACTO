'use client'

import { useState } from 'react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { ScrollArea } from './ui/scroll-area'

export default function InfoTabs() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="flex max-md:flex-col w-full max-w-screen-lg mx-auto my-12 px-4 md:h-auto">
      <div className="md:max-w-[370px] w-full p-6 bg-gray-200/65 rounded-lg">
        <div className="text-primary space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Info tabs</h2>
            <p className="text-primary">
              Explore our features by navigating the tabs.
            </p>
          </div>
          <nav className="flex md:flex-col gap-2 max-md:overflow-x-auto">
            <Tab
              tabValue={0}
              title="Arte y Cultura"
              activeTab={activeTab}
              onClick={(value) => {
                setActiveTab(value)
              }}
            />
            <Tab
              tabValue={1}
              title="Ciudadania"
              activeTab={activeTab}
              onClick={(value) => {
                setActiveTab(value)
              }}
            />
            <Tab
              tabValue={2}
              title="Museo Uniminuto"
              activeTab={activeTab}
              onClick={(value) => {
                setActiveTab(value)
              }}
            />
          </nav>
        </div>
      </div>
      <ScrollArea className="md:flex-1 max-md:h-auto md:min-w-[380px] md:px-4 max-md:py-2 rounded-md">
        {activeTab === 0 && (
          <TabContent
            title="Lorem ipsum dolor"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates totam doloremque fugiat quod quis ut consequuntur veniam tempore porro, accusantium deserunt veritatis sed odio quas eius! Enim debitis quos voluptatum.
            Eligendi architecto, doloremque temporibus fugit alias qui culpa illo rerum aliquam quidem minima repudiandae? In iure optio ex cumque eum veniam, praesentium quae sapiente hic facilis voluptatem at illo corporis."
            // imageSrc="/images/composition-1.svg"
            isVideo
            videoSrc="https://www.youtube.com/embed/5u-rjBnHros?si=ojVF_SDEK8HzGBRh"
          />
        )}
        {activeTab === 1 && (
          <TabContent
            title="Lorem ipsum dolor"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates totam doloremque fugiat quod quis ut consequuntur veniam tempore porro, accusantium deserunt veritatis sed odio quas eius! Enim debitis quos voluptatum.
            Eligendi architecto, doloremque temporibus fugit alias qui culpa illo rerum aliquam quidem minima repudiandae? In iure optio ex cumque eum veniam, praesentium quae sapiente hic facilis voluptatem at illo corporis."
            imageSrc="/images/composition-3.svg"
          />
        )}
        {activeTab === 2 && (
          <TabContent
            title="Lorem ipsum dolor"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates totam doloremque fugiat quod quis ut consequuntur veniam tempore porro, accusantium deserunt veritatis sed odio quas eius! Enim debitis quos voluptatum.
            Eligendi architecto, doloremque temporibus fugit alias qui culpa illo rerum aliquam quidem minima repudiandae? In iure optio ex cumque eum veniam, praesentium quae sapiente hic facilis voluptatem at illo corporis."
            imageSrc="/images/composition-2.svg"
          />
        )}
      </ScrollArea>
    </div>
  )
}

interface TabProps {
  title: string
  activeTab: number
  tabValue: number
  onClick: (value: number) => void
}

function Tab({ onClick, title, activeTab, tabValue }: TabProps) {
  return (
    <button
      className={cn(
        'shrink-0 flex items-center gap-3 rounded-md px-4 py-2 h-[44px] text-left transition-all hover:bg-transparent md:hover:text-lg md:hover:font-bold text-primary font-medium',
        activeTab === tabValue &&
          'bg-[#ffa700] shadow-sm md:text-lg sm:text-base text-[15px] font-bold text-white hover:bg-[#ffa700]'
      )}
      onClick={() => onClick(tabValue)}
    >
      <span>{title}</span>
    </button>
  )
}

interface TabContentProps {
  title: string
  paragraph: string
  imageSrc?: string
  isVideo?: boolean
  videoSrc?: string
}

function TabContent({
  paragraph,
  title,
  imageSrc,
  isVideo,
  videoSrc,
}: TabContentProps) {
  return (
    <Card className="bg-transparent border-none">
      <CardHeader
        className={cn(
          'relative md:h-56 h-[350px] rounded-lg shadow-lg',
          isVideo && 'min-w-full md:h-60'
        )}
      >
        {imageSrc && (
          <Image
            src={imageSrc}
            alt="Image"
            fill
            className="object-cover w-full h-full rounded-md"
          />
        )}
        {isVideo && videoSrc && (
          <iframe
            className="w-full h-full absolute top-0 left-0 rounded-md"
            src={videoSrc}
            title="Product Overview Video"
            aria-hidden="true"
            allowFullScreen
          />
        )}
      </CardHeader>
      <CardContent className="py-6 px-2">
        <h3 className="text-xl font-bold pb-2">{title}</h3>
        <p className="text-gray-500">{paragraph}</p>
      </CardContent>
    </Card>
  )
}
