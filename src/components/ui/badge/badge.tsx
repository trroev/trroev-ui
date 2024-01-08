import * as React from 'react'

import { cn } from '@/lib/utils'

import { Base } from '../base-elements'
import { BadgeVariantProps, badgeVariants } from './badge-variants'

type BadgeElement = React.ElementRef<typeof Base.div>
type BaseBadgeProps = React.ComponentProps<typeof Base.div>
interface BadgeProps extends BaseBadgeProps, BadgeVariantProps {}

const Badge = React.forwardRef<BadgeElement, BadgeProps>(
  ({ className, variant, radius, ...props }, ref) => {
    return (
      <Base.div
        className={cn(badgeVariants({ variant, radius, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Badge.displayName = 'Badge'

export { Badge }
export type { BadgeProps }
