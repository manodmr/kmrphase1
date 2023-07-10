import { Card } from "@/OverViews/Card/Card";
import { CardHeader } from "@/OverViews/Card/CardHeader";
import { GridContainer } from "@/OverViews/GridContainer";
import { Stack } from "@/OverViews/Stack";
import { Avatar, CardContent, Typography } from "@mui/material";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import Iframe from "react-iframe";

const GoogleMapComponent = ({data}) => {
    const router = useRouter();

    console.log(data);
    const [jsondata, setJsondata] = useState(data[0]);
    useEffect(() => {
      // jsondata.splice(0,jsondata.length);
      // if (router.query.college) {
      setJsondata(data[0]);
      // } 
    }, [router.query.college]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY,
  });
  const latt = jsondata.map_location.split(',')?.[0];
  const lngi = jsondata.map_location.split(',')?.[1];
  console.log("VV" + latt , lngi);
  const center = useMemo(() => ({ lat: 11.127123, lng: 78.656891 }), []);
  const url = 'https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=address&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
  return (
    <Card sx={{ width:{ md:"385px" , sm:'100%'}, height:{xs:'100%'} , borderRadius:'10px' , justifyItems:'center' , mx:{sm:1 , xs:1 , md:0}}}>
      <CardHeader 
      avatar={
        <Avatar>
            <img src={ jsondata.logo} alt={ jsondata.institute_name} width='40px' />
        </Avatar>
        } 
      title={
        <>
        <Typography variant="subtitle1">
        {`${jsondata.institute_name} Map`}
        </Typography>
        </>
    } 
      sx={{ py:1 }}
      />
   
      <div className="GoogleMapComp" > 
        {/* <GridContainer sx={{ window:'300px' , height:'500px' }} > */}
        {/* {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={10}
          >
            <Marker position="10" />
          
          </GoogleMap>
        )} */}
      
       <Iframe 
        // url={`https://maps.google.com/maps?width=100%25&height=300&hl=en&q=${jsondata.district_name}-${jsondata.city_name},${jsondata.state_name}&output=embed`}
        url={`https://maps.google.com/maps?width=100%25&height=300&hl=en&q=${jsondata.institute_name}&output=embed`}
        width="100%"
        height="100%"
        id="CollegeMap"
        // className="GoogleMapComp"
        display="block"
        position="relative"
        allowFullScreen
        scrolling="yes"
        // styles={{height: "185px"}}
        />
      </div>
     
    </Card>
  );
};

export default GoogleMapComponent;
