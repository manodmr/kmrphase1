import React from 'react'
import { BiBookmarkAlt} from "react-icons/bi";
import {styled } from '@mui/material';

function BookMark({sx}) {
    const Bookmrk =styled(BiBookmarkAlt)({
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
        <Bookmrk style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default BookMark