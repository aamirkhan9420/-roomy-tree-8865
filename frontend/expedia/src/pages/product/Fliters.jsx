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
        <Text textAlign="left" fontSize='xl'> Search by property name</Text>
        <Input height="50px" margin="15px 0px" placeholder='Basic usage' />
      </Box>
      <hr />

      <Box>
       
          <Box >
          <Text margin="10px 0px"  textAlign="left" fontSize="lg">Filter By</Text>
          <Text margin="20px 0px" textAlign="left" fontSize="md">Popular filters</Text>
          </Box>
          <Box lineHeight="10px">
          <Stack>
          <Checkbox >Hot tub</Checkbox> <br />
          <Checkbox>Breakfast Included</Checkbox> <br />
          <Checkbox>Breakfast included</Checkbox><br />
          <Checkbox>Gachibowli</Checkbox> <br />
          <Checkbox>Free cancellation</Checkbox> <br />
          <Checkbox>Apart-hotel</Checkbox>
          </Stack>
          </Box>
      </Box>
      
      <Box>
        <Text margin="10px 0px"  textAlign="left" fontSize="lg">Guest rating</Text>
      </Box>
       <Box>
       <Stack >
        <Radio value='1'>Any</Radio>
        <Radio value='2'>Wonderful 9+</Radio>
        <Radio value='3'>Very good 8+</Radio>
        <Radio value='3'>Good 7+</Radio>
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
          <Checkbox> A Part-Hotel</Checkbox> <br />
          <Checkbox>Hotel</Checkbox> <br />
          <Checkbox >House</Checkbox> <br />
          </Stack>
       </Box>


       <Box lineHeight="10px">
          <Text  margin="20px 0px"  textAlign="left" fontSize="lg" >Neighborhood</Text>
          <Stack>
          <Radio >Huderbadh</Radio> <br />
          <Radio>Gachibowili</Radio> <br />
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
          <Text  margin="20px 0px"  textAlign="left" fontSize="lg" >Accessibility</Text>
          <Stack>
          <Checkbox>Sign language-capable </Checkbox> <br />
          <Checkbox>Accessible bathroom</Checkbox> <br />
          <Checkbox >Roll-in shower</Checkbox> <br />
          </Stack>
       </Box>
    </Box>
  )
}

export default Fliters