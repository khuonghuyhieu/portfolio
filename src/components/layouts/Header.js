'use client'

import { routes } from "@/constants"
import { Link } from "../ui"
import { usePathname } from 'next/navigation'
import { GitHubIcon, GmailIcon, LinkedinIcon } from "../icons"
import { SwitchTheme } from "../common"

const HeaderType = [
  {
    label: "Hieu Khuong",
    href: routes.HOME
  },
  {
    label: "Experience",
    href: routes.EXPERIENCE
  },
  {
    label: "Education",
    href: routes.EDUCATION
  },
]

const NavItem = ({ item }) => {
  const pathName = usePathname()

  const activeClassName = pathName === item?.href ? 'text-white' : ''

  return (
    <Link opacity href={item?.href} className={activeClassName}>{item?.label}</Link>
  )
}

export const Header = () => {
  const renderNavItem = (item) => <NavItem key={item?.label} item={item}/>

  return (
    <header className="mt-3 flex justify-center items-center gap-10">
      <div className="bg-gray-800 p-4 rounded-full">
        <nav className="flex gap-10 lg:text-xl text-purple">
          {HeaderType.map(renderNavItem)}
          <div className="flex gap-3">
            <Link opacity href={routes.CONTACT.GITHUB} target="_blank"><GitHubIcon /></Link>
            <Link opacity href={routes.CONTACT.LINKEDIN} target="_blank"><LinkedinIcon /></Link>
            <Link opacity href={routes.CONTACT.GMAIL} ><GmailIcon /></Link>
          </div>
          <SwitchTheme />
        </nav>
      </div>
    </header>
  )
}
