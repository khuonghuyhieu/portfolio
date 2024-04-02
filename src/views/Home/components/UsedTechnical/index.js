'use client'

import { TECHNICAL_USING } from '@/constants'

const TechItem = ({ item }) => {
  const { icon, name } = item || {}

  return (
    <div className="flex items-center gap-4">
      <div className="rounded-full p-2">{icon}</div>
      <div className="text-lg">{name}</div>
    </div>
  )
}

export const UsedTechnical = () => {
  const renderTechItem = (item) => <TechItem item={item} />

  return (
    <section className="m-auto mb-20 max-w-[1024px]">
      <h1 className="mb-5 text-2xl text-gray-600">Technical I have been using</h1>
      <div className="grid auto-cols-max grid-cols-4 gap-10">
        {TECHNICAL_USING.map((item) => {
          return (
            <div key={item?.title} className="h-fit rounded-xl border border-gray-500 p-5">
              <div className="mb-4 text-xl">{item?.title}</div>
              <div className="space-y-4">{(item.items || []).map(renderTechItem)}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
