

import { Heading ,Box, Image, Text, Button} from '@chakra-ui/react';
import React from 'react';

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



    </div>
  );
}

export default About;
