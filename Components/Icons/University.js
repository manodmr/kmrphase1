import React from 'react'
import {styled } from '@mui/material';
import {FaUniversity} from 'react-icons/fa'
function University({sx}) {
    const Uinversitymui =styled(FaUniversity)({
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
        <Uinversitymui style={{height:'50px',width:'50px'}}/>
    </div>
  )
}

export default University