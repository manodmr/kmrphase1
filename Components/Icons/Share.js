import React from 'react'
import { FaRegShareSquare } from "react-icons/fa";
import {styled } from '@mui/material';

function Share({sx}) {
    const ShareIcon =styled(FaRegShareSquare)({
        color:'black',
        transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:' #00a7ce',
        },
        ...sx
    });
  return (
    <div>
        <ShareIcon style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default Share