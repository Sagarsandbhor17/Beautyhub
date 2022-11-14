import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, getData } from "../Redux/bath&bodyRedux/bath&body.action";
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
  Heading
} from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import { PRODUCT_TYPE } from "../Redux/bath&bodyRedux/bath&body.type";

const Bath = () => {
  const { bathData, originalData ,loading} = useSelector((store) => store.bathProducts);
  const dispatch = useDispatch();
  console.log(bathData);
  const handleCart = (elem) => {
    alert("Product Added");
    dispatch(addtoCart(elem));
  };

  const filterProductType = (e) => {
    const filterbath = originalData.filter((x) => {
      return x.product_subtype == e;
    });
    dispatch({ type: PRODUCT_TYPE, payload: filterbath });
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
                <MenuItem value="Bath and Shower">Bath and Shower</MenuItem>
                <MenuItem value="Bath Oils/Soak">Bath Oils/Soak</MenuItem>
                <MenuItem value="Bath Salts">Bath Salts</MenuItem>
                <MenuItem value="Body Washes">Body Washes</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
        <SimpleGrid columns={[2, null, 3]} spacing={[5, null, 10]}>
          {loading ? (
            <Box mb="100" ml={["100","100","160","160"]}>
              <Heading mt={100} fontSize={[24,28,28,28]}>loading. . .</Heading>
              <Image
                w={["60%", "60%", "65%", "75%"]}
                style={{ height: "50%", margin: "auto", marginTop: "20px" }}
                src="https://thumbs.gfycat.com/YearlyBountifulCygnet.webp"
                alt="Loading..."
              />
            </Box>
          ) : (bathData.map((elem) => (
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
          )))}
        </SimpleGrid>
      </Box>
      <Footer />
    </div>
  );
};

export default Bath;
