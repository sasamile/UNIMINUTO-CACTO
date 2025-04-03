import { Podcast } from "@/components/dinamic/events/podcast";
import { Clapperboard } from "lucide-react";
import Image from "next/image";
import { EventImages } from "./components/event-images";
import { getEvent } from "@/actions/get-events";
import { formatDate } from "@/utils/format-date";
import { EventCommentForm } from "@/components/dinamic/events/event-comment-form";
import { cn } from "@/lib/utils";

export default async function EventPage({
  params,
}: {
  params: { eventId: string };
}) {
  const eventId = params.eventId;
  const event = await getEvent(eventId);

  const startDate = formatDate(new Date(event.startDate));
  const endDate = formatDate(new Date(event.endDate));

  return (
    <div className="min-h-full bg-zinc-100/30 overflow-x-hidden">
      <header className="relative h-96 lg:mt-[86px] sm:mt-[148.84px] mt-[62px]">
        <Image
          src={event?.billboard!}
          alt="Imagen de fondo del evento"
          fill
          priority
          className="absolute object-cover inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            {event?.title}
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-8 max-w-screen-lg mx-auto">
        <div className="">
          {/* Left Column */}
          <div className="mb-8 lg:mb-0">
            <section className="shadow-lg rounded-lg p-6 mb-8 lg:mb-6  bg-white">
              <h2 className="text-2xl font-bold mb-4">{event?.title}</h2>
              <p className="text-gray-600 mb-4">{event?.description}</p>
              <div className="mb-4 space-y-1">
                <div className="flex gap-1">
                  <h3 className="font-semibold">
                    Inicio: <span className="font-normal">{startDate}</span>
                  </h3>
                </div>
                <div className="flex gap-1">
                  <h3 className="font-semibold">
                    Fin: <span className="font-normal">{endDate}</span>
                  </h3>
                </div>
                <div className="md:col-span-2">
                  <h3 className="font-semibold">Ubicación:</h3>
                  <p>{event.address}</p>
                </div>
              </div>
            </section>

            <div
              className={cn(
                "md:grid md:grid-cols-2 md:gap-8",
                event.videoUrl! && "md:grid-cols-1 md:gap-0",
                event.podcastUrl! && "md:grid-cols-1 md:gap-0"
              )}
            >
              {/* Podcast */}
              {event.podcastUrl && <Podcast url={event.podcastUrl} />}

              {/* YouTube Video */}
              <section
                className={cn(
                  "mb-8 lg:mb-6 shadow-lg rounded-lg p-6 bg-white",
                  event.videoUrl ? "block" : "hidden"
                )}
              >
                <h2 className="text-2xl font-bold mb-4">
                  <Clapperboard className="size-5 mr-3 inline-block" /> Publicación
                </h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={event.videoUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-[300px] md:h-[200px]"
                  ></iframe>
                </div>
              </section>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Event Images */}
            <section className={cn(event.images.length === 0 && "hidden")}>
              <h2 className="text-2xl font-bold mb-4">Imágenes del Evento</h2>
              <EventImages images={event.images} />
            </section>
            <EventCommentForm eventId={eventId} route="events" />
          </div>
        </div>
      </main>
    </div>
  );
}
