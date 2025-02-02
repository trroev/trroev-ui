import type { Meta, StoryObj } from '@storybook/react'
import { Badge, type BadgeProps } from './badge'
import { badge } from './badge.variants'

const meta: Meta<typeof Badge> = {
  title: 'ui/Badge',
  component: Badge,
  args: {
    children: 'Badge',
  } satisfies BadgeProps,
  argTypes: {
    variant: {
      control: 'radio',
      options: [...Object.keys(badge.variants.variant)],
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="neutral">Neutral</Badge>
      <Badge>Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="warning">Warning</Badge>
    </div>
  ),
}

export const CustomisedBadge: Story = {
  render: () => (
    <div className="flex items-center justify-between gap-8 rounded-md bg-blue-50 py-2.5 pr-4 pl-2.5 text-sm dark:bg-blue-900/50">
      <div className="flex items-center gap-2 truncate">
        <Badge className="rounded-full bg-blue-800 text-white ring-none dark:bg-blue-500 dark:text-white dark:ring-none">
          Export Request
        </Badge>
        <span className="truncate text-blue-800 dark:text-blue-400">
          Your export is ready for download:{' '}
          <span className="font-semibold">263 transactions</span>
        </span>
      </div>
      <button
        className="font-semibold text-blue-800 dark:text-blue-400"
        type="button"
      >
        Download
      </button>
    </div>
  ),
}
