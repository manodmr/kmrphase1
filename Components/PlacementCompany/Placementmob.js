import {
    Box,
    CardContent,
    CardMedia,
    Stack,
    Typography,
    Divider,
  } from "@mui/material";
  import React, { useEffect } from "react";
  import Carousel from "react-multi-carousel";
  import "react-multi-carousel/lib/styles.css";
  import { useRouter } from "next/router";
  import { useState } from "react";
  import Image from "next/image";
  import { Card } from "@/OverViews/Card/Card";
import Link from "next/link";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  
  export default function Design3({ dataplacemnets }) {
    const router = useRouter();
    const [faculty, setfaculty] = useState(dataplacemnets);
    useEffect(() => {
      // jsondata.splice(0,jsondata.length);
      // if (router.query.college) {
        setfaculty(dataplacemnets);
      // } 
    }, [router.query.college]);
    return (
        <Box
          sx={{
            justifyContent: "center",
            justifyItems: "center",
            margin:'1em',
          }}
        >

<Link href={`/${router.query.collegelist}/${router.query.college}/placement`}>
      <Typography
        variant="h5"
        sx={{
          marginBottom: "8px",
          paddingBottom: "3px",
          display: "inline-block",
          borderBottom: "#5bd9bd solid 1px",
         
        }}
      >
        Placement Companies <ArrowForwardOutlinedIcon
                          style={{
                            marginBottom: "-6px",
                            textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                          }}/>
      </Typography>
      </Link>
          
          <Carousel
            responsive={responsive}
            additionalTransfrom={2}
            arrows={true}
            autoPlay
            autoPlaySpeed={5000}
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
            {faculty.map((item) => {
              return (
                <>
                  <Card
                    key={item.placement_count}
                    sx={{
                      padding: "5px",
                      boxShadow: "none",
                      margin: "10px",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={`${item.company_logo}`}
                      width={100}
                      height={50}
                      draggable={false}
                      style={{ margin: "10px auto", width:'100%' }}
                    />
                    <Typography variant="h6" align="center">
                      {item.company_name}
                    </Typography>
                    <Divider />
                    <Typography align="center"> {item.year} </Typography>
                  </Card>
                </>
              );
            })}
          </Carousel>
        </Box>
    );
  }
  