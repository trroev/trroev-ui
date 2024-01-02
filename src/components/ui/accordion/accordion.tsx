'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { Icon } from '@/components/icons'

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface AccordionItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className={className} ref={ref} {...props}>
        {children}
      </div>
    )
  }
)
Accordion.displayName = 'Accordion'

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, children, title, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleOpen = () => setIsOpen(!isOpen)

    return (
      <div className={cn('border-b', className)} ref={ref} {...props}>
        <h3 className="flex">
          <button
            type="button"
            onClick={toggleOpen}
            className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline"
          >
            {title}
            <Icon.chevronDown
              className={cn(
                'h-4 w-4 shrink-0 rotate-90 transition-transform duration-200',
                isOpen && 'rotate-0'
              )}
            />
          </button>
        </h3>
        <section className="overflow-hidden text-sm transition-all">
          {isOpen && <div className="pb-4 pt-0">{children}</div>}
        </section>
      </div>
    )
  }
)
AccordionItem.displayName = 'AccordionItem'

export { Accordion, AccordionItem }
