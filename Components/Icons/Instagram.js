import React from 'react'
import {FaInstagram } from "react-icons/fa";
import {styled } from '@mui/material';
function Instagram({sx}) {
    const FacebookIcon =styled(FaInstagram)({
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
            <FacebookIcon style={{height:'40px',width:'40px'}}/>

    </div>
  )
}

export default Instagram