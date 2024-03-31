import { JavascriptIcon } from '@/components/icons'

export const SliderItem = ({ item }) => {
  const { icon, name } = item || {}

  return (
    <>
      {icon}
      <p className="mt-2 text-xl text-black">{name}</p>
    </>
  )
}
