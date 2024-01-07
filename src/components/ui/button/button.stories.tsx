import { action } from '@storybook/addon-actions'
import type { ArgTypes, Meta } from '@storybook/react'

import { Button, type ButtonProps } from '.'

const buttonVariants = [
  'default',
  'warning',
  'ghost',
  'link',
  'outline',
  'secondary',
]
const buttonSizes = ['icon', 'sm', 'default', 'lg']

const argTypes: ArgTypes = {
  variant: {
    control: {
      type: 'select',
      options: buttonVariants,
    },
    description: 'The variant of the button.',
  },
  size: {
    control: { type: 'select', options: buttonSizes },
    description: 'The size of the button.',
  },
  disabled: {
    control: 'boolean',
    description: 'If true, the button will be disabled.',
  },
}

export default {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes,
  decorators: [
    (Story) => (
      <div className="flex h-full w-full items-center justify-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Button>

const defaultProps: ButtonProps = {
  onClick: action('onClick'),
  size: 'default',
  disabled: false,
}

const Template = (args: ButtonProps) => {
  return <Button {...defaultProps} {...args} />
}

const AllVariantsAndSizesTemplate = (args: ButtonProps) => (
  <div className="flex h-full w-full items-center justify-center">
    <div className="flex flex-col gap-3">
      {buttonVariants.map((variant) => (
        <div key={variant} className="flex gap-3">
          {buttonSizes.map((size) => (
            <Button
              {...args}
              key={`${variant}-${size}`}
              variant={
                variant as
                  | 'default'
                  | 'warning'
                  | 'ghost'
                  | 'link'
                  | 'outline'
                  | 'secondary'
              }
              size={size as 'default' | 'sm' | 'lg' | 'icon'}
              onClick={action(`${variant}-${size} clicked`)}
            >
              {size === 'icon' ? 'X' : `${variant} ${size}`}
            </Button>
          ))}
        </div>
      ))}
    </div>
  </div>
)

export const Default = {
  render: Template,

  args: {
    ...defaultProps,
    children: 'Default Button',
    variant: 'default',
  },
}

export const warning = {
  render: Template,

  args: {
    ...defaultProps,
    children: 'Warning Button',
    variant: 'warning',
  },
}

export const Ghost = {
  render: Template,

  args: {
    ...defaultProps,
    children: 'Ghost Button',
    variant: 'ghost',
  },
}

export const Link = {
  render: Template,

  args: {
    ...defaultProps,
    children: 'Link Button',
    variant: 'link',
  },
}

export const Outline = {
  render: Template,

  args: {
    ...defaultProps,
    children: 'Outline Button',
    variant: 'outline',
  },
}

export const Secondary = {
  render: Template,

  args: {
    ...defaultProps,
    children: 'Secondary Button',
    variant: 'secondary',
  },
}

export const AllVariantsAndSizes = {
  render: AllVariantsAndSizesTemplate,

  args: {
    ...defaultProps,
    children: 'All Variants and Sizes',
  },
}
