import Main from "@/Components/Main/Main";
import Webdetail from "./id";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { Stack } from "@/OverViews/Stack";
import MenuPopupState from "@/Components/Navigator/HoverMenu";


const CollegeDetail = ({detailData,placementdetails,facultydetail}) => {
  const collegeId = useRouter().query;
  console.log(facultydetail);
  return (
    <div>
      <Head>
        <title>College Details</title>
        <meta name="description" content="Educational News" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pen.png" />
      </Head>

       
      {/* --------------------------------------- */}
      <Stack display={{ xs: "none", md: "flex" }}>
        <Webdetail 
        data={detailData}
        placementData={placementdetails}
        facultyData={facultydetail}
         />
      </Stack>
      <Stack display={{ xs: "flex", md: "none" }}>
        <Main data={detailData}  facultyData={facultydetail} placementData={placementdetails}  />
      </Stack>
    </div>
  );
};

export default CollegeDetail;

export async function getServerSideProps(context) {
  const collegeId = context.query.college
  try{

    let getData = await fetch (`https://w.kalvimalar.com/collegedetails?collegeId=${collegeId}`);
    let placementDetails = await fetch(`https://w.kalvimalar.com/placement?collegeId=${collegeId}`);
    let facultyDetail = await fetch(`https://w.kalvimalar.com/faculty?collegeId=${collegeId}`);
    let responseplacementDetails = await placementDetails.json();
    let responsefacultyDetail = await facultyDetail.json();
    let res = await getData.json();
    return {
      props : {
        detailData : res.data,
        placementdetails: responseplacementDetails.data,
        facultydetail: responsefacultyDetail.data,

      }
    }
    }
    catch{
      console.log("something error");
    }
}