import React from 'react'
import { IoGameControllerOutline } from "react-icons/io5";
import {styled } from '@mui/material';

function Extracurricular({sx}) {
    const Game =styled(IoGameControllerOutline)({
        color:'primary.main',
        transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:' #00a7ce',
        },
        ...sx
    });
  return (
    <div>
      <Game style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default Extracurricular