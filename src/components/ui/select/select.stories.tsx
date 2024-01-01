import { ArgTypes, Meta } from '@storybook/react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '.'

export default {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="flex h-screen w-full items-center justify-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Select>

const Template = () => (
  <Select>
    <SelectTrigger className="w-[350px]">
      <SelectValue placeholder="Choose a Fish" />
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

export const Default = {
  render: Template,
}
