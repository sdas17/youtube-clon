import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";

const Watchpage = () => {
    let [searchParms]=useSearchParams();
    console.log(searchParms.get('v'))
    const dispatch=useDispatch();
    useEffect (()=>{
        dispatch(closeMenu())
    })
  return (
    <div>Watchpage</div>
  )
}

export default Watchpage