import { Clock } from "lucide-react"
import Link from "next/link"

import { Event } from "@/types"
import { getDateDetails } from "@/utils/get-date-details"

interface EventItemProps {
  event: Event
}

export function EventItem({ event }: EventItemProps) {
  const { day, month, time } = getDateDetails(new Date(event.startDate))

  return (
    <div className="flex flex-col justify-between size-full border-r select-none px-5">
      <div className="">
        <h2 className="text-[#162644] font-semibold text-[30px]">
          {day}{" "}
          <span className="uppercase font-light text-[#FFD300]">{month}</span>
        </h2>
        <p className="text-[#004A93] text-[15px] font-semibold">
          {event.title}
        </p>
      </div>
      <div>
        <span className="flex items-center gap-3 text-muted-foreground">
          <Clock className="size-4" />
          {time}
        </span>
        <Link href={`/events/${event.id}`} className="text-xs underline">
          Ver evento
        </Link>
      </div>
    </div>
  )
}
