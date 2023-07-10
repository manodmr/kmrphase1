import React from 'react'
import { CardActions as CardActionsComponent } from '@mui/material'

export const CardActions = ({children, sx}) => {
  return (
    <CardActionsComponent 
      sx={{ ...sx }}
    >
        {children}
    </CardActionsComponent>
  )
}
