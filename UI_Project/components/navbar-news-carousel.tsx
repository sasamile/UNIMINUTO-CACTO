import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import NavbarNewsCard from './navbar-news-card'
import { NavbarNews } from '@/types'

interface NavbarNewsCarouselProps {
  news: NavbarNews[]
}

export default function NavbarNewsCarousel({ news }: NavbarNewsCarouselProps) {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {news.map((newsSection, index) => (
          <CarouselItem key={index} className="md:basis-1/2">
            <NavbarNewsCard news={newsSection} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
