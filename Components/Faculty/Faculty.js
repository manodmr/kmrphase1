import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

function Faculties({ data }) {
  return (
    <div>
      <Stack container height="100%" width="100%">
        <Typography textAlign={"center"}>FACULTY</Typography>
        <Carousel
          responsive={responsive}
          additionalTransfrom={2}
          arrows={true}
          autoPlay
          autoPlaySpeed={2000}
          centerMode={false}
          draggable
          infinite
          itemClass=""
          keyBoardControl={true}
          minimumTouchDrag={80}
          pauseOnHover
          renderDotsOutside={false}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
          {data.faculty.map((Fact) => {
            return (
              <>
                <Card sx={{ maxWidth: 235 }}>
                  <CardMedia
                    sx={{ height: 265, fontFamily: "Arial" }}
                    image={Fact.imgS}
                    title={Fact.faculty_name}
                  />
                </Card>
                <Card sx={{ maxWidth: 215, mx: 1.3, mt: -5, height: "100%" }}>
                  <CardContent
                    sx={{
                      opacity: 0.5,
                      backgroundColor: "white ",
                      color: "black",
                      marginBottom: "-11px",
                      height: "100px",
                    }}
                  >
                    <Box sx={{ display: "grid", mt: -1.4 }}>
                      <Typography
                        sx={{ lineHeight: -4 }}
                        variant="subtitle2"
                        fontWeight="bold"
                      >
                        {Fact.faculty_name}
                      </Typography>
                      <Typography variant="caption">{Fact.faculty_designation}</Typography>
                      <Typography variant="caption" fontWeight="bold">
                        {Fact.faculty_email}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </>
            );
          })}
        </Carousel>
      </Stack>
    </div>
  );
}

export default Faculties;
