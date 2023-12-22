import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from './button'

const argTypes = {
  variant: {
    control: {
      type: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
    },
    description: 'The variant of the button.',
  },
  size: {
    control: { type: 'select', options: ['default', 'sm', 'lg', 'icon'] },
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
  argTypes,
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'default',
    size: 'default',
    disabled: false,
  },
}
