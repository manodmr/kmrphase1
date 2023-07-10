import React from 'react'
import { ImUpload } from "react-icons/im";
import {styled } from '@mui/material';

function Upload({sx}) {
    const Uploadicon =styled(ImUpload)({
        color:'black',
        transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:'blue',
        },
        ...sx
    });
  return (
    <div>
      <Uploadicon style={{height:'30px',width:'30px'}}/>  
    </div>
  )
}

export default Upload