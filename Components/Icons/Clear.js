import React from 'react'
import {styled } from '@mui/material';
import { AiOutlineCloseCircle } from "react-icons/ai";
function Clear({sx}) {
    const Clearui =styled(AiOutlineCloseCircle)({
        color:'black',
        transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:'Red',
        },
        ...sx
      });
  return (
    <div>
           <Clearui style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default Clear