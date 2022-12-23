import {  Flex, Heading, Radio, RadioGroup} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import AdminFormToAddProduct from './AdminFormToAddProduct'

const Admin = () => {
    const options = ['Add Products', 'Delete Product']
    const [adminWork , setAdminWork] = useState('');
    console.log('adminWork:', adminWork)
  return (
    <>
        <RadioGroup onChange={(e) => {setAdminWork(e.target.value)}} >
            <Flex>
                <Radio value='1'>First</Radio>
                <Radio value='2'>Second</Radio>
                <Radio value='3'>Third</Radio>
            </Flex>
        </RadioGroup>
        
        {
            false ? 
            <Heading>LIFE IS AWESOME...(ADmin)</Heading>
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
  
  