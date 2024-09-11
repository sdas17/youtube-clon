import { useDispatch, useSelector } from "react-redux"
import {toggleMenu} from "../Utils/appSlice";
import {chacheResults} from '../Utils/SearchSlice';
import { useEffect, useState } from "react";
import {youtube_Search_Api} from '../Utils/Constant';
const Header = () => {
    const [searchValue,setSearchValue]=useState('')
    const [suggestion,setSuggestion]=useState([])
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchChache =useSelector((store)=>store.search)

    const dispatch=useDispatch();
    const sidemenuBar =()=>{
        dispatch(toggleMenu())
    }
    
   useEffect(()=>{
    //make api call after key press
    //time key after >200 ms then only api call is happen
    //or else decline call
    if (searchValue) {
        setShowSuggestions(true)
    } else {
        setShowSuggestions(false)

    }

    const timer = setTimeout(()=>{
        if (searchChache[searchValue]) {
            setSuggestion(searchChache[searchValue])
         } else {
            fethcApiCalling()
         }
    }, 200); 

    return () => {
        clearTimeout(timer); // Use clearTimeout to clear setTimeout
    };

    
   },[searchValue])

   const fethcApiCalling = async () => {
    console.log("apicalling-" + searchValue);
    
    const jsondata = await fetch(youtube_Search_Api + searchValue);
    const data = await jsondata.json();
    setSuggestion(data[1])
    dispatch(chacheResults({
        [searchValue]:data[1]
    }
    ))
    console.log(data[1],suggestion);

};
/*
* key -1
-render the component
-use effect()

-start timer => make api call after 200 ms

key-ip
-re render the component
-useeffect()
start timer =>make api call after 200 ms

when does clear out kui ki event  

key -iph
-re render the component
useeffect()

 


*/    
  


    return (
        <div className=" grid grid-flow-col p-4 m-2 shadow-lg">

            <div className="flex col-span-1 mx-2">
                <img alt="menu"
                onClick={()=>sidemenuBar()}
                    className="h-8 cursor-pointer"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8iICGSkZIkHyEPDA3z8vIyMTEhGx40MDEeHB4jICEeHR4AAAAxMTEgHh4gHB3W1tYtKyyXlpe6uroKBQhzcnJ+fX7CwsKysrJmZWX19fXk5OQYFhc5ODgoJidta2xUVFRfXV7Kysqsq6yjo6MHDa+eAAAB8UlEQVR4nO3c3VLaQBgGYJY/IQtE1Iogrfbn/q+xCaQ2TqtFm222+jwHDC8MMO8EdjnY+QYDAAAAAAAAAAAAAAAAeI/OL4Z5uDhP0m+yXYwzcbX4cJug4d045GN8Pem84GYd+67VUq6/dN7wou9Sjy1u0jQcjUZ9V2skaHhZfUuLbBrGYtN5w8F2HLNpGFOsNIPddlo3XGUgTK9T7BbVFzWbHX+zS1IQAAAAAAAAAABeZJKHVPXO76dHs9msul1OH+JfpOmr0ufuz15Wbhb78uzBvJzPWym2U/XU6Sk+lc6eTnEfv3Zf8PZjeTib2AihnYpwOJl5Qhp1kULY33d/1Pvbp9XTDcO/bhjGl503HD5uUX/Mn1PxTPr964pTUkhygra+hj9U16V10LS6+/pUtFLxTAo/00GCa1j/DhtFDw2Lxw1T/A7rtTRWS+ZhES2rdS3O22lep/qBX1LZSmetFI+pfvzk1HximrW03g9ns4edadboIy2XafbDWt9/Zhqp6gEAAAAAAAAAwAu89Zl7u+00xFXse2ZiLdHcxO24PLx7DpLMvrxcHy9f3+WOUswvHYZVRg2TTNktqnqjTCa0Jmm4WZcZNUwxC3pwd5VPwyLJlN3JdnHV9zD2RqKZ7G9/rj4AAAAAAAAAAAAAAAD8T74DVhZG6MsBqOQAAAAASUVORK5CYII=">
                </img>
                <img alt="youtubevide" className="h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQohyPmIYFB3WwInZ8w7Se_YmIP9aSVtcTVZECb1OVB4TmW0EUBJXvO6udnYNBZJJo80&usqp=CAU" ></img>
            </div>


       

            <div className="relative">

            <div className="col-span-10 px-10">
                <div>
                    <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
                    // onfocus to show this and obblue hide this

                    onFocus={()=>setShowSuggestions(true)}
                    onBlur={()=>setShowSuggestions(false)}
                    class="w-[572px] border border-gray-400 p-2 rounded-l-full focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
                    />
                    <button className="border border-gray-400 py-2 px-3 rounded-r-full">🔎</button>
                </div>

                {(showSuggestions && suggestion?.length >0)&& (

                    <div className="absolute  fixed bg-white py-2 px-5 w-[37rem] shadow rounded-lg border border-gray-400">
                        <ul>
                            {suggestion.map((s) => <li className="px-2 py-2 shadow-sm hover:bg-gray-100" key={s}>🔍 {s} </li>
                            )}
                        </ul>
                    </div>
                )}


            </div>
            </div>
           

            <div className="col-span-1">
                <img className="h-12 m-0 p-2"
                    src="data:image/png;base64,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" alt="profilelog"></img>
            </div>

        </div>
    )
}

export default Header