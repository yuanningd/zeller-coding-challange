import React from 'react'
import {
  Container,
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
  <Container role="listitem" aria-label={customer.name ? customer.name : ''}>
    <Avatar>{customer.name?.charAt(0)}</Avatar>
    <CustomerInfo>
      <CustomerName>{customer.name}</CustomerName>
      <CustomerRole>{customer.role}</CustomerRole>
    </CustomerInfo>
  </Container>
)

export default CustomerProfile
