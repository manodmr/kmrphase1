import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Card, Container, ImageList, ImageListItem, Stack } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Infrastructure",
    imgPath:
      "https://images.collegedunia.com/public/college_data/images/campusimage/1503987943cccccccc.jpg",
  },
  {
    label: "Auditorium",
    imgPath:
      "https://images.collegedunia.com/public/college_data/images/campusimage/1504264255Picture4.jpg",
  },
  {
    label: "Library",
    imgPath:
      "https://images.collegedunia.com/public/college_data/images/campusimage/14347872556.jpg",
  },
  {
    label: "Events",
    imgPath:
      "https://images.collegedunia.com/public/college_data/images/campusimage/150398799712107754_974029622636400_7198662285001583947_n.jpg",
  },
  {
    label: "Extra Curricular Activities",
    imgPath:
      "https://images.collegedunia.com/public/college_data/images/campusimage/150398803118275251_1412130412159650_8342832847010945661_n.jpg",
  },

  {
    label: "Infrastructure",
    imgPath:
      "https://images.collegedunia.com/public/college_data/images/campusimage/1503987943cldn.jpg",
  },
  {
    label: "Events",
    imgPath:
      "https://images.collegedunia.com/public/college_data/images/campusimage/150398799713438823_1120428067996554_4338089744703921734_n.jpg",
  },
  {
    label: "Extra Curricular Activities",
    imgPath:
      "https://images.collegedunia.com/public/college_data/images/campusimage/150398799716641093_1326577744048251_5695433477994940673_n.jpg",
  },
  {
    label: "Facilities",
    imgPath:
      "https://images.collegedunia.com/public/college_data/images/campusimage/1564558020classs3.jpg",
  },
  {
    label: "Facilities",
    imgPath:
      "https://images.collegedunia.com/public/college_data/images/campusimage/1564558020classs.jpg",
  },
  {
    label: "Facilities",
    imgPath:
      "https://images.collegedunia.com/public/college_data/images/campusimage/1564558020classs.jpg",
  },
  {
    label: "Facilities",
    imgPath:
      "https://images.collegedunia.com/public/college_data/images/campusimage/1564558020classs.jpg",
  },
];

function Gallery({data}) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>      {/* ------------------------------------------ */}
      <Stack
        component="div"
        px={10}
        sx={{ marginTop: "10px", display: { xs: "none", lg: "block" } }}
      > 

        <Container>
        <ImageList sx={{ width: "100%", height: "100%" }} cols={4} gap={10}>
          {data.gallery.map((item) => (
            <ImageListItem key={item.id}>
              <img src={item.images} alt={item.category_name} />
            </ImageListItem>
          ))}
        </ImageList>
        </Container>
      </Stack>
    </>
  );
}
export default Gallery;
