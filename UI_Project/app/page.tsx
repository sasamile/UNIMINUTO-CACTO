import Carousel from "@/components/carousel";
import HeaderCard from "@/components/header-card";
import CarouselHeader from "@/components/dinamic/carousel-header";
import ImageGallery from "@/components/image-gallery";
import NewsSection from "@/components/news-section";
import { headersInfo } from "@/constants";
import { AboutUs } from "@/components/dinamic/about-us";
import { Events } from "@/components/dinamic/events/events";
import { Testimonials } from "@/components/dinamic/testimonials";
import { SpecialEvents } from "@/components/dinamic/special-events";
import { ArticlesSection } from "@/components/dinamic/articles-section";
import { Gallery } from "@/components/dinamic/gallery";

export default function Home() {
  return (
    <div className="relative">
      <main>
      <CarouselHeader />

        <Events />

        <AboutUs />

        <ArticlesSection />

        <CarouselHeader />

        {/* <Carousel slidesLenght={headersInfo.length}>
          {headersInfo.map((info, i) => (
            <HeaderCard
              key={i}
              contentAlign="items-start"
              textAlign="text-left"
              title={info.title}
              description={info.subtitle}
              buttonLabel={info.buttonLabel}
              imageSrc={info.heroImgSrc}
              buttonHref=""
              className="h-[350px] bg-gray-400/30"
            />
          ))}
        </Carousel> */}

        <Gallery />

        <NewsSection />

        <SpecialEvents />

        <div className="py-12">
          <h2 className="xs:text-center lg:text-3xl text-[26px] font-bold text-foreground/90 px-5">
            Testimonios
          </h2>
          <Testimonials />
        </div>
      </main>
    </div>
  );
}
