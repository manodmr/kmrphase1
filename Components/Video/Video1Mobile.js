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


export default function Video1Mobile({data}) {
 
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
    <Box sx={{ margin: "2em 0 0em 0" }}>
    <Typography
      variant="h5"
      sx={{
        // marginBottom: "8px",
        paddingBottom: "3px",
        display: "inline-block",
        borderBottom: "#5bd9bd solid 1px",
        color:'#eaeef7',
      }}
    >
      Video
    </Typography>
          {
         jsondata.map((item)=>
         {
     
           return(
            <>         
       <Box sx={{margin:'1em 0 0 0'}}>
  <Typography className='videowrapper'>
        <YouTube videoId={item.video_path}
           />
           
      </Typography>
      <Typography sx={{ paddingBottom: "10px", color:'#eaeef7',}}>
          {item.video_title}
          </Typography>
          </Box>  
             </>
                )
        })
        }            
    </Box>
  );

}


