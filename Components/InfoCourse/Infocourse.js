import React, { useContext, useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Divider,
  CardHeader,
  CardContent,
  Avatar,
  Stack,
  Card,
  CardMedia,
  Button,
  Box,
} from "@mui/material";
import { darkLightModeContext } from "@/Layout/Layout";
import { GridContainer } from "@/OverViews/GridContainer";
import { GridItem } from "@/OverViews/GridItem";
import CardComponentThree from "../Card/Card3";
import { useRouter } from "next/router";

export default function Infocourse({ data }) {
  const router = useRouter();
  const [jsondata, setJsondata] = useState([data]);
  const [courseFee, setCourseFee] = useState(jsondata.courseandfees);
  const [datas, setDatas] = useState("");

  useEffect(() => {
    setJsondata(data);
  }, [router.query.college]);

  const themeMode = useContext(darkLightModeContext);
  console.log(data[0].courseandfees + "course");

  return (
    <>
      <Card
        sx={{
          boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
          // background: "url('/hands.png') no-repeat bottom center",
          backgroundSize: "contain",
          borderRadius: "30px",
          // bgColor: "#fff",
          padding: "20px 20px 35px 20px",
          bgcolor: themeMode === true ? "grey.800" : "#ffffff",
          color: themeMode === true ? "common.white" : "grey.700",
          mt: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            marginBottom: "8px",
            paddingBottom: "3px",
            display: "inline-block",
            width: "100%",
          }}
        >
          Courses & Fees, Eligibility{" "}
          <Divider
            sx={{
              width: "80px",
              border: "2px solid green",
              borderRadius: "2px",
            }}
          />
        </Typography>

        <GridContainer display="flex" columnSpacing={1} >
          {data[0].courseandfees.slice(0, 3).map((e) => {
            return (
              <>
                <GridItem md={3.5}>
                  <CardComponentThree
                    CollegeName={e.course_name}
                    CollegeDegree={e.degree_name}
                    CollegeDegreelevel={e.degrees_level}
                    CollegeDuration={e.courses_duration}
                  />
                </GridItem>
              </> 
            );
          })}

          <GridItem display={'flex'} lg={1.5} justifyContent={'center'} alignItems={'center'} width={'100%'} >
          <Box sx={{ my:2 }}>
          <Button variant="outlined" sx={{ px:2 }} onClick={()=>{
                  router.push(`/${router.query.collegelist}/${router.query.college}/courses-fees`, undefined , {scroll:false});
               }}>
            {`View More >>`}
          </Button>
          </Box>
          </GridItem>
          
        </GridContainer>
      </Card>
    </>
  );
}
