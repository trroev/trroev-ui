'use client'

import * as React from 'react'

import { cn, createContext } from '@/lib/utils'

import { Base } from '../base-elements'
import { AvatarVariantProps, avatarVariants } from './avatar-variants'

type AvatarContextType = {
  imageLoadingState: ImageLoadingState
  onImageLoadingStateChange(state: ImageLoadingState): void
}

const [useAvatarContext, AvatarProvider] = createContext<AvatarContextType>()

type AvatarElement = React.ElementRef<typeof Base.span>
type BaseAvatarProps = React.ComponentProps<typeof Base.span>
interface AvatarProps extends BaseAvatarProps, AvatarVariantProps {}

const Avatar = React.forwardRef<AvatarElement, AvatarProps>(
  ({ className, radius, size, children, ...props }, ref) => {
    const [imageLoadingState, setImageLoadingState] =
      React.useState<ImageLoadingState>('idle')
    const onImageLoadingStateChange = React.useCallback(
      (state: ImageLoadingState) => {
        setImageLoadingState(state)
      },
      []
    )

    const contextValue = React.useMemo(
      () => ({
        imageLoadingState,
        onImageLoadingStateChange,
      }),
      [imageLoadingState, onImageLoadingStateChange]
    )

    return (
      <AvatarProvider value={contextValue}>
        <Base.span
          className={cn(avatarVariants({ radius, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Base.span>
      </AvatarProvider>
    )
  }
)
Avatar.displayName = 'Avatar'

type AvatarImageElement = React.ElementRef<typeof Base.img>
type BaseAvatarImageProps = React.ComponentProps<typeof Base.img>
interface AvatarImageProps extends BaseAvatarImageProps {}

const AvatarImage = React.forwardRef<AvatarImageElement, AvatarImageProps>(
  ({ className, src, ...props }, ref) => {
    const { onImageLoadingStateChange } = useAvatarContext()
    const loadingState = useImageLoadingState(src, onImageLoadingStateChange)

    return loadingState === 'loaded' ? (
      <Base.img
        className={cn('aspect-square h-full w-full', className)}
        src={src}
        ref={ref}
        {...props}
      />
    ) : null
  }
)
AvatarImage.displayName = 'AvatarImage'

type AvatarFallbackElement = React.ElementRef<typeof Base.span>
type BaseAvatarFallbackProps = React.ComponentProps<typeof Base.span>
interface AvatarFallbackProps extends BaseAvatarFallbackProps {}

const AvatarFallback = React.forwardRef<
  AvatarFallbackElement,
  AvatarFallbackProps
>(({ className, ...props }, ref) => {
  const { imageLoadingState } = useAvatarContext()

  if (imageLoadingState === 'loaded') {
    return null
  }

  return (
    <Base.span
      className={cn(
        'flex h-full w-full items-center justify-center bg-muted',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
AvatarFallback.displayName = 'AvatarFallback'

type ImageLoadingState = 'idle' | 'loading' | 'loaded' | 'error'

const useImageLoadingState = (
  src?: string,
  onStateChange?: (state: ImageLoadingState) => void
) => {
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
      onStateChange?.(status)
    }

    setLoadingState('loading')
    image.onload = updateState('loaded')
    image.onerror = updateState('error')
    image.src = src

    return () => {
      isMounted = false
    }
  }, [src, onStateChange])

  return loadingState
}

export { Avatar, AvatarFallback, AvatarImage }
export type { AvatarProps, AvatarFallbackProps, AvatarImageProps }
