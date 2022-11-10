import { StarIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, Image, ScaleFade, scaleFadeConfig, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import style from "../../Styles/Suggest.module.css"
let data = [
    {
        id: 1,
        image_link: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11653879-1004894571310312.jpg",
        name: "REN Clean Skincare Ready Steady Glow Daily ",
        price: 39.00,
        review: 2
    },
    {
        id: 2,
        image_link: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370303-1074944341868735.jpg",
        name: "EltaMD UV Clear Broad-Spectrum SPF46",
        price: 39.00,
        review: 3
    },
    {
        id: 3,
        image_link: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12357671-3524935519536208.jpg",
        name: "Alterna Caviar Anti-Aging Replenishing Moisture Shampoo ",
        price: 104.00,
        review: 7
    },
 
   
]

const CartSuggestion = () => {
    return (<div>
        <Heading textAlign={"center"}>Customers who bought this also bought:</Heading>
        <br/>
      <SimpleGrid columns={[1, 2, 3, 3]} spacing="40px" >
          {data.map(item => (<Box  w="100%"   padding={["10%","5%","5%","10%"]}>
              <Image src={item.image_link} h="60%" className={style.img} /> 
              <Text fontFamily={'sans-serif'} fontWeight="normal">{item.name}</Text>
              <Button ml="-50%"borderRadius={'none'} border="1px solid brown " bg="white" color={'brown'} _hover={{ backgroundColor: "white", color: "brown" }}>Select your Gift</Button>
              <Box w={["100%", "100%", "100%", "100%"]} justifyItems="left">
              <StarIcon color={"#fbbc04"} /> <StarIcon color={"#fbbc04"} />{" "}
              <StarIcon color={"#fbbc04"} /> <StarIcon color={"#fbbc04"} />{" "}
                  <StarIcon color={"#fbbc04"} /> ({item.review})
              </Box>
              <br/>
              <Text textAlign={'left'}>${item.price}</Text>
              <Button  borderRadius={'none'}    w="100%" bg={"#333"} color="white" _hover={{ backgroundColor: "#00857c", color: "black" }} >Quick Buy</Button>
         </Box>))}
          
         </SimpleGrid>
    </div>
  )
}

export default CartSuggestion