import * as PopoverPrimitive from '@radix-ui/react-popover'
import { forwardRef } from 'react'
import { cn } from '@/utils'

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverTitle = ({ className, children }) => (
  <h3 className={cn('text-lg font-bold sm:text-base', className)}>{children}</h3>
)

const PopoverContent = forwardRef(
  (
    { className, align = 'center', sideOffset = 4, children, arrow, closeClassName, ...props },
    ref
  ) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-[100] rounded-2xl bg-gray-800 text-theme shadow-md outline-none',
          className
        )}
        {...props}
      >
        {children}
        {arrow && <PopoverPrimitive.Arrow className="text-primary fill-current" />}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  )
)

PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent, PopoverTitle }
