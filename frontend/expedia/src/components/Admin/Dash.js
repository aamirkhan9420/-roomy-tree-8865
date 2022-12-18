import "./Dash.css";
import SimpleCard from "./SimpleCard";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Tablee from "./Table";
import Banned from "./Banned";
import Hotel from "./Hotel";

import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Button,
} from "@chakra-ui/react";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notes, setNotes] = useState("");
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    fetch("https://adorable-pear-earrings.cyclic.app/user", {})
      .then((res) => res.json())
      .then((res) => {
       

        setNotes(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const toggle = async () => {
    // fetch(`https://tame-puce-cockatoo-tam.cyclic.app/notes/delete/${noteID}`, {
    //   method: "DELETE",
    //   // headers : {
    //   //     "Authorization" : `Bearer ${localStorage.getItem("psctoken")}`
    //   // }
    // });
    setState(!state);

    if (state == false) {
      const email = localStorage.getItem("toggleemail");
      

      const data = await fetch(
        "https://adorable-pear-earrings.cyclic.app/banned",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );
    }
    if ((state = true)) {
      var idd = localStorage.getItem("toggleemail");

      const data = await fetch(
        "https://adorable-pear-earrings.cyclic.app/banned",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
   
      // let fin=data.find(idd)
      // console.log(fin)
      // console.log(data)
      //  var id=data.find(idd)

      const dele = await fetch(
        "https://adorable-pear-earrings.cyclic.app/banned",
        {
          method: "DELETE",
        }
      );
    }
  };
  let note = "hgha";
  return (
    <>
      {/* <ChakraProvider> */}
        <Tabs className="middle">
          <TabList className="middlefun">
            <Tab className="man">Users</Tab>
            <Tab className="man">Banned Users</Tab>
            <Tab className="man">Add Room</Tab>
            <Tab className="man">Hotels Lists </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Tablee/>
            </TabPanel>

          
            <TabPanel>
            <Banned />
            </TabPanel>

            <TabPanel>
              <SimpleCard />
            </TabPanel>


            <TabPanel>
            <Hotel />
            </TabPanel>
          </TabPanels>
        </Tabs>
      {/* </ChakraProvider> */}

      <hr />

     
    </>
  );
};

export default Dash;
