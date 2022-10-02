import { Box, Image, LinkOverlay, Text } from '@chakra-ui/react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import { useContext } from 'react';
import { AuthContext } from './Contexts/AuthContext';

function Navbar(){

const{isAuth,ToggleAuth}=useContext(AuthContext)

if(!isAuth){
  
}

return (
    <div>

<Box display={'flex' } justifyContent="space-between"  w="70%" margin={'auto'}>

<Image w='12%' h="5%" src="https://www.vectorlogo.zone/logos/buffer/buffer-ar21.png" alt="navimg"/>



{isAuth?<Text style={{marginTop:"1%" ,fontSize:'150%',color:"gray"}}><Link to="/publishing">Publishing</Link></Text>:<Dropdown style={{marginTop:"1%"}}>
      <Dropdown.Toggle style={{background:"none",border:"none",color:"black",fontSize:"130%"}} id="dropdown-basic">
  Tools
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" >
            <img w='40%' h="5%" src="https://i.ibb.co/GdFVYqQ/4.png" alt="4"/>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-1" >
            <img w='40%' h="5%" src="https://i.ibb.co/LhXhB8h/44-Copy.png" alt="44-Copy"/>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-1" >
            <img w='40%' h="5%"src="https://i.ibb.co/zVJf3cP/4-Copy.png" alt="4" />
        </Dropdown.Item>
        <Dropdown.Item href="#/action-1" >
            <img w='40%' h="5%" src="https://i.ibb.co/R7jf4WP/44.png" alt="4"/>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
}


{isAuth?<Text style={{marginTop:"1%" ,fontSize:'150%',color:"gray"}}><Link to="/analytics">Analytics</Link></Text>:<Dropdown style={{marginTop:"1%"}}>
      <Dropdown.Toggle style={{background:"none",border:"none",color:"black",fontSize:"130%"}} id="dropdown-basic">
     Channel
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" style={{width:"320px" ,display:"flex",justifyContent:"space-between"}}>
            <img width="10%" src="https://i.pinimg.com/originals/7c/cb/40/7ccb40e2fa23d39346cc9dc8691d68b3.jpg"alt='dsf'></img>
            <b>Facebook</b></Dropdown.Item>

        <Dropdown.Item href="#/action-2" style={{width:"320px" ,display:"flex",justifyContent:"space-between"}}>
        <img width="10%" src="https://cdn.icon-icons.com/icons2/2248/PNG/512/google_my_business_icon_137533.png"alt='dsf'></img>
        <h5>Google Bussinees profile</h5></Dropdown.Item>

        <Dropdown.Item href="#/action-3" style={{width:"320px",display:"flex",justifyContent:"space-between"}}> 
        <img width="10%" src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-logo-abundant-instagram-logo-simple-icon-1.png"alt='dsf'></img>
        <b>Instagram</b></Dropdown.Item>
        <Dropdown.Item href="#/action-3" style={{width:"320px",display:"flex",justifyContent:"space-between"}}> 
             <img width="10%" src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png"alt='dsf'></img>
        <b>Linkedin</b></Dropdown.Item>
        <Dropdown.Item href="#/action-3" style={{width:"320px",display:"flex",justifyContent:"space-between"}}> 
             <img width="10%" src="https://cdn-icons-png.flaticon.com/512/1051/1051329.png"alt='dsf'></img>
        <b>Pintrest</b></Dropdown.Item>
        <Dropdown.Item href="#/action-3" style={{width:"320px",display:"flex",justifyContent:"space-between"}}> 
        <img width="10%" src="https://cdn-icons-png.flaticon.com/512/1946/1946552.png"alt='dsf'></img>
        <b>TikTok</b></Dropdown.Item>
        <Dropdown.Item href="#/action-3" style={{width:"320px",display:"flex",justifyContent:"space-between"}}> 
             <img width="10%" src="https://cdn-icons-png.flaticon.com/512/733/733635.png"alt='dsf'></img>
        <b>Twitter</b></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
}
{isAuth?<Text style={{marginTop:"1%" ,fontSize:'150%' ,color:"gray"}}><Link to="/engagement">Engagement</Link></Text>:<Text style={{marginTop:"1%" ,fontSize:'150%'}}><Link to="/pricing">Pricing</Link></Text>}

{isAuth?<Text style={{marginTop:"1%" ,fontSize:'150%',color:"gray"}}><Link to="/">Start Page</Link></Text>:<Text style={{marginTop:"1%" ,fontSize:'150%'}} >  <Link to="/blog">Blog</Link></Text>}

{isAuth?<Dropdown style={{marginTop:"1%"}}>
      <Dropdown.Toggle style={{background:"none",border:"none",color:"black",fontSize:"130%"}} id="dropdown-basic">
  Apps
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" >
           <Text><b>Buffer for Ios</b></Text>   
            </Dropdown.Item>
        <Dropdown.Item href="#/action-1" >
        
        <Text><b>Buffer for Android</b></Text>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-1" >
        
        <Text><b>Remix by Buffer</b></Text>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-1" >
        
        <Text><b>Integrations</b></Text>  
              </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>:<Text style={{marginTop:"1%" ,fontSize:'150%'}}> <Link to="/customer">Customer</Link></Text>}
{isAuth?<Dropdown style={{marginTop:"1%"}}>
      <Dropdown.Toggle style={{background:"none",border:"none",color:"black",fontSize:"130%"}} id="dropdown-basic">
  Help
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" >
        
        <Text><b>Visit Help Center</b></Text>       </Dropdown.Item>
        <Dropdown.Item href="#/action-1" >
        
        <Text><b>Quick Help</b></Text>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-1" >
        
        <Text><b>Status</b></Text>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-1" >
        
        <Text><b>Change Log</b></Text>    
            </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>:<Text style={{marginTop:"1%" ,fontSize:'150%'}}> <Link to="/about">About</Link></Text>}
{isAuth?<Text style={{marginTop:"1%" ,fontSize:'150%'}}><Button onClick={ToggleAuth}>Logout</Button></Text>:<Text style={{marginTop:"1%" ,fontSize:'150%'}}>  <Link to="/login">Login</Link></Text>}

{isAuth?<Dropdown style={{marginTop:"1%"}}>
      <Dropdown.Toggle style={{background:"none",border:"none",color:"black",fontSize:"130%"}} id="dropdown-basic">

    <Text>{"Hii !"}</Text>
  
  
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" >
            <Text><b>Acoount</b></Text>
                    </Dropdown.Item>
        <Dropdown.Item href="#/action-1" >
            <Text><b>My preference</b> </Text>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-1" >
            <Text><b>Channels</b></Text>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-1" >
            <Text><b>Team</b></Text>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>:<Button variant="primary" size="lg" >Get Started Now </Button>}
</Box>
</div>

)
}
export default Navbar
