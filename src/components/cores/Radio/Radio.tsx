import React, { ChangeEvent, InputHTMLAttributes, useContext } from 'react'
import { RadioGroupContext } from '../RadioGroup/RadioGroupContext'
import { RadioWrapper, RadioInput } from './Radio.styles'

interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLLabelElement>, 'onChange'> {
  value?: string
  defaultChecked?: boolean
  disabled?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  checked?: boolean
}

const Radio = ({
  value,
  defaultChecked,
  onChange,
  disabled,
  children,
  name,
  checked,
  ...rest
}: RadioProps) => {
  const context = useContext(RadioGroupContext)
  const radioGroupExists = context.selectedValue !== null
  const isChecked = radioGroupExists ? context.selectedValue === value : checked

  const isControlled = isChecked !== undefined

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (radioGroupExists) {
      context.onChange(event)
    } else if (onChange) {
      onChange(event)
    }
  }

  return (
    <RadioWrapper checked={isChecked} {...rest}>
      <RadioInput
        type="radio"
        value={value}
        name={name}
        checked={isControlled ? isChecked : undefined}
        defaultChecked={isControlled ? undefined : defaultChecked}
        onChange={handleChange}
        disabled={disabled}
      />
      {children}
    </RadioWrapper>
  )
}

export default Radio
