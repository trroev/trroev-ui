import type { Metadata } from 'next'

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
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'bg-background text-foreground font-inter min-h-screen antialiased',
          geist.variable,
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
