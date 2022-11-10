import { Box, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import style from "../css/style.module.css";
import saleImg1 from "../Image/saleImg1.png"
import saleImg2 from "../Image/saleImg2.png"
import saleImg3 from "../Image/saleImg3.png"
import saleImg4 from "../Image/saleImg4.png"
import saleImg5 from "../Image/saleImg5.png"

const SaleOption = () => {
  return (
    <div>
        <Grid 
        className={style.SaleOptionMainDiv} 
        >

        <Box>
        <Image src={saleImg1} alt="saleImg1"/>
        <Text>Sale</Text>
        </Box>
        <Box>
        <Text m="auto" pt="6" ml="3" mb={"4px"} pb="5">Key Workers Discount</Text>
        </Box>
        <Box>
        <Text m="auto" pt="6" ml="3" mb={"4px"} pb="5">Featured Offers</Text>
        </Box>
        <Box>
        <Image src={saleImg2} alt="saleImg2"/>
        <Text>Refer A Friend</Text>
        </Box>
        <Box>
        <Image src={saleImg3} alt="saleImg3"/>
        <Text>Clearance</Text>
        </Box>
        <Box>
        <Image src={saleImg4} alt="saleImg4"/>
        <Text>Gifts and Sets</Text>
        </Box>
        <Box>
        <Image src={saleImg5} alt="saleImg5"/>
        <Text>All Coupons</Text>
        </Box>
        </Grid>
    </div>
  )
}


export default SaleOption


































