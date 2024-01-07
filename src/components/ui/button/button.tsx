import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

import { Base } from '../base-elements'
import { ButtonVariantProps, buttonVariants } from './button-variants'

type ButtonElement = React.ElementRef<typeof Base.button>
type BaseButtonProps = React.ComponentProps<typeof Base.button>
interface ButtonProps extends BaseButtonProps, ButtonVariantProps {}

const Button = React.forwardRef<ButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : Base.button
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }
export type { ButtonProps }
