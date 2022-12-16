import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useToast } from "@chakra-ui/react";
import "react-toastify/dist/ReactToastify.css";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  
  Stack,
 
  Button,
  Heading,
 
  useColorModeValue,
  ChakraProvider,
} from "@chakra-ui/react";

export default function SimpleCard() {
  
  const toastt = useToast();

  const [inpval, setInpval] = useState({
    hotelPic: "",
    hotelName: "",
    hotelTag: "",
    hotelDesc: "",
    hotelOffer: "",
    rating: "",
    hotelFees: "",
    totalFees: "",
  });
  

  const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addUserdata = async (e) => {
    e.preventDefault();
    

    const {
      hotelPic,
      hotelName,
      hotelTag,
      hotelDesc,
      hotelOffer,
      rating,
      hotelFees,
      totalFees,
    } = inpval;

    if (hotelPic === "") {
      toast.warning("hotelPic is required!", {
        position: "top-center",
      });
    } else if (hotelName === "") {
      toast.error("hotelName is required!", {
        position: "top-center",
      });
    } else if (hotelTag === "") {
      toast.error("hotelTag is required!", {
        position: "top-center",
      });
    } else if (hotelDesc === "") {
      toast.error("hotelDesc is required!", {
        position: "top-center",
      });
    } else if (hotelOffer === "") {
      toast.error("hotelOffer is required!", {
        position: "top-center",
      });
    } else if (rating === "") {
      toast.error("rating is required!", {
        position: "top-center",
      });
    } else if (hotelFees === "") {
      toast.error(" hotelFees is required!", {
        position: "top-center",
      });
    } else if (totalFees === "") {
      toast.error("totalFees is required! ", {
        position: "top-center",
      });
    } else {
      // console.log("user registration succesfully done");
       console.log("niraj")
      // alert("Signup Sucessfull")
      const data = await fetch("https://adorable-pear-earrings.cyclic.app/hotel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hotelPic,
          hotelName,
          hotelTag,
          hotelDesc,
          hotelOffer,
          rating,
          hotelFees,
          totalFees
        }),
      });

      const res = await data.json();
      console.log(res);

      if ((res.msg = "Hotel added successfully")) {
        toastt({
          position: "top-center",
          description: "Room Added Successfully done 😃!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        // toast.success("Registration Successfully done 😃!", {
        //     position: "top-center"
        // });
        setInpval({
          ...inpval,
          hotelPic: "",
          hotelName: "",
          hotelTag: "",
          hotelDesc: "",
          hotelOffer: "",
          rating: "",
          hotelFees: "",
          totalFees: "",
        });

        // history("/");
      }

      // if (res.status === 201) {
      // toastt( {
      //     position: "top-center",
      //     description: "Registration Successfully done 😃!",
      //     status: 'success',
      //     duration: 9000,
      //    isClosable: true,
      // });

    }
  };
  return (
    <>
    {
  
      <ChakraProvider>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Add room to your account</Heading>
            </Stack>
            
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="hotelPic">
                  <FormLabel>hotelPic</FormLabel>
                  <Input type="text" onChange={setVal} value={inpval.hotelPic} name="hotelPic"/>
                </FormControl>
                <FormControl id="hotelName">
                  <FormLabel>hotelName</FormLabel>
                  <Input
                    type="text"
                    onChange={setVal}
                    value={inpval.hotelName}
                    name="hotelName"
                  />
                </FormControl>
                <FormControl id="hotelTag">
                  <FormLabel>hotelTag</FormLabel>
                  <Input
                    type="text"
                    onChange={setVal}
                    value={inpval.hotelTag}
                    name="hotelTag"
                  />
                </FormControl>
                <FormControl id="hotelDesc">
                  <FormLabel>hotelDesc</FormLabel>
                  <Input
                    type="text"
                    onChange={setVal}
                    value={inpval.hotelDesc}
                    name="hotelDesc"
                  />
                </FormControl>
                <FormControl id="hotelOffer">
                  <FormLabel>hotelOffer</FormLabel>
                  <Input
                    type="text"
                    onChange={setVal}
                    value={inpval.hotelOffer}
                    name="hotelOffer"
                  />
                </FormControl>
                <FormControl id="rating">
                  <FormLabel>rating</FormLabel>
                  <Input
                    type="text"
                    onChange={setVal}
                    value={inpval.rating}
                    name="rating"
                  />
                </FormControl>
                <FormControl id="hotelFees">
                  <FormLabel>hotelFees</FormLabel>
                  <Input
                    type="text"
                    onChange={setVal}
                    value={inpval.hotelFees}
                    name="hotelFees"
                  />
                </FormControl>
                <FormControl id="totalFees">
                  <FormLabel>totalFees</FormLabel>
                  <Input
                    type="text"
                    onChange={setVal}
                    value={inpval.totalFees}
                    name="totalFees"
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Button
                   onClick={addUserdata}
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",}
              }
                    >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </Box>

          </Stack>
        </Flex>
        <ToastContainer/>
      </ChakraProvider>
    
    }
<div>hello</div>
    </>
  
  );
}
