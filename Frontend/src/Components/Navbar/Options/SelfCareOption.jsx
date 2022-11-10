import { Box, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import style from "../css/style.module.css";


const SelfCareOption = () => {
  return (
    <div>
        <Grid className={style.SelfCareOptionMainDiv} display={"flex"} justifyContent="space-around" textAlign="left" fontWeight={400}>
        <Box>
            <Text><b>Popular Categories</b></Text>
            <Text>Self Care</Text>
            <Text>New In</Text>
            <Text>5* Rated Products</Text>
            <Text>At-Home Spa</Text>
            <Text>View All Wellness Products</Text>
        </Box>
        <Box>
            <Text><b>Sexual Wellness</b></Text>
            <Text>Devices</Text>
            <Text>Skin Care</Text>
        </Box>
        <Box>
            <Text><b>Supplements</b></Text>
            <Text>Skin</Text>
            <Text>Hair</Text>
            <Text>Immune Boosting</Text>
            <Text>Health & Wellbeing</Text>
            <Text>Weight Loss</Text>
        </Box>
        <Box>
            <Text><b>Clean Beauty</b></Text>
            <Text>Clean Skincare</Text>
            <Text>Clean Haircare</Text>
            <Text>Clean Makeup</Text>
            <Text>Clean Bath & Body</Text>
        </Box>
        </Grid>
    </div>
  )
}


export default SelfCareOption
