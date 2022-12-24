import React, { useState , useEffect} from "react";
import { Button, Heading, Image, Select, useToast ,FormControl,FormLabel,Input,Box,Flex,Table,Tbody,Tr,Td,} from "@chakra-ui/react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './admin.css'
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

const AdminFormToAddProduct = () => {
  const {Token} = useSelector(store => store.UserLogin.data);
  const navigate = useNavigate();
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
  const [preview , setPreview] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name] : value }));
    setPreview(true)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post(
      "http://localhost:8080/products",
      {
        product,
      }
    );
    toast({
      title: "Product Added !",
      position: "top",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setProduct(initialStateProduct);
    e.target.reset();
    setPreview(false);
  };
  useEffect(() => {
    const {role} = jwt_decode(Token);
    if (role != "admin") {
      console.log('role:', role)
      navigate('/');
      toast({
        title: "Only Admin is Allowed",
        status: "error",
        duration: 1200,
        isClosable: true,
        position: "top",
      });
    }else{
      toast({
        title: "Welcome Admin 😊",
        description:"only You can add product ",
        position: "top-left",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  },[])
  // console.log("product: ", product);
  return (
    <>
      <Box
        width="98.5vw"
        height="fit-content"
        backgroundImage='https://img.freepik.com/free-vector/pattern-about-shopping_1061-495.jpg?auto=format&h=200'
      >
      <Flex className='admin_flex'  justifyContent={preview ? "space-around":'center' } alignItems='center'>
        <Box
          width="40%"
          border="2px solid"
          margin="20px"
          padding="20px"
          borderRadius=" 25px"
          backgroundColor='#fff'
        >
          <Heading size='lg' fontWeight='500' >Add Product Form</Heading>
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
                <Select placeholder='Select Type' name="product_type" onChange={handleChange}>
                  <option value='Skin Care'>Skin Care</option>
                  <option value='Hairs'>Hairs</option>
                  <option value='Bath & Body'>Bath & Body</option>
                  <option value='Fragrance'>Fragrance</option>
                </Select>
              </Flex>
              <Flex marginTop=".5rem">
                <FormLabel width="30vw">Sub type of product</FormLabel>
                <Select placeholder='Select Sub Type' name="product_subtype" onChange={handleChange}>
                  {
                    product.product_type ==='Skin Care' ?
                    <>
                      <option value="Cleansers">Cleansers</option>
                      <option value="Moisturizers">Moisturizers</option>
                      <option value='Serums'>Serums</option>
                      <option value='Masks'>Masks</option>
                      <option value='Oils'>Oils</option>
                      <option value='Lip Care'>Lip Care</option>
                    </> :
                    product.product_type ==='Fragrance' ?
                    <>
                      <option value="Body Spray">Body Spray</option>
                      <option value="Eau de Toilette">Eau de Toilette</option>
                      <option value='For Her'>For Her</option>
                      <option value='For Him'>For Him</option> 
                      <option value='Perfume'>Perfume</option> 
                    </> 
                    : 
                    product.product_type ==='Bath & Body' ?
                    <>
                      <option value="Body Washes">Body Washes</option>
                      <option value="Cleansing Bars">Cleansing Bars</option>
                      <option value='Bath Salts'>Bath Salts</option>
                      <option value='Bath Oils/Soak'>Bath Oils/Soak</option>
                      <option value='Bath and Shower'>Bath and Shower</option>
                    </> 
                    : 
                    product.product_type ==='Hairs' ?
                    <>
                      <option value="Hair Oil Products">Hair Oil Products</option>
                      <option value="Shampoos">Shampoos</option>
                      <option value='Hair Masks'>Hair Masks</option>
                      <option value='Hair Conditioners'>Hair Conditioners</option>
                      <option value='Hair Sprays'>Hair Sprays</option>
                    </> 
                    : 
                    <option value=''>Please select Type first</option>
                  }
                </Select>
              </Flex>
              <Flex marginTop=".5rem">
                <FormLabel width="30vw">Product Price</FormLabel>
                <Input
                  borderBottom={"1px"}
                  required
                  type="number"
                  name="product_price"
                  onChange={handleChange}
                />
              </Flex>
              <Flex marginTop=".5rem" gap='1rem'>
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
        <Box
         width="40%"
         border="2px solid"
         margin="20px"
         padding="20px"
         borderRadius=" 25px"
         backgroundColor='#fff'
         height='fit-content'
         display={preview ? "block" : "none"}
         >
          <Heading  size='lg' fontWeight='500' >
            Preview Card
          </Heading>
        
            <Box   margin='20px 0'>
              <Flex  >
                <Image src={product.product_image}
                 w='40%' 
                //  border='1px solid'
                />
                <Box   w='60%'> 
                  <Table variant='simple'>
                    <Tbody>
                      <Tr>
                        <Td>Product Name </Td>
                        <Td>{product.productName}</Td>
                      </Tr>
                      <Tr>
                        <Td>Price </Td>
                        <Td>{`$ ${product.product_price}`}</Td>
                      </Tr>
                      <Tr>
                        <Td>Type </Td>
                        <Td>{product.product_type}</Td>
                      </Tr>
                      <Tr>
                        <Td> Sub Type </Td>
                        <Td>{product.product_subtype}</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </Box>
              </Flex>
            </Box>
          
        </Box>
      </Flex>
      </Box>
    </>
  );
};

export default AdminFormToAddProduct;

