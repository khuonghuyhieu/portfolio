'use client'

import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cn } from '@/utils'

const Switch = (props) => {
  return (
    <SwitchPrimitive.Root
      className={cn(
        'group relative inline-flex h-[30px] w-[51px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out',
        'data-[state=checked]:bg-white', // checked
        'data-[state=unchecked]:bg-black' // unchecked
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          'pointer-events-none relative inline-block h-[26px] w-[26px] transform rounded-full border-white shadow-lg ring-0 transition duration-200 ease-in-out',
          'data-[state=checked]:bg-black group-data-[state=checked]:translate-x-5', // checked
          'data-[state=unchecked]:bg-white group-data-[state=unchecked]:translate-x-0' // unchecked
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export default Switch
