import { CardListing } from "@/Sections/CollegeLIsting/CardListing";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { darkLightModeContext, searchContext } from "@/Layout/Layout";
import { Box } from "@/OverViews/Box";
import { Stack } from "@/OverViews/Stack";
import { GridContainer } from "@/OverViews/GridContainer";
// import BreadcrumbsFinal from "@/Components/Breadcrumbs/BreadcrumbsFinal";
import axios from "axios";
import Search from "@/Sections/Search";
import { CircularProgress, Fab } from "@mui/material";
import { FabButtonAnimate } from "@/theme/animate";
import { ArrowCircleUp, ArrowUpward } from "@mui/icons-material";
import GoToTop from "@/Components/ScrollToTop/GoToTop";
import BreadTitle from "@/Components/Breadcrumbs/BreadTitle";
import BreadcrumbsFinal from "@/Components/Breadcrumbs/BreadcrumbsFinal";
import MenuPopupState from "@/Components/Navigator/HoverMenu";
import { Loading } from "@/Components/Loading/CollegeListingLoad";
import BreadcrumbsFinalSmall from "@/Components/Breadcrumbs/BreadcrumbsFinalSmall";

const CollegeListing = (
  {
    menudata,
    collegeData,
    districtdata,
    statedata,
    streamdata,
    coursedata,
    stateValue,
    hoverdata,
    searchdata,
    citydata,
    degreedata,
    collegetypedata,
    duniadata,
    collegeCoursedata,
    filterdata,
    filtercountdata,
    collegeApi,
    placesdata,
  },
  props
) => {
  const [priceHL, setPriceHL] = useState(false);
  const [priceLH, setPriceLH] = useState(false);
  const [rating4, setRating4] = useState(false);
  const [rating3, setRating3] = useState(false);
  const [rating1, setRating1] = useState(false);
  const name = useRouter().query.collegelist;
  // console.log(stateValue);
  const handleone = () => {
    setRating1(true);
  };
  const handleTwo = () => {
    setRating3(true);
  };
  const handleThree = () => {
    setRating4(true);
  };

  const handleClick = () => {
    setPriceHL(true);
  };
  const handleClick1 = () => {
    setPriceLH(true);
  };
  // const { loading = false } = props;
  // console.log(collegeData);
  const themeMode = useContext(darkLightModeContext);
  const router = useRouter();
  // console.log(router.query.collegelist);

  const [idRouter, setIdRouter] = useState();
  const [menubedegree, setMenubedegree] = useState(menudata);

  const routerClick = (event) => {
    setIdRouter(menubedegree[0].id);
  };

  // console.log(placesdata);
  const breadPreName = useRouter().query.collegelist;
  const [currentLocation, setCurrentLocation] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  // ----------------------------------------------
  // const [locLatLng, setLocLatLng] = useState([{
  //   latitude :null,
  //   longitude: null,
  // }]);
  // const [nearByState, setNearByState] = useState(50);
  //  Kilometers to miles Convertion
  //   const NearLocation = nearByState / 1.609344;
  //    console.log(NearLocation)
  //   // ----------------Get current location lat and lng
  //   useEffect(() => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition((position) => {
  //         var lat = position.coords.latitude;
  //         var lng = position.coords.longitude;
  //         return setCurrentLocation({
  //           latitude: lat,
  //           longitude: lng,
  //         });
  //       });
  //     }
  //   }, [locLatLng]);

  //    console.log("LATLNG" + currentLocation.latitude + currentLocation.longitude)

  //   useEffect(() => {
  //     if (currentLocation.latitude != undefined) {
  //       axios
  //         .get(
  //           `https://w.kalvimalar.com/colleges?latId=${currentLocation.latitude}&longId=${currentLocation.longitude}&distanceId=${NearLocation}`
  //         )
  //         .then(function (response) {
  //           // alert();
  //           setSearchApiData(response.data.data);
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  //     }
  //   }, [currentLocation, nearByState]);

  //  console.log("UNIVER" + locLatLng.latitude)

  //  searchApiData.map((e) => {
  //   console.log("UNIVER_1" + e.institute_name)
  //  })
  //  const [show ,setShow] = useState(false);
  //  const handleScroll = (e) => {
  //   if(window.pageYOffset > e.target.scrollY) {
  //     setShow(true)
  //   }else{
  //     setShow(false)
  //   }
  //  }

  //  const handleScrollClick = () => {
  //   window['scrollTo']({ top:0, behavior:'smooth'})
  //  }

  //  useEffect(() => {
  //   if(window.scrollY){
  //     window.addEventListener('scroll' , handleScroll)
  //     return ()=> window.removeEventListener('scroll' , handleScroll)
  //   }
  //  })
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url, { shallow }) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url, { shallow }) => {
    setLoading(false);
  });
  return (
    <>
      <Head>
        <title>{breadPreName} Colleges</title>
        <meta name="description" content="Educational News" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
      <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            boxShadow: 'none', border:'0',
          }}
        >
         <BreadcrumbsFinalSmall/>
        </Stack>
          <Stack
            sx={{
              justifyContent: "center",
              width: "100vw",
              height: "100%",
            }}
          >
            <GridContainer>
              <CardListing
                Price1={priceHL}
                Price2={priceLH}
                condition={rating4}
                condition1={rating3}
                condition2={rating1}
                districtdatas={districtdata}
                statedatas={statedata}
                streamdatas={streamdata}
                coursedatas={coursedata}
                degreename={name}
                menudatas={menudata}
                collegeDatas={collegeData}
                // collegeDatas={searchApiData}
                citydatas={citydata}
                collegetypedatas={collegetypedata}
                degreedatas={degreedata}
                collegeCourse={collegeCoursedata}
                filtercountdatas={filtercountdata}
                filterdatas={filterdata}
                collegeApi={collegeApi}
                placesdata={placesdata}
                // NearValue={nearByState}
                // setNearByState={setNearByState}
              />
            </GridContainer>
          </Stack>
        
      </main>
    </>
  );
};

export default CollegeListing;

export async function getServerSideProps(context) {
  let name = context.query.collegelist;
  let paramCourseId = context.query.courseId;
  let paramStateName = context.query.stateName;
  // console.log(context.query.districtId);

  const id =
    name == "BE"
      ? 1
      : name === "B.Tech"
      ? 2
      : name === "MBA"
      ? 6
      : name === "ME"
      ? 5
      : name === "MBBS"
      ? 36
      : name === "M.Tech"
      ? 3
      : null;

  const pathname = context.resolvedUrl.split("?")?.[0];
  const DynamicPath = context.resolvedUrl.replace(pathname, "");
  const getstreamvalue = context.query.streamId || "";
  const getdistrictvalue = context.query.districtId || "";
  const getdegreevalue = context.query.degreeId || "";
  const getcollegetypevalue = context.query.collegetypeId || "";

  // console.log("context", getstreamvalue, getdegreevalue);

  try {
    let districtData = await fetch("https://w.kalvimalar.com/district");
    let cityData = await fetch("https://w.kalvimalar.com/city");
    let degreeData = await fetch("https://w.kalvimalar.com/degrees");
    let stateData = await fetch("https://w.kalvimalar.com/state");
    // let collegeData = await fetch(
    //   `https://w.kalvimalar.com/colleges?latId=${curLocation.latitude}&longId=${curLocation.longitude}&distanceId=${NearLocation}`
    // );
    let collegeData = await fetch("https://w.kalvimalar.com/colleges");
    let collegeCourseData = await fetch(
      `https://w.kalvimalar.com/colleges?degreeId=${id}&stateName=${paramStateName}&courseId=${paramCourseId}`
    );
    let streamData = await fetch("https://w.kalvimalar.com/streams");
    let courseData = await fetch("https://w.kalvimalar.com/courses");
    let collegeTypeData = await fetch("https://w.kalvimalar.com/collegetypes");
    let menudata = await fetch("https://w.kalvimalar.com/menu");
    let collegeDunia = await fetch(
      "https://w.kalvimalar.com/phpmyadmin/soft/CollegeDunia.json"
    );
    let hoverdata = await fetch(
      `https://w.kalvimalar.com/colleges?degreeId=${id}`
    );
    let searchdata = await fetch(
      "https://w.kalvimalar.com/search?searchValues=madurai"
    );

    // For displaying count number for listing colleges...
    let fetchcountdata = await fetch(
      `https://w.kalvimalar.com/districtcity?streamId=${getstreamvalue}&districtId=${getdistrictvalue}&degreeId=${getdegreevalue}&collegetypeId=${getcollegetypevalue}`
    );
    let placesdata = await fetch(
      `https://w.kalvimalar.com/places`
    );

    // For Overall Filtering data from using this API...
    let fetchfilterdata = await fetch(
      `https://w.kalvimalar.com/colleges${decodeURIComponent(
        DynamicPath
      ).replace(/_/g, ",")}`
    );

    let responseDistrict = await districtData.json();
    let responseState = await stateData.json();
    let responseCollege = await collegeData.json();
    let responseStream = await streamData.json();
    let responseCourse = await courseData.json();
    let responseMenu = await menudata.json();
    let responseHover = await hoverdata.json();
    // let responseSearch = await searchdata.json();
    let responseCity = await cityData.json();
    let responseCollegeType = await collegeTypeData.json();
    let responseDegree = await degreeData.json();
    let responseDunia = await collegeDunia.json();
    let responseCollegeCourse = await collegeCourseData.json();

    let responsecountfilterdata = await fetchcountdata.json();
    let responsefilterdata = await fetchfilterdata.json();
    let responseplacesdata = await placesdata.json();

    // console.log(
    //   "res",
    //   `https://w.kalvimalar.com/districtcity?streamId=${getstreamvalue}&districtId=${getdistrictvalue}&degreeId=${getdegreevalue}&collegetypeId=${getcollegetypevalue}`
    // );

    //  responseDegree.data.map((e) => {
    //   console.log("NEWDEG : " + e.degree_name);
    //  })
    
    return {
      props: {
        districtdata: responseDistrict || null,
        statedata: responseState.data,
        collegeData: responseCollege.data,
        streamdata: responseStream || null,
        coursedata: responseCourse || null,
        menudata: responseMenu.data,
        hoverdata: responseHover.data,
        citydata: responseCity || null,
        degreedata: responseDegree || null,
        collegetypedata: responseCollegeType.data,
        collegeCoursedata: responseCollegeCourse.data,
        duniadata: responseDunia.output,
        filtercountdata: responsecountfilterdata,
        filterdata: responsefilterdata.data,
        collegeApi: process.env.API_COLLEGES,
        placesdata : responseplacesdata.data,
      },
    };
  } catch {
    console.log("something error");
  }
}
