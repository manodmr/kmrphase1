import React from 'react'
import { HiOutlinePhotograph } from "react-icons/hi";
import {styled } from '@mui/material';

function Photo({sx}) {
    const PhotoIcon =styled(HiOutlinePhotograph )({
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
                <PhotoIcon style={{height:'30px',width:'30px'}}/>

    </div>
  )
}

export default Photo