import Modal from '@mui/material/Modal';
import { ArrowBack, ArrowForward, Close, ZoomOut } from '@mui/icons-material';
import { Backdrop, Box, Button,  CardMedia, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, Stack, Typography } from '@mui/material'
import React, { useState, useRef } from 'react'
import { useRouter } from "next/router";
import { ZoomIn } from '@mui/icons-material';
import { BsArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { Card } from '@/OverViews/Card/Card';
import { CardActions } from '@/OverViews/Card/CardActions';
import { CardContent, } from '@/OverViews/Card/CardContent';


const AutoPlaySwipeableViews = SwipeableViews;
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    //   maxWidth:'100%',
    //   bgcolor: 'background.paper',
    //   border: '2px solid #000',
    //   boxShadow: 24,
    //   p: 4,
};

export default function GalleryRes1({data}) {
    const theme = useTheme();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const handleKeyDown = (event) => {
        if (event.keyCode === 37) { // Left arrow key
            console.log(event);
            setCurrentImageIndex(currentImageIndex === 0 ? jsondata.length - 1 : currentImageIndex - 1);
        } else if (event.keyCode === 39) { // Right arrow key
            setCurrentImageIndex(currentImageIndex === jsondata.length - 1 ? 0 : currentImageIndex + 1);
        }
    };
    const previousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? jsondata.length - 1 : prevIndex - 1
        );
    };
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === jsondata.length - 1 ? 0 : prevIndex + 1
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
        if (value === 1 || value > 1) {
            setValue(1);
          }
          else {
            setValue(count => count - 1);
          }
          console.log('value', value);
        };
    const handleStepChange = (step) => {
        setCurrentImageIndex(step);
    };

     const router = useRouter();
  const [jsondata,setjsondata] = useState(data[0].gallery);
  console.log(jsondata);
  return (
        <Box container sx={{margin:'0 auto', }}>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <ImageList sx={{
                width: '100%', height: '100%',
            }} cols={2} gap={10}>
               
                        {
                            jsondata.map((item, index)=>
                            { return(
                        <ImageListItem key={index}>
                            <Image style={{ borderRadius: '10px' }} width={150} height={90} src={`${item.gallery_images}?w=248&fit=crop&auto=format`} onClick={() => {
                                setOpen(!open);
                                setCurrentImageIndex(index);
                            }}
                                tabIndex={0} onKeyDown={handleKeyDown} />
                        </ImageListItem>
                    )
                }
                )}
            </ImageList>
            <Modal sx={{ maxWidth: '100%', width: '100%' }}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Grid container sx={style} maxWidth={{ width:'100wh' }}>
                    <Grid item lg={12} xs={12} md={12}>
                        <Stack direction='row'
                            sx={{ maxWidth: '100%', alignItems: 'end', justifyContent: 'end' }}>

                            {/* image increase */}
                            <Button variant='outline' onClick={increase} size="large">
                                <ZoomIn style={{ fontSize: '35px', color: 'white' }} />
                            </Button>

                            {/* image decrease */}
                            <Button variant='outline' onClick={decrease} size="large">
                                <ZoomOut style={{ fontSize: '35px', color: 'white' }} />
                            </Button>

                            {/* close */}
                            <Button variant='outline' onClick={handleClose} size="large">
                                <Close style={{ fontSize: '35px', color: 'white' }} />
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid item lg={1} display={{ xs: 'none', lg: 'block' }}>
                        <Stack maxWidth='100%' sx={{ marginLeft:'-12px', mt:'225px' }}>
                            <Button sx={{position:'relative', zIndex:'2'}} onClick={previousImage} tabIndex={0} onKeyUp={handleKeyDown} variant='small' ><BsFillArrowLeftCircleFill style={{ color: 'white', fontSize: '35px' }} /></Button>
                        </Stack>
                    </Grid>
                    <Grid item lg={1} onClick={handleClose} display={{ xs: 'none', lg: 'block' }}></Grid>
                    <Grid item lg={8} xs={12} sx={{ maxWidth: ' 100%', height: '100%', }}>
                        <Card
                            >
                            
                            <AutoPlaySwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={currentImageIndex}
                                onChangeIndex={handleStepChange}
                                enableMouseEvents
                            >
                                 {
                            jsondata.map((item, index)=>

                                (
                                    <div key={item.galleriesid} style={{position:'relative', height:'500px',}}>
                                        {Math.abs(currentImageIndex - index) <= 5 ? (
                                            <>
                                                <Box
                                                    component="img"
                                                    sx={{
                                                        objectFit:'cover' ,
                                                        cursor:'move',

                                                        
                                                        // display: 'block',
                                                       
                                                        overflow: 'hidden',
                                                        width: '100%',
                                                        height:'100%',
                                                        position: 'absolute',
                                                        zIndex:'1',
                                                        transform: ` ${value} ` > 1 || ` ${value} ` < 2 ? `scale(${value})` : 'scale(0)'
                                                    }}
                                                    src={`${item.gallery_images}`}
                                                    alt={item.category_name}
                                                />
                                                <CardContent sx={{
                                                    maxWidth: '100%', width: '100%', 
                                                    position: 'fixed', bottom: '0px', textAlign: 'center',
                                                    backgroundColor: 'rgba(0,0,0,0.8)',
                                                    color: 'white', fontWeight: 'bold',
                                                    zIndex:'2',
                                                }}>
                                                    <Typography variant="subtitle1" align="center" fontSize={18}>
                                                        {item.category_name}
                                                    </Typography>
                                                </CardContent>
                                            </>
                                        ) : null}
                                    </div>
                                ))}
                              
                            </AutoPlaySwipeableViews>
                            <Stack  display={{ xs: 'block', lg: 'none',xl:'none' }}  sx={{ maxWidth: '100%', width: '100%',  justifyContent: 'space-around',backgroundColor:'rgba(0,0,0,0.5)'}}>
                            <CardActions display={{ xs: 'block', lg: 'none',xl:'none' }} sx={{ maxWidth: '100%', width: '100%',  justifyContent: 'space-around',backgroundColor:'rgba(0,0,0,0.5)'}}>
                                <Button onClick={previousImage} tabIndex={0} onKeyUp={handleKeyDown} variant='small' sx={{marginLeft:0}}><BsFillArrowLeftCircleFill style={{ color: 'gray', fontSize: '45px' }} /></Button>
                                <Button onClick={nextImage} tabIndex={0} onKeyDown={handleKeyDown}sx={{marginRight:0}} ><BsArrowRightCircleFill style={{ color: 'gray', fontSize: '45px' }} /></Button>
                            </CardActions>
                            </Stack>
                        </Card>
                     
                    </Grid>
                    <Grid item lg={1} onClick={handleClose} display={{ xs: 'none', lg: 'block' }}></Grid>
                    <Grid item lg={1} display={{ xs: 'none', lg: 'block' }}>
                        {/* sx={{ marginTop: '210px' }} */}
                        <Stack maxWidth='100%' sx={{ marginRight:'-12px', mt:'225px' }} >
                            <Button onClick={nextImage} tabIndex={0} onKeyDown={handleKeyDown} left={0}><BsArrowRightCircleFill style={{ color: 'white', fontSize: '35px' }} /></Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Modal>
            </Box>
    );
}
// const images = [
//     {
//         label: 'Infrastructure',
//         imgPath:
//             'https://w.kalvimalar.com/images/colleges/1JNP5UEu1WV4K_vQBJmqEtQ46Su02CL5s.jpg',
//     },
//     {
//         label: 'Infrastructure',
//         imgPath:
//             'https://w.kalvimalar.com/images/colleges/1JNP5UEu1WV4K_vQBJmqEtQ46Su02CL5s.jpg',
//     },
//     {
//         label: 'Infrastructure',
//         imgPath:
//             'https://w.kalvimalar.com/images/colleges/1JNP5UEu1WV4K_vQBJmqEtQ46Su02CL5s.jpg',
//     },
    
// ];
