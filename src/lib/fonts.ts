import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const geist = localFont({
  src: '../assets/fonts/GeistVariableVF.woff2',
  variable: '--geist',
})

export const inter = Inter({ subsets: ['latin'], variable: '--inter' })
