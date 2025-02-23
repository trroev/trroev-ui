import type { Meta, StoryObj } from '@storybook/react'
import { Button, type ButtonProps } from './button'

const meta: Meta<typeof Button> = {
  title: 'ui/Button',
  component: Button,
  args: {
    children: 'Button',
  } satisfies ButtonProps,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: [
        'solid',
        'bordered',
        'light',
        'flat',
        'faded',
        'shadow',
        'ghost',
      ],
    },
    color: {
      control: {
        type: 'select',
      },
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
      ],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
    radius: {
      control: {
        type: 'select',
      },
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
    isLoading: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}
