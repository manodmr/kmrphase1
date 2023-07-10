import React, { useContext } from "react";
import { Grid as GridComponent } from "@mui/material";
import { darkLightModeContext } from "@/Layout/Layout";

export const GridContainer = ({
  children,
  sx,
  direction,
  spacing,
  rowSpacing,
  columnSpacing,
  width,
  height,
  maxHeight,
  maxWidth,
  justifyContent,
  alignItems,
  items,
  xl,
  lg,
  md,
  sm,
  xs,
  display,
  rowGap,
  columnGap,
  component,
  px,
  py,
  pr,
  pl,
  p,
  mx,
  my,
  mt,
  mb,
  mr,
  ml,
  m,
  pt,
  pb,
}) => {
  const themeMode = useContext(darkLightModeContext);
  return (
    <GridComponent
      sx={{
        bgcolor: themeMode === true ? "grey.800" : "grey.200",
        color: themeMode === true ? "common.white" : "common.black",
        ...sx,
      }}
      direction={direction}
      spacing={spacing}
      rowSpacing={rowSpacing}
      columnSpacing={columnSpacing}
      rowGap={rowGap}
      columnGap={columnGap}
      width={width}
      height={height}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      justifyContent={justifyContent}
      alignItems={alignItems}
      //   item={items}
      //   container={container}
      container
      item
      xl={xl}
      lg={lg}
      sm={sm}
      md={md}
      xs={xs}
      display={display}
      component={component}
      px={px}
      py={py}
      pr={pr}
      pl={pl}
      pt={pt}
      pb={pb}
      p={p}
      mx={mx}
      my={my}
      mt={mt}
      mb={mb}
      mr={mr}
      ml={ml}
      m={m}
    >
      {children}
    </GridComponent>
  );
};
