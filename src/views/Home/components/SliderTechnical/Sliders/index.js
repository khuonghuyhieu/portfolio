import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TECHNICALS } from '@/constants'
import { SliderItem } from '../SliderItem'

export const Sliders = () => {
  return (
    <Swiper
      spaceBetween={30}
      freeMode={true}
      breakpoints={{
        1024: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 1,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
    >
      {TECHNICALS.map((item) => {
        return (
          <SwiperSlide key={item?.name}>
            <SliderItem item={item} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
