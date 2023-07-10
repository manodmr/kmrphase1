import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import {
  Grid,
  Typography,
  Link,
  CardHeader,
  Avatar,
  Card,
} from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Image from "next/image";
import { GridContainer } from "@/OverViews/GridContainer";
import { GridItem } from "@/OverViews/GridItem";

import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";
import ScienceIcon from "@mui/icons-material/Science";
import HotTubIcon from "@mui/icons-material/HotTub";
import BusAlertIcon from "@mui/icons-material/BusAlert";
import { darkLightModeContext } from "@/Layout/Layout";
import { Stack } from "@/OverViews/Stack";
import styled from "styled-components";
import { Paper } from "@/OverViews/Paper";

export default function FacilitiesnewMobile({ data }) {
  const router = useRouter();
  const [jsondata, setJsondata] = React.useState(data);
  const [lab, setLab] = useState(data[0].lab);
  const [hostel, sethostel] = useState(data[0].hostel);
  const [auditorium, setauditorium] = useState(data[0].auditorium);
  const [library, setlibrary] = useState(data[0].library);
  const [transport] = useState(data[0].transport);
  const [canteen] = useState(data[0].canteen);
  useEffect(() => {
    setJsondata(data);
  }, [router.query.college]);
  console.log(lab);
  const themeMode = useContext(darkLightModeContext);
  // console.log(transport);

  return (
    <Card
      sx={{
        boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
        background: "url('../facilities.png') no-repeat bottom center",
        backgroundSize: "contain",
        borderRadius: "20px",
        bgcolor: themeMode === true ? "grey.800" : "#ffffff",
        color: themeMode === true ? "common.white" : "grey.700",
        padding: "20px 20px 110px 20px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          marginBottom: "8px",
          paddingBottom: "3px",
          display: "inline-block",
          borderBottom: "#5bd9bd solid 3px",
        }}
      >
        Facilities
      </Typography>

      <Typography
        variant="body2"
        sx={{ color: themeMode === true ? "grey.500" : "text.secondary" }}
      >
        {jsondata.map((item) => {
          return (
            <>
              {item.institute_name} having variety of Facilities for the
              students
            </>
          );
        })}
      </Typography>

      <Stack
        spacing={{ xs: 4, sm: 4 }}
        direction="row"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {library === "Yes" ? (
          <Box sx={{ textAlign: "center", margin: "16px!important" }}>
            <Avatar
              sx={{
                bgcolor: themeMode === true ? "primary.light" : "#ffffff",
                border: "1px solid #0087a5",
                width: "60px",
                height: "60px",
              }}
            >
              <LibraryBooksIcon style={{ color: "#0087a5" }} />
            </Avatar>
            <Typography variant="body2">Library</Typography>
          </Box>
        ) : null}
        {hostel === "Yes" ? (
          <Box sx={{ textAlign: "center", margin: "16px!important" }}>
            <Avatar
              sx={{
                bgcolor: themeMode === true ? "primary.light" : "#ffffff",
                border: "1px solid #0087a5",
                width: "60px",
                height: "60px",
              }}
            >
              <LocalHotelIcon style={{ color: "#0087a5" }} />
            </Avatar>
            <Typography variant="body2">Hostel</Typography>
          </Box>
        ) : null}
        {auditorium === "Yes" ? (
          <Box sx={{ textAlign: "center", margin: "16px!important" }}>
            <Avatar
              sx={{
                bgcolor: themeMode === true ? "primary.light" : "#ffffff",
                border: "1px solid #0087a5",
                width: "60px",
                height: "60px",
              }}
            >
              <InterpreterModeIcon sx={{ color: "#0087a5" }} />
            </Avatar>
            <Typography variant="body2">Auditorium</Typography>
          </Box>
        ) : null}
        {lab === "Yes" ? (
          <Box sx={{ textAlign: "center", margin: "16px!important" }}>
            <Avatar
              sx={{
                bgcolor: themeMode === true ? "primary.light" : "#ffffff",
                border: "1px solid #0087a5",
                width: "60px",
                height: "60px",
              }}
            >
              <ScienceIcon style={{ color: "#0087a5" }} />
            </Avatar>
            <Typography variant="body2">Lab</Typography>
          </Box>
        ) : null}

        {canteen === "Yes" ? (
          <Box sx={{ textAlign: "center", margin: "16px!important" }}>
            <Avatar
              sx={{
                bgcolor: themeMode === true ? "primary.light" : "#ffffff",
                border: "1px solid #0087a5",
                width: "60px",
                height: "60px",
              }}
            >
              <HotTubIcon style={{ color: "#0087a5" }} />
            </Avatar>
            <Typography variant="body2">Canteen</Typography>
          </Box>
        ) : null}
        {transport === "Yes" ? (
          <Box sx={{ textAlign: "center", margin: "16px!important" }}>
            <Avatar
              sx={{
                background: "#fff",
                border: "1px solid #0087a5",
                width: "60px",
                height: "60px",
              }}
            >
              <BusAlertIcon style={{ color: "#0087a5" }} />
            </Avatar>
            <Typography variant="body2">Transport</Typography>
          </Box>
        ) : null}
      </Stack>
    </Card>
  );
}
