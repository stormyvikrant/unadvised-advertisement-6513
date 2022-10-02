import React from 'react';
import {ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { Box, Heading, Text } from '@chakra-ui/react';

  
function Publishing() {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}} >
<Box>
<div id="sidebar" width="120px" > 
<Box display={'flex'} gap="4%" id="first">
<img width='30px' src='https://cdn.pixabay.com/photo/2019/01/01/14/55/calendar-3906791_1280.jpg'alt="dsfsd"></img>
<Text color="blue" fontSize={'140%'}><b>Calender</b></Text>
</Box>
<Heading color={"white"}>Caledfgdfgdg</Heading>
</div>

<Box>
<div id="sidebar" width="120px"  marginTop={"2%"}> 
<Box display={'flex'} gap="4%" id="second">
<img width='30px' src='https://cdn-icons-png.flaticon.com/512/178/178365.png'alt="dsfsd"></img>
<Text color="blue" fontSize={'140%'}><b>Calender</b></Text>
</Box>

</div>
</Box>
</Box>

   <box>
     <ScheduleComponent  >
            <Inject services={[Day,WorkWeek,Week,Month,Agenda]}/>
        </ScheduleComponent>
   </box>
       
  

      
    </div>
  );
}

export default Publishing;
