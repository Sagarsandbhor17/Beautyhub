import { Box, Button, Grid, Text, useToast } from "@chakra-ui/react";
import React from "react";
import style from "../css/style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../Redux/userRedux/login.action";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import { useEffect } from "react";

const AccountOption = () => {
  const { Token } = useSelector((store) => store.UserLogin.data);
  const [tokenData, setTokenData] = useState({});
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (Token) {
      setTokenData(jwt_decode(Token));
    }
  }, []);

  const Logout = () => {
    toast({
      title: "You have logout successfully",
      status: "success",
      duration: 1200,
      isClosable: true,
      position: "top",
    });
    dispatch(userLogout());
    navigate("/");
  };

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
          <Link to="/login">
            <Button
              display={Token ? "none" : "block"}
              bg={"#2e3337"}
              color="#ffffff"
              w={"200px"}
              _hover={{ bg: "#48c9b0", color: "black" }}
            >
              LOGIN
            </Button>
          </Link>
          {/* -------------------- (Profile after LogIn) ---------- */}
          <Text
            display={Token ? "block" : "none"}
            fontSize="13px"
            fontWeight={500}
            p="2"
            textAlign={"center"}
            bg={"#ffffff"}
            border="1px"
            borderRadius={5}
            cursor="auto"
            w={"210px"}
          >
            Hello 😊
            <hr />
            {tokenData.name}
            <br />
            {tokenData.email}
          </Text>
          <br />

          {/* -------------------- (Logout) ---------- */}
          <Button
            onClick={Logout}
            display={Token ? "block" : "none"}
            mt={"20px"}
            bg={"#2e3337"}
            color="#ffffff"
            border="1px"
            w={"200px"}
            _hover={{ bg: "#48c9b0", color: "black" }}
          >
            Logout
          </Button>

          {/* ----------------------------------- */}
          <Link to="/signup">
            <Button
              display={Token ? "none" : "block"}
              mt={"20px"}
              bg={"#ffffff"}
              border="1px"
              w={"200px"}
            >
              REGISTER
            </Button>
          </Link>
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
