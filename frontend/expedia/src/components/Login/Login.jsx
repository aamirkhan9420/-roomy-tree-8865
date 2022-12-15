import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Box, Button, Checkbox, FormControl, Heading, Image, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginSignUpNav from "../LoginSignUpNav";

import style from "./Login.module.css"

const inputStyle = {
    border: "1px solid  #343B53",
    height: "48px",
}

export default function Login() {
    const [showPass, setShowPass] = useState(false)
    const handleClick = () => setShowPass(!showPass)

    return (
        <div>
            <LoginSignUpNav />
            <Box id={style.loginDiv}>
                <Heading id={style.signInHeading} as='h3' >Sign in</Heading>

                <Box>
                    <FormControl isRequired>

                        <InputGroup>
                            <Input
                                style={inputStyle}
                                className={style.inputs}
                                type='email'
                                placeholder="Email address"
                            />
                        </InputGroup>

                        <InputGroup size='md'>
                            <Input
                                style={inputStyle}
                                className={style.inputs}
                                pr='4.5rem'
                                mt='13px'
                                type={showPass ? 'text' : 'password'}
                                placeholder='Password'
                            />
                            <InputRightElement h='48px' mt='13px' width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {showPass ? <ViewOffIcon /> : <ViewIcon />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>

                        <Checkbox mt='15px' mb='15px' size='md' colorScheme='blue' defaultChecked>
                            Keep me signed in
                        </Checkbox>

                        <p id={style.keepP} >Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.</p>

                        <p style={{ fontSize: "14px", lineHeight: "18px" }}>
                            By signing in, I agree to the Expedia
                            <Link className={style.links} to='/' > Terms and Conditions, </Link>
                            <br />
                            <Link className={style.links} to='/' > Privacy Statement </Link>
                            and
                            <Link className={style.links} to='/' > Expedia Rewards Terms and Conditions. </Link>
                        </p>

                        {/* <Button colorScheme="blue" id={style.signInButton} >Sign in</Button> */}

                    </FormControl>
                </Box>
                <Box>
                    <p id={style.forgot}>
                        <Link className={style.links} to='/' >Forgot password?</Link>
                    </p>

                    <p id={style.crt_acnt}>
                        Don't have an account?
                        <Link className={style.links} to='/' >Create one</Link>
                    </p>

                    <p>or continue with</p>

                    <Box id={style.bottomLogos}>
                        <Image src="https://th.bing.com/th/id/R.0ac491574e7ddb71dc2cab65a8bb501f?rik=5NzURUJ1L37UYg&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-apple-logologobrand-logoiconslogos-251519938788qhgdl.png&ehk=kQ%2bTI4imrP%2fg9UWIfehFMJOqAn1A3RQTROHV%2f1ORknk%3d&risl=&pid=ImgRaw&r=0" alt="Apple Logo" />
                        <Image src="https://i0.wp.com/rydal.swiftacademies.org.uk/wp-content/uploads/sites/6/2020/11/fblogo.png?fit=400%2C400&ssl=1" alt="facebook logo" />
                        <Image src="https://www.shareicon.net/data/2016/07/10/119930_google_512x512.png" alt="google logo" />
                    </Box>
                </Box>
            </Box>
        </div>
    )
}
