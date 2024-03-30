'use client'

import { usePathname } from 'next/navigation'
import { routes } from '@/constants'
import { SwitchTheme } from '../common'
import { GitHubIcon, GmailIcon, LinkedinIcon } from '../icons'
import { Link } from '../ui'

const HeaderType = [
  {
    label: 'Hieu Khuong',
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

const NavItem = ({ item }) => {
  const pathName = usePathname()

  const activeClassName = pathName === item?.href ? 'text-white' : ''

  return (
    <Link opacity href={item?.href} className={activeClassName}>
      {item?.label}
    </Link>
  )
}

export const Header = () => {
  const renderNavItem = (item) => <NavItem key={item?.label} item={item} />

  return (
    <header className="mt-3 flex items-center justify-center gap-10">
      <div className="rounded-full bg-gray-800 p-4">
        <nav className="flex gap-10 text-purple lg:text-xl">
          {HeaderType.map(renderNavItem)}
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
          <SwitchTheme />
        </nav>
      </div>
    </header>
  )
}
