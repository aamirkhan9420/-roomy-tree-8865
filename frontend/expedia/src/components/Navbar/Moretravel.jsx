import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import style from "./Navbar.module.css"
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
const IconStyle = {
    fontSize: '20px'
}
export default function Moretravel() {
    return (
        <div>
            <Menu>
                <MenuButton _hover={{
                    background: "white",
                    color: "blue",
                }} bg='white' variant='blue' size='sm' as={Button} rightIcon={<ChevronDownIcon w={5} h={5} />}>
                    More travel
                </MenuButton>
                <MenuList boxShadow='2xl' color='#343B53' w='370px'>
                    <Link to={"/"}>
                    <MenuItem p='11px 0px 11px 20px' ><i style={IconStyle} className="fa-solid fa-building"></i> &nbsp;  &nbsp;  &nbsp;Stays</MenuItem>
                    </Link>
                    <Link to={"/"}>
                    
                    <MenuItem p='11px 0px 11px 20px' ><i id={style.plan} style={IconStyle} className="fa-solid fa-plane"></i> &nbsp;&nbsp;&nbsp;Flights</MenuItem>
                    </Link>
                    <Link to={"/"}>
                    <MenuItem p='11px 0px 11px 20px' ><i style={IconStyle} className="fa-solid fa-car"></i> &nbsp;&nbsp;&nbsp;Cars</MenuItem>
                    </Link>
                    <Link to={"/"}>
                    <MenuItem p='11px 0px 11px 20px' ><i style={IconStyle} className="fa-solid fa-suitcase"></i> &nbsp;&nbsp;&nbsp;Packages</MenuItem>
                    </Link>
                    <Link to={"/"}>
                    <MenuItem p='11px 0px 11px 20px' ><i style={IconStyle} className="fa-solid fa-ticket"></i> &nbsp;&nbsp;&nbsp;Holiday activites</MenuItem>
                    </Link>
                    <Link to={"/"}>
                    <MenuItem p='11px 0px 11px 20px' >Deals</MenuItem>
                    </Link>
                    <Link to={"/"}>
                    <MenuItem p='11px 0px 11px 20px' >Groups & meetings</MenuItem>
                    </Link>
                    <Link to={"/"}>
                    <MenuItem p='11px 0px 11px 20px' >Mobile</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </div>
    )
}