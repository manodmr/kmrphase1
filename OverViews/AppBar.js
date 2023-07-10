import React, { useContext } from 'react'
import { AppBar as AppBarComponent } from '@mui/material'
import { darkLightModeContext } from '@/Layout/Layout'

export const AppBar = ({
    children,
    sx,
    position,
    state,

}) => {
    const themeMode = useContext(darkLightModeContext)
  return (
    <AppBarComponent 
        sx={{ 
          bgcolor: themeMode === true ? "grey.700" : "grey.300",
          background: state ? 'transparent' : null ,
          boxShadow: state ? 'none' : 'inherit' ,
            ...sx
        }}
        position={position}
     >
        {children}
    </AppBarComponent>
  )
}
