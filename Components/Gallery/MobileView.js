import { Close, ZoomOut } from '@mui/icons-material';
import { Backdrop,  Card, CardContent, CardMedia, Grid, IconButton, ImageListItemBar, Tooltip, Typography } from '@mui/material'
import React, { useState, useRef } from 'react'
import { ZoomIn } from '@mui/icons-material';
import { BsArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { ImageList, ImageListItem,Stack } from '@mui/material'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Infrastructure',
    imgPath:
      'https://images.collegedunia.com/public/college_data/images/campusimage/1503987943cccccccc.jpg?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Events',
    imgPath:
      'https://images.collegedunia.com/public/college_data/images/campusimage/150398799712107754_974029622636400_7198662285001583947_n.jpg',
  },
  {
    label: 'Extra Curricular Activities',
    imgPath:
      'https://images.collegedunia.com/public/college_data/images/campusimage/150398803118275251_1412130412159650_8342832847010945661_n.jpg',
  },

  {
    label: 'Infrastructure',
    imgPath:
      'https://images.collegedunia.com/public/college_data/images/campusimage/1503987943cldn.jpg',
  },
  {
    label: 'Events',
    imgPath:
      'https://images.collegedunia.com/public/college_data/images/campusimage/150398799713438823_1120428067996554_4338089744703921734_n.jpg',
  },
  {
    label: 'Extra Curricular Activities',
    imgPath:
      'https://images.collegedunia.com/public/college_data/images/campusimage/150398799716641093_1326577744048251_5695433477994940673_n.jpg',
  },{
    label: 'Facilities',
    imgPath:
      'https://images.collegedunia.com/public/college_data/images/campusimage/1564558020classs3.jpg',
  },{
    label: 'Facilities',
    imgPath:
      'https://images.collegedunia.com/public/college_data/images/campusimage/1564558020classs.jpg',
  },
];
function MobileView() {
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleKeyDown = (event) => {
      if (event.keyCode === 37) { // Left arrow key
          console.log(event);
          setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
      } else if (event.keyCode === 39) { // Right arrow key
          setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
      }
  };
  const previousImage = () => {
      setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
  };
  const nextImage = () => {
      setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
  };
  const [open, setOpen] = useState(false);
  const handleClose = () => {
      setOpen(false);
  };
  const handleToggle = () => {
      setOpen(!open);
  };

  const [pos, setPos] = useState({ x: 0, y: 0, scale: 1 });

  const onScroll = (e) => {
      const delta = e.deltaY * -0.01;
      const newScale = pos.scale + delta;
      const ratio = 1 - newScale / pos.scale;
      setPos({
          scale: newScale,
          x: pos.x + (e.clientX - pos.x) * ratio,
          y: pos.y + (e.clientY - pos.y) * ratio
      });
      console.log(pos);
  };
  const [value, setValue] = useState(1);
  const increase = () => {
      setValue(count => count + 1);
      console.log('value', value);
  };
  const decrease = () => {
      setValue(count => count - 1);
      if (value === 1 || value === 0) {
          setValue(1);
      }
      else {
          setValue(count => count - 1);
      }
      console.log('value', value);
  };
  return (
    <><Stack sx={{display:{xs:'flex',md:'none'}}}>
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
                onClick={() => { setOpen(!open); setCurrentImageIndex(index);
               console.log(currentImageIndex);
                }}  tabIndex={0} onKeyDown={handleKeyDown}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        // steps={maxSteps}
        position="static"
        // activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />

    </Box>
    <Backdrop
                    sx={{
                        color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, backdropFilter: 'blur(4.8px)',
                        WebkitBackdropFilter: 'blur(15.8px)',
                    }}
                    open={open}>
                    <Grid container>
                        <Grid item lg={12} xs={12} md={12} >
                            <Stack direction='row'
                                sx={{ maxWidth: '90wh', alignItems: 'end', justifyContent: 'end' }}>
                                {/* image increase */}
                                <Button variant='outline' onClick={increase} size="large">
                                    <ZoomIn style={{ fontSize: '35px' }} />
                                </Button>

                                {/* image decrease */}
                                <Button variant='outline' onClick={decrease} size="large">
                                    <ZoomOut style={{ fontSize: '35px' }} />
                                </Button>

                                {/* close */}
                                <Button variant='outline' onClick={handleClose} size="large">
                                    <Close style={{ fontSize: '35px' }} />
                                </Button>
                            </Stack>
                        </Grid>
                        <Grid item lg={2} xs={2}>
                            <Stack sx={{ marginTop: '110px' }}>
                                <Button onClick={previousImage} tabIndex={0} onKeyUp={handleKeyDown} variant='small'><BsFillArrowLeftCircleFill style={{ color: 'white', fontSize: '45px' }}/></Button>
                            </Stack>
                        </Grid>
                        <Grid item lg={8} xs={8}>
                            <Card 
                            sx={{  maxWidth: ' 90wh', width: '100%', height: 'auto',
                                     color: '#fff', display: 'inlineBlock',
                                      overflow: 'hidden', position: 'relative', textAlign: 'center',
                                    transition: 'all 0.45s ease',verticalAlign: 'top', backfaceVisibility: 'hidden ','&:after &:before':{transform:' scale(1)', opacity: 1},display:{xs:{ width: '500px',height:'350px'}},
                                }}>
                                <CardMedia onWheelCapture={onScroll}
                                    sx={{ display:{xs:{height:'300px', objectFit: 'cover'}},                                       
                                         '&:hover':{ opacity: 0.7},verticalAlign: 'top', maxWidth: '100%', backfaceVisibility: 'hidden ',
                                        transform: ` ${value} ` > 1 || ` ${value} ` <=1 ? `scale(${value})` : 'scale(0)'
                                    }}
                                    component="img"
                                    height="200px"
                                    image={images[currentImageIndex].imgPath}
                                    alt={images[currentImageIndex].label}
                                />
                                <CardContent sx={{display:{xs:{height:'300px'}},
                                            position: 'absolute', top: 0, bottom: 0,
                                            left: 0, right: 0, alignItems: 'center', zIndex: 1,
                                            display: 'flex', flexDirection: 'column', justifyContent: 'center', lineHeight: '1.1em',
                                            opacity: 0, zIndex: 2, transitionDelay: '0.1s', fontSize: '14px', fontFamily: 'sans-serif', fontWeight: '400', backgroundColor: 'rgba(0,0,0,0.5)', 
                                            letterSpacing: '1px', textTransform: 'uppercase','&:hover':{ opacity: 1},
                                        }}>
                                    <Typography variant="subtitle1" align="center" fontSize={24}>
                                        {images[currentImageIndex].label}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={2} xs={2}>
                            <Stack sx={{ marginTop: '110px' }}>
                                <Button onClick={nextImage} tabIndex={0} onKeyDown={handleKeyDown}><BsArrowRightCircleFill style={{ color: 'white', fontSize: '45px' }} /></Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Backdrop>
    </Stack>
    {/* DEKTOP VIEW */}
    <Stack component='div' px={10} sx={{marginTop:'10px'}} display={{xs:'none',lg:'flex'}}>
    <ImageList sx={{ width: "100%",height:"100%"}} cols={4} gap={10}>
      {images.map((item) => (
        <ImageListItem key={item.imgPath}>
          <img
            src={item.imgPath}
            
            alt={item.label}
            
          />
        </ImageListItem>
      ))}
    </ImageList></Stack>
    </>
  );
}
export default MobileView

