import { Box, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import style from "../css/style.module.css";


const FragranceOption = () => {
  return (
    <div>
        <Grid className={style.FragranceOptionMainDiv} display={"flex"} justifyContent="space-around" textAlign="left" fontWeight={400}>
        <Box>
            <Text><b>Popular Categories</b></Text>
            <Text>View All Fragrance</Text>
            <Text>New In</Text>
            <Text>5* Rated Products</Text>
        </Box>
        <Box>
            <Text><b>Top Brands</b></Text>
            <Text>NEOM Organics</Text>
            <Text>Glasshouse Fragrances</Text>
            <Text>KORRES</Text>
            <Text>NEST Fragrances</Text>
            <Text>Molton Brown</Text>
        </Box>
        <Box>
            <Text><b>Personal Fragrance</b></Text>
            <Text>Perfume</Text>
            <Text>Eau de Toilette</Text>
            <Text>Body Spray</Text>
            <Text>For Her</Text>
            <Text>For Him</Text>
        </Box>
        <Box>
            <Text><b>Home Fragrance</b></Text>
            <Text>Scented Candles</Text>
            <Text>Diffusers</Text>
            <Text>Aromatherapy</Text>
            <Text>Pillow Mists</Text>
            <Text>Room Sprays</Text>
        </Box>
        </Grid>
    </div>
  )
}


export default FragranceOption
