import { Box, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import style from "../css/style.module.css";
import bogImage1 from "../Image/bogImage1.png"
import bogImage2 from "../Image/bogImage2.png"
import bogImage3 from "../Image/bogImage3.png"
import bogImage4 from "../Image/bogImage4.png"
import bogImage5 from "../Image/bogImage5.png"
import bogImage6 from "../Image/bogImage6.png"
import bogImage7 from "../Image/bogImage7.png"

const BlogOption = () => {
  return (
    <div>
        <Grid 
        className={style.BlogOptionMainDiv} 
        >

        <Box>
        <Image src={bogImage1} alt="bogImage1"/>
        <Text>Skin Care</Text>
        </Box>
        <Box>
        <Image src={bogImage2} alt="bogImage2"/>
        <Text>Makeup</Text>
        </Box>
        <Box>
        <Image src={bogImage3} alt="bogImage3"/>
        <Text>Hair Care</Text>
        </Box>
        <Box>
        <Image src={bogImage4} alt="bogImage1"/>
        <Text>Body</Text>
        </Box>
        <Box>
        <Image src={bogImage5} alt="bogImage1"/>
        <Text>Tips & Advice</Text>
        </Box>
        <Box>
        <Image src={bogImage6} alt="bogImage1"/>
        <Text>Beauty Center</Text>
        </Box>
        <Box>
        <Image src={bogImage7} alt="bogImage1"/>
        <Text>Free Beauty Consultations</Text>
        </Box>
        </Grid>
    </div>
  )
}


export default BlogOption























