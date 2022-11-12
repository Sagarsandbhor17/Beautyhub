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
import jwt_decode from "jwt-decode";

const Skin = () => {
  const [brands, setBrands] = useState("");
  const [skinCare, setskinCare] = useState("");
  const [skinType, setskinType] = useState("");
  const [page, setPage] = useState(1);
  const { skinData } = useSelector((store) => store.skinProducts);
  const { token } = useSelector((store) => store.UserLogin.data);
  const [tokenData, setTokenData] = useState({});
  const dispatch = useDispatch();
  // console.log(tokenData);
  // console.log(token);
  // const filter={brands,skinCare,skinType}
  const handleCart = (elem) => {
    // console.log(id);
    alert("Product Added");
    dispatch(addtoCart(elem));
  };

  useEffect(() => {
    dispatch(getData());
  }, [page]);

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
          <Box w="25vw" mb="2rem">
            <Menu>
              <MenuButton w="15vw" as={Button} rightIcon={<ChevronDownIcon />}>
                Brands
              </MenuButton>
              <MenuList
                onClick={(e) => {
                  setBrands(e.target.value);
                }}
              >
                <MenuItem value="111SKIN">111SKIN</MenuItem>
                <MenuItem value="Aesop">Aesop</MenuItem>
                <MenuItem value="Beauty ORA">Beauty ORA</MenuItem>
                <MenuItem value="AHAVA">AHAVA</MenuItem>
                <MenuItem value="3LAB">3LAB</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box w="25vw" mb="2rem">
            <Menu>
              <MenuButton w="15vw" as={Button} rightIcon={<ChevronDownIcon />}>
                Skincare Product Type
              </MenuButton>
              <MenuList
                onClick={(e) => {
                  setBrands(e.target.value);
                }}
              >
                <MenuItem value="Toners">Toners</MenuItem>
                <MenuItem value="Masks">Masks</MenuItem>
                <MenuItem value="Cleansers">Cleansers</MenuItem>
                <MenuItem value="Serums">Serums</MenuItem>
                <MenuItem value="Moisturizers">Moisturizers</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box w="25vw" mb="2rem">
            <Menu>
              <MenuButton w="15vw" as={Button} rightIcon={<ChevronDownIcon />}>
                Skin Type
              </MenuButton>
              <MenuList
                onClick={(e) => {
                  setBrands(e.target.value);
                }}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="">Combination</MenuItem>
                <MenuItem value="">Dry</MenuItem>
                <MenuItem value="">Mature</MenuItem>
                <MenuItem value="">Dehydrated</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
        <SimpleGrid columns={[2, null, 3]} spacing={[5, null, 10]}>
          {skinData.map((elem) => (
            <Box key={elem.id}>
              <Image w="20vw" src={elem.product_image} />
              <Text>{elem.productName}</Text>
              <Text>$ {elem.product_price}</Text>
              <Button onClick={() => handleCart(elem)}>SHOP NOW</Button>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </div>
  );
};

export default Skin;
