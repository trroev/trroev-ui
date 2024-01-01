import { Meta } from '@storybook/react'

import { Textarea, type TextareaProps } from '.'
import { Button, Label } from '..'

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

export default {
  title: 'UI/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes,
  decorators: [
    (Story) => (
      <div className="flex h-screen w-full items-center justify-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Textarea>

const defaultProps: TextareaProps = {
  variant: 'default',
  placeholder: 'Start Typing...',
}

const Template = (args: TextareaProps) => (
  <Textarea {...args} className="w-[350px]" />
)

const WithLabelTemplate = (args: TextareaProps) => (
  <div className="flex flex-col gap-1.5">
    <Label>Message</Label>
    <Textarea {...args} className="w-[350px]" />
    <Button type="submit">Submit</Button>
  </div>
)

export const Default = {
  render: Template,

  args: { ...defaultProps },
}

export const WithLabel = {
  render: WithLabelTemplate,

  args: { ...defaultProps },
}
