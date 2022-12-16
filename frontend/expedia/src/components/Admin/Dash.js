import "./Dash.css";
import SimpleCard from "./SimpleCard";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


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
  const [state,setState]=useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    fetch("https://adorable-pear-earrings.cyclic.app/user", {
     
    })
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

  const toggle = async() => {
    // fetch(`https://tame-puce-cockatoo-tam.cyclic.app/notes/delete/${noteID}`, {
    //   method: "DELETE",
    //   // headers : {
    //   //     "Authorization" : `Bearer ${localStorage.getItem("psctoken")}`
    //   // }
    // });
   setState(!state)
 
   if(state==false){
    const email =localStorage.getItem("toggleemail")
    console.log(state)
   
    const data = await fetch("https://adorable-pear-earrings.cyclic.app/banned", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email
        }),
      });
       }
   if(state=true){
   
    var idd =localStorage.getItem("toggleemail")

    console.log(state)
    const data=await fetch("https://adorable-pear-earrings.cyclic.app/banned",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    console.log(data)
    // let fin=data.find(idd)
    // console.log(fin)
    // console.log(data)
  //  var id=data.find(idd)
     
    const dele = await fetch("https://adorable-pear-earrings.cyclic.app/banned", {
        method: "DELETE",
        });

   }
  };

  return (
    <>
      {loading && "Loading....."}
      {error && "something went wrong...."}
      {notes &&
        notes.length > 0 &&
        notes.map((note) => {
          return (
            <div>
              <ChakraProvider>
                <Tabs className="middle">
                  <TabList className="middlefun">
                    <Tab className="man">Users</Tab>
                    <Tab className="man">Add Room</Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                      <TableContainer>
                        <Table size="md">
                          <Thead>
                            <Tr>
                              <Th>Email</Th>
                             
                              <Th>Status</Th>
                            </Tr>
                          </Thead>

                          <Tbody>
                            <Tr>
                              <Td>{note.email}</Td>
                             
                               {localStorage.setItem("toggleid",note._id)}
                               {localStorage.setItem("toggleemail",note.email)}


                              <Td>
                                <Button className={"toggle--button"+ (state ? 'toggle--close':"")} onClick={toggle}
                               
                                >
                                 {state ? 'Blocked':'Active '}
                                </Button>
                                 
                                
                              </Td>
                            </Tr>
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </TabPanel>

                    <TabPanel><SimpleCard/></TabPanel>
                  </TabPanels>
                </Tabs>
              </ChakraProvider>

              <hr />
            </div>
          );
        })}
    </>
  );
};

export default Dash;