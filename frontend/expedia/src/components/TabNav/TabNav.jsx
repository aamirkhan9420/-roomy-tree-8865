import React from 'react'
import {Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

import style from "./Tab.module.css"
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
const IconStyle = {
    fontSize: '20px'
}
export default function TabNav() {
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
  <TabPanels>
    <TabPanel>
   <p>first</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
    <TabPanel>
      <p>Four!</p>
    </TabPanel>   <TabPanel>
      <p>Five!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
    </div>
  )
}
