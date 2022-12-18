import { AddIcon, ArrowBackIcon } from "@chakra-ui/icons"
import { Box, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const style1 = {
    borderBottom: "1px solid rgb(204, 204, 204)",
    height: "55px"
}

const style2 = {
    width: "98%",
    height: "50px",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}

export default function LoginSignUpNav() {
    return (
        <Box style={style1}>
            <Box style={style2} >
                <Box>
                    <Link to={"/"}>
                    <AddIcon as={ArrowBackIcon} w={6} h={6} color='blue.500' />
                    </Link>
                </Box>
                <Box>
                    <Image src='./exprobook.png' alt='web-Logo' w={"150px"}/>
                </Box>
                <Box>

                </Box>
            </Box>
        </Box>
    )
}
