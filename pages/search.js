import { Stack } from '@/OverViews/Stack'
import SearchMobile from '@/Sections/Search/SearchMobile'
import React, { useState } from 'react'
import PageNotFound from './404';

function Search() {
    const [locationContext, setLocContext] = useState({
        latitude: 0,
        longitude: 0,
      });
      const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();
    
        try {
          const results = await getGeocode({ address });
          const { lat, lng } = await getLatLng(results[0]);
          setLocContext({
            latitude: lat,
            longitude: lng,
          });
        } catch (error) {
          console.log("😱 Error: ", error);
        }
      };
  return (
    <>
    <Stack  display={{ md:'flex' , xs:'none' ,sm:'none' }} height={'100vh'} >
      <PageNotFound />
    </Stack>

    <Stack display={{ md:'none' , xs:'flex' ,sm:'flex' }} height={'100vh'} >
        <SearchMobile 
        handleSelect={handleSelect} 
        locationContext={locationContext}
        locationContextLat={locationContext.latitude}
        locationContextLon={locationContext.longitude} />
    </Stack>
    </>
  )
}

export default Search
