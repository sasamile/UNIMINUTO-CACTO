import { getNews } from "@/actions/get-news";
import NewsCard from "./news-card";

export default async function NewsSection() {
  const news = await getNews();

  return (
    <section
      key="1"
      className="grid grid-cols-1 lg:grid-cols-2 gap-3 max-w-6xl mx-auto p-4"
    >
      {/* News 1 */}
      <div className="relative group overflow-hidden rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="flex flex-col items-start justify-center object-cover w-full  h-[250px] rounded-lg px-5">
            <h2 className="xs:text-center lg:text-3xl text-[26px] font-bold text-foreground/90 italic">
              Noticias
            </h2>
            <p className="text-lg text-gray-500 xs:text-center text-left">
              Encuentra las ultimas novedades
            </p>
          </div>
        </div>

        <NewsCard
          href="#"
          imageSrc={news[0].imageUrl}
          imageHeight={400}
          imageWidth={600}
          imageAspectRatio="600/400"
          title={news[0].title}
          paragraph={news[0].description}
          mainNews
        />
      </div>

      {/* News 2 */}
      <div className="grid grid-cols-1 ms:grid-cols-2 gap-6">
        {news.slice(1).map((news) => (
          <NewsCard
            key={news.id}
            href={news.link}
            imageSrc={news.imageUrl}
            title={news.title}
            paragraph={news.description}
          />
        ))}
      </div>
    </section>
  );
}
