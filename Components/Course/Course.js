import React from "react";
import Box from "@mui/material/Box";
import { Grid, Card, Chip, CardHeader, Avatar, CardContent, Typography, Link } from "@mui/material";
import { useRouter } from "next/router";
import {useState} from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';



export default function Course({data}) {

    const router = useRouter();
  const [jsondata,setjsondata] = useState(data[0].course);
  console.log(jsondata);

  return (
           
            
                <Grid container sx={{display:'grid', gridTemplateColumns:' auto auto auto',  gap:'.5rem',}}>

                {
         jsondata.map((item)=>
         { return(
           <>
            {/* <Chip sx={{margin:'6px'}}
        avatar={<Avatar color='primary.main' sx={{background:'rgba(2, 165, 105, .06)', color:'primary.main' }}> 
        <CheckCircleOutlineIcon sx={{color:'#0093AB', width:'18px'}}  /></Avatar>}
        label={item.course_name}
        
        variant="outlined"
      /> */}
                  <Grid item sx={{display:'flex', padding:'.3rem',  border:'#ccc solid 1px', borderRadius:'8px',
                  // background:'linear-gradient(0deg,#f0faf6 0%,#fff 100%)',
                   }}>
              {/* <CardHeader sx={{padding:'0px', }}
  avatar={
    <Avatar sx={{width:'40px', height:'40px', background:'rgba(2, 165, 105, .06)', }}>
     <CheckCircleOutlineIcon sx={{ opacity:'0.5',}}  />
    </Avatar>
  }
  
  title= {item.course_name}
  
  titleTypographyProps={{fontSize:'16px', color:'#666', fontWeight:'normal'}}
/> */}

<List sx={{ padding:'0' }}>
      <ListItem sx={{padding:'0'}}>
        <ListItemAvatar sx={{margin:'6px'}}>
          <Avatar sx={{background:'rgba(2, 165, 105, .06)',}}>
            <CheckCircleOutlineIcon sx={{color:'#0093AB', opacity:'0.5'}} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={item.course_name} 
        secondary={item.name} 
        // {item.level}        
         />
      </ListItem>
    
    </List>

                  </Grid> 
                  </>
                    )
})
}
                
                 
                </Grid>
              
           
         


  );
}
