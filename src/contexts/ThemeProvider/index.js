'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { THEME } from '@/constants'

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider attribute="data-theme" defaultTheme={THEME.DARK} enableSystem {...props}>
      {children}
    </NextThemesProvider>
  )
}
