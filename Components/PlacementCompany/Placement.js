import { Stack, Box, Divider, } from "@mui/material";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography } from "@mui/material";

import Image from "next/image";
import { Card } from "@/OverViews/Card/Card";
import { CardMedia } from "@/OverViews/Card/CardMedia";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Link from "next/link";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
};

function Placement({ dataplacemnets }) {
  const router = useRouter();
  const [jsondata, setjsondata] = useState([dataplacemnets]);
  useEffect(() => {
    // jsondata.splice(0,jsondata.length);
    // if (router.query.college) {
      setjsondata([dataplacemnets]);
    // } 
  }, [router.query.college]);
  // console.log(dataplacemnets);

  return (
    <Box>
       <Link
        style={{ display: "block", width: "100%" }}
          href={`/${router.query.collegelist}/${router.query.college}/placement`}
      >
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
                          }}
                        />
      </Typography>
      </Link>

      {jsondata.map((item, index) => {
        console.log(item);
        return (
          <>
            <Carousel
              partialVisbile
              itemClass="image-item"
              responsive={responsive}
              infinite
              autoPlay
              arrows="false"
            >
              {item.map((item, index) => {
                return (
                  <>
                    <Card
                      key={item.placement_count}
                      sx={{
                        padding: "10px",
                       
                        margin: "10px",
                        justifyContent: "center",
                      }}
                    >
                       <CardMedia
                                sx={{ padding: "5px",  background:'#fff', }}
                                component="img"
                                image={item.company_logo}
                                alt={item.company_name}
                              />
                      {/* <Image
                        src={`${item.company_logo}`}
                        width={100}
                        height={55}
                        draggable={false}
                        style={{ margin: "10px auto" }}
                      /> */}
                      <Typography variant="h6" align="center">
                        {item.company_name}
                      </Typography>
                      {/* <Divider/>
                      <Typography align='center'>  {item.year} </Typography> */}
                    </Card>
                  </>
                );
              })}
            </Carousel>
          </>
        );
      })}
    </Box>
  );
}
export default Placement;
