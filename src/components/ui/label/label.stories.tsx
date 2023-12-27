import { Meta, StoryObj } from '@storybook/react'

import { Label, LabelProps } from '.'
import { Input } from '../input'

const labelVariants = ['defualt']

const argTypes = {
  variant: {
    control: {
      type: 'select',
      options: labelVariants,
    },
    description: 'The variant of the label.',
  },
  children: {
    control: 'text',
    name: 'text',
    description: 'The text of the label.',
  },
}

const meta: Meta<LabelProps> = {
  title: 'UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes,
}

export default meta

type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Label Text',
  },
}

export const WithInput: Story = {
  args: {
    variant: 'default',
    children: 'Label Text',
  },
  render: (args) => (
    <div className="flex w-full min-w-96 flex-col gap-1.5">
      <Label htmlFor="email" {...args} />
      <Input
        type="email"
        id="email"
        placeholder="trevor.mathiak@fusionary.com"
      />
    </div>
  ),
}
