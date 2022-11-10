import { Box, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import style from "../css/style.module.css";


const MakeupOption = () => {
  return (
    <div>
        <Grid className={style.MakeupOptionMainDiv} display={"flex"} justifyContent="space-around" textAlign="left" fontWeight={400}>
        <Box>
            <Text><b>Popular Categories</b></Text>
            <Text>View All Cosmetics</Text>
            <Text>New In</Text>
            <Text>Clean Makeup</Text>
            <Text>5* Rated Products</Text>
            <Text>Gifts & Sets</Text>
            <Text>Brushes & Applicators</Text>
            <Text>Makeup palettes</Text>
            <Text>Nails</Text>
        </Box>
        <Box>
            <Text><b>Eyes</b></Text>
            <Text>Eye Liners</Text>
            <Text>Lash & Brow Enhancers</Text>
            <Text>Eye Shadows</Text>
            <Text>Mascaras</Text>
            <Text>Brow Pencils</Text>
        </Box>
        <Box>
           <Text><b>Face</b></Text>
           <Text>BB & CC Cream</Text>
           <Text>Blushers</Text>
           <Text>Bronzers</Text>
           <Text>Color Correctors</Text>
           <Text>Concealers</Text>
           <Text>Contour</Text>
           <Text>Face Powders</Text>
           <Text>Foundations</Text>
           <Text>Highlighters</Text>
           <Text>Makeup Removers</Text>
           <Text>Makeup Setting Spray</Text>
           <Text>Primers</Text>
           <Text>Tinted Moisturizer</Text>
        </Box>
        <Box>
            <Text><b>Lips</b></Text>
            <Text>Lipsticks</Text>
            <Text>Lip Balms</Text>
            <Text>Lip Glosses</Text>
            <Text>Lip Liners</Text>
            <Text>Lip Plumpers</Text>
            <Text>Liquid Lipsticks</Text>
        </Box>
        </Grid>
    </div>
  )
}


export default MakeupOption




