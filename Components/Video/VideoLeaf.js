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


export default function VideoLeaf({data}) {
 
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
      <Typography sx={{ padding: "5px 0", marginBottom:'15px', fontWeight:'bold' }}>
          {item.video_title}
          </Typography>

          <Divider sx={{margin:'3px 0  40px 0 '}}/>

      </>
                    )
})
}            
    </>
  );

}

