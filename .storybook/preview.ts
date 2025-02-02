import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'

import '../src/styles/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: window.matchMedia('(prefers-color-scheme: dark)').matches
        ? themes.dark
        : themes.light,
    },
    themes: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
}

export default preview
