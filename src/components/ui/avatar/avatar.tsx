import * as React from 'react'
import { cva, VariantProps } from 'cva'

import { cn } from '@/lib/utils'

const avatarVariants = cva('relative flex shrink-0 overflow-hidden', {
  variants: {
    radius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
    size: {
      xs: 'h-6 w-6',
      sm: 'h-8 w-8',
      md: 'h-10 w-10',
      lg: 'h-12 w-12',
      xl: 'h-14 w-14',
    },
  },
  defaultVariants: {
    radius: 'full',
    size: 'md',
  },
})

export interface AvatarProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarVariants> {}

export interface AvatarImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, radius, size, ...props }, ref) => (
    <span
      className={cn(avatarVariants({ radius, size, className }))}
      ref={ref}
      {...props}
    />
  )
)
Avatar.displayName = 'Avatar'

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, ...props }, ref) => (
    <img
      className={cn('aspect-square h-full w-full', className)}
      ref={ref}
      {...props}
    />
  )
)
AvatarImage.displayName = 'AvatarImage'

export { Avatar, AvatarImage, avatarVariants }
