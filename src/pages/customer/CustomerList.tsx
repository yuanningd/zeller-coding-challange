import React from 'react'
import { useSuspenseQuery } from '@apollo/client'
import Title from '../../components/cores/Title'
import { gql } from '../../__generated__'
import { UserType } from './CustomerPage'
import CustomerProfile from './CustomerProfile'

export const GET_CUSTOMERS = gql(/* GraphQL */ `
  query GetCustomers {
    listZellerCustomers {
      items {
        id
        name
        role
      }
    }
  }
`)

const CustomerList = ({ userType }: { userType: UserType }) => {
  const { data } = useSuspenseQuery(GET_CUSTOMERS)
  const filteredCustomers = data.listZellerCustomers?.items?.filter(
    (customer) => customer?.role === userType.toUpperCase(),
  )

  return (
    <>
      <Title tag="h2">{`${userType} Users`}</Title>
      <div role="list" aria-label={`${userType} list`}>
        {filteredCustomers?.map(
          (customer) =>
            customer && (
              <CustomerProfile key={customer.id} customer={customer} />
            ),
        )}
      </div>
    </>
  )
}

export default CustomerList
