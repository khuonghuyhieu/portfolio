"use client"

import { THEME } from '@/constants'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({ children, ...props }) {
    return (
      <NextThemesProvider attribute="data-theme" defaultTheme={THEME.DEFAULT} enableSystem {...props}>
        {children}
      </NextThemesProvider>
    )
  }