import { cn } from '@/lib/utils'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'
import { type BadgeVariantProps, badge } from './badge.variants'

type BadgeProps = ComponentPropsWithoutRef<'span'> & BadgeVariantProps

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }: BadgeProps, forwardedRef) => {
    return (
      <span
        ref={forwardedRef}
        className={cn(badge({ variant }), className)}
        {...props}
      />
    )
  }
)
Badge.displayName = 'Badge'

export { Badge }
export type { BadgeProps }
