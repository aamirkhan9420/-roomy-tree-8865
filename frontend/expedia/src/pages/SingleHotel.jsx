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
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Map from "./product/map";
import Navbar from "../components/Navbar/Navbar";
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

const SinglePage = () => {
  let { HotelID } = useParams();
  console.log(HotelID)
  const [data, setData] = useState({});

  const getdata = () => {
    axios
      .get(
        `https://adorable-pear-earrings.cyclic.app/hotel/${HotelID}`
      )
      .then((res) => setData(res.data));
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

  return (
    <div>
<Navbar/>
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
              width="40%"
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
              <Link to={`payment`}>
              <Button size="lg" variant="solid" colorScheme="blue">
                  Reserve a room
                </Button>
              </Link>
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
    </div>
  );
};

export default SinglePage;
