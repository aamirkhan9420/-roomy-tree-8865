import { Card, CardBody } from '@chakra-ui/react';
import React from 'react'
import TabNav from '../TabNav/TabNav'
import style from "./RoundCornerContainer.module.css";
export default function RoundCornerContainer() {
  return (

     
    
    <Card className={style.RoundCornerContainer_container}>
    <CardBody>
    <TabNav />
    </CardBody>
  </Card>
  )
}
