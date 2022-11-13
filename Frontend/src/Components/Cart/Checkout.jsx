import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  useToast,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import style from "../Login-Signup/style.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SignupApi } from "../Redux/userRedux/signup.action";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CartOrderSummary } from "./CartOrderSummary";

const InitialState = {
  name: "",
  email: "",
  password: "",
  number: "",
  referral: "",
};

const Checkout = () => {
  const cart = useSelector((state) => state.cartreducer.carts);
  const [price,setprice]=useState(0)
 
  const [otp, setotp] = useState(0);
  const toast = useToast();
  let navigate=useNavigate()

  function otpgen() {
    let a = Math.floor(100000 + Math.random() * 900000);
    setotp(a)

    toast({
      title: `Otp generated :${a}`,
    position:"top",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
    navigate("/otp")
}


  return (
    <div>
      <Flex>
      <Box w="80%">
      <Box
        w="100%"
        p="4"
        pt="0"
        pl={["0", "0", "28", "28"]}
        textAlign={["center", "center", "left", "left"]}
        position={"fixed"}
        bg="#ffffff"
        zIndex={100}
      >
        <Text fontSize={"48"} fontWeight={600}>
          BeautyHub
        </Text>
        <Text mt="-4" ml={["0", "0", "3", "3"]} fontSize={"13"}>
          part of the <span style={{ color: "#2fc6f7" }}>look</span>
          <span style={{ color: "grey" }}>fantastic</span> group
        </Text>
      </Box>

      <Grid bg={"#f2f2f2"} pt="144" pb="10">
        <Grid
          borderRadius={"5px"}
          w={["80%", "80%", "50%", "50%"]}
          p="6"
          m="auto"
          textAlign={"left"}
          bg="#ffffff"
        >
          <Text fontSize={"26px"} mb="10">
           Checkout
          </Text>

       
          <Text fontSize={"22px"} mb="4">
            Complete Your Order
          </Text>
         

          
          <Text border={"1px solid grey"}></Text>
          <br />
          <Text fontSize={"20px"} mb="4">
            Email and delivery address
          </Text>
          <br />
          <form  className={style.form}>
            <label>* Email address</label>
            <Input
            
              name="name"
             
              required
              type="text"
            />
             <Text mt={"-4"} fontSize="12">
              We'll send the purchase receipt  to this email
            </Text>
            <label>* Country or region</label>
            <Input
             
              name="email"
              
              required
              type="email"
            />
            <label>*Full Name</label>
            <Input required type="email" />

            <label>*Zip Code/Postcode</label>
            <InputGroup
              size="md"
              h="50px"
              mb="23px"
              border={"1px solid grey"}
              borderRadius="10px"
            >
              <Input
               
                name="password"
              
                pattern=".{8,15}"
                required
                title="Please enter password of Length 8 to 15 !"
               
                h="50px"
                mb="23px"
              />
              <InputRightElement mr="4">
                <Text  mt="2">
                
                </Text>
              </InputRightElement>
            </InputGroup>

            <label>Company Name</label>
            <InputGroup
              size="md"
              h="50px"
              mb="23px"
              border={"1px solid grey"}
              borderRadius="10px"
            >
              <Input
                required
                
                h="50px"
                mb="23px"
              />
              <InputRightElement mr="4">
                <Text  mt="2">
                
                </Text>
              </InputRightElement>
            </InputGroup>

            <label>*Address</label>
            <Input
             
              name="number"
            
              type="number"
            />
           
            <br />
            <br />
            <label>Address 2</label>
            <Input
            
              name="referral"
            
              type="text"
            />
               <label>*Apartment/Suite number</label>
            <Input
            
              name="referral"
            
              type="text"
            />
               <label>*Town/City</label>
            <Input
            
              name="referral"
            
              type="text"
            />
                 <label>*County</label>
            <Input
            
              name="referral"
            
              type="text"
            />
                   <label>Contact Number</label>
            <Input
            
              name="referral"
            
              type="text"
            />
            <Text mt={"-4"} fontSize="12">
              * Why do we need your Number?
            </Text>
            <br />
            <br />
     
          </form>
          <br />
         
        </Grid>
      </Grid>
      <Grid bg={"#f2f2f2"} pt="144" pb="10">
        <Grid
          borderRadius={"5px"}
          w={["80%", "80%", "50%", "50%"]}
          p="6"
          m="auto"
          textAlign={"left"}
          bg="#ffffff"
          mt="-3rem"
        >
          <Text fontSize={"26px"} mb="14">
         Payment Method
          </Text>
         
<hr/>
         
          <Text >  Debit/Credit Card
          </Text>
          <br/>
          <Flex  gap="2px" p={{ base: 4, md: 14,sm:6 }}
  w="100%"
  direction={{ base: 'column-reverse', md: 'row' }}><Image src="https://s1.thcdn.com/checkout/resources/images/3c2e42cbf9d0b0df0d3b3bb81aa41d6a.svg" />
            <Image src="https://s1.thcdn.com/checkout/resources/images/57987be4eb98b4c77644d93d92df80fa.svg" />
            <Image src="https://s1.thcdn.com/checkout/resources/images/932e82ef072c7df18e91e66b96dfdf5d.svg" />
            <Image src="https://s1.thcdn.com/checkout/resources/images/6732c0137a7dab50b23daf1337fe2f30.svg" />
            <Image src="https://s1.thcdn.com/checkout/resources/images/0528692e7541ff3755880b3408793969.svg" />
            <Image src="https://s1.thcdn.com/checkout/resources/images/8ba3dc816042268141a2205e3bfc3971.svg" />
            <Image src="https://s1.thcdn.com/checkout/resources/images/248074ffdeeeaeffed9c5db35f35fe45.svg"/></Flex>
     
         
          <br />
       
          <br />
          <form  className={style.form}>
            <label>* Card Number</label>
            <Input
            
              name="name"
             
              required
              type="text"
            />
            
            <label>* Name on card</label>
            <Input
             
              name="email"
              
              required
              type="email"
            />
            <label>*Expiry Date</label>
            <Input required type="email" />

            <label>*Security Code (CV2)</label>
            <InputGroup
              size="md"
              h="50px"
              mb="23px"
              border={"1px solid grey"}
              borderRadius="10px"
            >
              <Input
               
                name="password"
              
                pattern=".{8,15}"
                required
                title="Please enter password of Length 8 to 15 !"
               
                h="50px"
                mb="23px"
              />
              <InputRightElement mr="4">
                <Text  mt="2">
                
                </Text>
              </InputRightElement>
            </InputGroup>
            <Flex gap="1rem">
              <input type="checkbox" />
              <Text>Use my shipping address as my cardholder address</Text>
            </Flex>
            <br />
         
            <Button
              type="submit"
              w={"100%"}
              bg="#2e3337"
              fontWeight={300}
              color="white"
              h="12"
                    _hover={{ bg: "#2fc6f7", color: "black" }}
                    onClick={otpgen}
            >
             Sumbit My Order
                  </Button>
               
          </form>
          <br />
      
        </Grid>
        </Grid>
        </Box>
        <Box boxShadow={'md'} bg="white" h="400px"   mt="10rem" w={{ md: '30%',sm:"50%",base:"20%" }} padding= "1em 4px 35px 7px">
          <Flex gap="4rem" justifyItems={'normal'} ml="1rem">
            <Text fontWeight={'semibold'}>Order Summary</Text>
            <Text>{cart.length} items</Text>
          </Flex>
          <br></br>
          <Box overflow={'scroll'} h="200px">
          <Flex>
              <Image src={cart.product_image} />
              <Flex flexDirection={'column'}>
                <Text>{cart.product_name}
                </Text>
                <Text>
                Quantity: {cart.quantity}
                </Text>
                <Text>
                $0.00
                </Text>
              </Flex>
            </Flex>
           
           
          </Box>
          <hr />
          <hr />
          <br></br>
          <hr></hr>
          <br/>
          <Flex gap="10rem" fontWeight={'semibold'}><Text> Total to pay</Text>
          <Text>
$304.40</Text></Flex>

     </Box>
      </Flex>
    </div>
  );
};

export default Checkout;
