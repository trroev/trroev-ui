import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import { Button, type ButtonProps } from './'

const buttonVariants = [
  'default',
  'destructive',
  'outline',
  'secondary',
  'ghost',
  'link',
]
const buttonSizes = ['default', 'sm', 'lg', 'icon']

const argTypes = {
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

const meta: Meta<ButtonProps> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: action('onClick'),
    size: 'default',
    disabled: false,
  },
  argTypes,
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'default',
  },
}

export const Destructive: Story = {
  args: {
    children: 'Destructive Button',
    variant: 'destructive',
  },
}
export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
}
export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
  },
}
export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
}
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
}

export const AllVariantsAndSizes = () => (
  <div className="flex flex-col gap-3">
    {buttonVariants.map((variant) => (
      <div key={variant} className="flex gap-3">
        {buttonSizes.map((size) => (
          <Button
            key={`${variant}-${size}`}
            variant={
              variant as
                | 'default'
                | 'destructive'
                | 'outline'
                | 'secondary'
                | 'ghost'
                | 'link'
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
)
