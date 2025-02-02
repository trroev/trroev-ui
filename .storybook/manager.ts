import { addons } from '@storybook/manager-api'

import createTheme from './theme'

addons.setConfig({
  createTheme,
  initialActive: 'canvas',
  panelPosition: 'bottom',
})
