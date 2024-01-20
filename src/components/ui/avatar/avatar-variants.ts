import { cva, VariantProps } from 'cva'

import {
  gradientsAutumn,
  gradientsSpring,
  gradientsSummer,
  gradientsWinter,
} from '@/styles/gradients'

const gradientWinter =
  gradientsWinter[Math.floor(Math.random() * gradientsWinter.length)]
const gradientSpring =
  gradientsSpring[Math.floor(Math.random() * gradientsSpring.length)]
const gradientSummer =
  gradientsSummer[Math.floor(Math.random() * gradientsSummer.length)]
const gradientAutumn =
  gradientsAutumn[Math.floor(Math.random() * gradientsAutumn.length)]

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

const avatarFallbackVariants = cva(
  'flex h-full w-full items-center justify-center bg-muted',
  {
    variants: {
      gradient: {
        winter: gradientWinter,
        spring: gradientSpring,
        summer: gradientSummer,
        autumn: gradientAutumn,
      },
    },
    defaultVariants: {},
  }
)

export { avatarVariants, avatarFallbackVariants }
export type AvatarVariantProps = VariantProps<typeof avatarVariants>
export type AvatarFallbackVariantProps = VariantProps<
  typeof avatarFallbackVariants
>
