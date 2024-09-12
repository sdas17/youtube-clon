import React, { useEffect, useState } from 'react'
import {YOUTUBE_POPULAR_VIDEOS} from '../Utils/Constant';
import VideoCard ,{AdvCard}from './VideoCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const VideoContainer = () => {
  const [video,setvideos]=useState([])

  useEffect (()=>{
      fetchVideo();
  },[])
 
 const fetchVideo = async ()=>{
  try {
    // const res = await axios(youtube_video_url);
    
    const data =await fetch(YOUTUBE_POPULAR_VIDEOS);
    const json=await data.json();
    console.log(json);
    
    setvideos(json.items)


  } catch (error) {
    
  }
 }
 
 if (!video.length) return <Shimmer />

  return (
    <>
    <div className='flex flex-wrap'>
    {video[0] &&    <AdvCard  info={video[0]}  />  }

    {
      video.map(video =><Link to={`/watch?v=+${video.id}`}><VideoCard info={video} key={video.id}  /></Link>)
    }
    </div>
     
    </>
    // key principal passes only only data 
   
    // <div></div>
  )
}

export default VideoContainer