import "./Dash.css";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
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

const Banned = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notes, setNotes] = useState("");
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  
  const getdata=()=>{
    setLoading(true);
    fetch("https://adorable-pear-earrings.cyclic.app/banned", {})
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
  }

  useEffect(() => {
   getdata()
  }, []);

  const deletbtn = (noteID) => {

    toast.success("User Removed successfully", {
      position: "top-center",
    });
    
    console.log(noteID);
    fetch(`https://adorable-pear-earrings.cyclic.app/banned/${noteID}`, {
      method: "DELETE",
      // headers : {
      //     "Authorization" : `Bearer ${localStorage.getItem("psctoken")}`
      // }
    })
    .then(()=>{
      getdata()
    })
 
  };

  return (
    <>
      {
        <ChakraProvider>
          <TableContainer>
            <Table size="md">
              <Thead>
                <Tr>
                  <Th>Email</Th>
                  <Th>Operation</Th>
                </Tr>
              </Thead>

              <Tbody>
                {loading && "Loading....."}
                {error && "something went wrong...."}
                {notes &&
                  notes.length > 0 &&
                  notes.map((note) => {
                    return (
                      <>
                        <Tr>
                          <Td>{note.email}</Td>

                          <Td>
                            <Button
                              variant="solid"
                              colorScheme="blue"
                              onClick={() => deletbtn(note._id)}
                            >
                              Active
                            </Button>
                          </Td>
                        </Tr>
                      </>
                    );
                  })}
              </Tbody>
            </Table>
          </TableContainer>
        </ChakraProvider>
      }
    </>
  );
};

export default Banned;
