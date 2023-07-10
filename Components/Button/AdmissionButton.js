import React from 'react'
import { Button as KMRAdmissionButton } from '@/OverViews/Button';
import {SchoolOutlined  as AdmissionIcon} from '@mui/icons-material';


const AdmissionButton = ({sx, onClick,Iconsx }) => {
  return (
    <>
    <KMRAdmissionButton 
    onClick={onClick}
    size='small' 
    sx={{ 
        fontSize: '11px', 
        width: '150px',
        ...sx
     }} 
        >
      <AdmissionIcon fontSize='small'  sx={{  mr: 1 , ...Iconsx}} />
        Admission
    </KMRAdmissionButton>
    </>
  )
}

export default AdmissionButton