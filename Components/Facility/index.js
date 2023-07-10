import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Extracurricular from "../Icons/Extracurricular";
import Auditorium from "../Icons/Auditorium";
import Clinic from "../Icons/Clinic";
import Library from "../Icons/Library";
import ChemcalLab from "../Icons/ChemicalLab";
import Hostel from "../Icons/Hostel";
import Sports from "../Icons/Sports";
import Transport from "../Icons/Transport";

import { IconButton, Stack, Typography } from "@mui/material";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};
const array = [
  {
    title: "Hostel",
    icon: <Hostel />,
  },
  {
    title: "Games",
    icon: <Extracurricular />,
  },
  {
    title: "Auditorium",
    icon: <Auditorium />,
  },
  {
    title: "Hostel",
    icon: <Hostel />,
  },
  {
    title: "Clinic",
    icon: <Clinic />,
  },
  {
    title: "Library",
    icon: <Library />,
  },
  {
    title: "Lab",
    icon: <ChemcalLab />,
  },
  {
    title: "Sports",
    icon: <Sports />,
  },
  {
    title: "Transport",
    icon: <Transport />,
  },
];
// const facility = ['Hostel','Auditorium','ChemicalLab','Canteen','Clinic ','Extracurricular','Gym'];
function Facilities() {
  return (
    <Stack
      // display= {'flex'}
      // justifyContent={'center'}
      height="100%"
      width="100%"
      sx={{
        justifyContent: "center",
        justifyItems: "left",
      }}
      px={{ xs: 5 }}
    >
      <Typography>FACILITY</Typography>
      <Carousel
        // ssr
        partialVisbile
        itemClass="image-item"
        responsive={responsive}
        infinite="true"
        autoPlay
        arrows={false}
      >
        {/* <Box sx={{ width:'70px', height:'70px' }} > */}
        {array.map((image) => {
          return (
            <IconButton sx={{ display: "grid", justifyItems: "center" }}>
              {image.icon}
              <Typography>{image.title}</Typography>
            </IconButton>
          );
        })}
        {/* </Box> */}
      </Carousel>
    </Stack>
  );
}

export default Facilities;
