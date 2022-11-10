import { Box, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import style from "../css/style.module.css";


const BathBodyOption = () => {
  return (
    <div>
        <Grid className={style.BathBodyOptionMainDiv} display={"flex"} justifyContent="space-around" textAlign="left" fontWeight={400}>
        <Box>
            <Text><b>Popular Categories</b></Text>
            <Text>View All Bath & Body</Text>
            <Text>New In</Text>
            <Text>Clean Bath & Body</Text>
            <Text>5* Rated Products</Text>
            <Text>Travel Sizes</Text>
            <Text>At Home Spa</Text>
            <Text>Deodorants</Text>
            <Text>Gifts & Sets</Text>
            <Text>Oral Care</Text>
            <Text>Mom & Baby</Text>
        </Box>
        <Box>
            <Text><b>Bath & Shower</b></Text>
            <Text>Baths Oils/Soak</Text>
            <Text>Bath Salts</Text>
            <Text>Body Washes</Text>
            <Text>Cleansing Bars</Text>
            <Text>Exfoliators</Text>
        </Box>
        <Box>
            <Text><b>Self Tanners</b></Text>
            <Text>Accessories</Text>
            <Text>Pre-Tan Preparation</Text>
            <Text>Body Tanners</Text>
            <Text>Post Tanning</Text>
        </Box>
        <Box>
            <Text><b>Moisturizers</b></Text>
            <Text>Balms</Text>
            <Text>Butters</Text>
            <Text>Creams</Text>
            <Text>Lotions</Text>
            <Text>Oils</Text>
        </Box>
        <Box>
            <Text><b>Targeted Care</b></Text>
            <Text>Bust</Text>
            <Text>Cellulite</Text>
            <Text>Dry Skin</Text>
            <Text>Hair Removal</Text>
            <Text>Hand & Foot Care</Text>
            <Text>Hand Soap, Sanitizers & Creams</Text>
            <Text>Legs</Text>
            <Text>Slimming & Sculpting</Text>
            <Text>Stretch Marks</Text>
            <Text>Sunscreen</Text>
        </Box>
        </Grid>
    </div>
  )
}


export default BathBodyOption




