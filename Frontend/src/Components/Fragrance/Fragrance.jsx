import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, getData } from "../Redux/fragranceRedux/fragrance.action";
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
import { NavLink } from "react-router-dom";
import { PRODUCT_TYPE } from "../Redux/fragranceRedux/fragrance.type";

const Fragrance = () => {
  const { fragranceData, originalData } = useSelector(
    (store) => store.fragranceProducts
  );
  const dispatch = useDispatch();
  console.log(fragranceData);
  const handleCart = (elem) => {
    alert("Product Added");
    dispatch(addtoCart(elem));
  };

  const filterProductType = (e) => {
    const filterfragrance = originalData.filter((x) => {
      return x.product_subtype == e;
    });
    dispatch({ type: PRODUCT_TYPE, payload: filterfragrance });
  };

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
                <MenuItem value="Body Spray">Body Spray</MenuItem>
                <MenuItem value="Eau de Toilette">Eau de Toilette</MenuItem>
                <MenuItem value="For Her">For Her</MenuItem>
                <MenuItem value="For Him">For Him</MenuItem>
                <MenuItem value="Perfume">Perfume</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
        <SimpleGrid columns={[2, null, 3]} spacing={[5, null, 10]}>
          {fragranceData.map((elem) => (
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
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </div>
  );
};

export default Fragrance;
