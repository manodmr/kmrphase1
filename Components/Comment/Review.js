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
import {useState} from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { ArrowDropDown } from "@mui/icons-material";
import CommentIcon from '@mui/icons-material/Comment';
import AddCommentIcon from '@mui/icons-material/AddComment';

function Review({data}) {
  const router = useRouter();
  const [jsondata,setjsondata] = useState(data[0].reviews);
  console.log(jsondata);
  return (
    <div>
       <Grid container>
        <Grid
          lg={12}
          xs={12}
          sx={{
            margin: "10px 18px 10px 0",
            padding: "20px",
            boxShadow: "0 0 3px #ccc",
            borderRadius: "5px",
            WebkitBoxShadow: "0 0 3px #ccc",
            backgroundColor: "common.common.white",
          }}
        > 
        <Box sx={{ display:'flex' , justifyContent:'space-between'}} >
           <Typography variant="h5"> <AddCommentIcon sx={{marginBottom:'-5px', color:'#5bd9bd'}}/> Reviews </Typography>
           </Box>
           <Divider style={{ marginBottom: "20px", marginTop: "10px" }} />
        {
         jsondata.map((item)=>
         { return(
              <Card  sx={{ mb:2  }} key={item.review_id}>
                <CardHeader
                  avatar={<Avatar sx={{ bgcolor:'#5bd9bd', color:'#fff'}} alt={item.user_name}/>}
                  action={
                    <Typography variant="h6" sx={{textAlign:'center'}}>
                    {item.category_name} <br/>  <b style={{ fontWeight:'normal'}}><span style={{ fontWeight:'bold', fontSize:'28px'}}>{item.reviews_rating}</span> /10  </b>
                   {/* <Rating
            name="simple-controlled"
            value={value}
           
            onChange={handleChange}
          />  */}
          </Typography>
                  }
                  title={
                    <Typography variant="subtitle2" >{item.user_name}</Typography>
                  }
                  subheader={
                    <Typography variant="caption" >{item.reviews_created_date}
                    </Typography>
                  }
                />
                <CardContent >
                <Typography variant="h5">
                
                   {/* <Rating
            name="simple-controlled"
            value={value}
           
            onChange={handleChange}
          />  */}
          
           </Typography>
                 <Typography variant="body2" mx={8}> {item.review_description}</Typography>
                 <Button variant="Link" sx={{marginLeft:'45px'}} >
                  Reply <ArrowDropDown />
                </Button>
                  </CardContent>
              
              </Card>
            );
          })}
         
          </Grid>
          </Grid>
    </div>
  )
}

export default Review
