import { Meta, StoryObj } from '@storybook/react'

import { Textarea, type TextareaProps } from '.'

const textareaVariants = ['default']

const argTypes = {
  variant: {
    control: {
      type: 'select',
      options: textareaVariants,
    },
    description: 'The variant of the textarea.',
  },
  placeholder: {
    control: 'text',
    description: 'The placeholder of the textarea.',
  },
  disabled: {
    control: 'boolean',
    description: 'If true, the textarea will be disabled.',
  },
}

const meta: Meta<TextareaProps> = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes,
}

export default meta

type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {
    variant: 'default',
    placeholder: 'Start Typing...',
  },
}
