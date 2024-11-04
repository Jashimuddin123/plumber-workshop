import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Plumber from './Components/Plumber.jsx';
import RenovationWorkr from './Components/RenovationWorkr.jsx';
import Sewerage from './Components/Sewerage.jsx';
import WorksArea from './Components/WorksArea.jsx';
import Contact from './Components/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/plumber",
        element:<Plumber></Plumber>
      },
      {
        path:"/renovationWorker",
        element:<RenovationWorkr></RenovationWorkr>
      },
      {
        path:"/sewerage",
        element:<Sewerage></Sewerage>
      },
      {
        path:"/worksArea",
        element:<WorksArea></WorksArea>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>,
)
