import React, { Suspense, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import CustomerFilter from './CustomerFilter'
import CustomerList from './CustomerList'
import Divider from '../../components/cores/Divider/Divider'
import BlankLayout from '../../components/layouts/BlankLayout'

export type UserType = 'Admin' | 'Manager'

const CustomerPage = () => {
  const [userType, setUserType] = useState<UserType>('Admin')

  return (
    <BlankLayout>
      <CustomerFilter userType={userType} onUserTypeChange={setUserType} />
      <Divider />
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<p>Loading...</p>}>
          <CustomerList userType={userType} />
        </Suspense>
      </ErrorBoundary>
    </BlankLayout>
  )
}

export default CustomerPage
