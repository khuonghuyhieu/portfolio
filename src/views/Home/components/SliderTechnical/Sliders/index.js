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
            className={`max-w-[410px] rounded-3xl bg-[#C2C2C2] py-10 pl-10`}
          >
            <SliderItem item={item} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
