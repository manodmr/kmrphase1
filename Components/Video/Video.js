import { Box } from '@/OverViews/Box';
import React from 'react'
import YouTube from "react-youtube";
  
export default class Video 
extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 0,
      },
    };
  
    return (
      <>
      
      <div className='videowrapper'>
        
        <YouTube videoId="KjlXo6ECljw" 
            opts={opts} onReady={this._onReady} />
      </div>
      <Box sx={{color:'#666'}}>
        PBCE Learning Environment
        </Box>
     
      </>
    );
  }
  
  _onReady(event) {
    event.target.pauseVideo();
  }
}