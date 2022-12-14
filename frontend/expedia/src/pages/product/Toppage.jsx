import { Flex, Input } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react';
import React from 'react'

const Toppage = () => {
  return (
    <Box border="2px solid red">
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
            <Box flex="1" >map</Box>
            <Box style={{textAlign:"left"}} flex="2">
                <p>689 People</p>
                <h2>See how we pick our recommended properties</h2>
            </Box>
            <Box margin="10px" flex="1">
            <Select placeholder='Recomended' size='lg'>
                <option value='option1'>Price:High to low</option>
                <option value='option2'>Price:low to High</option>
                <option value='option3'>Distance from down town</option>
                <option value='option3'>Guest rating</option>
                <option value='option3'>Star tating</option>
                </Select>
            </Box>
        </Flex>
        `
      </Box>
    </Box>
  )
}

export default Toppage