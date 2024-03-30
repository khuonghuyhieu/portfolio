'use client'

import { useTheme } from 'next-themes'
import { useState } from 'react'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { Switch } from '@/components/ui'
import { THEME } from '@/constants'

const SwitchTheme = () => {
  const [checked, setChecked] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  const onCheckedChange = (value) => {
    const valueTheme = value ? THEME.LIGHT : THEME.DARK
    setChecked(value)
    setTheme(valueTheme)
  }

  const childrenThumb =
    resolvedTheme === THEME.DARK ? <MdDarkMode color="black" /> : <MdOutlineLightMode />

  return (
    <div className="flex items-center gap-3 text-white">
      <Switch
        onCheckedChange={(isChecked) => onCheckedChange(isChecked)}
        childrenThumb={childrenThumb}
      />
    </div>
  )
}

export default SwitchTheme
