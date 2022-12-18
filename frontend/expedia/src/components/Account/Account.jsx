import React from 'react'
import LoginSignUpNav from '../LoginSignUpNav'
import { Image,Stack,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { json, Link } from 'react-router-dom'
import style from "./Account.module.css";
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
export default function Account() {
  let [name,setName]=useState("")
  let [email,setEmail]=useState("")

  const handleAccount=()=>{
    
    
axios.get("https://adorable-pear-earrings.cyclic.app/user").then((res)=>{
   
                   for(let i=0;i<res.data.length;i++){
                    if(res.data[i].email===JSON.parse(localStorage.getItem("user")).email){
                       setName(res.data[i].name)
                       setEmail(res.data[i].email)
                    }
                   }
             

}).catch((er)=>{
  
    console.log(er)
})
}
useEffect(()=>{
  handleAccount()
},[])
  return (
    <div>
        <LoginSignUpNav/>
        <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
    alt='png'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Account Detailes</Heading>
      <Text py='2'>
      <span className={style.span}>Name:</span> {name}
      </Text>
      <Text py='2'>
      <span className={style.span}>Email:</span> {email}
      </Text>
      <Text py='2'>
      <span className={style.span}>Signup Year:</span>{new Date().getUTCFullYear()}
      </Text>
      <Text py='2'>
      <span className={style.span}> Signup Month:</span> {new Date().getMonth()}
      </Text>
    </CardBody>

    <CardFooter>
        <Link to="/signup">
      <Button variant='solid' colorScheme='messenger' >
        Sign up 
      </Button>
      </Link>
    </CardFooter>
  </Stack>
</Card>
    </div>
  )
}
