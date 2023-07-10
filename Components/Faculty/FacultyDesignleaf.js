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
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import facultyDummy from "/public/vertical-dummy.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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


function FacultyDesignleaf({ data }) {
  const router = useRouter();
  const [jsondata, setjsondata] = useState(data[0].faculty);
  console.log(jsondata);
  return (
    <>
 
        <Box
          sx={{
            width: "100%",
            margin: "0px auto",
            boxShadow: "none",
          }}
        >
          {jsondata.slice(0, 5).map((item) => {
            return (
              <>
                <CardContent
                 
                >
                  <Box sx={{ display: "grid", mb: -1.4 , mt: -1.4 }}>
                    <Typography fontWeight="bold" sx={{ fontSize: "1.8" }}>
                      {item.faculty_name},  <small variant="caption" style={{color:'#666', fontWeight:'normal'}}> {item.faculty_qualification}</small>
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


        </Box>
    
    </>
  );
}

export default FacultyDesignleaf;