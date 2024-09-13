import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Store from './Utils/Store';
import { RouterProvider } from "react-router-dom";
import { appRouter } from './App'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <Provider store={Store}>
  //   <App />
  //   <RouterProvider router={appRouter} />

  // </Provider>
  <Provider store = {Store}>
  <RouterProvider router={appRouter}/>
 </Provider>



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
