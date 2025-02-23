import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        accordionOpen: 'accordionOpen 150ms cubic-bezier(0.87, 0, 0.13, 1)',
        accordionClose: 'accordionClose 150ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
      borderRadius: {
        small: '0.5rem',
        medium: '0.75rem',
        large: '0.875rem',
      },
      colors: {
        background: 'oklch(var(--background))',
        border: 'oklch(var(--border))',
        default: {
          DEFAULT: 'oklch(var(--default))',
          foreground: 'oklch(var(--default-foreground))',
        },
        destructive: {
          DEFAULT: 'oklch(var(--destructive))',
          foreground: 'oklch(var(--destructive-foreground))',
        },
        divider: 'oklch(var(--divider))',
        foreground: 'oklch(var(--foreground))',
        input: 'oklch(var(--input))',
        primary: {
          DEFAULT: 'oklch(var(--primary))',
          foreground: 'oklch(var(--primary-foreground))',
        },
        ring: 'oklch(var(--ring))',
        secondary: {
          DEFAULT: 'oklch(var(--secondary))',
          foreground: 'oklch(var(--secondary-foreground))',
        },
        success: {
          DEFAULT: 'oklch(var(--success))',
          foreground: 'oklch(var(--success-foreground))',
        },
        warning: {
          DEFAULT: 'oklch(var(--warning) / <alpha-value>)',
          foreground: 'oklch(var(--warning-foreground) / <alpha-value>)',
        },
      },
      fontFamily: {
        geist: ['var(--geist)', ...fontFamily.sans],
        inter: ['var(--inter)', ...fontFamily.sans],
      },
      keyframes: {
        accordionOpen: {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        accordionClose: {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: { height: '0px' },
        },
      },
    },
  },
  plugins: [],
}
export default config
