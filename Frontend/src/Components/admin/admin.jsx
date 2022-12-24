import {  Box, Flex, Heading, Radio, RadioGroup, Select, Text} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import AdminFormDelete from './AdminFormDelete'
import AdminFormToAddProduct from './AdminFormToAddProduct'

const Admin = () => {
    // const options = ['Add Products', 'Delete Product']
    const [adminWork , setAdminWork] = useState('');
    console.log('adminWork:', adminWork);
    const handleChange = (e) => {
      const {  value } = e.target;
      setAdminWork(value);
      
    };
  return (
    <>
    <Box >
    <Flex  border='1px solid red' w={[ "100%" ,"70%" ,'50%']}p='30px' justifyContent='space-evenly' alignItems='center' margin='0 auto' borderRadius='20px' backgroundColor='#fff'>
      <Text>
        Select what you want to do:
      </Text>
      <Select placeholder='Select Type' name="product_type" onChange={handleChange}>
        <option value='add'>Add Products</option>
        <option value='delete'>Delete Product</option>
      </Select>
    </Flex>
    </Box>
        
        {
            adminWork == "delete" ? 
            <AdminFormDelete/>
            : <AdminFormToAddProduct/>
        }
    </>
  )
}

export default Admin

// 1. Create a component that consumes the `useRadio` hook
// function RadioCard(props) {
//     const { getInputProps, getCheckboxProps } = useRadio(props)
  
//     const input = getInputProps()
//     const checkbox = getCheckboxProps()
  
//     return (
//       <Box as='label'>
//         <input {...input} />
//         <Box
//           {...checkbox}
//           cursor='pointer'
//           borderWidth='1px'
//           borderRadius='md'
//           boxShadow='md'
//           _checked={{
//             bg: 'teal.600',
//             color: 'white',
//             borderColor: 'teal.600',
//           }}
//           _focus={{
//             boxShadow: 'outline',
//           }}
//           px={5}
//           py={3}
//         >
//           {props.children}
//         </Box>
//       </Box>
//     )
//   }
  
  // Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
//   function AdminRadioOptions({setAdminWork}) {
//     const options = ['Add Products', 'Delete Product']
  
//     const { getRootProps, getRadioProps } = useRadioGroup({
//       name: 'framework',
//       defaultValue: 'react',
//     })
  
//     const group = getRootProps()
//     return (
//       <HStack {...group}>
//         {options.map((value) => {
//           const radio = getRadioProps({ value })
//           return (
//             <RadioCard onchange={(e) => {
//                 setAdminWork(e.target.value)

//             }} key={value} {...radio}>
//               {value}
//             </RadioCard>
//           )
//         })}
//       </HStack>
//     )
//   }
  
  