import { Box, Heading, Image, Text,Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Customers() {
  return (
    <div>
     <Heading fontSize={'18px'}
      color={'rgb(44, 75, 255)'} 
      fontFamily= 'Roboto, sans-serif'
      marginTop ={'3%'}>YOU'RE IN GOOD COMPANY</Heading>
     <Heading fontSize={'332%'} marginTop ={'1%'}>Featured Customers</Heading>
     <Text marginTop ={'2%'} color="black">See how big brands and growing businesses find social media success with Buffer</Text>
    
    
    
    {/* //box1 */}
    
    <Box border={'3px solid Blue' } w='60%' margin="auto"  marginTop={'3%'} >
      <Box margin="auto"w='30%' marginTop={'5%'}>
        <Image w='100%' h='98%' src="https://buffer.com/static/caseStudies/campaign-monitor/campaign-monitor-logo.svg" alt="box1img"/>
      </Box>
      <Box margin="auto"w='80%' marginTop={'5%'}>
        <Text fontSize="150%">"Buffer helps us measure what networks, and what content, is working best for us."</Text>
      </Box>
      <Box margin="auto"w='30%' marginTop={'1%'}>
       <Text fontSize="120%" color={'rgb(44, 75, 255)'}><Link>Read The Case Study--. </Link></Text>
      </Box>
  
      <Box margin="auto"w='30%' marginTop={'5%'} display="flex" justifyContent={'space-between'} marginBottom={'7%'}>
        <Image w='18%'  src="https://buffer.com/static/caseStudies/campaign-monitor/aaron-beashel.svg" alt="box1img"/>
      <Heading fontSize={'150%'} color={'rgb(155, 155, 155)'}>Aaron Beashel</Heading>
      </Box>

    </Box>
    
       {/* //box2 */}

       <Box border={'3px solid orange' } w='60%' margin="auto"  marginTop={'3%'} >
      <Box margin="auto"w='25%' marginTop={'5%'}>
        <Image w='50%' h='98%' src="https://buffer.com/static/caseStudies/fortune/fortune-logo.svg" alt="box2img"/>
      </Box>
      <Box margin="auto"w='80%' marginTop={'5%'}>
        <Text fontSize="150%">"Buffer solved our problem. We don’t post in clusters anymore. We’ve been very happy with it."</Text>
      </Box>
      <Box margin="auto"w='30%' marginTop={'1%'}>
       <Text fontSize="120%" color={'rgb(44, 75, 255)'}><Link>Read The Case Study--. </Link></Text>
      </Box>
  
      <Box margin="auto"w='30%' marginTop={'5%'} display="flex" justifyContent={'space-between'} marginBottom={'7%'}>
        <Image w='18%'  src="https://buffer.com/static/caseStudies/fortune/heather-muse.svg" alt="box1img"/>
      <Heading fontSize={'150%'} color={'rgb(155, 155, 155)'}>Heather Muse</Heading>
      </Box>

    </Box>
   
    
     {/* //box3 */}

     <Box border={'3px solid red' } w='60%' margin="auto"  marginTop={'3%'} >
      <Box margin="auto"w='25%' marginTop={'5%'}>
        <Image w='50%' h='98%' src="https://buffer.com/static/caseStudies/denver-broncos/denver-broncos-logo.svg" alt="box2img"/>
      </Box>
      <Box margin="auto"w='80%' marginTop={'5%'}>
        <Text fontSize="150%">"Buffer allows everyone on our media team to contribute content and approval on everything that goes out."</Text>
      </Box>
      <Box margin="auto"w='30%' marginTop={'1%'}>
       <Text fontSize="120%" color={'rgb(44, 75, 255)'}><Link>Read The Case Study--. </Link></Text>
      </Box>
  
      <Box margin="auto"w='30%' marginTop={'5%'} display="flex" justifyContent={'space-between'} marginBottom={'7%'}>
        <Image w='18%'  src="https://buffer.com/static/caseStudies/denver-broncos/ben-hunt.svg" alt="box1img"/>
      <Heading fontSize={'150%'} color={'rgb(155, 155, 155)'}>Ben Hunt</Heading>
      </Box>

    </Box>
    
    {/* //box4 */}

    <Box border={'3px solid yellow' } w='60%' margin="auto"  marginTop={'3%'} >
      <Box margin="auto"w='25%' marginTop={'5%'}>
        <Image w='50%' h='98%' src="https://buffer.com/static/caseStudies/seattle-times/seattle-times-logo.svg" alt="box2img"/>
      </Box>
      <Box margin="auto"w='80%' marginTop={'5%'}>
        <Text fontSize="150%">"Since we’ve signed up with Buffer, we’ve had a 150% increase in page views from social media."</Text>
      </Box>
      <Box margin="auto"w='30%' marginTop={'1%'}>
       <Text fontSize="120%" color={'rgb(44, 75, 255)'}><Link>Read The Case Study--. </Link></Text>
      </Box>
  
      <Box margin="auto"w='30%' marginTop={'5%'} display="flex" justifyContent={'space-between'} marginBottom={'7%'}>
        <Image w='18%'  src="https://buffer.com/static/caseStudies/seattle-times/andrew-macrae.svg" alt="box1img"/>
      <Heading fontSize={'150%'} color={'rgb(155, 155, 155)'}>Andrew Macrae</Heading>
      </Box>

    </Box>


     {/* //box5 */}

     <Box border={'3px solid green' } w='60%' margin="auto"  marginTop={'3%'} >
      <Box margin="auto"w='25%' marginTop={'5%'}>
        <Image w='50%' h='98%' src="https://buffer.com/static/caseStudies/marketeering-group/marketeering-group-logo.svg" alt="box2img"/>
      </Box>
      <Box margin="auto"w='80%' marginTop={'5%'}>
        <Text fontSize="150%">"We run 350+ social profiles for our clients. I don’t even think what we do would be possible without Buffer."</Text>
      </Box>
      <Box margin="auto"w='30%' marginTop={'1%'}>
       <Text fontSize="120%" color={'rgb(44, 75, 255)'}><Link>Read The Case Study--. </Link></Text>
      </Box>
  
      <Box margin="auto"w='30%' marginTop={'5%'} display="flex" justifyContent={'space-between'} marginBottom={'7%'}>
        <Image w='18%'  src="https://buffer.com/static/caseStudies/marketeering-group/jessica-dringman.svg" alt="box1img"/>
      <Heading fontSize={'150%'} color={'rgb(155, 155, 155)'}>Jessica Dringman</Heading>
      </Box>

    </Box> 
    

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

export default Customers;
