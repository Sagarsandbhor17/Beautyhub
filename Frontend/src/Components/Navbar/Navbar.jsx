import {
  Box,
  Grid,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import usaFlag from "./Image/usaFlag.png";
import style from "./css/style.module.css";
import SkinCare from "./Options/SkinCare";
import HairOption from "./Options/HairOption";
import MakeupOption from "./Options/MakeupOption";
import BathBodyOption from "./Options/BathBodyOption";
import FragranceOption from "./Options/FragranceOption";
import SelfCareOption from "./Options/SelfCareOption";
import ToolsOption from "./Options/ToolsOption";
import NewTrendingOption from "./Options/NewTrendingOption";
import BuiltRoutineOption from "./Options/BuiltRoutineOption";
import HolydayOption from "./Options/HolydayOption";
import BlogOption from "./Options/BlogOption";
import SaleOption from "./Options/SaleOption";
import AccountOption from "./Options/AccountOption";
import fourthRow1 from "./Image/fourthRow1.png";
import fourthRow2 from "./Image/fourthRow2.png";
import fourthRow3 from "./Image/fourthRow3.png";
import fourthRow4 from "./Image/fourthRow4.png";
import { Link } from "react-router-dom";
import LeftDrawer from "./Options/LeftDrawer";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";

const getCart = (id) => {
  return axios.get(
    `https://backend-beautyhub-production.up.railway.app/cart/${id}`
  );
};

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [length, setLength] = useState(0);
  const { Token, gAuth } = useSelector((store) => store.UserLogin.data);
  const toast = useToast();

  useEffect(() => {
    let userId = "";
    if (Token) {
      userId = jwt_decode(Token);
    }
    getCart(userId.id).then((res) => {
      setLength(res.data.length);
    });
  });

  const cartCheck = () => {
    if (!Token && !gAuth) {
      toast({
        title: "Please Login First !",
        status: "error",
        duration: 1200,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <div>
      <Grid position="fixed" zIndex={100} w="100%" bg="#ffffff">
        {/* --------------------------- (First row) ---------------------- */}
        <Grid
          h={"5"}
          w="100%"
          bg="#f2f2f2"
          display={["none", "none", "flex", "flex"]}
          justifyContent="right"
          alignItems={"center"}
          pr="20"
        >
          <Box
            h="4"
            w="40"
            display={"flex"}
            alignItems={"center"}
            justifyContent="space-around"
            color={"gray"}
            fontSize="13"
          >
            <Box display={"flex"} alignItems="center">
              <Image w="3" mr="1" src={usaFlag} alt="usaFlag" />
              <Text>us-USD</Text>
            </Box>
            <Text>Help</Text>
          </Box>
        </Grid>

        {/* -------------------- (Second row) ------------------------ */}
        <Grid
          borderBottom="2px"
          h={["12", "12", "110px", "110px"]}
          w="100%"
          display={"flex"}
          alignItems="center"
          justifyContent={"space-between"}
          pl={["6", "6", "16", "16"]}
          pr={["6", "6", "16", "16"]}
        >
          {/* -------------------------- (Search - Phone display) -------------- */}
          <Box fontSize="24" display={["block", "block", "none", "none"]}>
            <LeftDrawer />
          </Box>
          <Box
            fontSize="24"
            ml="-10"
            display={["block", "block", "none", "none"]}
            cursor="pointer"
            onClick={() => setShowSearch(!showSearch)}
          >
            {showSearch ? <b>X</b> : <BiSearchAlt2 />}
          </Box>

          {/* ----------------------- (Logo SkinStore) --------------- */}
          <Box pt="0" bg="#ffffff" ml={["12%", "12%", "-10", "4"]}>
            <Link to="/">
              <Text
                fontSize={["30", "30", "48", "48"]}
                fontWeight={700}
                mt="-3"
              >
                BeautyHub
              </Text>
            </Link>
            <Link to="/">
              <Text
                mt={["-2", "-2", "-3", "-3"]}
                fontSize={["8", "8", "12", "12"]}
              >
                Skin care with <b>BeautyHub</b> group
              </Text>
            </Link>
          </Box>

          {/* --------------------------- (Search) -------------------- */}
          <Box>
            <InputGroup
              ml={["-50%", "-50%", "-15%", "-50%"]}
              w={["200%", "200%", "120%", "200%"]}
              display={["none", "none", "block", "block"]}
              border="1px solid grey"
            >
              <Input
                placeholder="Search for a product or brand..."
                borderRadius={1}
              />
              <InputRightElement fontSize={28} children={<BiSearchAlt2 />} />
            </InputGroup>
          </Box>

          {/* ------------------------------ (Account/Cart) ----------------- */}
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            w={["10%", "10%", "15%", "15%"]}
          >
            <Box
              cursor={"pointer"}
              display={"flex"}
              alignItems="center"
              gap="1"
              fontSize={17}
              className={style.Account}
              mt="2"
              pb="2"
            >
              <BsPerson style={{ fontSize: "26" }} />
              <Text display={["none", "none", "none", "block"]}>Account</Text>
            </Box>
            <Box
              className={style.AccountGrid}
              w={["15%", "15%", "18%", "18%"]}
              mt={["7%", "7%", "5%", "2.5%"]}
              ml={["-35%", "-35%", "-18%", "-12%"]}
            >
              <AccountOption />
            </Box>

            <Link to="/cart">
              <Box
                cursor={"pointer"}
                display={"flex"}
                alignItems="center"
                gap="1"
                mt="2"
                fontSize={17}
                onClick={cartCheck}
              >
                <Text
                  fontSize={13}
                  position={"absolute"}
                  ml="3"
                  mb="4"
                  bg="#333333"
                  color="white"
                  pl="4px"
                  pr="4px"
                  borderRadius={"50"}
                  pb="1px"
                >
                  {length}
                </Text>
                <HiOutlineShoppingBag style={{ fontSize: "25" }} />
                <Text display={["none", "none", "none", "block"]}>Cart</Text>
              </Box>
            </Link>
          </Box>
        </Grid>

        {/* ----------------------- (Third Row) ----------------- */}
        <Grid h="10" bg="#ffffff" display={["none", "none", "block", "block"]}>
          <Box
            w={["70%", "70%", "95%", "70%"]}
            ml={["20", "20", "2", "20"]}
            color="gray"
            fontWeight={400}
            fontSize="15"
            mt="1"
            display="flex"
            className={style.ThirdRow}
          >
            <Text className={style.Holyday}>Brand</Text>
            <Box className={style.HolydayGrid}>
              <HolydayOption />
            </Box>
            <Text className={style.Holyday}>Holyday</Text>
            <Box className={style.HolydayGrid}>
              <HolydayOption />
            </Box>
            <Text className={style.Sale}>Sale</Text>
            <Box className={style.SaleGrid}>
              <SaleOption />
            </Box>
            <Text className={style.skinCare}>
              {" "}
              <Link to="/skin">Skin Care</Link>
            </Text>
            <Box className={style.skinCareGrid}>
              <SkinCare />
            </Box>
            <Link to="/hair">Hair</Link>{" "}
            <Box className={style.HairGrid}>
              <HairOption />
            </Box>
            <Text className={style.Makeup}>Makeup</Text>
            <Box className={style.MakeupGrid}>
              <MakeupOption />
            </Box>
            <Text className={style.BathBody}>
              <Link to="/bath&body"> Bath & Body</Link>{" "}
            </Text>
            <Box className={style.BathBodyGrid}>
              <BathBodyOption />
            </Box>
            <Text className={style.Fragrance}>
              <Link to="/fragrance">Fragrance</Link>
            </Text>
            <Box className={style.FragranceGrid}>
              <FragranceOption />
            </Box>
            <Text className={style.SelfCare}>Self Care</Text>
            <Box className={style.SelfCareGrid}>
              <SelfCareOption />
            </Box>
            <Text className={style.Tools}>Tools</Text>
            <Box className={style.ToolsGrid}>
              <ToolsOption />
            </Box>
            <Text className={style.NewTrending}>New & Trending</Text>
            <Box className={style.NewTrendingGrid}>
              <NewTrendingOption />
            </Box>
            <Text className={style.BuiltRoutine}>Built a Routine</Text>
            <Box className={style.BuiltRoutineGrid}>
              <BuiltRoutineOption />
            </Box>

            <Text className={style.Blog}>
              <Link to="/admin">Blog/Admin</Link>
            </Text>
            <Box className={style.BlogGrid}>
              <BlogOption />
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* ------------------------ ( 4th row ) ---------------------*/}
      <Grid
        display={["none", "none", "block", "block"]}
        w="100%"
        bg="#f2f2f2"
        pt="200px"
      >
        <Grid w="80%" m="auto" display={"flex"} justifyContent="space-around">
          <Box display={"flex"} cursor="pointer" pb="3">
            <Image h="30px" mt="-1" src={fourthRow1} alt="fourthRow1" />
            <Text>FREE US Shipping Over $49</Text>
          </Box>
          <Box display={"flex"} cursor="pointer" pb="3">
            <Image h="30px" mt="-1" src={fourthRow2} alt="fourthRow1" />
            <Text>Refer a Friend, Get $15</Text>
          </Box>
          <Box display={"flex"} cursor="pointer" pb="3">
            <Image h="30px" mt="-1" src={fourthRow3} alt="fourthRow1" />
            <Text>Download Our App</Text>
          </Box>
          <Box display={"flex"} cursor="pointer" pb="3">
            <Image h="30px" mt="-1" src={fourthRow4} alt="fourthRow1" />
            <Text>New Customers Save 20% - Use Code NEWBIE</Text>
          </Box>
        </Grid>
      </Grid>

      {/* --------------------------- (Search mobile) -------------------- */}
      <Box
        pt={10}
        h="16"
        position={"fixed"}
        zIndex="90"
        w="95%"
        ml="5"
        mt="1"
        display={showSearch ? ["block", "block", "none", "none"] : "none"}
      >
        <InputGroup
          border="1px solid grey"
          bg="#ffffff"
          mt="3"
          borderRadius={8}
          w="95%"
          m="auto"
        >
          <Input
            placeholder="Search for a product or brand..."
            borderRadius={8}
            h="12"
          />
          <InputRightElement fontSize={28} pt="5" children={<BiSearchAlt2 />} />
        </InputGroup>
      </Box>

      {/* ------------------------- (5th row/ Banner) --------------------- */}
      <Grid
        pt={showSearch ? ["24", "24", "0", "0"] : ["10", "10", "0", "0"]}
        display={"block"}
        w="90%"
        m="auto"
        mb="2"
        bg="#2e3337"
        color={"#ffffff"}
        _hover={{
          color: "black",
          bg: "#ffffff",
        }}
      >
        <Text p="2" fontSize={[16, 16, 18, 20]} fontWeight="600">
          25% off select brands with code SINGLES + free 13-piece Beauty Bag
          (Worth $117) @ $165 | Shop now {">"}
        </Text>
      </Grid>
    </div>
  );
};

export default Navbar;
