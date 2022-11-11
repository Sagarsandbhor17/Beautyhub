import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Dummynav = () => {
  const cart = useSelector((state) => state.cartreducer.carts)
  console.log(cart)
  return (
      <div>
          <Box boxShadow={'md'} w="100%" bg={'blueviolet'} h="5rem" color={'white'}>
        <NavLink to="/cart"><Heading>cart:{cart.length }</Heading></NavLink>
          </Box>
    </div>
  )
}

export default Dummynav