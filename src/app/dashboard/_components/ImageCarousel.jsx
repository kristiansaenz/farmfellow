import {Carousel, CarouselSlide} from '@mantine/carousel'
import {Image} from '@mantine/core'

export default function ImageCarousel({booth}) {
  return (
    <Carousel withIndicators height={200}>
      <CarouselSlide>
        <Image
          style={{height: '100%'}}
          src={booth.image}
          height={160}
          alt={booth.name}
        />
      </CarouselSlide>
      <CarouselSlide>2</CarouselSlide>
      <CarouselSlide>3</CarouselSlide>
      {/* ...other slides */}
    </Carousel>
  )
}