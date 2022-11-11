import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import style from "../../Styles/SingleProduct.module.css";
import { StarIcon } from "@chakra-ui/icons";
import { AiOutlineHeart } from "react-icons/ai";
import Suggest from "./Suggest";
import Descriptionsec from "./Descriptionsec";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ADD, REMOVE } from "../../redux/actions/action";
import { useToast } from "@chakra-ui/react";

const SingleProduct = () => {
  const { id } = useParams();

  const [Product, setProduct] = useState([]);
  const [qty1, setqty] = useState(0);
  const [Loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();
  useEffect(() => {
    const getproducts = async () => {
      setloading(true);
      const response = await axios.get(`http://localhost:8080/products/${id}`);
      setProduct(await response.data);
      setloading(false);
    };

    getproducts();
  }, []);
  // console.log(Product)
  function send(e) {
    dispatch(ADD(e));
    toast({
      title: "Product Added to Cart",
      position: "top",

      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }

  function qty(e) {
    dispatch(ADD(e));
  }
  function qtydec(item) {
    console.log(item.quantity);
    dispatch(REMOVE(item));
  }

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
        <Text fontWeight={"bold"} textAlign="center" fontSize={"xl"}>
          15% off or 20% off when you Spend $150+ with code SAVE20 +16-Piece
          Beauty bag (Worth $174) @ $159|Shop Now
        </Text>
      </Box>

      <div className={style.details}>
        <div className={style.bigimg}>
          <img src={Product.product_image} />
          <br />
          <hr />
          <br />
          <Descriptionsec
            description={Product.description}
            product_ingredients={Product.product_ingredients}
          />
        </div>
        <div className={style.box}>
          <Image src={Product.item_logo} w="20%" />
          <div className={style.row}>
            <Heading fontWeight={"normal"}>{Product.productName}</Heading>
          </div>
          <Box w={["100%", "100%", "100%", "100%"]}>
            <StarIcon color={"#fbbc04"} /> <StarIcon color={"#fbbc04"} />{" "}
            <StarIcon color={"#fbbc04"} /> <StarIcon color={"#fbbc04"} />{" "}
            <StarIcon color={"#fbbc04"} /> {Product.product_reviews} Reviews
          </Box>
          <p style={{ textAlign: "left" }}>MSRP:$70</p>
          <Heading textAlign={"left"} fontWeight={"medium"}>
            ${Product.product_price}
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
                onClick={() => qtydec(Product)}
              >
                -
              </Button>
              <Button
                disabled
                border={"1px solid black"}
                borderRadius="none"
                bg="white"
              >
                {qty1}
              </Button>
              <Button
                border={"1px solid black"}
                bg="white"
                borderRadius="none"
                onClick={() => qty(Product)}
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
            onClick={() => send(Product)}
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
          <Text textAlign={"left"}>
            In stock -Usaually dispatched Within 24hours
          </Text>
          <Button
            ml="-70%"
            borderRadius={"none"}
            border="1px solid brown "
            bg="white"
            color={"brown"}
            _hover={{ backgroundColor: "white", color: "brown" }}
          >
            Select your Gift
          </Button>
        </div>
      </div>

      <Suggest />
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
