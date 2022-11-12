import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/skinRedux/skin.action";
import { Box, SimpleGrid, Image } from "@chakra-ui/react";
const Skin = () => {
  const [page, setPage] = useState(1);
  const { skinData } = useSelector((store) => store.skinProducts);
  const dispatch = useDispatch();
  console.log(skinData);
  useEffect(() => {
    dispatch(getData(page));
  }, [page]);
  return (
    <Box>
      {/* <Box></Box> */}
      <SimpleGrid columns={[2, null, 3]}>
        {skinData.map((elem) => (
          <Box key={elem.id}>
            <Image src={elem.url} />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skin;
