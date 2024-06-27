import React from 'react'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'

import RadioGroup from './RadioGroup'
import Radio from '../Radio'

describe('<RadioGroup />', () => {
  it('checks the correct radio button', () => {
    render(
      <RadioGroup aria-labelledby="option list" value="2" onChange={() => {}}>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup>,
    )
    const option1 = screen.getByRole('radio', { name: 'Option 1' })
    const option2 = screen.getByRole('radio', { name: 'Option 2' })

    expect(option2).toBeChecked()
    expect(option1).not.toBeChecked()
  })

  it('calls onChange when a radio button is clicked', () => {
    const handleChange = jest.fn()
    render(
      <RadioGroup
        value="1"
        aria-labelledby="option list"
        onChange={handleChange}
      >
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup>,
    )

    const option2 = screen.getByRole('radio', { name: 'Option 2' })
    user.click(option2)

    expect(handleChange).toHaveBeenCalled()

    // Get the first call's first argument (the event object)
    const event = handleChange.mock.calls[0][0]
    expect(event.target.value).toBe('2')
  })
})
