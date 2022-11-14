import React, { useState } from "react";
import { Button, Heading, useToast } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Flex,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
// import { log } from 'console';
import axios from "axios";
import { Link } from "react-router-dom";
const AdminForm = () => {
  const toast = useToast();

  const initialStateProduct = {
    product_detail_link: "",
    product_image: "",
    productName: "",
    product_tag: "",
    product_tag_text: "",
    star_rating: "",
    product_reviews: "",
    product_price: "",
    description: "",
    product_ingredients: "",
    product_type: "",
    product_subtype: "",
    item_logo: "",
  };
  const [product, setProduct] = useState(initialStateProduct);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
    // const handleChange = (e) => {
    //   let { name, value } = e.target;
    //   setForm();
    // };
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post(
      "https://backend-beautyhub-production.up.railway.app/products",
      {
        product,
      }
    );
    console.log("product: ", product);
    toast({
      title: "Product Added !",
      position: "top",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setProduct("");
    e.target.reset();
  };

  return (
    <>
      <Box
        // backgroundImage='https://techcrunch.com/wp-content/uploads/2014/04/shutterstock_137342978.jpg'
        width="100vw"
        height="100vh"
        paddingTop="50px"
        // backgroundColor = "#fff"
        // boxShadow= "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
        // backdropFilter= "blur( 13.5px )"
        // webkitBackdropfilter= "blur( 13.5px )"
        // borderRadius=" 10px"
        // border=  "1px solid rgba( 255, 255, 255, 0.18 )"
      >
        <Box
          width="80vw"
          border="2px solid"
          margin="0 auto"
          padding="20px"
          borderRadius=" 10px"
        >
          <Heading>Welcome Admin</Heading>
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <FormControl>
              <Flex marginTop=".5rem">
                <FormLabel width="30vw">Product Name</FormLabel>
                <Input
                  borderBottom={"1px"}
                  required
                  type="text"
                  name="productName"
                  onChange={handleChange}
                />
              </Flex>
              <Flex marginTop=".5rem">
                <FormLabel width="30vw">Product Image </FormLabel>
                <Input
                  borderBottom={"1px"}
                  required
                  type="text"
                  name="product_image"
                  onChange={handleChange}
                />
              </Flex>
              <Flex marginTop=".5rem">
                <FormLabel width="30vw">Product Tag </FormLabel>
                <Input
                  borderBottom={"1px"}
                  required
                  type="text"
                  name="product_tag"
                  onChange={handleChange}
                />
              </Flex>
              <Flex marginTop=".5rem">
                <FormLabel width="30vw">Product Tag Description</FormLabel>
                <Input
                  borderBottom={"1px"}
                  required
                  type="text"
                  name="product_tag_text"
                  onChange={handleChange}
                />
              </Flex>
              <Flex marginTop=".5rem">
                <FormLabel width="30vw">Product Tag Description</FormLabel>
                <Input
                  borderBottom={"1px"}
                  required
                  type="text"
                  name="product_tag_text"
                  onChange={handleChange}
                />
              </Flex>
              <Flex marginTop=".5rem">
                <FormLabel width="30vw">Star Rating</FormLabel>
                <Input
                  borderBottom={"1px"}
                  required
                  type="text"
                  name="star_rating"
                  onChange={handleChange}
                />
              </Flex>
              <Flex marginTop=".5rem">
                <FormLabel width="30vw">Product Review</FormLabel>
                <Input
                  borderBottom={"1px"}
                  required
                  type="text"
                  name="product_reviews"
                  onChange={handleChange}
                />
              </Flex>
              <Flex marginTop=".5rem">
                <FormLabel width="30vw">Description</FormLabel>
                <Input
                  borderBottom={"1px"}
                  required
                  type="text"
                  name="description"
                  onChange={handleChange}
                />
              </Flex>
              <Flex marginTop=".5rem">
                <FormLabel width="30vw">Type of product</FormLabel>
                <Input
                  borderBottom={"1px"}
                  required
                  type="text"
                  name="product_type"
                  onChange={handleChange}
                />
              </Flex>
              <Flex marginTop=".5rem">
                <FormLabel width="30vw">Sub type of product</FormLabel>
                <Input
                  borderBottom={"1px"}
                  required
                  type="text"
                  name="product_subtype"
                  onChange={handleChange}
                />
              </Flex>
              <Flex marginTop=".5rem">
                <FormLabel width="30vw">Product Price</FormLabel>
                <Input
                  borderBottom={"1px"}
                  required
                  type="text"
                  name="product_price"
                  onChange={handleChange}
                />
              </Flex>
              <Flex marginTop=".5rem">
                <Input
                  borderBottom={"1px"}
                  required
                  bg="black"
                  color="#ffffff"
                  type="submit"
                  value="Submit"
                />
                <Link to="/">
                  <Button>Go Back</Button>
                </Link>
              </Flex>
            </FormControl>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default AdminForm;