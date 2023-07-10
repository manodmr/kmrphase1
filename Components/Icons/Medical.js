import React from 'react'
import { FaHandHoldingMedical } from "react-icons/fa";
import {styled } from '@mui/material';
function Medical({sx}) {
    const Medicine =styled(FaHandHoldingMedical)({
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
            <Medicine style={{height:'20px',width:'20px'}}/>
    </div>
  )
}

export default Medical