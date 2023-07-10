import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import {
  Grid,
  Typography,
  Divider,
  Rating,
  CardHeader,
  CardContent,
  Avatar,
  Button,
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
import SchoolIcon from "@mui/icons-material/School";
import DownloadIcon from "@mui/icons-material/Download";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DoneIcon from "@mui/icons-material/Done";
import { GridItem } from "@/OverViews/GridItem";
import { Details, ViewList } from "@mui/icons-material";

export default function Coursefeesnew({ data }, props) {
  const router = useRouter();
  const [jsondata, setJsondata] = React.useState(data);
  const [course, setcourse] = React.useState(data[0].courseandfees);
  const themeMode = React.useContext(darkLightModeContext);

  useEffect(() => {
    setJsondata(data);
    setcourse(data[0].courseandfees);
  }, [router.query.college]);

  return (
    <>
      <Box sx={{ display: "block", width: "100%", margin: "0em 1em 0 1em " }}>
        <Typography
          variant="h5"
          sx={{
            marginBottom: "8px",
            paddingBottom: "3px",
            display: "block",
            color: themeMode === true ? "common.white" : "grey.700",
          }}
        >
          Courses, Fees & Eligibility
          <ArrowForwardOutlinedIcon
            style={{
              marginBottom: "-6px",
              textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
            }}
          />
          <Divider
            sx={{
              width: "80px",
              border: "1px solid #73A9AD",
              borderRadius: "0px",
            }}
          />
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: themeMode === true ? "grey.400" : "grey.600" }}
        >
          Details about TNEA cutoff for admission to{" "}
          {jsondata.map((item) => {
            return <>{item.institute_name}</>;
          })}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          margin: "-5em 1em -5em 1em",
        }}
      >
        <Typography
          align="center"
          variant="h6"
          sx={{
            fontWeight: "600",
            color: themeMode === true ? "grey.200" : "text.secondary",
            marginTop: "3em",
            marginRight: "2em",
          }}
        >
          View More (13) courses
          <ArrowForwardIosIcon
            style={{
              marginBottom: "-3px",
              textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
              fontSize: "90%",
              marginLeft: "5px",
            }}
          />
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <Image
            width={62}
            height={90}
            style={{ objectFit: "cover" }}
            src={feesbg}
          />
        </Typography>
      </Box>
      {/* <Divider sx={{ clear: "both", width:'100%' }} /> */}

      {course.map((itemnews, index) => {
        if (index <= 2) {
          return (
            <>
              <GridItem xs={4}>
                <Box
                  sx={{
                    borderRadius: "5px",
                    padding: "10px",
                    marginBottom: "10px",
                    bgcolor: themeMode === true ? "grey.900" : "#ffffff",
                    color: themeMode === true ? "common.white" : "grey.700",
                    boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
                  }}
                >
                  <Typography
                    component="div"
                    variant="h6"
                    sx={{ color: "#4a6280" }}
                  >
                    {itemnews.course_name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: "normal",
                      marginTop: "8px",
                      color: "#0199a4",
                      display: "inline-flex",
                      marginRight: "10px",
                    }}
                  >
                    <MenuBookIcon
                      style={{
                        marginBottom: "-6px",
                        color: "#52627b",
                        marginRight: "5px",
                      }}
                    />
                    {itemnews.degree_name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: "normal",
                      marginTop: "8px",
                      color: "#52627b",
                      display: "inline-flex",
                      marginRight: "10px",
                    }}
                  >
                    <SchoolIcon
                      style={{
                        marginBottom: "-6px",

                        marginRight: "5px",
                      }}
                    />
                    {itemnews.degrees_level}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: "normal",
                      marginTop: "8px",
                      color: "#52627b",
                      display: "inline-flex",
                      marginRight: "10px",
                    }}
                  >
                    <AccessTimeIcon
                      style={{
                        marginBottom: "-6px",

                        marginRight: "5px",
                      }}
                    />
                    {itemnews.courses_duration} Years
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "normal",
                      fontWeight: "bold",
                      marginTop: "4px",
                      color: "#f8b81f",
                      display: "inline-flex",
                      marginRight: "15px",
                    }}
                  >
                    <Rating
                      size="small"
                      sx={{ marginTop: "4px", marginRight: "5px" }}
                      name="half-rating"
                      defaultValue={4.8}
                      precision={0.5}
                    />{" "}
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "#0199a4",
                        marginLeft: "0px",
                        marginTop: "2px",
                        fontWeight: "normal",
                      }}
                    >
                      4.8 Reviwes
                    </Typography>
                  </Typography>{" "}
                  <Divider />
                  <Typography
                    component="div"
                    sx={{
                      color: "#4a6280",
                      fontWeight: "normal",
                      margin: "0.5em 0",
                    }}
                  >
                    Eligibility : {itemnews.course_master_eligibility}
                  </Typography>
                  <Box
                    sx={{
                      justifyContent: "space-between",
                      width: "100%",
                      display: "flex",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        lineHeight: "2",
                        color: "#4b6184",
                        fontWeight: "600",
                        display: "inline-flex",
                      }}
                    >
                      Rs.
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: "600",
                          color: "#4b6184",
                        }}
                      >
                        {itemnews.course_master_fees}
                      </Typography>
                    </Typography>

                    <Button
                      onClick={() => {
                        router.push(
                          `/${router.query.collegelist}/${router.query.college}/courses-fees`,
                          undefined,
                          { scroll: false }
                        );
                      }}
                      variant="contained"
                      size="small"
                      sx={{ justifyContent: "space-between" }}
                    >
                      <ViewList fontSize="small" />
                      More Details
                    </Button>
                  </Box>
                  <Typography
                    component="div"
                    variant="subtitle2"
                    sx={{
                      color: "#b1bcc6",
                      fontWeight: "normal",
                      marginTop: "-10px",
                    }}
                  >
                    Master Fees
                  </Typography>
                </Box>
              </GridItem>
            </>
          );
        }
      })}
    </>
  );
}
