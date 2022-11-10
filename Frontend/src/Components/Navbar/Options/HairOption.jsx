import { Box, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import style from "../css/style.module.css";


const HairOption = () => {
  return (
    <div>
        <Grid className={style.HairOptionMainDiv} display={"flex"} justifyContent="space-around" textAlign="left" fontWeight={400}>
        <Box>
            <Text><b>Popular Categories</b></Text>
            <Text>View All Hair Care</Text>
            <Text>New In</Text>
            <Text>Clean Hair Care</Text>
            <Text>5* Rated Products</Text>
            <Text>Gifts & Sets</Text>
            <Text>Travel Sizes</Text>
            <Text>Supersize & Duos</Text>
        </Box>
        <Box>
            <Text><b>Product Type</b></Text>
            <Text>Shampoo</Text>
            <Text>Conditioners</Text>
            <Text>Hair Treatments</Text>
            <Text>Hair Masks</Text>
            <Text>Hair Oils</Text>
            <Text>Hair Sprays</Text>
            <Text>Hair Styling</Text>
            <Text>Hair Thinning & Loss</Text>
            <Text>Hair Color Treatments</Text>
            <Text>Hair Supplements</Text>
            <Text>Hair Brushes & Combs</Text>
        </Box>
        <Box>
            <Text><b>Hair Type</b></Text>
            <Text>Anti-Dandruff & Scalp Care</Text>
            <Text>Coarse & Textured Hair</Text>
            <Text>Colored Hair</Text>
            <Text>Curly & Wavy Hair</Text>
            <Text>Damaged Hair</Text>
            <Text>Dry Hair</Text>
            <Text>Fine Hair</Text>
            <Text>Oily Hair</Text>
        </Box>
        <Box>
            <Text><b>Electrical</b></Text>
            <Text>Flat Irons</Text>
            <Text>Hair Dryers</Text>
            <Text>Rollers & Curling Tongs</Text>
        </Box>
        <Box>
            <Text><b>Hair Removal</b></Text>
            <Text>Hair Removal Devices</Text>
            <Text>Hair Removal Products</Text>
            <Text>Men's Shaving Products</Text>
        </Box>
        </Grid>
    </div>
  )
}


export default HairOption





