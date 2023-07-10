import React from 'react'
import { CgChevronDoubleLeftR } from "react-icons/cg";
import {styled } from '@mui/material';
function LeftArrow({sx}) {
    const LeftAr =styled(CgChevronDoubleLeftR)({
        color:'black',
        transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:'#55ceb4',
        },
        ...sx
    });
  return (
    <div>
        <LeftAr  style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default LeftArrow