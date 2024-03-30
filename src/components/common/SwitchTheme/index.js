'use client'

import { useTheme } from 'next-themes'
import { useState } from 'react'
import { Switch } from '@/components/ui'
import { THEME } from '@/constants'

const SwitchTheme = () => {
  const [checked, setChecked] = useState(false)
  const { setTheme } = useTheme()

  const onCheckedChange = (value) => {
    const valueTheme = value ? THEME.LIGHT : THEME.DARK
    setChecked(value)
    setTheme(valueTheme)
  }

  return (
    <div className="flex items-center gap-3 text-white">
      <Switch onCheckedChange={(isChecked) => onCheckedChange(isChecked)} />
      {checked ? 'Light' : 'Dark'}
    </div>
  )
}

export default SwitchTheme
