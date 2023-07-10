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
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
};


function News({ data }) {

  
    const [jsondata, setJsondata] = React.useState(data[0]);

    const [news, setnews] = React.useState(jsondata.news);

    const themeMode = useContext(darkLightModeContext);


  return (
    <Box sx={{ margin:'1em 0 1em 1em'}}>
      <Typography
        variant="h5"
        sx={{
          marginBottom: "8px",
          paddingBottom: "3px",
          display: "inline-block",
          borderBottom: "#5bd9bd solid 1px",
          
        }}
      >
       News
      </Typography>
      <Carousel
              partialVisbile
              itemClass="carouselItem"
              responsive={responsive}
              infinite
              autoPlay
              arrows="false"
            >
            
      {news.map((jsondata) => {
    
        return (
          <>
         
         <Card sx={{marginRight:"10px" ,boxShadow:"none",color:
      themeMode === true ? "common.white" : "#333"}}>
    
      <CardMedia
        component="img"
        height="160"
        image={`${jsondata.news_image}`}
        alt="Paella dish"
      />

      <CardContent sx={{ color:themeMode === true ? "common.white" : "#333", minHeight:'124px'}}>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:"14px", fontWeight:"bold",color:themeMode === true ? "common.white" : "#333"}}>
        {jsondata.news_title.length > 80 ?
    `${jsondata.news_title.substring(0, 80)}...` : jsondata.news_title
  }
        </Typography>
        <CardHeader sx={{padding:"0px", boxShadow:"none",color:themeMode === true ? "common.white" : "#333"}}
    
    subheader={`${jsondata.news_publish_date}`}
    subheaderTypographyProps={{color:themeMode === true ?  "grey.500" : "grey.500", marginTop:'4px'}}
  />
      </CardContent>
      <CardActions disableSpacing sx={{borderTop:'rgba(145, 158, 171, 0.24) solid 1px', padding:'0 8px'}}>
        <IconButton aria-label="Comment" sx={{fontSize:'16px', color: themeMode === true ? "grey.400" : "grey.600",}}>
          <InsertCommentIcon sx={{marginRight:'4px',fontSize:'18px;'}}  />
        </IconButton>
        <IconButton aria-label="share" sx={{fontSize:'16px', color: themeMode === true ? "grey.400" : "grey.600",}}>
          <ShareIcon sx={{marginRight:'4px',fontSize:'18px;'}}  />
        </IconButton>
       
         
      
      </CardActions>
   
    </Card>
                
           
          </>
        );
      })}
       </Carousel>
    </Box>
  );
}
export default News;
