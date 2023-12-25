import { Meta, StoryObj } from '@storybook/react'

import { Input, type InputProps } from './input'

const inputVariants = ['default']

const argTypes = {
  variant: {
    control: {
      type: 'select',
      options: inputVariants,
    },
    description: 'The variant of the input.',
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
    placeholder: 'Default Input Placeholder',
    variant: 'default',
  },
}
