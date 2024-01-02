import { Meta } from '@storybook/react'

import { Avatar, AvatarImage, AvatarProps } from '.'

const argTypes = {
  variant: {
    control: {
      type: 'select',
      options: ['default'],
    },
    description: 'The variant of the button.',
  },
  size: {
    control: {
      type: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    description: 'The size of the button.',
  },
  disabled: {
    control: 'boolean',
    description: 'If true, the button will be disabled.',
  },
}

export default {
  title: 'UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="flex h-full w-full items-center justify-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Avatar>

const defaultProps: AvatarProps = {}

const Template = (args: AvatarProps) => {
  return (
    <Avatar {...defaultProps} {...args}>
      <AvatarImage src="https://github.com/trroev.png" alt="trroev" />
    </Avatar>
  )
}

export const Default = {
  render: Template,

  args: { ...defaultProps },
}
