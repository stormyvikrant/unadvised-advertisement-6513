import { Image } from "@chakra-ui/react"
import "./Slider.css"
function Slider(){
    return(
        <div className="container">
            <div className="slide-container">
              <div className="slide-image">
        
              <Image  w="100%" h="92%"src="https://i.ibb.co/VgVsyMZ/3.png" 
                 alt='slideimg1'/>
            

            
               
              </div>
              <div className="slide-image">
                
                <Image w="100%" h="92%"src="https://i.ibb.co/2ymMSx2/5.png" 
                 alt='slideimg2'/>


              
              </div>
              <div className="slide-image">
                 <Image w="100%" h="92%"src="https://i.ibb.co/0ttmtxV/4.png"
                  alt='slideimg3'/>
              </div>
              <div className="slide-image">
                 <Image w="100%" h="92%"src="https://i.ibb.co/ZNKLt8c/1.png" 
                 alt='slideimg4'/>
              </div>
              <div className="slide-image">
                 <Image w="100%" h="92%"src="https://i.ibb.co/0G4WjV4/2.png"
                  alt='slideimg5'/>
              </div>
               
              <div className="slide-image">
                 <Image w="100%" h="92%"src="https://i.ibb.co/2ymMSx2/5.png"
                  alt='slideimg6'/>
              </div>
               
              <div className="slide-image">
                 <Image w="100%" h="92%"src="https://i.ibb.co/ZNKLt8c/1.png"
                  alt='slideimg7'/>
              </div>
               
              <div className="slide-image">
                 <Image w="100%" h="92%"src="https://i.ibb.co/0G4WjV4/2.png"
                  alt='slideimg8'/>
              </div>
               
            </div>

        </div>

    )
}
export default Slider
