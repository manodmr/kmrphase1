import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import {
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  Link,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function Course({ data }) {
  const router = useRouter();
  const [jsondata, setjsondata] = useState(data[0].course);
  useEffect(() => {
    setjsondata(data[0].course);
  },[router.query.college]);
  console.log(jsondata);

  return (
    <Grid
      container
      sx={{
        display: "block",
        gridTemplateColumns: " auto auto auto",
        gap: ".5rem",
      }}
    >
      {jsondata.map((item) => {
        return (
          <>
            <Grid
              item
              sx={{
                width: "100%",
                padding: ".5rem",
                marginBottom: "5px",
                border: "#ccc solid 1px",
                borderRadius: "8px",
                background: "linear-gradient(0deg,#f0faf6 0%,#fff 100%)",
              }}
            >
              <CardHeader
                sx={{ padding: "0px" }}
                avatar={
                  <Avatar
                    sx={{
                      width: "40px",
                      height: "40px",
                      background: "rgba(2, 165, 105, .06)",
                    }}
                  >
                    <CheckCircleOutlineIcon sx={{ opacity: "0.5" }} />
                  </Avatar>
                }
                title={item.course_name}
                titleTypographyProps={{
                  fontSize: "16px",
                  color: "#666",
                  fontWeight: "normal",
                }}
              />
            </Grid>
          </>
        );
      })}
    </Grid>
  );
}
