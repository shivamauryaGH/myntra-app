import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import Bag from './routes/bag.jsx';
import Home from './routes/Home.jsx';
import {Provider} from "react-redux";
import appstore from './store/index.js';
import "bootstrap/dist/css/bootstrap.min.css";

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/bag",
        element:<Bag/>
      }
    ]
  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={appstore}>
   <RouterProvider router={router}></RouterProvider>
   </Provider>
  </React.StrictMode>,
)
