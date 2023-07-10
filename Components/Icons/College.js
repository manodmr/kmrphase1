import React from 'react'
import {styled } from '@mui/material';
import { FaBuilding } from "react-icons/fa";

function College({sx}) {
    const Build =styled(FaBuilding)({
        color:'black',
        transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:'#E96479',
        },
        ...sx
      });
  return (
    <div>
    <Build style={{height:'30px',width:'30px'}}/><br/>

    </div>
  )
}

export default College