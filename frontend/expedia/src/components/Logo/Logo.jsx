import { Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import style from './Logo.module.css'

export default function Logo() {
  return (
    <div className={style.logo_div}>
  <Link to={"/"}>
        <Image
  borderRadius='full'
 
  minW={"150px"}
  src='../exprobook.png'
  alt='logo'
/>
</Link>
    </div>
  )
}
