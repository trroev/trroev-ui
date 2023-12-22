import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from './button'

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
