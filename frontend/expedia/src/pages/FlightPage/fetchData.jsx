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
const SelectedFlight=(id)=>{
console.log(id)
}
  const {
    safety,
    price,
    FlightN,
    from,
    image,
    time,
    to,
    
    _id
  } = ele;
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      textAlign="start"
    >
      <Link to={`/flight/${_id}`}>
      <Image 
        objectFit="cover"
width="200px"

        maxW={{ base: "100%", sm: "200px" }}
        src={image}
        alt={FlightN}
      />
      </Link>

      <Stack>
        <CardBody>
          <Heading size="md">{FlightN}</Heading>

          <Text py="2">{safety}</Text>

          <Text  fontWeight="semibold" py="2"> <span style={{color:"teal",fontWeight:"bold"}}>Time : </span> {time}</Text>

          <Text fontWeight="semibold" py="2"> <span style={{color:"teal",fontWeight:"bold"}}>From : </span> {from},<span style={{color:"teal",fontWeight:"bold"}}>To : </span> {to}</Text>
          <Text fontWeight="semibold" py="2"> <span style={{color:"teal",fontWeight:"bold"}}>Price : </span> {price}</Text>
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
