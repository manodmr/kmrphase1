import React from "react";
import Box from "@mui/material/Box";
import { Grid, Typography, Link, CardHeader, Avatar } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function Facilities({ data }) {
  const router = useRouter();
  const [jsondata, setJsondata] = React.useState(data);
  const [lab, setLab] = useState(data[0].lab);
  const [hostel, sethostel] = useState(data[0].hostel);
  const [auditorium, setauditorium] = useState(data[0].auditorium);
  const [library, setlibrary] = useState(data[0].library);
  const [canteen, setcanteen] = useState(data[0].canteen);
  const [transport, settransport] = useState(data[0].transport);
  const [extra_curricular, setextra_curricular] = useState(
    data[0].extra_curricular
  );
  const [general_facility, setgeneral_facility] = useState(
    data[0].general_facility
  );

  // const [transport] = useState(data[0].transport)
  console.log(lab);
  // console.log(transport);
  return (
    <Grid container width={{ xs:'100%' }}>
      {hostel === "Yes" ? (
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            margin: ".5rem",
            padding: ".5rem .8rem",
            boxShadow: "rgb(204, 204, 204) 0px 0px 1px",
            borderRadius: "8px",
            // background:'linear-gradient(0deg,#f0faf6 0%,#fff 100%)',
          }}
        >
          <CardHeader
            sx={{ padding: "0px" }}
            // color="text.secondary"
            avatar={
              <Avatar
                src="https://cache.careers360.mobi/images/frontend/desktop/facilities/boys-hostel.svg"
                sx={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(2, 165, 105, .06)",
                }}
              ></Avatar>
            }
            title="Hostel"
            titleTypographyProps={{ fontSize: "16px", fontWeight: "normal" }}
          />
        </Grid>
      ) : null}

      {library === "Yes" ? (
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            margin: ".5rem",
            padding: ".5rem .8rem",
            boxShadow: "rgb(204, 204, 204) 0px 0px 1px",
            borderRadius: "8px",
            // background:'linear-gradient(0deg,#f0faf6 0%,#fff 100%)',
          }}
        >
          <CardHeader
            sx={{ padding: "0px" }}
            color="text.secondary"
            avatar={
              <Avatar
                src="https://cache.careers360.mobi/images/frontend/desktop/facilities/library.svg"
                sx={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(2, 165, 105, .06)",
                }}
              ></Avatar>
            }
            title="Library"
            titleTypographyProps={{ fontSize: "16px", fontWeight: "normal" }}
          />
        </Grid>
      ) : null}

      {canteen === "Yes" ? (
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            margin: ".5rem",
            padding: ".5rem .8rem",
            boxShadow: "rgb(204, 204, 204) 0px 0px 1px",
            borderRadius: "8px",
            // background:'linear-gradient(0deg,#f0faf6 0%,#fff 100%)',
          }}
        >
          <CardHeader
            sx={{ padding: "0px" }}
            color="text.secondary"
            avatar={
              <Avatar
                src="https://cache.careers360.mobi/images/frontend/desktop/facilities/cafeteria.svg"
                sx={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(2, 165, 105, .06)",
                }}
              ></Avatar>
            }
            title="Canteen"
            titleTypographyProps={{ fontSize: "16px", fontWeight: "normal" }}
          />
        </Grid>
      ) : null}
      {auditorium === "Yes" ? (
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            margin: ".5rem",
            padding: ".5rem .8rem",
            boxShadow: "rgb(204, 204, 204) 0px 0px 1px",
            borderRadius: "8px",
            //  background:'linear-gradient(0deg,#f0faf6 0%,#fff 100%)',
          }}
        >
          <CardHeader
            sx={{ padding: "0px" }}
            color="text.secondary"
            avatar={
              <Avatar
                src="https://cache.careers360.mobi/images/frontend/desktop/facilities/auditorium.svg"
                sx={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(2, 165, 105, .06)",
                }}
              ></Avatar>
            }
            title="Auditorium"
            titleTypographyProps={{ fontSize: "16px", fontWeight: "normal" }}
          />
        </Grid>
      ) : null}

      {lab === "Yes" ? (
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            margin: ".5rem",
            padding: ".5rem .8rem",
            boxShadow: "rgb(204, 204, 204) 0px 0px 1px",
            borderRadius: "8px",
            // background:'linear-gradient(0deg,#f0faf6 0%,#fff 100%)',
          }}
        >
          <CardHeader
            sx={{ padding: "0px" }}
            color="text.secondary"
            avatar={
              <Avatar
                src="https://cache.careers360.mobi/images/frontend/desktop/facilities/laboratories.svg"
                sx={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(2, 165, 105, .06)",
                }}
              ></Avatar>
            }
            title="Laboratories"
            titleTypographyProps={{ fontSize: "16px", fontWeight: "normal" }}
          />
        </Grid>
      ) : null}

      {extra_curricular === "Yes" ? (
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            margin: ".5rem",
            padding: ".5rem .8rem",
            boxShadow: "rgb(204, 204, 204) 0px 0px 1px",
            borderRadius: "8px",
            // background:'linear-gradient(0deg,#f0faf6 0%,#fff 100%)',
          }}
        >
          <CardHeader
            sx={{ padding: "0px" }}
            color="text.secondary"
            avatar={
              <Avatar
                src="https://cache.careers360.mobi/images/frontend/desktop/facilities/sports.svg"
                sx={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(2, 165, 105, .06)",
                }}
              ></Avatar>
            }
            title="Sports"
            titleTypographyProps={{ fontSize: "16px", fontWeight: "normal" }}
          />
        </Grid>
      ) : null}

      {lab === "Yes" ? (
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            margin: ".5rem",
            padding: ".5rem .8rem",
            boxShadow: "rgb(204, 204, 204) 0px 0px 1px",
            borderRadius: "8px",
            // background:'linear-gradient(0deg,#f0faf6 0%,#fff 100%)',
          }}
        >
          <CardHeader
            sx={{ padding: "0px" }}
            color="text.secondary"
            avatar={
              <Avatar
                src="https://cache.careers360.mobi/images/frontend/desktop/facilities/transport.svg"
                sx={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(2, 165, 105, .06)",
                }}
              ></Avatar>
            }
            title="Transport Facility"
            titleTypographyProps={{ fontSize: "16px", fontWeight: "normal" }}
          />
        </Grid>
      ) : null}
    </Grid>
  );
}
