import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { RiLoader2Fill } from '@remixicon/react'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'
import { type ButtonVariantProps, button } from './button.variants'

type ButtonProps = {
  asChild?: boolean
  isLoading?: boolean
  loadingText?: string
} & ComponentPropsWithoutRef<'button'> &
  ButtonVariantProps

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      children,
      className,
      disabled,
      isLoading = false,
      loadingText,
      variant,
      ...props
    }: ButtonProps,
    forwardedRef
  ) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        ref={forwardedRef}
        className={cn(button({ variant }), className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="pointer-events-none flex shrink-0 items-center justify-center gap-1.5">
            <RiLoader2Fill
              className="size-4 shrink-0 animate-spin"
              aria-hidden="true"
            />
            <span className="sr-only">
              {loadingText ? loadingText : 'Loading'}
            </span>
            {loadingText ? loadingText : children}
          </span>
        ) : (
          children
        )}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button }
export type { ButtonProps }
