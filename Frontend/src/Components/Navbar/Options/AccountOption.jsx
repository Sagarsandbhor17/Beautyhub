import { Box, Button, Grid, Text } from "@chakra-ui/react";
import React from "react";
import style from "../css/style.module.css";

const AccountOption = () => {
  return (
    <div>
      <Grid
        className={style.AccountOptionMainDiv}
        display={"grid"}
        textAlign="left"
        fontWeight={400}
      >
        <Box
          pt={6}
          pb="4"
          bg="#f2f2f2"
          w="100%"
          pl={["5", "5", "10", "10"]}
          pr={["5", "5", "10", "10"]}
        >
          <Button
            bg={"#2e3337"}
            color="#ffffff"
            w={"200px"}
            _hover={{ bg: "#48c9b0", color: "black" }}
          >
            LOGIN
          </Button>
          <br />
          <Button mt={"20px"} bg={"#ffffff"} border="1px" w={"200px"}>
            REGISTER
          </Button>
        </Box>
        <Box bg={"#ffffff"} pb="10">
          <Text _hover={{ bg: "rgba(176, 173, 173, 0.443)" }} p="2" pl={"8"}>
            Wishlist
          </Text>
          <Text
            w="100%"
            _hover={{ bg: "rgba(176, 173, 173, 0.443)" }}
            p="2"
            pl={"8"}
          >
            Your Order
          </Text>
          <Text
            w="100%"
            _hover={{ bg: "rgba(176, 173, 173, 0.443)" }}
            p="2"
            pl={"8"}
          >
            Your Referrals
          </Text>
        </Box>
      </Grid>
    </div>
  );
};

export default AccountOption;
