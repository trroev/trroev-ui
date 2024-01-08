'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { Icon } from '@/components/icons'

import { Base } from '../base-elements'

type AccordionElement = React.ElementRef<typeof Base.div>
type BaseAccordionProps = React.ComponentProps<typeof Base.div>
interface AccordionProps extends BaseAccordionProps {}

const Accordion = React.forwardRef<AccordionElement, AccordionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Base.div className={className} ref={ref} {...props}>
        {children}
      </Base.div>
    )
  }
)
Accordion.displayName = 'Accordion'

type AccordionItemElement = React.ElementRef<typeof Base.div>
interface AccordionItemProps extends AccordionProps {}

const AccordionItem = React.forwardRef<
  AccordionItemElement,
  AccordionItemProps
>(({ className, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <AccordionContext.Provider value={{ isOpen, toggleOpen }}>
      <Base.div className={cn('border-b', className)} ref={ref} {...props}>
        {children}
      </Base.div>
    </AccordionContext.Provider>
  )
})
AccordionItem.displayName = 'AccordionItem'

type AccordionTitleElement = React.ElementRef<typeof Base.h3>
type BaseAccordionTitleProps = React.ComponentProps<typeof Base.h3>
interface AccordionTitleProps extends BaseAccordionTitleProps {}

const AccordionTitle = React.forwardRef<
  AccordionTitleElement,
  AccordionTitleProps
>(({ className, children, ...props }, ref) => {
  const { isOpen, toggleOpen } = useAccordionContext()

  return (
    <Base.h3 className="flex" ref={ref} {...props}>
      <Base.button
        type="button"
        onClick={toggleOpen}
        className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline"
      >
        {children}
        <Icon.chevronDown
          className={cn(
            'h-4 w-4 shrink-0 rotate-90 transition-transform duration-200',
            isOpen && 'rotate-0'
          )}
        />
      </Base.button>
    </Base.h3>
  )
})
AccordionTitle.displayName = 'AccordionTitle'

type AccordionContentElement = React.ElementRef<typeof Base.section>
type BaseAccordionContentProps = React.ComponentProps<typeof Base.section>
interface AccordionContentProps extends BaseAccordionContentProps {}

const AccordionContent = React.forwardRef<
  AccordionContentElement,
  AccordionContentProps
>(({ className, children, ...props }, ref) => {
  const { isOpen } = useAccordionContext()
  return (
    <Base.section
      className="overflow-hidden text-sm transition-all"
      ref={ref}
      {...props}
    >
      {isOpen && <Base.div className="pb-4 pt-0">{children}</Base.div>}
    </Base.section>
  )
})
AccordionContent.displayName = 'AccordionContent'

interface AccordionContextProps {
  isOpen: boolean
  toggleOpen: () => void
}

const AccordionContext = React.createContext<Partial<AccordionContextProps>>({
  isOpen: false,
  toggleOpen: () => {},
})

const useAccordionContext = () => {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error(
      'Accordion compound components cannot be rendered outside the Accordion component'
    )
  }
  return context as AccordionContextProps
}

export { Accordion, AccordionContent, AccordionItem, AccordionTitle }
export type {
  AccordionProps,
  AccordionContentProps,
  AccordionItemProps,
  AccordionTitleProps,
}
