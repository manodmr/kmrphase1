import React from 'react'
import {styled } from '@mui/material';
import { HiAcademicCap } from "react-icons/hi";

function Degree({sx}) {
    const Cap =styled(HiAcademicCap)({
        color:'black',
        transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:'#0072b1',
        },
        ...sx
    });
  return (
    <div>
    <Cap style={{height:'30px',width:'30px'}}/>


    </div>
  )
}

export default Degree