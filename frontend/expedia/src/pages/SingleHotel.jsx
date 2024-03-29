import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,useDisclosure,Input
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import Map from "./product/map";

import Footer from "../components/Footer/Footer";
import {
  FaWifi,
  FaAirFreshener,
  FaLuggageCart,
  FaTemperatureHigh,
  FaBath,
  FaLaptop,
  FaLocationArrow,
  FaPlaneDeparture,
  FaCar,
} from "react-icons/fa";
import { Skeleton } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";

const SinglePage = () => {
  const navigate=useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  let { HotelID } = useParams();
  console.log(HotelID)
  const [data, setData] = useState({});
  const [loading,setLoading]=useState(true)

  const getdata = () => {
    setLoading(true)
    axios
      .get(
        `https://adorable-pear-earrings.cyclic.app/hotel/${HotelID}`
      )
      .then((res) =>{ 
        
        setData(res.data)
        setLoading(false)
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  const {
    hotelDesc,
    hotelFees,
    hotelName,
    hotelOffer,
    hotelPic,
    hotelTag,
    rating,
    totalFees,
    _id,
  } = data;

  const saveAddress=()=>{
    onClose()
    navigate(`/hotel/${_id}/payment`)
  }


  const addAdress=()=>{
    onOpen()
  }

  return (
    <div>



<Navbar />

{loading && <Skeleton height="600px"/>}

      {data && (
        <Box padding="1.5">
          {" "}
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            width="100%"
            textAlign="start"
          >
            <Image
              objectFit="cover"
              src={hotelPic}
              alt={hotelName}
              width="30%" 
              maxHeight="350px"
            />

            <Stack>
              <CardBody>
                <Heading size="2xl">{hotelName}</Heading>

                <Text color="teal" fontSize="2xl" py="2">
                  {hotelDesc}
                </Text>

                <Text fontSize="2xl" fontWeight="semibold" py="2">
                  {" "}
                  <span style={{ color: "teal", fontWeight: "bold" }}>
                    Offer :{" "}
                  </span>{" "}
                  {hotelOffer}
                </Text>

                <Text fontSize="2xl" fontWeight="semibold" py="2">
                  {" "}
                  <span style={{ color: "teal", fontWeight: "bold" }}>
                    Rating :{" "}
                  </span>{" "}
                  {rating}
                </Text>
                <Text fontSize="2xl" fontWeight="semibold" py="2">
                  {" "}
                  <span style={{ color: "teal", fontWeight: "bold" }}>
                    Price :{" "}
                  </span>{" "}
                  {hotelFees}
                </Text>

                <Text fontSize="2xl" fontWeight="semibold" py="2">
                  {" "}
                  {hotelTag} , We are Welcome to have coustomers like you{" "}
                  <Badge variant="outline" colorScheme="green">
                    Offer Only for You
                  </Badge>
                </Text>
              </CardBody>

              <CardFooter>
              
              <Button onClick={addAdress} size="lg" variant="solid" colorScheme="blue">
                  Reserve a room
                </Button>
            
              </CardFooter>
            </Stack>
          </Card>
          <Box>
            <Box
              overflow="hidden"
              variant="outline"
              width="100%"
              mt="2"
              textAlign="start"
              pb="20px"
            >
              <Heading size="lg">{hotelName}</Heading>

              <Text fontWeight="semibold" fontSize="lg">Popular Amenities</Text>

              <Box display="flex" justifyContent="space-between">
                <Box mt="20px" pl="2%" width="20%"  fontSize="2xl">
                  <Box gap="20px" display="flex">
                    <FaWifi /> Free Wifi
                  </Box>
                  <Box gap="20px" display="flex">
                    <FaAirFreshener /> Fresh Air
                  </Box>
                  <Box gap="20px" display="flex">
                    <FaLuggageCart />
                    Cart Service
                  </Box>


                  <Text fontSize="md" mt="20px">
                  Cosy apartment on the first floor in a building in one of the most prestigious street of Genova, a few steps from the heart of the city. Excellent starting point to visit the second biggest aquarium of Europe, the ancient harbor with Renzo Piano’s creations, the Sea Museum, the galleon built for the film “Pirates”</Text>
                </Box>

                <Box mt="20px" pl="2%" width="20%" fontSize="2xl">
                  <Box gap="20px" display="flex">
                    <FaTemperatureHigh />
                    Good temp.
                  </Box>
                  <Box gap="20px" display="flex">
                    <FaLaptop /> Business Service
                  </Box>
                  <Box gap="20px" display="flex">
                    <FaBath />
                    BathTub
                  </Box>

                  <Text fontSize="md" mt="20px">
                  Additional services at the accommodation: cooking lessons, tasting of typical products (wine, olive oil, focaccia, pesto, etc.), babysitting, children's entertainment, dog sitter, organization of events and birthdays, Italian lessons, tasting lessons. We recommend early booking. A staircase (30 steps) leads to the main door of the building.</Text>
                </Box>

                <Box width="50%">
                  {" "}
                  <iframe
                    width="100%"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=goa&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  ></iframe>
                  <Text fontSize="2xl">Near Bandoli Park Goa -8300301</Text>
                  <Text color="blue">View in map</Text>
                  <Text fontSize="2xl" mt="20px" fontWeight="semibold">
                    Explore The Area
                  </Text>
                  <Box mt="20px" fontSize="2xl">
                    <Box
                      gap="20px"
                      mt="20px"
                      alignItems="center"
                      display="flex"
                    >
                      <FaLocationArrow />
                      Genoa Cristoforo Colombo{" "}
                      <Text ml="30%" fontSize="lg">
                        16 -min walk
                      </Text>
                    </Box>
                    <Box
                      gap="20px"
                      mt="20px"
                      alignItems="center"
                      display="flex"
                    >
                      <FaCar /> Golghar{" "}
                      <Text ml="59%" fontSize="lg"> 1 -hour Car</Text>
                    </Box>
                    <Box
                      gap="20px"
                      mt="20px"
                      alignItems="center"
                      display="flex"
                    >
                      <FaPlaneDeparture />
                      Buddha Smriti Park{" "}
                      <Text ml="42%" fontSize="lg"> 3 Hours by Flight</Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      <Footer/>


      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
       
      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerHeader>Add New Address</DrawerHeader>

          <DrawerBody >
            <Input placeholder='Name' />
            <Input mt="20px" placeholder='City' />
            <Input mt="20px" placeholder='State' />
            <Input mt="20px" placeholder='Zipcode' />
            <Input mt="20px" placeholder='Adresss' />
            <Input mt="20px" placeholder='Landmark' />
            <Input  mt="20px" placeholder='Phone' />
            
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={saveAddress} colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
     
     
      </Drawer>
    </div>
  );
};

export default SinglePage;
