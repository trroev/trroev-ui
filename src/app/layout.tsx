import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { geist, inter } from '@/lib/fonts'
import { cn } from '@/lib/utils'

import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'trroev UI',
  description: 'Another UI Library',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-inter text-foreground antialiased',
          geist.variable,
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
