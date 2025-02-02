import { cn } from '@/lib/utils'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'
import { type CardVariantProps, card } from './card.variants'

type CardProps = ComponentPropsWithoutRef<'div'> & CardVariantProps

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }: CardProps, forwardedRef) => {
    const root = card(props).root

    return (
      <div ref={forwardedRef} className={cn(root(), className)} {...props} />
    )
  }
)
Card.displayName = 'Card'

const CardHeader = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }: CardProps, forwardedRef) => {
    const header = card(props).header

    return (
      <div ref={forwardedRef} className={cn(header(), className)} {...props} />
    )
  }
)
CardHeader.displayName = 'CardHeader'

const CardBody = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }: CardProps, forwardedRef) => {
    const body = card(props).body

    return (
      <div ref={forwardedRef} className={cn(body(), className)} {...props} />
    )
  }
)
CardBody.displayName = 'CardBody'

const CardFooter = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }: CardProps, forwardedRef) => {
    const footer = card(props).footer

    return (
      <div ref={forwardedRef} className={cn(footer(), className)} {...props} />
    )
  }
)

export { Card, CardBody, CardFooter, CardHeader }
export type { CardProps }
