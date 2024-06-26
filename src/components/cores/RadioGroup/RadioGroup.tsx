import React, { ReactNode } from 'react'
import { RadioGroupContext } from './RadioGroupContext'
import { RadioGroupWrapper } from './RadioGroup.styles'

interface RadioGroupProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  buttonStyle?: 'outline' | 'solid'
  optionType?: 'default' | 'button'
  size?: 'large' | 'middle' | 'small'
  children: ReactNode
}

const RadioGroup = ({ value, onChange, children }: RadioGroupProps) => {
  return (
    <RadioGroupContext.Provider value={{ selectedValue: value, onChange }}>
      <RadioGroupWrapper>{children}</RadioGroupWrapper>
    </RadioGroupContext.Provider>
  )
}

export default RadioGroup
