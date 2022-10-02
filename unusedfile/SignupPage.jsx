import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { Grid, GridItem,Heading ,Image,Box,FormControl,FormLabel,Input,InputRightElement,Button,InputGroup} from '@chakra-ui/react'
import ReCAPTCHA from "react-google-recaptcha";

function SignupPage() {

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)


  const [verfied, setVerifed] = useState(false);

  //recaptcha function
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }
  return (
    <Grid templateColumns='repeat(5,1fr)' gap={1} >
    <GridItem w='100%'   >
      <Box marginTop={8}>
    <Image
    marginLeft='70%'
    boxSize='50%'
    src='https://static.buffer.com/login/public/img/buffer-logo.svg'
    alt='Dan Abramov'
  />
  <Image/>
  </Box>
  </GridItem>


  <GridItem w='100%' colSpan={2}>
    <Heading as='h2' size='xl' marginTop={40} color ='gray.500'>
    Let's get your account set up
  </Heading>
    <Box  w='100%' p={4} color='white' marginTop={3}>
  <FormControl>
  <FormLabel color='black' marginTop={3} >Email</FormLabel>
  <Input   type="text" marginTop={3}  placeholder='Enter Email' color='black' />
  
  <FormLabel marginTop={3} color='black'>Password</FormLabel>
  <InputGroup marginTop={3}  size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        color='black'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick} bg='gray'>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    <Box marginTop={6} alignItems='center'  >
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={onChange}
        />
    </Box>
    <Button marginTop={3}  padding="5% 40% 5% 50%" color='gray.500'>Sign up</Button>
  <div style={{display:"flex",color:"black", justifyContent:"space-between", marginTop:"3%"}}>
  <span>I agree to Buffer's <span style={{color:"blue"}}>Terms of Service</span></span>
  <Link to="/login">Already have an account?</Link>


  </div>


  </FormControl>
     </Box>
    </GridItem>
    <GridItem w='98%' h='76%' colSpan={2} marginTop={7}>
     
    <Image h='100%' w="100%" src="https://www.linkpicture.com/q/img1_27.png" alt="imgbroke"></Image>
    </GridItem>
   
  </Grid>
  );
}

export default SignupPage;
