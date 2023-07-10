import React from 'react'
import YouTube from "react-youtube";
import { Box, Typography, Divider, Button, } from "@mui/material";
import Image from 'next/image';
import { useRouter } from "next/router";
import {useState} from "react";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


export default function Video({data}) {
 
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const router = useRouter();
  const [jsondata,setjsondata] = useState(data[0].videos);
  return (

    <>
          {
         jsondata.map((item)=>
         {
     
           return(
          
         
           <>
       
          
         
  <Box className='videowrapper'>
        <YouTube videoId={item.video_path}
           />
           
      </Box>
      <Typography sx={{ paddingBottom: "5px", fontWeight:'bold' }}>
          {item.video_title}
          </Typography>

      </>
                    )
})
}            
</>
  );

}


// return (

//   <>
//         {
//        jsondata.map((item, i=1)=>
//        {
//         console.log(i);
//          return(
//           i===0 ?  
       
//          <>
     
        
       
// <Box className='videowrapper'>
//       <YouTube videoId={item.video_path}
//          />
         
//     </Box>
//     <Typography sx={{ paddingBottom: "5px", fontWeight:'bold' }}>
//         {item.video_title}
//         </Typography>

//     </>:   
//     <Box sx={{ flexGrow: 1 }}>
//     <Grid container spacing={2} sx={{paddingLeft:"0px !important", marginTop:"0px"}}>
//       <Grid item xs={6} sx={{padding:"0px"}}>
//         <Item>  
// <Box className='videowrapper'>
//       <YouTube videoId={item.video_path}
//          />
         
//     </Box>
//     <Typography sx={{ paddingBottom: "5px", fontWeight:'bold' }}>
//         {item.category_name}
//         </Typography>
//     </Item>
//       </Grid>
    
//     </Grid>
//   </Box> 
//                   )
// })
// }            
// <Box align="center" sx={{marginTop:'15px'}}>
   
//    <Button variant="contained"><KeyboardArrowDownIcon/> More Videos</Button> </Box>
   
//   </>
// );