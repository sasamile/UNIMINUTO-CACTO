import { getArticlesInfo } from "@/actions/get-articles-info";
import PresentationSupport from "../presentation-support";

export async function ArticlesSection() {
  const articlesInfo = await getArticlesInfo();

  return (
    <div className="py-12 space-y-12 px-4">
      <h2 className="xs:text-center lg:text-3xl text-[26px] font-bold text-foreground/90 px-5">
        Artículos Relevantes
      </h2>
      {articlesInfo.map((article) => (
        <PresentationSupport
          key={article.id}
          title={article.title}
          description={article.description}
          imageSrc={article.image}
          reverse={article.reverse}
        />
      ))}
    </div>
  );
}
