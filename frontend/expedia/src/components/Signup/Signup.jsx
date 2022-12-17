import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Box, Button, Checkbox, FormControl, Text, Heading, Image, Input, InputGroup, InputRightElement, Spinner, Progress, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginSignUpNav from "../LoginSignUpNav";
import  axios from "axios"
import style from "./Signup.module.css"

const inputStyle = {
    border: "1px solid  #343B53",
    height: "48px",
}

export default function Signup() {
    const [strength,setStrength]=useState("")
    const [showPass, setShowPass] = useState(false)
    const handleClick = () => setShowPass(!showPass)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const navigate = useNavigate()
    const toast = useToast()
   
  const showToast=(msg)=>{
    toast({
        title: `${msg}`,
        position: 'top',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
  }  
    const handlePasswordStrength = () => {
       
       
      
           let alpabates="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
         for(let i=0;i<alpabates.length;i++){
            if(password.includes(alpabates[i])&&password.length>=5){
               if(password.includes("@"||"#"||"$"||"%"||"&"||"*")){
                if(password.includes("1"||"2"||"3"||"4"||"5"||"6"||"7"||"8"||"9"||"0")){
                  setStrength(100)  
                }
                else{
                    setStrength(80)
                }
                
               }else{
                setStrength(60)

               }
               
                
            }
        }
        
    }
    const handleSignup = () => {
        
   
        const payload={
            email:email,
          name:name,
         password:password
            
            
    }

    axios.post("https://adorable-pear-earrings.cyclic.app/user/signup",payload).then((res)=>{
        console.log(res.data)
                   
                    if(res.data){
                         showToast("signup successful")
                                setTimeout(() => {
                                    // let user=JSON.parse(localStorage.getItem("user"))||{}
                                    if(Object.keys(res).length>2){
                                      navigate("/")  
                                    }
                                    
                                    
                                }, 1000);  
                    }
                 
    
    }).catch((er)=>{
        showToast("signup failed")
        console.log(er)
    })

    }
useEffect(()=>{
handlePasswordStrength()
},[password.length])
    return (
        <div>
            <LoginSignUpNav />
            <Box id={style.loginDiv}>
                <Heading id={style.signInHeading} as='h3' >Create an account </Heading>

                <Box>
                    <FormControl isRequired>

                        <InputGroup>
                            <Input
                                style={inputStyle}
                                className={style.inputs}
                                type='email'
                                placeholder="Email address"
                                onChange={(e) => setEmail(e)}
                            />
                        </InputGroup>
                        <InputGroup size='md'>
                            <Input
                                style={inputStyle}
                                className={style.inputs}
                                pr='4.5rem'
                                mt='13px'
                                type='name'
                                placeholder="Enter your name"
                                onChange={(e) => setName(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}

                            />
                            <InputRightElement h='48px' mt='13px' width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {showPass ? <ViewOffIcon /> : <ViewIcon />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>

                        {!password ? <Text textAlign={"left"} fontSize={"12px"} color={"red"}>please enter your password.</Text> : ""}
                        <Progress value={strength} size='xs' colorScheme='blue' mt='13px' />
                        <Checkbox mt='15px' mb='15px' size='md' colorScheme='blue' defaultChecked>
                            Keep me signed in
                        </Checkbox>

                        <p id={style.keepP} >Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.</p>

                        <p style={{ fontSize: "14px", lineHeight: "18px", textAlign: "left" }}>
                            By signing in, I agree to the Expedia
                            <Link className={style.links} to='/' > Terms and Conditions, </Link>
                            <br />
                            <Link className={style.links} to='/' > Privacy Statement </Link>
                            and
                            <Link className={style.links} to='/' > Expedia Rewards Terms and Conditions. </Link>
                        </p>

                        <Button colorScheme="blue" id={style.signInButton} onClick={() => handleSignup()}>Continue</Button>

                    </FormControl>
                </Box>
                <Box>
                    <p id={style.forgot}>
                        <Link className={style.links} to='/' >Forgot password?</Link>
                    </p>

                    <p id={style.crt_acnt}>
                    Already have an account?
                        <Link className={style.links} to='/login' >Sign in</Link>
                    </p>

                    <p>Other ways to sign up</p>

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
