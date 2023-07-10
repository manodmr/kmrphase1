import { Box, Typography,Avatar, Divider
    // Card, CardHeader, CardContent,CardActions
} from '@mui/material';
import React, {useState,useContext } from "react";
import { useRouter } from "next/router";

import { Card } from "@/OverViews/Card/Card";
import { CardHeader } from '@/OverViews/Card/CardHeader';
import { CardMedia } from '@/OverViews/Card/CardMedia';
import { CardContent } from '@/OverViews/Card/CardContent';
import { CardActions } from '@/OverViews/Card/CardActions';

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { darkLightModeContext } from "@/Layout/Layout";
// import qagraphic from "/public/qagraphic.png";


import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { MoreHoriz } from '@mui/icons-material';
import Image from "next/image";
import Link from 'next/link';




export default function QAMobile({data}) {
    const router = useRouter();
    const [jsondata,setjsondata] = useState(data[0].questionsandanswer);
    const themeMode = useContext(darkLightModeContext);


//   console.log(questionsandanswer)

  return (
    <> 
      <Box sx={{ width:'100%', 
        bgcolor:themeMode === true ? 'grey.900' : "#f7f0e8",
        // background:"#f7f0e8"
        }}>

<Box sx={{margin:'1em', display:'flex', justifyContent:'space-between'}}>
         <Box>
        <Link
        style={{ display: "block", width: "100%" }}
          href={`/${router.query.collegelist}/${router.query.college}/qna`}
      >
        <Typography variant="h4"  sx={{
                  marginBottom: "0px",
                  paddingBottom: "0px",
                  display: "inline-block",
               
                }}>
       Questions and Answer  <ArrowForwardOutlinedIcon
                          style={{
                            marginBottom: "-6px",
                            textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                          }}
                        />
        </Typography>
        </Link>
</Box>   

                 <Image
          width={50}
          height={50}
          // src={qagraphic}
          style={{margin:'-10px 0px -20px 0px '}}
        />
       
                       
        </Box>
   
        <Box sx={{ margin:'0', }}>
        <Box sx={{display:'flex', overflowX:'scroll', width:'100%', padding:'5px 1em 1em 1em'}}>

{jsondata.map((item) => {
            return (
              <>
   
<Card sx={{ 
        overflow:'hidden',
        display:'flex',
        flexDirection:'column',
        flex: '0 0 85%',    
        marginRight:'1em', padding:'1em'  }} key={item.question_id}> 
         <Link href={`/${router.query.collegelist}/${router.query.college}/qna`}
         key={item.qa_answers_id}> 
<Typography sx={{fontWeight:'bold', overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-block', whiteSpace:'nowrap',}}> {item.question} </Typography>
   
   <Box key={item.courses_id}>
  
    <CardHeader sx={{margin:'0', padding:'5px 0 '}} 
    
     avatar={
        <Avatar aria-label={item.user_name}
     alt={item.user_name}
        src="/broken-image.jpg"/>
      } 
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={item.user_name}

    titleTypographyProps={{fontWeight:'normal'}}
      subheader={`${item.courses_duration} Years Course `} 
      subheaderTypographyProps={{margin:'0', color: themeMode === true ? "grey.400" : "grey.700",}} 
    
      
      
      />

{/* <IconButton sx={{flex:'0 0 auto'}} aria-label="settings">
        <MoreHoriz/>
          </IconButton> */}
</Box>

    <CardContent sx={{margin:'0', padding:'5px 0 0 0 ', height:'300px', overflow:'auto'}} >
      <Typography variant="body2" sx={{color: themeMode === true ? "grey.400" : "grey.700",}}>
    {item.answer}
      </Typography>
    </CardContent>
</Link>
<Divider/>
    <CardActions disableSpacing sx={{padding:'4px 0'}}>
    <Box sx={{display:'flex', justifyContent:'space-between', width:'100%'}}>
     
     <Box>
      <IconButton aria-label="add to favorites" sx={{fontSize:'16px', color: themeMode === true ? "grey.400" : "grey.600",}}>
        <ThumbUpIcon sx={{marginRight:'4px',fontSize:'18px;'}} /> 0
      </IconButton>
      <IconButton aria-label="share" sx={{fontSize:'16px', color: themeMode === true ? "grey.400" : "grey.600",}}>
        <ThumbDownIcon sx={{marginRight:'4px',fontSize:'18px;'}} /> 0
      </IconButton>

      <IconButton aria-label="share" sx={{fontSize:'16px', color: themeMode === true ? "grey.400" : "grey.600",}}>
        <ShareIcon sx={{marginRight:'4px', fontSize:'18px;'}} /> Share
      </IconButton>
      <Link href={`/${router.query.collegelist}/${router.query.college}/qna`}
         key={item.qa_answers_id}> 
      <IconButton aria-label="share" sx={{fontSize:'16px', color: themeMode === true ? "grey.400" : "grey.600",}}>
        <HelpOutlineIcon sx={{marginRight:'4px',fontSize:'18px;'}} /> Answers
      </IconButton></Link>

      </Box>
      
        
    

      </Box>
       

    </CardActions>
    </Card>
    </>
            );
          })}
     </Box>
     </Box>
    
    </Box> 
    </>
  )
}
