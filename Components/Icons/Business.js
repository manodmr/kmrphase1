import React from 'react'
import { BiBriefcase} from "react-icons/bi";
import {styled } from '@mui/material';

function Business({sx}) {
    const BusinessIcon =styled(BiBriefcase)({
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
        <BusinessIcon style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default Business