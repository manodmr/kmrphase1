import React from 'react'
import { MdOutlineVideoCameraBack } from "react-icons/md";
import {styled } from '@mui/material';

function VideoIcon({sx}) {
    const Videoicon =styled(MdOutlineVideoCameraBack)({
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
      <Videoicon style={{height:'30px',width:'30px'}}/>

    </div>
  )
}

export default VideoIcon