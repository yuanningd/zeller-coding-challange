import React from 'react'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import Radio from './index'

describe('<Radio />', () => {
  it('calls onChange when clicked', () => {
    const handleChange = jest.fn()
    render(
      <Radio value="test" onChange={handleChange}>
        test
      </Radio>,
    )
    const radioElement = screen.getByRole('radio', { name: 'test' })
    user.click(radioElement)

    expect(radioElement).toBeChecked()
    expect(handleChange).toHaveBeenCalled()
  })

  it('works as an uncontrolled component', () => {
    render(
      <>
        <Radio value="option1" defaultChecked name="group">
          option1
        </Radio>
        <Radio value="option2" name="group">
          option2
        </Radio>
      </>,
    )

    const radioElement1 = screen.getByRole('radio', { name: 'option1' })
    const radioElement2 = screen.getByRole('radio', { name: 'option2' })

    expect(radioElement1).toBeChecked()
    expect(radioElement2).not.toBeChecked()

    user.click(radioElement2)
    expect(radioElement2).toBeChecked()
    expect(radioElement1).not.toBeChecked()
  })
})
