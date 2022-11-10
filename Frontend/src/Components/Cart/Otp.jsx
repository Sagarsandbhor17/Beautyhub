import { Flex, FormControl, ChakraProvider, theme, Button, Heading } from "@chakra-ui/react";
import * as React from "react";
import { OTPInput } from "chakra-otp-input";

export default function Otp() {
  const handleOTPInput = (value) => {
    console.log(value);
  };

  return (
      <ChakraProvider theme={theme}>
          <Heading> OTP Verification </Heading>
      <Flex pt="48" justify="center" align="center" w="full">
        <FormControl w="60">
                  <OTPInput noInputs={6} onChange={handleOTPInput} />
                  <br/>
                  <Button bg={'#52c29d'} color="white">Verify</Button>
        </FormControl>
      </Flex>
    </ChakraProvider>
  );
}