import React, { useContext, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { Grid, GridItem,Heading ,Image,Box,FormControl,FormLabel,Input,InputRightElement,Button,InputGroup, Text} from '@chakra-ui/react'
 import { AuthContext } from '../Contexts/AuthContext';


function Login() {

const{ToggleAuth}=useContext(AuthContext)

  const navigate=useNavigate()
  const [formdata, setformdata] = useState({
    email:"",
    password:""
  });


  const handleChange=(e)=>{
  const{value,name}=e.target;
  
  setformdata(()=>{
    return{
      ...formdata,[name]:value
    }
  })
  
  }
  
     const handleSubmit = (e) => {
      e.preventDefault() 
      // console.log(formdata)
const getuserdata=localStorage.getItem("UserData")


       const{email,password}=formdata;
  
      if(email==="" ){
        alert("please enter  valid email")
      } else if(password.length<5 ){
        alert("please enter  valid password")
      }
      else{
     if(getuserdata && getuserdata.length){
      const userdata=JSON.parse(getuserdata)
      const userlogin=userdata.filter((el,index)=>{
        return el.email===email && el.password===password
      })
      if(userlogin.length===0){
        alert("invalid credential")
      }
      else{
        alert("Login succesfully")
        localStorage.setItem("user_login_data",JSON.stringify(getuserdata))
        ToggleAuth()
        navigate("/")
      }
     }
 
      } 
  
  
   };


  return (
    <Grid templateColumns='repeat(5,1fr)' gap={1} >

  <GridItem w='100%' colSpan={2}>
  <Box marginTop={8} >
    <Image marginLeft='10%'boxSize='30%' src='https://static.buffer.com/login/public/img/buffer-logo.svg'alt='Dan Abramov'/>
  </Box>
    <Heading textAlign={'left'} marginLeft={'6%'} color="#3D3D3D" as='h2' size='xl' marginTop={20}>Login</Heading>
  
  <Box  w='100%' p={4} color='white' marginTop={3}>
  <FormControl  onSubmit={handleSubmit} action="">

  <FormLabel color='black' marginTop={3} >Email</FormLabel>
  <Input   type="text" marginTop={3}  placeholder='Enter Email' color='black' name= 'email' onChange={handleChange}/>
  
  <FormLabel marginTop={3} color='black'>Password</FormLabel>
 <Input   type="text" marginTop={3}  placeholder='Enter Password' color='black'  name="password"      onChange={handleChange}/>

  <Button marginTop={4} onClick={handleSubmit}  padding="5% 40% 5% 50%" color='gray.500'>Login</Button>

  <div style={{display:"flex",color:"black", justifyContent:"space-between", marginTop:"3%"}}>

  <Link to="/signup">Create an account</Link>

  <Link to="/login">Forgot your password?</Link>
  </div>
  <Box w={'76%'} margin={'auto'} marginTop={'9%'}>
    <Text color="black" >We no longer support social sign on. Please click here to set your password and access your account</Text>
  </Box>
  <Box w={'76%'} margin={'auto'} marginTop={'9%'}>
    <Text color="black" cursor={'pointer'} >Terms of Service   •    Privacy Policy  •   Security</Text>
  </Box>

  
  </FormControl>
 
     </Box>
    </GridItem>



    <GridItem w='100%'  colSpan={3} marginTop={7} scrollBehavior="auto" >
     
    <Image h='100%' w="100%" src="https://i.ibb.co/2MvpvGv/7.png" alt="imgbroke"></Image>
    </GridItem>
   
  </Grid>
  );
}

export default Login;
