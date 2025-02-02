import { type VariantProps, tv } from 'tailwind-variants'

const card = tv({
  slots: {
    root: [
      'flex',
      'flex-col',
      'relative',
      'overflow-hidden',
      'h-auto',
      'outline-none',
      'text-foreground',
      'box-border',
      'bg-white',
      'outline-none',
      'data-[focus-visible=true]:z-10',
      'data-[focus-visible=true]:outline-2',
      'data-[focus-visible=true]:outline-focus',
      'data-[focus-visible=true]:outline-offset-2',
    ],
    header: [
      'flex',
      'p-3',
      'z-10',
      'w-full',
      'justify-start',
      'items-center',
      'shrink-0',
      'overflow-inherit',
      'color-inherit',
      'subpixel-antialiased',
    ],
    body: [
      'relative',
      'flex',
      'flex-1',
      'w-full',
      'p-3',
      'flex-auto',
      'flex-col',
      'place-content-inherit',
      'align-items-inherit',
      'h-auto',
      'break-words',
      'text-left',
      'overflow-y-auto',
      'subpixel-antialiased',
    ],
    footer: [
      'p-3',
      'h-auto',
      'flex',
      'w-full',
      'items-center',
      'overflow-hidden',
      'color-inherit',
      'subpixel-antialiased',
    ],
  },
  variants: {
    shadow: {
      none: {
        root: 'shadow-none',
      },
      sm: {
        root: 'shadow-sm',
      },
      md: {
        root: 'shadow-md',
      },
      lg: {
        root: 'shadow-lg',
      },
    },
    radius: {
      none: {
        root: 'rounded-none',
        header: 'rounded-none',
        footer: 'rounded-none',
      },
      sm: {
        root: 'rounded-sm',
        header: 'rounded-t-sm',
        footer: 'rounded-b-sm',
      },
      md: {
        root: 'rounded-md',
        header: 'rounded-t-md',
        footer: 'rounded-b-md',
      },
      lg: {
        root: 'rounded-lg',
        header: 'rounded-t-lg',
        footer: 'rounded-b-lg',
      },
    },
    fullWidth: {
      true: {
        root: 'w-full',
      },
    },
    isHoverable: {
      true: {
        root: 'data-[hover=true]:bg-zinc-100 dark:data-[hover=true]:bg-zinc-100',
      },
    },
    isPressable: {
      true: {
        root: 'cursor-pointer',
      },
    },
    isBlurred: {
      true: {
        root: [
          'bg-background/80',
          'dark:bg-background/20',
          'backdrop-blur-md',
          'backdrop-saturate-150',
        ],
      },
    },
    isFooterBlurred: {
      true: {
        footer: ['bg-background/10', 'backdrop-blur', 'backdrop-saturate-150'],
      },
    },
    isDisabled: {
      true: {
        root: 'opacity-disabled cursor-not-allowed',
      },
    },
  },
  compoundVariants: [
    {
      isPressable: true,
      class: 'data-[pressed=true]:scale-[0.97] tap-highlight-transparent',
    },
  ],
  defaultVariants: {
    radius: 'lg',
    shadow: 'md',
    fullWidth: false,
    isHoverable: false,
    isPressable: false,
    isBlurred: false,
    isFooterBlurred: false,
    isDisabled: false,
  },
})

type CardVariantProps = VariantProps<typeof card>
type CardSlots = keyof ReturnType<typeof card>
type CardReturnType = ReturnType<typeof card>

export { card }
export type { CardVariantProps, CardSlots, CardReturnType }
