import React, { useContext } from "react";
import { Stack as StackComponent } from "@mui/material";
import { darkLightModeContext } from "@/Layout/Layout";

export const Stack = ({
  children,
  sx,
  direction,
  spacing,
  width,
  height,
  maxHeight,
  maxWidth,
  justifyContent,
  alignItems,
  container,
  display,
}) => {
  const themeMode = useContext(darkLightModeContext);

  return (
    <StackComponent
      sx={{
        bgcolor: themeMode === true ? "grey.800" : "grey.200",
        color: themeMode === true ? "common.white" : "common.black",
        ...sx,
      }}
      direction={direction}
      spacing={spacing}
      width={width}
      height={height}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      justifyContent={justifyContent}
      alignItems={alignItems}
      container={container}
      display={display}
    >
      {children}
    </StackComponent>
  );
};
