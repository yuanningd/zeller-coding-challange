import React from 'react'
import {
  Wrapper,
  Avatar,
  CustomerInfo,
  CustomerName,
  CustomerRole,
} from './CustomerProfile.styles'

interface Customer {
  name: string | null
  role: string | null
}

const CustomerProfile = ({ customer }: { customer: Partial<Customer> }) => (
  <Wrapper>
    <Avatar>{customer.name?.charAt(0)}</Avatar>
    <CustomerInfo>
      <CustomerName>{customer.name}</CustomerName>
      <CustomerRole>{customer.role}</CustomerRole>
    </CustomerInfo>
  </Wrapper>
)

export default CustomerProfile
