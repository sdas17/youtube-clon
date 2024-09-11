import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentSeaction from "./CommentSeaction";

const Watchpage = () => {
    let [searchParms]=useSearchParams();
    const dispatch=useDispatch();
    useEffect (()=>{
        dispatch(closeMenu())
    })
  return (
    <>
    <div className="flex flex-col">
    <div className="px-5">
      <iframe width="1200" height="600" src={"https://www.youtube.com/embed/" + searchParms.get('v')}
        title="YouTube video player" frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen></iframe>

    </div>
    <CommentSeaction/>
    </div>
 
    </>
    
  )
}

export default Watchpage