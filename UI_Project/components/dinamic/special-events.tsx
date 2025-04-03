import { getSpecialEvents } from "@/actions/get-special-events";
import { SpecialEventCard } from "../special-event-card";

export async function SpecialEvents() {
  const events = await getSpecialEvents();

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-muted mt-4">
      <div className="container max-w-6xl mx-auto space-y-8">
        <h2 className="xs:text-center lg:text-3xl text-[26px] font-bold text-foreground/90 px-5">
          Conoce nuestros eventos especiales
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((event) => (
            <SpecialEventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
