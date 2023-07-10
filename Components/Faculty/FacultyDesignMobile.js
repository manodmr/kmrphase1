import {
  Box,
  Card,
  Divider,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import facultyDummy from "/public/vertical-dummy.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

import Link from "next/link";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


function FacultyDesignMobile({ data }) {
  const router = useRouter();
  const [jsondata, setjsondata] = useState(data[0].faculty);
  useEffect(() => {
    setjsondata(data[0].faculty);
  },[router.query.college])
  console.log(jsondata);
  return (
    <>
 
        <Box
          sx={{
                background: "url('/facultybg.png') no-repeat bottom center",
                backgroundSize: "contain",
                borderRadius: "30px",
                // bgColor: "#fff",
                padding: "0px 0px 155px 0px",
                margin:'1em',
          }}
        >
              <Link href={`/${router.query.collegelist}/${router.query.college}/faculty`}>
      <Typography
        variant="h5"
        sx={{
          marginBottom: "8px",
          paddingBottom: "3px",
          display: "inline-block",
          borderBottom: "#5bd9bd solid 1px",
         
        }}
      >
        Faculty <ArrowForwardOutlinedIcon
                          style={{
                            marginBottom: "-6px",
                            textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                          }}/>
      </Typography>
      </Link>

          {jsondata.slice(0, 5).map((item) => {
            return (
              <>
                <CardContent sx={{paddingLeft:'0'}}
                 
                >
                  <Box sx={{ display: "grid", mb: -1.4 , mt: -1.4 }}>
                    <Typography fontWeight="bold" sx={{ fontSize: "1.8" }}>
                      {item.faculty_name},  <small variant="caption" style={{color:'#777', fontWeight:'normal'}}> {item.faculty_qualification}</small>
                    </Typography>
                   
                    <Typography fontWeight="normal" sx={{ color: "#55ceb4" }}>
                      {item.faculty_designation}
                    </Typography>
                  </Box>
                </CardContent>
                <Divider sx={{ margin: "2px 0px" }} />
              </>
            );
          })}

 {/* <Box sx={{textAlign:'center', margin:'0', padding:'5px', }}>
 <Link style={{display:'block', width:'100%',}} href={"/BE-college/39-Jeppiaar-Engineering-College-Chennai/faculty"}>
<Button variant="contained" sx={{width:'100%', borderRadius:'0px 0px 8px 8px '}} size="medium">
          View More
        </Button>
        </Link>
        </Box>  */}
          {/* <Box align="center" sx={{marginTop:'15px'}}>
     
     <Button variant="contained"><KeyboardArrowDownIcon/> View Mores</Button> </Box> */}
        </Box>
    
    </>
  );
}

export default FacultyDesignMobile;