import { Button, Image } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import  order  from "./orderplaced.gif"

const OrderConfirm = () => {
  return (
      <div><Image src={order} w="100%" />
         <NavLink to="/"> <Button bg="#52c29d  " color={'white'} _hover={{ bg: "#4ade80    " }}>Continue Shopping</Button></NavLink>
      
      </div>
  )
}

export default OrderConfirm