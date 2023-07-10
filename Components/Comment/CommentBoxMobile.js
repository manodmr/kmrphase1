import React, { useContext } from "react";

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
import { GridContainer } from "@/OverViews/GridContainer";
import { GridItem } from "@/OverViews/GridItem";
import { useRouter } from "next/router";
import {useState} from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { ArrowDropDown } from "@mui/icons-material";
import CommentIcon from '@mui/icons-material/Comment';
import { darkLightModeContext } from "@/Layout/Layout";

function CommentBoxMobile({data}) {
  const [first, setFirst] = useState([]);
  const [Value, setValue] = useState(1);
  const handleChange = (event) => {
    setValue(event.target.value);

    console.log("value is:", event.target.value);
  };
  
  const value =3;

  const router = useRouter();
  const [jsondata,setjsondata] = useState(data[0].comments);
  console.log(jsondata);
  const themeMode = useContext(darkLightModeContext);
  return (
    <>

<Box sx={{ padding:"1em", bgcolor:themeMode === true ? 'grey.700' : "#eaeef7",}}>
   

        <Box sx={{ display:'flex' , justifyContent:'space-between'}} >
           <Typography variant="h5"> <CommentIcon sx={{marginBottom:'-5px', color:'#5bd9bd'}}/> Comments </Typography>
          {/* <Stack direction='row'  columnGap={70}> */}
          {/* <Rating
            name="simple-controlled"
            value={value}
            onChange={handleChange}
            size="small"
                       
          /> */}
          </Box>
          <Divider style={{ marginBottom: "20px", marginTop: "10px" }} />
       
      
            <TextareaAutosize
               aria-label="empty textarea"
              placeholder="Write your comment here"
              style={{ width: "100%", fontFamily:'inherit', height:'100%' ,padding:8 , border:'none' , border:'1px solid #eee', boxShadow:'1px 1px 1px grey' , borderRadius:'10px'}}
              minRows={3}
              maxRows={4}
              onResize="vertical"
              
            />
          
            <Stack
              direction="row"
              columnGap={1}
              mt={1}
              justifyContent="end"
            >
              
              <Button variant="outlined">
         
                Cancel
              </Button>
              <Button
                variant="contained"
              >
                 Submit
              </Button>
            </Stack>
            {/* // </form> */}
        
        
         
           {
         jsondata.map((item)=>
         { return(
              <Card  sx={{ marginBottom:'0px', marginTop:'15px', paddingBottom:'.5em', bgcolor: themeMode === true ? "#3A4858" : "#ffffff",
              color:
                themeMode === true ? "common.white" : "text.secondary", }} key={item.user_id}>
                <CardHeader sx={{margin:'0', padding:'1em 1em .5em 1em'}}
                  avatar={<Avatar sx={{ bgcolor:'#5bd9bd', color:'#fff'}} alt={item.user_name}/>}
                 
                  title={
                    <Typography variant="subtitle2" >{item.usersname}</Typography>
                  }
                
                />
                <CardContent sx={{margin:'0', padding:'0 1em'}}>
                <Typography variant="h5">
                
                   {/* <Rating
            name="simple-controlled"
            value={value}
           
            onChange={handleChange}
          />  */}
          
           </Typography>
                 <Typography variant="body2"> {item.user_comments}</Typography>
                 <Button startIcon={<ArrowDropDown />} variant="Link" sx={{float:'right'}} >
                  Reply 
                </Button>
                  </CardContent>
              
              </Card>
            );
          })}

        
           </Box>
   </> 
   
  );
}
export default CommentBoxMobile;