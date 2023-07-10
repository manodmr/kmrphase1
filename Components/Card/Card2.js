import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import ApplyButton from "../Button/ApplyButton";
import BrouchureButton from "../Button/BrouchureButton";
import AdmissionButton from "../Button/AdmissionButton";
import CourseFeeButton from "../Button/CourseFeeButton";
import Skeleton from '@mui/material/Skeleton';
import { LocationCity, LocationOn } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import Image from "next/image";
import { darkLightModeContext, searchContext } from "@/Layout/Layout";
import Router, { useRouter } from "next/router";

const Card2 = ({
  CollegeImage,
  CollegeName,
  CollegeDistrict,
  CollegeState,
  Courses,
  Rating,
  CollegeLogo,
  AdmissionFee,
  sx,
  collegeDetail,
  onClick,
  href,
  Kms,
},props) => {
  const theme = useTheme();
  // console.log(theme.palette.mode)
  // const { loading = false } = props;
  const themeMode = useContext(darkLightModeContext);
  const loading = useContext(searchContext);
  const router = useRouter();

  // console.log("ghgh" + href)
  

  return (
    //  <Link href={href} >
    <Button 
    
     onClick={() => {
        router.push(href, undefined, { shallow : false , scroll : true  });
     }} 
     sx={{ 
      '&:hover':{
        boxShadow: "none",
        stroke:'none',
      },
      width:'290px',
      height:'350px',
      justifyContent:'normal',
      textAlign:'left',

     }}
     >

      <Card
        sx={{
          height: "100%",
          width: 280,
          bgcolor:themeMode === true ? 'grey.700' : "common.white",
          display: "grid",
          color:  themeMode === true ? "common.white" : 'common.black',
          borderRadius: "13px",
          alignItems: "normal",
         
        }}
        onClick={onClick}
      >
      { loading == true ? (
        <Skeleton sx={{ height: 180 }} animation="wave" variant="rectangular" />
      ) : (
        <Box>
        <CardMedia
          component="img"
          height="150"
          image={`${CollegeImage}`}
          alt={CollegeName}
        /> 
        </Box>
      )
        }

        <CardHeader
          sx={{ display: "flex" }}
          avatar={ loading == true ? 
             <Skeleton sx={{ bgcolor:'grey.300' , height: 65 , width:65 ,mt: -7, borderRadius: "15px",boxShadow: "1px 1px 2px 1px grey", }} animation='pulse' variant='circle'   />
            :
            <Avatar
              sx={{
                width: 60,
                height: 60,
                mt: -8,
                borderRadius: "50px",
                boxShadow: "1px 1px 1px 1px grey",
              }}
              // imgProps={`https://w.kalvimalar.com/images/${CollegeLogo}`}
            >
              {/* <img src={`https://w.kalvimalar.com/images/${CollegeLogo}`} /> */}
              <img src={`${CollegeLogo}`} width={55} />
            </Avatar>
          }
          title={ loading == true ? 
            <Box sx={{ display: "flex", pl: 13, mt: -3 }}>
            <Skeleton animation='pulse' sx={{ width: 50 }} variant='text' /> 
            </Box>
            :
            <Box sx={{ display: "flex", ml: 13.7, mt: -3 , position:'relative' }}>
              
              <StarRateIcon 
               sx={{ 
                bgcolor:themeMode === true ? "grey.800":'grey.200',
                // bgcolor:themeMode === true ? "grey.800":'goldenrod',
                color: themeMode === true ? "goldenrod" :"goldenrod",
                // color: themeMode === true ? "goldenrod" :"common.white",
                borderRadius:'20px',
                boxShadow:'2px 1px 1px rgb(0,0,0,0.2)',
                position:'absolute',
                ml:-2,
                mt:-0.3,
                width:27,
                height: 27,
                zIndex:"9999px !important",
                p:"4px"
                // color: "#F0A500"
                 }} />
              <Typography variant="body1" sx={{ color:themeMode === true ? 'grey.300':'grey.500', bgcolor:themeMode === true ? "grey.600":'grey.300' ,fontWeight:600, borderRadius:'0px 10px 10px 0px' , px:'6px',pl:2  }}>
                {(Rating/5).toString().slice(0,3) }
                </Typography> 
            </Box>
          }
        />

        <CardContent sx={{ mt: -1, display: "grid" , justifyContent:'left' }}>
          {loading == true ?
          <Skeleton animation='pulse' variant='text' />
           :
           
          <Typography variant="title" sx={{ color: themeMode === true ? 'primary.light' : 'primary.dark' }} >{CollegeName}</Typography>
        
          }
          {loading == true ? 
           <Skeleton width={180} animation='pulse' variant='text' />
          :
          <>
          <Typography variant="caption" sx={{ display:'flex' , color:themeMode === true ? 'grey.500' :'grey.600' }} gutterBottom  >
            <LocationOn sx={{ fontSize:'14px' , pr:'2px' ,color:themeMode === true ? 'grey.500' :'grey.600'  }} />
            {CollegeDistrict},{CollegeState} 
          </Typography>
           {/* <Typography variant="subtitle2" sx={{ mb: 1 ,ml:2 , color:'grey.500' }}>
           {Kms}Rank
         </Typography> */}
         </>
          }

        </CardContent>
{/* 
        <CardActions sx={{ mt: -4 }}>
          {loading == true ? 
          <Box sx={{ mt: 1, width:'100%' , display:'flex' , justifyContent:'space-between' , px:1 }}>
          <Skeleton sx={{ width: 120, fontSize: "12px", my:1,py:2 , borderRadius:'10px' }} variant='rectangular' />
          <Skeleton sx={{ width: 120, fontSize: "12px", my:1,py:2 , borderRadius:'10px' }} variant='rectangular' />
          </Box>  
          :
          <>
          <AdmissionButton sx={{ width: 120, fontSize: "12px" , color:'grey.500' }} />
          <CourseFeeButton sx={{ width: 120, fontSize: "12px", color:'grey.500' }} />
          </>
          }
        </CardActions> */}

        <CardActions sx={{ mt: -3.5 , justifyContent:'space-between' , px:1}}>
          {loading == true  ?
           <Box sx={{  width:'100%' , display:'flex' , justifyContent:'space-between' , px:0.5 }}>
           <Skeleton sx={{ bgcolor:'grey.300',width: 120, fontSize: "12px", mb:1,py:2 , borderRadius:'10px' }} variant='rectangular' />
           <Skeleton sx={{ bgcolor:'grey.300',width: 120, fontSize: "12px", mb:1,py:2 , borderRadius:'10px' }} variant='rectangular' />
           </Box>  
          :
          <>
          <ApplyButton /> 
          <BrouchureButton />
          </>
          }
        </CardActions>
      </Card>
    </Button>
    //  </Link>
 
 
  
  );
};

export default Card2;
