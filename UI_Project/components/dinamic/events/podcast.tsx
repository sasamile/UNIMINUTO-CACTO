import { PodcastIcon } from "lucide-react";

interface PodcastProps {
  url: string;
}

export function Podcast({ url }: PodcastProps) {
  return (
    <section className="flex flex-col justify-between shadow-lg rounded-lg p-6 mb-8 lg:mb-6 bg-white">
      <div>
        <h2 className="text-2xl font-bold mb-4">
          <PodcastIcon className="size-5 mr-3 inline-block" />
          Podcast
        </h2>
        <div className="mb-4">
          <p className="text-gray-600">
            Escucha nuestro podcast especial sobre el evento, donde discutimos
            los temas principales y entrevistamos a algunos de los ponentes
            destacados.
          </p>
        </div>
      </div>
      <audio src={url} controls className="w-full">
        {/* <source src={url} type="audio/mpeg" /> */}
        Tu navegador no soporta el elemento de audio.
      </audio>
    </section>
  );
}
