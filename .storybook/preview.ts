import type { Preview } from '@storybook/react'

import '../src/styles/globals.css'

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        includeName: true,
        method: 'alphabetical',
      },
    },
    backgrounds: { disable: true },
  },
}
