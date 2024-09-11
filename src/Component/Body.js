import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

const Body = () => {
  return (
    <div className="flex gap-16 space-y-3 w-full h-full">
          <Sidebar />
          {/* <MainContainer /> */}
          <Outlet/>
    </div>
  )
}

export default Body