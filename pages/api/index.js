export default async function getServerSideProps(context , props)

{
  try{

    let searchdata = await fetch(`https://w.kalvimalar.com/search?searchValues=madurai`);
    let responseSearch = await searchdata.json();

  return {
    props : {
     
      searchdata : responseSearch.data,
    }
  }
  }
  catch{
    console.log("something error");
  }
}
