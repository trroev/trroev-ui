import { cva, VariantProps } from 'cva'

const inputVariants = cva(
  'flex bg-background h-10 w-full text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'rounded-md border px-3 py-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        underlined:
          'border-b px-1 py-2 focus-visible:border-b-2 focus-visible:border-ring',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export { inputVariants }
export type InputVariantProps = VariantProps<typeof inputVariants>
