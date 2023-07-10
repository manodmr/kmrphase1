import React from 'react'
import { FaDownload } from "react-icons/fa";
import {styled } from '@mui/material';

function Download({sx}) {
  const Downloadui =styled(FaDownload)({
    color:'black',
    transition:'1.5s',
    // width:'30px',height:'30px',
    '&:hover':{
        color:'#E96479',
    },
    ...sx
  });
  
  return (
    <div>
       <Downloadui style={{height:'20px',width:'20px'}}/>
       
</div>
  )
}

export default Download