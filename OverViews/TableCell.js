import React, { useContext } from "react";
import { TableCell as TableCellComponent } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { darkLightModeContext } from "@/Layout/Layout";
const TableCell = ({
  children,
  sx,
  component,
  scope,
  align,
  abbr,
  about,
  accessKey,
}) => {
    const themeMode = useContext(darkLightModeContext);
  return (
    <>
      <TableCellComponent
        sx={{
          [`&.${tableCellClasses.head}`] : {
            color: themeMode === true ? "grey.300" :'common.white',
            backgroundColor: themeMode === true ? "common.white" :'primary.main',
          },
          [`&.${tableCellClasses.body}`] : {
            color: themeMode === true ? "grey.300" :'grey.700',
            // backgroundColor: themeMode === true ? "grey.600" :'grey.200',
          },
          ...sx,
        }}
        component={component}
        scope={scope}
        align={align}
        abbr={abbr}
        about={about}
        accessKey={accessKey}
      >
        {children}
      </TableCellComponent>
    </>
  );
};

export default TableCell;
