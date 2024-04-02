import { JavascriptIcon } from '@/components/icons'

export const SliderItem = ({ item }) => {
  const { icon, bgColor, name } = item || {}

  return (
    <div className='max-w-[410px] rounded-3xl py-10 pl-10' style={{ backgroundColor: bgColor }}>
      {icon}
      <p className="mt-2 text-xl text-black">{name}</p>
    </div>
  )
}
