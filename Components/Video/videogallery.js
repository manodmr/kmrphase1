import { Stack, Box, Divider, } from "@mui/material";
import React, { useEffect,useContext } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography } from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from "next/image";
import { Card } from "@/OverViews/Card/Card";
import { CardMedia } from "@/OverViews/Card/CardMedia";
import { darkLightModeContext } from "@/Layout/Layout";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import VideocamIcon from '@mui/icons-material/Videocam';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items:1,
  },
};
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';

import InfoIcon from '@mui/icons-material/Info';
import Link from "next/link";
import { GridContainer } from "@/OverViews/GridContainer";
import { GridItem } from "@/OverViews/GridItem";

function News({ data }) {

  const router = useRouter();
    const [jsondata, setJsondata] = React.useState(data[0]);

    const [gallery, setgallery] = React.useState(jsondata.gallery);

    const themeMode = useContext(darkLightModeContext);


  return (
    <GridContainer spacing={2}  sx={{margin:"1em 0 1em 0", padding:'.5em .5em 0 .5em',
    bgcolor:themeMode === true ? 'grey.900' : "grey.900", borderRadius:'8px'
    }}>
    <Typography variant="h5" sx={{ paddingBottom: "5px", color:'grey.300' }}>
    <VideocamIcon sx={{position:"relative",top:"5px", color:"primary.main"}}/>   Video Gallery
    </Typography>

    
    <GridItem xs={12} md={12} lg={12} sx={{padding:'0!important'}}>
      <Box className="clsPhotos">
      <Carousel
              partialVisbile
              itemClass="carouselItem"
              responsive={responsive}
              infinite
              autoPlay
              arrows="false"
            >
            
      {gallery.map((jsondata) => {
    
        return (
          <>
           <Link href={`/${router.query.collegelist}/${router.query.college}/video`}
                    >
         <Card sx={{ background:"none",borderRadius:"0px 0px 0px 0px" ,boxShadow:"none",color:
      themeMode === true ? "common.white" : "#333"}}>
    <ImageList sx={{margin:"0px", padding:"0px",borderRadius:"none"}}>
      
     
        <ImageListItem sx={{ width: 350, height: 350,borderRadius:"none"}}>
          <img
            src={`${jsondata.gallery_images}?w=248&fit=crop&auto=format`}
            srcSet={`${jsondata.gallery_images}?w=248&fit=crop&auto=format&dpr=2 2x`}
          
            loading="lazy"
          
          />
          <ImageListItemBar
            title="SSN college of Engineering - Chennai || Campus Tour || Walk through ||"
          
          />
        </ImageListItem>
        <PlayCircleIcon sx={{position:"absolute", marginLeft:"5px", left:"40%", top:"40%", fontSize:"2.5em", color:"#0093AB", opacity:"0.7", background:"#fff",borderRadius:"50%"}}/>

    </ImageList>
      {/* <CardMedia
        component="img"
        height="220"
        image={`${jsondata.gallery_images}`}
        alt="Paella dish"
      />
      <CardContent sx={{ color:themeMode === true ? "common.white" : "#333"}}>

<Typography variant="body2" color="text.secondary" sx={{fontSize:"14px", fontWeight:"bold",color:themeMode === true ? "common.white" : "#333"}}>
{`${jsondata.categories_name}`}
        </Typography>      </CardContent>

      <CardActions disableSpacing sx={{borderTop:'rgba(145, 158, 171, 0.24) solid 1px', padding:'0 8px'}}>
       
        <IconButton aria-label="share" sx={{fontSize:'16px', color: themeMode === true ? "grey.400" : "grey.600",}}>
          Share : <ShareIcon sx={{marginRight:'4px',fontSize:'18px;'}}  />
        </IconButton>
       
         
      
      </CardActions> */}
   
    </Card>
    </Link>
           
          </>
        );
      })}
       </Carousel>
       </Box>
    </GridItem>
  </GridContainer>
  );
}
export default News;
