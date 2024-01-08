import * as React from 'react'

import { cn } from '@/lib/utils'

import { Base } from '../base-elements'
import { CardVariantProps, cardVariants } from './card-variants'

type CardElement = React.ElementRef<typeof Base.div>
type BaseCardProps = React.ComponentProps<typeof Base.div>
interface CardProps extends BaseCardProps, CardVariantProps {}

const Card = React.forwardRef<CardElement, CardProps>(
  ({ className, variant, isBlurred, radius, shadow, ...props }, ref) => {
    return (
      <Base.div
        className={cn(
          cardVariants({ variant, isBlurred, radius, shadow, className })
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Card.displayName = 'Card'

type CardHeaderElement = React.ElementRef<typeof Base.div>
type BaseCardHeaderProps = React.ComponentProps<typeof Base.div>
interface CardHeaderProps extends BaseCardHeaderProps {}

const CardHeader = React.forwardRef<CardHeaderElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <Base.div
        className={cn('flex flex-col space-y-1.5 p-6', className)}
        ref={ref}
        {...props}
      />
    )
  }
)
CardHeader.displayName = 'CardHeader'

type CardTitleElement = React.ElementRef<typeof Base.h3>
type BaseCardTitleProps = React.ComponentProps<typeof Base.h3>
interface CardTitleProps extends BaseCardTitleProps {}

const CardTitle = React.forwardRef<CardTitleElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <Base.h3
      className={cn('text-2xl font-semibold leading-none tracking-tight')}
      ref={ref}
      {...props}
    />
  )
)
CardTitle.displayName = 'CardTitle'

type CardSubtitleElement = React.ElementRef<typeof Base.p>
type BaseCardSubtitleProps = React.ComponentProps<typeof Base.p>
interface CardSubtitleProps extends BaseCardSubtitleProps {}

const CardSubtitle = React.forwardRef<CardSubtitleElement, CardSubtitleProps>(
  ({ className, ...props }, ref) => (
    <Base.p
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
)
CardSubtitle.displayName = 'CardSubtitle'

type CardContentElement = React.ElementRef<typeof Base.div>
type BaseCardContentProps = React.ComponentProps<typeof Base.div>
interface CardContentProps extends BaseCardContentProps {}

const CardContent = React.forwardRef<CardContentElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <Base.div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
)
CardContent.displayName = 'CardContent'

type CardFooterElement = React.ElementRef<typeof Base.div>
type BaseCardFooterProps = React.ComponentProps<typeof Base.div>
interface CardFooterProps extends BaseCardFooterProps {}

const CardFooter = React.forwardRef<CardFooterElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <Base.div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  )
)
CardFooter.displayName = 'CardFooter'

export {
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardContent,
  CardFooter,
  cardVariants,
}
export type {
  CardProps,
  CardHeaderProps,
  CardTitleProps,
  CardSubtitleProps,
  CardContentProps,
  CardFooterProps,
}
