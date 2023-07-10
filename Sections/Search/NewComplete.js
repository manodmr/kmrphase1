import React, { useContext, useEffect, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
// import { formatRelative } from "date-fns";

import "@reach/combobox/styles.css";
import { darkLightModeContext } from "@/Layout/Layout";
import {
  Autocomplete,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  Menu,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { BiCurrentLocation } from "react-icons/bi";
import { Box } from "@/OverViews/Box";
import axios from "axios";
import { useRouter } from "next/router";
import { LocationOn, SearchRounded } from "@mui/icons-material";
import { RiArrowUpDownFill } from "react-icons/ri";
import {
  usePopupState,
  bindHover,
  bindTrigger,
  bindMenu,
  bindContextMenu,
  bindPopover,
  bindDialog,
  bindPopper,
} from "material-ui-popup-state/hooks";
import PopupState from "material-ui-popup-state";
// import mapStyles from "./mapStyles";

export default function NewComplete({
  ready,
  value,
  setValue,
  status,
  data,
  clearSuggestions,
  requestOptions,
  onchange,
  sx,
  onClick,
  defaultValue,
  setCall,
  call,
  placeholder,
  UseCurrentLocationClick,
  currentLocation,
  value1,
  setValue1,
  locLatLng,
  setLatLoc,
  latLoc,
  setSelectValue,
  selectValue,
  setClick,
  click,
  // sx,
  // handleSelect,
}) {
  const [libraries] = useState(["places"]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY,
    libraries,
  });

  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });

  // const mapRef = React.useRef();
  //   const onMapLoad = React.useCallback((map) => {
  //     mapRef.current = map;
  //   }, []);

  // const panTo = React.useCallback(({ lat, lng }) => {
  //   mapRef.current.panTo({ lat, lng });
  //   mapRef.current.setZoom(14);
  // }, []);
  //   if (loadError) return "Error";
  //   if (!isLoaded) return "Loading...";
  return (
    <div>
      <Search
        // panTo={panTo}
        value={value}
        onchange={onchange}
        ready={ready}
        setValue={setValue}
        status={status}
        data={data}
        clearSuggestions={clearSuggestions}
        requestOptions={requestOptions}
        sx={sx}
        onClick={onClick}
        defaultValue={defaultValue}
        setCall={setCall}
        call={call}
        placeholder={placeholder}
        UseCurrentLocationClick={UseCurrentLocationClick}
        currentLocation={currentLocation}
        value1={value1}
        setValue1={setValue1}
        locLatLng={locLatLng}
        setLatLoc={setLatLoc}
        latLoc={latLoc}
        popupState={popupState}
        setSelectValue={setSelectValue}
        selectValue={selectValue}
        setClick={setClick}
        click={click}
      />
    </div>
  );
}

function Search({
  // panTo,
  value,
  onchange,
  ready,
  setValue,
  status,
  data,
  clearSuggestions,
  setCall,
  call,
  sx,
  onClick,
  defaultValue,
  placeholder,
  UseCurrentLocationClick,
  currentLocation,
  value1,
  setValue1,
  locLatLng,
  setLatLoc,
  latLoc,
  selectValue,
  setSelectValue,
  setClick,
  click
}) {
  const themeMode = useContext(darkLightModeContext);
  const center = { lat: 11.1271, lng: 78.6569 };
  const [curLocation, setCurLocation] = useState([]);
  // const [locLatLng, setLocLatLng] = useState([]);
  const [value2, setValue2] = useState([]);

  // const handleInput = (e) => {
  //   setValue(e.target.value);
  // };

  // const handleSelect = async (address) => {
  //   setValue(address, false);
  //   clearSuggestions();

  //   try {
  //     const results = await getGeocode({ address });
  //     const { lat, lng } = await getLatLng(results[0]);
  //     setCall({
  //       latitude: lat,
  //       longitude: lng,
  //     });
  //   } catch (error) {
  //     console.log("😱 Error: ", error);
  //   }
  // };
  // console.log( "Location : " + call.latitude , call.longitude);
  // useEffect(() => {
  //   axios
  //     .get(`https://geocode.maps.co/search?q=${value1}`)
  //     .then(function (response) {
  //       console.log("LOCAL" + response.data);
  //       setLocLatLng(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, [value1]);
  const router = useRouter();
  const [chc, setChc] = useState(false);
  const [checkID, setCheckID] = useState();
  const [checkDistID, setCheckDistID] = useState();
  const [okay, setOkay] = useState(false);
  const [locSearch, setLocSearch] = useState([]);
  const [places, setPlaces] = useState([]);
  const open = Boolean(okay);
  // console.log(router.query.districtId.length);

  // useEffect(() => {
  //   if(router.query.collegelist){
  //     setValue1(null);
  //     setCheckID(undefined);
  //     setCheckDistID(undefined);
  //     setPlaces([null]);
  //     delete router.query.districtId;
  //     delete router.query.cityId;
  //     setLatLoc({
  //       latitude : null, 
  //       longitude : null,
  //     })
  //   }
  // },[router.query.collegelist]);
 
  //  console.log(checkID , );

  // useEffect(() => {
  //   // delete router.query.districtId;
  //   // delete router.query.cityId;
  //   if( places != "" && checkID != undefined || !router.query.college && checkID != undefined  || checkID != undefined  || router.query.course ){
  //   if (router.query.collegelist && !router.query.course && !router.query.college ) {
  //     router.push(`/${router.query.collegelist.split("?")?.[0]}?districtId=${checkDistID}&cityId=${checkID}`,undefined,
  //       { shallow: true }
  //     );
  //   } else if (router.query.collegelist && router.query.course ) {
  //     router.push(`/${router.query.collegelist}?${
  //         router.query.course.split("&")?.[0]
  //       }&districtId=${checkDistID}&cityId=${checkID}`,
  //       undefined,
  //       { shallow: true }
  //     );
  //   } else if (!router.query.collegelist && !router.query.college ) {
  //     // router.push(
  //     //   `/BE?districtId=${checkDistID}&cityId=${checkID}`,
  //     //   undefined,
  //     //   { shallow: true }
  //     // );
  //     null
  //   }
  //   }
  // }, [ router.query.collegelist, router.query.course , checkID , router.query.districtId]);
  // console.log("latlong " + latLoc.latitude, latLoc.longitude, checkID ,checkDistID );




  // useEffect(()=>{
  //   setSelectValue(latLoc);
  // },[latLoc]);
  
  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });

  // console.log("lat",latLoc, checkDistID , selectValue)
  return (
    <div
      className={themeMode === true ? "locationSearchDark" : "locationSearch"}
    >
      <TextField 
      variant="standard"
      {...bindTrigger( router.query.collegelist == "Chennai-colleges" || router.query.collegelist == "Madurai-colleges" ||router.query.collegelist == "Coimbatore-colleges" ? false : popupState)} 
      size="small" 
      fullWidth='150px'
      
      sx={{ 
        width: {md: '120px' ,  xs:'150%'} , 
        "& input::placeholder": {
        fontSize: "13px"
        },
        // ...sx,
    }}
      placeholder={ places != ""  ? places : 'Select Location'} />


      <Menu
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        // anchorEl={popupState}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        // transitionDuration={'.2s'}
        // sx={{ mt: 1, position: "absolute" }}
      >
        <Box
          sx={{
            width: 260,
            px: 1,
            height: "100%",
            alignItems: "stretch",
            bgcolor:themeMode ===  true? 'grey.600' : 'grey.100',
            color:themeMode ===  true? 'grey.100' : 'grey.800`',
            mt:-2,
            py:1,
            mb:-1
          }}
        >
          <TextField
            id="standard-basic"
            label="Search Location"
            InputLabelProps={{ style: { fontSize: "14px" } }}
            variant="standard"
            disablePortal
            sx={{ color: "grey", ml: 2, fontSize: "10px" }}
            // placeholder="Search"
            type="Search"
            // margin="normal"
            size="small"
            endAdornment={
              <InputAdornment>
                <SearchRounded fontSize="small" />
              </InputAdornment>
            }
            autoComplete
            value={locSearch}
            onChange={(e) => {
              setLocSearch(e.target.value);
              setClick(true)
            }}
          />
          <List
            sx={{
              width: "auto",
              mineight: "250px",
              maxHeight: 230,
              overflowY: "auto",
              overflowX:'hidden',
              ml:-1
            }}
            dense
            component="div"
            role="list"
          >
            {locLatLng
            .filter((item) => {
              if(item.combinedname.toLowerCase().includes(locSearch.toString().toLowerCase())){
                return item;
              }
            })
            .map((text, index) => {
              return (
                <ListItem key={index} disablePadding>
                  <ListItemButton onClick={() => {
                      const lat = text.latlong.split(',')?.[0];
                      const lng = text.latlong.split(',')?.[1];
                      // console.log(lat)
                      // if(!router.query.districtId || router.query.districtId.length <= 2 ){
                       setLatLoc({ latitude: lat, longitude: lng,});
                       setCheckID(text.city);
                       setCheckDistID(text.district);
                       setPlaces(text.combinedname);
                      // }

                  }} 
                  onClickCapture={popupState.close}
                   >
                      <LocationOn sx={{ fontSize:'12px', mr:1 }} />
                      <Typography variant="body2" >{text.combinedname.replace(/[,]/g,", ")}</Typography>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
        
      </Menu>
    </div>
  );
}

// <Combobox
// onSelect={handleSelect}
// >
// <ComboboxInput
//   value={value}
//   onChange={(e) => {
//     setValue(e.target.value);
//   }}
//   disabled={!ready}
//   placeholder={placeholder}
// />
//   {/* <Box> */}
// <ComboboxPopover>
//   <ComboboxList>
//     <Box display={"grid"}>
//       <Button
//         sx={{
//           justifyContent: "left",
//           mt: { md: 1, sm: "none" },
//           // display:'inline-grid'
//         }}
//         onClick={UseCurrentLocationClick}
//         startIcon={<BiCurrentLocation sx={{ fontSize: "15px" }} />}
//       >
//         <Typography
//           variant="body2"
//           sx={{
//             display: { sm: "flex", md: "flex" },
//             color: "primary.main",
//             fontWeight:'bold'
//             // mt: 2,
//           }}
//         >
//           Use Current Location <br />
//         </Typography>
//       </Button>
//       <Typography
//         variant="caption"
//         sx={{
//           pl: 4,
//           mt: -1.5,
//           width: "250px",
//           whiteSpace: "nowrap",
//           overflow: "hidden",
//           textOverflow: "ellipsis",
//           color:'primary.main'
//         }}
//       >
//         {" "}
//         {currentLocation}
//       </Typography>
//     </Box>
//     <Divider />
//     {status === "OK" &&
//       data.map(({ id, description }) => (
//         <>
//           <ComboboxOption key={id} value={description} color="black" />
//         </>
//       ))}
//   </ComboboxList>
// </ComboboxPopover>
// {/* </Box> */}
// </Combobox>

 {/* <Autocomplete
        onSelect={(address) => {
          locLatLng.filter((item) => {
            if(item.combinedname.toLowerCase().includes(value1.toString().toLowerCase())){
              return item
            }
          }).map((e) => {
            const lat = e.latlong.split(',')?.[0];
            const lng = e.latlong.split(',')?.[1];
          // if(chc === true){
            setLatLoc({
               latitude: lat,
               longitude: lng,});
           setCheckID(e.city);
           setCheckDistID(e.district);
           if(e.city){
             setOkay(true);
           }
          // }
          });
        }}
        id="disable-portal"
        value={value1}
        options={locLatLng.filter((item) => {
          if(item.combinedname.toLowerCase().includes(value1.toString().toLowerCase())){
            return item
          }
        }).map((e) => { 
            var label = e.combinedname;
            return label;
        })}
        // disablePortal
        sx={{
          ...sx,
          color: themeMode === true ? "grey.100" : "grey.800",
          zIndex: 9999,
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            value={value1}
            // defaultValue={defaultValue}
            onChange={(e) => {
              setValue1(e.target.value);
            }}
            placeholder="Enter Location"
            variant="standard"
            sx={{
              width:{sm:'100%',xs:'85vw' ,md:'100%'},
              color: themeMode === true ? "common.white" : "grey.800",
            }}
          />
        )}
      /> */}
