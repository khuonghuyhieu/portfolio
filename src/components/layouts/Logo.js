'use client'

import { useTheme } from 'next-themes'
import { assets, THEME } from '@/constants'

const ThemeLogo = () => {
  const { resolvedTheme } = useTheme()

  return (
    <div className="h-10 w-10">
      {(resolvedTheme === THEME.DARK || resolvedTheme === THEME.DEFAULT) && (
        <img src={assets.LOGO.LIGHT} alt="logo" />
      )}
      {resolvedTheme === THEME.LIGHT && <img src={assets.LOGO.DARK} alt="logo" />}
    </div>
  )
}

export const Logo = () => {
  return (
    <div className="fixed bottom-10 left-10">
      <ThemeLogo />
    </div>
  )
}
