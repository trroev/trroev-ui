import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

const NODES = [
  'a',
  'button',
  'div',
  'h1',
  'h2',
  'h3',
  'img',
  'input',
  'label',
  'li',
  'nav',
  'ol',
  'p',
  'span',
  'svg',
  'ul',
] as const

type PropsWithoutRef<P> = P extends any
  ? 'ref' extends keyof P
    ? Pick<P, Exclude<keyof P, 'ref'>>
    : P
  : P
type ComponentPropsWithoutRef<T extends React.ElementType> = PropsWithoutRef<
  React.ComponentProps<T>
>

type BaseElements = {
  [E in (typeof NODES)[number]]: BaseForwardRefComponent<E>
}
type BasePropsWithRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E> & {
    asChild?: boolean
  }

interface BaseForwardRefComponent<E extends React.ElementType>
  extends React.ForwardRefExoticComponent<BasePropsWithRef<E>> {}

const Base = NODES.reduce((base, node) => {
  const Node = React.forwardRef(
    (props: BasePropsWithRef<typeof node>, forwardedRef: React.Ref<any>) => {
      const { asChild, ...baseProps } = props
      const Comp: any = asChild ? Slot : node

      React.useEffect(() => {
        ;(window as any)[Symbol.for('trroev-ui')] = true
      }, [])

      return <Comp {...baseProps} ref={forwardedRef} />
    }
  )

  Node.displayName = `Base.${node}`

  return { ...base, [node]: Node }
}, {} as BaseElements)

export { Base }
export type { BasePropsWithRef, ComponentPropsWithoutRef }
