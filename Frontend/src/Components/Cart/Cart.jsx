import {
    Box,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { CartItem } from './CartItem'
  

 const cartData = [
    {
      id: '1',
      price: 39.99,
      currency: 'GBP',
      name: 'Lipstick',
      description: 'Tan, 40mm',
      quantity: 3,
      imageUrl:
        'https://s1.thcdn.com//productimg/70/70/13928053-1374989939211650.jpg',
    },
    {
        id: '1',
        price: 39.99,
        currency: 'GBP',
        name: 'Lipstick',
        description: 'Tan, 40mm',
        quantity: 3,
        imageUrl:
          'https://s1.thcdn.com//productimg/70/70/13928053-1374989939211650.jpg',
      },
      {
        id: '1',
        price: 39.99,
        currency: 'GBP',
        name: 'Lipstick',
        description: 'Tan, 40mm',
        quantity: 3,
        imageUrl:
          'https://s1.thcdn.com//productimg/70/70/13928053-1374989939211650.jpg',
      },
  ]
  
  export const Cart = () => (
    <Box
      maxW={{ base: '3xl', lg: '7xl' }}
      mx="auto"
      px={{ base: '4', md: '8', lg: '12' }}
      py={{ base: '6', md: '8', lg: '12' }}
    >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        align={{ lg: 'flex-start' }}
        spacing={{ base: '8', md: '16' }}
      >
        <Stack spacing={{ base: '8', md: '10' }} flex="2">
          <Heading fontSize="5xl" textAlign={'left'} fontWeight="bold">
            Your Cart
          </Heading>
          <hr />
          {/* <Flex gap={"20rem"}>
            <Text> Items</Text>
            <Text> Items</Text>
            <Text> Items</Text>
            <Text> Items</Text>
            <Text> Items</Text>
          </Flex> */}
  
          <Stack spacing="6">
            {cartData.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </Stack>
        </Stack>
  
        {/* <Flex direction="column" align="center" flex="1">
          <CartOrderSummary />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
          </HStack>
        </Flex> */}
      </Stack>
    </Box>
  )