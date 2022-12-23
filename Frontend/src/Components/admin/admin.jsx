import { Heading } from '@chakra-ui/react'
import React from 'react'
import AdminFormToAddProduct from './AdminFormToAddProduct'

const Admin = () => {
  return (
    <>
        {
            false ? 
            <Heading>LIFE IS AWESOME...(ADmin)</Heading>
            : <AdminFormToAddProduct/>
        }
    </>
  )
}

export default Admin