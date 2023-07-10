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
import {useEffect, useState} from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { ArrowDropDown } from "@mui/icons-material";
import CommentIcon from '@mui/icons-material/Comment';

function CommentBox({data}) {
  const [first, setFirst] = useState([]);
  const [Value, setValue] = useState(1);
  const handleChange = (event) => {
    setValue(event.target.value);

    console.log("value is:", event.target.value);
  };
  
  const value =3;

  const router = useRouter();
  const [jsondata,setjsondata] = useState(data[0].comments);
  useEffect(()=>{
    setjsondata(data[0].comments);
  },[router.query.college]);
  
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
           <Typography variant="h5"> <CommentIcon sx={{marginBottom:'-5px', color:'#5bd9bd'}}/> Comments </Typography>
          {/* <Stack direction='row'  columnGap={70}> */}
          <Rating
            name="simple-controlled"
            value={value}
            onChange={handleChange}
                       
          />
          </Box>
          <Divider style={{ marginBottom: "20px", marginTop: "10px" }} />
          <Grid container display='grid'>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Write your comment here"
              style={{ width: "100%",fontFamily:'inherit', height:'100%' ,padding:8 , border:'none' , border:'1px solid #eee', boxShadow:'1px 1px 1px grey' , borderRadius:'10px'}}
              minRows={3}
              maxRows={4}
              onResize="vertical"
              
            />
          
            <Stack
              display="end"
              direction="row"
              columnGap={1}
              mt={2}
              justifyContent="end"
            >
              
              <Button variant="outlined" style={{ color: "black" }}>
         
                Cancel
              </Button>
              <Button
                variant="outlined"
                style={{ color: "#fff", backgroundColor: "#55ceb4" }}
              >
      
                Submit
              </Button>
            </Stack>
            {/* // </form> */}
          </Grid>
        
      
       <Divider sx={{margin:'20px 0'}}/>
       
           {
         jsondata.map((item)=>
         { return(
              <Card  sx={{ mb:2  }} key={item.user_id}>
                <CardHeader
                  avatar={<Avatar sx={{ bgcolor:'#5bd9bd', color:'#fff'}} alt={item.user_name}/>}
                 
                  title={
                    <Typography variant="subtitle2" >{item.usersname}</Typography>
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
                 <Typography variant="body2" mx={8}> {item.user_comments}</Typography>
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
  );
}
export default CommentBox;

const values = [
  {
    name: "Abhishek Kumar",
    body: "I am interested to taking a addmission in your college in b(tech) CSE department",
    id: "1",
    parentId: "1",
    userId: "2",
    createdAt: "Jan 26, 2023 11:42",
  },
  {
    name: "Preeti Vedi",
    body: "I want to know the fee for sc student for the bsc+ msc(physics) course at nit Rourkela",
    id: "2",
    parentId: null,
    createdAt: "Jan 26, 2023 11:42",
    userId: "2",
  },
  {
    name: "Urmimala Swain",
    body: "Entrance syllabus for NIT Rourkela for master in developmental studies",
    id: "3",
    parentId: "1",
    createdAt: "Jan 25, 2023 10:09",
    userId: "2",
  },
  {
    name: "Harshit Kumar",
    body: "Sir my Jee Mains present is 63.3129577 . So can i take admission in NTA.",
    id: "4",
    parentId: null,
    createdAt: "Jan 21, 2023 11:24",
    userId: "2",
  },
  {
    name: "Kumar",
    body: "Sir my Jee Mains present is 63.3129577 . So can i take admission in NTA.",
    id: "5",
    parentId: null,
    createdAt: "Jan 21, 2023 11:24",
    userId: "2",
  },
];
