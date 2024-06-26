import { Link } from '@/components/ui'
import { routes } from '@/constants'

export const InformationSection = () => {
  return (
    <section className="m-auto mt-20 max-w-[1024px] max-sm:px-3">
      <div className="flex max-sm:flex-col-reverse max-sm:items-center lg:justify-between">
        <div className="max-w-[500px] max-sm:text-center">
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
          <div className="mt-6 flex items-center gap-4 text-lg max-sm:justify-center">
            <a
              href="/cv/Khuong_Huy_Hieu_resume.pdf"
              download
              className="rounded-full bg-theme p-3 text-lg text-purple"
            >
              Download Resume
            </a>
            <Link href={routes.EXPERIENCE} className="text-theme">
              See Experience
            </Link>
          </div>
          <div className="mt-6 rounded-full text-lg text-gray-600">
            <p>
              <span className="text-theme">Email: </span>khuonghuyhieu0705@gmail.com
            </p>
            <p>
              <span className="text-theme">Phone: </span> 0764509124
            </p>
          </div>
        </div>
        <div className="avatar-custom max-sm:h-[348px]" />
      </div>
    </section>
  )
}
