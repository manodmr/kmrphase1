import { Stack, Box, Divider, } from "@mui/material";
import React, { useEffect,useContext } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { darkLightModeContext } from "@/Layout/Layout";


function NotificationScroll({ data }) {

  
    const [jsondata, setJsondata] = React.useState(data[0]);

    const [news, setnews] = React.useState(jsondata.news);

    const themeMode = useContext(darkLightModeContext);


  return (
    <>
   
    <Box sx={{display:'flex'}} className="marquee-container">   
    <Box sx={{color:'#fff', background:'#73A9AD', padding:'0 0.5em', display:'flex', justifyContent:'center', alignItems:'center', fontWeight:'bold', fontFamily:'Public Sans,sans-serif'}}> Notification </Box>
<Box   className={themeMode === true ? "MarqueeDark" : "Marquee"}>

  <Box className="Marquee-content">
   
      {news.map((jsondata) => {
    
        return (
          <>
         
       
    <Box className="Marquee-tag">
    <Typography color="text.secondary" sx={{fontSize:"14px",  fontWeight:"bold", color:themeMode === true ? "common.white" : "#333"}}>
    <NotificationsIcon
                            style={{ marginBottom: "-3px", marginRight:'5px', fontSize: "20px", color:'#73A9AD' }}
                          />   {jsondata.news_title} 
        </Typography> 
    
    </Box>
            
                      
           
          </>
        );
      })}
     
       </Box>
    </Box>
    
      
    </Box>
    </>
  );
}
export default NotificationScroll;
