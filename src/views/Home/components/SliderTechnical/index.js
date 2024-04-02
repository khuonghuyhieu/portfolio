import { Sliders } from './Sliders'

export const SliderTechnical = () => {
  return (
    <section className="m-auto mb-20 mt-20 max-w-[1024px]">
      <hr className="mb-16" />
      <div className="max-sm:px-3">
        <h1 className="text-5xl">Technical Experience</h1>
        <p className="mt-4 text-lg text-gray-600">With the most popular ecosystem frontend</p>
        {/* slider */}
        <div className="mt-10">
          <Sliders />
        </div>
      </div>
    </section>
  )
}
