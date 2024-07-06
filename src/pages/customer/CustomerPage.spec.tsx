import React from 'react'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { MockedProvider } from '@apollo/client/testing'
import CustomerPage from './CustomerPage'
import { GET_CUSTOMERS } from './CustomerList'
import { GetCustomersQuery } from '../../__generated__/graphql'

const mockSuccessfulValue: GetCustomersQuery = {
  listZellerCustomers: {
    items: [
      { id: '1', name: 'Admin User 1', role: 'ADMIN' },
      { id: '2', name: 'Admin User 2', role: 'ADMIN' },
      { id: '3', name: 'Manager User 1', role: 'MANAGER' },
      { id: '4', name: 'Manager User 2', role: 'MANAGER' },
    ],
  },
}
const mocks = [
  {
    request: {
      query: GET_CUSTOMERS,
      variables: {},
    },
    result: {
      data: mockSuccessfulValue,
    },
  },
]

describe('CustomerPage Component', () => {
  it('renders loading state', async () => {
    render(
      <MockedProvider mocks={[]}>
        <CustomerPage />
      </MockedProvider>,
    )

    expect(screen.getByText('Loading...')).toBeVisible()
  })

  it('renders error state', async () => {
    const errorMock = {
      request: {
        query: GET_CUSTOMERS,
      },
      error: new Error('An error occurred'),
    }

    render(
      <MockedProvider mocks={[errorMock]}>
        <CustomerPage />
      </MockedProvider>,
    )

    expect(await screen.findByText('Something went wrong')).toBeVisible()
  })

  it('renders and fetches Admin users by default', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <CustomerPage />
      </MockedProvider>,
    )

    expect(
      await screen.findByRole('listitem', { name: 'Admin User 1' }),
    ).toBeVisible()
    expect(screen.getByRole('listitem', { name: 'Admin User 2' })).toBeVisible()

    expect(
      screen.queryByRole('listitem', { name: 'Manager User 1' }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('listitem', { name: 'Manager User 2' }),
    ).not.toBeInTheDocument()
  })

  it('fetches and displays Manager users when selected', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <CustomerPage />
      </MockedProvider>,
    )

    user.click(screen.getByRole('radio', { name: 'Manager' }))

    expect(
      await screen.findByRole('listitem', { name: 'Manager User 1' }),
    ).toBeVisible()
    expect(
      screen.getByRole('listitem', { name: 'Manager User 2' }),
    ).toBeVisible()

    expect(
      screen.queryByRole('listitem', { name: 'Admin User 1' }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('listitem', { name: 'Admin User 2' }),
    ).not.toBeInTheDocument()
  })
})
