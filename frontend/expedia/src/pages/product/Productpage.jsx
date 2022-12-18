import React from 'react'
import Filters from "./Fliters";
import Fetchproducts  from './Fetchproducts';
import { Box, Flex} from '@chakra-ui/react';
import Toppage from './Toppage';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
const Productpage = () => {
  return (
    <Box>
      <Navbar/>
      <Box  style={{width:"90%", margin:"auto"}}>
      <Box>
        <Toppage/>
      </Box>
      <Flex >
          <Box width="22%" size='150px'>
            <Filters/>
          </Box>
          <Box ml="2%" width="70%"  flex='1'>
            <Fetchproducts/>
          </Box>
      </Flex>
    </Box>
    <Footer/>
    </Box>
  )
}

export default Productpage