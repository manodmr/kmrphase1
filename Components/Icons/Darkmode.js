import React from 'react'
import {styled } from '@mui/material';
import { MdOutlineBrightness2 } from "react-icons/md";


function Darkmode({sx}) {
    const Bright =styled(MdOutlineBrightness2)({
        color:'black',
        transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:'yellow',
        },
        ...sx
    });
  return (
    <div>
                <Bright style={{height:'30px',width:'30px'}}/>

    </div>
  )
}

export default Darkmode