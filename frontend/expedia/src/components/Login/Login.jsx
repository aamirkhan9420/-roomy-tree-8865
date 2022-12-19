import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Box, Button, Checkbox, FormControl, Heading, Image, Input, InputGroup, InputRightElement, Spinner, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginSignUpNav from "../LoginSignUpNav";

import style from "./Login.module.css"

const inputStyle = {
    border: "1px solid  #343B53",
    height: "48px",
}

export default function Login() {
    const [showPass, setShowPass] = useState(false)
    const handleClick = () => setShowPass(!showPass)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const toast = useToast()
    const navigate=useNavigate()
  const showTost=(type,msg)=>{
    toast({
        title: `${msg}`,
        position: 'top',
        status: type,
        duration: 9000,
        isClosable: true,
      })
  }  
  const  handleUser=()=>{
    axios.get("https://adorable-pear-earrings.cyclic.app/user").then((res)=>{
       for(let i=0;i<res.data.length;i++){
        if(res.data[i].email===email){
           
            localStorage.setItem("user",JSON.stringify(res.data[i]))
            
        }
       }
    }).catch((er)=>{
        console.log(er)
    })
  }
const handleSignin=()=>{
    
    const payload={
        
            email:email,
            password:password
            
            
    }
axios.post("https://adorable-pear-earrings.cyclic.app/user/login",payload).then((res)=>{
   
                if(res.data){
                localStorage.setItem("token",JSON.stringify(res.data))
                 handleUser()
                     showTost("success","sign in successful")
                            setTimeout(() => {
                                
                                if(Object.keys(res).length>2){
                                  navigate("/")  
                                }
                                
                                
                            }, 1000);  
                }
             

}).catch((er)=>{
    showTost("error","user not found")
    console.log(er)
})
    
}

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
                                onChange={(e)=>setEmail(e.target.value)}
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
                                onChange={(e)=>setPassword(e.target.value)}
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

                        <p style={{ fontSize: "14px", lineHeight: "18px",textAlign:"left"}}>
                            By signing in, I agree to the Expedia
                            <Link className={style.links} to='/' > Terms and Conditions, </Link>
                            <br />
                            <Link className={style.links} to='/' > Privacy Statement </Link>
                            and
                            <Link className={style.links} to='/' > Expedia Rewards Terms and Conditions. </Link>
                        </p>

                        <Button colorScheme="blue" id={style.signInButton} onClick={()=>handleSignin()}>Sign in</Button>

                    </FormControl>
                </Box>
                <Box>
                    <p id={style.forgot}>
                        <Link className={style.links} to='/' >Forgot password?</Link>
                    </p>

                    <p id={style.crt_acnt}>
                        Don't have an account?
                        <Link className={style.links} to='/signup' >Create one</Link>
                    </p>

                    <p>Other ways to sign in</p>

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
