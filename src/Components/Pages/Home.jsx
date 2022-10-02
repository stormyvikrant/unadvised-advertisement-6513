import { Heading,Button,Box,Image ,Text, Icon} from '@chakra-ui/react';
import React from 'react';
import {Link} from 'react-router-dom'
import Slider from '../slider/Slider';
import"../slider/Slider.css"
function Home() {


  return (
    <div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>
    <Box w='100%'>
      <Heading marginLeft={'30%'}  marginTop={"34%"}>Grow your audience on social and beyond</Heading>
      <Text marginLeft={'20%'} marginTop={9}>Buffer helps you build an audience organically. We’re a values-driven
     company that provides affordable, intuitive, marketing tools for ambitious
      people and teams.</Text>

<Box display={'flex'} justifyContent="space-between" marginTop={8} marginLeft={'30%'}>
<Button  padding ={'5% 10% 5% 10%'}colorScheme='teal' bg='rgb(44, 75, 255);'>
  
  <Link to="/signup">Get A Start</Link></Button>
  
<Button colorScheme='rgb(44, 75, 255)'padding ={'5% 10% 5% 10%'} variant='outline'>Watch video</Button>
</Box>

    </Box>

    <div>
      <Image src="https://buffer.com/static/illustrations/all-channels-3.webp" alt="homeimg"/>
    </div>
    </div>

<div>
  <Box w='87%' margin='auto'>
    <Image h='100%' w='100%' src="https://i.ibb.co/5K1X4Lx/homeimage.png" alt="homeimg"/>
  </Box>
</div>
<Box w='40%' margin ="auto">
<Heading  marginTop={"5%"}>Be where your customers are</Heading>
<Text  marginTop={4}>People spend, on average, almost 2.5 hours on social media every day. ​​Let
them find your brand more easily through these four simple steps</Text>
</Box>

<Box w='87%' margin='auto'>
    <Image h='100%' w='100%' src="https://buffer.com/static/misc/buffer-loop-v2.svg" alt="img"/>
</Box>


{/* //1. */}


<div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)" ,marginTop:"4%"}}>
    <Box w='100%'>
    <Heading marginLeft={'30%'} color='rgb(44, 75, 255)'fontSize="18px" fontFamily="Roboto, sans-serif" textAlign={"left"}>1. ANALYZE</Heading>
      <Heading marginLeft={'30%'}  marginTop={"4%"}>Measure your social media performance in a few clicks</Heading>
      <Text marginLeft={'20%'} marginTop={9}>See what’s working and deliver high engagement content.</Text>

<Box w='60%' display={'flex'} justifyContent="space-between" marginTop={8} marginLeft={'30%'}>
 <Button  padding ={'5% 10% 5% 10%'}colorScheme='teal' bg='rgb(44, 75, 255);'>
  <Link to="/signup">Get A Start</Link></Button>
<Button colorScheme='rgb(44, 75, 255)'padding ={'5% 10% 5% 10%'} variant='outline'>Learn More</Button>
</Box>
</Box>

    <div>
      {/* <Image h='70%' w="90%"src="https://buffer.com/static/illustrations/thumb-stop-content-2.webp" alt="homeimg"/> */}
      <Image h='80%' w="70%"src="https://buffer.com/static/illustrations/thumb-stop-content-2.webp" alt="homeimg"/>
    </div>
    </div>

{/* //2. */}


<div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>

     <Box>
      <Image marginLeft="20%"h='100%' w="70%"src="https://buffer.com/static/illustrations/collaborate-more-efficiently@2x.webp" alt="homeimg"/>
    </Box>

    <Box w='80%'>
      <Heading color='rgb(44, 75, 255)'fontSize="18px" fontFamily="Roboto, sans-serif" textAlign={"left"}>2. PLAN AND PUBLISH YOUR CONTENT</Heading>
      <Heading textAlign={"left"}  marginTop={"4%"}>Collaborate and plan your campaigns</Heading>
      <Text textAlign={"left"} marginTop={9}>Schedule your posts in advance so you can focus on other things.</Text>

         <Box w='60%' display={'flex'} justifyContent="space-between" marginTop={8} >
      <Button  padding ={'5% 10% 5% 10%'}colorScheme='teal' bg='rgb(44, 75, 255);'>
          <Link to="/signup">Get Started Now</Link></Button>
      <Button colorScheme='rgb(44, 75, 255)'padding ={'5% 10% 5% 10%'} variant='outline'>Learn More</Button>
        </Box>
   </Box>

    
    </div>

{/* //3. */}


<div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",marginTop:"8%"}}>

    

   
    <Box w='100%'>
      <Heading marginLeft={'30%'} color='rgb(44, 75, 255)'fontSize="18px" fontFamily="Roboto, sans-serif" textAlign={"left"}>3. ENGAGE</Heading>
      <Heading marginLeft={'30%'} textAlign={"left"}  marginTop={"4%"}>Respond to comments twice as fast</Heading>
      <Text marginLeft={'30%'} textAlign={"left"} marginTop={9}>Skip to important comments with the help of labels and hotkeys.</Text>
         <Box w='60%' display={'flex'} justifyContent="space-between" marginTop={8}marginLeft={'30%'}  >
      <Button  padding ={'5% 10% 5% 10%'}colorScheme='teal' bg='rgb(44, 75, 255);'>
          <Link to="/signup">Get Started Now</Link></Button>
      <Button colorScheme='rgb(44, 75, 255)'padding ={'5% 10% 5% 10%'} variant='outline'>Learn More</Button>
        </Box>
   </Box>

   <Box>
      <Image h='100%' w="70%"src="https://buffer.com/static/illustrations/hero-reply@2x-2.webp" alt="homeimg"/>
    </Box>
    
    </div>



{/* 4. */}
    <Box w='45%' margin={'auto'} marginTop={'7%'}>
      <Heading  color='rgb(44, 75, 255)'fontSize="18px" fontFamily="Roboto, sans-serif" textAlign={"center"}>4. CELEBRATE</Heading>
      <Heading textAlign={"center"} fontSize="34px">Businesses all over the world trust Buffer to build their brand</Heading>
      
   </Box>


{/* Slider */}

<Box marginTop={'5%'}>
  <Slider/>
</Box>

<Box display={'flex '} justifyContent={'space-between'} w='88%' margin='auto' marginTop={'3%'}>
  <box >
    <Heading color='rgb(44, 75, 255)'>10 years</Heading>
    <Text>in business</Text>
  </box>
  <box>
    <Heading color='rgb(44, 75, 255)'>140,000</Heading>
    <Text>users</Text>
  </box>
  <box>
    <Heading color='rgb(44, 75, 255)'>100k+</Heading>
    <Text>monthly blog readers</Text>
  </box>
  <box>
    <Heading color='rgb(44, 75, 255)'>1.2m+</Heading>
    <Text>social followers</Text>
  </box>
  
</Box>



<div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",marginTop:"12%"}}>

     <Box>
      <Image marginLeft="20%"h='100%' w="70%"src="https://static.buffer.com/cdn-cgi/image/w=640,quality=90,format=auto/marketing/static/team/buffer-team-map-2022@2x.jpg"/>
    </Box>

    <Box w='80%'>
      
      <Heading textAlign={"left"}  marginTop={"4%"}>And we are here to help</Heading>
      <Text textAlign={"left"} marginTop={9}>Our customer advocates are standing by 24/7 to support you via email and social media. We also have a comprehensive, 
      regularly updated help center for those who prefer to find help themselves.</Text>

         <Box w='60%' display={'flex'} justifyContent="space-between" marginTop={8} >
          <Button  padding ={'5% 10% 5% 10%'}colorScheme='blue'  variant='outline'>
          <Link to="/signup">Get Started Now</Link></Button>
     
        </Box>
   </Box>

    
  </div>

<Box  w='46%' margin='auto' marginTop={'15%'}>
  <Heading fontSize="18px" fontFamily="Roboto, sans-serif" textAlign={"center"}>An official marketing partner of the industry leaders</Heading>
</Box>
  <Box display={'flex '} justifyContent={'space-between'} w='46%' margin='auto' marginTop={'3%'}>

  <box >
  <Image marginLeft="20%"h='60%' w="70%"src="https://buffer.com/static/ui/meta-business-partner@2x-2.png"/>
  </box>

  <box>
  <Image marginLeft="20%"h='60%' w="70%"src="https://buffer.com/static/ui/pinterest-marketing-partner@2x-2.png"/>
  </box>
  <box>
  <Image marginLeft="20%"h='60%' w="70%"src="https://buffer.com/static/ui/linkedin-marketing-partner@2x-2.png"/>
  </box>
</Box>


<div className='bigimg' >
  <Box w='40%' margin='auto' marginTop={'10%'}>
    <Heading fontSize="28px" fontFamily="Roboto, sans-serif" textAlign={"center"} color="white">140,000+ people like you use Buffer to build their brand on social media every month</Heading>
  </Box>

  <Box w='60%'   margin="auto" >
    <Button marginTop={'10%'}  marginBottom={'10%'}padding ={'3% 7% 3% 7%'}     backgroundColor='rgb(233, 114, 132)'>
    <Link to="/signup">Get Started Now</Link></Button>
   </Box>
  
</div>



{/* //Footer */}


<div style={{display:'flex'}}>
  <Box w='50%'>
    <Box marginTop="25%">
    <Heading fontSize='42px'><Link to="/" >Buffer</Link></Heading> 
    </Box>
    <Box w='40%' display='flex' justifyContent={'space-between'} marginTop="55%" margin={'auto'}>
   <Image marginTop={'34%'} w='10%' h='10%' src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-logo-abundant-instagram-logo-simple-icon-1.png" alt='icon1'/>
   <Image marginTop={'34%'} w='10%' h='10%' src="https://i.pinimg.com/originals/7c/cb/40/7ccb40e2fa23d39346cc9dc8691d68b3.jpg" alt='icon2'/>
   <Image marginTop={'34%'} w='10%' h='10%' src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt='icon3'/>
   <Image marginTop={'34%'} w='10%' h='10%' src="https://cdn-icons-png.flaticon.com/512/5968/5968812.png" alt='icon4'/>
   <Image marginTop={'34%'} w='10%' h='10%' src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt='icon5'/>
   <Image marginTop={'34%'} w='10%' h='10%' src="https://cdn-icons-png.flaticon.com/512/1051/1051329.png" alt='icon5'/>
    </Box>
    <Heading fontSize='22px' textAlign={'left'} marginLeft={'30%'} marginTop={'7%'}>Download</Heading>
    <Box w='60%' display={'flex'} justifyContent="space-between"   margin={'auto'}>
          <Button marginLeft={'10%'} marginTop={'13%'}  padding ={'2% 2% 2% 2%'}colorScheme='blue'  variant='outline'>
          <Link to="/signup">App Store</Link></Button>
          <Button marginTop={'13%'} padding ={'2% 2% 2% 2%'}colorScheme='blue'  variant='outline'>
          <Link to="/signup">Play Store</Link></Button>
     
        </Box>
        <Text  textAlign={'left'} marginLeft={'30%'} marginTop={'4%'}>Copyright ©2022 Buffer|Privacy|Terms|Security</Text>
  </Box>
  


  {/* //foter 2nd part */}
  <Box display={'flex'} justifyContent={'space-between'}  w='60%'>

  
<Box marginTop="25%">
<Heading fontSize={'25px'}>Tools</Heading>  
 <br/><Text><Link>Publishing</Link> </Text>
 <br/><Text><Link>Analytics</Link></Text> 
 <br/><Text><Link>Engagement</Link></Text> 
 <br/><Text><Link>New</Link> </Text>
 <br/><Text> <Link>Start Page</Link></Text> 
 <br/><Text><Link>Extras</Link> </Text>
 
</Box>


<Box marginTop="25%">
<Heading fontSize={'25px'}>Resources</Heading>  
 <br/><Text><Link>Blog</Link> </Text>
 <br/><Text><Link>Content Library</Link></Text> 
 <br/><Text><Link>Browser Extension</Link></Text> 
 <br/><Text><Link>Free Image Editor</Link> </Text>
</Box>


<Box marginTop="25%">
<Heading fontSize={'25px'}>Support</Heading>  
 <br/><Text><Link>Help Center</Link> </Text>
 <br/><Text><Link>Status</Link></Text> 
 <br/><Text><Link>Changelog</Link></Text> 
 <br/><Text><Link>Product Roadmap</Link> </Text>
</Box>

<Box marginTop="25%">
<Heading fontSize={'25px'}>Company</Heading>  
 <br/><Text><Link>About</Link> </Text>
 <br/><Text><Link>Transparency</Link></Text> 
 <br/><Text><Link>Careers</Link></Text> 
 <br/><Text><Link>Accessibility</Link> </Text>
 <br/><Text><Link>Press</Link> </Text>
 <br/><Text><Link>Sitemap</Link> </Text>
</Box>



  </Box>


</div>

</div>
  );
}

export default Home;
