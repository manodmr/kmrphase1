import {
  darkLightModeContext,
  searchContext,
  setLocationContext,
} from "@/Layout/Layout";
import { Box } from "@/OverViews/Box";
import { Button } from "@/OverViews/Button";
// import { GridContainer } from "@/OverViews/GridContainer";
import { GridItem } from "@/OverViews/GridItem";
import { Stack } from "@/OverViews/Stack";
import {
  ArrowForwardIos,
  Cancel,
  LocationOnOutlined,
  LocationOnSharp,
  TrendingUp,
} from "@mui/icons-material";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { Search as SearchIcon } from "@mui/icons-material";
import {
  Avatar,
  Divider,
  Drawer,
  IconButton,
  InputAdornment,
  InputBase,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import NewComplete from "./NewComplete";
import axios from "axios";
import NearBySlider from "@/Components/Slider/NearBySlider";
import { BiCurrentLocation } from "react-icons/bi";
import { GridContainer } from "@/OverViews/GridContainer";
import Topbar from "../Header/Topbar";

const Search = ({ sx, handleSelect }, props) => {
  const [state, setState] = useState({
    top: false,
  });
  const breadName = useRouter().query.collegelist;
  const themeMode = useContext(darkLightModeContext);
  const ClearsearchField = () => setSearchValue("");
  // usestate
  const [searchValue, setSearchValue] = useState([]);
  const [locationValue, setLocationValue] = useState();
  const [searchApiData, setSearchApiData] = useState([]);
  const [searchLocData, setSearchLocData] = useState([]);
  const [searchLocData1, setSearchLocData1] = useState([]);
  const [location, setLocation] = useState([]);
  const [mapValue, setMap] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [more, setMore] = useState(false);
  const [newLocValue, setNewLocValue] = useState("");
  const [newLocValue1, setNewLocValue1] = useState("");
  const [curLocation, setCurLocation] = useState([]);
  const [currentLocation, setCurrentLocation] = useState([]);
  // ----------------------------------------------
  const [locLatLng, setLocLatLng] = useState([]);
  const [nearByState, setNearByState] = useState(100);
  const [locLatLng1, setLocLatLng1] = useState([]);
  const [value1, setValue1] = useState([]);
  const [latLoc ,setLatLoc] = useState([])
  // console.log("Location1 : " + locLatLng.latitude, locLatLng.longitude);
  console.log("Selected Location : " + locLatLng);
  // -----------------Google Map auto suggesstion
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 11.127123, lng: () => 78.656891 },
      radius: 100 * 1000,
      componentRestrictions: {
        country: "in",
      },
    },
  });

  useEffect(() => {
    axios.get(`https://geocode.maps.co/search?q=${value1}`)
    .then(function (response) {
      console.log("LOCAL" + response.data);
      setLocLatLng1(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
   },[value1])
  //  Kilometers to miles Convertion
  const NearLocation = nearByState / 1.609344;

  // ----------------Get current location lat and lng
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        console.log("Lattitude : " + lat, "Longitude : " + lng);
        return setCurLocation({
          latitude: lat,
          longitude: lng,
        });
      });
    }
  }, [locLatLng]);

  console.log(curLocation.latitude, curLocation.longitude);

  const API_Endpoint = "https://w.kalvimalar.com/geolocationsearch?";
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  // ------Default Suggestion Api Values
  useEffect(() => {
    fetch(`https://w.kalvimalar.com/search?searchValues=${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchLocData(data.colleges);
      });
  }, [searchValue]);

  // ------Current location Sugesstion Values (Local API)
  useEffect(() => {
    if (curLocation != null) {
      axios
        .get(
          `${API_Endpoint}latId=${latLoc.latitude}&longId=${latLoc.longitude}&distanceId=${NearLocation}`
          // `${API_Endpoint}latId=${curLocation.latitude}&longId=${curLocation.longitude}&distanceId=${NearLocation}`
        )
        .then(function (response) {
          setSearchApiData(response.data.colleges);
          setSearchApiData1(response.data.colleges);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [curLocation, nearByState, searchValue, latLoc.latitude ,state ,value1 ]);

  // ------Selected Location Sugesstion values (Local API)
  useEffect(() => {
    if (curLocation != null) {
      axios
        .get(
          `${API_Endpoint}latId=${locLatLng.latitude}&longId=${locLatLng.longitude}&distanceId=${NearLocation}`
          // `${API_Endpoint}latId=${locLatLng.latitude}&longId=${locLatLng.longitude}&distanceId=${NearLocation}`
        )
        .then(function (response) {
          // alert();
          setSearchLocData1(response.data.colleges);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [locLatLng, nearByState, searchValue, latLoc ]);

  // ------Current Location Name
  useEffect(() => {
    if (curLocation.latitude != undefined) {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${curLocation.latitude},${curLocation.longitude}&key=${process.env.NEXT_PUBLIC_API_KEY}`
        )
        .then(function (response) {
          console.log("LOCAL" + response.data);
          setLocation(response.data.results);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [curLocation, searchValue]);

  useEffect(() => {
    location.slice(0, 1).map((e) => {
      console.log("Current :" + e.formatted_address);
      setCurrentLocation(e.formatted_address);
    });
  });

  //-----------------------
  // useEffect(() => {
  //   setLoading(true);
  //   fetch(
  //     `https://maps.googleapis.com/maps/api/geocode/json?latlng=${curLocation.lattitude},${curLocation.longitude}&key=${process.env.NEXT_PUBLIC_API_KEY}`
  //   ).then((res) => {
  //     return setLocation(res);
  //   });
  // }, [value]);

  // const {
  //   ready1,
  //   valueLoc,
  //   suggestions: { status1, data1 },
  //   setValue1,
  //   clearSuggestions1,
  // } = usePlacesAutocomplete({
  //   // requestOptions: {
  //   //   location: { lat: () => 11.1271, lng: () => -78.6569 },
  //   //   radius: 100 * 1000,
  //   // },
  // });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  // useEffect(() => {
  //   setLoading(true);
  //   // fetch(`https://w.kalvimalar.com/search?searchValues=${locationValue}`)
  //   fetch(`https://w.kalvimalar.com/search?searchValues=${searchValue}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setSearchApiData(data.colleges);
  //       setLoading(false);
  //     });
  // }, [searchValue]);

  // const split = value.toString().split(",");
  // const values = split.slice(0, 1);
  // const ArrayValue = values[0];
  // console.log(values[0]);

  // const split1 = valueLoc.split(",");
  // const value1 = split1.slice(0, 1);
  // const ArrayValue1 = value1[0];
  // console.log(value1[0]);

  // useEffect(() => {
  //   setLoading(true);
  //   // fetch(`https://w.kalvimalar.com/search?searchValues=${locationValue}`)
  //   fetch(
  //     `https://w.kalvimalar.com/search?searchValues=${ArrayValue.toLowerCase()}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setSearchLocData(data.colleges);
  //       setLoading(false);
  //     });
  // }, [value]);
  // useEffect(() => {
  //   setLoading(true);
  //   // fetch(`https://w.kalvimalar.com/search?searchValues=${locationValue}`)
  //   fetch(
  //     `https://w.kalvimalar.com/search?searchValues=${ArrayValue.toLowerCase()}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setSearchLocData1(data.colleges);
  //       setLoading(false);
  //     });
  // }, [value]);

  //  google.maps.event.addDomListener(window, 'load', initialize);
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

  //   useEffect(() => {
  //     var autocomplete = new window.google.maps.places.Autocomplete(
  //       input,
  //       options
  //     );
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
  //   }, [newLocValue]);
  // }
  // initialize();
  // ----------------mobile-------------
  // function initialize1(event) {
  //   // var input = stateValue;
  //   var input1 = document.getElementById("mobile-autocomplete_search1");
  //   const center = { lat: 11.1271, lng: 78.6569 };
  //   // Create a bounding box with sides ~100km away from the center point
  //   const defaultBounds1 = {
  //     north: center.lat + 0.1,
  //     south: center.lat - 0.1,
  //     east: center.lng + 0.1,
  //     west: center.lng - 0.1,
  //   };

  //   var options1 = {
  //     bounds: defaultBounds1,
  //     componentRestrictions: { country: "in" },
  //     fields: ["address_components", "geometry", "icon", "name"],
  //     strictBounds: false,
  //     types: ["(cities)"],
  //   };

  //   useEffect(() => {
  //     var autocomplete = new window.google.maps.places.Autocomplete(
  //       input1,
  //       options1
  //     );
  //     autocomplete.setComponentRestrictions({
  //       country: ["in"],
  //     });
  //     autocomplete.addListener("place_changed", function () {
  //       var place = autocomplete.getPlace();
  //       console.log(place);

  //       // place variable will have all the information you are looking for.

  //       $("#lat").val(place.geometry["location"].lat());
  //       $("#long").val(place.geometry["location"].lng());
  //     });
  //   }, []);
  // }
  // initialize1();
  // ------------------------------------------------------------

  const list = (anchor) => {
    return (
      <>
        <Stack
          sx={{
            // width: "100%",
            // height: "100%",
            // bgcolor: themeMode === true ? "grey.700" : "common.white",
            // color: themeMode === true ? "common.white" : "common.black",
            overflowX: "hidden",
            
          }}
          role="presentation"
        > 
          <Box display={{ md:'flex' , sm:'none' , xs:'none' }}>

          <Topbar state={state} setState={setState} />
          </Box>
          {/* -----------------Search Top Area--------------------------- */}
          {/* <Box
            sx={{
              justifyContent: "center",
              //   mt: 5,
              width: "100%",
              alignItems: "center",
            }}
          >
            <Box width={"100%"}>
              <IconButton
                sx={{
                  // width: "100%",
                  // height: "100%",
                  justifyContent: "right",
                  ":hover": { background: "none", border: "none" },
                  ":active": { background: "none", border: "none" },

                  alignItems: "start",
                  px: { md: 5, sm: 2 },
                }}
                onClick={(e) => {
                  setState(false);
                }}
              >
                <Cancel />
              </IconButton>
            </Box>
            <Typography
              variant="h2"
              textAlign={"center"}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {`Find What You Need!...`}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
              }}
            >
              Find What You Need!...
            </Typography>
          </Box> */}
          {/* <Box width={"100%"}>
              <IconButton
                sx={{
                  // width: "100%",
                  // height: "100%",
                  justifyContent: "right",
                  ":hover": { background: "none", border: "none" },
                  ":active": { background: "none", border: "none" },

                  alignItems: "start",
                  px: { md: 5, sm: 2 },
                }}
                onClick={(e) => {
                  setState(false);
                }}
              >
                <Cancel />
              </IconButton>
            </Box> */}

          {/* ---------------------------Search Field ----------------------------- */}
          <List
            sx={{
              width: "100%",
              height: { xs: "0", md: "0" },
              pt:-8.5
            }}
          >
            {/* -----------------desktop search-------------------- */}
            <ListItem
              sx={{
                justifyContent: "center",
                width: "100%",
                height: "100%",
                display: { xs: "none", md: "grid" },
                // mt:-8.5,

              }}
            >
              <Box>
                <InputBase
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                  value={searchValue}
                  // id="custom-search-input"
                  type="search"
                  placeholder={`Search Colleges...`}
                  sx={{
                    width: "40vw",
                    height: "50px",
                    maxHeight: { md: "100%", xs: "100vh" },
                    border: "1px solid grey",
                    pl: "5px",
                    px: "5px",
                    borderRadius: "30px",
                    fontSize: { md: "18px", sm: "10px" },
                    alignItems: "center",
                    justifyContent: "center",
                    color: themeMode === true ? "grey.400" : "common.black",
                    display: { md: "flex", sm: "none" },
                  }}
                  startAdornment={
                    <InputAdornment>
                      <SearchIcon
                        color="black"
                        sx={{
                          color: "primary.main",
                          mr: 1,
                          ml: 2,
                          fontSize: { md: "30px", sm: "20px" },
                        }}
                      />
                    </InputAdornment>
                  }
                />

                {/* {curLocation.latitude != undefined ||
                currentLocation != "" ||
                value != "" ||
                (curLocation.latitude != undefined && value != "") ||
                (curLocation.latitude != undefined && currentLocation != "") ? (
                  <InputBase
                    disabled
                    sx={{
                      width: "250px",
                      height: "50px",
                      maxHeight: { md: "100%", xs: "100vh" },
                      border: "1px solid grey",
                      pl: "5px",
                      px: "10px",
                      // ml: 2,
                      borderRadius: "0px 30px 30px 0px",
                      fontSize: { md: "15px", sm: "10px" },
                      alignItems: "center",
                      justifyContent: "center",
                      color: themeMode === true ? "grey.400" : "common.black",
                      display: { md: "flex", sm: "none" },
                    }}
                    value={
                      currentLocation === "" || value != ""
                        ? value
                        : currentLocation != "" ||
                          value === "" ||
                          curLocation.latitude != undefined
                        ? currentLocation
                        : null
                    }
                    startAdornment={
                      <InputAdornment>
                        <LocationOnSharp
                          color="black"
                          sx={{
                            color: "primary.main",
                            mr: 1,
                            // ml: 2,

                            fontSize: { md: "20px", sm: "10px" },
                          }}
                        />
                      </InputAdornment>
                    }
                  />
                ) : (
                  <InputBase
                    disabled
                    sx={{
                      width: "250px",
                      height: "50px",
                      maxHeight: { md: "100%", xs: "100vh" },
                      border: "1px solid grey",
                      pl: "5px",
                      px: "10px",
                      // ml: 2,
                      borderRadius: "0px 30px 30px 0px",
                      fontSize: { md: "15px", sm: "10px" },
                      alignItems: "center",
                      justifyContent: "center",
                      color: themeMode === true ? "grey.400" : "common.black",
                      display: { md: "flex", sm: "none" },
                    }}
                    value={
                      currentLocation === "" || value != ""
                        ? value
                        : currentLocation != "" ||
                          value === "" ||
                          curLocation.latitude != undefined
                        ? currentLocation
                        : "Default Values"
                    }
                    placeholder="Default Values"
                    startAdornment={
                      <InputAdornment>
                        <LocationOnSharp
                          color="black"
                          sx={{
                            color: "primary.main",
                            mr: 1,
                            // ml: 2,

                            fontSize: { md: "20px", sm: "10px" },
                          }}
                        />
                      </InputAdornment>
                    }
                  />
                )} */}
              </Box>
           
              {/* {(curLocation.latitude === undefined && value != "") ||
              (curLocation.latitude != undefined && value != "") ||
              currentLocation != "" ? (
                <GridContainer
                  display={"flex"}
                  sx={{ justifyContent: "center", px: 5 }}
                >
                  <GridItem>
                    <Box
                      sx={{
                        justifyContent: "left",
                        mt: 2,
                        // mb: -2,
                        // width: "100%",
                        // mx: 10,
                      }}
                    >
                      <NearBySlider
                        value={nearByState}
                        onchange={(e) => {
                          setNearByState(e.target.value);
                        }}
                      />
                    </Box>
                  </GridItem>
                  <GridItem pl={5}>
                    <Box display={"grid"} width={"230px"}>
                      <Button
                        sx={{
                          justifyContent: "left",
                          mt: { md: 1, sm: "none" },
                          // display:'inline-grid'
                        }}
                        onClick={(e) => {
                          if (currentLocation != "") {
                            setValue(currentLocation);
                            clearSuggestions();
                            setLocationContext({
                              latitude: curLocation.latitude,
                              longitude: curLocation.longitude,
                            });
                          } else if (currentLocation === "") {
                            navigator.geolocation.getCurrentPosition(
                              (position) => {
                                var lat = position.coords.latitude;
                                var lng = position.coords.longitude;
                                console.log(
                                  "Lattitude : " + lat,
                                  "Longitude : " + lng
                                );
                                return setCurLocation({
                                  latitude: lat,
                                  longitude: lng,
                                });
                              }
                            );
                          }
                        }}
                        startIcon={
                          <BiCurrentLocation sx={{ fontSize: "15px" }} />
                        }
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            display: { sm: "flex", md: "flex" },
                            color: "primary.main",
                            fontWeight: "bold",
                            // mt: 2,
                          }}
                        >
                          Use Current Location <br />
                        </Typography>
                      </Button>
                      <Typography
                        variant="caption"
                        sx={{
                          pl: 4,
                          mt: -1.5,
                          width: "250px",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          color: "primary.main",
                        }}
                      >
                        {curLocation.latitude != undefined
                          ? currentLocation
                          : "Your Location Was Blocked..!"}
                      </Typography>
                    </Box>
                  </GridItem>
                </GridContainer>
              ) : null} */}
            </ListItem>

            {/* ----mobile Search----- */}

            <Divider
              orientation="horizontal"
              sx={{
                mt: 1,
                border: "1px solid grey",
                display: { xs: "flex", md: "none" },
              }}
            />
          </List>
          <List>
          <Box
                display="flex"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
              >
                <Typography variant="body2" mx={5}>
                  No of Colleges :
                  <b>
                    {(curLocation.latitude === undefined && value != "") ||
                    (curLocation.latitude != undefined && value != "")
                      ? searchLocData1.length
                      : curLocation.latitude != undefined
                      ? searchApiData.length
                      : searchLocData.length}
                  </b>
                </Typography>
                {nearByState != 1000 ? (
                  <Button
                    sx={{ width: "100px", m: 2 }}
                    onClick={() => setNearByState(1000)}
                  >{`See More>>`}</Button>
                ) : (
                  <Button
                    sx={{ width: "100px", m: 2 }}
                    onClick={() => setNearByState(100)}
                  >{`<<See Less`}</Button>
                )}
              </Box>
          </List>

          {/* -----------Suggestions------------------------------ */}
          {/* -----------Desktop */}
          <List
            sx={{
              // width: "100vw",
              // height: "100%",
              // maxHeight: "70vh",
              justifyContent: "center",
              //   alignItems: "center",
              overflowY: "auto",
              scrollbarColor:"auto",
              scrollBehavior:'smooth',
              scrollbarWidth:'thin',
              display: { xs: "none", md: "block" },
            }}
            role="list"
          >
            {
              // curLocation.latitude === undefined  && locLatLng.latitude != undefined || curLocation.latitude != undefined  && locLatLng.latitude != undefined ?
              (curLocation.latitude === undefined && value != "") ||
              (curLocation.latitude != undefined && value != "")
                ? searchLocData1
                    .filter((ele) => {
                      if (searchValue === "") {
                        return ele;
                      } else if (
                        ele.institute_name
                          .replace(/[. ]+/g, "")
                          .toLowerCase()
                          .includes(
                            searchValue
                              .toString()
                              .replace(/[ ]+/g, "")
                              .toLowerCase()
                          )
                      ) {
                        return ele;
                      }
                    })
                    .map((e) => {
                      // console.log(searchApi.colleges);
                      //  console.log(e.distance.slice(0,4));
                      const milesToKm = e.distance * 1.609344;
                      const distance = milesToKm.toString().slice(0, 5);
                      return (
                        <>
                          <ListItem
                            sx={{
                              justifyContent: "center",
                              width: { xl: "100%", lg: "100%", md: "100%" },
                              // width:"100%",
                              maxHeight: "600px",
                              px: { xl: 10, lg: 10, md: 1 },
                            }}
                          >
                            <GridItem
                              component="a"
                              href={e.url}
                              columnSpacing={4}
                              width={"100%"}
                              height={"100%"}
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                textDecoration: "none",
                              }}
                            >
                              <GridItem
                                item
                                lg={12}
                                justifyContent="left"
                                display={"flex"}
                                sx={{ alignItems: "center" }}
                              >
                                <Avatar
                                  sx={{ width: "50px", heigth: "55px", mr: 2 }}
                                >
                                  <img
                                    // src={`https://w.kalvimalar.com/images/colleges/${e.logo}`}
                                    src={e.logo}
                                    width={50}
                                  />
                                </Avatar>
                                <Box display="grid">
                                  {/* <Link
                                    onClick={(e) => setState(false)}
                                    href={`/Search/${
                                      e.id
                                    }-${e.institute_name.replace(
                                      /[. ]+/g,
                                      "-"
                                    )}`}
                                  > */}
                                  <Typography
                                    component={"a"}
                                    variant="h5"
                                    onClick={(e) => {
                                      setState(false);
                                    }}
                                    href={`/Search/${
                                      e.id
                                    }-${e.institute_name.replace(
                                      /[. ]+/g,
                                      "-"
                                    )}`}
                                  >
                                    {" "}
                                    {e.institute_name}
                                  </Typography>
                                  {/* </Link> */}

                                  <Typography variant="body1" color="grey.500">
                                    {" "}
                                    {e.address}
                                  </Typography>
                                </Box>
                              </GridItem>

                              <GridItem item lg={3}>
                                <Typography variant="body1" color="grey.500">
                                  {" "}
                                  {distance} Kms
                                </Typography>
                              </GridItem>
                            </GridItem>
                          </ListItem>
                        </>
                      );
                    })
                : curLocation.latitude != undefined
                ? searchApiData
                    .filter((ele) => {
                      // console.log(ele);
                      if (searchValue === "") {
                        return ele;
                      } else if (
                        ele.institute_name
                          .replace(/[. ]+/g, "")
                          .toLowerCase()
                          .includes(
                            searchValue
                              .toString()
                              .replace(/[ ]+/g, "")
                              .toLowerCase()
                          )
                      ) {
                        return ele;
                      }
                    })
                    .map((e) => {
                      // console.log(searchApi.colleges);
                      //  console.log(e.distance.slice(0,4));
                      const milesToKm = e.distance * 1.609344;
                      const distance = milesToKm.toString().slice(0, 5);
                      return (
                        <>
                          <ListItem
                            sx={{
                              justifyContent: "center",
                              width: { xl: "100%", lg: "100%", md: "100%" },
                              // width:"100%",
                              maxHeight: "600px",
                              px: { xl: 10, lg: 10, md: 1 },
                            }}
                          >
                            <GridItem
                              component="a"
                              href={e.url}
                              columnSpacing={4}
                              width={"100%"}
                              height={"100%"}
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                textDecoration: "none",
                              }}
                            >
                              <GridItem
                                item
                                lg={12}
                                justifyContent="left"
                                display={"flex"}
                                sx={{ alignItems: "center" }}
                              >
                                <Avatar
                                  sx={{ width: "50px", heigth: "55px", mr: 2 }}
                                >
                                  <img
                                    // src={`https://w.kalvimalar.com/images/colleges/${e.logo}`}
                                    src={e.logo}
                                    width={50}
                                  />
                                </Avatar>
                                <Box display="grid">
                                  {/* <Link
                                    onClick={(e) => setState(false)}
                                    href={`/Search/${
                                      e.id
                                    }-${e.institute_name.replace(
                                      /[. ]+/g,
                                      "-"
                                    )}`}
                                  > */}
                                  <Typography
                                    component={"a"}
                                    variant="h5"
                                    onClick={(e) => {
                                      setState(false);
                                    }}
                                    href={`/Search/${
                                      e.id
                                    }-${e.institute_name.replace(
                                      /[. ]+/g,
                                      "-"
                                    )}`}
                                  >
                                    {" "}
                                    {e.institute_name}
                                  </Typography>
                                  {/* </Link> */}

                                  <Typography variant="body1" color="grey.500">
                                    {" "}
                                    {e.address}
                                  </Typography>
                                </Box>
                              </GridItem>

                              <GridItem item lg={3}>
                                <Typography variant="body1" color="grey.500">
                                  {" "}
                                  {distance} Kms
                                </Typography>
                              </GridItem>
                            </GridItem>
                          </ListItem>
                        </>
                      );
                    })
                : searchLocData.map((e) => {
                    // console.log(searchApi.colleges);
                    //  console.log(e.distance.slice(0,4));
                    const milesToKm = e.distance * 1.609344;
                    const distance = milesToKm.toString().slice(0, 5);
                    return (
                      <>
                        <ListItem
                          sx={{
                            justifyContent: "center",
                            width: { xl: "100%", lg: "100%", md: "100%" },
                            // width:"100%",
                            maxHeight: "600px",
                            px: { xl: 10, lg: 10, md: 1 },
                          }}
                        >
                          <GridItem
                            component="a"
                            href={e.url}
                            columnSpacing={4}
                            width={"100%"}
                            height={"100%"}
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              textDecoration: "none",
                            }}
                          >
                            <GridItem
                              item
                              lg={12}
                              justifyContent="left"
                              display={"flex"}
                              sx={{ alignItems: "center" }}
                            >
                              <Avatar
                                sx={{ width: "50px", heigth: "55px", mr: 2 }}
                              >
                                <img
                                  src={e.logo}
                                  // src={`https://w.kalvimalar.com/images/colleges/${e.logo}`}
                                  width={50}
                                />
                              </Avatar>
                              <Box display="grid">
                                {/* <Link
                                  onClick={(e) => setState(false)}
                                  href={`/Search/${
                                    e.id
                                  }-${e.institute_name.replace(/[. ]+/g, "-")}`}
                                > */}
                                <Typography
                                  component={"a"}
                                  variant="h5"
                                  onClick={(e) => {
                                    setState(false);
                                  }}
                                  href={`/Search/${
                                    e.id
                                  }-${e.institute_name.replace(/[. ]+/g, "-")}`}
                                >
                                  {" "}
                                  {e.institute_name}
                                </Typography>
                                {/* </Link> */}

                                <Typography variant="body1" color="grey.500">
                                  {" "}
                                  {e.address}
                                </Typography>
                              </Box>
                            </GridItem>

                            <GridItem item lg={3}>
                              <Typography variant="body1" color="grey.500">
                                {" "}
                                {/* {distance} Kms */}
                                {e.city_name}
                              </Typography>
                            </GridItem>
                          </GridItem>
                        </ListItem>
                      </>
                    );
                  })
            }
          </List>
        </Stack>
      </>
    );
  };

  return (
    <>
      <Stack sx={{ background: "transparent" }}>
        <Box
          sx={{
            display: { md: "flex", xs: "grid" },
            width: { md: "100%", xs: "100%" },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: "6px",
              justifyContent: "center",
              width: "100%",
              display: { md: state.top != true  ? "flex" : "none" , xs: state.top != true ? "flex" : "none"},
            }}
          >
            <InputBase
              placeholder={`Search Colleges`}
              onClick={toggleDrawer("top", true)}
              sx={{
                borderRadius: "10px",
                width: "110%",
                height: "40px",
                mt: { xs: 2, md: 0 },
                color: themeMode === true ? "common.white" : "grey.700",
                bgcolor: themeMode === true ? "grey.700" : "common.white",
                border: "2px solid #0093AB",
                pl: 1,
                ...sx,
              }}
              endAdornment={
                <Box
                  sx={{
                    bgcolor: "primary.main",
                    p: "3px",
                    borderRadius: "0px 8px 8px 0px",
                    ml: 1,
                    border: "2px solid #0093AB",
                    color: "common.white",
                  }}
                >
                  <SearchIcon
                    size="medium"
                    sx={{ color: "common.white" }}
                    onClick={value != "" ? toggleDrawer("top", true) : null}
                  />
                </Box>
              }
            />
          </Box>

          <Box
            display={{xs: state.top != true ? "flex" : "flex"}}
            alignItems={"center"}
            sx={{ mr: state ? 5 : 0 }}
          >
            <LocationOnSharp fontSize="small" sx={{ ml: { md: 5, xs: 0 } }} />
            <NewComplete
              ready={ready}
              value1={value1}
              setValue1={setValue1}
              latLoc={latLoc}
              locLatLng={locLatLng1}
              setLatLoc={setLatLoc}
              call={locLatLng}
              handleSelect={handleSelect}
              placeholder={
                currentLocation != ""
                  ? currentLocation
                  : "Select your location..."
              }
              status={status}
              data={data}
              clearSuggestions={clearSuggestions}
              onchange={(e) => setValue(e.target.value)}
              UseCurrentLocationClick={(e) => {
                if (currentLocation != "") {
                  setValue(currentLocation);
                  clearSuggestions();
                  setLocationContext({
                    latitude: curLocation.latitude,
                    longitude: curLocation.longitude,
                  });
                } else if (currentLocation === "") {
                  navigator.geolocation.getCurrentPosition((position) => {
                    var lat = position.coords.latitude;
                    var lng = position.coords.longitude;
                    console.log("Lattitude : " + lat, "Longitude : " + lng);
                    return setCurLocation({
                      latitude: lat,
                      longitude: lng,
                    });
                  });
                }
              }}
              currentLocation={currentLocation}
            />
          </Box>
        </Box>
      </Stack>
      
      <Drawer
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
        >
          {list("top")}
        </Drawer>
    </>
  );
};

export default Search;
