import { ArgTypes, Meta } from '@storybook/react'

import { Input, type InputProps } from '.'
import { Label } from '..'

const argTypes: ArgTypes = {
  variant: {
    control: {
      type: 'select',
      options: ['default', 'underlined'],
    },
    description: 'The variant of the input.',
  },
  type: {
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

export default {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes,
  decorators: [
    (Story) => (
      <div className="flex h-full w-full items-center justify-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Input>

const defaultProps: InputProps = {
  type: 'text',
  placeholder: 'Start Typing...',
  disabled: false,
}

const Template = (args: InputProps) => <Input {...args} className="max-w-md" />

const WithLabelTemplate = (args: InputProps) => (
  <div className="flex w-full max-w-sm flex-col gap-1.5">
    <Label htmlFor="email">Email</Label>
    <Input {...args} type="email" id="email" placeholder="jane.doe@email.com" />
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
