import "./Dash.css";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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
  Button,
} from "@chakra-ui/react";

const Tablee = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notes, setNotes] = useState("");
  const [state, setState] = useState(false);
  const navigate = useNavigate();

  const getdata=()=>{
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
  }
  useEffect(() => {
    getdata()
  }, []);

  const addbtn = (email) => {
    
    setState(!state);
    fetch(`https://adorable-pear-earrings.cyclic.app/banned`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    })
    .then(()=>{
    getdata()
    })
    // window.location.reload();
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
                  <Th></Th>
                  <Th>Actions</Th>
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
                          <Td>{"    "}</Td>
                          <Td display="flex" gap="30px">
                            <Button
                              variant="solid"
                              colorScheme="blue"
                              onClick={() => addbtn(note.email)}
                            >
                              Block
                            </Button>

                       
                          </Td>
                          {/* <Td>
                          </Td> */}
                          {/* <Td>
                            <Button
                              className={"toggle--button" +(state ? "toggle--close" : "")}
                              onClick={() => addbtn(note.email)}>
                              {state ? "Block" : "Blocked "}
                            </Button>
                          </Td>  */}
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

export default Tablee;
