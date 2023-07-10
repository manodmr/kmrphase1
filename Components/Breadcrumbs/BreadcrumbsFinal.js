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
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { darkLightModeContext } from "@/Layout/Layout";
import { useContext, useState } from "react";
import { useRouter } from "next/router";

export default function BreadcrumbsFinal() {
  const themeMode = useContext(darkLightModeContext);

  const router = useRouter();
  console.log(router.query.course);

  const [idRouter, setIdRouter] = useState();

  const routerClick = (event) => {
    setIdRouter(menubedegree[0].id);
  };

  const breadPreName = useRouter().query.collegelist;

  return (
    <>
      <Box elevation={0} sx={{ borderRadius: "0" }}>
        <Grid
          justifyContent={"left"}
          alignItems="center"
          height="100%"
          width="100vw"
          className={themeMode === true ? "gradDark" : "grad"}
          sx={{
            paddingTop: "10px",
            color: "#fff",
            display: { xs: "none", md: "block", lg: "block" },
          }}
        >
          <Grid container>
            <Grid item sx={{ zIndex: "1" }}>
              <Box
                // className="breadcrumb flat"
                className={
                  themeMode === true
                    ? "breadcrumbDark flatDark"
                    : "breadcrumb flat"
                }
                sx={{ display: "flex !important", mb: 1 }}
              >
                <Link href="/" className="active">
                  {" "}

                  <HomeIcon
                    sx={{ marginBottom: "-5px" ,  color: themeMode === true? "grey.200" : 'primary.main'}}
                    // className={themeMode === true ? "icons1Dark" : "icons1"}
                  />{" "}
                </Link>
                <Link href={`/${breadPreName}`}  className="active icons1" style={{ textTransform:'capitalize' , alignItems:'center' }}>
                 <Typography variant="subtitle" sx={{ alignItems:'center' , height:'10px' , color:themeMode === true? "grey.200" : 'primary.main' }} >{breadPreName.replace(/-colleges/g,"")}</Typography> 
                </Link>
                <Typography
                  variant="subtitle2"
                  style={{
                    lineHeight: "36px",
                    paddingLeft: "30px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                  }}
                >
                  {" "}
                  {router.query.course
                    ? router.query.course.replace(/-/g, " ")
                    : `${breadPreName.replace(/-colleges/g,"")} COLLEGES`}{" "}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              md={8}
              sx={{ textAlign: "center", fontSize: "22px", fontWeight: "bold" , textTransform:'capitalize' }}
            >
              {" "}
              Top {breadPreName.replace(/-colleges/g,"")} Colleges in India
            </Grid>
          </Grid>
        </Grid>

        {/* For Mobile Breadcrumb */}

        <Grid
          justifyContent={"left"}
          alignItems="center"
          height="100%"
          width="100vw"
          sx={{
            paddingLeft: "0px",
            paddingTop: "10px",
            color: "#fff",
            zIndex: "0",
            display: { xs: "block", md: "none", lg: "none" },
          }}
        >
          <Grid container sx={{ marginBottom: "10px" }}>
            <Box
              sx={{ marginBottom: "8px" }}
              className={
                themeMode === true
                  ? "breadcrumbDark flatDark"
                  : "breadcrumb flat"
              }
            >
              <Link href="/" className="active">
                {" "}
                <HomeIcon
                  sx={{ marginBottom: "-5px" }}
                  className={themeMode === true ? "icons1Dark" : "icons1"}
                />{" "}
              </Link>
              <Link href={`/${breadPreName}`} className="active icons1">
                {breadPreName}
              </Link>
              <span
                style={{
                  lineHeight: "36px",
                  paddingLeft: "30px",
                  color: "#919eab",
                }}
              >
                {router.query.course}{" "}
              </span>
            </Box>

            <Paper
              sx={{
                position: "relative",
                width: "100%",
                display: { xs: "block", md: "none", lg: "none" },
              }}
            >
              <Grid
                className={themeMode === true ? "gradDark" : "grad"}
                sx={{
                  position: "absolute",
                  height: "100px",
                  width: "100%",
                  borderRadius: "0",
                }}
              ></Grid>
            </Paper>

            <Grid
              item
              sx={{
                textAlign: "center",
                display: "block",
                width: "100%",
                padding: "10px 0 0 0",
                fontSize: "18px",
                fontWeight: "bold",
                position: "relative",
                zIndex: "1",
              }}
            >
              {" "}
              Top {breadPreName} Colleges in India
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
