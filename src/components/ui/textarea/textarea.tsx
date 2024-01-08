import * as React from 'react'

import { cn } from '@/lib/utils'

import { Base } from '../base-elements'
import { TextareaVariantProps, textareaVariants } from './textarea-variants'

type TextareaElement = React.ElementRef<typeof Base.textarea>
type BaseTextareaProps = React.ComponentProps<typeof Base.textarea>
interface TextareaProps extends BaseTextareaProps, TextareaVariantProps {}

const Textarea = React.forwardRef<TextareaElement, TextareaProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <Base.textarea
        className={cn(textareaVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
export type { TextareaProps }
