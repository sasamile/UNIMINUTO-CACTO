"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CalendarDays, MapPin } from "lucide-react";
import { Event } from "@/types";
import { useRouter } from "next/navigation";

interface SpecialEventCardProps {
  event: Event;
}

export function SpecialEventCard({ event }: SpecialEventCardProps) {
  const router = useRouter();

  const startDate = new Date(event.startDate).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  
  return (
    // <div className="group h-[210px] w-[263px] [perspective:1000px]">
    //   <div className="group-hover:opacity-20 absolute inset-0 rounded-full bg-gradient-to-r from-[#003698] to-[#003698] opacity-0 blur-xl delay-200 transition-all duration-1000" />
    //   <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-lg">
    //     <div className="absolute inset-0 w-full h-full rounded-lg">
    //       <Image
    //         src="/images/hero-1.jpg"
    //         alt="Image"
    //         fill
    //         className="absolute object-cover rounded-lg"
    //       />
    //       <div className="absolute inset-0 flex items-center justify-center bg-primary/55 rounded-lg">
    //         <h3 className="text-center tracking-wide text-lg font-bold text-white">
    //           Eventos y festivales uniminuto
    //         </h3>
    //       </div>
    //     </div>
    //     <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-white [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg border-[2px] group-hover:border-[#008bf8] delay-200 transition-all duration-1000">
    //       <div className="flex flex-col items-center justify-center text-primary p-3">
    //         <h3 className="text-center text-md font-bold">
    //           Eventos y festivales uniminuto
    //         </h3>
    //         <p className="text-center text-xs mb-6">
    //           Conoce más sobre nuestros eventos anuales
    //         </p>
    //         <Button>Clik aqui</Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Card className="overflow-hidden shadow-lg">
      <div className="relative h-48">
        <Image
          src={event.billboard}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg line-clamp-1">{event.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          <span>{startDate}</span>
        </div>
        <div className="mt-2 flex items-center space-x-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{event.address}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full bg-[#003698] hover:bg-[#003698]"
          onClick={() => router.push(`/special-event/${event.id}`)}
        >
          Ver evento
        </Button>
      </CardFooter>
    </Card>
  );
}
