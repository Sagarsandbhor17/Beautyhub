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

export const Cart = () => {
  const cart = useSelector((state) => state.cartreducer.carts);
  // console.log(cart);
  let dispatch = useDispatch();
  const toast = useToast();
  const [price, setprice] = React.useState(0);
  const [value, sevalue] = React.useState("");
  const [value1, setvalue] = React.useState("");
  console.log(price);
  //delete function
  function dlt(id) {
    dispatch(DEL(id));
    toast({
      title: "Removed Item from Cart",
      position: "top",

      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }
  function clear() {
    setvalue(value);
    sevalue("");
  }

  //total price
  function total() {
    let price = 0;
    cart.map((ele, k) =>
      value1 == "Beautyhub30"
        ? (price =
            Math.ceil(
              (Number(Math.ceil(ele.product_price * ele.quantity)) + price) /
                100
            ) * 30)
        : (price = Number(Math.ceil(ele.product_price * ele.quantity)) + price)
    );

    setprice(price);
  }
  React.useEffect(() => {
    total();
  }, [total]);

  function qty(e) {
    dispatch(ADD(e));
  }
  //remove one
  function qtydec(item) {
    dispatch(REMOVE(item));
  }

  return (
    <Box>
      <Box
        background={"#232f3e"}
        w={["100%", "100%", "100%", "100%"]}
        color="white"
        margin="auto"
       
        h="40px"
        _hover={{ bg: "white", color: "black" }}
      >
        <Text fontWeight={"bold"} textAlign="center" fontSize={"xl"}>
          25% off Selectbrands with code SINGLES +free 13-piece Beauty Bag(Worth
          $117)@ $165|Shop now
        </Text>
      </Box>
      <br />
      <Flex gap="60%" w={["100%", "100%", "100%", "100%"]} marginLeft="2rem">
        <Heading textAlign={"start"} fontWeight="bold">
          Your Cart:
        </Heading>
        <Button
          bg={"#333"}
          color="white"
          _hover={{ backgroundColor: "#00857c", color: "black" }}
          w={["100%", "100%", "100%", "15%"]}
        >
          <AiFillLock />
          Checkout Securely Now
        </Button>{" "}
      </Flex>
      <br />
      <Flex className={style.flexcontainer}>
        <TableContainer w={["100%", "100%", "100%", "100%"]}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Items</Th>
                <Th>Price</Th>
                <Th>Quantity</Th>
                <Th>Subtotal</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cart.map((items) => (
                <Tr>
                  <Td>
                    <Image src={items.product_image} w="40%" />
                  </Td>
                  <Td>${items.product_price}</Td>
                  <Td>
                    {" "}
                    <Button
                      disabled={items.quantity === 1}
                      onClick={() => qtydec(items)}
                    >
                      -
                    </Button>
                    <Button
                      borderRadius="none"
                      bg="white"
                      _hover={{ bg: "white" }}
                    >
                      {items.quantity}
                    </Button>
                    <Button onClick={() => qty(items)}>+</Button>
                  </Td>
                  <Td>${Math.ceil(items.quantity * items.product_price)}</Td>
                  <Td>
                    <Button bg="white" onClick={() => dlt(items.id)}>
                      <ImBin color="red" />
                    </Button>
                  </Td>
                </Tr>
              ))}
              <Tr>
                <Th></Th>
                <Th></Th>
                <Th></Th>
                <Th textAlign={"right"} fontSize="lg">
                  Subtotal : ${price}
                </Th>
              </Tr>
            </Tbody>
          </Table>
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
        bg="
#2594af"
        _hover={{ bg: "#03a9f4" }}
        color="white"
        w={["100%", "100%", "100%", "15%"]}
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
      <Flex gap="30%" marginLeft={'2rem'}>
        <NavLink to="/">
          <Button w={["100%", "100%", "100%", "100%"]}>
            <AiFillLock />
            Continue Shopping
          </Button>
        </NavLink>
        <Button
          bg={"#333"}
          color="white"
          _hover={{ backgroundColor: "#00857c", color: "black" }}
          w={["100%", "100%", "100%", "15%"]}
        >
          <AiFillLock />
          Checkout Securely Now
        </Button>
      </Flex>
      <br />

      <br />
      <CartSuggestion />
    </Box>
  );
};
