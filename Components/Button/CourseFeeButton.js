import React from 'react'
import { Button as KMRCourseButton } from '@/OverViews/Button';
import {MenuBookOutlined as CoureIcon} from '@mui/icons-material';


const CourseFeeButton = ({sx, onClick,Iconsx }) => {
  return (
    <>
    <KMRCourseButton 
    onClick={onClick}
    size='small' 
    sx={{ 
        fontSize: '11px',   
        width: '150px',
        ...sx
     }} 
        >
      <CoureIcon fontSize='small'  sx={{  mr: 1 , ...Iconsx}} />
        Course FEE
    </KMRCourseButton>
    </>
  )
}

export default CourseFeeButton