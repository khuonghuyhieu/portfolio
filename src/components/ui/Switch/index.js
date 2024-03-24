'use client'

import { cn } from '@/utils'
import * as SwitchPrimitive from '@radix-ui/react-switch'

const Switch = (props) => {
  return (
    <SwitchPrimitive.Root
        className={cn(
            'relative group border-2 inline-flex h-[30px] w-[51px] flex-shrink-0 cursor-pointer rounded-full border-transparent transition-colors duration-200 ease-in-out',
            'data-[state=checked]:bg-white', // checked
            'data-[state=unchecked]:bg-black', // unchecked
        )}
        {...props}
    >
            <SwitchPrimitive.Thumb 
                className={cn(
                    'relative border-white pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out',
                    'group-data-[state=checked]:translate-x-5 data-[state=checked]:bg-black', // checked
                    'group-data-[state=unchecked]:translate-x-0 data-[state=unchecked]:bg-white', // unchecked
                  )}
            />
    </SwitchPrimitive.Root>
  )
}

export default Switch
