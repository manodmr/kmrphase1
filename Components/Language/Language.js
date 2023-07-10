import Link from "next/link";
import Image from "next/image";
import language from "/public/icons/language.png";
import Tamil from "/public/icons/tamil-letter.png";
import Box from "@mui/material/Box";
import LanguageIcon from "@mui/icons-material/Language";
import { Avatar, Button, IconButton } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

function Language() {
  const router = useRouter();
  console.log("LANGUA" + router.asPath)
  return (
    <Box ml={1.3} >
      {router.asPath == "/tamil" ?  
        <Button onClick={() => { router.back(); }} >
          
          <Typography
            sx={{
              borderRadius: "50px",
              padding: "2px 5px 2px",
              fontWeight: "bold",
              width: 32,
              height: 32,
              display: { xs: "flex", md: "none", lg: "none" },
              color: "#fff",
              bgcolor: "primary.main",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}

          > 
          
            EN
          </Typography>
       
        </Button>
      :
      <Link href="tamil"  >
          
          <Typography
            sx={{
              borderRadius: "50px",
              padding: "2px 9px",
              fontWeight: "bold",
              width: 32,
              height: 32,
              // display: { xs: "flex", md: "none", lg: "none" },
              color: "#fff",
              bgcolor: "primary.main",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          > 
          
          த
          </Typography>
        </Link>
      }
            

      {/* <IconButton >
  
 <TranslateIcon sx={{ borderRadius:50, padding:'6px', display:  { xs: 'flex', md: 'none', lg: 'none' },  width: 32,
height: 32, color:'#fff', bgcolor: '#55cdb5',
     '&:hover': {
         bgcolor: '#0db995'
     } }} >
       </TranslateIcon>
</IconButton> */}

      {/* <IconButton>
        <Typography
          sx={{
            borderRadius: 50,
            padding: "2px 9px",
            fontWeight: "bold",
            display: { xs: "flex", md: "none", lg: "none" },
            width: 32,
            height: 32,
            color: "#fff",
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          த
        </Typography>
      </IconButton> */}
    </Box>
  );
}

export default Language;
