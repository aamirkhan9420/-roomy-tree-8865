import { Box, Input,Text} from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Radio } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import React from 'react';

import { IoIosStarOutline } from "react-icons/io";
const Fliters = () => {
  return (
    <Box>
      <hr />
      <Box>
        <Text textAlign="left" fontSize='xl'> Search by Airlines</Text>
        <Input height="50px" margin="15px 0px" placeholder='Your Favourite one' />
      </Box>
      <hr />

      <Box>
       
          <Box >
          <Text margin="10px 0px"  textAlign="left" fontSize="lg">Filter By</Text>
          <Text margin="20px 0px" textAlign="left" fontSize="md">Popular Hotlist</Text>
          </Box>
          <Box lineHeight="10px">
          <Stack>
          <Checkbox >Direct Flight</Checkbox> <br />
          <Checkbox>1 stop</Checkbox> <br />
          <Checkbox>2+ stps</Checkbox><br />
        
          </Stack>
          </Box>
      </Box>
      
      <Box>
        <Text margin="10px 0px"  textAlign="left" fontSize="lg">Airlines</Text>
      </Box>
       <Box>
       <Stack >
        <Radio value='1'>Indigo</Radio>
        <Radio value='2'>GO First</Radio>
        <Radio value='3'>Vistara</Radio>
        <Radio value='3'>Air India</Radio>
        <Radio value='3'>Air Asia</Radio>
       
      </Stack>
       </Box>

       <Box textAlign="left" >
       <Text margin="10px 0px"  textAlign="left" fontSize="lg">Star Rating</Text>
       <Button padding="10px 25px" margin="5px" colorScheme='teal' size='sm'>1<IoIosStarOutline/></Button>
       <Button padding="10px 25px" margin="5px" colorScheme='teal' size='sm'>2<IoIosStarOutline/></Button>
       <Button padding="10px 25px" margin="5px" colorScheme='teal' size='sm'>3<IoIosStarOutline/></Button>
       <Button padding="10px 25px" margin="5px" colorScheme='teal' size='sm'>4<IoIosStarOutline/></Button>
       <Button padding="10px 25px" margin="5px" colorScheme='teal' size='sm'>5<IoIosStarOutline/></Button>
       </Box>
  
       <Box lineHeight="10px">
          <Text  margin="20px 0px"  textAlign="left" fontSize="lg" >Payment type</Text>
          <Stack>
          <Checkbox> Book Now Pay Later</Checkbox> <br />
          <Checkbox>No Cost EMI</Checkbox> <br />
          <Checkbox >Pay Now</Checkbox> <br />
          </Stack>
       </Box>


       <Box lineHeight="10px">
          <Text  margin="20px 0px"  textAlign="left" fontSize="lg" >Travel and baggage</Text>
          <Stack>
          <Radio >Seat choice included</Radio> <br />
          <Radio>Hand baggage included</Radio> <br />
          <Radio>Hitch city</Radio> <br />
          </Stack>
       </Box>


       <Box lineHeight="10px">
          <Text  margin="20px 0px"  textAlign="left" fontSize="lg" >Meal plans available</Text>
          <Stack>
          <Checkbox> Breakfast Include</Checkbox> <br />
          <Checkbox>Lunch Included</Checkbox> <br />
          <Checkbox >Dinner Included</Checkbox> <br />
          </Stack>
       </Box>

       <Box lineHeight="10px">
          <Text  margin="20px 0px"  textAlign="left" fontSize="lg" >Departure</Text>
          <Stack>
          <Checkbox>Early Morning </Checkbox> <br />
          <Checkbox>After 11 AM</Checkbox> <br />
          <Checkbox >After 3 PM</Checkbox> <br />
          <Checkbox >After 7 PM</Checkbox> 
          </Stack>
       </Box>
    </Box>
  )
}

export default Fliters