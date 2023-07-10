import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import React from 'react'
import {styled } from '@mui/material';

function Law({sx}) {
    const LawIcon =styled(GavelOutlinedIcon)({
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
        <LawIcon style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default Law