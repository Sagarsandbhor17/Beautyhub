import { Box, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import style from "../css/style.module.css";


const SkinCare = () => {
  return (
    <div>
        <Grid className={style.SkinCareOptionMainDiv} display={"flex"} justifyContent="space-around" textAlign="left" fontWeight={400}>
        <Box>
            <Text><b>Popular Categories</b></Text>
            <Text>View All Skin Care</Text>
            <Text>New In</Text>
            <Text>Clean Skincare</Text>
            <Text>5* Rated Products</Text>
            <Text>Gifts & Sets</Text>
            <Text>Supersizes & Duo</Text>
            <Text>Travel Sizes</Text>
        </Box>
        <Box>
            <Text><b>By Product Type</b></Text>
            <Text>Cleansers</Text>
            <Text>Moisturizers</Text>
            <Text>Serums</Text>
            <Text>Eye Serum</Text>
            <Text>Exfoliators</Text>
            <Text>Masks</Text>
            <Text>Eye Care</Text>
            <Text>Toners</Text>
            <Text>Lip Care</Text>
            <Text>Oils</Text>
            <Text>Treatments</Text>
            <Text>Mists</Text>
            <Text>Self Tanning</Text>
            <Text>Tools</Text>
        </Box>
        <Box>
            <Text><b>By Ingredient</b></Text>
            <Text>Vitamin C</Text>
            <Text>AHA</Text>
            <Text>Caffeine</Text>
            <Text>Retinol</Text>
            <Text>Hyaluronic Acid</Text>
            <Text>Niacinamide</Text>
            <Text>Lactic Acid</Text>
            <Text>Salicylic Acid</Text>
            <Text>Glycolic Acid</Text>
            <Text>Azelaic Acid</Text>
        </Box>
        <Box>
            <Text><b>By Specific Concern</b></Text>
            <Text>Acne & Blemishes</Text>
            <Text>Fine Lines & Wrinkles</Text>
            <Text>Dark Circles</Text>
            <Text>Dry Skin</Text>
            <Text>Dullness</Text>
            <Text>Lack of Firmness</Text>
            <Text>Pigmentation</Text>
            <Text>Pregnancy Skincare</Text>
            <Text>Redness & Rosacea</Text>
            <Text>Sensitive Skin</Text>
            <Text>Visible Pores</Text>
        </Box>
        <Box>
            <Text><b>Sunscreen & Suncare</b></Text>
            <Text>Take The SPF Quiz</Text>
            <Text>SPF 30 and over</Text>
            <Text>SPF 50 and over</Text>
            <Text>After Sun</Text>
            <Text>Tinted</Text>
            <Text>Mineral</Text>
            <Text>Eye Protection</Text>
        </Box>
        </Grid>
    </div>
  )
}


export default SkinCare