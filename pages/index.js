import Head from "next/head";
import { Inter } from "@next/font/google";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Fab,
  List,
  Typography,
} from "@mui/material";
import { Stack } from "@/OverViews/Stack";
import {
  FabButtonAnimate,
  TextAnimate,
  varFade,
  varSlide,
} from "@/theme/animate";
import Link from "next/link";
import HoverMenu from "@/Components/Navigator/HoverMenu";
import Sample from "@/Components/Card/sample";
import { useContext, useEffect, useState } from "react";
import { darkLightModeContext } from "@/Layout/Layout";
import MenuPopupState from "@/Components/Navigator/HoverMenu";
import SearchIP from "@/Sections/Search/Search";
import NewComplete from "@/Sections/Search/NewComplete";
import NearBySlider from "@/Components/Slider/NearBySlider";
import Login from "@/Components/Login/Login";
import { Card } from "@/OverViews/Card/Card";
import SearchMobile from "@/Sections/Search/SearchMobile";
import MuiMap from "@/Sections/Search/MuiMap";
import TopFilter from "@/Sections/TopFilter/TopFilter";
import GoogleMap from "@/Components/Map/GoogleMap";
import GoogleMapComponent from "@/Components/Map/GoogleMap";
import Welcome from "@/public/3DImages/Welcome.png";
import Image from "next/image";
import { m } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const themeMode = useContext(darkLightModeContext);

  // ---------------------------------------
  // function initialize(event) {
  //   // var input = stateValue;
  //   var input = document.getElementById("autocomplete_search");
  //   const center = { lat: 11.1271, lng: 78.6569 };

  //   // Create a bounding box with sides ~100km away from the center point
  //   const defaultBounds = {
  //     north: center.lat + 0.1,
  //     south: center.lat - 0.1,
  //     east: center.lng + 0.1,
  //     west: center.lng - 0.1,
  //   };

  //   const options = {
  //     bounds: defaultBounds,
  //     componentRestrictions: { country: "in" },
  //     fields: ["address_components", "geometry", "icon", "name"],
  //     strictBounds: false,
  //     types: ["(cities)"],
  //   };

  //     var autocomplete = new window.google.maps.places.Autocomplete(input, options);
  //     autocomplete.setComponentRestrictions({
  //       country: ["in"],
  //     });
  //     autocomplete.addListener("place_changed", function () {
  //       var place = autocomplete.getPlace();
  //       // console.log(place);

  //       // place variable will have all the information you are looking for.
  //       // $("#lat").val(place.geometry["location"].lat());
  //       // $("#long").val(place.geometry["location"].lng());
  //     });

  // }
  // initialize();
  // console.log("Degress Api : " + process.env.NEXT_PUBLIC_COLLEGES);


  const [state, setState] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log("Scroll : " + window.scrollY);
      const scrolled = window.scrollY;
      setState(scrolled);
    });
    // console.log("demo" + state);
  }, [state]);

  // console.log("WIll" + state);


  return (
    
    <>
      <Head>
        <title>Kalvimalar</title>
        <meta name="description" content="Educational News" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pen.png" />
      </Head>
      <>
        {/* <Navigator /> */}
        {/* <HoverMenu /> */}
        <MenuPopupState/>
        {/* <TopFilter /> */}
        {/* <GoogleMapComponent /> */}
        <Stack
          sx={{
            bgcolor: themeMode === true ? "grey.800" : "common.white",
            color: themeMode === true ? "common.white" : "common.black",
          }}
          width={"100%"}
          height={"100vh"}
          justifyContent={"center"}
          alignItems="center"
        >
          {/* <MuiMap /> */}

          {/* <SearchMobile /> */}
          <Box
            component={m.div}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <m.div
              animate={{ y: [0, 0, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              // variants={varFade().inRight}
            >
              <TextAnimate
                text={"Welcome Kalvimalar"}
                
              />
            </m.div>
            <m.div
              animate={{ y: [0, 0, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              variants={varFade().inRight}
            >
              <Image src={Welcome} alt={Welcome} width={300} />
            </m.div>
          </Box>
          <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=semmenchery, Chennai, Tamil Nadu&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </Stack>
      </>
    </>

  );
}
