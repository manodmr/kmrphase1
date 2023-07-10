import {
    Button,
    Divider,
    Grid,
    Typography,
    Rating,
    Stack,
    CardHeader,
    Avatar,
    CardContent,
    Card,
    TextField,
    Box,
  } from "@mui/material";
  import { useRouter } from "next/router";
  import React, {useState,useContext } from "react";
  import TextareaAutosize from "@mui/base/TextareaAutosize";
  import { ArrowDropDown } from "@mui/icons-material";
  import CommentIcon from '@mui/icons-material/Comment';
  import AddCommentIcon from '@mui/icons-material/AddComment';
  import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import reviewdollbg from "/public/reviewdoll.png";
import StarIcon from '@mui/icons-material/Star';
import Image from "next/image";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { GridContainer } from "@/OverViews/GridContainer";
import { GridItem } from "@/OverViews/GridItem";
import { darkLightModeContext } from "@/Layout/Layout";
import Link from "next/link";


  function Review({detailData}) {
    const router = useRouter();
    const [jsondata,setjsondata] = useState(detailData[0].reviews);
    console.log(jsondata);
    const themeMode = useContext(darkLightModeContext);
    return (
        <GridContainer spacing={2} sx={{margin:"0 0 0em 0", padding:'0 0 1em 0',
        bgcolor:themeMode === true ? 'grey.900' : "#f7f0e8",
        // background:"#f7f0e8"
        
        }}>


        <GridItem xs={12} md={12} lg={12} >
        <Link
        style={{ display: "block", width: "100%" }}
          href={`/${router.query.collegelist}/${router.query.college}/reviews`}
      >
        <Typography variant="h5"  sx={{
                  marginBottom: "0px",
                  paddingBottom: "3px",
                  display: "inline-block",
               
                }}>
        Rating & Reviews <ArrowForwardOutlinedIcon
                          style={{
                            marginBottom: "-6px",
                            textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                          }}
                        />
        </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary">
          
        Sorted by <Button size="small" endIcon={<ArrowDropDown />}>  Recent  </Button>
              {/* <FormControl variant="standard" sx={{width:"150px", dispaly:"inline !important", margin:"0px 0 0 0 !imporant"}}>
                <InputLabel sx="demo-simple-select-label" style={{margin:"-25px 0 0 10px"}}>Comment</InputLabel>
                <Select style={{padding:"5px 10px !important", margin:"-10px 0 0 10px"}}>
                  <MenuItem>New</MenuItem>
                  <MenuItem>Old</MenuItem>
                  
                </Select>
              </FormControl> */}
        
        
        </Typography>
        </GridItem>
        <GridItem xs={12} md={12} lg={12}>
        <Typography variant="h6"  sx={{
                  marginBottom: "0px",
                  paddingBottom: "3px",
                  display: "inline-block",
               
                }}>
        Write a Review & Approval in 15 Mins
        </Typography>
        <Typography  variant="h4" 
                 sx={{fontWeight:'normal', fontWeight:"bold", marginTop:'0px',color:'#f8b81f', display:'inline-flex', marginRight:'15px', }}>
                 
                 <Rating size="small" sx={{marginTop:'5px', marginRight:'5px'}} name="half-rating" defaultValue={4.8} precision={0.5} /> 4.8 <Typography variant="subtitle1" sx={{ color:"#999", marginLeft:"10px", marginTop:"8px", fontWeight:"normal"}}>429 Reviwes</Typography>
                 </Typography> 
                  
        </GridItem>
        {
         jsondata.map((item,index )=>
         { 
           
            return(
        <GridItem xs={12} md={12} lg={12} sx={{margin:'0em 1em 0 0em'}}>
          <Card sx={{ bgcolor:themeMode === true ? 'grey.700' : "#fff",
          color: themeMode === true ? "grey.300" : "#333",  }}
        style={{
          boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
          backgroundSize:"contain",
        borderRadius: "10px",
        padding:'20px ',
     
 
       
        }}
        >
        
        
        <Typography variant="h5" style={{float:"left", width:"50%", color:"#0087a5"}}>
        {item.category_name} <br/>  
        <Typography  variant="h6" 
                 sx={{fontWeight:'normal', fontWeight:"bold", marginTop:'8px',color:'#333', display:'inline-flex', marginRight:'15px', }}>
                  {
              item.reviews_rating != "" ? 
              <>
                 {/* <StarIcon style={{marginRight:'4px', fontSize:"1.2em", color:'#f8b81f'}} /> */}
                 <Rating size="small" name="half-rating" defaultValue={2.5} precision={0.5} />
                 
               <Typography variant="span" sx={{ color: themeMode === true ? "#f8b81f" : "grey.800", marginLeft:'5px'
                }}>  {item.reviews_rating}/10</Typography> 

                 </>
              : null
            }
                 </Typography> 
                         
                  </Typography>
        <Typography  style={{float:"right", width:"50%", color:"#888", textAlign:"right"}}>

        <Avatar
                            sx={{
                            float:'right',
                              width: "40px",
                              height: "40px",
                              marginLeft:'10px'
                            }}
                            src={`${jsondata.news_image}`}
                          />
          
        {item.user_name} <br/>  <span style={{ fontWeight:'normal', fontSize:'12px', color:"#999"}}>{item.reviews_created_date}</span> 
                         
                  </Typography>
                  
        
        <Box sx={{clear:"both"}}>
        <Typography variant="subtitle1" sx={{fontWeight:"normal"}}>  {item.review_description}</Typography>
        </Box>
          </Card></GridItem>
       );
   
    })}
   
  
        </GridContainer>
    )
  }
  
  export default Review
  