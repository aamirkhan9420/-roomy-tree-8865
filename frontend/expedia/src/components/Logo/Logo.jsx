import { Image } from '@chakra-ui/react'
import React from 'react'
import style from './Logo.module.css'

export default function Logo() {
  return (
    <div className={style.logo_div}>
        {/* <img className={style.logo} src='./exprobook.png' alt="logo" /> */}
        {/* <Image src='./exprobook.png' /> */}
        <Image
  borderRadius='full'
  // boxSize='150px'
  minW={"150px"}
  src='./exprobook.png'
  alt='Dan Abramov'
/>
    </div>
  )
}
