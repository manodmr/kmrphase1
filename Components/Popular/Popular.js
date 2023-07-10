import React from "react";
import Box from "@mui/material/Box";
import { Grid, Typography, Divider, } from "@mui/material";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";
import {useState} from "react";
import Card2 from "@/Components/Card/Card2";
import Link from "next/link";
import CardComponentThree from "../Card/Card3";
import Hcards from "../Card/CardH";
import CardComponentFour from "../Card/Card4";


export default function Popular({data, step1})  {
  const router = useRouter();
  const [jsondata1,setJsondata1] = React.useState(data);
  const [jsondata2,setJsondata2] = React.useState(data[0]);
  const [jsondata,setjsondata] = useState(data[0].relatedcolleges);
  React.useEffect(() =>{
    // jsondata.splice(0,jsondata.length);
    if(router.query.college){
      setjsondata(data[0].relatedcolleges)
    }
    setJsondata2(data[0]);
  },[router.query.college]);
  console.log(step1)
  

  return (
    <Box sx={{ flexGrow: 1, marginTop: "10px", }}>
      <Typography variant="h5" sx={{ paddingBottom: "5px" }}>
     Related Colleges to   {
         jsondata1.map((item)=>
         { return(
          <>
           {item.institute_name}
           </>  )
        })
        }
      </Typography>

      <Divider sx={{ marginBottom: "20px" }} />
      <Typography variant="body2" color="text.secondary">
        <Grid display={'flex'} container spacing={1} >
         {
         jsondata.map((item)=>
         {
          console.log(item.id, item.institute_name)
          return(
           <>
          <Grid item xs={6} md={3} lg={3} key={item.id}> 
          {/* <a href={`/${step1}/${item.id}-${item.institute_name.replace(/[ ]+/g, "-")}`} > */}
          <Card2
           CollegeLogo={`${item.logo}`}
           CollegeImage={`${item.featured_image}`}
           CollegeName= {item.institute_name}
           CollegeDistrict={item.district_name}
           CollegeState={item.state_name}
           Rating={jsondata2.rating}
          //  Rating={item.duration}
           href={`/${step1}/${item.id}-${item.institute_name.replace(/[ ]+/g, "-")}`}
          //  sx={{ width: 280 }}
          />
          {/* </a> */}
          </Grid>
          </>
                    )
})
}
   
        </Grid>
      </Typography>
    </Box>
  );

}
