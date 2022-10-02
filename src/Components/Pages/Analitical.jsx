import { Box, Heading,Image } from '@chakra-ui/react';
import React from 'react';

import"../Pages/Analitical.css";
function Analitical() {
  return (
    <div>
           
    <div class="sidebar">
    <a class="active" href="#home"><button class="btn"><i class="fa fa-home">Home</i></button></a>
    <a href="#fb"><button class="btn"><i class="fa fa-facebook" aria-hidden="true">  facebook</i></button></a>
    <a href="#instagram"><button class="btn"><i class="fa fa-instagram" aria-hidden="true">instagram</i></button></a>
    <a href="#twitter"><button class="btn"><i class="fa fa-twitter-square" aria-hidden="true">twitter</i></button></a>
  </div>
  

  <div class="content" style={{border:"1px solid red",overflow:"scroll"}}>
<Heading textAlign={'left'}>Good morning !</Heading>

<Box>
<Image w='100%'marginTop={'2%'} src="https://i.ibb.co/vqYhBrV/3.png" alt="img1"/>
</Box>
<Box>
<Image  w='100%'marginTop={'2%'}src="https://i.ibb.co/8rkTpWL/5.png" alt="img1"/>
</Box>
<Box>
<Image w='100%'marginTop={'2%'} src="https://i.ibb.co/zN6rp33/6.png" alt="img1"/>
</Box>
<Box>
<Image w='100%'marginTop={'2%'} src="https://i.ibb.co/5T6GZT6/7.png" alt="img1"/>
</Box>
<Box>
<Image w='100%'marginTop={'2%'} src="https://i.ibb.co/BZXVP7f/8.png" alt="img1"/>
</Box>


  </div>
  </div>
  );
}

export default Analitical;
