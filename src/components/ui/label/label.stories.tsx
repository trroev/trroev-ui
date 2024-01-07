import { Meta } from '@storybook/react'

import { Label, LabelProps } from '.'
import { Input } from '../input'

const argTypes = {
  variant: {
    control: {
      type: 'select',
      options: ['default'],
    },
    description: 'The variant of the label.',
  },
  children: {
    control: 'text',
    name: 'text',
    description: 'The text of the label.',
  },
}

export default {
  title: 'UI/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes,
  decorators: [
    (Story) => (
      <div className="flex h-screen w-full items-center justify-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Label>

const defaultProps: LabelProps = {
  variant: 'default',
  children: 'Label Text',
}

const Template = (args: LabelProps) => <Label {...args}>{args.children}</Label>

const WithInputTemplate = (args: LabelProps) => (
  <div className="flex w-[350px] flex-col gap-1.5">
    <Label htmlFor="email" {...args} />
    <Input type="email" id="email" placeholder="jane.doe@email.com" />
  </div>
)

export const Default = {
  render: Template,

  args: { ...defaultProps },
}

export const WithInput = {
  render: WithInputTemplate,

  args: { ...defaultProps },
}
