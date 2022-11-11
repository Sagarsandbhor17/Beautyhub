import { Heading, Table, TableCaption, TableContainer, Tbody, Td, Text, Tr } from '@chakra-ui/react'
import React from 'react'

const Descriptionsec = ({description,product_ingredients}) => {
  return (
      <div>
          <Heading fontSize={'xl'} fontWeight="medium" textAlign={'left'}><ul>Descriptions:</ul></Heading>
      <Text textAlign="left" >{ description}</Text>
          <hr></hr>
          <br/>
          <Heading fontSize={'xl'} fontWeight="medium" textAlign={'left'}><ul>Product Details:</ul></Heading>
          <TableContainer>
    <Table variant='striped' bg='#f8f8f8' color={'black'}  >
     
    
      <Tbody>
        <Tr>
          <Td>Ingredients:</Td>
              <Td>{ product_ingredients}</Td>
         
        </Tr>
        <Tr>
          <Td>Brand:</Td>
          <Td>Neocutis</Td>
         
        </Tr>
        <Tr>
          <Td>Volume:</Td>
          <Td>15ml</Td>
        
                      </Tr>
                      <Tr>
          <Td>Directions:</Td>
          <Td>Apply in the morning and evening  as directed by your skincare professional.</Td>
        
        </Tr>
      </Tbody>
    
    </Table>
  </TableContainer></div>
  )
}

export default Descriptionsec