import React from "react";
import "./Dash.css";
import SimpleCard from "./SimpleCard";

import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  ChakraProvider,
} from "@chakra-ui/react";
const Dash = () => {
  return (
    <>
      <div>
        <ChakraProvider>
          <Tabs className="middle">
            <TabList className="middlefun">
              <Tab className="man">Users</Tab>
              <Tab className="man">Add Room</Tab>
              <Tab className="man">Room Status</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <TableContainer>
                  <Table size="md">
                    <Thead>
                      <Tr>
                        <Th>Email</Th>
                        <Th>into</Th>
                        <Th>multiply</Th>
                        <Th>Status</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>nirajraj00.nk@gmail.com</Td>

                        <Td>millimetres (mm)</Td>
                        <Td>Yes</Td>
                        <Td>True</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </TabPanel>
              <TabPanel>
               <SimpleCard/>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ChakraProvider>
      </div>
    </>
  );
};

export default Dash;
