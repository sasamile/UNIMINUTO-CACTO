import { getBillboards } from "@/actions/get-billboards"
import Carousel from "@/components/carousel"
import HeaderCard from "@/components/header-card"

export default async function CarouselHeader() {
  const billboards = await getBillboards()

  return (
    <Carousel autoSlide slidesLenght={billboards.length}>
      {billboards.map((billboard, i) => (
        <HeaderCard
          key={i}
          title={billboard.title}
          description={billboard.description}
          buttonLabel={billboard.buttonLabel}
          buttonHref={billboard.href}
          imageSrc={billboard.image}
          className="bg-gray-400/30"
        />
      ))}
    </Carousel>
  )
}
