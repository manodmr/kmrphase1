import { ArrowUpward } from '@mui/icons-material';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div>
     <Box 
     sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
     }}
      >
         {isVisible && (
        <Box className="top-btn" onClick={goToBtn} sx={{ bgcolor:'primary.dark' }}>
          <ArrowUpward className='top-btn--icon'  />
        </Box>
      )}

     </Box>
    </div>
  )
}

export default GoToTop