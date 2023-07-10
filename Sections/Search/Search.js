import { darkLightModeContext } from "@/Layout/Layout";
import { LocationOnSharp } from "@mui/icons-material";
import { InputBase, Stack, TextField } from "@mui/material";
import React, { useContext, useState } from "react";

const SearchIP = ({id, name, value, onChange, style, endAdornment, onKeyDown}) => {
  //  google.maps.event.addDomListener(window, 'load', initialize);
  // const [stateValue, setStateValue] = useState();

  const themeMode = useContext(darkLightModeContext);

  return (

        <div >
          <InputBase
            id={id}
            sx={{
              width: "100%",
              height: "40px",
            //   maxHeight: { md: "100%", xs: "100vh" },
              border: "0px solid grey",
              // paddingLeft: "5px",
              // padding: "30px 0px 30px -0px",
              marginLeft: '-30px',
              fontSize: { md: "14px", sm: "10px" },
              alignItems: "center",
              justifyContent: "center",
              // color: themeMode === true ? "grey.400" : "common.black",
              display: { md: "flex", sm: "none" },
              color: themeMode  ? "grey.300" : "grey.700",
              backgroundColor: themeMode === true ? "grey.500" : "common.white",
              ...style,
            }}

            name={name}
            type="search"
            // value={value}
            // onChange={onChange}
            onSelect={onChange}
            // onKeyDown={onKeyDown}
            onSubmit={onKeyDown}
            // onKeyDownCapture={onKeyDown}
              // className="form-control"
            placeholder="Enter The Location.."
            startAdornment={
              <LocationOnSharp fontSize="small" />
            }
            endAdornment={endAdornment}
          />
          <input type="hidden" name="lat" />
          <input type="hidden" name="long" />

        </div>
  
  );
};

export default SearchIP;
