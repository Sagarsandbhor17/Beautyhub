import { Button, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import  order  from "./orderplaced.gif"

const OrderConfirm = () => {
  return (
      <div><Image src={order} w="100%" />
       <Link to="/"><Button bg="#52c29d  " color={'white'} _hover={{ bg: "#4ade80    " }}>Continue Shopping</Button></Link>
      
      </div>
  )
}

export default OrderConfirm