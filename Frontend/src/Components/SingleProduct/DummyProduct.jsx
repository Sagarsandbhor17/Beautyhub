import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Box, Button, Image, SimpleGrid, Text } from '@chakra-ui/react';
import Skeleton from "react-loading-skeleton"
import { NavLink } from 'react-router-dom';
import Dummynav from './Dummynav';
import { useDispatch } from 'react-redux';
import { ADD } from '../../redux/actions/action';





const DummyProduct = () => {
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(false);
    const dispatch = useDispatch()
    
   

  
    async function getdata() {
        setloading(true)
        const data = await axios.get("http://localhost:8080/products")
        .then(res=>setdata(res.data))
        return data
        
    }
    function send(e)
    {
       dispatch(ADD(e))
    }
    const Loading=() =>{
        return (
            <>
                <div>
                    <Skeleton height={350} />
                </div>
               <div>
                    <Skeleton height={350} />
                </div>
                <div>
                    <Skeleton height={350} />
                </div>
                <div>
                    <Skeleton height={350} />
                    </div>
        
        
        </>
            
        )
    }
    useEffect(() => {
        getdata() 
    }, [])
    
    
    
  return (
      <div>
      <Dummynav/>
DummyProduct
          {loading ? <SimpleGrid columns={[1, 2, 3, 4]}> {data.map(item => <Box>
            <NavLink to={`/products/${item.id}`}> <Image src={item.product_image} /></NavLink>
              <Text>{item.productName}</Text>
              <p>{item.product_price}</p>
             <Button onClick={()=>send(item)}> Add to cart</Button>
          </Box>)}
          </SimpleGrid>:<Loading></Loading>}
    </div>
  )
}

export default DummyProduct