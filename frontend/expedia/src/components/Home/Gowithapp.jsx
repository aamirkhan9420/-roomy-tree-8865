import React from 'react'
import {Image,Stack,Text,Heading,Button, Card, CardBody, CardFooter, InputGroup, InputLeftAddon, Input } from '@chakra-ui/react'
import style from "./Gowithapp.module.css"
import { useState } from 'react'
export default function Gowithapp() {
  let [isClick,setClick]=useState(false)
  return (
    <div className={style.gofurther_container}>
        <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  width="80%"
  m="auto"
  mt="180px"
  >
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '400px' }}
    src='https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_ROME_iStock_72dpi.jpg't
    alt='Caffe Latte'
  />

  <Stack  >
    <CardBody
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    width="80%"
    
   
    textAlign={"left"} >
      <Heading size='md'>Go further with the Expedia app</Heading>

      <Text py='2'>
      Save even more - Get up to 20% on select hotels and earn double the points when you book on the app. Our app deals help you to save on trips so you can travel more and managing it all on the go.
      </Text>
     <Text py="2" >
      Text yourself a download link for easy access
      </Text>
    </CardBody>
  
    <CardFooter display="flex" 
 gap="20px"
 >
    <Stack   display="flex"   direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'>
  <InputGroup>
    <InputLeftAddon children='+91' /> 
     <InputGroup>
  <Input  placeholder='phone number' />
   </InputGroup>
   </InputGroup>
 

 

</Stack>
     
      <Button variant='solid' colorScheme='blue' w="150px" onClick={()=>setClick(!isClick)}>
        Get the app
      </Button>
      
    </CardFooter>
   
    {isClick?  <CardFooter
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    width="80%"
    
   
    textAlign={"left"} >
      
      <Text py="2">
    We’ve sent you a text message with a link to download the app.
      </Text>
    </CardFooter>:""}
    <CardFooter
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    width="80%"
    
   
    textAlign={"left"} >
      
       <Text py="2" >
    By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.
      </Text>
    </CardFooter>
  
   
  </Stack>
</Card>
    </div>
  )
}
