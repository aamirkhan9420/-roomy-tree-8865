import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Grid, GridItem,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,

 } from '@chakra-ui/react'
import "./Hotel.css"


const Hotel = () => {
   
  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [notes, setNotes] = useState("");
    const [state, setState] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
      setLoading(true);
      fetch("https://adorable-pear-earrings.cyclic.app/hotel", {})
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
  
          setNotes(res);
          setLoading(false);
        })
        .catch((err) => {
          setError(true);
          setLoading(false);
        });
    }, []);

    const deleteNote = (noteID) => {
      fetch(`https://adorable-pear-earrings.cyclic.app/${noteID}`, {
          method : "DELETE",
          // headers : {
          //     "Authorization" : `Bearer ${localStorage.getItem("psctoken")}`
          // }
      })
    }
   
  
  return (
    notes &&
    notes.length > 0 &&  notes.map((note)=>{
      return(
        <>
        
        
    <Card
    direction={{ base: "column", sm: "row" }}
    overflow="hidden"
    variant="outline"
    textAlign="start"
  >
    <Image
      objectFit="cover"
      maxW={{ base: "100%", sm: "300px" }}
      src={note.hotelPic}
      alt={note.hotelName}
    />

    <Stack>
      <CardBody>
        <Heading size="md">{note.hotelName}</Heading>

        <Text py="2">{note.hotelDesc}</Text>

        <Text  fontWeight="semibold" py="2"> <span style={{color:"teal",fontWeight:"bold"}}>Offer : </span> {note.hotelOffer}</Text>

        {/* <Text fontWeight="semibold" py="2"> <span style={{color:"teal",fontWeight:"bold"}}>Rating : </span> {note.rating}</Text> */}
        <Text fontWeight="semibold" py="2"> <span style={{color:"teal",fontWeight:"bold"}}>Price : </span> {note.hotelFees}</Text>
      </CardBody>

      <CardFooter display="flex" gap="20px">
        <Button variant="solid" colorScheme="blue">
          Update
        </Button>

        <Button variant="solid" colorScheme="blue" onClick={()=>deleteNote(note._id)}> Delete</Button>
      </CardFooter>
    </Stack>
  </Card>
        </>
      )
    })
    
  
 
  )
}

export default Hotel
