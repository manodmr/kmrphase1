import React from 'react'
import {styled } from '@mui/material';
import { CgGym } from "react-icons/cg";

function Gym({sx}) {
    const Gymui =styled(CgGym)({
        color:'primary.main',
        transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:'#E96479',
        },
        ...sx
      });
  return (
    <div>
            <Gymui style={{height:'40px',width:'40px'}}/>
    </div>
  )
}

export default Gym