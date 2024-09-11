import React, { useEffect, useState } from 'react'
import {YOUTUBE_POPULAR_VIDEOS} from '../Utils/Constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
const VideoContainer = () => {
  const [video,setvideos]=useState([])
  useEffect (()=>{
      fetchVideo();
  },[])
    
 const fetchVideo = async ()=>{
  try {
    // const res = await axios(youtube_video_url);
    // console.log(res);
    const data =await fetch(YOUTUBE_POPULAR_VIDEOS);
    const json=await data.json();
    console.log(json,'s')
    setvideos(json.items)
    

  } catch (error) {
    console.log(error);
    
  }
 }

  return (
    <>
    <div className='flex flex-wrap'>
    {
      video.map(video =><Link to={`/watch?v=+${video.id}`}><VideoCard info={video} key={video.id}/></Link>)
    }
    </div>
     
    </>
    // key principal passes only only data 
   
    // <div></div>
  )
}

export default VideoContainer