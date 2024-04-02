'use client'

import { GitHubIcon, GmailIcon, LinkedinIcon } from '@/components/icons'
import { Link } from '@/components/ui'
import { routes } from '@/constants'
import { InformationSection } from './components/InformationSection'
import { SliderTechnical } from './components/SliderTechnical'
import { UsedTechnical } from './components/UsedTechnical'

export const HomeView = () => {
  return (
    <>
      <InformationSection />
      <SliderTechnical />
      <UsedTechnical />
      <section className="m-auto mb-20 max-w-[1024px] max-sm:px-3">
        <div className="flex items-center justify-between rounded-full bg-gray-800 p-5">
          <div className="text-xl text-white">Follow me</div>
          <div className="flex gap-3">
            <Link opacity href={routes.CONTACT.GITHUB} target="_blank">
              <GitHubIcon />
            </Link>
            <Link opacity href={routes.CONTACT.LINKEDIN} target="_blank">
              <LinkedinIcon />
            </Link>
            <Link opacity href={routes.CONTACT.GMAIL}>
              <GmailIcon />
            </Link>
          </div>
        </div>
        <div className="ml-10 mt-10 text-gray-600">khuonghuyhieu © 2024</div>
      </section>
    </>
  )
}
