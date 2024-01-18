import * as React from 'react'
import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createContext<T>() {
  const context = React.createContext<T | undefined>(undefined)

  function useContext() {
    const ctx = React.useContext(context)
    if (!ctx) {
      throw new Error('useContext must be inside a Provider with a value')
    }
    return ctx
  }

  return [useContext, context.Provider] as const
}
