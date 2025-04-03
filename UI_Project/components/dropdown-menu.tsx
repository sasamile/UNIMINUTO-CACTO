import React from 'react'
import { Button } from './ui/button'
import { ChevronDown, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NavLinks, NavbarNews } from '@/types'
import { ScrollArea } from './ui/scroll-area'
import NavbarNewsCarousel from './navbar-news-carousel'
import { noticiasSistemaUniminuto } from '@/constants'

interface DropdownMenuProps {
  className?: string
  Icon?: LucideIcon
  fillIcon?: boolean
  buttonColor?: string
  buttonLabel: string
  linksArray: NavLinks[]
  mainMenu?: boolean
  navbarNews?: NavbarNews[]
}

export default function DropdownMenu({
  buttonColor,
  buttonLabel,
  Icon,
  fillIcon,
  linksArray,
  className,
  mainMenu,
  navbarNews,
}: DropdownMenuProps) {
  return (
    <div className={cn('group/box inline-block', !mainMenu && 'relative')}>
      <Button
        size="sm"
        className={cn(
          'dropdown h-7 justify-center gap-1 text-white px-4 py-2 font-medium',

          !buttonColor && 'px-0 bg-transparent hover:bg-transparent',
          mainMenu &&
            'font-bold hover:bg-white hover:text-[#162644] pb-3 rounded-none duration-0 px-1',
          className
        )}
        style={{
          backgroundColor: buttonColor,
        }}
      >
        {Icon && (
          <Icon
            className={cn(
              'h-4 w-4 text-[#ffd300] fill-none',
              fillIcon && 'fill-[#ffd300]'
            )}
          />
        )}
        <span className="text-xs">{buttonLabel}</span>
        <ChevronDown className="h-4 w-4 transition-all duration-300 group-hover/box:-rotate-180" />
      </Button>
      {!mainMenu && (
        <div className="group-hover/box:block hidden absolute min-w-[200px] shadow-md z-10">
          <div className={cn('bg-white w-full text-gray-600 mt-1')}>
            <ul className="divide-y">
              {linksArray?.map((link, index) => (
                <li key={index}>
                  <a
                    className="px-3 text-xs py-2 font-medium block hover:font-bold"
                    href={link.href}
                    target="_blank"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {mainMenu && (
        <div className="group-hover/box:block hidden absolute w-screen h-auto  -left-0 right-0 shadow-md z-10">
          <div
            className={cn(
              'flex gap-4 bg-white h-full text-gray-600 border-t border-yellow-400 py-[45px] px-6 max-h-[540px]'
            )}
          >
            <ScrollArea className="min-w-[40%] space-y-1">
              <ul>
                {linksArray?.map((link, index) => (
                  <li key={index}>
                    <a
                      className="group/link px-3 text-sm text-[#162644] py-2 font-medium block"
                      href={link.href}
                      target="_blank"
                    >
                      <span className="relative w-fit">
                        {link.label}
                        <div className="absolute -bottom-1 left-0 group-hover/link:w-[30%] w-0 h-[2px] bg-primary transition-all duration-200" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </ScrollArea>

            <div className="w-[40%]">
              <h3 className="uppercase text-sm font-bold text-[#004a93] border-b border-gray-300 pb-2 mb-3">
                Noticias
              </h3>
              <NavbarNewsCarousel
                news={navbarNews ?? noticiasSistemaUniminuto}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
