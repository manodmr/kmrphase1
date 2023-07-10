import React from 'react'
import {styled } from '@mui/material';
import { IoLibrary } from "react-icons/io5";

function Library({sx}) {
    const Libraryui =styled(IoLibrary)({
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
        <Libraryui style={{height:'30px',width:'30px'}}/>

    </div>
  )
}

export default Library