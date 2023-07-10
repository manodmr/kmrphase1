import React from 'react'
import { TableRow as TableRowComponent } from '@mui/material'
import { styled } from "@mui/material/styles";


const TableRow = ({
    children,
    sx,
}) => {

    const StyledTableRow = styled(TableRowComponent)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
  return (
    <>
    <StyledTableRow sx={{ ...sx }}>
        {children}
    </StyledTableRow>
    </>
  )
}

export default TableRow