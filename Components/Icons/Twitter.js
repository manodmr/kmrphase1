import React from 'react'
import { SiTwitter } from "react-icons/si";
import {styled } from '@mui/material';

function Twitter({sx}) {
    const TwitterIcon =styled(SiTwitter)({
        color:'black',
        transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:'#00acee',
        },
        ...sx
      });
  return (
    <div>
    <TwitterIcon style={{height:'40px',width:'40px'}}/>
    </div>
  )
}

export default Twitter