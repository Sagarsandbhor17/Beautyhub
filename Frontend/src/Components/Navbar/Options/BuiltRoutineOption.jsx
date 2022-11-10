import { Box, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import style from "../css/style.module.css";


const BuiltRoutineOption = () => {
  return (
    <div>
        <Grid className={style.BuiltRoutineOptionMainDiv} display={"flex"} justifyContent="space-around" textAlign="left" fontWeight={400}>
        <Box>
            <Text><b>Skin Type Routines</b></Text>
            <Text>Dry Skin Routine</Text>
            <Text>Normal Skin Routine</Text>
            <Text>Oily Skin Routine</Text>
            <Text>Combination Skin Routine</Text>
            <Text>Sensitive Skin Routine</Text>
        </Box>
        <Box>
            <Text><b>Build a Hair Routine</b></Text>
            <Text>Acne Routine</Text>
            <Text>Fine Lines & Wrinkles Routine</Text>
            <Text>Dark Spots & Discoloration Routine</Text>
            <Text>Redness & Rosacea Routine</Text>
            <Text>Dullness & Brightening Routine</Text>
        </Box>
        <Box>
            <Text><b>Trending Now</b></Text>
            <Text>Fine, Thinning Hair Routine</Text>
            <Text>Healthy Scalp Routine</Text>
            <Text>Colored Hair Routine</Text>
            <Text>Dry, Damaged Hair Routine</Text>
            <Text>Oily Hair Routine</Text>
            <Text>Hair Styling Routine</Text>
        </Box>
        </Grid>
    </div>
  )
}


export default BuiltRoutineOption























