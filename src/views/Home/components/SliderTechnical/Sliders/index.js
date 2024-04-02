import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TECHNICALS } from '@/constants'
import { cn } from '@/utils'
import { SliderItem } from '../SliderItem'

export const Sliders = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
    >
      {TECHNICALS.map((item) => {
        return (
          <SwiperSlide
            key={item?.name}
            
          >
            <SliderItem item={item} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
