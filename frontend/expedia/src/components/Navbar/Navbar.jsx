import React from 'react'
import style from "./Navbar.module.css"
import { IoIosArrowDown } from "react-icons/io";
import { RiHotelFill } from "react-icons/ri";
import { BsFillBellFill } from "react-icons/bs";
import {
    Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import Moretravel from './Moretravel';
import NavSignIn from './NavSignIn';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

export default function Navbar() {
  return (
    <div className={style.nav_container}>
    <div>
     <Logo />
    <div id={style.MoreTravel}><Moretravel /></div>
    </div>
    
    <div id={style.rightNav}>
                    <NavSignIn />
                    <Link to={"/"}>
                    <BsFillBellFill />
                   </Link>
                    <Button className={style.rightNavButton} bg='white' variant='white' size='sm' >Trips</Button>
                    <Button className={style.rightNavButton} bg='white' variant='white' size='sm' >Support</Button>
                    <Button className={style.rightNavButton} bg='white' variant='white' size='sm' ><i className="fa-solid fa-globe"></i> &nbsp; English</Button>
                    
                </div>



    
     

    </div>
  )
}
