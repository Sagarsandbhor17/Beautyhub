import { Box, Text, SimpleGrid, Image } from "@chakra-ui/react";
import React from "react";

const Middle = () => {
  return (
    <Box>
      <Text pt="2.5%" fontSize="3rem" textAlign="center">
        Shop by Category
      </Text>
      <SimpleGrid columns={6} spacing={0} pl="2.5%" pr="2.5%">
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
      <SimpleGrid columns={3} spacing={10} pl="2.5%" pr="2.5%">
        <Box>
          <Image
            borderRadius="50%"
            boxSize="30vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/39/17_1009_CucumberExtract_US17_1009_CucumberExtract_US-014239.jpg"
          />
          <Text>Skin Ceuticals Gift</Text>
          <Text>
            Receive a SkinCeuticals Triple Lipid Restore 2:4:2 Sample when you
            spend $150 or more on the brand.
          </Text>
        </Box>
        <Box>
          <Image
            borderRadius="50%"
            boxSize="30vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/27/SkinStore_Q4_Photography_2022_-_October_-_THG0035163_-_BATCHING_shot8600x600-090227.jpg"
          />
          <Text>25% off Elemis with code SINGLES</Text>
          <Text>
            Elemis skincare products are carefully formulated to maximize the
            potential of your skin and restore its best qualities to enhance
            your natural beauty.
          </Text>
        </Box>
        <Box>
          <Image
            borderRadius="50%"
            boxSize="30vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/39/0712-STDCRE-38046-SS-MH-Photography-July-22-REMAINING-BATCHING-Shot8-600x600-063639.png"
          />
          <Text>Brand of the Month: Obagi Medical</Text>
          <Text>
            Obagi crafts advanced skincare products that help unleash skin’s
            full potential with an extensive portfolio designed to brighten,
            protect, and enhance skin tone and texture.
          </Text>
        </Box>
        <Box>
          <Image
            borderRadius="50%"
            boxSize="30vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/10/0224-STDCRE-32153-SS-BME-Skinstore-March-2022-Photography-Batching-Shot_14-600x600-091010.jpg"
          />
          <Text>Up to 50% off TriPollar</Text>
          <Text>
            TriPollar uses clinical expertise to create home-use devices that
            encourage skin regeneration and enhance natural beauty.
          </Text>
        </Box>
        <Box>
          <Image
            borderRadius="50%"
            boxSize="30vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/42/best_selling-064442.jpg"
          />
          <Text>25% off Neocutis with code SINGLES</Text>
          <Text>
            Neocutis means 'new skin', and that's precisely what the products in
            their collection can create: a new, youthful complexion that is
            visibly smoother and firmer to the touch.
          </Text>
        </Box>
        <Box>
          <Image
            borderRadius="50%"
            boxSize="30vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/54/original-original-original-500x500-085431-083903-064454.jpg"
          />
          <Text>30% off Christophe Robin + Gift</Text>
          <Text>
            Receive a Christophe Robin Cleansing Volumizing Deluxe Paste 12ml
            (Free Gift) when you spend $80 or more.
          </Text>
        </Box>
        <Box>
          <Image
            borderRadius="50%"
            boxSize="30vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/28/original-Screenshot_2022-03-07_141739-065628.png"
          />
          <Text>25% off Estee Lauder with code SINGLES</Text>
          <Text>
            Always happy to share the latest and greatest in skincare and beauty
            innovation, we're happy to announce that Estee Lauder is now
            available at SkinStore!
          </Text>
        </Box>
        <Box>
          <Image
            borderRadius="50%"
            boxSize="30vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/34/original-dhc.ss-061734.jpg"
          />
          <Text>25% off DHC with code SINGLES</Text>
          <Text>
            Discover olive oil based skincare and makeup with 25% off Japanese
            beauty expert, DHC.
          </Text>
        </Box>
        <Box>
          <Image
            borderRadius="50%"
            boxSize="30vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/23/original-perricone.ss-013423.jpg"
          />
          <Text>25% off Perricone MD with code SINGLES</Text>
          <Text>
            Perricone MD is a cosmeceutical line that helps to repair skin
            damage using nutrient antioxidants.
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Middle;
