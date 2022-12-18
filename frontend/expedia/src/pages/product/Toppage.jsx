import { Flex, Input } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react';
import React from 'react'
import Map from './map';

const Toppage = () => {
  return (
    <Box mt="40px">
      <Flex gap="43px">
      <Input placeholder="Going to hyderabadh" boxShadow='outline' p='6' rounded='md' bg='white' htmlSize={40} width='auto' /> 
      <Input type="date" boxShadow='outline' p='6' rounded='md' bg='white' htmlSize={20}  width='auto' />
      <Input type="date" boxShadow='outline' p='6' rounded='md' bg='white' htmlSize={20}  width='auto' />
      <Input placeholder="Travellers"  boxShadow='outline' p='6' rounded='md' bg='white' htmlSize={20}  width='auto' />
      <Button  size='md'
        height='50px'
        width='140px'
        border='2px'
        colorScheme='facebook' >Search </Button>
      </Flex>
      <Box margin="30px" width="">
        <Flex>
            <Box flex="1" ><Map/></Box>
           
          
        </Flex>
        
      </Box>
      
    </Box>
  )
}

export default Toppage