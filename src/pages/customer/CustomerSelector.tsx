import React, { ChangeEvent } from 'react'
import RadioGroup from '../../components/cores/RadioGroup'
import Radio from '../../components/cores/Radio'
import Title from '../../components/cores/Title'
import { UserType } from './CustomerPage'

interface CustomerFilterProps {
  userType: UserType
  onUserTypeChange: (value: UserType) => void
}

const CustomerSelector = ({
  userType,
  onUserTypeChange,
}: CustomerFilterProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onUserTypeChange(event.target.value as UserType)
  }

  return (
    <>
      <Title tag="h2">User Types</Title>
      <RadioGroup
        value={userType}
        onChange={handleChange}
        aria-labelledby="userTypeSelect"
      >
        <Radio value="Admin">Admin</Radio>
        <Radio value="Manager">Manager</Radio>
      </RadioGroup>
    </>
  )
}

export default CustomerSelector
