import { Provider } from 'react-redux';
import './App.css';
import Body from './Component/Body';
import Header from './Component/Header';
import Store from './Utils/Store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VideoContainer from './Component/VideoContainer';
import Watchpage from './Component/Watchpage';
import SearchResultContainer from './Component/SearchResultContainer';
import Dumy from './Component/Dumy';
import Dum2 from './Component/Dum2.js';
import Error from './Component/Error.js';
import WatchVideo from './Component/WatchVideo.js';

function App() {
  return (
    <>
  <Header />
  <Body />
      
 
    </>
   
  );
}


export const appRouter = createBrowserRouter([{
  path:"/",
  element:<App/>,
  errorElement:<Error/>,
   children: [
     {
       path: "/",
       element: <VideoContainer />,
     },
     {
       path: "/watch",
       element: <Watchpage />
     },
     {
       path: 'results',
       element: <SearchResultContainer />
     },
     {
       path: "Dumy",
       element: <><Dumy /><Dum2></Dum2></>

     },
     {
      path:'watchdata',
      element:<WatchVideo/>
    },
   ]
 }])


export default App;
