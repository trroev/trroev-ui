import * as React from 'react'
import { cva, VariantProps } from 'cva'

import { cn } from '@/lib/utils'

import { Base } from '../base-elements'
import { InputVariantProps, inputVariants } from './input-variants'

type InputType =
  | 'date'
  | 'email'
  | 'file'
  | 'image'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
type InputElement = React.ElementRef<typeof Base.input>
type BaseInputProps = React.ComponentProps<typeof Base.input>
interface InputProps extends BaseInputProps, InputVariantProps {
  type?: InputType
}

const Input = React.forwardRef<InputElement, InputProps>(
  ({ className, variant, type = 'text', ...props }, ref) => {
    return (
      <Base.input
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        type={type}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

export { Input }
export type { InputProps }
