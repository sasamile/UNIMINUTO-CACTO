'use client'

import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { LucideIcon, MapPin, Menu, Phone, UserRound } from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ScrollArea } from './ui/scroll-area'
import { NavLinks } from '@/types'
import {
  enlacesEstudiaEnUniminuto,
  enlacesProyecciónSocial,
  enlacesSistemaUniminuto,
  enlacesVidaUniversitaria,
  modalidadesInscripcion,
  modalidadesMatriculas,
  roles,
  sedes,
} from '@/constants'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function MobileNavbar() {
  const router = useRouter()

  return (
    <Sheet>
      <SheetTrigger className="sm:hidden" asChild>
        <Button variant="ghost" size="icon" className="hover:bg-transparent">
          <Menu className="w-6 h-6 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[300px] sm:hidden p-0">
        <div className="flex flex-col h-full">
          <ScrollArea className="h-auto">
            <Accordion type="single" collapsible>
              <Item
                value="item-1"
                title="SISTEMA UNIMINUTO"
                content={enlacesSistemaUniminuto}
              />
              <Item
                value="item-2"
                title="ESTUDIA EN UNIMINUTO"
                content={enlacesEstudiaEnUniminuto}
              />
              <Item
                value="item-3"
                title="VIDA UNIVERSITARIA"
                content={enlacesVidaUniversitaria}
              />
              <Item
                value="item-4"
                accordion={false}
                title="PORTAL I + D + I + C"
                href="https://www.uniminuto.edu/portal-i-d-i-c"
              />
              <Item
                value="item-5"
                title="PROYECCIÓN SOCIAL"
                content={enlacesProyecciónSocial}
              />
            </Accordion>
          </ScrollArea>
          <ScrollArea className="flex-1 bg-[#162644] h-20">
            <Accordion type="single" collapsible>
              <Item
                value="item-1"
                title="Nuestras Sedes"
                content={sedes}
                textWhite
                Icon={MapPin}
              />
              <Item
                value="item-2"
                title="Soy"
                content={roles}
                textWhite
                Icon={UserRound}
              />
              <Item
                value="item-3"
                title="Contáctanos"
                textWhite
                href="https://www.uniminuto.edu/contactanos"
                Icon={Phone}
                accordion={false}
              />
            </Accordion>
            <div className="flex flex-col py-6">
              <Button
                size="sm"
                className=" bg-[#a81bb4] hover:text-[#a81bb4] hover:bg-white text-white mx-[58px] flex justify-center gap-2 my-[5px] rounded-md py-2 px-4"
                onClick={() =>
                  router.push('https://www.uniminuto.edu/donaciones')
                }
              >
                <span className="text-xs font-medium">Donaciones</span>
              </Button>

              <Accordion type="single" collapsible>
                <Item
                  value="item-1"
                  title="Inscríbete"
                  content={modalidadesInscripcion}
                  textWhite
                  triggerButton
                  triggerBackgroundColor="#8bbe00"
                />
                <Item
                  value="item-2"
                  title="Matricúlate"
                  content={modalidadesMatriculas}
                  textWhite
                  triggerButton
                  triggerBackgroundColor="#ffa700"
                />
              </Accordion>

              <Button
                size="sm"
                className="bg-[#004a93] hover:text-[#004a93] hover:bg-white text-white mx-[58px] flex justify-center gap-2 my-[5px] rounded-md py-2 px-4"
                onClick={() =>
                  router.push('https://www.uniminuto.edu/oferta-academica')
                }
              >
                <span className="text-xs font-medium">Donaciones</span>
              </Button>
            </div>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface ItemProps {
  value: string
  title: string
  content?: NavLinks[]
  accordion?: boolean
  href?: string
  textWhite?: boolean
  Icon?: LucideIcon
  fillIcon?: boolean
  triggerButton?: boolean
  triggerBackgroundColor?: string
}

function Item({
  content,
  title,
  value,
  accordion = true,
  href,
  textWhite,
  Icon,
  fillIcon,
  triggerButton,
  triggerBackgroundColor,
}: ItemProps) {
  const router = useRouter()

  return (
    <>
      {accordion && content && (
        <AccordionItem
          value={value}
          className={cn(triggerButton && 'border-b-0')}
        >
          <AccordionTrigger
            className={cn(
              'px-4 text-sm',
              textWhite && 'text-white text-[13px]',
              triggerButton &&
                'mx-[58px] flex justify-center gap-2 my-[5px] rounded-md py-2 px-4'
            )}
            style={{
              backgroundColor: triggerBackgroundColor,
            }}
          >
            <div className="flex gap-2">
              {Icon && (
                <Icon
                  className={cn(
                    'h-4 w-4 text-[#ffd300] fill-none',
                    fillIcon && 'fill-[#ffd300]'
                  )}
                />
              )}
              <span>{title}</span>
            </div>
          </AccordionTrigger>

          <AccordionContent className={cn('pb-0', !textWhite && 'bg-gray-200')}>
            <ul className="divide-y divide-white">
              {content.map((link, index) => (
                <li key={index}>
                  <a
                    className={cn(
                      'px-4 text-[13px] py-[15px] block font-medium text-primary hover:bg-slate-300 transition-colors',
                      textWhite &&
                        'text-white text-xs hover:bg-slate-600 py-[10px]'
                    )}
                    href={link.href}
                    target="_blank"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      )}
      {!accordion && href && (
        <Button
          variant="ghost"
          onClick={() => router.push(href)}
          className={cn(
            'p-4 w-full text-[14px] justify-start h-[52px] border-b',
            textWhite &&
              'gap-2 text-xs text-white hover:bg-slate-600 hover:text-white'
          )}
        >
          {Icon && (
            <Icon
              className={cn(
                'h-4 w-4 text-[#ffd300] fill-none',
                fillIcon && 'fill-[#ffd300]'
              )}
            />
          )}
          {title}
        </Button>
      )}
    </>
  )
}
