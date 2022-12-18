import React, { useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Input, InputGroup, Stack, Box, color, WrapItem, SimpleGrid, InputLeftAddon } from '@chakra-ui/react'
import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

import style from "./Tab.module.css"
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { Select } from '@chakra-ui/react'
import { useEffect } from 'react'
const IconStyle = {
  fontSize: '20px',

}
export default function TabNav() {
  const [location, setLocation] = useState("")
  const [checkindate, setCheckindate] = useState("")
  const [checkOutdate, setCheckOutdate] = useState("")

  const [leavingfrom, setLeavingfrom] = useState("")
  const [goingTo, setGoingTo] = useState("")
  const [departing, setDeparting] = useState("")
  const [returning, setReturning] = useState("")
  const [pickupdate, setPickupdate] = useState("")
  const [dropupdate, setDropOffdate] = useState("")
  const [pickuptime, setPickupTime] = useState("")
  const [dropofftime, setDropofftime] = useState("")
  const [cityname, setCityname] = useState("")
  const [flight, setFlight] = useState("")
  const [car, setCar] = useState("")
  const [packages, setPackage] = useState("")







  useEffect(() => {
    fetch("https://adorable-pear-earrings.cyclic.app/car").then((res) => res.json()).then((res) => {
      console.log(res)
      setCityname(res)
    }).catch((er) => console.log(er))
    fetch("https://adorable-pear-earrings.cyclic.app/flight").then((res) => res.json()).then((res) => {
      // console.log(res)
      setFlight(res)
    }).catch((er) => console.log(er))
    fetch("https://adorable-pear-earrings.cyclic.app/flight").then((res) => res.json()).then((res) => {
      // console.log(res)
      setCar(res)
    }).catch((er) => console.log(er))
    // fetch("https://adorable-pear-earrings.cyclic.app/pacakge").then((res) => res.json()).then((res) => {
    //   console.log(res)
    //   // setPackage(res)
    // }).catch((er) => console.log(er))
  }, [])

  return (
    <div >
      <Tabs align='center'>
        <TabList   className={style.tabs}>
        <SimpleGrid minChildWidth='0px' spacing='20px'  display={"flex"}>
<Box><Tab className={style.tab1} >Stays</Tab></Box>
<Tab className={style.tab1}>Flights</Tab>
<Tab className={style.tab1}>Cars</Tab>
<Tab className={style.tab1}>Things to do</Tab>


          
          </SimpleGrid>
        </TabList>
        
        <TabPanels >
          {/* textAlign={"center"} display={"flex"} alignItems={"center"} gap={"30px"} flexDirection={"column"} */}
          <TabPanel  >
            <SimpleGrid minChildWidth='120px' spacing='40px'>
              <Box >
                <Select placeholder='Going to' defaultValue={location} onChange={(e) => setLocation(e.target.value)}>
                  {cityname.length > 0 && cityname.map((el, index) => (<option value='option1' key={el._id}>{el.name}</option>))}


                </Select >
              </Box>
              <Box >
                <InputGroup>
                  <InputLeftAddon children='Check-in' /><Input htmlSize={4} type="date" value={checkindate} onChange={(e) => setCheckindate(e.target.value)} />
                </InputGroup>
              </Box>

              <Box >
                <InputGroup>
                  <InputLeftAddon children='Check-out' />
                  <Input htmlSize={4} type="date" value={checkOutdate} onChange={(e) => setCheckOutdate(e.target.value)} />
                </InputGroup>
              </Box>
              <Box ><Input htmlSize={4} placeholder={"Travellers 1 room ,2 travellers"} /></Box>

            </SimpleGrid>
            {/*  <Box textAlign={"center"} display={"flex"} alignItems={"center"} gap={"10px"} className={style.box} >
              <Select placeholder='Going to' width={"25%"} defaultValue={location} onChange={(e) => setLocation(e.target.value)}>
                {cityname.length > 0 && cityname.map((el,index) => (<option value='option1' key={el._id}>{el.name}</option>))}


              </Select >
              
              <InputGroup textAlign={"center"} display={"flex"} alignItems={"center"} gap={"10px"} className={style.Inputgroup}>
                <label>Check-in</label>
                <Input htmlSize={4}  type="date" width={"25%"} value={checkindate} onChange={(e) => setCheckindate(e.target.value)} />
                <label>Check-out</label>
                <Input htmlSize={4}  type="date" width={"25%"} value={checkOutdate} onChange={(e) => setCheckOutdate(e.target.value)} />
                <Input htmlSize={4}  width={"25%"} placeholder={"Travellers 1 room ,2 travellers"} />
              </InputGroup>

            </Box>*/}
            <Link to={"/hotel"}>
              <Button colorScheme='messenger' paddingLeft={"40px"} paddingRight={"40px"}  mt={"50px"}>Serach</Button>
            </Link>
          </TabPanel>

          {/* textAlign={"center"} display={"flex"} alignItems={"center"} gap={"30px"} flexDirection={"column"} */}
          <TabPanel >
            <SimpleGrid minChildWidth='120px' spacing='40px'>

              <Box >
                <Select placeholder='Leaving from' defaultValue={leavingfrom} onChange={(e) => setLeavingfrom(e.target.value)}>
                  {flight.length > 0 && flight.map((el, index) => (
                    <option value='option1' key={el._id}>{el.from}</option>
                  ))}


                </Select >
              </Box>
              <Box>
                <Select placeholder='Going to' defaultValue={goingTo} onChange={(e) => setGoingTo(e.target.value)}>
                  {flight.length > 0 && flight.map((el, index) => (
                    <option value='option1' key={el._id}>{el.to}</option>
                  ))}

                </Select >
              </Box>
              <Box>
                <InputGroup >

                  <InputLeftAddon children='Departing' />

                  <Input htmlSize={4} width='auto' type="date" value={departing} onChange={(e) => setDeparting(e.target.value)} />
                </InputGroup>

              </Box>
              <Box>
                <InputGroup >

                  <InputLeftAddon children='Returning' />
                  <Input htmlSize={4} width='auto' type="date" value={returning} onChange={(e) => setReturning(e.target.value)} />
                </InputGroup>

              </Box>
            </SimpleGrid>
            <Link to={"/"}>
              <Button colorScheme='messenger' paddingLeft={"40px"} paddingRight={"40px"}  mt={"50px"}>Serach</Button>
            </Link>
          </TabPanel>
          <TabPanel >
            {/* textAlign={"center"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={"10px"} margin={"auto"} */}
            <SimpleGrid minChildWidth='120px' spacing='40px'>

              <Box >
                <Select placeholder='Leaving from' defaultValue={leavingfrom} onChange={(e) => setLeavingfrom(e.target.value)}>
                  {flight.length > 0 && flight.map((el, index) => (
                    <option value='option1' key={el._id}>{el.from}</option>
                  ))}

                </Select >
              </Box>
              <Box>
                <Select placeholder='Going to' defaultValue={goingTo} onChange={(e) => setGoingTo(e.target.value)}>
                  {flight.length > 0 && flight.map((el, index) => (
                    <option value='option1' key={el._id}>{el.to}</option>
                  ))}

                </Select >
              </Box>
            </SimpleGrid>
            <SimpleGrid minChildWidth='120px' spacing='40px' mt={"10px"}>
              <Box>
                <InputGroup >

                  {/* <label>Pick-up date</label> */}
                  <InputLeftAddon children='Pick-up date' />

                  <Input htmlSize={4} width='auto' type="date" value={pickupdate} onChange={(e) => setPickupdate(e.target.value)} />
                </InputGroup>

              </Box>
              <Box>  <InputGroup >

                <InputLeftAddon children='Drop-off date' />

                {/* <label>Drop-off date</label> */}
                <Input htmlSize={4} width='auto' type="date" value={dropupdate} onChange={(e) => setDropOffdate(e.target.value)} />
              </InputGroup>
              </Box>
              <Box>
                <InputGroup >
                  {/* <label>Pick-up time</label> */}
                  <InputLeftAddon children='Pick-up time' />

                  <Input htmlSize={4} width='auto' type="time" value={pickuptime} onChange={(e) => setPickupTime(e.target.value)} />
                </InputGroup>
              </Box>

              <Box>
                <InputGroup >
                  <InputLeftAddon children='Drop-off time' />

                  {/* <label>Drop-off time</label> */}
                  <Input htmlSize={4} width='auto' type="time" value={dropofftime} onChange={(e) => setDropofftime(e.target.value)} />

                </InputGroup>
              </Box>
            </SimpleGrid>
            <Link to={"/"}>
              <Button colorScheme={"messenger"} paddingLeft={"40px"} paddingRight={"40px"}  mt={"50px"}>Serach</Button>
            </Link>
          </TabPanel>

{/* textAlign={"center"} display={"flex"} alignItems={"center"} gap={"30px"} flexDirection={"column"} */}
          <TabPanel >
          <SimpleGrid minChildWidth='120px' spacing='40px'>
          
            <Box >
              <Select placeholder='Leaving from'  defaultValue={leavingfrom} onChange={(e) => setLeavingfrom(e.target.value)}>
                {flight.length > 0 && flight.map((el, index) => (
                  <option value='option1' key={el._id}>{el.from}</option>
                ))}


              </Select >
              </Box>
              <Box>
              <Select placeholder='Going to'  defaultValue={goingTo} onChange={(e) => setGoingTo(e.target.value)}>
                {flight.length > 0 && flight.map((el) => (
                  <option value='option1' key={el._id} >{el.to}</option>
                ))}

              </Select >
              </Box>
              <Box>
              <InputGroup >
                {/* <label>Departing</label> */}
                <InputLeftAddon children='Departing' />

                <Input htmlSize={4} width='auto' type="date" value={departing} onChange={(e) => setDeparting(e.target.value)} />
               </InputGroup>
               </Box>
               <Box>
               <InputGroup>
                {/* <label>Returning</label> */}
                <InputLeftAddon children='Returning' />
              
                <Input htmlSize={4} width='auto' type="date" value={returning} onChange={(e) => setReturning(e.target.value)} />
              </InputGroup>

            </Box>
            </SimpleGrid>
            <Link to={"/"}>
              <Button colorScheme='messenger'  paddingLeft={"40px"} paddingRight={"40px"} mt={"50px"}>Serach</Button>
            </Link>
          </TabPanel>

        </TabPanels>
      </Tabs>
    </div>
  )
}
