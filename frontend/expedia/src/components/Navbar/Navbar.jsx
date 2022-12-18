import React, { useState } from 'react'
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
  
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  
  IconButton,
} from '@chakra-ui/react'
import Moretravel from './Moretravel';
import NavSignIn from './NavSignIn';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { useEffect } from 'react';
import {  HamburgerIcon } from '@chakra-ui/icons';

export default function Navbar() {
  const [isLogin, setLogin] = useState(false)
let [isWindo, setWindo] = useState(window.innerWidth)
  const deleteUser = () => {
    localStorage.removeItem("user")
    setLogin(false)
  }
  const FetchUser = () => {
    JSON.parse(localStorage.getItem("user")) ? setLogin(true) : setLogin(false)

  }
  window.addEventListener('resize', function () {
  
      setWindo(window.innerWidth)
      
  });
  useEffect(() => {
    FetchUser()
    
  }, [])
  return (
    <div className={style.nav_container} >
      <div>
        <Logo />
        <div id={style.MoreTravel}><Moretravel /></div>
      </div>

     { isWindo>970 &&<div id={style.rightNav}>


        {isLogin ?
          <>

            <Menu>
              <MenuButton className={style.fa_user}>
                <i class="fa-solid fa-user" as={Button}></i>
              </MenuButton>

              <MenuList>
                <MenuGroup title={`Hi ${JSON.parse(localStorage.getItem("user")).name}`}>

                  <MenuItem textAlign={"center"}>{JSON.parse(localStorage.getItem("user")).email} </MenuItem>
                  <MenuDivider />

                  <Link to={"/Account"}><MenuItem>Account</MenuItem></Link>


                </MenuGroup>
                <MenuDivider />
                <MenuGroup >
                  <MenuItem onClick={() => deleteUser()}>Sign out</MenuItem>

                </MenuGroup>
              </MenuList>
            </Menu>
          </>
          : <Link to={"/"}><NavSignIn />  </Link>}
        <Link to={"/login"}>
          <BsFillBellFill className={style.rightNavButton}/>

        </Link>
        <Button className={style.rightNavButton} bg='white' variant='white' size='sm' >Trips</Button>
        <Button className={style.rightNavButton} bg='white' variant='white' size='sm' >Support</Button>
        <Button className={style.rightNavButton} bg='white' variant='white' size='sm' ><i className="fa-solid fa-globe"></i> &nbsp; English</Button>

      </div>}
      {
        isWindo<970&&<Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          variant='outline'
          // colorScheme= 'blac' 
          position={"sticky"} 
          
          
        />
          
        <MenuList  position={"fixed"}   top={"0px"} right={"60px"} >
        <MenuOptionGroup >
    {/* <MenuItemOption> */}
    {isLogin ?
          <>

            <Menu>
              <MenuButton className={style.fa_user}>
                <i class="fa-solid fa-user" as={Button}></i>
              </MenuButton>

              <MenuList>
                <MenuGroup title={`Hi ${JSON.parse(localStorage.getItem("user")).name}`}>

                  <MenuItem textAlign={"center"}>{JSON.parse(localStorage.getItem("user")).email} </MenuItem>
                  <MenuDivider />

                  <Link to={"/Account"}><MenuItem>Account</MenuItem></Link>


                </MenuGroup>
                <MenuDivider />
                <MenuGroup >
                  <MenuItem onClick={() => deleteUser()}>Sign out</MenuItem>

                </MenuGroup>
              </MenuList>
            </Menu>
          </>
          : <Link to={"/"}><NavSignIn />  </Link>}
        {/* </MenuItemOption> */}
        </MenuOptionGroup>
    <MenuDivider />
    <MenuOptionGroup >
    <MenuItemOption>
     <Link to={"/login"}>
          <BsFillBellFill />

        </Link>
        </MenuItemOption>
        </MenuOptionGroup>
    <MenuDivider />

    <MenuOptionGroup >
      <MenuItemOption value='email'>Trips</MenuItemOption>
      <MenuItemOption value='phone'>Support</MenuItemOption>
      <MenuItemOption value='country'>English</MenuItemOption>
    </MenuOptionGroup>
  </MenuList>
  
      </Menu>
      }
    </div>
  )
}
