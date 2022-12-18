import React from 'react'
import style from "./Footer.module.css";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,

  TableContainer,
 
} from '@chakra-ui/react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
export default function Footer() {
  const navigate=useNavigate()
  const handleaboutus=()=>{
    navigate("/aboutus")
  }
  return (
    <div className={style.footer_cotainer}>
      <div className={style.footer_main}>
        <h1>Expedia Group</h1>
        <div className={style.gridcolumn}>
          <TableContainer size='sm'>
            <Table variant='none'>

              <Thead>
                <Tr>
                  <Th>Company</Th>
                  <Th>EXPLORE</Th>
                  <Th>Policies</Th>
                  <Th>Help</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  
                  <Td onClick={handleaboutus} cursor={"pointer"}>About us</Td>
                  
                  <Td>India travel guide</Td>
                  <Td >Privacy statements</Td>
                  <Td >Support</Td>
                </Tr>
                <Tr>
                  <Td>Jobs</Td>
                  <Td >Hotels in india</Td>
                  <Td >Terms of use</Td>
                  <Td >Change or cancel your booking </Td>
                </Tr>
                <Tr>
                  <Td>List your property</Td>
                  <Td>Holiday rentals in india</Td>
                  <Td >Vr bo terms and condition</Td>
                  <Td >Refund process and timeline</Td>
                </Tr>
                <Tr>
                  <Td>Partnership</Td>
                  <Td>Holiday packages in india</Td>
                  <Td >Book a flite using an airline in credit</Td>
                  <Td >International travel documents</Td>
                </Tr>
                <Tr>
                  <Td >Domestic flights</Td>
                  <Td >Car hire in india</Td>
                  <Td >All accomodation types</Td>
                  <Td >Travel blog</Td>
                </Tr>
              </Tbody>

            </Table>
          </TableContainer>

        </div >
      </div>
      <img src="https://images.trvl-media.com/media/content/expind/images/sg/secure.png" alt="" />
      <h3>© 2022 Expedia, Inc., an Expedia Group company. All rights reserved. Expedia and the Airplane Logo are trademarks or registered trademarks of Expedia, Inc.</h3>
    </div>
  )
}
