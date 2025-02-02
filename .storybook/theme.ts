import { create } from '@storybook/theming'

const createTheme = create({
  appContentBg: 'oklch(100% 0 106.37)',
  base: 'dark',
  brandUrl: 'https://trevormathiak.dev',
  // brandImage: trroevLogo,
  brandTarget: '_blank',
  brandTitle: 'trroev UI',
  colorPrimary: 'oklch(14.45% 0 0)',
  colorSecondary: 'oklch(20.44% 0 0)',
})

export default createTheme
