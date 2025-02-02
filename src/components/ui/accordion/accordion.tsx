import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  forwardRef,
} from 'react'

import { Content, Header, Item, Root, Trigger } from '@radix-ui/react-accordion'

import { cn } from '@/lib/utils'
import { RiAddLine } from '@remixicon/react'

const Accordion = Root

const AccordionItem = forwardRef<
  ComponentRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, forwardedRef) => (
  <Item
    ref={forwardedRef}
    className={cn(
      // base
      'overflow-hidden border-b first:mt-0',
      // border color
      'border-border',
      className
    )}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = forwardRef<
  ComponentRef<typeof Trigger>,
  ComponentPropsWithoutRef<typeof Trigger>
>(({ className, children, ...props }, forwardedRef) => (
  <Header className="flex">
    <Trigger
      className={cn(
        // base
        'group flex flex-1 cursor-pointer items-center justify-between py-3 text-left font-medium text-sm leading-none',
        // text color
        'text-background',
        // disabled
        'data-[disabled]:cursor-default data-[disabled]:text-gray-400 dark:data-[disabled]:text-gray-600',
        //focus
        'focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <RiAddLine
        className={cn(
          // base
          'group-data-[state=open]:-rotate-45 size-5 shrink-0 transition-transform duration-150 ease-[cubic-bezier(0.87,_0,_0.13,_1)]',
          // text color
          'text-background',
          // disabled
          'group-data-[disabled]:text-gray-300 group-data-[disabled]:dark:text-gray-700'
        )}
        aria-hidden="true"
        focusable="false"
      />
    </Trigger>
  </Header>
))
AccordionTrigger.displayName = Trigger.displayName

const AccordionContent = forwardRef<
  ComponentRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, forwardedRef) => (
  <Content
    ref={forwardedRef}
    className={cn(
      'transform-gpu data-[state=closed]:animate-accordionClose data-[state=open]:animate-accordionOpen'
    )}
    {...props}
  >
    <div
      className={cn(
        // base
        'overflow-hidden pb-4 text-sm',
        // text color
        'text-background',
        className
      )}
    >
      {children}
    </div>
  </Content>
))

AccordionContent.displayName = Content.displayName

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
