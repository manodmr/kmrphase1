import React from 'react'
import { BiCommentDetail} from "react-icons/bi";
import {styled } from '@mui/material';
function Comment({sx}) {
    const CommentIcon =styled(BiCommentDetail)({
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
        <CommentIcon style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default Comment