import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const LeftDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Text ref={btnRef} cursor="pointer" onClick={onOpen}>
        <AiOutlineMenu />
      </Text>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent display={["block","block","none","none"]}>
          <DrawerCloseButton
            borderColor="transparent"
            fontWeight={"bold"}
            fontSize={18}
            mt="1"
          />
          <DrawerHeader fontSize={28}>
            <Link to="/">
              <AiFillHome />
            </Link>
          </DrawerHeader>

          <DrawerBody>
            <Text>Brand</Text>
            <hr />
            <Box display={"grid"} gap="5" mt="4" cursor={"pointer"}>
              <Box display={"flex"} justifyContent="space-between">
                <Text>Brands</Text>
                <Text fontSize={"20"} fontWeight="bold" mt="-1">
                  {">"}
                </Text>
              </Box>

              <Box display={"flex"} justifyContent="space-between">
                <Text>Holiday</Text>
                <Text fontSize={"20"} fontWeight="bold" mt="-1">
                  {">"}
                </Text>
              </Box>
              <Box display={"flex"} justifyContent="space-between">
                <Text>Sale</Text>
                <Text fontSize={"20"} fontWeight="bold" mt="-1">
                  {">"}
                </Text>
              </Box>
              <Box display={"flex"} justifyContent="space-between">
                <Text>Skin Care</Text>
                <Text fontSize={"20"} fontWeight="bold" mt="-1">
                  {">"}
                </Text>
              </Box>
              <Box display={"flex"} justifyContent="space-between">
                <Text>Hair</Text>
                <Text fontSize={"20"} fontWeight="bold" mt="-1">
                  {">"}
                </Text>
              </Box>
              <Box display={"flex"} justifyContent="space-between">
                <Text>Makeup</Text>
                <Text fontSize={"20"} fontWeight="bold" mt="-1">
                  {">"}
                </Text>
              </Box>
              <Box display={"flex"} justifyContent="space-between">
                <Text>Bath & Body</Text>
                <Text fontSize={"20"} fontWeight="bold" mt="-1">
                  {">"}
                </Text>
              </Box>
              <Box display={"flex"} justifyContent="space-between">
                <Text>Fragrance</Text>
                <Text fontSize={"20"} fontWeight="bold" mt="-1">
                  {">"}
                </Text>
              </Box>
              <Box display={"flex"} justifyContent="space-between">
                <Text>Self-Care</Text>
                <Text fontSize={"20"} fontWeight="bold" mt="-1">
                  {">"}
                </Text>
              </Box>
              <Box display={"flex"} justifyContent="space-between">
                <Text>Tools</Text>
                <Text fontSize={"20"} fontWeight="bold" mt="-1">
                  {">"}
                </Text>
              </Box>
              <Box display={"flex"} justifyContent="space-between">
                <Text>New & Trending</Text>
                <Text fontSize={"20"} fontWeight="bold" mt="-1">
                  {">"}
                </Text>
              </Box>
              <Box display={"flex"} justifyContent="space-between">
                <Text>Build a Routine</Text>
                <Text fontSize={"20"} fontWeight="bold" mt="-1">
                  {">"}
                </Text>
              </Box>
              <Box display={"flex"} justifyContent="space-between">
                <Text>Blog</Text>
                <Text fontSize={"20"} fontWeight="bold" mt="-1">
                  {">"}
                </Text>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default LeftDrawer;
