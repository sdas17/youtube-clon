import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../Utils/CharSlice"
import { generaterandomname, makerandommessage } from '../Utils/Herloper';
const ChatData = () => {
    const [valuemessage,setValuemessage]=useState("")
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);
    console.log(chatMessages);

    useEffect(() => {
        let i = setInterval(() => {
            console.log('Api Polling ')
            dispatch(addMessage({
                name: generaterandomname(),
                message: makerandommessage(12) + '🚀'
            }))

        }, 2000);
        return () => clearInterval(i)
    }, [])
    const handlesubmit = (e) => {
        e.preventDefault();
        dispatch(addMessage({
          name: "subham",
          message: valuemessage
        }));
        setValuemessage(""); // Clear the input field
      };
    return (
        <>

            <div className="mx-3 w-full p-2 border border-black h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
                {/* <ChatMessage name="subham" message="this is not a data 🙏"/> */}

                {chatMessages.map((chat, index) => (
                    console.log(chat),

                    <ChatMessage key={index} name={chat?.name} message={chat?.message} />
                ))}

            </div>
            <div>
                <form className="w-full p-2 ml-2 border border-black" onSubmit={handlesubmit} >
                    <input type="text" className="px-2 w-96" value={valuemessage} onChange={(e)=>(setValuemessage(e.target.value))} />
                    <button className="m-2 px-3 bg-green-100">Send</button>
                </form>

            </div>

        </>
    )
}

export default ChatData