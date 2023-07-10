import React from "react";
import { Box as BoxComponent } from "@mui/material";

export const Box = ({
  children,
  sx,
  component,
  display,
  height,
  width,
  minHeight,
  minWidth,
  maxHeight,
  maxWidth,
  justifyContent,
  justifyItems,
  alignContent,
  alignItems,
}) => {
  return (
    <BoxComponent
      sx={{
        ...sx,
      }}
      component={component}
      display={display}
      height={height}
      width={width}
      minHeight={minHeight}
      minWidth={minWidth}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      justifyContent={justifyContent}
      justifyItems={justifyItems}
      alignContent={alignContent}
      alignItems={alignItems}
    >
      {children}
    </BoxComponent>
  );
};
