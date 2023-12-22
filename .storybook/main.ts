import path from 'path'
import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-onboarding',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    config.resolve = config.resolve ?? {}
    config.resolve.alias = config.resolve.alias ?? {}
    // Alias '@' to point to the 'src' directory
    config.resolve.alias['@'] = path.resolve(__dirname, '../src/')

    // Important: return the modified config
    return config
  },
}
export default config
