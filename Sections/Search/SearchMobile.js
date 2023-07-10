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
  ArrowBackIos,
  ArrowForwardIos,
  Cancel,
  CancelRounded,
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
import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";
import kmrLogo from "/public/icons/kalvimalar-english-logo.png";
import kmrLogoDark from "/public/icons/kalvimalar-english-logo-white.png";
import Image from "next/image";

const SearchMobile = ({
  handleSelect,
  locationContext,
  locationContextLat,
  locationContextLon,
  selectValue,
  setSelectValue,
}) => {
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
  const [defaultTop, setDefaultTop] = useState([]);
  const [selectedTop, setSelectedTop] = useState([]);
  // ----------------------------------------------
  const [locLatLng, setLocLatLng] = useState([]);
  const [nearByState, setNearByState] = useState(100);
  const [locLatLng1, setLocLatLng1] = useState([]);
  const [value1, setValue1] = useState([]);
  const [latLoc, setLatLoc] = useState([]);
  const [click, setClick] = useState(null);
  const open = Boolean(click);
  // console.log("Location1 : " + locLatLng.latitude, locLatLng.longitude);
  //   console.log("Selected Location : " + locLatLng);
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
    axios
      .get(`https://w.kalvimalar.com/places`)
      .then(function (response) {
        // console.log("LOCAL" + response.data);
        setLocLatLng1(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  //  Kilometers to miles Convertion
  const NearLocation = nearByState / 1.609344;

  // ----------------Get current location lat and lng
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        // console.log("Lattitude : " + lat, "Longitude : " + lng);
        return setCurLocation({
          latitude: lat,
          longitude: lng,
        });
      });
    }
  }, [locLatLng]);

  //   console.log(curLocation.latitude, curLocation.longitude);

  const API_Endpoint = "https://w.kalvimalar.com/geolocationsearch?";
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  // ------Default Suggestion Api Values
  useEffect(() => {
    fetch(`https://w.kalvimalar.com/search?searchValues=${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchLocData(data.colleges);
        setDefaultTop(data.topurl);
      });
  }, [searchValue]);

  useEffect(() => {
    if (latLoc.latitude != undefined || latLoc.latitude != null ) {
      console.log(`${API_Endpoint}latId=${latLoc.latitude}&longId=${latLoc.longitude.replace(/[ ]/g,"")}&distanceId=${NearLocation}`);
    }
  },[latLoc.latitude])
  // ------Current location Sugesstion Values (Local API)
  useEffect(() => {
    if (latLoc.latitude != undefined || latLoc.latitude != null ) {
      axios
        .get(
          `${API_Endpoint}latId=${latLoc.latitude}&longId=${latLoc.longitude}&distanceId=${NearLocation}`
          // `${API_Endpoint}latId=${curLocation.latitude}&longId=${curLocation.longitude}&distanceId=${NearLocation}`
        )
        .then(function (response) {
          setSearchApiData(response.data.colleges);
          // setSelectedTop(response.data.topurl);
          // setSearchApiData1(response.data.colleges);
          // console.log(response.data.topurl)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [ value1,nearByState, searchValue, latLoc.latitude]);

  useEffect(() => {
    if (latLoc.latitude != undefined || latLoc.latitude != null ) {
      axios
        .get(
          `${API_Endpoint}latId=${latLoc.latitude}&longId=${latLoc.longitude}&distanceId=${NearLocation}`
          // `${API_Endpoint}latId=${curLocation.latitude}&longId=${curLocation.longitude}&distanceId=${NearLocation}`
        )
        .then(function (response) {
          // setSearchApiData(response.data.colleges);
          setSelectedTop(response.data.topurl);
          // setSearchApiData1(response.data.colleges);
          // console.log(response.data.topurl)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [ searchValue, latLoc.latitude]);
  // console.log(selectedTop); 


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
          // setSelectedTop(response.data.topurl);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [locLatLng.latitude, latLoc.latitude , nearByState, searchValue]);

  // console.log(searchApiData);

  // ------Current Location Name
  useEffect(() => {
    if (curLocation.latitude != undefined) {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${curLocation.latitude},${curLocation.longitude}&key=${process.env.NEXT_PUBLIC_API_KEY}`
        )
        .then(function (response) {
          // console.log("LOCAL" + response.data);
          setLocation(response.data.results);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [curLocation, searchValue]);

  // useEffect(() => {
  //   location.slice(0, 1).map((e) => {
  //     console.log("Current :" + e.formatted_address);
  //     setCurrentLocation(e.formatted_address);
  //   });
  // });

  const router = useRouter();
  //-----------------------
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${curLocation.lattitude},${curLocation.longitude}&key=${process.env.NEXT_PUBLIC_API_KEY}`
    ).then((res) => {
      return setLocation(res);
    });
  }, [value]);

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

  return (
    <>
      <Stack
        sx={{
          width: "100%",
          // height: "100%",
          // bgcolor: themeMode === true ? "grey.700" : "common.white",
          // color: themeMode === true ? "common.white" : "common.black",
          overflowX: "hidden",
        }}
        role="presentation"
      >
        {/* <Topbar state={state} setState={setState} /> */}
        <Box sx={{ right: 0, justifyContent: "space-between", width: "100%", mt:2 , display:'flex' , px:2 }}>
          <IconButton
            onClick={() => {
              router.back();
            }}
            size="small"
            mt={1}
          >
            <ArrowBackIos fontSize={'22px'} /> Back
          </IconButton>
          <Box>
            <Link href={"/"}>
              <Image
                src={themeMode === true ? kmrLogoDark : kmrLogo}
                alt="KMR Logo"
                className="mlogo"
              />
            </Link>
          </Box>
        </Box>
        {/* ---------------------------Search Field ----------------------------- */}
        <List
          sx={{
            width: "100%",
            height: { xs: "0", md: "0" },
            pt: -8.5,
          }}
        >
          {/* ----mobile Search----- */}
          <ListItem
            sx={{
              justifyContent: "normal",
              width: "100%",
              border: "none",
              display: { xs: "grid", md: "none" },
              position: "sticky",
              // mt: 2,
            }}
          >
            <InputBase
              variant="outlined"
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              value={searchValue}
              type="text"
              placeholder={`Search Colleges...`}
              sx={{
                width: "100%",
                height: "50px",
                pl: "15px",
                display: "flex",
                fontSize: { md: "18px", sm: "15px" },
                //   alignItems: "center",
                justifyContent: "center",
                color: themeMode === true ? "common.white" : "common.black",
                border: "1px solid grey",
                pl: "5px",
                px: "5px",
                //   mt: -10,
                borderRadius: "10px",
              }}
              startAdornment={
                <>
                  <SearchIcon fontSize="small" sx={{ color: "grey.500" }} />
                </>
              }
            />

            <Box
              width='100%'
              display={{ xs:"flex"}}
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
                setClick={setClick}
                click={click}
                handleSelect={handleSelect}
                placeholder={
                  currentLocation != ""
                    ? currentLocation
                    : "Select your location..."
                }
                status={status}
                setSelectValue={setSelectValue}
                selectValue={selectValue}
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
                      // console.log("Lattitude : " + lat, "Longitude : " + lng);
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
          {curLocation.latitude != undefined ||
            currentLocation != "" ||
            curLocation.latitude != undefined ||
            curLocation.latitude != undefined ? (
              <>
                <GridContainer display={"grid"} sx={{ justifyContent: "left" }}>
                  {(currentLocation === "" && value != "") || value != "" ? (
                  <GridItem pl={1}>
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
                            setLocLatLng({
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
                        // startIcon={
                        //   <BiCurrentLocation sx={{ fontSize: "15px" }} />
                        // }
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
                        {currentLocation}
                      </Typography>
                    </Box>
                  </GridItem>
                  ) : null}
                  <GridItem pl={3}>
                    {/* <Box
                          sx={{
                            justifyContent: "left",
                            // mt: -20,
                            mb: -2,
                            width: "70vw",
                            // mx: 10,
                          }}
                        >
                          <NearBySlider
                            value={nearByState}
                            onchange={(e) => {
                              setNearByState(e.target.value);
                            }}
                          />
                        </Box> */}
                  </GridItem>
                </GridContainer>
              </>
            ) : null}

            <Box
              width="100%"
              sx={{
                mb: -1.5,
                mt: 1,
                px: -10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="caption">
                No of Colleges :
                <b>
                  {(latLoc.latitude === undefined && value != "") ||
                  (latLoc.latitude != undefined && value != "")
                    ? searchLocData1.length
                    : latLoc.latitude != undefined
                    ? searchApiData.length
                    : searchLocData.length}
                </b>
              </Typography>
              <Box>
                {
                  latLoc.latitude != undefined ?
                nearByState != 1000 ? (
                  <Button
                    onClick={() => setNearByState(1000)}
                    sx={{ justifyContent: "right" }}
                  >{`See More>>`}</Button>
                ) : (
                  <Button
                    onClick={() => setNearByState(100)}
                  >{`<<See Less`}</Button>
                ) : null
                }
              </Box>
            </Box>
          </ListItem>
          {/* <Divider
                orientation="horizontal"
                sx={{
                  mt: 1,
                  border: "1px solid grey",
                  display: { xs: "flex", md: "none" },
                }}
              /> */}
        </List>

        {/* -----------Suggestions------------------------------ */}
        {/* -----------Mobile */}
        <List
          sx={{
            width: "100vw",
            height:'100%',
            maxHeight:'100vh',
            justifyContent: "center",
            overflowY: "auto",
            display: { md: "none", sm: "grid" },
            zIndex: 1,
            mt:20,
          }}
          role="list"
        >
          {
            // curLocation.latitude === undefined  && locLatLng.latitude != undefined || curLocation.latitude != undefined  && locLatLng.latitude != undefined ?
            (latLoc.latitude === undefined && value != "") ||
            (latLoc.latitude != undefined && value != "")
              ? 
              ( 
                <>
                {selectedTop
                .filter((ele) => {
                  // console.log(ele);
                  if (searchValue === "") {
                    return ele;
                  } else if (
                    ele.name
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
                .map((top) => {
                  return (
                    <>
                      <ListItem
                        sx={{
                          justifyContent: "center",
                          alignItems: "start",
                          width: {
                            xl: "100%",
                            lg: "100%",
                            md: "100%",
                            xs: "100%",
                          },
                          // width:"100%",
                          // height:'auto',
                          maxHeight: "600px",
                          px: { xl: 10, lg: 10, md: 1 },
                        }}
                      >
                        <GridItem
                          component="a"
                          // href={`/${breadName}/${
                          //   e.id
                          // }-${e.institute_name.replace(/[. ]+/g, "-")}`}
                          columnSpacing={4}
                          width={"100%"}
                          height={"100%"}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            textDecoration: "none",
                            bgcolor: themeMode === true? "grey.600" : 'grey.300',
                            color: themeMode === true? "grey.100" : 'grey.800',
                            p:2,
                            borderRadius:'10px'
                          }}
                        >
                          <GridItem
                            item
                            xs={12}
                            justifyContent="left"
                            display={"grid"}
                            sx={{ alignItems: "center" }}
                          >
                            <Box display={"flex"}>
                              <Avatar
                                sx={{
                                  width: "50px",
                                  heigth: "50px",
                                  mr: 2,
                                }}
                              >
                                <img 
                                  src={ top.url.toLowerCase() == "coimbatore" ? "https://media.istockphoto.com/id/1468922754/vector/coimbatore-city-clock-tower-icon-illustration.jpg?s=612x612&w=0&k=20&c=vWwa5CM0qJBujFqOxfJoav3MuwU28Bh7DJZG7GO_FrM=" : 
                                        top.url.toLowerCase() == "chennai" ? "https://media.istockphoto.com/id/1385664586/vector/chennai-central-railway-station-vector.jpg?b=1&s=170667a&w=0&k=20&c=aFRnGDcq9hvFq4gxDlPAeFEBNLnOPQmDQjCLemrBanM=" :
                                        top.url.toLowerCase() == "madurai"? "https://media.istockphoto.com/id/602311842/vector/vintage-poster-of-meenakshi-amman-temple-in-tamil-nadu-famous.jpg?s=612x612&w=0&k=20&c=R7XHZMImp2tG7K1EXKxRZZMcIGLzebB-8vy6bEfvNLQ=" :
                                        top.url.toLowerCase() == "kancheepuram"? "https://www.tripsavvy.com/thmb/hIldyvqXOgRBm4NOJ1rhl6RE8RE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kanchipuram-temples-1221194559-2dd08ec7cfc445b3ad3e069ab7900142.jpg" :
                                        top.url.toLowerCase() == "engineering"? "https://i.pinimg.com/1200x/35/1a/e7/351ae7b78bb793c6462884e947df51b2.jpg" :
                                        top.url.toLowerCase() == "arts&science"? "https://static.vecteezy.com/system/resources/previews/002/920/996/original/college-building-academic-building-university-in-traditional-english-style-with-trees-and-a-green-lawn-and-playground-illustration-on-white-background-free-vector.jpg" :
                                        top.url.toLowerCase() == "tamilnadu" ? "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/TamilNadu_Logo.svg/1866px-TamilNadu_Logo.svg.png" : null} 
                                  width={50} 
                              />
                              </Avatar>

                              <Typography
                                component={"a"}
                                variant="h5"
                                onClick={(e) => {
                                  setState(false);
                                  router.push( 
                                    top.url.toString().toLowerCase() == "chennai"||
                                    top.url.toString().toLowerCase() == "villupuram" || 
                                    top.url.toString().toLowerCase() == "kancheepuram" || 
                                    top.url.toString().toLowerCase() == "tamilnadu" || 
                                    top.url.toString().toLowerCase() == "coimbatore" || 
                                    top.url.toString().toLowerCase() == "namakkal" || 
                                    top.url.toString().toLowerCase() == "madurai"   
                                     ? 
                                    `/${top.url.replace(/[ ]/g, "_").replace("&", "and")}-colleges` :
                                    top.url.toString().toLowerCase() != "chennai"||
                                    top.url.toString().toLowerCase() != "villupuram" || 
                                    top.url.toString().toLowerCase() != "kancheepuram" || 
                                    top.url.toString().toLowerCase() != "tamilnadu" || 
                                    top.url.toString().toLowerCase() != "coimbatore" || 
                                    top.url.toString().toLowerCase() != "namakkal" || 
                                    top.url.toString().toLowerCase() != "madurai"
                                    ?
                                    `/${top.url.replace(/[ ]/g, "_").replace("&", "and")}?districtId=${top.districtid}`
                                    : null)
                                }}
                                
                              >
                                {" "}
                                {top.name}
                              </Typography>
                            </Box>

                            <Typography variant="caption" >
                              {" "}
                              <LocationOnSharp
                                sx={{ fontSize: "15px", color: "grey" }}
                              />
                              {top.url}
                            </Typography>
                            {/* <Typography variant="body1" color="grey">
                              Near by <b>{distance}</b>Kms
                            </Typography> */}
                          </GridItem>
                        </GridItem>
                      </ListItem>
                    </>
                  );
                })}
                {searchLocData1
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
                            alignItems: "start",
                            width: {
                              xl: "100%",
                              lg: "100%",
                              md: "100%",
                              xs: "100%",
                            },
                            // width:"100%",
                            // height:'auto',
                            maxHeight: "600px",
                            px: { xl: 10, lg: 10, md: 1 },
                          }}
                        >
                          <GridItem
                            component="a"
                            href={`/${breadName}/${
                              e.id
                            }-${e.institute_name.replace(/[. ]+/g, "-")}`}
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
                              xs={12}
                              justifyContent="left"
                              display={"flex"}
                              sx={{ alignItems: "center" }}
                            >
                              <Avatar
                                sx={{ width: "60px", height: "60px", mr: 2 }}
                              >
                                <img
                                  src={e.logo}
                                  // src={`https://w.kalvimalar.com/images/colleges/${e.logo}`}
                                  width={55}
                                  height={55}
                                />
                              </Avatar>
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
                              <Typography variant="caption" color="grey">
                                {" "}
                                <LocationOnSharp
                                  sx={{ fontSize: "15px", color: "grey" }}
                                />
                                {e.address}
                              </Typography>
                              <Typography variant="body1" color="grey">
                                Near by <b>{distance}</b>Kms
                              </Typography>
                              {/* </Link> */}
                            </GridItem>
                          </GridItem>
                        </ListItem>
                      </>
                    );
                  })}
                </>
                  )
              : 
            latLoc.latitude != undefined
              ?
              ( 
                <>
                {selectedTop
                .filter((ele) => {
                  // console.log(ele);
                  if (searchValue === "") {
                    return ele;
                  } else if (
                    ele.name
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
                .map((top) => {
                  return (
                    <>
                      <ListItem
                        sx={{
                          justifyContent: "center",
                          alignItems: "start",
                          width: {
                            xl: "100%",
                            lg: "100%",
                            md: "100%",
                            xs: "100%",
                          },
                          // width:"100%",
                          // height:'auto',
                          maxHeight: "600px",
                          px: { xl: 10, lg: 10, md: 1 },
                        }}
                      >
                        <GridItem
                          component="a"
                          // href={`/${breadName}/${
                          //   e.id
                          // }-${e.institute_name.replace(/[. ]+/g, "-")}`}
                          columnSpacing={4}
                          width={"100%"}
                          height={"100%"}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            textDecoration: "none",
                            bgcolor: themeMode === true? "grey.600" : 'grey.300',
                            color: themeMode === true? "grey.100" : 'grey.800',
                            p:2,
                            borderRadius:'10px'
                          }}
                        >
                          <GridItem
                            item
                            xs={12}
                            justifyContent="left"
                            display={"grid"}
                            sx={{ alignItems: "center" }}
                          >
                            <Box display={"flex"}>
                              <Avatar
                                sx={{
                                  width: "50px",
                                  heigth: "50px",
                                  mr: 2,
                                }}
                              >
                                <img 
                                  src={ top.url.toLowerCase() == "coimbatore" ? "https://media.istockphoto.com/id/1468922754/vector/coimbatore-city-clock-tower-icon-illustration.jpg?s=612x612&w=0&k=20&c=vWwa5CM0qJBujFqOxfJoav3MuwU28Bh7DJZG7GO_FrM=" : 
                                        top.url.toLowerCase() == "chennai" ? "https://media.istockphoto.com/id/1385664586/vector/chennai-central-railway-station-vector.jpg?b=1&s=170667a&w=0&k=20&c=aFRnGDcq9hvFq4gxDlPAeFEBNLnOPQmDQjCLemrBanM=" :
                                        top.url.toLowerCase() == "madurai"? "https://media.istockphoto.com/id/602311842/vector/vintage-poster-of-meenakshi-amman-temple-in-tamil-nadu-famous.jpg?s=612x612&w=0&k=20&c=R7XHZMImp2tG7K1EXKxRZZMcIGLzebB-8vy6bEfvNLQ=" :
                                        top.url.toLowerCase() == "kancheepuram"? "https://www.tripsavvy.com/thmb/hIldyvqXOgRBm4NOJ1rhl6RE8RE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kanchipuram-temples-1221194559-2dd08ec7cfc445b3ad3e069ab7900142.jpg" :
                                        top.url.toLowerCase() == "engineering"? "https://i.pinimg.com/1200x/35/1a/e7/351ae7b78bb793c6462884e947df51b2.jpg" :
                                        top.url.toLowerCase() == "arts&science"? "https://static.vecteezy.com/system/resources/previews/002/920/996/original/college-building-academic-building-university-in-traditional-english-style-with-trees-and-a-green-lawn-and-playground-illustration-on-white-background-free-vector.jpg" :
                                        top.url.toLowerCase() == "tamilnadu" ? "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/TamilNadu_Logo.svg/1866px-TamilNadu_Logo.svg.png" : null} 
                                  width={50} 
                              />
                              </Avatar>

                              <Typography
                                component={"a"}
                                variant="h5"
                                onClick={(e) => {
                                  setState(false);
                                  router.push( 
                                    top.url.toString().toLowerCase() == "chennai"||
                                    top.url.toString().toLowerCase() == "villupuram" || 
                                    top.url.toString().toLowerCase() == "kancheepuram" || 
                                    top.url.toString().toLowerCase() == "tamilnadu" || 
                                    top.url.toString().toLowerCase() == "coimbatore" || 
                                    top.url.toString().toLowerCase() == "namakkal" || 
                                    top.url.toString().toLowerCase() == "madurai"   
                                     ? 
                                    `/${top.url.replace(/[ ]/g, "_").replace("&", "and")}-colleges` :
                                    top.url.toString().toLowerCase() != "chennai"||
                                    top.url.toString().toLowerCase() != "villupuram" || 
                                    top.url.toString().toLowerCase() != "kancheepuram" || 
                                    top.url.toString().toLowerCase() != "tamilnadu" || 
                                    top.url.toString().toLowerCase() != "coimbatore" || 
                                    top.url.toString().toLowerCase() != "namakkal" || 
                                    top.url.toString().toLowerCase() != "madurai"
                                    ?
                                    `/${top.url.replace(/[ ]/g, "_").replace("&", "and")}?districtId=${top.districtid}`
                                    : null)
                                }}
                                
                              >
                                {" "}
                                {top.name}
                              </Typography>
                            </Box>

                            <Typography variant="caption" >
                              {" "}
                              <LocationOnSharp
                                sx={{ fontSize: "15px", color: "grey" }}
                              />
                              {top.url}
                            </Typography>
                            {/* <Typography variant="body1" color="grey">
                              Near by <b>{distance}</b>Kms
                            </Typography> */}
                          </GridItem>
                        </GridItem>
                      </ListItem>
                    </>
                  );
                })}
                {searchApiData
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
                    const milesToKm = e.distance * 1.609344;
                    const distance = milesToKm.toString().slice(0, 5);

                    return (
                      <>
                        <ListItem
                          sx={{
                            justifyContent: "center",
                            alignItems: "start",
                            width: {
                              xl: "100%",
                              lg: "100%",
                              md: "100%",
                              xs: "100%",
                            },
                            // width:"100%",
                            // height:'auto',
                            maxHeight: "600px",
                            px: { xl: 10, lg: 10, md: 1 },
                          }}
                        >
                          <GridItem
                            component="a"
                            href={`/${breadName}/${
                              e.id
                            }-${e.institute_name.replace(/[. ]+/g, "-")}`}
                            columnSpacing={4}
                            width={"100%"}
                            height={"100%"}
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              textDecoration: "none",
                              bgcolor: themeMode === true? "grey.700" : 'common.white',
                              p:2,
                              borderRadius:'10px'
                            }}
                          >
                            <GridItem
                              item
                              xs={12}
                              justifyContent="left"
                              display={"grid"}
                              sx={{ alignItems: "center" }}
                            >
                              <Box display={"flex"}>
                                <Avatar
                                  sx={{
                                    width: "50px",
                                    heigth: "50px",
                                    mr: 2,
                                  }}
                                >
                                  <img
                                    // src={`https://w.kalvimalar.com/images/colleges/${e.logo}`}
                                    src={e.logo}
                                    width={50}
                                  />
                                </Avatar>

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
                              </Box>

                              <Typography variant="caption" color="grey">
                                {" "}
                                <LocationOnSharp
                                  sx={{ fontSize: "15px", color: "grey" }}
                                />
                                {e.address}
                              </Typography>
                              <Typography variant="body1" color="grey">
                                Near by <b>{distance}</b>Kms
                              </Typography>
                            </GridItem>
                          </GridItem>
                        </ListItem>
                      </>
                    );
                  })}
                </>  )
              : 
              (
              <>
              {defaultTop
                .filter((ele) => {
                  if (searchValue === "") {
                    return ele;
                  } else if (
                    ele.name
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
                .map((top) => {
                  return (
                    <>
                      <ListItem
                        sx={{
                          justifyContent: "center",
                          alignItems: "start",
                          width: {
                            xl: "100%",
                            lg: "100%",
                            md: "100%",
                            xs: "100%",
                          },
                          // width:"100%",
                          // height:'auto',
                          maxHeight: "600px",
                          px: { xl: 10, lg: 10, md: 1 },
                        }}
                      >
                        <GridItem
                          component="a"
                          // href={`/${breadName}/${e.id}-${e.institute_name.replace(/[. ]+/g, "-")}`}
                          columnSpacing={4}
                          width={"100%"}
                          height={"100%"}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            textDecoration: "none",
                            bgcolor: themeMode === true? "grey.600" : 'grey.300',
                            color: themeMode === true? "grey.100" : 'grey.800',
                            p:2,
                            borderRadius:'10px'
                          }}
                        >
                          <GridItem
                            item
                            xs={12}
                            justifyContent="left"
                            display={"grid"}
                            sx={{ alignItems: "center" }}
                          >
                            <Box display={"flex"}>
                              <Avatar
                                sx={{
                                  width: "50px",
                                  heigth: "50px",
                                  mr: 2,
                                }}
                              >
                               <img 
                                  src={ top.url.toLowerCase() == "coimbatore" ? "https://media.istockphoto.com/id/1468922754/vector/coimbatore-city-clock-tower-icon-illustration.jpg?s=612x612&w=0&k=20&c=vWwa5CM0qJBujFqOxfJoav3MuwU28Bh7DJZG7GO_FrM=" : 
                                        top.url.toLowerCase() == "chennai" ? "https://media.istockphoto.com/id/1385664586/vector/chennai-central-railway-station-vector.jpg?b=1&s=170667a&w=0&k=20&c=aFRnGDcq9hvFq4gxDlPAeFEBNLnOPQmDQjCLemrBanM=" :
                                        top.url.toLowerCase() == "madurai"? "https://media.istockphoto.com/id/602311842/vector/vintage-poster-of-meenakshi-amman-temple-in-tamil-nadu-famous.jpg?s=612x612&w=0&k=20&c=R7XHZMImp2tG7K1EXKxRZZMcIGLzebB-8vy6bEfvNLQ=" :
                                        top.url.toLowerCase() == "kancheepuram"? "https://www.tripsavvy.com/thmb/hIldyvqXOgRBm4NOJ1rhl6RE8RE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kanchipuram-temples-1221194559-2dd08ec7cfc445b3ad3e069ab7900142.jpg" :
                                        top.url.toLowerCase() == "engineering"? "https://i.pinimg.com/1200x/35/1a/e7/351ae7b78bb793c6462884e947df51b2.jpg" :
                                        top.url.toLowerCase() == "arts&science"? "https://static.vecteezy.com/system/resources/previews/002/920/996/original/college-building-academic-building-university-in-traditional-english-style-with-trees-and-a-green-lawn-and-playground-illustration-on-white-background-free-vector.jpg" :
                                        top.url.toLowerCase() == "tamilnadu" ? "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/TamilNadu_Logo.svg/1866px-TamilNadu_Logo.svg.png" : null} 
                                  width={50} 
                              />
                              </Avatar>

                              <Typography
                                component={"a"}
                                variant="h5"
                                onClick={(e) => {
                                  setState(false);
                                  router.push( 
                                    top.url.toString().toLowerCase() == "chennai"||
                                    top.url.toString().toLowerCase() == "villupuram" || 
                                    top.url.toString().toLowerCase() == "kancheepuram" || 
                                    top.url.toString().toLowerCase() == "tamilnadu" || 
                                    top.url.toString().toLowerCase() == "coimbatore" || 
                                    top.url.toString().toLowerCase() == "namakkal" || 
                                    top.url.toString().toLowerCase() == "madurai"   
                                     ? 
                                    `/${top.url.replace(/[ ]/g, "_").replace("&", "and")}-colleges` :
                                    top.url.toString().toLowerCase() != "chennai"||
                                    top.url.toString().toLowerCase() != "villupuram" || 
                                    top.url.toString().toLowerCase() != "kancheepuram" || 
                                    top.url.toString().toLowerCase() != "tamilnadu" || 
                                    top.url.toString().toLowerCase() != "coimbatore" || 
                                    top.url.toString().toLowerCase() != "namakkal" || 
                                    top.url.toString().toLowerCase() != "madurai"
                                    ?
                                    `/${top.url.replace(/[ ]/g, "_").replace("&", "and")}?districtId=${top.districtid}`
                                    : null)
                                }}
                                
                              >
                                {" "}
                                {top.name}
                              </Typography>
                            </Box>

                            <Typography variant="caption" color="grey">
                              {" "}
                              <LocationOnSharp
                                sx={{ fontSize: "15px", color: "grey" }}
                              />
                              {top.url}
                            </Typography>
                          </GridItem>
                        </GridItem>
                      </ListItem>
                    </>
                  );
                })}
              {searchLocData.map((e) => { 
                  // console.log(searchApi.colleges);
                  //  console.log(e.distance.slice(0,4));
                  const milesToKm = e.distance * 1.609344;
                  const distance = milesToKm.toString().slice(0, 5);

                  return (
                    <>
                      <ListItem
                        sx={{
                          justifyContent: "center",
                          alignItems: "start",
                          width: {
                            xs: "100%",
                          },
                          // width:"100%",
                          // height:'auto',
                          maxHeight: "600px",
                          px: { xl: 10, lg: 10, md: 1 },
                          
                        }}
                      >
                        <GridItem
                          component="a"
                          // href={`/Search/${e.id}-${e.institute_name.replace(
                          //   /[. ]+/g,
                          //   "-"
                          // )}`}
                          columnSpacing={4}
                          width={"100%"}
                          height={"100%"}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            textDecoration: "none",
                            bgcolor: themeMode === true? "grey.700" : 'common.white',
                            p:2,
                            borderRadius:'10px'
                          }}
                        >
                          <GridItem
                            item
                            xs={12}
                            justifyContent="left"
                            display={"flex"}
                            sx={{ alignItems: "center" }}
                          >
                            <Avatar
                              sx={{ width: "50px", heigth: "50px", mr: 2 }}
                            >
                              <img src={e.logo} width={50} />
                            </Avatar>
                            {/* <Link
                                onClick={(e) => setState(false)}
                                href={`/Search/${
                                  e.id
                                }-${e.institute_name.replace(/[. ]+/g, "-")}`}
                              > */}
                              <Box display={'grid'} >
                            <Typography
                              component={"a"}
                              variant="h5"
                              onClick={(e) => {
                                setState(false);
                              }}
                              href={`/Search/${e.id}-${e.institute_name.replace(
                                /[. ]+/g,
                                "-"
                              )}`}
                            >
                            
                              {e.institute_name}
                            </Typography>
                            <Typography variant="body1" color="grey">
                              {" "}
                              <LocationOnSharp
                                sx={{ fontSize: "15px", color: "grey" }}
                              />{" "}
                              {/* Near by <b>{distance}</b>Kms */}
                              {e.city_name}
                            </Typography>
                              </Box>
                            {/* </Link> */}
                          </GridItem>
                        </GridItem>
                      </ListItem>
                    </>
                  );
                }) }
              </>)}
              
        </List>
      </Stack>
    </>
  );
};

export default SearchMobile;
