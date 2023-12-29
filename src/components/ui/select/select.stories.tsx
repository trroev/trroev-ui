import { ArgTypes, Meta, StoryObj } from '@storybook/react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '.'

const argTypes: ArgTypes = {
  placeholder: {
    control: {
      type: 'text',
      defaultValue: 'The Choice is Yours...',
    },
    description: 'The placeholder for the select element.',
  },
}

const meta: Meta = {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes,
}

export default meta

type Story = StoryObj<typeof Select>

export const Default: Story = {}

export const Basic = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="The Choice is Yours..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fish</SelectLabel>
          <SelectItem value="cod">Cod</SelectItem>
          <SelectItem value="haddock">Haddock</SelectItem>
          <SelectItem value="mackerel">Mackerel</SelectItem>
          <SelectItem value="tuna">Tuna</SelectItem>
          <SelectItem value="salmon">Salmon</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
