import React, { useContext } from 'react'
import { Paper as PaperComponent } from '@mui/material'
import { darkLightModeContext } from '@/Layout/Layout'

export const Paper = ({
    children,
    sx,
    component,

}) => {
    const themeMode = useContext(darkLightModeContext)
  return (
    <PaperComponent
        sx={{
            bgcolor: themeMode === true ? "primary.main" : "primary.main",
            ...sx
        }}    
        component={component}

    >
        {children}
    </PaperComponent>
  )
}
