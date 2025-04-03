import { getEvents } from "@/actions/get-events"
import EventsCarousel from "./events-carousel"

export async function Events() {
  const events = await getEvents()

  return (
    <div className="flex items-center bg-[#004993e8] py-10">
      <div className="flex max-lg:flex-col my-6 w-full gap-8">
        <div className="flex-1 flex items-center justify-center max-sm:px-3 max-lg:px-8">
          <div className="max-lg:text-center lg:w-[280px] lg:ml-16 text-white space-y-2 md:space-y-5">
            <h2 className="uppercase text-2xl font-semibold xs:text-[34px]  leading-[3rem] tracking-wide">
              Próximos Eventos
            </h2>
            <p className="text-base max-w-[464px]">
              Estos son los eventos más relevantes del Centro de Arte, Cultura y
              Tradición de Uniminuto
            </p>
          </div>
        </div>

        <div className="w-full mx-auto lg:max-w-[900px]">
          <EventsCarousel events={events} />
        </div>
      </div>
    </div>
  )
}
