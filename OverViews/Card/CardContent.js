import React from 'react'
import { CardContent as CardContentComponent } from '@mui/material'

export const CardContent = ({
    children,
    component,
    sx,

}) => {
  return (
    <CardContentComponent
        sx={{ 
            ...sx
        }}
        component={component}
    
    >
        {children}
    </CardContentComponent>
  )
}
