import { ChangeEvent, createContext } from 'react'

interface RadioGroupContextValue {
  selectedValue: string | null
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  checkedBackgroundColor?: string
}

export const RadioGroupContext = createContext<RadioGroupContextValue>({
  selectedValue: null,
  onChange: () => {},
})
