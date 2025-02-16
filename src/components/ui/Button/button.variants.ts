import { type VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: [
    'z-10',
    'group',
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'box-border',
    'appearance-none',
    'outline-none',
    'select-none',
    'whitespace-nowrap',
    'min-w-max',
    'font-normal',
    'subpixel-antialiased',
    'overflow-hidden',
    'tap-highlight-transparent',
    'data-[pressed=true]:scale=[0.97]',
  ],
  variants: {
    variant: {
      solid: '',
      bordered: 'border-medium bg-transparent',
      light: 'bg-transparent',
      flat: '',
      faded: 'border-medium',
      shadow: '',
      ghost: 'border-medium bg-transparent',
    },
    size: {
      sm: 'px-3 min-w-16 h-8 text-tiny gap-2 rounded-small',
      md: 'px-4 min-w-20 h-10 text-small gap-2 rounded-medium',
      lg: 'px-6 min-w-24 h-12 text-medium gap-3 rounded-large',
    },
    color: {
      default: '',
      primary: '',
      secondary: '',
      success: '',
      warning: '',
      danger: '',
    },
    radius: {
      none: 'rounded-none',
      small: 'rounded-small',
      medium: 'rounded-medium',
      large: 'rounded-large',
      full: 'rounded-full',
    },
    fullWidth: {
      true: 'w-full',
    },
    isDisabled: {
      true: 'opacity-disabled pointer-events-none',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'solid',
    color: 'default',
    fullWidth: false,
    isDisabled: false,
  },
  compoundVariants: [],
})

export type ButtonVariantProps = VariantProps<typeof button>

export { button }
