import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, getData } from "../Redux/hairRedux/hair.action";
import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Button,
  MenuButton,
  MenuItem,
  Menu,
  MenuList,
  Heading,
  useToast,
} from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import { PRODUCT_TYPE } from "../Redux/hairRedux/hair.type";
import jwt_decode from "jwt-decode";

const Hair = () => {
  const { hairData, originalData, loading } = useSelector(
    (store) => store.hairProducts
  );
  const toast = useToast();
  const { Token } = useSelector((store) => store.UserLogin.data);
  const dispatch = useDispatch();

  const handleCart = (elem) => {
    let userId = "";
    if (Token) {
      userId = jwt_decode(Token);
      dispatch(addtoCart(elem));
      toast({
        title: "Product Added to Cart !",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "Please login First !",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const filterProductType = (e) => {
    const filterhair = originalData.filter((x) => {
      return x.product_subtype == e;
    });
    dispatch({ type: PRODUCT_TYPE, payload: filterhair });
  };

  //   const sortProduct = () => {
  //   if()
  // }

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div>
      <Navbar />
      <Box
        display="flex"
        flexDirection="row"
        gap="10"
        border="1px solid"
        mt="2rem"
      >
        <Box w="25vw">
          <Box w="25vw" fontSize={[".7rem", null, "1rem"]} mb="2rem">
            <Menu>
              <MenuButton
                w="20vw"
                fontSize={[".7rem", null, "1rem"]}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Product Type
              </MenuButton>
              <MenuList
                onClick={(e) => {
                  filterProductType(e.target.value);
                }}
              >
                <MenuItem value="Hair Sprays">Hair Sprays</MenuItem>
                <MenuItem value="Hair Conditioners">Hair Conditioners</MenuItem>
                <MenuItem value="Hair Masks">Hair Masks</MenuItem>
                <MenuItem value="Shampoos">Shampoos</MenuItem>
                <MenuItem value="Hair Oil Products">Hair Oil Products</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
        <SimpleGrid columns={[2, null, 3]} spacing={[5, null, 10]}>
          {loading ? (
            <Box mb="100" ml={["100", "100", "160", "160"]}>
              <Heading mt={100} fontSize={[24, 28, 28, 28]}>
                loading. . .
              </Heading>
              <Image
                w={["60%", "60%", "65%", "75%"]}
                style={{ height: "50%", margin: "auto", marginTop: "20px" }}
                src="https://thumbs.gfycat.com/YearlyBountifulCygnet.webp"
                alt="Loading..."
              />
            </Box>
          ) : (
            hairData.map((elem) => (
              <Box
                alignSelf="normal"
                display="flex"
                flexDirection="column"
                alignItems="center"
                border="1px solid"
                key={elem.id}
              >
                <NavLink to={`/products/${elem._id}`}>
                  <Image
                    display="block"
                    m="auto"
                    boxSize="20vw"
                    src={elem.product_image}
                  />
                </NavLink>
                <Text>{elem.productName}</Text>
                <Text>$ {elem.product_price}</Text>
                <Button mb=".5rem" onClick={() => handleCart(elem)}>
                  SHOP NOW
                </Button>
              </Box>
            ))
          )}
        </SimpleGrid>
      </Box>
      <Footer />
    </div>
  );
};

export default Hair;
