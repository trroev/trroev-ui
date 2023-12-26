import { Meta, StoryObj } from '@storybook/react'

import { Input, type InputProps } from './input'

const inputVariants = ['default']

const inputTypes = [
  'email',
  'password',
  'number',
  'search',
  'tel',
  'text',
  'url',
]

const argTypes = {
  variant: {
    control: {
      type: 'select',
      options: inputVariants,
    },
    description: 'The variant of the input.',
  },
  type: {
    control: {
      type: 'select',
      options: inputTypes,
    },
    description: 'The type of the input.',
  },
  placeholder: {
    control: 'text',
    description: 'The placeholder of the input.',
  },

  disabled: {
    control: 'boolean',
    description: 'If true, the input will be disabled.',
  },
}

const meta: Meta<InputProps> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes,
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    variant: 'default',
    placeholder: 'Start Typing...',
  },
}