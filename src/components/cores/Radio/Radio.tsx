import React, { ChangeEvent, InputHTMLAttributes, useContext } from 'react'
import { RadioGroupContext } from './group/RadioGroupContext'
import { RadioWrapper, RadioInput } from './Radio.styles'

interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLDivElement>, 'onChange'> {
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
  const radioGroup = useContext(RadioGroupContext)
  const radioGroupExists = radioGroup.selectedValue !== null
  const isChecked = radioGroupExists
    ? radioGroup.selectedValue === value
    : checked

  const isControlled = isChecked !== undefined

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (radioGroupExists) {
      radioGroup.onChange(event)
    } else if (onChange) {
      onChange(event)
    }
  }

  return (
    <label>
      <RadioWrapper
        style={{
          backgroundColor:
            radioGroupExists && isChecked
              ? radioGroup.checkedBackgroundColor
              : 'transparent',
        }}
        {...rest}
      >
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
    </label>
  )
}

export default Radio
