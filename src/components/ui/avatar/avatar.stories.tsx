import { Meta } from '@storybook/react'

import { Avatar, AvatarFallback, AvatarImage, AvatarProps } from '.'

const argTypes = {
  radius: {
    control: {
      type: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    description: 'The border-radius of the avatar.',
  },
  size: {
    control: {
      type: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    description: 'The size of the avatar.',
  },
}

export default {
  title: 'UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes,
  decorators: [
    (Story) => (
      <div className="flex h-full w-full items-center justify-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Avatar>

const defaultProps: AvatarProps = {}

const Template = (args: AvatarProps) => (
  <Avatar {...defaultProps} {...args}>
    <AvatarImage src="https://github.com/trroev.png" alt="trroev" />
    <AvatarFallback>TM</AvatarFallback>
  </Avatar>
)

const FallbackTemplate = (args: AvatarProps) => (
  <Avatar {...defaultProps} {...args}>
    <AvatarImage src="https://broken.link.com/broken-pic.jpg" alt="broken" />
    <AvatarFallback>TM</AvatarFallback>
  </Avatar>
)

export const Default = {
  render: Template,

  args: { ...defaultProps },
}

export const WithBrokenImageFallback = {
  render: FallbackTemplate,

  args: { ...defaultProps },
}
