import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
// import { NavLink  } from 'react-router-dom';
// import homeIcon from '../assets/home.svg';

const Sidebar = () => {
    const isMenuOpen =useSelector((store)=>store.app.isMenuOpen)
  
  return !isMenuOpen ? "": (
      <div className="p-5 shadow-lg w-[250px] ">
        <ul>
            <Link to={"/"} className="cursor-pointer"><li >Home</li></Link>
            {/* <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to='/'> <img className='inline-block align-bottom mr-3' src={homeIcon} alt="Home" /> Home</NavLink ></li> */}
            <Link to={"/dumy"} className="cursor-pointer"><li >Dumy</li></Link>

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