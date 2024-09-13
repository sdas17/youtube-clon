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
 const router = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<VideoContainer/>,
    },
    {
      path:"/watch",
      element:<Watchpage/>
    },
    {
      path:'results',
      element:<SearchResultContainer/>
    },
    {
      path: "Dumy",
      element:       <><Dumy /><Dum2></Dum2></>

    }
  ]
 }])
function App() {
  return (
    <>

      <Provider store={Store}>
        <Header />
        {/* <Body /> */}
        <RouterProvider router={router}></RouterProvider>
      </Provider>
 
    </>
   
  );
}

export default App;
