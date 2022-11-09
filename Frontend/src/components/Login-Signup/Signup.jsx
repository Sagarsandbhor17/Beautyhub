import React from 'react'
import { Box, Button, Grid, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc';
import { GrFacebook } from 'react-icons/gr';
import style from "./style.module.css"
import { useState } from 'react';

const InitialState = {
name:"",
email:"",
password:"",
number:"",
referral:""
}

const Signup = () => {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [form, setForm] = useState(InitialState)

    const handleChange = (e) => {
        let {name, value} = e.target;
        setForm((prev) => ({...prev, [name]:value}))
    }
  
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("form", form)
        setForm("")
        e.target.reset()
    }
  
    const {name, email, password, referral, number} = form;
  
    return (
    <div>
            <Box w="100%" p="4" pt="0" pl={["0","0","28","28"]} textAlign={["center","center","left","left"]} position={"fixed"} bg="#ffffff" zIndex={100}>
                <Text fontSize={"48"} fontWeight={600}>SkinStore</Text>
                <Text mt="-4" ml={["0","0","3","3"]} fontSize={"13"}>part of the <span style={{color:"#2fc6f7"}}>look</span><span style={{color:"grey"}}>fantastic</span> group</Text>
            </Box>

        <Grid bg={"#f2f2f2"} pt="144" pb="10">
            <Grid borderRadius={"5px"} w={["80%","80%","50%","50%"]} p="6" m="auto" textAlign={"left"} bg="#ffffff">

                <Text fontSize={"26px"} mb="14">About You</Text>

        {/* --------------------------- (Google FaceBook) --------------- */}
                <Text fontSize={"22px"} mb="4">Sign Up With</Text>
                <Box display={"flex"} m="auto" textAlign={"center"} gap="5" w="100%">
                    <Button fontWeight={400} border={"1px"} p={["6","6","8","8"]} w="50%">
                        <GrFacebook style={{color:"#4267b2", marginRight:"4px", fontSize:"20px"}}/>FaceBook
                    </Button>
                    <Button fontWeight={400} border={"1px"} p={["6","6","8","8"]} w="50%">
                        <FcGoogle style={{marginRight:"4px", fontSize:"25px"}}/>Google
                    </Button>
                </Box>
            
            <br />
            <br />
            <Text border={"1px solid grey"}></Text>
            <br />
            <Text fontSize={"20px"} mb="4">Or create an email account</Text>
            <br />
            <form  onSubmit={handleSubmit} className={style.form}>
                <label>* Full Name</label>
                <Input onChange={handleChange} name="name" value={name} required type="text"/>
                <label>* Email address</label>
                <Input onChange={handleChange} name="email" value={email} required type="email"/>
                <label>* Confirm Email address</label>
                <Input required type="email"/>
                
                <label>* Password</label>
                <InputGroup size='md' h="50px" mb="23px" border={"1px solid grey"} borderRadius="10px">
                <Input onChange={handleChange} name="password" value={password} 
                    pattern=".{8,15}"                        
                    required title='Please enter password of Length 8 to 15 !'
                    type={show1 ? 'text' : 'password'}
                    h="50px" mb="23px"
                />
                <InputRightElement mr='4'>
                    <Text onClick={()=> setShow1(!show1)} mt="2">
                    {show1 ? 'Hide' : 'Show'}
                    </Text>
                </InputRightElement>
                </InputGroup>
                
                <label>* Confirm Password</label>
                <InputGroup size='md' h="50px" mb="23px" border={"1px solid grey"} borderRadius="10px">
                <Input required
                    type={show2 ? 'text' : 'password'}
                    h="50px" mb="23px" 
                />
                <InputRightElement mr='4'>
                    <Text onClick={()=> setShow2(!show2)} mt="2">
                    {show2 ? 'Hide' : 'Show'}
                    </Text>
                </InputRightElement>
                </InputGroup>

                <label>Cell Phone Number (Optional)</label>
                <Input onChange={handleChange} name="number" value={number} type="number"/>
                <Text mt={"-4"} fontSize="12">We will use this number to send occasional promotional messages.</Text>
                <br />
                <br />
                <label>Referral Code (Optional)</label>
                <Input onChange={handleChange} name="referral" value={referral} type="text"/>
                <Text mt={"-4"} fontSize="12">* Your referrals discount is automatically applied at cart</Text>
                <br />
                <br />
                <Button type="submit" w={"100%"} bg="#2e3337" fontWeight={300} color="white" h="12" _hover={{bg:"#2fc6f7", color:"black"}}>
                    CONTINUE
                </Button>
            </form>
                <br />
                <Text fontSize={"14px"}>By proceeding, you are confirming that you agree to our 
                <a href="https://www.skinstore.com/info/terms-conditions.list"> <b><u>Terms and Conditions</u></b></a> and  
                <a href="https://www.skinstore.com/info/privacy-policy.list"> <b><u> Privacy Policy</u></b></a></Text>

            </Grid>
        </Grid>
    </div>
  )
}

export default Signup