import { Box, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import style from "../css/style.module.css";


const ToolsOption = () => {
  return (
    <div>
        <Grid className={style.ToolsOptionMainDiv} display={"flex"} justifyContent="space-around" textAlign="left" fontWeight={400}>
        <Box>
            <Text><b>Popular Categories</b></Text>
            <Text>View All Tools</Text>
            <Text>Makeup Brushes & Accessories</Text>
        </Box>
        <Box>
            <Text><b>Hair Care</b></Text>
            <Text>Hair Dryers</Text>
            <Text>Flat Irons</Text>
            <Text>Rollers & Curling Irons</Text>
            <Text>Hair Brushes</Text>
        </Box>
        <Box>
            <Text><b>Skincare</b></Text>
            <Text>LED Light Therapy</Text>
            <Text>Facial Toning</Text>
            <Text>Cleansing</Text>
            <Text>Dermabrasion</Text>
        </Box>
        </Grid>
    </div>
  )
}


export default ToolsOption

