'use client'

import * as React from 'react'

import { cn, createContext } from '@/lib/utils'
import { Icon } from '@/components/icons'

import { Base } from '../base-elements'
import { CheckboxVariantProps, checkboxVariants } from './checkbox-variants'

type CheckedState = boolean | 'indeterminate'

type CheckboxContextType = {
  checked: CheckedState
  setChecked: React.Dispatch<React.SetStateAction<CheckedState>>
  size?: 'sm' | 'md' | 'lg' | null
}

const [useCheckboxContext, CheckboxProvider] =
  createContext<CheckboxContextType>()

type CheckboxElement = React.ElementRef<typeof Base.button>
type BaseCheckboxProps = Omit<
  React.ComponentPropsWithoutRef<typeof Base.button>,
  'defaultChecked'
>

interface CheckboxProps extends BaseCheckboxProps, CheckboxVariantProps {
  checked?: CheckedState
  defaultChecked?: CheckedState
  required?: boolean
  onCheckedChange?(checked: CheckedState): void
}

const Checkbox = React.forwardRef<CheckboxElement, CheckboxProps>(
  (
    {
      className,
      variant,
      size,
      radius,
      id,
      checked,
      defaultChecked,
      onCheckedChange,
      ...props
    },
    ref
  ) => {
    const [checkedState, setCheckedState] = React.useState<CheckedState>(
      defaultChecked || false
    )

    React.useEffect(() => {
      if (checked !== undefined) {
        setCheckedState(checked)
      }
    }, [checked])

    const toggleChecked = () => {
      const newCheckedState = !checkedState
      setCheckedState(newCheckedState)
      if (onCheckedChange) {
        onCheckedChange(newCheckedState)
      }
    }

    const contextValue = React.useMemo(
      () => ({
        checked: checkedState,
        setChecked: setCheckedState,
        size,
      }),
      [checkedState, setCheckedState, size]
    )

    return (
      <CheckboxProvider value={contextValue}>
        <Base.button
          role="checkbox"
          aria-checked={
            checkedState === 'indeterminate' ? 'mixed' : checkedState
          }
          data-state={getCheckedState(checkedState)}
          id={id}
          className={cn(checkboxVariants({ variant, size, radius, className }))}
          onClick={toggleChecked}
          ref={ref}
          {...props}
        >
          <CheckboxIndicator />
        </Base.button>
        <HiddenCheckboxInput checked={checkedState} />
      </CheckboxProvider>
    )
  }
)
Checkbox.displayName = 'Checkbox'

const CheckboxIndicator = () => {
  const { checked, size } = useCheckboxContext()
  const iconSize = getSizeClass(size)

  return (
    checked && (
      <Base.span
        data-state={getCheckedState(checked)}
        className="flex items-center justify-center text-current"
      >
        <Icon.check className={iconSize} />
      </Base.span>
    )
  )
}

interface HiddenCheckboxInputProps {
  checked: CheckedState
  size?: 'sm' | 'md' | 'lg' | null
}

const HiddenCheckboxInput = ({ checked, size }: HiddenCheckboxInputProps) => {
  const isChecked = checked === 'indeterminate' ? false : checked

  return (
    <Base.input
      type="checkbox"
      aria-hidden
      checked={isChecked}
      readOnly
      tabIndex={-1}
      className={cn(
        'absolute m-0 -translate-x-full p-0 opacity-0',
        getSizeClass(size)
      )}
    />
  )
}

const isIndeterminate = (
  checked?: CheckedState
): checked is 'indeterminate' => {
  return checked === 'indeterminate'
}

const getCheckedState = (checked: CheckedState): string => {
  if (isIndeterminate(checked)) return 'indeterminate'
  return checked ? 'checked' : 'unchecked'
}

const sizeClasses = {
  sm: 'h-3 w-3',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
}

const getSizeClass = (size: 'sm' | 'md' | 'lg' | null | undefined): string => {
  return size && size in sizeClasses ? sizeClasses[size] : 'h-4 w-4'
}

export { Checkbox }
export type { CheckboxProps }
