import {
  Box,
  Text,
  Button,
  Image,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
  Heading,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { TbTruckDelivery, TbRefresh, TbHelp } from "react-icons/tb";
import { MdGpsFixed } from "react-icons/md";
import { FaCookie } from "react-icons/fa";
import React from "react";
import facebook from "../Logos/facebook_icon.png";
import instagram from "../Logos/instagram_icon.png";
import twitter from "../Logos/twitter_icon.png";
import snapchat from "../Logos/snapchat_icon.png";
import pinterest from "../Logos/pintrest_icon.png";
import american from "../Logos/american-express.png";
import diners from "../Logos/diners-club.png";
import visa from "../Logos/visa.png";
import discover from "../Logos/discover.png";

const Footer = () => {
  return (
    <Box mb="1rem">
      <Box mt="4rem" h="1px" bgColor="black"></Box>
      <SimpleGrid columns={2} w="90%" m="auto" pl="2.5%" pr="2.5%" mt="5rem">
        <Box textAlign="left">
          <Text pb=".5rem" fontWeight="600">
            Sign up to our email list and receive 20% off your next order
          </Text>
          <Button
            bgColor="black"
            color="white"
            fontWeight="200"
            borderRadius="0px"
          >
            Sign Up
          </Button>
        </Box>
        <Box textAlign="left" color="black">
          <Text pb=".5rem" fontWeight="600">
            Connect with us
          </Text>
          <Box display="flex" gap="10">
            <Image boxSize="3vw" src={facebook} />
            <Image boxSize="3vw" src={twitter} />
            <Image boxSize="3vw" src={snapchat} />
            <Image boxSize="3vw" src={pinterest} />
            <Image boxSize="3vw" src={instagram} />
          </Box>
        </Box>
      </SimpleGrid>
      <Box
        display="flex"
        gap="10"
        w="90%"
        m="auto"
        pl="2.5%"
        pr="2.5%"
        mt="2rem"
        fontWeight="200"
      >
        <Box textAlign="left" w="50vw" >
          <Box mb="2rem" h="2.5px" bgColor="grey"></Box>
          <Text pb=".5rem" fontWeight="600">
            Help & Information
          </Text>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={PhoneIcon} fontSize="1.3rem" color="black.800" />
              Customer Service
            </ListItem>
            <ListItem>
              <ListIcon
                as={TbTruckDelivery}
                fontSize="1.3rem"
                color="black.800"
              />
              Delivery Information
            </ListItem>
            <ListItem>
              <ListIcon as={TbRefresh} fontSize="1.3rem" color="black.800" />
              Return &nbsp; & &nbsp; Refund
            </ListItem>
            <ListItem>
              <ListIcon as={TbHelp} fontSize="1.3rem" color="black.800" />
              Help Center
            </ListItem>
            <ListItem>
              <ListIcon as={MdGpsFixed} fontSize="1.3rem" color="black.800" />
              Track my order
            </ListItem>
            <Text>Accessiblity</Text>
            <ListItem>
              <ListIcon as={FaCookie} fontSize="1.3rem" color="black.800" />
              Cookie Setting
            </ListItem>
          </List>
        </Box>
        <Box w="20vw" textAlign="left">
          <Box mb="2rem" h="2.5px" bgColor="grey"></Box>
          <Text pb=".5rem" fontWeight="600">
            About SkinStore
          </Text>
          <List>
            <ListItem>Key Workers Discount</ListItem>
            <ListItem>About Us</ListItem>
            <ListItem>Affilate Program</ListItem>
            <ListItem>Brand Directory</ListItem>
            <ListItem>Coupon Codes</ListItem>
            <ListItem>Refer A Friend</ListItem>
            <ListItem>Student Discount</ListItem>
            <ListItem>Join SkinStore Experts</ListItem>
          </List>
        </Box>
        <Box w="20vw" textAlign="left">
          <Box mb="2rem" h="2.5px" bgColor="grey"></Box>
          <Text pb=".5rem" fontWeight="600">
            Legal
          </Text>
          <List>
            <ListItem>Cookie Information</ListItem>
            <ListItem>Privacy Policy</ListItem>
            <ListItem>Terms & Condition</ListItem>
            <ListItem>Modern Slavery Statement</ListItem>
            <ListItem>Coupon Codes</ListItem>
          </List>
        </Box>
        <Box w="20vw" textAlign="left">
          <Box mb="2rem" h="2.5px" bgColor="grey"></Box>
          <Text pb=".5rem" fontWeight="600">
            How To Contact Us
          </Text>
          <List>
            <ListItem>Message Us</ListItem>
            <ListItem>Free Beauty Consultations</ListItem>
            <ListItem>Terms & Condition</ListItem>
          </List>
        </Box>
      </Box>
      <Box mt="4rem" h="1px" mb="3rem" bgColor="black"></Box>
      <Box>
        <SimpleGrid
          columns={2}
          w="90%"
          m="auto"
          pl="2.5%"
          pr="2.5%"
          mt="2.2rem"
        >
          <Box textAlign="left">
            <Heading>THG</Heading>
            <Text display="flex">2022 © The Hut.com Ltd.</Text>
          </Box>
          <Box textAlign="left">
            <Text pb=".5rem" fontWeight="600">
              Pay Securely
            </Text>
            <Box display="flex" gap="10">
              <Image width="5vw" height="3vw" src={american} />
              <Image width="5vw" height="3vw" src={discover} />
              <Image width="5vw" height="3vw" src={visa} />
              <Image width="5vw" height="3vw" src={diners} />
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Footer;
