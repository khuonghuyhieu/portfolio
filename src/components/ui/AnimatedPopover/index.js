'use client'

import { useEffect, useRef, useState } from 'react'
import { useFlag } from '@/hooks/useFlag'
import { cn } from '@/utils'
import { Popover, PopoverContent, PopoverTrigger } from '../Popover'

const AnimatedPopover = ({ trigger, children, overlay = true, className, ...props }) => {
  const [open, doOpen, doClose, toggleOpen] = useFlag(false)
  const ref = useRef(null)
  const [align, setAlign] = useState('start')

  useEffect(() => {
    // calculate which alignment to open the popover with based on which half of the screen it is on (left or right)
    const handleResize = () => {
      const halfWidth = window.innerWidth / 2
      const { x } = ref?.current?.getBoundingClientRect() || {
        x: 0,
        y: 0,
      }
      if (x > halfWidth) {
        setAlign('end')
      } else {
        setAlign('start')
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [setAlign])

  return (
    <Popover open={open} onOpenChange={toggleOpen} modal>
      {overlay && open && <div className="bg-main/60 absolute inset-0 z-[99] h-screen w-screen" />}
      <PopoverTrigger asChild>
        <div ref={ref} className="cursor-pointer">
          {trigger}
        </div>
      </PopoverTrigger>
      <PopoverContent
        align={align}
        className={cn('p-5 max-sm:max-w-[calc(100vw-32px)]', className)}
        {...props}
      >
        {typeof children === 'function'
          ? children({ open, doOpen, doClose, toggleOpen })
          : children}
      </PopoverContent>
    </Popover>
  )
}

export default AnimatedPopover
