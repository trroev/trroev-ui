import { Meta } from '@storybook/react'

import { Badge, BadgeProps } from '.'

const argTypes = {
  variant: {
    control: {
      type: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
    description: 'The variant of the badge.',
  },
  radius: {
    control: {
      type: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    description: 'The border-radius of the badge.',
  },
}

export default {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes,
  decorators: [
    (Story) => (
      <div className="flex h-full w-full items-center justify-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Badge>

const defaultProps: BadgeProps = {}

const Template = (args: BadgeProps) => (
  <Badge {...defaultProps} {...args}>
    Badge
  </Badge>
)

const AllVariantsAndRadiiTemplate = (args: BadgeProps) => (
  <div className="flex h-full w-full items-center justify-center">
    <div className="flex flex-col gap-3">
      {['default', 'secondary', 'destructive', 'outline'].map((variant) => (
        <div key={variant} className="flex gap-3">
          {['none', 'sm', 'md', 'lg', 'full'].map((radius) => (
            <Badge
              key={radius}
              {...defaultProps}
              {...args}
              variant={
                variant as 'default' | 'destructive' | 'secondary' | 'outline'
              }
              radius={radius as 'none' | 'sm' | 'md' | 'lg' | 'full'}
            >
              Badge
            </Badge>
          ))}
        </div>
      ))}
    </div>
  </div>
)

export const Default = {
  render: Template,

  args: {
    ...defaultProps,
    children: 'Badge',
    variant: 'default',
  },
}

export const Secondary = {
  render: Template,

  args: {
    ...defaultProps,
    children: 'Badge',
    variant: 'secondary',
  },
}

export const Destructive = {
  render: Template,

  args: {
    ...defaultProps,
    children: 'Badge',
    variant: 'destructive',
  },
}

export const Outline = {
  render: Template,

  args: {
    ...defaultProps,
    children: 'Badge',
    variant: 'outline',
  },
}

export const AllVariantsAndRadii = {
  render: AllVariantsAndRadiiTemplate,

  args: {
    ...defaultProps,
    children: 'All Variants and Sizes',
  },
}
