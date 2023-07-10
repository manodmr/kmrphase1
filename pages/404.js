import Image from 'next/image';
import React, { useContext } from 'react';
import PNF from '@/public/3DImages/404.png';
import PNFDark from '@/public/3DImages/404dark.png';
import { Stack } from '@/OverViews/Stack';
import { darkLightModeContext } from '@/Layout/Layout';

const PageNotFound = () => {
  const themeMode = useContext(darkLightModeContext);
  return (
    <Stack sx={{width:'100%',height:'100%' ,justifyContent:'center' , alignItems:'center'}} >
        <Image src={themeMode === true? PNFDark :PNF} width={500} />
    </Stack>
  )
}

export default PageNotFound