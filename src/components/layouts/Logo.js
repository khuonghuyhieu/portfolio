'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useMemo } from 'react'
import { assets, THEME } from '@/constants'

export const Logo = () => {
  const { resolvedTheme } = useTheme()

  const logo = useMemo(() => {
    const isDark = resolvedTheme === THEME.DARK

    return isDark ? assets.LOGO.LIGHT : assets.LOGO.DARK
  }, [resolvedTheme])

  return (
    <div className="absolute bottom-10 left-10">
      <Image src={logo} width={40} height={40} alt="logo" />
    </div>
  )
}
