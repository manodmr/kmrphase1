import { MotionViewport, varFade } from "@/theme/animate";
import { m } from "framer-motion";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Chip,
  SwipeableDrawer,
  Divider,
  Skeleton,
  Typography,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  FormGroup,
  FormControlLabel,
  Grid,
  CircularProgress,
  Alert,
  AlertTitle,
  RadioGroup,
  FormControl,
  FormLabel,
  Radio,
} from "@mui/material";
import Card2 from "@/Components/Card/Card2";
// import DesktopFilter from "@/Components/Filter/DesktopFilter";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DNF from'@/public/3DImages/DNF.png';
// import { Card } from "@mui/material";
import {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import PriceSort from "@/Components/Filter/PriceSort";
import { darkLightModeContext, latlangContext, searchContext } from "@/Layout/Layout";
import CardComponentFour from "@/Components/Card/Card4";
// ---JSON
import { BiDownArrow, BiDownArrowAlt, BiFilter, BiSort } from "react-icons/bi";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import AllFilters from "@/Components/Filter/Mobilefilters/AllFilters";
import { GridContainer } from "@/OverViews/GridContainer";
import { GridItem } from "@/OverViews/GridItem";
import { Stack } from "@/OverViews/Stack";
import DesktopAllFilters from "@/Components/Filter/Desktopfilters/AllFilters";
import axios from "axios";
import TopFilter from "../TopFilter/TopFilter";
import { CollegeListingLoad } from "@/Components/Loading/CollegeListingLoad";
import { Paper } from "@/OverViews/Paper";
import Image from "next/image";
import { ArrowDownwardSharp } from "@mui/icons-material";
import { IoThumbsDownSharp } from "react-icons/io5";

// import City from "@/Components/data/City";

export const CardListing = (
  {
    collegeDatas,
    districtdatas,
    statedatas,
    coursedatas,
    menudatas,
    citydatas,
    streamdatas,
    degreedatas,
    collegetypedatas,
    collegeCourse,
    filterdatas,
    filtercountdatas,
    allcolleges,
    collegeApi,
    placesdata,
  },
  props
) => {
  let [locchbxvalue, setLocChbxvalue] = useState([]);
  const [priceHL, setPriceHL] = useState(false);
  const [priceLH, setPriceLH] = useState(false);
  const [rate4to5, setRate4to5] = useState(false);
  const [rate3to4, setRate3to4] = useState(false);
  const [ratebellow3, setRateBellow3] = useState(false);
  // const [isChecked, setIschecked] = useState(false);
  let [uncheck, setUncheck] = useState();
  // -------------------searchState
  const searchcollege = useContext(searchContext);
  const latlngValue = useContext(latlangContext);
  // console.log(latlngValue);
  // ------------------
  const refEx = useRef("");
  // console.log(collegeApi);
  // const { loading = false } = props;
  const router = useRouter();
  const [streamcheck, setStreamcheck] = useState(false);
  const [degreecheck, setDegreecheck] = useState(false);
  // Slider filter
  // const COLLEGES_API = process.env.NEXT_PUBLIC_COLLEGES;
  const COLLEGES_API = collegeApi;
  const [currentLocation, setCurrentLocation] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  const name1 = router.query.collegelist;
  const stateName = useRouter().query.stateName;
  const themeMode = useContext(darkLightModeContext);
  const [posts1, setPosts1] = useState([]);
  const [relposts1, setRelPosts1] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [scroll, setScroll] = useState(0);
  const [progress, setProgress] = useState(0);
  const [menuDID, setMenuDID] = useState(0);
  const [menuSID, setMenuSID] = useState(0);
  const [courseID, setCourseID] = useState(0);
  const [courseMenuIteam, setCourseMenuIteam] = useState("");
  const pathname = router.asPath.split("?")?.[0];
  const [streamsid, setStreamsid] = useState([]);
  const [menuname, setMenuname] = useState("");
  const [streamname, setStreamname] = useState("");
  const [streamview, setStreamview] = useState("");
  const [sortId, setSortId] = useState();
  const [sortRatingHigh, setSortRatingHigh] = useState(false);
  const [sortRatingLow, setSortRatingLow] = useState(false);
  const [sortPopular, setSortPopular] = useState(false);
  const [sortFeeHigh, setSortFeeHigh] = useState(false);
  const [sortFeeLow, setSortFeeLow] = useState(false);
  const [searchDistrict, setSearchDistrict ] = useState();
  const [mobilefilteroptions, setMobilefilteroptions] = useState([]);
  const [clickfilter, setClickfilter] = useState(false);
  const [districtcheck, setDistrictcheck] = useState(
    new Array(districtdatas.length).fill(false)
  );
  const [conditionstate, setConditionstate] = useState([]);
  const DynamicPath = router.asPath.replace(pathname, "");
  const pathAlter = DynamicPath.split(`?course=${router.query.course}`)
    .toString()
    .replace(",", "");
  const defaultPath = pathAlter.split("tamilnadu-colleges");
  const [activeDeg, setActiveDeg] = useState(false);
  const [activeStr, setActiveStr] = useState(false);
  const [allcityinputsid, setAllcityinputsid] = useState([]);
  const [alldistrictinputsid, setAlldistrictinputsid] = useState([]);
  const [districtBread, setDistrictBread] = useState();
  const CollegesAPI = process.env.NEXT_PUBLIC_COLLEGES;
  const DistrictCityAPI = process.env.NEXT_PUBLIC_DistrictCity;
  // console.log("dd" + DynamicPath);
  const [filteroptions, setFilteroptions] = useState([]);
  const [ totalcards, setTotalcards] = useState();
  let [clickcount, setClickcount] = useState(0);
  const [coursecheck, setCoursecheck] = useState(new Array(coursedatas.length).fill(false));
  const [courseid, setCourseid] = useState([]);
  const [coursename, setCoursename] = useState("");
  const [indexonecourse, setIndexonecourse] = useState([]);



  // console.log(districtBread, searchDistrict);

  useEffect(() => {
    setMenuname(router.query.collegelist.replace(/_/g, " ").replace("and", "&"));
  }, [router.query.collegelist]);

  useEffect(() => {
    if (router.query.course) {
      setCourseMenuIteam(router.query.course.replace(/-/g, " "));
      setPageNum(1);
    }
  }, [router.query.course]);

  console.log(menuname);
// -------------Degree Menu from Param
  useEffect(() => {
    if (menuname === "tamilnadu-colleges") {
      setActiveDeg(false);
      setActiveStr(false);
      setPageNum(1);
    }
    degreedatas.map((e) => {
      if (e.name === menuname) {
        setActiveDeg(true);
        setActiveStr(false);
        setPageNum(1);
        if (e.name != menuname) {
          setActiveDeg(false);
        }
        return setMenuDID(e.id);
      }
    });
  }, [
    router.query.collegelist, 
    degreecheck,
    menuname,
    sortRatingHigh,
    sortRatingLow,
    sortPopular,
    sortFeeHigh,
    sortFeeLow,
  ]);
// -------------Stream Menu from Param
  useEffect(() => {
    setPageNum(1);
    if (menuname === "tamilnadu-colleges") {
      setActiveDeg(false);
      setActiveStr(false);
      setPageNum(1);
    }
    streamdatas.map((e) => {
      if (e.name.toLowerCase() === menuname.toLowerCase()) {
        // console.log(e.id);
        setActiveStr(true);
        setActiveDeg(false);
        setPageNum(1);
        setMenuSID(e.id);
        if (e.name != menuname) {
          setActiveStr(false);
        }
      }
    });
  }, [
    router.query.collegelist,
    menuname,
    streamcheck, 
    sortRatingHigh,
    sortRatingLow,
    sortPopular,
    sortFeeHigh,
    sortFeeLow,
  ]);
// ------------- Course Id from Param
  useEffect(() => {
    coursedatas.map((e) => {
      if (e.course_name === courseMenuIteam) {
        if (e.degreeid === menuDID) {
          return setCourseID(e.id);
        }
      }
    });
  }, [
    courseMenuIteam, 
    coursecheck,
    router.query.course,
    sortRatingHigh,
    sortRatingLow,
    sortPopular,
    sortFeeHigh,
    sortFeeLow,
  ]);
// ------------- District Id from Param
useEffect(() => {
  districtdatas.map((e)=> {
    if(router.query.collegelist.toLowerCase().replace(/-colleges/g,"") == e.english_name.toString().toLowerCase() ){
      setSearchDistrict(e.id);
      setDistrictBread(e.english_name.toString().toLowerCase());
      setActiveStr(false);
      setActiveDeg(false);
    }
  })
},[
  router.query.collegelist,
  sortRatingHigh,
  sortRatingLow,
  sortPopular,
  sortFeeHigh,
  sortFeeLow,
]);

// -----------------All Set For Checking Filter Sections
useEffect(() => {
  if(districtBread != undefined){
    setAlldistrictinputsid((a) => [searchDistrict]);
  }
  if(activeStr === true){
    setAlldistrictinputsid([]);
    setAllcityinputsid([]);
    router.query.districtId = null;
    router.query.cityId = null;
  }
  if(activeDeg == true){
    // setStreamsid((s) => [s, menuSID]);
    setAlldistrictinputsid([]);
    setAllcityinputsid([]);
    router.query.districtId = null;
    router.query.cityId = null;
    // setDegreeid((d) => [d, menuDID]);
  }
  if(router.asPath == "/tamilnadu-colleges"){
    setAlldistrictinputsid([]);
    setAllcityinputsid([]);
    router.query.districtId = null;
    router.query.cityId = null;
  }
},[
  districtBread , 
  router.query.collegelist,
  activeDeg , 
  activeStr,
 ])

  console.log(activeDeg , activeStr , new Date() , menuname , menuDID , menuSID , streamsid , searchDistrict)
  const[callCity, setCallCity] = useState();
  const[callArea, setCallArea] = useState();
  var [showValDis, setShowValDis] = useState([]);
  var [showValCity, setShowValCity] = useState([]);

  useEffect(()=>{
   
    if(latlngValue.latitude != undefined){
      placesdata.map((place) => {
        const lat = place.latlong.split(',')?.[0]
        const lng = place.latlong.split(',')?.[1]

        if(latlngValue.latitude === lat || latlngValue.longitude === lng){
           setCallCity(place.district);
           setCallArea(place.city);
          }
         })

      if( callCity != undefined ){
        router.query.collegelist && !router.query.course ?
      router.push(`/${router.query.collegelist}?districtId=${callCity}&cityId=${callArea}`)
      : router.query.collegelist && router.query.course ?
      router.push(`/${router.query.collegelist}?course= ${router.query.course}&districtId=${callCity}&cityId=${callArea}`)
      :null
      } 
    }
    // console.log("check " + callCity, callArea , alldistrictinputsid, allcityinputsid, );
  },[callCity, latlngValue , latlngValue.latitude, callArea]);

  // -------------------------------------------------
  const [locLatLng, setLocLatLng] = useState([
    {
      latitude: null,
      longitude: null,
    },
  ]);
  const [nearByState, setNearByState] = useState(1000);

  //  Kilometers to miles Convertion
  // const NearLocation = 1000;
  const NearLocation = nearByState / 1.609344;

  // console.log("path" + DynamicPath);

  // ----------------Get current location lat and lng
  // useEffect(() => {
  //   if (navigator.geolocation || navigator.permissions) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       var lat = position.coords.latitude;
  //       var lng = position.coords.longitude;
  //       return setCurrentLocation({
  //         latitude: lat,
  //         longitude: lng,
  //       });
  //     });
  //   }
  // }, [locLatLng]);

  // Onscroll functions --------------------------------------------------------------------

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight - 500
    ) {
      if (menuDID || menuSID || (menuDID && courseID)) {
        setPageNum(1);
        if (posts1.length >= 15) {
          setPageNum(pageNum + 1);
        } else {
          setPageNum(pageNum);
        }
      }
      if (posts1.length >= 15) {
        setPageNum(pageNum + 1);
      } else {
        setPageNum(pageNum);
      }
      console.log("Changed ");
    }
  };

  const CourseParam = router.query.courseName;
  // console.log("CP : " + router.asPath.split("?")?.[1]);
  // console.log("CP1 : " + router.asPath);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [posts1, pageNum, pathAlter, DynamicPath]);

  console.log(
    router.query.collegelist.toLowerCase().replace(/-colleges/g,"") == districtBread &&
    !router.query.course &&
    activeDeg === false &&
    activeStr === false &&
    sortRatingLow === false &&
    sortPopular === false &&
    sortFeeHigh === false &&
    sortRatingHigh === false &&
    sortFeeLow === false 
     ? // &&
        // sortPopular === true
    `${CollegesAPI}?districtId=${searchDistrict}${decodeURIComponent(pathAlter.replace(/[?]/g,"&")).replace(
    /_/g,
    ","
    )}&page=${pageNum}`  
    : 
    router.query.collegelist.toLowerCase().replace(/-colleges/g,"") == districtBread &&
    !router.query.course &&
    activeDeg === false &&
    activeStr === false &&
    sortPopular === true 
     ? // &&
        // sortPopular === true
    `${CollegesAPI}?districtId=${searchDistrict}&sort=ranking${decodeURIComponent(pathAlter.replace(/[?]/g,"&")).replace(
    /_/g,
    ","
    )}&page=${pageNum}` 
    : 
    router.query.collegelist.toLowerCase().replace(/-colleges/g,"") == districtBread &&
    !router.query.course &&
    activeDeg === false &&
    activeStr === false &&
    sortRatingHigh === true 
     ? // &&
        // sortPopular === true
    `${CollegesAPI}?districtId=${searchDistrict}&sort=rating${decodeURIComponent(pathAlter.replace(/[?]/g,"&")).replace(
    /_/g,
    ","
    )}&page=${pageNum}` 
    : 
    router.query.collegelist.toLowerCase().replace(/-colleges/g,"") == districtBread &&
    !router.query.course &&
    activeDeg === false &&
    activeStr === false &&
    sortRatingLow === true 
     ? // &&
        // sortPopular === true
    `${CollegesAPI}?districtId=${searchDistrict}&sort=rating&sortOrder=ASC${decodeURIComponent(pathAlter.replace(/[?]/g,"&")).replace(
    /_/g,
    ","
    )}&page=${pageNum}` 
    : 
    menuname == "tamilnadu-colleges" &&
    activeDeg === false &&
    activeStr === false &&
    sortRatingLow === false &&
    sortPopular === false &&
    sortFeeHigh === false &&
    sortRatingHigh === false &&
    sortFeeLow === false 
     ? // &&
    // sortPopular === true
    `${CollegesAPI}?page=${pageNum}${decodeURIComponent(pathAlter.replace(/[?]/g,"&")).replace(/_/g,"," )}`
    : 
    menuname == "tamilnadu-colleges" &&
    activeDeg === false &&
    activeStr === false &&
    sortPopular === true 
     ? // &&
    // sortPopular === true
    `${CollegesAPI}?page=${pageNum}&sort=raking${decodeURIComponent(pathAlter.replace(/[?]/g,"&")).replace(/_/g,"," )}`
    : 
    menuname == "tamilnadu-colleges" &&
    activeDeg === false &&
    activeStr === false &&
    sortRatingHigh === true 
     ? // &&
    // sortPopular === true
    `${CollegesAPI}?page=${pageNum}&sort=rating${decodeURIComponent(pathAlter.replace(/[?]/g,"&")).replace(/_/g,"," )}`
    : 
    menuname == "tamilnadu-colleges" &&
    activeDeg === false &&
    activeStr === false &&
    sortRatingLow === true 
     ? // &&
    // sortPopular === true
    `${CollegesAPI}?page=${pageNum}&sort=rating&sortOrder=ASC${decodeURIComponent(pathAlter.replace(/[?]/g,"&")).replace(/_/g,"," )}`
    : 
    `${CollegesAPI}?page=${pageNum}`
  );

  // -----------------Colleges List
  // console.log( 
  //   router.query.collegelist.toLowerCase().replace(/-colleges/g,"") == districtBread &&
  //   !router.query.course
  // ? // &&
  //   // sortPopular === true
  //   `${CollegesAPI}?districtId=${searchDistrict}${decodeURIComponent(pathAlter.replace(/[?]/g,"&")).replace(
  //     /_/g,
  //     ","
  //   )}&page=${pageNum}` : null);

  useEffect(() => {
    if (streamsid != null || menuDID != 0 || pageNum != 0 || menuSID != 0 || districtBread != undefined || router.query.collegelist == "tamilnadu-colleges") {
      axios
        .get(
          router.query.collegelist &&
            !router.query.course &&
            activeDeg === true &&
            activeStr === false &&
            sortRatingHigh === false &&
            sortRatingLow === false &&
            sortPopular === false
            ? `${COLLEGES_API}?streamId=${streamsid}&degreeId=${menuDID}${decodeURIComponent(
                DynamicPath.replace(/[?]/g, "&")
              ).replace(/_/g, ",")}&page=${pageNum}`
            : router.query.collegelist &&
              !router.query.course &&
              activeDeg === true &&
              activeStr === false &&
              sortRatingHigh === true
            ? `${COLLEGES_API}?streamId=${streamsid}&degreeId=${menuDID}&sort=rating${decodeURIComponent(
                DynamicPath.replace(/[?]/g, "&")
              ).replace(/_/g, ",")}&page=${pageNum}`
            : router.query.collegelist &&
              !router.query.course &&
              activeDeg === true &&
              activeStr === false &&
              sortRatingLow === true
            ? `${COLLEGES_API}?streamId=${streamsid}&degreeId=${menuDID}&sort=rating&sortOrder=ASC${decodeURIComponent(
                DynamicPath.replace(/[?]/g, "&")
              ).replace(/_/g, ",")}&page=${pageNum}`
            : router.query.collegelist &&
              !router.query.course &&
              activeDeg === true &&
              activeStr === false &&
              sortPopular === true
            ? `${COLLEGES_API}?streamId=${streamsid}&degreeId=${menuDID}&sort=ranking${decodeURIComponent(
                DynamicPath.replace(/[?]/g, "&")
              ).replace(/_/g, ",")}&page=${pageNum}`
            : router.query.collegelist &&
              !router.query.course &&
              activeDeg === false &&
              activeStr === true &&
              sortRatingHigh === false &&
              sortRatingLow === false &&
              sortPopular === false
            ? `${COLLEGES_API}?streamId=${menuSID}${decodeURIComponent(
                DynamicPath.replace(/[?]/g, "&")
              ).replace(/_/g, ",")}&page=${pageNum}`
            : router.query.collegelist &&
              !router.query.course &&
              activeDeg === false &&
              activeStr === true &&
              sortRatingHigh === true
            ? `${COLLEGES_API}?streamId=${menuSID}&sort=rating${decodeURIComponent(
                DynamicPath.replace(/[?]/g, "&")
              ).replace(/_/g, ",")}&page=${pageNum}`
            : router.query.collegelist &&
              !router.query.course &&
              activeDeg === false &&
              activeStr === true &&
              sortRatingLow === true
            ? `${COLLEGES_API}?streamId=${menuSID}&sort=rating&sortOrder=ASC${decodeURIComponent(
                DynamicPath.replace(/[?]/g, "&")
              ).replace(/_/g, ",")}&page=${pageNum}`
            : router.query.collegelist &&
              !router.query.course &&
              activeDeg === false &&
              activeStr === true &&
              sortPopular === true
            ? `${COLLEGES_API}?streamId=${menuSID}&sort=ranking${decodeURIComponent(
                DynamicPath.replace(/[?]/g, "&")
              ).replace(/_/g, ",")}&page=${pageNum}`
            : 
            router.query.collegelist &&
              router.query.course &&
              sortRatingHigh === false &&
              sortRatingLow === false &&
              sortPopular === false &&
              sortFeeHigh === false &&
              sortFeeLow === false
            ? `${CollegesAPI}?streamId=${streamsid}&degreeId=${menuDID}&courseId=${courseID}${decodeURIComponent(
                pathAlter
              ).replace(/_/g, ",")}&page=${pageNum}`
            : router.query.collegelist &&
              router.query.course &&
              sortRatingHigh === true
            ? `${CollegesAPI}?streamId=${streamsid}&degreeId=${menuDID}&courseId=${courseID}&sort=rating${decodeURIComponent(
                pathAlter
              ).replace(/_/g, ",")}&page=${pageNum}`
            : 
            router.query.collegelist &&
              router.query.course &&
              sortRatingLow === true
            ? `${CollegesAPI}?streamId=${streamsid}&degreeId=${menuDID}&courseId=${courseID}&sort=rating&sortOrder=ASC${decodeURIComponent(
                pathAlter
              ).replace(/_/g, ",")}&page=${pageNum}`
            :
            router.query.collegelist &&
              router.query.course &&
              sortFeeLow === true
            ? `${CollegesAPI}?streamId=${streamsid}&degreeId=${menuDID}&courseId=${courseID}&sort=Fees&sortOrder=asc${decodeURIComponent(
                pathAlter
              ).replace(/_/g, ",")}&page=${pageNum}`
            :
            router.query.collegelist &&
              router.query.course &&
              sortFeeHigh === true
            ? `${CollegesAPI}?streamId=${streamsid}&degreeId=${menuDID}&courseId=${courseID}&sort=Fees&sortOrder=desc${decodeURIComponent(
                pathAlter
              ).replace(/_/g, ",")}&page=${pageNum}`
            :
            router.query.collegelist &&
              router.query.course &&
              sortPopular === true
            ? `${CollegesAPI}?streamId=${streamsid}&degreeId=${menuDID}&courseId=${courseID}&sort=ranking${decodeURIComponent(
                pathAlter
              ).replace(/_/g, ",")}&page=${pageNum}`
            :
            
            router.query.collegelist.toLowerCase().replace(/-colleges/g,"") == districtBread &&
            !router.query.course &&
            activeDeg === false &&
            activeStr === false &&
            sortRatingLow === false &&
            sortPopular === false &&
            sortFeeHigh === false &&
            sortRatingHigh === false &&
            sortFeeLow === false 
             ? // &&
                // sortPopular === true
            `${CollegesAPI}?districtId=${searchDistrict}${decodeURIComponent(pathAlter.replace(/[?]/g,"&")).replace(
            /_/g,
            ","
            )}&page=${pageNum}`  
            : 
            router.query.collegelist.toLowerCase().replace(/-colleges/g,"") == districtBread &&
            !router.query.course &&
            activeDeg === false &&
            activeStr === false &&
            sortPopular === true 
             ? // &&
                // sortPopular === true
            `${CollegesAPI}?districtId=${searchDistrict}&sort=ranking${decodeURIComponent(pathAlter.replace(/[?]/g,"&")).replace(
            /_/g,
            ","
            )}&page=${pageNum}` 
            : 
            router.query.collegelist.toLowerCase().replace(/-colleges/g,"") == districtBread &&
            !router.query.course &&
            activeDeg === false &&
            activeStr === false &&
            sortRatingHigh === true 
             ? // &&
                // sortPopular === true
            `${CollegesAPI}?districtId=${searchDistrict}&sort=rating${decodeURIComponent(pathAlter.replace(/[?]/g,"&")).replace(
            /_/g,
            ","
            )}&page=${pageNum}` 
            : 
            router.query.collegelist.toLowerCase().replace(/-colleges/g,"") == districtBread &&
            !router.query.course &&
            activeDeg === false &&
            activeStr === false &&
            sortRatingLow === true 
             ? // &&
                // sortPopular === true
            `${CollegesAPI}?districtId=${searchDistrict}&sort=rating&sortOrder=ASC${decodeURIComponent(pathAlter.replace(/[?]/g,"&")).replace(
            /_/g,
            ","
            )}&page=${pageNum}` 
            : 
            menuname == "tamilnadu-colleges" &&
            activeDeg === false &&
            activeStr === false &&
            sortRatingLow === false &&
            sortPopular === false &&
            sortFeeHigh === false &&
            sortRatingHigh === false &&
            sortFeeLow === false 
             ? // &&
            // sortPopular === true
            `${CollegesAPI}?page=${pageNum}${decodeURIComponent(pathAlter.replace(/[?]/g,"&")).replace(/_/g,"," )}`
            : 
            menuname == "tamilnadu-colleges" &&
            activeDeg === false &&
            activeStr === false &&
            sortPopular === true 
             ? // &&
            // sortPopular === true
            `${CollegesAPI}?page=${pageNum}&sort=raking${decodeURIComponent(pathAlter.replace(/[?]/g,"&")).replace(/_/g,"," )}`
            : 
            menuname == "tamilnadu-colleges" &&
            activeDeg === false &&
            activeStr === false &&
            sortRatingHigh === true 
             ? // &&
            // sortPopular === true
            `${CollegesAPI}?page=${pageNum}&sort=rating${decodeURIComponent(pathAlter.replace(/[?]/g,"&")).replace(/_/g,"," )}`
            : 
            menuname == "tamilnadu-colleges" &&
            activeDeg === false &&
            activeStr === false &&
            sortRatingLow === true 
             ? // &&
            // sortPopular === true
            `${CollegesAPI}?page=${pageNum}&sort=rating&sortOrder=ASC${decodeURIComponent(pathAlter.replace(/[?]/g,"&")).replace(/_/g,"," )}`
            : 
            `${CollegesAPI}?page=${pageNum}`
        )
        .then(function (response) {
          // alert();
          // setSearchLocData1(response.data.data);
          if (
            DynamicPath ||
            (router.query.collegelist && !router.query.course) ||
            (router.query.collegelist && router.query.course)
          ) {
            // posts1.splice(0, posts1.length);
            if (posts1 != response.data.data) {
              if (pageNum != 1) {
                setPosts1((post) => [...post, ...response.data.data]);
                setTotalcards(response.data.total);
              } else if (pageNum === 1) {
                setPosts1(() => [...response.data.data]);
                setTotalcards(response.data.total);
              }
            }
          } else if (
            !DynamicPath ||
            (router.query.collegelist &&
              !router.query.course &&
              activeDeg === false &&
              activeStr === false)
          ) {
            if (posts1 != response.data.data) {
              if (pageNum != 1) {
                setPosts1((post) => [...post, ...response.data.data]);
                setTotalcards(response.data.total);
              } else if (pageNum === 1) {
                setPosts1(() => [...response.data.data]);
                setTotalcards(response.data.total);
              }
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [
    pathAlter,
    activeStr,
    activeDeg,
    menuDID,
    menuSID,
    courseID,
    router.query.collegelist,
    districtBread,
    searchDistrict,
    router.query.collegelist && router.query.course,
    router.query.collegelist && !router.query.course && activeStr === true,
    router.query.collegelist && !router.query.course && activeDeg === true,
    router.asPath,
    // currentLocation.latitude,
    pageNum,
    nearByState,
    DynamicPath,
    sortPopular,
    sortRatingHigh,
    sortRatingLow,
    sortFeeHigh,
    sortFeeLow,
    
  ]);

  useEffect(() => {
    if (posts1.length === 0) {
      axios.get(`${CollegesAPI}?page=${pageNum}`).then(function (response) {
        setRelPosts1(response.data.data);
      });
    }
  }, [posts1.length === 0]);
 
  console.log( menuname == "tamilnadu-colleges" ? // &&
  // sortPopular === true
  `${CollegesAPI}?page=${pageNum}${decodeURIComponent(pathAlter.replace(/[?]/g,"&")).replace(/_/g,"," )}`
  : null , menuname )
  
  /// Menu Fetching Data

  const [menudata, setMenudata] = useState([]);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  // console.log("STR : " + activeStr);
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  const TabHandleChangeLeft = (event, sortvalue) => {
    setValueSort(sortvalue);
  };

  // <----------------------------Filter ------------------------->

  const [allchbxvalues, setAllchbxvalues] = useState([]);

  // const [isChecked, setIschecked] = useState(
  //   new Array(statedatas.length).fill(false)
  // );

  const [isChecked2, setIschecked2] = useState(
    new Array(citydatas.length).fill(false)
  );

  const [right, setRight] = useState(false);
  const [values, setValues] = useState(0);

  const toggleDrawer = (right) => (event) => {
    setRight(right);
  };

  const toggleDrawerLeft = (left) => (event) => {
    setLeft(left);
  };

  const [left, setLeft] = useState(false);
  const [filteredstatedata, setFilteredstatedata] = useState([]);
  const [stateid, setStateid] = useState();
  const [totalcountchbx, setTotalcountchbx] = useState(0);

  // Stream handle function
  const streamhandlechange = (e, index) => {
    let getname = e.target.name;
    let getcheck = e.target.checked;
    let getid = e.target.id;
    let getvalue = e.target.value;

    // console.log(getvalue, getname);
    setStreamname(getvalue);
    setStreamcheck(getcheck);
    setStreamview(getname);
    setStreamsid(getid);

    let decodegetvalue = decodeURIComponent(getvalue).replace(/[ ]/g, "_");
    // console.log(decodegetvalue);

    if (getname === "desktop") {
      router.push(
        `/${decodeURIComponent(getvalue)
          .replace(/[ ]/g, "_")
          .replace(/[&]/g, "and")}`
      );
    }

    if (e.target.checked) {
      setTotalcountchbx(totalcountchbx + 1);
      // console.log(getvalue, streamname);
      if (getvalue != streamname) {
        setAlldistrictinputsid([]);
        setAllcityinputsid([]);
        setDistrictcheck(new Array(districtdatas.length).fill(false));
        setIschecked2(new Array(citydatas.length).fill(false));
        // delete router.query.districtId;
        // delete router.query.cityId;
        // router.push(router);
      }
    } else {
      setTotalcountchbx(totalcountchbx - 1);
    }
  };

  //Degree handle function
  const [degreeid, setDegreeid] = useState([]);
  const [degreename, setDegreename] = useState("");
  const [degreevalue, setDegreevalue] = useState("");
  let [degreeview, setDegreeview] = useState("");

  const degreehandlechange = (e, index) => {
    let getid = e.target.id;
    let getcheck = e.target.checked;
    let getname = e.target.name;
    let getvalue = e.target.value;

    setDegreeview(getname);
    setDegreecheck(getcheck);
    setDegreevalue(getvalue);

    if (getname === "desktop") {
      router.push(`/${getvalue}`);
    }

    setDegreeid(getid);

    if (e.target.checked) {
      if (getvalue != degreevalue) {
        setAlldistrictinputsid([]);
        setAllcityinputsid([]);
        setDistrictcheck(new Array(districtdatas.length).fill(false));
        setIschecked2(new Array(citydatas.length).fill(false));
        // delete router.query.districtId;
        // delete router.query.cityId;
        // router.push(router);
        // console.log(alldistrictinputsid,allcityinputsid,router,districtcheck);
      }
      setTotalcountchbx(totalcountchbx + 1);
      // setActiveDeg(true);
      // setActiveStr(true)
    } else {
      setTotalcountchbx(totalcountchbx - 1);
    }
  };

  //District handle function
  const [districtname, setDistrictname] = useState("");

  const districthandlechange = (e, index) => {
    let getcheck = e.target.checked;
    let getid = e.target.id;
    let getname = e.target.name;
    let getvalue = e.target.value;

    setDistrictname(getname);

    let checked = [...districtcheck];
    checked[index] = getcheck;
    setDistrictcheck(checked);

    if (e.target.checked) {
      setAlldistrictinputsid([...alldistrictinputsid, parseInt(getid)]);
      // setAllchbxvalues([...allchbxvalues, getvalue]);
      setTotalcountchbx(totalcountchbx + 1);
    } else {
      setAlldistrictinputsid(alldistrictinputsid.filter((el) => el != getid));
      setAllchbxvalues(getid); 
      if (
        getname === "desktop" &&
        router.query.districtId.toString().split("_").length - 1 === 0
      ) {
        setAllcityinputsid([]);
        setAllchbxvalues([]);
        setIschecked2(new Array(citydatas.length).fill(false));
        delete router.query.districtId;
        delete router.query.cityId;
        router.push(router);
      }
      setTotalcountchbx(totalcountchbx - 1);
    }
  };

  const [filteredcitydata, setFilteredcitydata] = useState([]);
  const [cityname, setCityname] = useState("");
  const [degName, setDegName] = useState("");
  let [citysearchfilter, setCitysearchfilter] = useState("");

  // City handle function
  const cityhandlechange = (e, index) => {
    let getcheck = e.target.checked;
    let getid = e.target.id;
    let getname = e.target.name;
    let getvalue = e.target.value;

    // console.log(e.target.key);
    setCityname(getname);

    let checkedvalue = [...isChecked2];
    checkedvalue[index] = getcheck;
    setIschecked2(checkedvalue);

    if (e.target.checked) {
      setAllcityinputsid([...allcityinputsid, parseInt(getid)]);
      // setAllchbxvalues([...allchbxvalues, getvalue]);
      setTotalcountchbx(totalcountchbx + 1);
    } else {
      setAllcityinputsid(allcityinputsid.filter((el) => el != getid));

      setTotalcountchbx(totalcountchbx - 1);
    }
  };
  // console.log(allchbxvalues);


  const coursehandlechange = (e, index) => {
    let getname = e.target.name;
    let getcheck = e.target.checked;
    let getid = e.target.id;

    setCoursename(getname);

    // console.log(getname);

    let checked = [...coursecheck];
    checked[index] = getcheck;
    setCoursecheck(checked);

    if (e.target.checked) {
      setCourseid([...courseid, parseInt(getid)]);
      // let remove = coursedatas.splice(getid, 1);
      // setIndexonecourse((item) => [...item, ...remove]);
      setTotalcountchbx(totalcountchbx + 1);
    } else {
      setCourseid(courseid.filter((el) => el != getid));
      if (
        getname === "desktop" &&
        router.query.courseId.toString().split("_").length - 1 === 0
      ) {
        delete router.query.courseId;
        router.push(router);
      }
      setTotalcountchbx(totalcountchbx - 1);
    }
  };

  const [collegetypecheck, setCollegetypecheck] = useState(
    new Array(collegetypedatas.length).fill(false)
  );

  const [collegetypeid, setCollegetypeid] = useState([]);
  const [collegetypename, setCollegetypename] = useState("");

  const collegeTypehandlechange = (e, index) => {
    let getname = e.target.name;
    let getcheck = e.target.checked;
    let getid = e.target.id;

    setCollegetypename(getname);

    let checked = [...collegetypecheck];
    checked[index] = getcheck;
    setCollegetypecheck(checked);

    if (e.target.checked) {
      setCollegetypeid([...collegetypeid, parseInt(getid)]);
      setTotalcountchbx(totalcountchbx + 1);
    } else {
      setCollegetypeid(collegetypeid.filter((el) => el != getid));
      if (
        getname === "desktop" &&
        router.query.collegetypeId.toString().split("_").length - 1 === 0
      ) {
        delete router.query.collegetypeId;
        router.push(router);
      }
      setTotalcountchbx(totalcountchbx - 1);
    }
  };

  const [valueSort, setValueSort] = useState(0);

  let [mobileclick, setMobileclick] = useState(false);

  // Params
  const allParams = () => {
    if (districtcheck.includes(true)) {
      // console.log("calling district");
      router.query.districtId = alldistrictinputsid.join("_");
    } else {
      // console.log("not call delete district");
      delete router.query.districtId;
    }

    if (isChecked2.includes(true)) {
      // console.log("city calling");
      router.query.cityId = allcityinputsid.join("_");
    } else {
      delete router.query.cityId;
    }

    if (coursecheck.includes(true)) {
      router.query.courseId = courseid.join("_");
    } else {
      delete router.query.courseId;
    }

    if (collegetypecheck.includes(true)) {
      router.query.collegetypeId = collegetypeid.join("_");
    } else {
      delete router.query.collegetypeId;
    }

    router.push(router);
  };

  const [click, setClick] = useState(false);

  const bool = Boolean(click);

  // Retrieving checkboxes selected while refresh  ------------------
  useEffect(() => {
    let getlistingname = router.query.collegelist
      .replace(/_/g, " ")
      .replace("and", "&");

    // console.log(router, streamsid);
    // --------------------------------------------------------------
    if (router.query.collegelist) {
      degreedatas.map((elem, ind) => {
        if (elem.name == getlistingname) {
          setStreamsid([parseInt(elem.streamid)]);
          setStreamcheck(true);
          setDegreeid([parseInt(elem.id)]);
          setDegreecheck(true);
        }
      });

      degreedatas.map((ele, ind) => {
        if (ele.name == getlistingname) {
          // we can add stream name in degree api to each one so we compare
          if (ele.streamsid == streamsid) {
            setStreamsid([parseInt(ele.streamid)]);
            setStreamcheck(true);
            setDegreeid([parseInt(ele.id)]);
            setDegreecheck(true);
          }
        }

        if (ele.id == degreeid) {
          if (streamsid.length > 0 && ele.streamid != streamsid) {
            setDegreeid([]);
            setDegreecheck(false);
          }
        }
      });

      streamdatas.map((ele, ind) => {
        if (ele.name == getlistingname) {
          setStreamsid([parseInt(ele.id)]);
          setStreamcheck(true);
        }
      });

      // if (degreename === "mobile") {
      //   console.log(degreevalue);
      //   degreedatas.map((elem, ind) => {
      //     if (elem.name == degreevalue) {
      //       setStreamsid([parseInt(elem.streamid)]);
      //       setStreamcheck(true);
      //       setDegreeid([parseInt(elem.id)]);
      //       setDegreecheck(true);
      //     }
      //   });

      //   degreedatas.map((ele, ind) => {
      //     if (ele.name == degreevalue) {
      //       // we can add stream name in degree api to each one so we compare
      //       if (ele.streamid == streamsid) {
      //         streamdatas.map((e) => {
      //           if (e.id == streamsid) {
      //             if (e.name == streamname) {
      //               setStreamsid([parseInt(e.id)]);
      //               setStreamcheck(true);
      //               setActiveStr(true);
      //               setDegreeid([parseInt(ele.id)]);
      //               setDegreecheck(true);
      //               setActiveDeg(true);
      //             }
      //           }
      //         });
      //       }
      //     }

      //     if (ele.id == degreeid) {
      //       if (ele.streamid != streamsid) {
      //         setDegreeid([]);
      //         setDegreecheck(false);
      //       }
      //     }
      //   });

      //   streamdatas.map((ele, ind) => {
      //     if (ele.name == streamname) {
      //       setStreamsid([parseInt(ele.id)]);
      //       setStreamcheck(true);
      //     }
      //   });
      // }
    }

    if (router.query.districtId || districtBread != undefined) {
      var str = districtBread != undefined ? searchDistrict : router.query.districtId.replace(/_/g, ",");
      var arr = JSON.parse("[" + str + "]");
      setAlldistrictinputsid(arr);
      console.log(alldistrictinputsid);
      // console.log(router, arr, alldistrictinputsid, districtcheck);
      arr.map((ele, ind) => {
        // alldistrictinputsid.map((e)=>{return e})
        if (ele == ele) {
          districtcheck[ele] = true;
        } else {
          districtcheck[ele] = false;
        }
      });
    }

    if (router.query.cityId) {
      var str = router.query.cityId.replace(/_/g, ",");
      var arr = JSON.parse("[" + str + "]");

      setAllcityinputsid(arr);

      arr.map((ele) => {
        isChecked2[ele] = true;
      });
    }

    if (router.query.courseId) {
      var str = router.query.courseId.replace(/_/g, ",");
      var arr = JSON.parse("[" + str + "]");

      setCourseid(arr);

      arr.map((ele) => {
        if (ele == ele) {
          coursecheck[ele] = true;
        } else {
          coursecheck[ele] = false;
        }
      });
    }

    if (router.query.collegetypeId) {
      // console.log(collegetypeid);
      var str = router.query.collegetypeId.replace(/_/g, ",");
      var arr = JSON.parse("[" + str + "]");

      setCollegetypeid(arr);

      arr.map((ele) => {
        if (ele == ele) {
          collegetypecheck[ele] = true;
        } else {
          collegetypecheck[ele] = false;
        }
      });
    }

    if (router.query.course && !router.query.courseId) {
      let getcoursename = router.query.course.replace(/-+/g, " ");

      coursedatas.map((ele, index) => {
        if (
          router.query.collegelist === ele.degreename &&
          ele.course_name === getcoursename.replace(/-+/g, " ")
        ) {
          // setCourseid((re) => [...re,ele.id]);
          var n = ele.id;
          var arr = JSON.parse("[" + n + "]");
          setCourseid(arr);
          coursecheck[ele.id] = true;
        } else {
          coursecheck[ele.id] = false;
        }
      });
    }

    if (!router.query.courseId && !router.query.course) {
      setCourseid([]);
      setCoursecheck(new Array(coursedatas.length).fill(false));
    }

    if (router.query.course && router.query.courseId) {
      if (courseid.length == 1) {
        // console.log(router);
      }
    }

    
  }, [
    router.query.collegelist,
    router.query.districtId,
    router.query.cityId,
    router.query.courseId,
    router.query.collegetypeId,
    router.query.course,
    // degreeid,
    // streamsid
  ]);

  // Desktop All Params
  useEffect(() => {
    // console.log(
    //   streamsid,
    //   degreeid,
    //   alldistrictinputsid,
    //   router,
    //   districtcheck
    // );
    if (
      // (streamsid.length > 0 && streamcheck) ||
      (allcityinputsid.length > 0 && isChecked2) ||
      (alldistrictinputsid.length > 0 && districtcheck) ||
      // (degreeid.length > 0 && degreecheck) ||
      (courseid.length > 0 && coursecheck) ||
      (collegetypeid.length > 0 && collegetypecheck)
    ) {
      if (
        // streamname === "desktop" ||
        cityname === "desktop" ||
        districtname === "desktop" ||
        // degreename === "desktop" ||
        coursename === "desktop" ||
        collegetypename === "desktop"
      ) {
        // console.log(coursename);
        allParams();
      } else {
        if (click == true) {
          // console.log("r");
          return allParams();
        }
      }
    }

    if(alldistrictinputsid.length === 0)
    {
      setAllchbxvalues();
    }
  }, [
    click,
    clickcount,
    allcityinputsid,
    alldistrictinputsid,
    courseid,
    collegetypeid,
    // streamcheck,
    isChecked2,
    districtcheck,
    // degreecheck,
    coursecheck,
    collegetypecheck,
  ]);
console.log(districtBread);


const applyfilter = () => {
  //Closing the drawer...
  setClick(true);
  setRight(false);

  if (districtname == "mobile") {
    if (router.query.districtId) {
      if (router.query.districtId.toString().split("_").length - 1 === 0) {
        delete router.query.districtId;
        router.push(router);
      }
    }
  }

  if (coursename == "mobile") {
    if (router.query.courseId) {
      if (router.query.courseId.toString().split("_").length - 1 === 0) {
        delete router.query.courseId;
        router.push(router);
      }
    }
  }

  if (streamview == "mobile") {
    console.log(streamname);
    router.push(`/${streamname.replace(/[ ]/g, "_").replace(/[&]/g, "and")}`);
    setCountstream((c) => c + 1);
    // allParams();
  } else {
    console.log("no runnning");
  }

  if (degreeview == "mobile") {
    router.push(
      `/${degreevalue.replace(/[ ]/g, "_").replace(/[&]/g, "and")}`
    );
    setCountdegree((c) => c + 1);
  }
  // Calling All Parameters for filter
  // allParams();
};

  // Apply button filter function for mobile
  let [countstream, setCountstream] = useState(0);
  let [countdegree, setCountdegree] = useState(0);

  //  useEffect(() => {
  // state variable calling like true or flase
  //       if(courseid.length == 0)
  //       {
  //         delete router.query.courseId;
  //         router.push(router);
  //       }

  //   },[courseid]);
  // console.log(streamsid, degreeid, menuDID);

  // useEffect(() => {
  //   if (collegetypeid.length == 0) {
  //     delete router.query.collegetypeId;
  //     router.push(router);
  //   }
  // }, [collegetypeid]);

  // useEffect(() =>
  // {
  //   console.log(collegetypeid, collegetypecheck);

  //   if(collegetypeid.length === 0 && collegetypecheck.includes(false))
  //   {
  //     delete router.query.collegetypeId;
  //     router.push(router);
  //     console.log(collegetypeid, collegetypecheck);
  //   }

  // }, [collegetypeid]);

  // Chip Component for delete

  //stream chip

  const fetchfilteroptions = async () => {
    await fetch(
      router.query.collegelist && !router.query.course && activeDeg === true
        ? `${DistrictCityAPI}?streamId=${streamsid}&degreeId=${menuDID}${decodeURIComponent(
            pathAlter
          )
            .replace(/[?]/g, "&")
            .replace(/_/g, ",")}`
        : router.query.collegelist &&
          !router.query.course &&
          activeDeg === false &&
          activeStr === true
        ? `${DistrictCityAPI}?streamId=${streamsid}${decodeURIComponent(
            pathAlter
          )
            .replace(/[?]/g, "&")
            .replace(/_/g, ",")}`
        : `${DistrictCityAPI}${decodeURIComponent(DynamicPath).replace(
            /_/g,
            ","
          )}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFilteroptions(data);
        // console.log(data);
      });
  };

  // console.log(
  //   streamsid,
  //   activeStr,
  //   activeDeg,
  //   router.query.collegelist && !router.query.course && activeDeg === true
  //     ? `${DistrictCityAPI}?streamId=${streamsid}&degreeId=${menuDID}${decodeURIComponent(
  //         pathAlter
  //       ).replace(/[?]/g, "&")}`
  //     : !router.query.course &&
  //       router.query.collegelist &&
  //       activeDeg === false &&
  //       activeStr === true
  //     ? `${DistrictCityAPI}?streamId=${menuSID}${decodeURIComponent(
  //         pathAlter
  //       ).replace(/[?]/g, "&")}`
  //     : `${DistrictCityAPI}${decodeURIComponent(DynamicPath).replace(
  //         /_/g,
  //         ","
  //       )}`
  // );

  useEffect(() => {
    fetchfilteroptions();
    // console.log(clickfilter);
    if (clickfilter == true) {
      console.log("Yes coming");
      // console.log(
      //   streamsid,
      //   alldistrictinputsid,
      //   activeStr,
      //   activeDeg,
      //   router.query.collegelist && !router.query.course && activeDeg === true
      //     ? `${DistrictCityAPI}?streamId=${streamsid}&degreeId=${menuDID}&districtId=${alldistrictinputsid.replace(
      //         /_/g,
      //         ","
      //       )}&cityId=${allcityinputsid.replace(
      //         /_/g,
      //         ","
      //       )}&courseId=${courseid.replace(
      //         /_/g,
      //         ","
      //       )}&collegetypeId=${collegetypeid.replace(/_/g, ",")}`
      //     : !router.query.course &&
      //       router.query.collegelist &&
      //       activeDeg === false &&
      //       activeStr === true
      //     ? `${DistrictCityAPI}?streamId=${menuSID}&districtId=${alldistrictinputsid.replace(
      //         /_/g,
      //         ","
      //       )}&cityId=${allcityinputsid.replace(
      //         /_/g,
      //         ","
      //       )}&courseId=${courseid.replace(
      //         /_/g,
      //         ","
      //       )}&collegetypeId=${collegetypeid.replace(/_/g, ",")}`
      //     : `${DistrictCityAPI}&districtId=${alldistrictinputsid.replace(
      //         /_/g,
      //         ","
      //       )}&cityId=${allcityinputsid.replace(
      //         /_/g,
      //         ","
      //       )}&collegetypeId=${collegetypeid.replace(/_/g, ",")}`
      // );
      fetch(
        router.query.collegelist && !router.query.course && activeDeg === true
          ? `${DistrictCityAPI}?streamId=${streamsid}&degreeId=${menuDID}&districtId=${alldistrictinputsid.replace(
              /_/g,
              ","
            )}&cityId=${allcityinputsid.replace(
              /_/g,
              ","
            )}&courseId=${courseid.replace(
              /_/g,
              ","
            )}&collegetypeId=${collegetypeid.replace(/_/g, ",")}`
          : !router.query.course &&
            router.query.collegelist &&
            activeDeg === false &&
            activeStr === true
          ? `${DistrictCityAPI}?streamId=${streamsid}&districtId=${alldistrictinputsid.replace(
              /_/g,
              ","
            )}&cityId=${allcityinputsid.replace(
              /_/g,
              ","
            )}&courseId=${courseid.replace(
              /_/g,
              ","
            )}&collegetypeId=${collegetypeid.replace(/_/g, ",")}`
          : `${DistrictCityAPI}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMobilefilteroptions(data);
          // console.log(data);
        });
    }
  }, [
    clickfilter,
    streamsid,
    alldistrictinputsid,
    pathAlter,
    activeStr,
    activeDeg,
    router.query.collegelist,
    router.query.collegelist && router.query.course,
    router.query.collegelist && !router.query.course && activeStr === true,
    router.query.collegelist && !router.query.course && activeDeg === true,
    DynamicPath,
  ]);

  const conditionapi = async () => {
    await fetch(`${DistrictCityAPI}`)
      .then((res) => res.json())
      .then((data) => {
        setConditionstate(data);
        // console.log(data);
      });
  };
  useEffect(() => {
    conditionapi();
  }, [filteroptions]);


  let [getdistrictid, setGetdistrictid] = useState([]);
  let arr = [];
  let city = [];

  useEffect(() => {
    // console.log(allcityinputsid);
    // console.log(allcityinputsid, citydatas);
    conditionstate.area?.map((ele, ind) => {
      allcityinputsid.map((element, index) => {
        if (element === ele.id) {
          // console.log(element);
          arr.push(ele.districtid);
        }
      });
    });

    // filteroptions.area?.map((ele, ind) => 
    // {
    //   allcityinputsid.map((element, index) => {
        
    //     if(element === ele.id) 
    //     {
    //       arr.push(ele.districtid);
    //     }
    //   });  
    // }) 
    // console.log(alldistrictinputsid,arr); 

    // filteroptions.area?.map((el,ind)=>
    // {
    //   if(parseInt(allchbxvalues) == el.districtid)
    //   {
    //     console.log(allcityinputsid[ind], el.id);
    //     for(let i=0;i<=allcityinputsid.length;i++)
    //     {
    //       if(allcityinputsid[i] === el.id)
    //       {
    //       console.log(allcityinputsid[ind], el.id);
    //       isChecked2[el.id] = false; 
    //       }
    //     }
    //   }
    // })


    for(let i=0;i<=alldistrictinputsid.length;i++)
    {
      for(let j=0;j<=allcityinputsid.length;j++)
      {
        filteroptions.area?.map((e,index)=>
        {
          if(alldistrictinputsid[i] === arr[j])  
          {
            if(allcityinputsid[j] === e.id) 
            {
              // console.log(e.id,allcityinputsid);   
              // setAllcityinputsid(allcityinputsid.concat(e.id))
              
            } 
          }
          // else if(alldistrictinputsid[i] != arr[j]) 
          // {
          //   if(allcityinputsid[j] != e.id) 
          //   {
          //     console.log("m",e.id);
          //   } 
          // }
        })
      }
    }
    // alldistrictinputsid.map((el,i)=>
    // {
    //     allcityinputsid.map((elem,ind)=>
    //     {
    //       if(alldistrictinputsid[i] != arr[ind])  
    //       {
    //         console.log("matched",arr[ind]);
    //       }
    //     })
    // })

    // alldistrictinputsid.map((el,i)=>
    // {
    //   if(alldistrictinputsid[i] != arr[i])
    //   {

    //   }
    // })
   
    // filteroptions.area?.map((e,i)=>
    // {
    //   if(alldistrictinputsid[i] == arr[i])
    //   {
    //       console.log(e.id);
    //       isChecked2[e.id] = true;
    //   }
    //   if((alldistrictinputsid[i] != arr[i]))
    //   {
    //     isChecked2[e.id] = false;
    //     // allcityinputsid.splice(e.id,1);
    //   }
    // }) 
  
    // console.log(isChecked2,allcityinputsid);
  }, [filteroptions]); 
 
  const streamhandledelete = (chipToDelete) => () => {
    setStreamsid([]);
    setStreamcheck(false);
    setDegreeid([]);
    setDegreecheck(false);

    router.push("/tamilnadu-colleges");

    // if (streamcheck == false) {
    //   setStreamsid([]);
    //   delete router.query.streamId;
    //   router.push(router);
    // }
  };

  //district chip
  const handleDelete = (chipToDelete) => () => {
    setAlldistrictinputsid((chips) =>
      chips.filter((chip) => chip !== chipToDelete)
    );

    districtcheck.map((elem, index) => {
      if (index === chipToDelete) {
        districtcheck[index] = false;
      }
    });

    const a = (value) => value === false;
    if (districtcheck.every(a)) {
      setAlldistrictinputsid([]);
      delete router.query.districtId;
      router.push(router);
    }

    setAllcityinputsid((chips) =>
      chips.filter((chip) => chip !== allcityinputsid.map((ele) => ele))
    );

    // console.log(allcityinputsid.map((ele) => ele));
  };

  //city chip
  const handleDelete2 = (chipToDelete) => () => {
    setAllcityinputsid((chips) =>
      chips.filter((chip) => chip !== chipToDelete)
    );

    isChecked2.map((elem, index) => {
      if (index === chipToDelete) {
        isChecked2[index] = false;
      }
    });
  };

  //degree chip
  const handleDelete3 = (chipToDelete) => () => {
    // if (router.query.collegelist) {
    //   // setStreamsid([]);
    //   // setStreamcheck(false);
    //   delete router.query.collegelist;
    //   delete router.query.course;
    //   setCourseid("");
    //   setCoursecheck(new Array(coursedatas.length).fill(false));
    //   // router.push("/tamilnadu-colleges");
    //   // router.pathname = "tamilnadu-colleges";
    // }

    // delete router.query.degreeId;
    // router.push(router);

    setDegreeid([]);
    setDegreecheck(false);

    if (streamsid.length > 0) {
      // console.log(streamsid[0]);
      streamdatas.map((e, i) => {
        if (e.id == streamsid[0]) {
          router.push(`/${e.name}`);
        } else {
          console.log("no matched");
        }
      });
    }
  };

  //course chip
  const handleDelete4 = (chipToDelete) => () => {
    setCourseid((chips) => chips.filter((chip) => chip !== chipToDelete));

    // console.log(courseid, chipToDelete);
    coursecheck.map((elem, index) => {
      if (index === chipToDelete) {
        coursecheck[index] = false;
      }
    });

    const a = (value) => value === false;
    if (coursecheck.every(a)) {
      setCourseid([]);
      delete router.query.courseId;
      if (router.query.course) {
        delete router.query.course;
        router.push(router);
      }
      router.push(router);
    }
  };

  //collegetype chip
  const handleDelete5 = (chipToDelete) => () => {
    setCollegetypeid((chips) => chips.filter((chip) => chip !== chipToDelete));

    collegetypecheck.map((elem, index) => {
      if (index === chipToDelete) {
        collegetypecheck[index] = false;
      }
    });

    const a = (value) => value === false;
    if (collegetypecheck.every(a)) {
      setCollegetypeid([]);
      delete router.query.collegetypeId;

      router.push(router);
    }
  };

  // Clear all the seleced checkboxes inputs
  const clearfilters = () => {
    setIschecked2(new Array(citydatas.length).fill(false));
    setDistrictcheck(new Array(districtdatas.length).fill(false));
    setCoursecheck(new Array(coursedatas.length).fill(false));
    setCollegetypecheck(new Array(collegetypedatas.length).fill(false));
    setAllchbxvalues([]);

    streamsid.splice(0, streamsid.length);
    degreeid.splice(0, degreeid.length);
    allcityinputsid.splice(0, allcityinputsid.length);
    alldistrictinputsid.splice(0, alldistrictinputsid.length);
    courseid.splice(0, courseid.length);
    collegetypeid.splice(0, collegetypeid.length);
    setTotalcountchbx(0);
    setAlldistrictinputsid([]);
    delete router.query.cityId;
    delete router.query.districtId;
    delete router.query.courseId;
    delete router.query.collegetypeId;
    router.push("/tamilnadu-colleges");
    // router.push(router);  
    // console.log(streamsid);

  };

  const streamclear = () => {
    delete router.query.streamId;
    router.push(router);
    router.back();
    setStreamsid("");
    setStreamcheck(false);
  };

  const degreeclear = () => {
    delete router.query.degreeId;
    router.push(router);
    router.back();
    setDegreeid("");
    setDegreecheck(false);
  };

  // For mobile chips component
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // FROM here for MOBILE filter
  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : "100%",
        height: "100% !important",
        backgroundColor: "#ECF2FF",
      }}
      role="presentation">
      <Grid container display="flex" justifyContent="space-between">
        <Grid item>
          <Typography fontWeight="bold" fontSize="large" p={2}>
            Filters
          </Typography>
        </Grid>
        <Grid item pt={1.5} pr={1.5}>
          <Button
            fontWeight="bold"
            fontSize="large"
            onClick={() => {
              clearfilters();
            }}
          >
            Clear All
          </Button>
        </Grid>
      </Grid>
      <Divider sx={{ bgcolor: "black" }} />
      <Grid container sx={{ backgroundColor: "white", height: "83%" }}>
        <AllFilters
          stateData={statedatas}
          cityData={citydatas}
          districtData={districtdatas}
          streamData={streamdatas}
          degreeData={degreedatas}
          coursesData={coursedatas}
          collegetypeData={collegetypedatas}
          tabvalue={values}
          filterstate={filteredstatedata}
          // filterstatefunc={filterChange}
          filtercityfunc={cityhandlechange}
          filterstreamfunc={streamhandlechange}
          filterdegreefunc={degreehandlechange}
          // checkedstatevalue={isChecked}
          checkedcityvalue={isChecked2}
          checkedstreamvalue={streamcheck}
          streamID={streamsid}
          checkeddegreevalue={degreecheck}
          totalcheckboxcount={totalcountchbx}
          districthandlefunc={districthandlechange}
          checkeddistrictvalue={districtcheck}
          coursehandlefunc={coursehandlechange}
          checkedcoursevalue={coursecheck}
          // cityidvalue={allcityinputsid}
          collegetypehandlefunc={collegeTypehandlechange}
          checkedcollegetypevalue={collegetypecheck}
          districtID={alldistrictinputsid}
          degreeID={degreeid}
          // filtercityfunc2={cityhandlechange2}
          // filterdistrictfunc2={districthandlechange2}
          // filterdegreefunc2={degreehandlechange2}
          // filtercoursefunc2={coursehandlechange2}
          // filtercollegetypefunc2={collegeTypehandlechange2}
          // filterstreamfunc2={streamhandlechange2}
          degreelistdata={filtercountdatas}
          streamfilterclear={streamclear}
          degreefilterclear={degreeclear}
          apifilteroptions={mobilefilteroptions}
        />
      </Grid>

      <Grid
        container
        display="flex"
        textAlign="center"
        p={2}
        // pr={2}
        spacing={2}
        sx={{
          position: "fixed",
          bottom: 0,
          display: "flex",
          bgcolor: "#ECF2FF",
          alignItems: "center",
        }}
      >
        <Grid item xs={6}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "10px",
              border: "1px solid",
              "&:hover": { backgroundColor: "red" },
              width: "80%",
              padding: "0 !important",
              color: "common.black",
            }}
            onClick={() => {
              setRight(false);
            }}
          >
            Cancel
          </Button>
        </Grid>

        <Grid item xs={6} mt={0.5}>
          {/* {dummyvalue.length > 0 ? ( */}
          <Button
            variant="outlined"
            sx={{
              borderRadius: "10px",
              border: "1px solid",
              width: "100%",
              bgcolor: "primary.dark",
              color: "common.white",
              padding: "0 !important",
            }}
            onClick={() => {
              applyfilter();
            }}
          >
            Apply Filter
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
  
  // ------Sort
  const sort = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : "100%",
        height: "100%",
      }}
      role="presentation"
    >
      <GridContainer container display="flex" justifyContent="space-between">
        <GridItem item>
          <Typography fontWeight="bold" fontSize="large" p={2}>
            Sort by
          </Typography>
        </GridItem>
        <GridItem item pt={1.5} pr={1.5}>
          <Button
            fontWeight="bold"
            fontSize="large"
            onClick={(e) => {
              handleClearPrice();
              handleClearRate();
              toggleDrawer(false);
            }}
          >
            Clear All
          </Button>
        </GridItem>
      </GridContainer>

      <Divider sx={{ bgcolor: "black" }} />

      <GridContainer container pl={3} height="100%">
        <FormControl>
          {/* <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{ fontSize: "13px" }}
          >
            Sort by
          </FormLabel> */}
          {[
            "Popular Colleges",
            "Rating(Highest First)",
            "Rating(Lowest First)",
            "Fees(Lowest First)",
            "Fees(Highest First)",
          ]
            .slice(0, router.query.course && !router.query.courseId ? 5 : router.query.courseId ? 3 : 3)
            .map((e, i) => {
              return (
                <>
                  <RadioGroup
                    key={i}
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      sx={{ fontSize: "12px" }}
                      value={e}
                      control={
                        <Radio
                          size="small"
                          value={e}
                          checked={i == sortId ? true : false}
                          onChange={(event) => {
                            // filterstreamfunc(event, i);
                            setSortId(i);
                            if (sortId == 0 || i == 0) {
                              setSortPopular(true);
                              setSortRatingHigh(false);
                              setSortRatingLow(false);
                              setSortFeeLow(false);
                              setSortFeeHigh(false);
                            }
                            if (i == 1) {
                              setSortRatingHigh(true);
                              setSortPopular(false);
                              setSortRatingLow(false);
                              setSortFeeLow(false);
                              setSortFeeHigh(false);
                            }
                            if (i == 2) {
                              setSortRatingHigh(false);
                              setSortPopular(false);
                              setSortRatingLow(true);
                              setSortFeeLow(false);
                              setSortFeeHigh(false);
                            }
                            if (i == 3) {
                              setSortRatingHigh(false);
                              setSortPopular(false);
                              setSortRatingLow(false);
                              setSortFeeLow(true);
                              setSortFeeHigh(false);
                            }
                            if (i == 4) {
                              setSortRatingHigh(false);
                              setSortPopular(false);
                              setSortRatingLow(false);
                              setSortFeeLow(false);
                              setSortFeeHigh(true);
                            }
                          }}
                        />
                      }
                      label={e}
                    />
                  </RadioGroup>
                </>
              );
            })}
        </FormControl>
        <Divider sx={{ bgcolor: "black" }} />
      </GridContainer>
      <GridContainer
        container
        display="flex"
        textAlign="center"
        pl={2}
        pr={2}
        mt={0.3}
        spacing={1}
        sx={{ boxShadow: "rgb(0 0 0 / 50%) 0px -6px 6px -6px" }}
      >
        <GridItem item xs={6} mt={0.5}>
          <Button
            variant="outlined"
            onClick={(e) => {
              setLeft(false);
              setSortFeeHigh(false);
              setSortFeeLow(false);
              setSortRatingHigh(false);
              setSortRatingLow(false);
              setSortPopular(false);
              setSortId(-1);
            }}
            sx={{ borderRadius: "80px", width: "100%", mb: 1.4 }}
          >
            Cancel
          </Button>
        </GridItem>

        <GridItem item xs={6} mt={0.5}>
          <Button
            variant="outlined"
            sx={{ borderRadius: "80px", width: "100%", mb: 1.4 }}
            onClick={(e) => {
              setLeft(false);
            }}
          >
            Apply Sort
          </Button>
        </GridItem>
      </GridContainer>
    </Box>
  );

  // console.log(activeStr);

  // console.log("ac" + streamsid);

  const name = useRouter().query.collegelist;
  const [ratingselectedid, setRatingselectedid] = useState();
  const [ratingselectedNum, setRatingselectedNum] = useState(0);
  const [popularselectedid, setPopularselectedid] = useState(false);
  // const [feeselectedNum, setFeeselectedNum] = useState(0);
  // console.log(" clarify" + ratingselectedNum);
  // console.log(" clarify1" + popularselectedid);
  const loading = useContext(searchContext);


  const [lok, setLok ] = useState([]);

    // const getData = async (customParameter) => {
    //   const res = await fetch(`${process.env.NEXT_PUBLIC_COLLEGES}`, {
    //     method: 'get',
    //     headers: {
    //     'Content-Type': 'application/json',
    //   }});
    //   const response = await res.json();
    //   console.log(response.data); 
    //   setLok(response.data);
    // }
    // getData();
    // console.log(lok)

    // console.log(filteroptions.city , districtdatas);
    // console.log(districtBread);
   
    useEffect(() => {
      if(
        districtBread != undefined){
        streamsid.splice(0, streamsid.length);
        degreeid.splice(0, degreeid.length);
        allcityinputsid.splice(0, allcityinputsid.length);
        alldistrictinputsid.splice(0, alldistrictinputsid.length);
        courseid.splice(0, courseid.length);
        collegetypeid.splice(0, collegetypeid.length);
      }
    },[districtBread])

  return (
    <>
      {/* --------------------------Mobile Card Listing-------------------------------------- */}

      <Stack
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
        display={{ md: "none", xs: "flex" }}
        
      >
        <Box
          sx={{
            overflowX: {
              xs: "scroll",
              sm: "hidden",
              md: "hidden",
              lg: "hidden",
            },
            display: "flex",
            whiteSpace: "nowrap",
            width: "100%",
          }}
        >
          {/* Chips Component   */}
          <>
            {streamdatas.map((el) => {
              if (streamsid == el.id) {
                return (
                  <Box p={1}>
                    <Chip
                      label={el.name}
                      color="primary"
                      onDelete={streamhandledelete(el.id)}
                      sx={{
                        width: "auto",
                        // color:
                        //   themeMode === true
                        //     ? "common.white"
                        //     : "common.black",
                      }}
                    />
                  </Box>
                );
              }
            })}

            {districtdatas.map((el) => {
              if (alldistrictinputsid.includes(el.id)) {
                return (
                  <Box p={1}>
                    <Chip
                      label={el.english_name}
                      color="primary"
                      onDelete={handleDelete(el.id)}
                      sx={{
                        width: "auto",
                        // color:
                        //   themeMode === true
                        //     ? "common.white"
                        //     : "common.black",
                      }}
                    />
                  </Box>
                );
              }
            })}

            {citydatas.map((el) => {
              if (allcityinputsid.includes(el.id)) {
                return (
                  <Box p={1}>
                    <Chip
                      label={el.english_name}
                      color="primary"
                      onDelete={handleDelete2(el.id)}
                      sx={{
                        width: "auto",
                        // color:
                        //   themeMode === true
                        //     ? "common.white"
                        //     : "common.black",
                      }}
                    />
                  </Box>
                );
              }
            })}

            {streamsid.length == 0
              ? degreedatas.map((el) => {
                  if (degreeid == el.id) {
                    return (
                      <Box p={1}>
                        <Chip
                          label={el.name}
                          color="primary"
                          onDelete={handleDelete3(el.id)}
                          sx={{
                            width: "auto",
                            // color:
                            //   themeMode === true
                            //     ? "common.white"
                            //     : "common.black",
                          }}
                        />
                      </Box>
                    );
                  }
                })
              : null}

            {streamsid.length > 0
              ? degreedatas.map((el) => {
                  if (degreeid.includes(el.id)) {
                    return (
                      <Box p={1}>
                        <Chip
                          label={el.name}
                          color="primary"
                          onDelete={handleDelete3(el.id)}
                          sx={{
                            width: "auto",
                            // color:
                            //   themeMode === true
                            //     ? "common.white"
                            //     : "common.black",
                          }}
                        />
                      </Box>
                    );
                  }
                })
              : null}

            {coursedatas.map((el) => {
              if (courseid.includes(el.id)) {
                return (
                  <Box p={1}>
                    <Chip
                      label={el.course_name}
                      color="primary"
                      onDelete={handleDelete4(el.id)}
                      sx={{
                        width: "auto",
                        // color:
                        //   themeMode === true
                        //     ? "common.white"
                        //     : "common.black",
                      }}
                    />
                  </Box>
                );
              }
            })}

            {collegetypedatas.map((el) => {
              // console.log(collegetypeid);
              if (collegetypeid.includes(el.college_type_id)) {
                return (
                  <Box p={1}>
                    <Chip
                      label={el.college_types}
                      color="primary"
                      onDelete={handleDelete5(el.college_type_id)}
                      sx={{
                        width: "auto",
                        // color:
                        //   themeMode === true
                        //     ? "common.white"
                        //     : "common.black",
                      }}
                    />
                  </Box>
                );
              }
            })}
          </>
        </Box>
        {posts1.length === 0 ? 
            <>
             <GridContainer sx={{ mx: "1em 0", my: 1 }}>
                    <GridItem sx={{ margin: "0 auto" }}>
                      {/* <Paper sx={{ width: "100%", height: "100%" }}> */}
                        {/* <Alert severity="error">
                          <AlertTitle>
                            {" "}
                            Sorry for the inconvinence!, The selected data not
                            found..
                          </AlertTitle>
                        </Alert> */}
                        <Image src={DNF} width={200} />
                      {/* </Paper> */}
                    </GridItem>
                    <Divider />
                  </GridContainer>
                  <Box sx={{ display:'flex' , mb:3 , justifyContent:'center', alignItems:'center' , width:'100vw' }} >
                  <Divider orientation="horizontal" sx={{ bgcolor: themeMode === true? 'common.white' : 'common.black' , height:"1px" , width:"25%" }} />
                  <Typography sx={{  alignItems:'center', justifyContent:'center', textAlign:'center' , width:'300px' ,  fontFamily:"'Alata', sans-serif" , cursor:'pointer'}} >
                    {`Hope You Like This`} <BiDownArrow fontSize={'small'} color="primary" style={{ marginTop:1 }} />
                  </Typography>
                  <Divider orientation="horizontal" sx={{ bgcolor: themeMode === true? 'common.white' : 'common.black' , height:"1px" , width:"25%" }} />
                  </Box>
                  {/* <Button
                    sx={{
                      bgcolor: themeMode === true ? "grey.600" : "primary.main",
                      width: 280,
                      height: 330,
                      color: "White",
                      fontSize: "20px",
                      my: 1,
                      mx: 1,
                    }}
                  >
                    Related Colleges
                  </Button> */}
            </> : null}
        <GridContainer
          container
          maxWidth={"md"}
          width={100}
          display={{ xs: "flex", md: "none" }}
          rowSpacing={{ xs: 1 }}
        > 
         
          {posts1.length != 0 ? (
            posts1
              .sort((a, b) => {
                ratingselectedNum != 0 ? b.rating - a.rating : null;
              })
              .map((item, ind) => {
                if (
                  item.rating / 5 >= ratingselectedNum &&
                  ratingselectedNum != 0
                ) {
                  return (
                    <>
                      <Grid
                        container
                        item
                        xs={12}
                        sx={{ justifyContent: "center" }}
                        component={MotionViewport}
                      >
                        <Box component={m.div} variants={varFade().inUp}>
                          <m.div
                            animate={{ y: [0, 0, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                          >
                            <CardComponentFour
                              sx={{
                                width: "auto",
                                mb: 2,
                              }}
                              CollegeLogo={item.logo}
                              CollegeImage={item.featured_image}
                              CollegeName={item.institute_name}
                              CollegeDistrict={item.district_name}
                              CollegeState={item.state_name}
                              CollegeId={item.id}
                              Rating={item.rating}
                            />
                          </m.div>
                        </Box>
                      </Grid>
                    </>
                  );
                } else if (ratingselectedNum === 0) {
                  return (
                    <>
                      <Grid
                        container
                        item
                        xs={12}
                        sx={{ justifyContent: "center" }}
                        component={MotionViewport}
                      >
                        <Box component={m.div} variants={varFade().inUp}>
                          <m.div
                            animate={{ y: [0, 0, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                          >
                            <CardComponentFour
                              sx={{
                                width: "auto",
                                mb: 2,
                              }}
                              CollegeLogo={item.logo}
                              CollegeImage={item.featured_image}
                              CollegeName={item.institute_name}
                              CollegeDistrict={item.district_name}
                              CollegeState={item.state_name}
                              CollegeId={item.id}
                              Rating={item.rating}
                            />
                          </m.div>
                        </Box>
                      </Grid>
                    </>
                  );
                }
              })
          ) : posts1.length === 0 && loading === false? (
            <>
              {/* <GridContainer xs={12} sx={{  my: 1, display:'flex', ml:-15 , justifyContent:'left' }}> */}



              {relposts1
                .sort((a, b) => {
                  ratingselectedNum != 0 ? b.rating - a.rating : null;
                })
                .map((item, ind) => {
                  if (
                    item.rating / 5 >= ratingselectedNum &&
                    ratingselectedNum != 0
                  ) {
                    return (
                      <>
                        <Grid
                          container
                          item
                          xs={12}
                          sx={{ justifyContent: "center" }}
                          component={MotionViewport}
                        >
                          <Box component={m.div} variants={varFade().inUp}>
                            <m.div
                              animate={{ y: [0, 0, 0] }}
                              transition={{ duration: 4, repeat: Infinity }}
                            >
                              <CardComponentFour
                                sx={{
                                  width: "auto",
                                  mb: 2,
                                }}
                                CollegeLogo={item.logo}
                                CollegeImage={item.featured_image}
                                CollegeName={item.institute_name}
                                CollegeDistrict={item.district_name}
                                CollegeState={item.state_name}
                                CollegeId={item.id}
                                Rating={item.rating}
                              />
                            </m.div>
                          </Box>
                        </Grid>
                      </>
                    );
                  } else if (ratingselectedNum === 0) {
                    return (
                      <>
                        <Grid
                          container
                          item
                          xs={12}
                          sx={{ justifyContent: "center" }}
                          component={MotionViewport}
                        >
                          <Box component={m.div} variants={varFade().inUp}>
                            <m.div
                              animate={{ y: [0, 0, 0] }}
                              transition={{ duration: 4, repeat: Infinity }}
                            >
                              <CardComponentFour
                                sx={{
                                  width: "auto",
                                  mb: 2,
                                }}
                                CollegeLogo={item.logo}
                                CollegeImage={item.featured_image}
                                CollegeName={item.institute_name}
                                CollegeDistrict={item.district_name}
                                CollegeState={item.state_name}
                                CollegeId={item.id}
                                Rating={item.rating}
                              />
                            </m.div>
                          </Box>
                        </Grid>
                      </>
                    );
                  }
                })}
            </>
          ) : null}
        </GridContainer>
        {pageNum == posts1.length / 15 ? (
          <>
            <Box>
              <CircularProgress size={"small"} />
            </Box>
          </>
        ) : null}
        <GridContainer
          container
          display={{ xs: "flex" }}
          sx={{
            position: "fixed",
            bottom: "0px",
            justifyContent: "space-around",
            zIndex: 10,
            background: "none",
            display: { xs: "flex", md: "none", lg: "none " },
          }}
        >
          {/* --------------Filter&Sort Buttoms------------------= */}
          <GridItem item xs={6} sx={{ bgcolor: "azure" }}>
            <Button
              onClick={toggleDrawerLeft(true)}
              sx={{
                textAlign: "center",
                fontSize: "15px",
                boxShadow: "",
                backgroundColor: "azure",
                width: "100%",
                borderRadius: "0px",
              }}
              endIcon={<BiSort fontSize="small" />}
            >
              Sort
            </Button>
          </GridItem>
          <Divider />
          <GridItem item xs={6} bgcolor="common.white">
            <Button
              onClick={toggleDrawer(true)}
              sx={{
                fontSize: "15px",
                textAlign: "center",
                backgroundColor: "azure",
                width: "100%",
                borderRadius: "0px",
              }}
              endIcon={<BiFilter />}
            >
              Filter
            </Button>
          </GridItem>
        </GridContainer>
        {/* -----------------------Drawer---------- */}
        <GridItem>
          <SwipeableDrawer
            anchor="bottom"
            open={left}
            onClose={toggleDrawerLeft(false)}
            onOpen={toggleDrawerLeft(true)}
            PaperProps={{
              style: {
                // height:'0%'
                borderRadius: "25px 25px 0px 0px",
              },
            }}
          >
            {sort(left)}
          </SwipeableDrawer>
          <SwipeableDrawer
            anchor="bottom"
            open={right}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            PaperProps={{
              style:{
                height:'75%',
                borderRadius:'25px 25px 0px 0px'
              }
            }}
          >
            {list(right)}
          </SwipeableDrawer>
        </GridItem>
      </Stack>

      {/*---------------------------- Desktop ---------------------------- */}
      {loading ? (
        <CollegeListingLoad />
      ) : (
        <Stack
          width="100vw"
          height="100%"
          justifyContent={"center"}
          alignItems="center"
          // sx={{ background: themeMode === true ? "grey.800" : "common.white" }}
        >
          <GridContainer
            sx={{
              bgcolor: themeMode === true ? "grey.800" : "grey.200",
              justifyContent: "space-evenly",
              display: "grid",
            }}
          >
            <TopFilter
              // cityData={citydatas}
              cityData={citydatas}
              districtID={alldistrictinputsid}
              districtData={districtdatas}
              streamData={streamdatas}
              degreeData={degreedatas}
              degreeID={degreeid}
              coursesData={coursedatas}
              collegetypeData={collegetypedatas}
              tabvalue={values}
              filterstate={filteredstatedata}
              // filterstatefunc={filterChange}
              filtercityfunc={cityhandlechange}
              filterstreamfunc={streamhandlechange}
              filterdegreefunc={degreehandlechange}
              // checkedstatevalue={isChecked}
              checkedcityvalue={isChecked2}
              checkedstreamvalue={streamcheck}
              streamID={streamsid}
              checkeddegreevalue={degreecheck}
              totalcheckboxcount={totalcountchbx}
              districthandlefunc={districthandlechange}
              checkeddistrictvalue={districtcheck}
              coursehandlefunc={coursehandlechange}
              checkedcoursevalue={coursecheck}
              cityidvalue={allcityinputsid}
              collegetypehandlefunc={collegeTypehandlechange}
              checkedcollegetypevalue={collegetypecheck}
              // filtercityfunc2={cityhandlechange2}
              // filterdistrictfunc2={districthandlechange2}
              // // filterdegreefunc2={degreehandlechange2}
              // filtercoursefunc2={coursehandlechange2}
              // filtercollegetypefunc2={collegeTypehandlechange2}
              // filterstreamfunc2={streamhandlechange2}
              filtercityparams={allParams}
              streamfilterclear={streamclear}
              degreefilterclear={degreeclear}
              degreelistdata={filtercountdatas}
              NearValue={nearByState}
              setNearByState={setNearByState}
              splicedatas={indexonecourse}
              apifilteroptions={filteroptions}
              setRatingselectedNum={setRatingselectedNum}
              ratingselectedNum={ratingselectedNum}
              popularselectedid={popularselectedid}
              setPopularselectedid={setPopularselectedid}
              sortId={sortId}
              setSortId={setSortId}
              setSortRatingHigh={setSortRatingHigh}
              sortRatingHigh={sortRatingHigh}
              setSortRatingLow={setSortRatingLow}
              sortRatingLow={sortRatingLow}
              setSortPopular={setSortPopular}
              sortPopular={sortPopular}
              setSortFeeHigh={setSortFeeHigh}
              sortFeeHigh={sortFeeHigh}
              setSortFeeLow={setSortFeeLow}
              sortFeeLow={sortFeeLow}
              districtBread={districtBread}
              searchDistrict={searchDistrict}
            />
          {
            streamsid.length != 0 || degreeid.length != 0 || alldistrictinputsid.length != 0 ||
             allcityinputsid.length != 0 || courseid.length != 0 || collegetypeid.length != 0 ? 
            <GridContainer
              item
              lg={12}
              display={{ md: "flex", xs: "none" }}
              width="100%"
              justifyContent={"left"}
              alignItems="center"
              sx={{ bgcolor: themeMode === true ? "grey.800" : "grey.200" }}
            >
               <Typography sx={{ fontFamily:'Alata',mb:2,ml:3 }} >
                  {totalcards} Colleges Available
               </Typography>
              {/* Chips Component for desktop   */}
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
                TabIndicatorProps={{
                  style: { display: "none" },
                }}
                sx={{ marginTop: "-4px" }}
              >
                {streamdatas.map((el) => {
                  if (streamsid == el.id) {
                    return (
                      <Box p={1}>
                        <Chip
                          size="small"
                          label={el.name}
                          color="primary"
                          onDelete={streamhandledelete(el.id)}
                          sx={{
                            width: "auto",
                            fontSize: "12.5px",
                            p: 1,
                            bgcolor:
                              themeMode === true ? "grey.600" : "grey.300",
                            color: themeMode === true ? "grey.400" : "grey.600",
                          }}
                        />
                      </Box>
                    );
                  }
                })}

                {districtdatas.map((el) => {
                  if (alldistrictinputsid.includes(el.id)) {
                    return (
                      <Box p={1}>
                        <Chip
                          size="small"
                          label={el.english_name}
                          color="primary"
                          onDelete={handleDelete(el.id)}
                          sx={{
                            width: "auto",
                            fontSize: "12.5px",
                            p: 1,
                            bgcolor:
                              themeMode === true ? "grey.600" : "grey.300",
                            color: themeMode === true ? "grey.400" : "grey.600",
                          }}
                        />
                      </Box>
                    );
                  }
                })}

                {citydatas.map((el) => {
                  if (allcityinputsid.includes(el.id)) {
                    return (
                      <Box p={1}>
                        <Chip
                          size="small"
                          label={el.english_name}
                          color="primary"
                          onDelete={handleDelete2(el.id)}
                          sx={{
                            width: "auto",
                            fontSize: "12.5px",
                            p: 1,
                            bgcolor:
                              themeMode === true ? "grey.600" : "grey.300",
                            color: themeMode === true ? "grey.400" : "grey.600",
                          }}
                        />
                      </Box>
                    );
                  }
                })}

                {streamsid.length == 0
                  ? degreedatas.map((el) => {
                      if (degreeid == el.id) {
                        return (
                          <Box p={1}>
                            <Chip
                              size="small"
                              label={el.name}
                              color="primary"
                              onDelete={handleDelete3(el.id)}
                              sx={{
                                width: "auto",
                                fontSize: "12.5px",
                                p: 1,
                                bgcolor:
                                  themeMode === true ? "grey.600" : "grey.300",
                                color:
                                  themeMode === true ? "grey.400" : "grey.600",
                              }}
                            />
                          </Box>
                        );
                      }
                    })
                  : null}

                {streamsid.length > 0
                  ? degreedatas.map((el) => {
                      if (degreeid == el.id) {
                        return (
                          <Box p={1}>
                            <Chip
                              size="small"
                              label={el.name}
                              color="primary"
                              onDelete={handleDelete3(el.id)}
                              sx={{
                                width: "auto",
                                fontSize: "12.5px",
                                p: 1,
                                bgcolor:
                                  themeMode === true ? "grey.600" : "grey.300",
                                color:
                                  themeMode === true ? "grey.400" : "grey.600",
                              }}
                            />
                          </Box>
                        );
                      }
                    })
                  : null}

                {coursedatas.map((el) => {
                  if (courseid.includes(el.id)) {
                    return (
                      <Box p={1}>
                        <Chip
                          size="small"
                          label={el.course_name}
                          color="primary"
                          onDelete={handleDelete4(el.id)}
                          sx={{
                            width: "auto",
                            fontSize: "12.5px",
                            p: 1,
                            bgcolor:
                              themeMode === true ? "grey.600" : "grey.300",
                            color: themeMode === true ? "grey.400" : "grey.600",
                          }}
                        />
                      </Box>
                    );
                  }
                })}

                {collegetypedatas.map((el) => {
                  // console.log(collegetypeid);
                  if (collegetypeid.includes(el.college_type_id)) {
                    return (
                      <Box p={1}>
                        <Chip
                          size="small"
                          label={el.college_types}
                          color="primary"
                          onDelete={handleDelete5(el.college_type_id)}
                          sx={{
                            width: "auto",
                            fontSize: "12.5px",
                            p: 1,
                            bgcolor:
                              themeMode === true ? "grey.600" : "grey.300",
                            color: themeMode === true ? "grey.400" : "grey.600",
                          }}
                        />
                      </Box>
                    );
                  }
                })}
                <Button
                  size="small"
                  onClick={clearfilters}
                >Clear All</Button>
              </Tabs>
            </GridContainer>
            :  <Typography sx={{ fontFamily:'Alata',mb:2,ml:3 }} >
            {totalcards} Colleges Available
              </Typography>
            }
          </GridContainer>

          {/* --------------------------Desktop Card Listing & Filter Start Here---------------------------------- */}

          <GridContainer
            container
            maxWidth={{ lg: "lg", xl: "xl", md: "md", xxl: "xxl" }}
            display={{ xs: "none", md: "inline-flex" }}
            // columnSpacing={{ xl: 2 , lg: 2, md: 3, xs: 2 }}
            // rowSpacing={{ xl: 3, lg: 2, md: 3, xs: 2 }}
            mt={1}
            sx={{ bgcolor: themeMode === true ? "grey.800" : "grey.200" }}
            justifyContent={"center"}
          >
            {posts1.length === 0 ? 
            <>
             <GridContainer sx={{ mx: "1em 0", my: 1 }}>
                    <GridItem sx={{ margin: "0 auto" }}>
                      {/* <Paper sx={{ width: "100%", height: "100%" }}> */}
                        {/* <Alert severity="error">
                          <AlertTitle>
                            {" "}
                            Sorry for the inconvinence!, The selected data not
                            found..
                          </AlertTitle>
                        </Alert> */}
                        <Image src={DNF} width={400} />
                      {/* </Paper> */}
                    </GridItem>
                    <Divider />
                  </GridContainer>
                  <Box sx={{ display:'flex' , mb:3 , justifyContent:'center', alignItems:'center' , width:'100vw' }} >
                  <Divider orientation="horizontal" sx={{ bgcolor: themeMode === true? 'common.white' : 'common.black' , height:"1px" , width:"35%" }} />
                  <Typography sx={{  alignItems:'center', justifyContent:'center', textAlign:'center' , width:'300px' ,  fontFamily:"'Alata', sans-serif" , cursor:'pointer'}} >
                    {`Hope You Like This`} <BiDownArrow fontSize={'small'} color="primary" style={{ marginTop:1 }} />
                  </Typography>
                  <Divider orientation="horizontal" sx={{ bgcolor: themeMode === true? 'common.white' : 'common.black' , height:"1px" , width:"35%" }} />
                  </Box>
                  {/* <Button
                    sx={{
                      bgcolor: themeMode === true ? "grey.600" : "primary.main",
                      width: 280,
                      height: 330,
                      color: "White",
                      fontSize: "20px",
                      my: 1,
                      mx: 1,
                    }}
                  >
                    Related Colleges
                  </Button> */}
            </> : null}
            <GridContainer
              container
              // item
              // xl={12}
              // lg={12}
              // md={12}
              alignItems="normal"
              height="100%"
              // columnSpacing={{ xl: 1, lg: 1, md: 2, xs: 2 }}
              // rowSpacing={{ xl: 3, lg: 2, md: 3, xs: 2 }}
              sx={{
                margin: "0px",
                bgcolor: themeMode === true ? "grey.800" : "grey.200",
              }}
            >
              {posts1.length != 0 ? (
                posts1
                  .map((element) => {
                    const degreename = element.degree.map((e) => {
                      return e.name;
                    });

                    const milesToKm = element.distance * 1.609344;
                    const distance = milesToKm.toString().slice(0, 5);
                    if (nearByState >= distance) {
                      if (
                        element.rating / 5 >= ratingselectedNum &&
                        ratingselectedNum != 2 &&
                        ratingselectedNum != 0
                      ) {
                        return (
                          <>
                            <GridItem
                              component={MotionViewport}
                              item
                              xl={3}
                              lg={3}
                              md={4}
                            >
                              <Box component={m.div} variants={varFade().in}>
                                <m.div
                                  animate={{ y: [0, 0, 0] }}
                                  transition={{
                                    duration: 0,
                                    repeat: Infinity,
                                  }}
                                >
                                  <Card2
                                    CollegeLogo={element.logo}
                                    CollegeImage={element.featured_image}
                                    CollegeName={element.institute_name}
                                    CollegeDistrict={element.district_name}
                                    CollegeState={element.state_name}
                                    // Courses={element.course.map((e) => {  if (e.short_name != "") {return (`${e.short_name} | `); }} )}
                                    AdmissionFee={element.fees}
                                    Rating={element.rating}
                                    Kms={element.dmr}
                                    sx={{ width: 280 }}
                                    href={`/${name}-college/${
                                      element.id
                                    }-${element.institute_name.replace(
                                      /[ ]+/g,
                                      "-"
                                    )}-${element.district_name}`}
                                  />
                                </m.div>
                              </Box>
                            </GridItem>
                          </>
                        );
                      } else if (ratingselectedNum == 2) {
                        if (
                          element.rating / 5 <= ratingselectedNum &&
                          ratingselectedNum != 0
                        ) {
                          return (
                            <>
                              <GridItem
                                component={MotionViewport}
                                item
                                xl={2}
                                xxl={2}
                                lg={3}
                                md={4}
                              >
                                <Box component={m.div} variants={varFade().in}>
                                  <m.div
                                    animate={{ y: [0, 0, 0] }}
                                    transition={{
                                      duration: 0,
                                      repeat: Infinity,
                                    }}
                                  >
                                    <Card2
                                      CollegeLogo={element.logo}
                                      CollegeImage={element.featured_image}
                                      CollegeName={element.institute_name}
                                      CollegeDistrict={element.district_name}
                                      CollegeState={element.state_name}
                                      // Courses={element.course.map((e) => {  if (e.short_name != "") {return (`${e.short_name} | `); }} )}
                                      AdmissionFee={element.fees}
                                      Rating={element.rating}
                                      Kms={element.dmr}
                                      sx={{ width: 280 }}
                                      href={`/${name}-college/${
                                        element.id
                                      }-${element.institute_name.replace(
                                        /[ ]+/g,
                                        "-"
                                      )}-${element.district_name}`}
                                    />
                                  </m.div>
                                </Box>
                              </GridItem>
                            </>
                          );
                        }
                      } else if (ratingselectedNum === 0) {
                        return (
                          <>
                            <GridItem
                              component={MotionViewport}
                              item
                              xl={2}
                              xxl={2}
                              lg={3}
                              md={4}
                            >
                              <Box component={m.div} variants={varFade().in}>
                                <m.div
                                  animate={{ y: [0, 0, 0] }}
                                  transition={{
                                    duration: 0,
                                    repeat: Infinity,
                                  }}
                                >
                                  <Card2
                                    CollegeLogo={element.logo}
                                    CollegeImage={element.featured_image}
                                    CollegeName={element.institute_name}
                                    CollegeDistrict={element.district_name}
                                    CollegeState={element.state_name}
                                    // Courses={element.course.map((e) => {  if (e.short_name != "") {return (`${e.short_name} | `); }} )}
                                    AdmissionFee={element.fees}
                                    Rating={element.rating}
                                    Kms={element.dmr}
                                    sx={{ width: 280 }}
                                    href={`/${name}-college/${
                                      element.id
                                    }-${element.institute_name.replace(
                                      /[ ]+/g,
                                      "-"
                                    )}-${element.district_name}`}
                                  />
                                </m.div>
                              </Box>
                            </GridItem>
                          </>
                        );
                      }
                    }
                  })
              ) 
              : posts1.length == 0 ? (
                <>
                  {relposts1.map((element) => {
                    const degreename = element.degree.map((e) => {
                      return e.name;
                    });

                    const milesToKm = element.distance * 1.609344;
                    const distance = milesToKm.toString().slice(0, 5);
                    if (nearByState >= distance) {
                      if (
                        element.rating / 5 >= ratingselectedNum &&
                        ratingselectedNum != 2 &&
                        ratingselectedNum != 0
                      ) {
                        return (
                          <>
                            <GridItem
                              component={MotionViewport}
                              item
                              xl={3}
                              lg={3}
                              md={4}
                            >
                              <Box component={m.div} variants={varFade().in}>
                                <m.div
                                  animate={{ y: [0, 0, 0] }}
                                  transition={{
                                    duration: 0,
                                    repeat: Infinity,
                                  }}
                                >
                                  <Card2
                                    CollegeLogo={element.logo}
                                    CollegeImage={element.featured_image}
                                    CollegeName={element.institute_name}
                                    CollegeDistrict={element.district_name}
                                    CollegeState={element.state_name}
                                    // Courses={element.course.map((e) => {  if (e.short_name != "") {return (`${e.short_name} | `); }} )}
                                    AdmissionFee={element.fees}
                                    Rating={element.rating}
                                    Kms={element.dmr}
                                    sx={{ width: 280 }}
                                    href={`/${name}-college/${
                                      element.id
                                    }-${element.institute_name.replace(
                                      /[ ]+/g,
                                      "-"
                                    )}-${element.district_name}`}
                                  />
                                </m.div>
                              </Box>
                            </GridItem>
                          </>
                        );
                      } else if (ratingselectedNum == 2) {
                        if (
                          element.rating / 5 <= ratingselectedNum &&
                          ratingselectedNum != 0
                        ) {
                          return (
                            <>
                              <GridItem
                                component={MotionViewport}
                                item
                                xl={2}
                                xxl={2}
                                lg={3}
                                md={4}
                              >
                                <Box component={m.div} variants={varFade().in}>
                                  <m.div
                                    animate={{ y: [0, 0, 0] }}
                                    transition={{
                                      duration: 0,
                                      repeat: Infinity,
                                    }}
                                  >
                                    <Card2
                                      CollegeLogo={element.logo}
                                      CollegeImage={element.featured_image}
                                      CollegeName={element.institute_name}
                                      CollegeDistrict={element.district_name}
                                      CollegeState={element.state_name}
                                      // Courses={element.course.map((e) => {  if (e.short_name != "") {return (`${e.short_name} | `); }} )}
                                      AdmissionFee={element.fees}
                                      Rating={element.rating}
                                      Kms={element.dmr}
                                      sx={{ width: 280 }}
                                      href={`/${name}-college/${
                                        element.id
                                      }-${element.institute_name.replace(
                                        /[ ]+/g,
                                        "-"
                                      )}-${element.district_name}`}
                                    />
                                  </m.div>
                                </Box>
                              </GridItem>
                            </>
                          );
                        }
                      } else if (ratingselectedNum === 0) {
                        return (
                          <>
                            <GridItem
                              component={MotionViewport}
                              item
                              xl={2}
                              xxl={2}
                              lg={3}
                              md={4}
                            >
                              <Box component={m.div} variants={varFade().in}>
                                <m.div
                                  animate={{ y: [0, 0, 0] }}
                                  transition={{
                                    duration: 0,
                                    repeat: Infinity,
                                  }}
                                >
                                  <Card2
                                    CollegeLogo={element.logo}
                                    CollegeImage={element.featured_image}
                                    CollegeName={element.institute_name}
                                    CollegeDistrict={element.district_name}
                                    CollegeState={element.state_name}
                                    // Courses={element.course.map((e) => {  if (e.short_name != "") {return (`${e.short_name} | `); }} )}
                                    AdmissionFee={element.fees}
                                    Rating={element.rating}
                                    Kms={element.dmr}
                                    sx={{ width: 280 }}
                                    href={`/${name}-college/${
                                      element.id
                                    }-${element.institute_name.replace(
                                      /[ ]+/g,
                                      "-"
                                    )}-${element.district_name}`}
                                  />
                                </m.div>
                              </Box>
                            </GridItem>
                          </>
                        );
                      }
                    }
                  })}
                </>
              ) : null}
              {/* {posts1.length === 0 ? (

              ) : null} */}
            </GridContainer>
            {pageNum == posts1.length / 15 ? (
              <>
                <Box>
                  <CircularProgress />
                </Box>
              </>
            ) : null}
          </GridContainer>
        </Stack>
      )}
    </>
  );
};
