import React from "react";
import Link from "next/link";
import {
  Grid,
  Stack,
  Typography,
  Paper,
  Box,
  Breadcrumbs,
  InputLabel,
  Skeleton,
  Divider,
  Avatar,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { darkLightModeContext } from "@/Layout/Layout";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { GridContainer } from "@/OverViews/GridContainer";
import { ArrowBack, ArrowForward, ArrowForwardIos, ArrowLeft, ArrowRight, ArrowRightAlt } from "@mui/icons-material";
import { GiPipes } from "react-icons/gi";

export default function BreadcrumbsFinalSmall() {
  const themeMode = useContext(darkLightModeContext);

  const router = useRouter();
  console.log(router.query.course);

  const [idRouter, setIdRouter] = useState();

  const routerClick = (event) => {
    setIdRouter(menubedegree[0].id);
  };

  const breadPreName = useRouter().query.collegelist.replace(/_/g, " ").replace("and", "&");

  return (
    <>
      <Box
        sx={{
          display: {
            xs: "none",
            md: "flex",
            lg: "flex",
            justifyContent: "space-between",
            width: "100%",
            fontFamily:'Alata',
            mt:-1
          },
        }}
      >
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<> <ArrowForwardIos   sx={{  fontSize:'10px' , fontWeight:600 , alignItems:'center'}} /> </>}
          sx={{ marginLeft: "24px", marginTop: "10px" , fontFamily:'Alata', alignItems:'center'}}
        >
          <Link underline="hover" href="/">
            <HomeIcon
              sx={{
                marginBottom: "-3px",
                fontSize: "16px",
                color: themeMode === true ? "primary.main" : "primary.main",
              }}
            />
          </Link>
          <Link
            underline="hover"
            href={`/${breadPreName}`}
            style={{
              textTransform: "capitalize",
              fontSize: "12px",
              alignItems: "center",
              color: themeMode === true ? "primary.main" : "primary.main",
            }}
          >
            <Typography
              sx={{
                alignItems: "center",
                height: "10px",
                fontSize: "12px",
                color: themeMode === true ? "primary.main" : "primary.main",
              }}
            >
              {breadPreName.replace(/-colleges/g, "")}
            </Typography>
          </Link>
         
         <Link href={'#'} sx={{ ':hover':{color:'black'} }}  >
          <Typography
            style={{
              textTransform: "capitalize",
              fontSize: "12px",
              ':hover' :{ color:'common.black' },
            }}
          >
            {router.query.course
              ? router.query.course.replace(/-/g, " ")
              : `${breadPreName.replace(/-colleges/g, "")} Colleges`}{" "}
          </Typography>
         </Link>

        </Breadcrumbs>

        {/* <Box
          className={themeMode === true ? "rounded-tabsDark" : "rounded-tabs"}
        >
          {" "}
          <span>
            {" "}
            {breadPreName.replace(/-colleges/g, "")} Colleges in Tamil Nadu{" "}
          </span>
        </Box> */}

        <Typography sx={{ minWidth: "200px" }}> </Typography>
      </Box>
      {/* For Mobile Breadcrumb */}
      <Stack
        sx={{ display: { xs: "block", md: "none", lg: "none" }, width: "100%" }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={<> {``} </>} 
            sx={{ marginLeft: "15px", marginTop: "8px" }}
          >
            <Link href="/">
              <IconButton
                sizes="small"
                sx={{ width: "25px", height: "25px", zIndex: "9" , bgcolor:'grey.300'}}
              >
                <ArrowBack sx={{ fontSize: "18px" , fontWeight:'bold' }} />
              </IconButton>
            </Link>
            <Box
              sx={{ fontSize: "13px!important" }}
            >
              <span>
                {" "}
                {breadPreName.replace(/-colleges/g, "")} Colleges
              </span>
            </Box>
            {/* <Link href={`/${breadPreName}`} underline="hover" style={{ textTransform:'capitalize' , fontSize:'12px', alignItems:'center', color: "primary.main" }}>
              {breadPreName}
            </Link> */}
            {/* <Typography
                style={{
                  textTransform: "capitalize",
                  fontSize:'12px', 
                }}
              >
                {router.query.course
                  ? router.query.course.replace(/-/g, " ")
                  : `${breadPreName.replace(/-colleges/g,"")} Colleges`}{" "}
              </Typography> */}
          </Breadcrumbs>
          <Box>
            
          </Box>

          <Box>

          </Box>
        </Box>
      </Stack>
    </>
  );
}
