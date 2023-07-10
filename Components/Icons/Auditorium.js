import React from 'react'
import { GiTheater } from "react-icons/gi";
import {styled } from '@mui/material';

function Auditorium({sx}) {
    const Theater =styled(GiTheater)({
        color:'primary.main',
        // transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:' #00a7ce',
        },
        ...sx
    });
  return (
    <div>
      <Theater style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default Auditorium