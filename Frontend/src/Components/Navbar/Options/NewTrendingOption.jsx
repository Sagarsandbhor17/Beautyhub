import { Box, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import style from "../css/style.module.css";


const NewTrendingOption = () => {
  return (
    <div>
        <Grid className={style.NewTrendingOptionMainDiv} display={"flex"} justifyContent="space-around" textAlign="left" fontWeight={400}>
        <Box>
            <Text><b>Latest brands</b></Text>
            <Text>Ellis Brooklyn</Text>
            <Text>Act + Acre</Text>
            <Text>Rituals</Text>
            <Text>Juliette Has a Gun</Text>
            <Text>Chris Collins</Text>
            <Text>Cire Trudon</Text>
            <Text>Carrière Frères</Text>
            <Text>Alurx</Text>
            <Text>Lumira</Text>
            <Text>Hermetica</Text>
            <Text>Veronique Gabai</Text>
            <Text>Liquides Imaginaires</Text>
            <Text>Arquiste Parfumeur</Text>
            <Text>David Mallett</Text>
        </Box>
        <Box>
            <Text><b>View All New</b></Text>
            <Text>New Skin Care</Text>
            <Text>New Makeup</Text>
            <Text>New Hair Care</Text>
            <Text>New Bath & Body</Text>
            <Text>New Fragrance</Text>
        </Box>
        <Box>
            <Text><b>Trending Now</b></Text>
            <Text>Best of British Brands</Text>
        </Box>
        </Grid>
    </div>
  )
}


export default NewTrendingOption



