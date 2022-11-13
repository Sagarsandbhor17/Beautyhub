import React, { useState } from 'react';
import { Heading } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Flex,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { log } from 'console';

const AdminForm = () => { 
  const initialStateProduct = {
    product_detail_link:"",
    product_image:"",
    productName:"",
    product_tag:"",
    product_tag_text:"",
    star_rating:"",
    product_reviews:"",
    product_price:"",
    description:"",
    product_ingredients:"",
    product_type:"",
    product_subtype:"",
    item_logo:""
  }
  const [product , setProduct] = useState(initialStateProduct);
  const handleChange = (e) => {
    const {name , value} = e.target ;
    setProduct((prev) => ({ ...prev, [name]: value }));
    // const handleChange = (e) => {
    //   let { name, value } = e.target;
    //   setForm();
    // };
    console.log("product: " ,product);
  };
  // console.log()

    return(
        <>
        <Box 
        width="80vw"
        border="2px solid"
        margin="0 auto" 
        padding="20px"
        >
          <FormControl>
            <Flex>
              <FormLabel>Product Name</FormLabel>
              <Input type='text' name="productName" onChange={handleChange} />
            </Flex>
          </FormControl>
        </Box>
        </>
    )
};


export default AdminForm;