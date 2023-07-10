import React from 'react'
import { FaGlobeAmericas } from "react-icons/fa";
import {styled } from '@mui/material';

function Global({sx}) {
    const Glob =styled(FaGlobeAmericas)({
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
    <Glob style={{height:'30px',width:'30px'}}/><br/>
    </div>
  )
}

export default Global