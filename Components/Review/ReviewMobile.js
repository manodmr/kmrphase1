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



  function ReviewMobile({data}) {
    const router = useRouter();
    const [jsondata,setjsondata] = useState(data[0].reviews);
    console.log(jsondata);
    const themeMode = useContext(darkLightModeContext);
    return (
        <Box sx={{ width:'100%', 
        bgcolor:themeMode === true ? 'grey.900' : "#f7f0e8",
        // background:"#f7f0e8"
        }}>


        <Box sx={{margin:'1em', display:'flex', justifyContent:'space-between'}}>
         <Box>
        <Link
        style={{ display: "block", width: "100%" }}
          href={`/${router.query.collegelist}/${router.query.college}/reviews`}
      >
        <Typography variant="h4"  sx={{
                  marginBottom: "0px",
                  paddingBottom: "0px",
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

       
        <Typography  variant="h4" 
                 sx={{fontWeight:'normal', fontWeight:"bold", marginTop:'2px', display:'inline-flex', }}>
                 
                 <Rating size="small" sx={{marginTop:'5px', marginBottom:'0', marginRight:'5px'}} name="half-rating" defaultValue={4.8} precision={0.5} /> 4.8  </Typography> 
                 <Typography variant="subtitle1" sx={{ color:"#999", fontWeight:"normal", marginTop:'-3px'}}> <small> 429 Reviwes </small></Typography>
                
                
                 </Box>   

                 <Image
          width={170}
          height={150}
          src={reviewdollbg}
          style={{margin:'-10px -30px -30px -30px '}}
        />
       
                       
        </Box>
      
      <Box sx={{ display:'flex', justifyContent:'center'}}> <Button size="small" variant="contained"> Write a Review & Get approval in 15 Mins </Button></Box> 
       
     <Box sx={{ margin:'1em', }}>
        <Box sx={{display:'flex', overflowX:'scroll', width:'100%'}}>
        {
         jsondata.map((item,index )=>
         { 
            if (index <= 1) {
            return(
       
          <Card sx={{ bgcolor:themeMode === true ? 'grey.700' : "#fff",
          color: themeMode === true ? "grey.300" : "#333",
          boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
        borderRadius: "20px",
        padding:'12px',   
        width:'75%',
        overflow:'hidden',
        display:'flex',
        flexDirection:'column',
        flex: '0 0 80%',    
        marginRight:'1em',   
        
        }}
        >
        
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
       <Box>
        <Typography variant="h6" >
        {item.category_name}  </Typography>
        <Typography  variant="h6" 
                 sx={{fontWeight:'normal', fontWeight:"bold",  display:'inline-flex', }}>
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
                 </Box>

                 <Box sx={{display:'flex', justifyContent:'flex-end'}}>
                 <CardHeader sx={{margin:'0', padding:'0', textAlign:'end'}}       
        title={item.user_name} 
        titleTypographyProps={{fontSize:'14px', fontWeight:'normal', }}
        subheader={item.reviews_created_date}
        subheaderTypographyProps={{fontSize:'12px', color: themeMode === true ? "grey.500" : "grey.500",}}
        // avatar={
        //     <Avatar src={`${jsondata.news_image}`}/>
        //   }         
      />
       
    </Box>
                 
          
       
                 </Box>
                 
       
              <Divider sx={{margin:'.3em 0'}}/>    
        
        <Box sx={{height:'200px', overflow:'auto'}}>
        <Typography variant="subtitle2" sx={{fontWeight:"normal"}}>  {item.review_description}</Typography>
        </Box>
          </Card>
       );
    }
    })}
   </Box> 
      
        </Box>
        </Box>
    )
  }
  
  export default ReviewMobile
  