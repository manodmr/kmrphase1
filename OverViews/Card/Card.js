import React, { useContext } from "react";
import { Card as CardComponent } from "@mui/material";
import { darkLightModeContext } from "@/Layout/Layout";

export const Card = ({ 
   children, 
   sx, 
   component, 
   onClick, 
   href,
   onMouseEnter,
   onMouseLeave,

}) => {
   const themeMode = useContext(darkLightModeContext)
  return (
    <CardComponent
      sx={{
        bgcolor: themeMode === true ? "grey.700" : "common.white",
        color: themeMode === true ? "common.white" : "common.black",
        scrollbarColor: "grey.800",
        ...sx,
      }}
      href={href}
      component={component}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </CardComponent>
  );
};
