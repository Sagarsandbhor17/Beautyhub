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

const cartData = [
  {
    id: "1",
    price: 39.99,
    currency: "GBP",
    name: "Lipstick",
    description: "Tan, 40mm",
    quantity: 3,
    imageUrl:
      "https://s1.thcdn.com//productimg/70/70/13928053-1374989939211650.jpg",
  },
  {
    id: "1",
    price: 39.99,
    currency: "GBP",
    name: "Lipstick",
    description: "Tan, 40mm",
    quantity: 3,
    imageUrl:
      "https://s1.thcdn.com//productimg/70/70/13928053-1374989939211650.jpg",
  },
  {
    id: "1",
    price: 39.99,
    currency: "GBP",
    name: "Lipstick",
    description: "Tan, 40mm",
    quantity: 3,
    imageUrl:
      "https://s1.thcdn.com//productimg/70/70/13928053-1374989939211650.jpg",
  },
];

export const Cart = () => (
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
    <Flex gap="60%" w={["100%", "100%", "100%", "100%"]}>
      <Heading textAlign={"left"} fontWeight="normal">
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
            {cartData.map((items) => (
              <Tr>
                <Td>
                  <Image src={items.imageUrl} />
                </Td>
                <Td>${items.price}</Td>
                <Td>
                  {" "}
                  <Button>-</Button>
                  <Button disabled borderRadius="none" bg="white">
                    1
                  </Button>
                  <Button>+</Button>
                </Td>
                <Td>${"72.00"}</Td>
                <Td>
                  <Button>X</Button>
                </Td>
              </Tr>
            ))}
            <Tr>
              <Th></Th>
              <Th></Th>
              <Th></Th>
              <Th textAlign={"right"}>Subtotal : ${"123"}</Th>
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
    <Input
      placeholder="Got a coupon code.Enter it here"
      border="1px solid black"
      w={["60%", "60%", "60%", "30%"]}
    />
    <Button borderRadius={"none"} bg="#cecece">
      Add
    </Button>
    <br />
    <br />
    <Flex gap="30%">
      <Button w={["100%", "100%", "100%", "15%"]}>
        <AiFillLock />
        Continue Shopping
      </Button>
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
