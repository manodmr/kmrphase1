import React from 'react'
import { FaBullhorn } from "react-icons/fa";
import {styled } from '@mui/material';


function Announcement({sx}) {
    const Notice =styled(FaBullhorn)({
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
        <Notice style={{height:'30px',width:'30px'}}/>
      
    </div>
  )
}

export default Announcement