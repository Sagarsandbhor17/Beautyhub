import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Select,
  Spacer,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";

import { AiOutlineDown, AiFillLock } from "react-icons/ai";
import style from "../../Styles/Suggest.module.css";
import CartSuggestion from "./CartSuggestion";
import { useSelector } from "react-redux";
import { ADD, DEL, REMOVE } from "../../redux/actions/action";
import { useDispatch } from "react-redux";
import { ImBin } from "react-icons/im";
import { useToast } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { MdOutlineCelebration } from "react-icons/md";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import CartData from "./CartData";
import loadingGif from "../loadingGif.webp";

const getCart = (id) => {
  return axios.get(
    `http://localhost:8080/cart/${id}`
  );
};

const deleteCart = (id) => {
  return axios.delete(
    `http://localhost:8080/cart/${id}`
  );
};

export const Cart = () => {
  const toast = useToast();
  const [TotalPrice, setTotalPrice] = React.useState(0);
  const [value, sevalue] = React.useState("");
  const [value1, setvalue] = React.useState("");
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const { Token } = useSelector((store) => store.UserLogin.data);

  useEffect(() => {
    showData();
  }, []);

  const showData = () => {
    let userId = "";
    if (Token) {
      userId = jwt_decode(Token);
    }
    getCart(userId.id).then((res) => {
      setLoading(false);
      setCart(res.data);
    });
  };

  const deleteData = (id) => {
    deleteCart(id).then((res) => {
      showData();
      toast({
        title: "Removed Item from Cart",
        position: "top",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    });
  };

  function clear() {
    setvalue(value);
    sevalue("");
  }

  useEffect(() => {
    let sum = 0;
    cart.map((el) => {
      sum = sum + Number(el.product.product_price);
    });
    setTotalPrice(sum);
  });

  return (
    <Box>
      <Navbar />
      <br />
      <Flex gap="60%" marginLeft="2rem">
        <Heading textAlign={"start"} fontWeight="bold">
          Your Cart:
        </Heading>
        <NavLink to="/checkout">
          <Button
            bg={"#333"}
            color="white"
            _hover={{ backgroundColor: "#00857c", color: "black" }}
            w={["100%", "100%", "100%", "100%"]}
          >
            <AiFillLock />
            Checkout Securely Now
          </Button>{" "}
        </NavLink>
      </Flex>
      <br />
      <Flex className={style.flexcontainer}>
        <TableContainer w={["100%", "100%", "100%", "100%"]}>
          <Table>
            <Thead>
              <Tr>
                <Th>Items</Th>
                <Th>Price</Th>
                <Th>Quantity</Th>
                <Th>Subtotal</Th>
              </Tr>
            </Thead>
            {loading ? (
              <Box display={"flex"} alignItems="center" mb="16">
                <Image
                  w={["40%", "40%", "25%", "25%"]}
                  style={{ height: "50%", margin: "auto" }}
                  src={loadingGif}
                  alt="Loading..."
                />
                <Heading fontSize={[24, 26, 25, 25]}>loading. . .</Heading>
              </Box>
            ) : (
              cart.map((items) => (
                <CartData
                  product={items.product}
                  quantity={items.quantity}
                  _id={items._id}
                  deleteData={deleteData}
                />
              ))
            )}
          </Table>
          <Box w="100%">
            <Heading textAlign={"right"} fontSize="22px">
              Subtotal : ${TotalPrice}
            </Heading>
          </Box>
        </TableContainer>
        <Box
          bg="#f8f8f8"
          w={["100%", "100%", "100%", "60%"]}
          padding="2% 2% 2%"
          h="140px"
        >
          <Flex gap="60%">
            <Text textAlign={"left"} fontWeight="semibold">
              Gift Selection{" "}
            </Text>
            <AiOutlineDown />
          </Flex>
          <br />
          <Flex gap="60%">
            <Text textAlign={"left"} fontWeight="normal">
              Spend $165.00 or more to qualify{" "}
            </Text>

            <Text textAlign={"right"} fontWeight="bold">
              $128.00{" "}
            </Text>
          </Flex>
        </Box>
      </Flex>
      <br />
      <Button
        onClick={() =>
          toast({
            description: `Yay  you got coupon code: Beautyhub30`,
            position: "top",
            duration: 9000,
            isClosable: true,
          })
        }
        bg="#2594af"
        _hover={{ bg: "#03a9f4" }}
        color="white"
        w={["80%", "20%", "20%", "15%"]}
      >
        Get Coupon Code here <MdOutlineCelebration color="white" size={"md"} />
      </Button>
      <br></br>
      <br></br>
      <Input
        placeholder="Got a coupon code.Enter it here to claim 30% discount"
        border="1px solid black"
        w={["60%", "60%", "60%", "30%"]}
        value={value}
        onChange={(e) => sevalue(e.target.value)}
      />
      <Button borderRadius={"none"} bg="#cecece" onClick={clear}>
        Add
      </Button>
      <br />
      <br />
      <Flex gap="30%" marginLeft={"2rem"}>
        <NavLink to="/">
          <Button w={["100%", "100%", "100%", "100%"]}>
            <AiFillLock />
            Continue Shopping
          </Button>
        </NavLink>
        <NavLink to="/checkout">
          <Button
            bg={"#333"}
            color="white"
            _hover={{ backgroundColor: "#00857c", color: "black" }}
            w={["100%", "100%", "100%", "100%"]}
          >
            <AiFillLock />
            Checkout Securely Now
          </Button>
        </NavLink>
      </Flex>
      <br />

      <br />
      <CartSuggestion />
    </Box>
  );
};
