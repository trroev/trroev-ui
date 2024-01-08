import { cva, VariantProps } from 'cva'

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    variants: {
      variant: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export { labelVariants }
export type LabelVariantProps = VariantProps<typeof labelVariants>
