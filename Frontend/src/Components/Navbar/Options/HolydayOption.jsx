import { Box, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import style from "../css/style.module.css";


const HolydayOption = () => {
  return (
    <div>
        <Grid className={style.HolydayOptionMainDiv} display={"flex"} justifyContent="space-around" textAlign="left" fontWeight={400}>
        <Box>
            <Text><b>SkinStore's Holiday Shop</b></Text>
        </Box>
        <Box>
            <Text><b>Shop all Holiday</b></Text>
        </Box>
        <Box>
            <Text><b>SkinStore's Holiday Edit</b></Text>
        </Box>
        </Grid>
    </div>
  )
}


export default HolydayOption























