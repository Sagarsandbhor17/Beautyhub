import React from 'react'
import {Box,Heading,Text,SimpleGrid} from "@chakra-ui/react"
import { useState } from 'react';
import style from "./Skin.module.css"
const Skin = () => {
  const [read, setRead] = useState(false)
  return (
    <Box display="flex">
      <Box>
        <Heading>Refine</Heading>
        
      </Box>
      <Box>
        <Heading>Skin Cleansers</Heading>
        <Text>
          Keep your skin clean and refreshed with our extensive range of skin
          cleansers. We have a thorough choice of cleansers, micellar waters and
          make-up removers designed to cater for each individual skin type and
          concern, from a wide range of brands. Whether you suffer from
          sensitive, oily or acne prone skin, you can achieve the results you
          require from our tailored choices. For a professional cleanse, try our
          range of premium brands such as Caudalie, Avene and Decleor. For a
          more medicated, specialized cleanse, why not check out SkinCeuticals,
          Murad or Paula's Choice? Remove dirt, grime and impurities effectively
          by ensuring one of our cleansers is incorporated into your daily skin
          care regime.
          <Text className={read ? "style.readMore" : "style.readless"}>
            not check out SkinCeuticals, Murad or Paula's Choice? Remove dirt,
            grime and impurities effectively by ensuring one of our cleansers is
            incorporated into your daily skin care regime
          </Text>
          <Text
            onClick={() => {
              setRead(false);
            }}
          >
            read ? "style.readMore" : "style.readless"
          </Text>
        </Text>
        <SimpleGrid columns={[2, null, 3]} spacing="40px">
          <Box bg="tomato" height="80px"></Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Skin