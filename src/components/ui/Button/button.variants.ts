import { type VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: [
    'z-0',
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
      sm: 'px-3 min-w-16 h-8 text-tiny gap-2',
      md: 'px-4 min-w-20 h-10 text-small gap-2',
      lg: 'px-6 min-w-24 h-12 text-medium gap-3',
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
      sm: 'rounded-small',
      md: 'rounded-medium',
      lg: 'rounded-large',
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
    radius: 'md',
  },
  compoundVariants: [
    // solid / color
    {
      variant: 'solid',
      color: 'default',
      className: 'bg-default text-default-foreground',
    },
    {
      variant: 'solid',
      color: 'primary',
      className: 'bg-primary text-primary-foreground',
    },
    {
      variant: 'solid',
      color: 'secondary',
      className: 'bg-secondary text-secondary-foreground',
    },
    {
      variant: 'solid',
      color: 'success',
      className: 'bg-success text-success-foreground',
    },
    {
      variant: 'solid',
      color: 'warning',
      className: 'bg-warning text-warning-foreground',
    },
    {
      variant: 'solid',
      color: 'danger',
      className: 'bg-destructive text-destructive-foreground',
    },
  ],
})

export type ButtonVariantProps = VariantProps<typeof button>

export { button }
