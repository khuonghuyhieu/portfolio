'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useMemo } from 'react'
import { assets, THEME } from '@/constants'

const ThemeLogo = () => {
  const { resolvedTheme } = useTheme()

  return (
    <div className="h-10 w-10">
      {resolvedTheme === THEME.DARK && <img src={assets.LOGO.LIGHT} alt="logo" />}
      {resolvedTheme === THEME.LIGHT && <img src={assets.LOGO.DARK} alt="logo" />}
    </div>
  )
}

export const Logo = () => {
  const { resolvedTheme } = useTheme()

  return (
    <div className="absolute bottom-10 left-10">
      <ThemeLogo />
    </div>
  )
}
