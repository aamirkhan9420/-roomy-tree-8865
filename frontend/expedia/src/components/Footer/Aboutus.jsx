import React from 'react'
import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Text } from '@chakra-ui/react'
import Footer from './Footer'
import Navbar from '../Navbar/Navbar'
export default function Aboutus() {
    return (
        <div>
            <Navbar />
            <Card m={"auto"} w={"70%"} textAlign={"left"} mt={"60px"}>
                <CardHeader>
                    <Heading size='md'>About Us</Heading>
                    <Text pt='2' fontSize='sm'>
                        Last revised on 1 September 2022
                    </Text>
                </CardHeader>

                <CardBody>
                    <Stack  spacing='4'>
                        <Box>
                          
                            <Text pt='2' fontSize='sm'>

                                Expedia is one of the fastest growing online travel portals in Asia, offering travellers an extensive selection of hotels, activities and travel services to meet every budget and activities of every kind at competitive rates. With over hundreds of thousands of hotel partners worldwide and a comprehensive offering of flight inventory made available on the website, travellers can book everything they need for a holiday - rooms to meet every budget, activities of every kind and travel services to complement.
                            </Text>
                        </Box>
                        <Box>
                           
                            <Text pt='2' fontSize='sm'>
                            This website is operated by Expedia, Inc., with its head office at 111 Expedia Group Way W, Seattle, WA98119, USA.  
                            </Text>
                        </Box>
                        <Box>
                            
                            <Text pt='2' fontSize='sm'>
                            Expedia, Inc. is a registered Seller of Travel in the State of Washington USA, Licence No. 601975803.
                            </Text>
                        </Box>
                        <Box>
           Expedia, Inc. is part of the Expedia Group of companies.

                        </Box>
                    </Stack>
                </CardBody>
            </Card>
            <Footer />
        </div>
    )
}
