'use client'

import { usePathname, useRouter } from 'next/navigation'
import { IoMenu } from 'react-icons/io5'
import { routes } from '@/constants'
import { cn } from '@/utils'
import { ThemeLogo } from '../common'
import { AnimatedPopover } from '../ui'

const LinkItem = ({ item, doClose }) => {
  const { href, label } = item || {}

  const router = useRouter()
  const pathName = usePathname()

  const handleChangePage = () => {
    router.push(href)
    doClose()
  }

  return (
    <li
      className={cn('text-white', { 'text-purple': href === pathName })}
      onClick={handleChangePage}
    >
      {label}
    </li>
  )
}

export const HeaderPhone = () => {
  const items = [
    {
      label: 'Home',
      href: routes.HOME,
    },
    {
      label: 'Experience',
      href: routes.EXPERIENCE,
    },
    {
      label: 'Education',
      href: routes.EDUCATION,
    },
  ]

  const trigger = (
    <div>
      <IoMenu className="h-10 w-10 text-purple" />
    </div>
  )

  const renderLinkItem = (item, doClose) => <LinkItem item={item} doClose={doClose} />

  return (
    <header className="mt-3 flex justify-between px-3 md:hidden">
      <AnimatedPopover
        trigger={trigger}
        className="relative mx-4 w-[calc(100vw/2)] !max-w-full md:mx-0 md:w-[360px]"
      >
        {({ doClose }) => (
          <div className="max-h-[75vh] overflow-y-auto">
            <ul className="flex flex-col space-y-6">
              {items.map((item) => renderLinkItem(item, doClose))}
            </ul>
          </div>
        )}
      </AnimatedPopover>
      <ThemeLogo />
    </header>
  )
}
