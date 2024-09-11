import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Sidebar = () => {
    const isMenuOpen =useSelector((store)=>store.app.isMenuOpen)
  
  return !isMenuOpen ? "": (
      <div className="p-5 shadow-lg w-[250px] ">
        <ul>
            <Link to={"/"} className="cursor-pointer"><li >Home</li></Link>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
        </ul>
          <h1 className="font-bold ">Subscriptions</h1>
          <ul>
              <li>Music</li>
              <li>Sports</li>
              <li>Gaming</li>
              <li>Movies</li>
          </ul>
          <h1 className="font-bold pt-5 ">Watch here</h1>
          <ul>
              <li>Music</li>
              <li>Sports</li>
              <li>Gaming</li>
              <li>Movies</li>
          </ul>

      </div>
  )
}

export default Sidebar