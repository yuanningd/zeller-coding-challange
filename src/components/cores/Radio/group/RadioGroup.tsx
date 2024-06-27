import React, { ReactNode } from 'react'
import { RadioGroupContext } from './RadioGroupContext'
import { RadioGroupContainer } from './RadioGroup.styles'

interface RadioGroupProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  'aria-labelledby'?: string
  disabled?: boolean
  buttonStyle?: 'outline' | 'solid'
  optionType?: 'default' | 'button'
  checkedBackgroundColor?: string
  size?: 'large' | 'middle' | 'small'
  children: ReactNode
}

const RadioGroup = ({
  value,
  onChange,
  checkedBackgroundColor,
  children,
}: RadioGroupProps) => {
  return (
    <RadioGroupContext.Provider
      value={{ selectedValue: value, onChange, checkedBackgroundColor }}
    >
      <RadioGroupContainer role="radiogroup">{children}</RadioGroupContainer>
    </RadioGroupContext.Provider>
  )
}

export default RadioGroup
