

import { Heading ,Box, Image, Text, Button, Link} from '@chakra-ui/react';
import React from 'react';
import Accordion from "./Accordion";
import "./Accordion.css";
function About() {
  return (
    <div>
    <Box  bgColor="pink" marginTop={'4%'}>
      <Heading  fontSize={'300%'} marginBottom={'4%'}>About us</Heading>
      
      <Image marginLeft={'20%'} marginTop={'3%'} src="https://static.buffer.com/cdn-cgi/image/w=750,quality=90,format=auto/marketing/static/team/buffer-group-photo.jpg" alt="aboutimg"/>
    <Heading marginTop="2%" color="pink">fgdfgfdg</Heading>
    </Box>
<Box w='56%' margin='auto' marginTop={'3%'}>
  <Text textAlign={"left"}>We’re a fully distributed team of 82 people living and working in 22 countries around the world. And we’re working to build the best products to help our customers build their brands and grow their businesses on social media.</Text>
</Box>

<Box w='56%' margin='auto' marginTop={'3%'}>
<Image  marginTop={'3%'} src="https://i.ibb.co/3B5Zjcm/9.png" alt="aboutimg"/>
</Box>
<Box w='56%' margin='auto' marginTop={'3%'}>
  <Text textAlign={"left"}>We’ve always aimed to do things a little differently at Buffer. Since the early days, we’ve had a focus on building one of the most unique and fulfilling workplaces by rethinking a lot of traditional practices.</Text>
  <br/><Text textAlign={"left"}>A commitment to supporting our team and our customers has helped Buffer grow from humble beginnings to now serving more than 140,000 users. Our passion for making meaningful connections flows through everything we do.</Text>
  <br/><Text textAlign={"left"}>We care about building a quality product, trusted relationships with our customers, and a sense of community that connects our customers and team with one another.</Text>
  <br/> <Text textAlign={"left"}>To learn more about our approach to business and work, feel free to hop on over to our Open Blog.</Text>
 </Box>

<Box  w='56%' margin='auto' marginTop={'3%'}>
<Button padding={"5%, 5% ,5%,5%"} bgColor="rgb(44, 75, 255)">Read The open Blog</Button>
</Box>
<Box  w='100%' margin='auto' marginTop={'3%'}>
<Image w='100%' marginTop={'3%'} src="https://i.ibb.co/yfSZRhp/8.png" alt="aboutimg"/>
</Box>
<Box  w='64%' margin='auto' marginTop={'5%'}>
<Heading  fontSize={'200%'} marginBottom={'4%'}>A few of the amazing brands who trust Buffer</Heading>
</Box>


<Box  w='66%' margin='auto' marginTop={'5%'}>
<Image w='100%' marginTop={'3%'} src="https://i.ibb.co/MSJgVTJ/10.png" alt="aboutimg"/>
</Box>

<Box  w='50%' margin='auto' marginTop={'5%'}>
<Heading  fontSize={'200%'} marginBottom={'4%'}>Our values</Heading>
<Text textAlign={"left"} fontSize={'150%'}>We want to build a different type of company that’s focused not only on the bottom line, but also the happiness of our customers and team, and our personal growth along the journey. Here are the values that collectively guide our decisions and actions:</Text>
</Box>
<Box  w='55%' margin='auto' marginTop={'5%'}>
  <div className="App">
      <Accordion
        title="2.Cultivate positivity "
        content="<p >As individuals, we view transparency as a lifestyle of authenticity and honesty.</p>
        </br>
        <p>As a team, we view transparency as an effective way to work remotely and establish a culture of trust.</p>
        </br>
        <p>As a company, we view transparency as a tool to help others.</p>"
     
      />
      <Accordion
        title="3. Show gratitude"
        content="<p >As individuals, we view transparency as a lifestyle of authenticity and honesty.</p>
        </br>
        <p>As a team, we view transparency as an effective way to work remotely and establish a culture of trust.</p>
        </br>
        <p>As a company, we view transparency as a tool to help others.</p>"
    
    />
      <Accordion
        title="4. Practice reflection"
        content="
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        "
      />
      <Accordion
        title="4. Improve consistently"
        content="<p >As individuals, we view transparency as a lifestyle of authenticity and honesty.</p>
        </br>
        <p>As a team, we view transparency as an effective way to work remotely and establish a culture of trust.</p>
        </br>
        <p>As a company, we view transparency as a tool to help others.</p>"
      />
      <Accordion
        title="6.Improve consistently"
        content="<p >As individuals, we view transparency as a lifestyle of authenticity and honesty.</p>
        </br>
        <p>As a team, we view transparency as an effective way to work remotely and establish a culture of trust.</p>
        </br>
        <p>As a company, we view transparency as a tool to help others.</p>"
      />
    </div>
</Box>

<div  style={{height:"520px"}}>
<Image w='100%' h="100%" marginTop={'3%'} src="https://buffer.com/static/team/team-panorama.jpg" alt="aboutimg"/>
</div>

<Box  w='50%' margin='auto' marginTop={'5%'}>
<Heading  fontSize={'200%'} marginBottom={'4%'} textAlign={'left'}>Team</Heading>
<Text textAlign={"left"} fontSize={'150%'}>We’re committed to building a diverse team and a work environment that’s inclusive of people of all backgrounds. Get to know the wonderful team who’s building our product, supporting our customers, and creating educational content.</Text>
</Box>
<Box  w='50%' margin='auto' marginTop={'3%'}>
<Image w='100%' h={'20%'} marginTop={'3%'} src="https://static.buffer.com/cdn-cgi/image/w=640,quality=90,format=auto/marketing/static/team/about-team@2x-v2.jpg" alt="aboutimg"/>
</Box>

<Box  w='100%' margin='auto' marginTop={'3%'}>
<Image w='100%' h={'20%'} marginTop={'3%'} src="https://i.ibb.co/5L6Nyzn/1.png" alt="aboutimg"/>
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

export default About;
