import { Box, Heading, Select , Center, Table,Thead,Tbody,Tr,Th,Td,TableContainer, Text, Image, Flex } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons';
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';

const AdminFormDelete = () => {
  const [productName, setProductName] = useState("");
  const [product , setProduct] = useState([]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductName(value);
      };
      console.log('product:', product);
      const getProduct = async ()=> {
          const response = await axios.get(
              `https://fit-society.onrender.com/products/${productName}`,
            );
            setProduct(response.data)

      }
      useEffect( () => {
        getProduct()
      },[productName]);
      const handleDelete = async(id) => {
        console.log('id:', id)
        const response = await axios.delete(
            `https://fit-society.onrender.com/products/${productName}/${id}`,
          );
          console.log('response:', response);
          getProduct();
      }
  return (
    <Box >
      <Box p='20px' >
        <Flex  backgroundImage='https://img.freepik.com/free-photo/teal-smooth-textured-paper-background_53876-103925.jpg?w=2000' border='1px solid red' w={[ "100%" ,"70%" ,'50%']}p='30px' justifyContent='space-evenly' alignItems='center' margin='0 auto' borderRadius='20px'>
          <Heading size='md' fontWeight='500' w='60%'>Please select the procducts you want to see:</Heading>
          <Select backgroundColor="#fff" placeholder='All products' name="product_type"  onChange={handleChange} w='30%'>
              <option value='skincare'>Skin Care</option>
              <option value='hairs'>Hairs</option>
              <option value='bath&body'>Bath & Body</option>
              <option value='fragrance'>Fragrance</option>
          </Select>
        </Flex>
      </Box>
      <Box
    //    backgroundImage='https://img.freepik.com/premium-vector/blackboard-background-design_87498-1211.jpg?w=740' 
       backgroundRepeat='no-repeat' 
       backgroundSize='cover'
        w='100vw' 
    >
        <Box>
            {/* <Flex >
            </Flex> */}
                    
            <TableContainer backgroundColor='#fff' w='98vw' m='0 auto'border='2px solid'>
        <Center>
            <Heading size='xl' fontWeight='400'>
                {/* LIFE IS AESOME...() */}
                List of Products
            </Heading>
        </Center>
                <Table  colorScheme='teal' size='sm'  m='0 auto' border='2px solid #fff' borderRadius='20px'>
                    <Thead>
                        <Tr>
                            <Th color='Black' textAlign='center' fontSize='20px' p='10px 0' fontWeight='400' >Price </Th>
                            <Th color='Black' textAlign='center' fontSize='20px' p='10px 0' fontWeight='400' className='tableEmail' >Image</Th>
                            <Th color='Black' textAlign='center' fontSize='20px' p='10px 0' fontWeight='400' >Name</Th>
                            <Th color='Black' textAlign='center' fontSize='20px' p='10px 0' fontWeight='400' >Type</Th>
                            <Th color='Black' textAlign='center' fontSize='20px' p='10px 0' fontWeight='400' >Sub-Type</Th>
                            <Th color='Black' textAlign='center' fontSize='20px' p='10px 0' fontWeight='400' >Delete Product</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                        //  data.length == 0 ? <Heading color='#fff' textAlign='center' fontWeight='400'>No users Yet </Heading>:
                            product.map(list => (
                                <Tr className='tableRow'>
                                    <Td textAlign='center' > ${list.product_price} </Td>
                                    <Td textAlign='center' > 
                                      <Image src={list.product_image} w='100px'/>
                                    </Td>
                                    <Td textAlign='center' w='10%'> {list.productName} </Td>
                                    <Td textAlign='center'> {list.product_type} </Td>
                                    <Td textAlign='center'> {list.product_subtype} </Td>
                                    <Td  textAlign='center' > {<DeleteIcon className='deleteIcone' cursor='pointer' onClick={ () =>  handleDelete(list._id)} />} </Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    </Box>
    
    </Box>
  )
}

export default AdminFormDelete