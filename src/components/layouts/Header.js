'use client'

import { routes } from "@/constants"
import { Link } from "../ui"
import { usePathname } from 'next/navigation'

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
    <header className="mt-3 flex justify-center items-center">
        <div className="bg-gray-800 p-4 rounded-full">
            <nav className="flex gap-4 lg:text-xl text-purple">
                {HeaderType.map(renderNavItem)}
            </nav>
        </div>
    </header>
  )
}
