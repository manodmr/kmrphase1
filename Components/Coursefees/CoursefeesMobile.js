import React, { useEffect } from "react";
import Box from "@mui/material/Box";
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
} from "@mui/material";
import feesbg from "/public/feesbg.png";
import Link from "next/link";
import Image from "next/image";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { darkLightModeContext } from "@/Layout/Layout";
import { useRouter } from "next/router";
import { GridContainer } from "@/OverViews/GridContainer";
import { GridItem } from "@/OverViews/GridItem";

export default function CoursefeesMobile({ data }, props) {
  const router = useRouter();
  const [jsondata, setJsondata] = React.useState(data);
  const [course, setcourse] = React.useState(data[0].courseandfees);
  const themeMode = React.useContext(darkLightModeContext);

  useEffect(() => {
    setJsondata(data);
    setcourse(data[0].courseandfees);
  },[router.query.college]);
  
  return (
    <Box
      sx={{
        margin:'1em',
        // borderRadius: "10px",
        // boxShadow:'1px 1px 1px gray',
        // padding: "10px",
       
      }}
    >

      <Link href={`/${router.query.collegelist}/${router.query.college}/courses-fees`}>
      <Typography
        variant="h5"
        sx={{
          marginBottom: "8px",
          paddingBottom: "3px",
          display: "inline-block",
          borderBottom: "#5bd9bd solid 1px",
         
        }}
      >
        Courses, Fees & Eligibility  <ArrowForwardOutlinedIcon
                          style={{
                            marginBottom: "-6px",
                            textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                          }}/>
      </Typography>
      </Link>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ float: "right" }}
      >
        <Image
          width={62}
          height={90}
          style={{ objectFit: "cover" }}
          src={feesbg}
        />
      </Typography>

      <Typography variant="body2" sx={{ color: themeMode === true ? "grey.400" :"grey.600", }} >
        Details about TNEA cutoff for admission to <br />{" "}
        {jsondata.map((item) => {
          return <>{item.institute_name}</>;
        })}
      </Typography>
      <Divider sx={{ clear: "both" }} />

      <Box
        style={{
          borderRadius: "5px",
          padding: "10px",
          boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
        }}
      >
        <GridContainer xs={12} >
        {course.map((itemnews, index) => {
          if (index <= 3) {
            return (
              <>
              <GridItem xs={6} >
              <Card>
                <CardHeader
                  sx={{ alignItems: "self-start" }}
                  title={
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: themeMode === true ? "primary.main" :"primary.dark",
                        justifyContent:'center',
                        alignItems:'center',
                      }}
                    >
                      <Link
                        style={{ width: "75%" }}
                        href={`/${router.query.collegelist}/${router.query.college}/courses-fees`}>
                        {itemnews.course_name}{" "}
                        <ArrowForwardOutlinedIcon
                          style={{
                            marginBottom: "-6px",
                            textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                          }}
                        />
                        <br />
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: "normal",
                            color: themeMode === true ? "grey.400" :"grey.600",
                          }}
                        >
                          {itemnews.course_master_eligibility}
                        </Typography>
                      </Link>{" "}
                       <Link
                        style={{ float: "right", color: themeMode === true ? "primary.main" :"primary.dark", }}
                        href=""
                        >
                        <Typography variant="h6" sx={{ fontWeight: "600",color: themeMode === true ? "primary.main" :"primary.main", }} >
                        Rs. {itemnews.course_master_fees}
                       </Typography>
                      </Link>
                     
                    </Typography>
                  }
                  style={{ fontSize: "12px", padding: "8px 0px 8px 0" }}
                />
              </Card>
              </GridItem>
                <Divider />
              </>
            );
          }
        })}
        </GridContainer>
      </Box>

      <Link
        style={{ display: "block", width: "100%" }}
          href={`/${router.query.collegelist}/${router.query.college}/courses-fees`}
      >
        <Typography
          align="center"
          variant="h6"
          sx={{
            fontWeight: "600",
            color: themeMode === true ? "grey.200" : "text.secondary",
            bgcolor: themeMode === true ? "grey.500" : "#eaeef7",
            padding: "0.5em 0",
            borderRadius: "0px 0px 10px 10px;",
          }}
        >
          View More
          <ArrowForwardIosIcon
            style={{
              marginBottom: "-3px",
              textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
              fontSize:'90%',
              marginLeft:'5px'
            }}
          />
        </Typography>
      </Link>
    </Box>
  );
}
