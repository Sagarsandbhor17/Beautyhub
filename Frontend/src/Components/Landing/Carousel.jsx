import React, { useRef, useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";

const carousel = [
  "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/55/Shot6-1180x450-095455.jpeg",
  "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/10/original-New_Project_%283%29-085610.jpg",
  "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/58/SS-Batching-Christmas-Homepage_Banner-EG1180x450_copy_2-060058.jpg",
  "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/17/original-1024-STDCRE-42756-SS-WC-Cyber-Waitlist-Site-Assets-1180x450-040317.jpg",
];

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box display="flex" position="relative">
            <Image src={carousel[0]} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box display="flex" position="relative">
            {/* <Box w=""20vw"" position="absolute" top="2vw" left="3vw">
              <Heading>
                the <br />
                Holiday Edit
              </Heading>
              <Text>
                Give 12 gifts in one box with our Holiday Edit, which features
                full & deluxe-sized beauty products that spread joy (and great
                skin). Filled with $670 worth of must- have,get yours for just
                $149
              </Text>
              <Button>Shop Now</Button>
            </Box> */}
            <Image height="20vw" src={carousel[1]} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={carousel[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={carousel[3]} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
