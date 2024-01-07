'use client'

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

export interface AvatarImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, src, ...props }, ref) => {
    const loadingState = useImageLoadingState(src)

    return loadingState === 'loaded' ? (
      <img
        className={cn('aspect-square h-full w-full', className)}
        src={src}
        ref={ref}
        {...props}
      />
    ) : null
  }
)
AvatarImage.displayName = 'AvatarImage'

export interface AvatarFallbackProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

const AvatarFallback = React.forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        className={cn(
          'flex h-full w-full items-center justify-center bg-muted',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
AvatarFallback.displayName = 'AvatarFallback'

type ImageLoadingState = 'idle' | 'loading' | 'loaded' | 'error'

const useImageLoadingState = (src?: string) => {
  const [loadingState, setLoadingState] =
    React.useState<ImageLoadingState>('idle')

  React.useLayoutEffect(() => {
    if (!src) {
      setLoadingState('error')
      return
    }

    let isMounted = true
    const image = new window.Image()

    const updateState = (status: ImageLoadingState) => () => {
      if (!isMounted) return
      setLoadingState(status)
    }

    setLoadingState('loading')
    image.onload = updateState('loaded')
    image.onerror = updateState('error')
    image.src = src

    return () => {
      isMounted = false
    }
  }, [src])

  return loadingState
}

export { Avatar, AvatarFallback, AvatarImage, avatarVariants }
