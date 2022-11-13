import { Box, Text, SimpleGrid, Image, Button } from "@chakra-ui/react";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

const Middle = () => {
  return (
    <Box
      alignSelf="normal"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Text pt="2.5%" fontSize="3rem" textAlign="center">
        Shop by Category
      </Text>
      <SimpleGrid columns={6} spacing={0} w="90%" m="auto" pl="2.5%" pr="2.5%">
        <Box>
          <Image
            boxSize="12vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/58/Page-006-025258.png"
          />
        </Box>
        <Box>
          <Image
            boxSize="12vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/40/Page-005-025240.png"
          />
        </Box>
        <Box>
          <Image
            boxSize="12vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/21/Page-004-025221.png"
          />
        </Box>
        <Box>
          <Image
            boxSize="12vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/17/Page-003-025217.png"
          />
        </Box>
        <Box>
          <Image
            boxSize="12vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/09/Page-002-025209.png"
          />
        </Box>
        <Box>
          <Image
            boxSize="12vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/01/Page-001-025201.png"
          />
        </Box>
      </SimpleGrid>
      <Text pt="2.5%" fontSize="3rem" textAlign="center">
        Trending Offers
      </Text>
      <SimpleGrid
        w="90%"
        m="auto"
        columns={[1, 2, 3]}
        spacing={10}
        pl="2.5%"
        pr="2.5%"
      >
        <Box
          alignSelf="normal"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            borderRadius="50%"
            display="block"
            boxSize={["35vw", "25vw"]}
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/39/17_1009_CucumberExtract_US17_1009_CucumberExtract_US-014239.jpg"
          />
          <Text>Skin Ceuticals Gift</Text>
          <Text fontWeight="100">
            Receive a SkinCeuticals Triple Lipid Restore 2:4:2 Sample when you
            spend $150 or more on the brand.
          </Text>
          <Button mt="auto" bgColor="white" borderRadius="0px">
            SHOP NOW
          </Button>
        </Box>
        <Box
          alignSelf="normal"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            borderRadius="50%"
            display="block"
            boxSize="25vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/27/SkinStore_Q4_Photography_2022_-_October_-_THG0035163_-_BATCHING_shot8600x600-090227.jpg"
          />
          <Text>25% off Elemis with code SINGLES</Text>
          <Text fontWeight="100">
            Elemis skincare products are carefully formulated to maximize the
            potential of your skin and restore its best qualities to enhance
            your natural beauty.
          </Text>
          <Button mt="auto" bgColor="white" borderRadius="0px">
            SHOP NOW
          </Button>
        </Box>
        <Box
          alignSelf="normal"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            borderRadius="50%"
            display="block"
            boxSize="25vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/39/0712-STDCRE-38046-SS-MH-Photography-July-22-REMAINING-BATCHING-Shot8-600x600-063639.png"
          />
          <Text>Brand of the Month: Obagi Medical</Text>
          <Text fontWeight="100">
            Obagi crafts advanced skincare products that help unleash skin’s
            full potential with an extensive portfolio designed to brighten,
            protect, and enhance skin tone and texture.
          </Text>
          <Button mt="auto" bgColor="white" borderRadius="0px">
            SHOP NOW
          </Button>
        </Box>
        <Box
          alignSelf="normal"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            borderRadius="50%"
            display="block"
            boxSize="25vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/10/0224-STDCRE-32153-SS-BME-Skinstore-March-2022-Photography-Batching-Shot_14-600x600-091010.jpg"
          />
          <Text>Up to 50% off TriPollar</Text>
          <Text fontWeight="100">
            TriPollar uses clinical expertise to create home-use devices that
            encourage skin regeneration and enhance natural beauty.
          </Text>
          <Button mt="auto" bgColor="white" borderRadius="0px">
            SHOP NOW
          </Button>
        </Box>
        <Box
          alignSelf="normal"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            borderRadius="50%"
            display="block"
            boxSize="25vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/42/best_selling-064442.jpg"
          />
          <Text>25% off Neocutis with code SINGLES</Text>
          <Text fontWeight="100">
            Neocutis means 'new skin', and that's precisely what the products in
            their collection can create: a new, youthful complexion that is
            visibly smoother and firmer to the touch.
          </Text>
          <Button mt="auto" bgColor="white" borderRadius="0px">
            SHOP NOW
          </Button>
        </Box>
        <Box
          alignSelf="normal"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            borderRadius="50%"
            display="block"
            boxSize="25vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/54/original-original-original-500x500-085431-083903-064454.jpg"
          />
          <Text>30% off Christophe Robin + Gift</Text>
          <Text fontWeight="100">
            Receive a Christophe Robin Cleansing Volumizing Deluxe Paste 12ml
            (Free Gift) when you spend $80 or more.
          </Text>
          <Button mt="auto" bgColor="white" borderRadius="0px">
            SHOP NOW
          </Button>
        </Box>
        <Box
          alignSelf="normal"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            borderRadius="50%"
            display="block"
            boxSize="25vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/28/original-Screenshot_2022-03-07_141739-065628.png"
          />
          <Text>25% off Estee Lauder with code SINGLES</Text>
          <Text fontWeight="100">
            Always happy to share the latest and greatest in skincare and beauty
            innovation, we're happy to announce that Estee Lauder is now
            available at SkinStore!
          </Text>
          <Button mt="auto" bgColor="white" borderRadius="0px">
            SHOP NOW
          </Button>
        </Box>
        <Box
          alignSelf="normal"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            borderRadius="50%"
            display="block"
            boxSize="25vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/34/original-dhc.ss-061734.jpg"
          />
          <Text>25% off DHC with code SINGLES</Text>
          <Text fontWeight="100">
            Discover olive oil based skincare and makeup with 25% off Japanese
            beauty expert, DHC.
          </Text>
          <Button mt="auto" bgColor="white" borderRadius="0px">
            SHOP NOW
          </Button>
        </Box>
        <Box
          alignSelf="normal"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            borderRadius="50%"
            display="block"
            boxSize="25vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/23/original-perricone.ss-013423.jpg"
          />
          <Text>25% off Perricone MD with code SINGLES</Text>
          <Text fontWeight="100">
            Perricone MD is a cosmeceutical line that helps to repair skin
            damage using nutrient antioxidants.
          </Text>

          <Button mt="auto" bgColor="white" borderRadius="0px">
            SHOP NOW
          </Button>
        </Box>
      </SimpleGrid>
      <Text pt="2.5%" fontSize="3rem" textAlign="center">
        What People Are Buying Right Now
      </Text>
      <SimpleGrid
        columns={[null, 2, 4]}
        spacing={10}
        w="90%"
        m="auto"
        pl="2.5%"
        pr="2.5%"
      >
        <Box
          alignSelf="normal"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            display="block"
            m="auto"
            boxSize="20vw"
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/13524404-5734930150395321.jpg"
          />
          <Text
            maxWidth="15rem"
            mt="1rem"
            mb="1rem"
            ml="auto"
            mr="auto"
            textAlign="center"
            fontSize=".8em"
            fontWeight="500"
          >
            Epionce Luminous Eye Serum 0.53ml
          </Text>
          <Text textAlign="center">$67</Text>
          <Link to="/skin">
            <Button width="13em" mt="auto" bgColor="black" color="white">
              {" "}
              <HiOutlineShoppingBag />
              &nbsp; SHOP NOW
            </Button>
          </Link>
        </Box>
        <Box
          alignSelf="normal"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            display="block"
            m="auto"
            boxSize="20vw"
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/12448076-8695002190173929.jpg"
          />
          <Text
            maxWidth="15rem"
            mt="1rem"
            mb="1rem"
            ml="auto"
            mr="auto"
            textAlign="center"
            fontSize=".8em"
            fontWeight="500"
          >
            Grow Gorgeous Hair Density Serum Original Duo 2 x 60ml
          </Text>
          <Text textAlign="center">$49</Text>
          <Link to="/skin">
            <Button width="13em" mt="auto" bgColor="black" color="white">
              {" "}
              <HiOutlineShoppingBag />
              &nbsp; SHOP NOW
            </Button>
          </Link>
        </Box>
        <Box
          alignSelf="normal"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            display="block"
            m="auto"
            boxSize="20vw"
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/13920999-1114993397470335.jpg"
          />
          <Text
            maxWidth="15rem"
            mt="1rem"
            mb="1rem"
            ml="auto"
            mr="auto"
            textAlign="center"
            fontSize=".8em"
            fontWeight="500"
          >
            Sunday Riley Morning Buzz Vitamin C Brightening Trio Skincare Set
            (Worth $151.00)
          </Text>
          <Text textAlign="center">$98</Text>
          <Link to="/skin">
            <Button width="13em" mt="auto" bgColor="black" color="white">
              {" "}
              <HiOutlineShoppingBag />
              &nbsp; SHOP NOW
            </Button>
          </Link>
        </Box>
        <Box
          alignSelf="normal"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            boxSize="20vw"
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/12358556-1974888087906815.jpg"
          />
          <Text
            maxWidth="15rem"
            mt="1rem"
            mb="1rem"
            ml="auto"
            mr="auto"
            textAlign="center"
            fontSize=".8em"
            fontWeight="500"
          >
            TriPollar STOP X Device - Rose Gold
          </Text>
          <Text textAlign="center">$199.75</Text>

          <Button width="13em" mt="auto" bgColor="black" color="white">
            {" "}
            <HiOutlineShoppingBag />
            &nbsp; SHOP NOW
          </Button>
        </Box>
      </SimpleGrid>
      <SimpleGrid
        columns={[2, 3, 6]}
        spacing={10}
        w="90%"
        mt="5rem"
        pl="2.5%"
        pr="2.5%"
      >
        <Box display="flex" justifyContent="center">
          <Image
            width="15vw"
            height="6vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/26/180x72_4_233548301_CA_SS_Logo_Amend_BAU_THG0030424-041301-124116-063126.png"
          />
        </Box>
        <Box display="flex" justifyContent="center">
          <Image
            width="15vw"
            height="6vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/18/original-logo-1024x383-035229-063318.png"
          />
        </Box>
        <Box display="flex" justifyContent="center">
          <Image
            width="15vw"
            height="6vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/11/Revision_Skincare_Logo_without_Tag_Line-052511.png"
          />
        </Box>
        <Box display="flex" justifyContent="center">
          <Image
            width="15vw"
            height="6vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/46/original-NF_Skinstore_Banner_Logo_Color_320x140-01-011402-010546.png"
          />
        </Box>
        <Box display="flex" justifyContent="center">
          <Image
            width="15vw"
            height="6vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/27/220322-ELTAMD-LOGO-RGB-01-065127.png"
          />
        </Box>
        <Box display="flex" justifyContent="center">
          <Image
            width="15vw"
            height="6vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/07/original-LOGO-2022_SkinStore_Landing_Page-BLACK-060107.png"
          />
        </Box>
      </SimpleGrid>
      <Text pt="2.5%" fontSize="3rem" textAlign="center">
        Over On the Blog...
      </Text>
      <SimpleGrid
        w="90%"
        m="auto"
        columns={[1, 2, 3]}
        spacing={10}
        pl="2.5%"
        pr="2.5%"
      >
        <Box
          alignSelf="normal"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            borderRadius="50%"
            display="block"
            boxSize="25vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/06/original-SkinC_Ferulic-034413-012406.jpg"
          />
          <Text>Skin Ceuticals Gift</Text>
          <Text fontWeight="100">
            Receive a SkinCeuticals Triple Lipid Restore 2:4:2 Sample when you
            spend $150 or more on the brand.
          </Text>
          <Button mt="auto" bgColor="white" borderRadius="0px">
            SHOP NOW
          </Button>
        </Box>
        <Box
          alignSelf="normal"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            borderRadius="50%"
            display="block"
            boxSize="25vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/51/original-0224-STDCRE-32153-SS-BME-Skinstore-March-2022-Photography-Batching-Shot_13-500x500-023351.jpg"
          />
          <Text>Skin Ceuticals Gift</Text>
          <Text fontWeight="100">
            Receive a SkinCeuticals Triple Lipid Restore 2:4:2 Sample when you
            spend $150 or more on the brand.
          </Text>
          <Button mt="auto" bgColor="white" borderRadius="0px">
            SHOP NOW
          </Button>
        </Box>
        <Box
          alignSelf="normal"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            borderRadius="50%"
            display="block"
            boxSize="25vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/16/original-NB-IMAGE-5---2022-SKINSTORE-LANDING-PAGE-025016.jpg"
          />
          <Text>Skin Ceuticals Gift</Text>
          <Text fontWeight="100">
            Receive a SkinCeuticals Triple Lipid Restore 2:4:2 Sample when you
            spend $150 or more on the brand.
          </Text>
          <Button mt="auto" bgColor="white" borderRadius="0px">
            SHOP NOW
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Middle;
