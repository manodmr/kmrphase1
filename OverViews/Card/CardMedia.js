import React from 'react'
import { CardMedia as CardMediaComponent } from '@mui/material'

export const CardMedia = ({
    children,
    component,
    height,
    width,
    image,
    sx,
    alt,

}) => {
  return (
    <CardMediaComponent
        component={component}
        height={height}
        width={width}
        image={image}
        sx={{ ...sx }}
        alt={alt}
    
    >
        {children}
    </CardMediaComponent>
  )
}
