import React, { useContext } from "react";
import { Table as TableComponent } from "@mui/material";
import { darkLightModeContext } from "@/Layout/Layout";
const Table = ({ children, size, arialabel ,sx }) => {
    const themeMode = useContext(darkLightModeContext);
  return (
    <>
      <TableComponent
        sx={{
          bgcolor: themeMode === true ? "grey.800" : "grey.200",
          ...sx,
        }}
        size={size}
        aria-label={arialabel}
      >
        {children}
      </TableComponent>
    </>
  );
};

export default Table;
