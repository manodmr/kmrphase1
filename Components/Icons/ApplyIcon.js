import React from 'react'
import { DownloadDone } from '@mui/icons-material';
import {Button,styled,Link } from '@mui/material';
function ApplyIcon({sx,Path,name}) {
    const Download =styled(DownloadDone)({
        color:'black',
        transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:'#E96479',
        },
    });
    const ButtonIcon = styled(Button)({
        backgroundColor:'#579BB1',
        color:'black',
        transition:'1.5s',
        '&:hover':{
            backgroundColor:'#CCF2F4',
        },
        ...sx
    });
    
  return (
    <div>    <Link href={Path} download={name} style={{textDecoration:"none"}}>

        <ButtonIcon variant="contained" size="large" startIcon={<Download/>} >
        Brochure
        </ButtonIcon>
        </Link>
    </div>
  )
}

export default ApplyIcon