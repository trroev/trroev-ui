import { CheckboxProps } from '@radix-ui/react-checkbox'
import { Meta } from '@storybook/react'

import { Checkbox } from '.'
import { Label } from '../label'

const argTypes = {
  disabled: {
    control: 'boolean',
    description: 'If true, the checkbox will be disabled.',
  },
}

export default {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes,
  decorators: [
    (Story) => (
      <div className="flex min-h-20 w-full items-center justify-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Checkbox>

const defaultProps: CheckboxProps = {
  disabled: false,
}

const Template = (args: CheckboxProps) => {
  return <Checkbox {...defaultProps} {...args} aria-label="Default Checkbox" />
}

export const Default = {
  render: Template,

  args: { ...defaultProps },
}

export const WithLabel = () => (
  <div className="flex items-center space-x-2">
    <Checkbox id="terms" {...defaultProps} aria-label="Terms Checkbox" />
    <Label htmlFor="terms">Accept Terms and Conditions</Label>
  </div>
)
