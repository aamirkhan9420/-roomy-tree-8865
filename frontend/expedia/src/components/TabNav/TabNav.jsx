import React, { useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Input, InputGroup, Stack, Box, color, WrapItem } from '@chakra-ui/react'
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
      // console.log(res)
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
    <div>
      <Tabs align='center'>
        <TabList>
          <Tab>Stays</Tab>
          <Tab>Flights</Tab>
          <Tab>Cars</Tab>
          <Tab>Packages</Tab>
          <Tab>Things to do</Tab>
        </TabList>
        <TabPanels >

          <TabPanel textAlign={"center"} display={"flex"} alignItems={"center"} gap={"30px"} flexDirection={"column"}>
            <Box textAlign={"center"} display={"flex"} alignItems={"center"} gap={"10px"}>
              <Select placeholder='Going to' width={"250px"} defaultValue={location} onChange={(e) => setLocation(e.target.value)}>
                {cityname.length > 0 && cityname.map((el) => (<option value='option1'>{el.name}</option>))}


              </Select >
              <InputGroup textAlign={"center"} display={"flex"} alignItems={"center"} gap={"10px"}>
                <label>Check-in</label>
                <Input htmlSize={4} width='auto' type="date" w={"250px"} value={checkindate} onChange={(e) => setCheckindate(e.target.value)} />
                <label>Check-out</label>
                <Input htmlSize={4} width='auto' type="date" w={"250px"} value={checkOutdate} onChange={(e) => setCheckOutdate(e.target.value)} />
                <Input htmlSize={4} width='auto' w={"250px"} placeholder={"Travellers 1 room ,2 travellers"} />
              </InputGroup>

            </Box>
            <Button colorScheme='messenger' width={"200px"}>Serach</Button>
          </TabPanel>


          <TabPanel textAlign={"center"} display={"flex"} alignItems={"center"} gap={"30px"} flexDirection={"column"}>
            <Box textAlign={"center"} display={"flex"} alignItems={"center"} gap={"10px"}>
              <Select placeholder='Leaving from' width={"250px"} defaultValue={leavingfrom} onChange={(e) => setLeavingfrom(e.target.value)}>
                {flight.length > 0 && flight.map((el) => (
                  <option value='option1'>{el.from}</option>
                ))}


              </Select >
              <Select placeholder='Going to' width={"250px"} defaultValue={goingTo} onChange={(e) => setGoingTo(e.target.value)}>
                {flight.length > 0 && flight.map((el) => (
                  <option value='option1'>{el.to}</option>
                ))}

              </Select >
              <InputGroup textAlign={"center"} display={"flex"} alignItems={"center"} gap={"10px"}>
                <label>Departing</label>
                <Input htmlSize={4} width='auto' type="date" w={"250px"} value={departing} onChange={(e) => setDeparting(e.target.value)} />
                <label>Returning</label>
                <Input htmlSize={4} width='auto' type="date" w={"250px"} value={returning} onChange={(e) => setReturning(e.target.value)} />
              </InputGroup>

            </Box>
            <Button colorScheme='messenger' width={"200px"}>Serach</Button>
          </TabPanel>
          <TabPanel textAlign={"center"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={"10px"} margin={"auto"} >
            <Box textAlign={"center"} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"10px"} margin={"auto"}>
              <Select placeholder='Leaving from' width={"500px"} defaultValue={leavingfrom} onChange={(e) => setLeavingfrom(e.target.value)}>
                {flight.length > 0 && flight.map((el) => (
                  <option value='option1'>{el.from}</option>
                ))}

              </Select >
              <Select placeholder='Going to' width={"500px"} defaultValue={goingTo} onChange={(e) => setGoingTo(e.target.value)}>
                {flight.length > 0 && flight.map((el) => (
                  <option value='option1'>{el.to}</option>
                ))}

              </Select >
            </Box>
            <InputGroup textAlign={"center"} display={"flex"} alignItems={"center"} gap={"10px"}>
              <label>Pick-up date</label>
              <Input htmlSize={4} width='auto' type="date" w={"150px"} value={pickupdate} onChange={(e) => setPickupdate(e.target.value)} />
              <label>Drop-off date</label>
              <Input htmlSize={4} width='auto' type="date" w={"150px"} value={dropupdate} onChange={(e) => setDropOffdate(e.target.value)} />
              <label>Pick-up time</label>

              <Input htmlSize={4} width='auto' type="time" w={"150px"} value={pickuptime} onChange={(e) => setPickupTime(e.target.value)} />
              <label>Drop-off time</label>

              <Input htmlSize={4} width='auto' type="time" w={"150px"} value={dropofftime} onChange={(e) => setDropofftime(e.target.value)} />

            </InputGroup>
         <Button colorScheme={"messenger"} width={"200px"}>Serach</Button>
          </TabPanel>


          <TabPanel textAlign={"center"} display={"flex"} alignItems={"center"} gap={"30px"} flexDirection={"column"}>
            <Box textAlign={"center"} display={"flex"} alignItems={"center"} gap={"10px"}>
              <Select placeholder='Leaving from' width={"250px"} defaultValue={leavingfrom} onChange={(e) => setLeavingfrom(e.target.value)}>
                {flight.length > 0 && flight.map((el) => (
                  <option value='option1'>{el.from}</option>
                ))}


              </Select >
              <Select placeholder='Going to' width={"250px"} defaultValue={goingTo} onChange={(e) => setGoingTo(e.target.value)}>
                {flight.length > 0 && flight.map((el) => (
                  <option value='option1'>{el.to}</option>
                ))}

              </Select >
              <InputGroup textAlign={"center"} display={"flex"} alignItems={"center"} gap={"10px"}>
                <label>Departing</label>
                <Input htmlSize={4} width='auto' type="date" w={"250px"} value={departing} onChange={(e) => setDeparting(e.target.value)} />
                <label>Returning</label>
                <Input htmlSize={4} width='auto' type="date" w={"250px"} value={returning} onChange={(e) => setReturning(e.target.value)} />
              </InputGroup>

            </Box>
            <Button colorScheme='messenger' width={"200px"}>Serach</Button>
          </TabPanel>

        </TabPanels>
      </Tabs>
    </div>
  )
}
