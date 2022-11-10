import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import style from "../../Styles/SingleProduct.module.css";
import { StarIcon } from "@chakra-ui/icons";
import { AiOutlineHeart } from "react-icons/ai";
import Suggest from "./Suggest";
import Descriptionsec from "./Descriptionsec";
let state = {
  products: [
    {
      _id: "1",
      title: "Grow Gorgeous Hair Density Serum Original Duo 2 x 60ml",
      src: [
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12448076-1564739111169792.jpg",
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12448076-6894739111151729.jpg",
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12448076-8695002190173929.jpg",
      ],
      rating: "1",

      price: 23.0,

      rating: 1,
    },
  ],
  index: 0,
};

const SingleProduct = () => {
  const { products } = state;
  console.log(products);

  return (
    <div>
      <Box
        background={"#232f3e"}
        w={["100%", "100%", "100%", "100%"]}
        color="white"
        width={"100%"}
        margin="auto"
        h="40px"
      
        _hover={{ bg: "white", color: "black" }}
      >
        <Text fontWeight={"bold"} textAlign="center" fontSize={'xl'} >
          15% off or 20% off when you Spend $150+ with code SAVE20 +16-Piece
          Beauty bag (Worth $174) @ $159|Shop Now
        </Text>
      </Box>
      {products.map((item, index) => (
        <div key={index} className={style.details}>
          <div className={style.bigimg}>
            <img src={item.src[0]} />
            <br />
            <hr />
            <br/>
            <Descriptionsec/>
          </div>
          <div className={style.box}>
            <Image src="https://s1.thcdn.com/design-assets/images/logos/shared-brands/colour/skinmedica.gif" w="20%"/>
            <div className={style.row}>
              <Heading fontWeight={"normal"}>{item.title}</Heading>
            </div>
            <Box w={["100%", "100%", "100%", "100%"]}>
              <StarIcon color={"#fbbc04"} /> <StarIcon color={"#fbbc04"} />{" "}
              <StarIcon color={"#fbbc04"} /> <StarIcon color={"#fbbc04"} />{" "}
              <StarIcon color={"#fbbc04"} /> 1 Reviews
            </Box>
            <p style={{ textAlign: "left" }}>MSRP:$70</p>
            <Heading textAlign={"left"} fontWeight={"medium"}>
              ${item.price}
            </Heading>
            <p style={{ textAlign: "left", color: "red" }}>Save:$21.00</p>
            <hr />

            <br />
            <div style={{ display: "flex", gap: "10rem" }}>
              {" "}
              <p style={{ fontWeight: "bold" }}>Quantity</p>{" "}
              <Box w={["60%", "60%", "60%", "100%"]} ml={["-80px"]}>
                {" "}
                <Button
                  border={"1px solid black"}
                  bg="white"
                  borderRadius="none"
                >
                  -
                </Button>
                <Button
                  disabled
                  border={"1px solid black"}
                  borderRadius="none"
                  bg="white"
                >
                  1
                </Button>
                <Button
                  border={"1px solid black"}
                  bg="white"
                  borderRadius="none"
                >
                  +
                </Button>
              </Box>
            </div>

            <Button
              className={style.cart}
              bg={"#333"}
              color="white"
              width="500px"
              _hover={{ backgroundColor: "#00857c", color: "black" }}
              w={["60%", "80%", "80%", "100%"]}
            >
              {" "}
              Add to cart{" "}
            </Button>
            <br />
            <br />
            <Box display="flex" gap="2rem">
              <AiOutlineHeart mt="-20px" size={"30px"} />
              <Text fontWeight={"bold"}> Save to Wishlist</Text>
            </Box>
            <Text textAlign={'left'}>In stock -Usaually dispatched Within 24hours</Text>
            <Button ml="-70%"borderRadius={'none'} border="1px solid brown " bg="white" color={'brown'} _hover={{ backgroundColor: "white", color: "brown" }}>Select your Gift</Button>
          </div>
        </div>
      ))}
      <Suggest/>
      <br />
      <br></br>
      <div className={style.feedback}>
        <h2 class="review">Customer Reviews</h2>
        <p class="small_font">
          This product has no reviews. Be the first to write a review and you
          could <br />
          WIN A $100 VOUCHER
        </p>
        <button class={style.review_btn}>WRITE PRODUCT REVIEW</button>
      </div>
    </div>
  );
};

export default SingleProduct;
