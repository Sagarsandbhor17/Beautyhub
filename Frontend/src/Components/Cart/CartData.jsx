import React, { useState } from "react";
import { Button, Image, Td, Tr, useColorModeValue as mode } from "@chakra-ui/react";
import { ImBin } from "react-icons/im";

const CartData = (props) => {
  const { product, quantity, deleteData, _id } = props;
  const [qty, setQty] = useState(1);

  return (
    <div >
      {" "}
      <Td>
        <Image w={["50px","50px","100px","100px"]} src={product.product_image}  />
      </Td>
      <Td>${Number(product.product_price)}</Td>
      <Td>
        {" "}
        <Button disabled={qty == 1} onClick={() => setQty(qty - 1)}>
          -
        </Button>
        <Button borderRadius="none" bg="white" _hover={{ bg: "white" }}>
          {qty}
        </Button>
        <Button onClick={() => setQty(qty + 1)}>+</Button>
      </Td>
      <Td>${Math.ceil(Number(qty) * Number(product.product_price))}</Td>
      <Td>
        <Button bg="white" onClick={()=> deleteData(_id)}>
          <ImBin color="red" />
        </Button>
      </Td>
    </div>
  );
};

export default CartData;
