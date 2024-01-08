import { cva, VariantProps } from 'cva'

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

export type AvatarVariantProps = VariantProps<typeof avatarVariants>
export { avatarVariants }
