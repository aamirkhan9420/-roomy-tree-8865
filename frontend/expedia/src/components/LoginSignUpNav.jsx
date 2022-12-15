import { AddIcon, ArrowBackIcon } from "@chakra-ui/icons"
import { Box, Image } from "@chakra-ui/react"

const style1 = {
    borderBottom: "1px solid rgb(204, 204, 204)",
    height: "50px"
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
                    <AddIcon as={ArrowBackIcon} w={6} h={6} color='blue.500' />
                </Box>
                <Box>
                    <Image src='https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2' alt='web-Logo' />
                </Box>
                <Box>

                </Box>
            </Box>
        </Box>
    )
}
