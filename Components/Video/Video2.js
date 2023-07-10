import React, { useEffect,useContext } from "react";
import YouTube from "react-youtube";
import { Box, Typography, Divider, Button, } from "@mui/material";
import Image from 'next/image';
import { useRouter } from "next/router";
import {useState} from "react";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Card } from "@/OverViews/Card/Card";
import { darkLightModeContext } from "@/Layout/Layout";
import { CardMedia } from "@/OverViews/Card/CardMedia";
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import { GridContainer } from "@/OverViews/GridContainer";
import { GridItem } from "@/OverViews/GridItem";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import InsertCommentIcon from '@mui/icons-material/InsertComment';

export default function Video({data}) {
 
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const router = useRouter();
  const [jsondata,setjsondata] = useState(data[0].videos);
  const [gallery, setgallery] = useState(data[0].gallery);
  const themeMode = useContext(darkLightModeContext);

  return (

    <>
          {
         jsondata.map((item,index)=>
         {
            if (index <= 0) {
           return(
          
         
           <>
       
          
         
  <Box className='videowrapper'>
        <YouTube videoId={item.video_path}
           />
           
      </Box>
      <Typography sx={{ padding: "10px 10px 10px 0px", fontWeight:'bold' }}>
          {item.video_title}
          </Typography>

      </>
                    )
           }
})
}   

<Box sx={{margin:"1em 0", padding:"1em"}}>
      <Typography
        variant="h5"
        sx={{
          marginBottom: "8px",
          paddingBottom: "3px",
          display: "inline-block",
          borderBottom: "#5bd9bd solid 1px",
          
        }}
      >
More Videos        </Typography>
      <GridContainer sx={{}} spacing={2}>
            
      {gallery.map((jsondata) => {
    
        return (
          <>
          <GridItem xs={12} md={4} lg={4}>
         <Card sx={{marginRight:"10px" ,boxShadow:"none",color:
      themeMode === true ? "common.white" : "#333"}}>
    
      <CardMedia
        component="img"
        height="200"
        image={`${jsondata.gallery_images}`}
        alt="Paella dish"
      />
      <PlayCircleIcon sx={{position:"absolute", marginLeft:"5px", marginTop:"-45px", fontSize:"2.5em", color:"#0093AB", opacity:"0.7", background:"#fff",borderRadius:"50%"}}/>
      <CardContent sx={{ color:themeMode === true ? "common.white" : "#333"}}>

<Typography variant="body2" color="text.secondary" sx={{fontSize:"14px", fontWeight:"bold",color:themeMode === true ? "common.white" : "#333"}}>
{`${jsondata.categories_name}`}
        </Typography>      </CardContent>
  <CardActions disableSpacing sx={{borderTop:'rgba(145, 158, 171, 0.24) solid 1px', padding:'0 8px'}}>
        <IconButton aria-label="Comment" sx={{fontSize:'16px', color: themeMode === true ? "grey.400" : "grey.600",}}>
          <InsertCommentIcon sx={{marginRight:'4px',fontSize:'18px;'}}  />
        </IconButton>
        <IconButton aria-label="share" sx={{fontSize:'16px', color: themeMode === true ? "grey.400" : "grey.600",}}>
          <ShareIcon sx={{marginRight:'4px',fontSize:'18px;'}}  />
        </IconButton>
       
         
      
      </CardActions>
   
    </Card>
                
    </GridItem>  
          </>
        );
      })}
       </GridContainer>
    </Box>

</>
  );

}


// return (

//   <>
//         {
//        jsondata.map((item, i=1)=>
//        {
//         console.log(i);
//          return(
//           i===0 ?  
       
//          <>
     
        
       
// <Box className='videowrapper'>
//       <YouTube videoId={item.video_path}
//          />
         
//     </Box>
//     <Typography sx={{ paddingBottom: "5px", fontWeight:'bold' }}>
//         {item.video_title}
//         </Typography>

//     </>:   
//     <Box sx={{ flexGrow: 1 }}>
//     <Grid container spacing={2} sx={{paddingLeft:"0px !important", marginTop:"0px"}}>
//       <Grid item xs={6} sx={{padding:"0px"}}>
//         <Item>  
// <Box className='videowrapper'>
//       <YouTube videoId={item.video_path}
//          />
         
//     </Box>
//     <Typography sx={{ paddingBottom: "5px", fontWeight:'bold' }}>
//         {item.category_name}
//         </Typography>
//     </Item>
//       </Grid>
    
//     </Grid>
//   </Box> 
//                   )
// })
// }            
// <Box align="center" sx={{marginTop:'15px'}}>
   
//    <Button variant="contained"><KeyboardArrowDownIcon/> More Videos</Button> </Box>
   
//   </>
// );