export const InformationSection = () => {
  return (
    <section className="m-auto mt-20 max-w-[1024px]">
      <div className="flex justify-between">
        <div className="max-w-[500px]">
          <h1 className="text-6xl">Hi, Khuong Huy Hieu</h1>
          <p className="mt-8 text-lg text-gray-600">
            Developer with <span className=" text-theme">2+ years</span> of experience as
            <span className="text-theme"> Front-End Software Engineer. </span> I have successfully
            contributed to diverse projects, including health, event, and matchmaking apps, with
            comprehensive admin pages and landing pages. I have experience using
            <span className="text-theme"> ReactJs and NextJs. </span>On my journey to becoming an
            outstanding engineer, I focus on solving problems, particularly those faced by
            customers.
          </p>
        </div>
        <div className="avatar-custom" />
      </div>
    </section>
  )
}