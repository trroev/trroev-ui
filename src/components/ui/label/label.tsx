import * as React from 'react'

import { cn } from '@/lib/utils'

import { Base } from '../base-elements'
import { LabelVariantProps, labelVariants } from './label-variants'

type LabelElement = React.ElementRef<typeof Base.label>
type BaseLabelProps = React.ComponentProps<typeof Base.label>
interface LabelProps extends BaseLabelProps, LabelVariantProps {}

const Label = React.forwardRef<LabelElement, LabelProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <label
        className={cn(labelVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Label.displayName = 'Label'

export { Label }
export type { LabelProps }
