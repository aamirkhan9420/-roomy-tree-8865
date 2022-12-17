import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Heading,
    Image,
    MenuDivider
} from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
export default function NavSignIn() {
    let [islogin,setIsLogin]=useState(false)
    return (
        <div className={style.rightNavButton}>
            <Menu>
                <MenuButton _hover={{
                    background: "white",
                    color: "blue",
                }} bg='white' variant='blue' size='sm' as={Button} >
                    Sign in
                </MenuButton>
                <MenuList boxShadow='2xl' color='#343B53' w='350px'>
                <Image m='auto' mt="20px" src="https://a.travel-assets.com/pricing-claim/sparkle_white.svg" alt="" />

                    <Heading p='11px 0px 11px 20px' as='h4' size='md' textAlign="left">Save an average of 15% on thousands of hotels when you're signed in</Heading>
                    <Link to='/login' >
                        <Button colorScheme='blue' w='90%' display='block' m='auto'>
                            Sign in
                        </Button>
                    </Link>
                    <Link to={"/Signup"}>
                    <Button variant='white' w='90%' display='block' m='auto'>Create a free acount</Button>
                    </Link>
                    <MenuItem p='11px 0px 11px 20px'>List of favourites</MenuItem>
                    <MenuItem p='11px 0px 11px 20px'>Expedia Rewards</MenuItem>
                    <MenuDivider />
                    <MenuItem p='11px 0px 11px 20px'>Feedback</MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}