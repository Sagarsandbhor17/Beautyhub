import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, getData } from "../Redux/skinRedux/skin.action";
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
} from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom"
import { PRODUCT_TYPE } from "../Redux/skinRedux/skin.types";

const Skin = () => {
  const { skinData, originalData } = useSelector((store) => store.skinProducts);
  const dispatch = useDispatch();

  const handleCart = (elem) => {
    alert("Product Added");
    dispatch(addtoCart(elem));
  };

  const filterProductType = (e) => {
    const filterSkin = originalData.filter((x) => {
      return x.product_subtype == e;
    });
    dispatch({ type: PRODUCT_TYPE, payload: filterSkin });
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
                <MenuItem value="Cleansers">Cleansers</MenuItem>
                <MenuItem value="Moisturizers">Moisturizers</MenuItem>
                <MenuItem value="Serums">Serums</MenuItem>
                <MenuItem value="Masks">Masks</MenuItem>
                <MenuItem value="Oils">Oils</MenuItem>
                <MenuItem value="Lip Care">Lip Care</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box w="25vw" fontSize={[".7rem", null, "1rem"]} mb="2rem">
            {/* <Menu>
              <MenuButton
                w="20vw"
                textAlign="center"
                fontSize={[".7rem", null, "1rem"]}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Sort by price
              </MenuButton>
              <MenuList
              // onClick={(e) => {
              //   sortProduct(e.target.value);
              // }}
              >
                <MenuItem value="low">Low to High</MenuItem>
                <MenuItem value="high">High to Low</MenuItem>
              </MenuList>
            </Menu> */}
          </Box>
          <Box w="25vw" mb="2rem">
            {/* <Menu>
              <MenuButton w="15vw" as={Button} rightIcon={<ChevronDownIcon />}>
                Skin Type
              </MenuButton>
              <MenuList
                onClick={(e) => {
                  // setBrands(e.target.value);
                }}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="">Combination</MenuItem>
                <MenuItem value="">Dry</MenuItem>
                <MenuItem value="">Mature</MenuItem>
                <MenuItem value="">Dehydrated</MenuItem>
              </MenuList>
            </Menu> */}
          </Box>
        </Box>
        <SimpleGrid columns={[2, null, 3]} spacing={[5, null, 10]}>
          {skinData.map((elem) => (
            <Box
              alignSelf="normal"
              display="flex"
              flexDirection="column"
              alignItems="center"
              border="1px solid"
              key={elem.id}
            >
                <Image
                  display="block"
                  m="auto"
                  boxSize="20vw"
                  src={elem.product_image}
                />
              
              <Text>{elem.productName}</Text>
              <Text>$ {elem.product_price}</Text>
              <Button mb=".5rem" onClick={() => handleCart(elem)}>
                SHOP NOW
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </div>
  );
};

export default Skin;
