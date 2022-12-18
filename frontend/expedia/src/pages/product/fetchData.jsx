import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const FetchData = ({ ele }) => {

  const {
    hotelDesc,
    hotelFees,
    hotelName,
    hotelOffer,
    hotelPic,
    hotelTag,
    rating,
    totalFees,
    _id
  } = ele;
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      textAlign="start"
    >
      <Link to={`/hotel/${_id}`}>
      <Image 
        objectFit="cover"
        maxW={{ base: "100%", sm: "300px" }}
        src={hotelPic}
        alt={hotelName}
      />
      </Link>

      <Stack>
        <CardBody>
          <Heading size="md">{hotelName}</Heading>

          <Text py="2">{hotelDesc}</Text>

          <Text  fontWeight="semibold" py="2"> <span style={{color:"teal",fontWeight:"bold"}}>Offer : </span> {hotelOffer}</Text>

          <Text fontWeight="semibold" py="2"> <span style={{color:"teal",fontWeight:"bold"}}>Rating : </span> {rating}</Text>
          <Text fontWeight="semibold" py="2"> <span style={{color:"teal",fontWeight:"bold"}}>Price : </span> {hotelFees}</Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Book now
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default FetchData;
