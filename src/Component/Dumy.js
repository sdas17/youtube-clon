import { useMemo, useState } from "react"
import { findNthPrime } from "../Utils/Herloper"

const Dumy = () => {
    const [text,settext]=useState("")
    const [isdarkthem,setdarkthem]=useState(false)
   
    const prime = useMemo(() => findNthPrime(text), [text]);

    console.log("rendering ......");
    // use memeo using to memozation let you cahce result calculation beteen rerendering 
    
  return (
    <div className={`m-5 p-3 w-2/18 h-96 border border-black ${isdarkthem ? 'bg-gray-900 text-white' : ''}`}
    >
        <button className="m-10 p-2 bg-green-200 border border-black" onClick={()=>setdarkthem(!isdarkthem)}>Click</button>
        <div>
            <input type="text" className="border border-black w-72 px-2" value={text} onChange={(e)=>settext(e.target.value)}></input>
        </div>
        <div className="font-bold"> nth number :{prime}</div>

    </div>
  )
}

export default Dumy