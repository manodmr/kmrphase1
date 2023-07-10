import React from "react";
import Box from "@mui/material/Box";
import { Grid, Typography, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";
import { useState } from "react";
import Card2 from "@/Components/Card/Card2";
import Link from "next/link";

export default function PopularMobile({ data, step1 }) {
  const router = useRouter();
  const [jsondata1, setJsondata1] = React.useState(data);
  const [jsondata, setjsondata] = useState(data[0].relatedcolleges);
  React.useEffect(() => {
    // jsondata.splice(0,jsondata.length);
    if (router.query.college) {
      setjsondata(data[0].relatedcolleges);
    }
  }, [router.query.college]);
  console.log(step1);

  return (
    <Box sx={{ flexGrow: 1, margin: "1em" }}>
      <Typography variant="h5" sx={{ paddingBottom: "5px" }}>
        Related Colleges to{" "}
        {jsondata1.map((item) => {
          return <>{item.institute_name}</>;
        })}
      </Typography>
      <Divider sx={{ marginBottom: "20px" }} />
      {/* <Typography variant="body2" color="text.secondary"> */}
        <Box sx={{ display: "flex", overflowX: "scroll", width: "100%" }}>
          {jsondata.map((item) => {
            console.log(item.id, item.institute_name);
            return (
              <>
                <Grid item xs={6} md={4} lg={4} key={item.id}>
                  {/* <a href={`/${step1}/${item.id}-${item.institute_name.replace(/[ ]+/g, "-")}`} > */}
                  <Card2
                    CollegeLogo={`${item.logo}`}
                    CollegeImage={`${item.featured_image}`}
                    CollegeName={item.institute_name}
                    CollegeDistrict={item.district_name}
                    CollegeState={item.state_name}
                    //  Rating={item.duration}
                    href={`/${step1}/${item.id}-${item.institute_name.replace(
                      /[ ]+/g,
                      "-"
                    )}-${item.district_name}`}
                    sx={{ width: 280 }}
                  />
                  {/* </a> */}
                </Grid>
              </>
            );
          })}
        </Box>
      {/* </Typography> */}
    </Box>
  );
}
