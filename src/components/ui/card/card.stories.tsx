import { Meta } from '@storybook/react'

import { Card, CardContent, CardProps } from '.'

const argTypes = {
  variant: {
    control: {
      type: 'select',
      options: ['default'],
    },
    description: 'The variant of the card.',
  },
  isBlurred: {
    control: 'boolean',
    description: 'If true, the card background will be blurred.',
  },
  radius: {
    control: {
      type: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    description: 'The radius of the card.',
  },
  shadow: {
    control: {
      type: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    description: 'The shadow of the card.',
  },
}

export default {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes,
  decorators: [
    (Story) => (
      <div className="flex h-screen w-full items-center justify-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Card>

const defaultProps: CardProps = {
  variant: 'default',
  isBlurred: false,
  radius: 'lg',
  shadow: 'sm',
}

const Template = (args: CardProps) => (
  <Card {...defaultProps} {...args} className="max-w-md">
    <CardContent className="p-3">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed</p>
    </CardContent>
  </Card>
)

export const Default = {
  render: Template,

  args: { ...defaultProps },
}
