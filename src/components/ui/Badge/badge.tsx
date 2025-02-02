import { cn } from '@/lib/utils'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'
import { type BadgeVariantsProps, badgeVariants } from './badge.variants'

type BadgeProps = ComponentPropsWithoutRef<'span'> & BadgeVariantsProps

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }: BadgeProps, forwardedRef) => {
    return (
      <span
        ref={forwardedRef}
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      />
    )
  }
)
Badge.displayName = 'Badge'

export { Badge }
export type { BadgeProps }
