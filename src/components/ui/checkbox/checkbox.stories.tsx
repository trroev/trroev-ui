import { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '.'
import { Label } from '../label'

const argTypes = {
  checked: {
    control: 'boolean',
    description: 'If true, the checkbox will be checked.',
  },
  disabled: {
    control: 'boolean',
    description: 'If true, the checkbox will be disabled.',
  },
}

const meta: Meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes,
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {}

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" {...args} />
      <Label htmlFor="terms">Accept Terms and Conditions</Label>
    </div>
  ),
}
