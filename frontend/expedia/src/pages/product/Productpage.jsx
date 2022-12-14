import React from 'react'
import Filters from "./Fliters";
import Fetchproducts  from './Fetchproducts';
import './Productpage.css';
import { Box, Flex} from '@chakra-ui/react';
import Toppage from './Toppage';
const Productpage = () => {
  return (
    <Box style={{width:"70%", margin:"auto", border:"2px solid red"}}>
      <Box>
        <Toppage/>
      </Box>
      <Flex >
          <Box width="22%" border="2px solid black"  size='150px'>
            <Filters/>
          </Box>
          <Box width="70%" border="2px solid green" flex='1'>
            <Fetchproducts/>
          </Box>
      </Flex>
    </Box>
  )
}

export default Productpage