import { ChangeEvent, createContext } from 'react'

interface RadioGroupContextValue {
  selectedValue: string | null
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const RadioGroupContext = createContext<RadioGroupContextValue>({
  selectedValue: null,
  onChange: () => {},
})
