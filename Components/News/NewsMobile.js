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
    items: 4,
  },
};


function NewsMobile({ data }) {

    const [jsondata,setjsondata] = useState(data[0].news);

   const themeMode = useContext(darkLightModeContext);


  return (
    <Box sx={{  padding: "18px", bgcolor: themeMode === true ? "#212B36" : "#e8eef7",
    color:
      themeMode === true ? "common.white" : "#333", boxShadow:"none"}}>
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
              itemClass="image-item"
              responsive={responsive}
              infinite
              autoPlay
              arrows="false"
            >
            
            {jsondata.map((item) => {
    
        return (
          <>
         
         <Card sx={{ maxWidth: 345, marginRight:"10px" ,boxShadow:"none",color:
      themeMode === true ? "common.white" : "#333"}}>
    
      <CardMedia
        component="img"
        height="194"
        image={`${item.news_image}`}
        alt="Paella dish"
      />
      <CardContent sx={{ color:themeMode === true ? "common.white" : "#333"}}>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:"1em", fontWeight:"bold",color:themeMode === true ? "common.white" : "#333"}}>
        {item.news_title.length > 80 ?
    `${item.news_title.substring(0, 80)}...` : item.news_title
  }
        </Typography>
        <CardHeader sx={{padding:"0px", boxShadow:"none",color:themeMode === true ? "common.white" : "#333"}}
    
    subheader={`${item.news_publish_date}`}
  />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Comment">
          <InsertCommentIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
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
export default NewsMobile;
