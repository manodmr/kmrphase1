import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import {styled } from '@mui/material';


function Copyrights({sx}) {
    const Copy =styled(FaRegCopyright)({
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
            <Copy style={{height:'20px',width:'20px'}}/>

    </div>
  )
}

export default Copyrights