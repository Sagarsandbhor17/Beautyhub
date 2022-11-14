import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Grid,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import LEFTnavDATA from "./leftNavData.json";
import usaFlag from "../Image/usaFlag.png";

const LeftDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [holyday, setHolyday] = useState(false);
  const [sale, setSale] = useState(false);
  const [skinCare, setSkinCare] = useState(false);
  const [hair, setHair] = useState(false);
  const [makeup, setMakeup] = useState(false);
  const [bathBody, setBathBody] = useState(false);
  const [fragrance, setFragrance] = useState(false);
  const [selfCare, setSelfCare] = useState(false);
  const [tools, setTools] = useState(false);
  const [newTrending, setNewTrending] = useState(false);
  const [buildRoutine, setBuildRoutine] = useState(false);
  const [blog, setBlog] = useState(false);

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
        <DrawerContent display={["block", "block", "none", "none"]}>
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
            <Text>Brands</Text>
            <hr />
            <Box height={"620px"}>
              <Box
                overflow={"auto"}
                display={"grid"}
                gap="5"
                mt="4"
                cursor={"pointer"}
              >
                {/* -----------------(HolyDay)------------------ */}
                <Box
                  onClick={() => setHolyday(!holyday)}
                  display={"flex"}
                  justifyContent="space-between"
                >
                  <Text>Holiday</Text>
                  <Text
                    style={holyday ? { rotate: "90deg" } : { rotate: "0deg" }}
                    fontSize={"20"}
                    fontWeight="bold"
                    mt="-1"
                  >
                    <ChevronRightIcon />
                  </Text>
                </Box>
                {LEFTnavDATA.holyday.map((el, i) => (
                  <Text
                    display={holyday ? "block" : "none"}
                    fontSize={14}
                    mt="-3"
                    pl="4"
                    _hover={{ bg: "#989898" }}
                    key={i}
                  >
                    {el}
                  </Text>
                ))}
                {/* -----------(Sale)------------- */}
                <Box
                  onClick={() => setSale(!sale)}
                  display={"flex"}
                  justifyContent="space-between"
                >
                  <Text>Sale</Text>
                  <Text
                    style={sale ? { rotate: "90deg" } : { rotate: "0deg" }}
                    fontSize={"20"}
                    fontWeight="bold"
                    mt="-1"
                  >
                    <ChevronRightIcon />
                  </Text>
                </Box>
                {LEFTnavDATA.sale.map((el, i) => (
                  <Text
                    fontSize={14}
                    display={sale ? "block" : "none"}
                    pl="4"
                    mt="-1"
                    _hover={{ bg: "#989898" }}
                    key={i}
                  >
                    {el}
                  </Text>
                ))}
                {/* -----------(Skin Care)------------- */}{" "}
                <Box display={"flex"} justifyContent="space-between">
                  <Link to="skin">
                    <Text w="100px">Skin Care</Text>
                  </Link>
                  <Text
                    onClick={() => setSkinCare(!skinCare)}
                    style={skinCare ? { rotate: "90deg" } : { rotate: "0deg" }}
                    fontSize={"20"}
                    fontWeight="bold"
                    mt="-1"
                  >
                    <ChevronRightIcon />
                  </Text>
                </Box>
                {LEFTnavDATA.skincare.map((el, i) => (
                  <Text
                    fontSize={14}
                    display={skinCare ? "block" : "none"}
                    pl="4"
                    mt="-1"
                    _hover={{ bg: "#989898" }}
                    key={i}
                  >
                    {el}
                  </Text>
                ))}
                {/* -----------(Hair)------------- */}
                <Box
                  onClick={() => setHair(!hair)}
                  display={"flex"}
                  justifyContent="space-between"
                >
                  <Text>Hair</Text>
                  <Text
                    style={hair ? { rotate: "90deg" } : { rotate: "0deg" }}
                    fontSize={"20"}
                    fontWeight="bold"
                    mt="-1"
                  >
                    <ChevronRightIcon />
                  </Text>
                </Box>
                {LEFTnavDATA.hair.map((el, i) => (
                  <Text
                    fontSize={14}
                    display={hair ? "block" : "none"}
                    pl="4"
                    mt="-1"
                    _hover={{ bg: "#989898" }}
                    key={i}
                  >
                    {el}
                  </Text>
                ))}
                {/* -----------(Makeup)------------- */}
                <Box
                  onClick={() => setMakeup(!makeup)}
                  display={"flex"}
                  justifyContent="space-between"
                >
                  <Text>Makeup</Text>
                  <Text
                    style={makeup ? { rotate: "90deg" } : { rotate: "0deg" }}
                    fontSize={"20"}
                    fontWeight="bold"
                    mt="-1"
                  >
                    <ChevronRightIcon />
                  </Text>
                </Box>
                {LEFTnavDATA.makeup.map((el, i) => (
                  <Text
                    fontSize={14}
                    display={makeup ? "block" : "none"}
                    pl="4"
                    mt="-1"
                    _hover={{ bg: "#989898" }}
                    key={i}
                  >
                    {el}
                  </Text>
                ))}
                {/* -----------(Bath & Body)------------- */}
                <Box
                  onClick={() => setBathBody(!bathBody)}
                  display={"flex"}
                  justifyContent="space-between"
                >
                  <Text>Bath & Body</Text>
                  <Text
                    style={bathBody ? { rotate: "90deg" } : { rotate: "0deg" }}
                    fontSize={"20"}
                    fontWeight="bold"
                    mt="-1"
                  >
                    <ChevronRightIcon />
                  </Text>
                </Box>
                {LEFTnavDATA.bathbody.map((el, i) => (
                  <Text
                    fontSize={14}
                    display={bathBody ? "block" : "none"}
                    pl="4"
                    mt="-1"
                    _hover={{ bg: "#989898" }}
                    key={i}
                  >
                    {el}
                  </Text>
                ))}
                {/* -----------(Fragrance)------------- */}
                <Box
                  onClick={() => setFragrance(!fragrance)}
                  display={"flex"}
                  justifyContent="space-between"
                >
                  <Text>Fragrance</Text>
                  <Text
                    style={fragrance ? { rotate: "90deg" } : { rotate: "0deg" }}
                    fontSize={"20"}
                    fontWeight="bold"
                    mt="-1"
                  >
                    <ChevronRightIcon />
                  </Text>
                </Box>
                {LEFTnavDATA.fragrance.map((el, i) => (
                  <Text
                    fontSize={14}
                    display={fragrance ? "block" : "none"}
                    pl="4"
                    mt="-1"
                    _hover={{ bg: "#989898" }}
                    key={i}
                  >
                    {el}
                  </Text>
                ))}
                {/* -----------(Self-Care)------------- */}
                <Box
                  onClick={() => setSelfCare(!selfCare)}
                  display={"flex"}
                  justifyContent="space-between"
                >
                  <Text>Self-Care</Text>
                  <Text
                    style={selfCare ? { rotate: "90deg" } : { rotate: "0deg" }}
                    fontSize={"20"}
                    fontWeight="bold"
                    mt="-1"
                  >
                    <ChevronRightIcon />
                  </Text>
                </Box>
                {LEFTnavDATA.selfcare.map((el, i) => (
                  <Text
                    fontSize={14}
                    display={selfCare ? "block" : "none"}
                    pl="4"
                    mt="-1"
                    _hover={{ bg: "#989898" }}
                    key={i}
                  >
                    {el}
                  </Text>
                ))}
                {/* -----------(Tools)------------- */}
                <Box
                  onClick={() => setTools(!tools)}
                  display={"flex"}
                  justifyContent="space-between"
                >
                  <Text>Tools</Text>
                  <Text
                    style={tools ? { rotate: "90deg" } : { rotate: "0deg" }}
                    fontSize={"20"}
                    fontWeight="bold"
                    mt="-1"
                  >
                    <ChevronRightIcon />
                  </Text>
                </Box>
                {LEFTnavDATA.tools.map((el, i) => (
                  <Text
                    fontSize={14}
                    display={tools ? "block" : "none"}
                    pl="4"
                    mt="-1"
                    _hover={{ bg: "#989898" }}
                    key={i}
                  >
                    {el}
                  </Text>
                ))}
                {/* -----------(New & Trending)------------- */}
                <Box
                  onClick={() => setNewTrending(!newTrending)}
                  display={"flex"}
                  justifyContent="space-between"
                >
                  <Text>New & Trending</Text>
                  <Text
                    style={
                      newTrending ? { rotate: "90deg" } : { rotate: "0deg" }
                    }
                    fontSize={"20"}
                    fontWeight="bold"
                    mt="-1"
                  >
                    <ChevronRightIcon />
                  </Text>
                </Box>
                {LEFTnavDATA.newtrending.map((el, i) => (
                  <Text
                    fontSize={14}
                    display={newTrending ? "block" : "none"}
                    pl="4"
                    mt="-1"
                    _hover={{ bg: "#989898" }}
                    key={i}
                  >
                    {el}
                  </Text>
                ))}
                {/* -----------(Build a Routine)------------- */}
                <Box
                  onClick={() => setBuildRoutine(!buildRoutine)}
                  display={"flex"}
                  justifyContent="space-between"
                >
                  <Text>Build a Routine</Text>
                  <Text
                    style={
                      buildRoutine ? { rotate: "90deg" } : { rotate: "0deg" }
                    }
                    fontSize={"20"}
                    fontWeight="bold"
                    mt="-1"
                  >
                    <ChevronRightIcon />
                  </Text>
                </Box>
                {LEFTnavDATA.buildroutine.map((el, i) => (
                  <Text
                    fontSize={14}
                    display={buildRoutine ? "block" : "none"}
                    pl="4"
                    mt="-1"
                    _hover={{ bg: "#989898" }}
                    key={i}
                  >
                    {el}
                  </Text>
                ))}
                {/* -----------(Blog)------------- */}
                <Box
                  onClick={() => setBlog(!blog)}
                  display={"flex"}
                  justifyContent="space-between"
                >
                  <Text>Blog</Text>
                  <Text
                    style={blog ? { rotate: "90deg" } : { rotate: "0deg" }}
                    fontSize={"20"}
                    fontWeight="bold"
                    mt="-1"
                  >
                    <ChevronRightIcon />
                  </Text>
                </Box>
                {LEFTnavDATA.blog.map((el, i) => (
                  <Text
                    fontSize={14}
                    display={blog ? "block" : "none"}
                    pl="4"
                    mt="-1"
                    _hover={{ bg: "#989898" }}
                    key={i}
                  >
                    {el}
                  </Text>
                ))}
              </Box>
              {/* --------------------------- (First row) ---------------------- */}

              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent="space-between"
                mt="7"
                w="90%"
                fontSize="14"
              >
                <Box display={"flex"} alignItems="center">
                  <Image w="5" mr="1" src={usaFlag} alt="usaFlag" />
                  <Text>us-USD</Text>
                </Box>
                <Text>
                  <u>
                    <b>Change</b>
                  </u>
                </Text>
              </Box>
              <Text mt="3">Help</Text>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default LeftDrawer;
