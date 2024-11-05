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
import Alphen from './Components/LinkableFiles/Alphen.jsx';
import Amsterdam from './Components/LinkableFiles/Amsterdam.jsx';
import Breda from './Components/LinkableFiles/Breda.jsx';
import DenBosch from './Components/LinkableFiles/DenBosch.jsx';
import TheHague from './Components/LinkableFiles/TheHague.jsx';
import Dordrecht from './Components/LinkableFiles/Dordrecht.jsx';
import Hilversum from './Components/LinkableFiles/Hilversum.jsx';
import Leide from './Components/LinkableFiles/Leide.jsx';
import Rotterdam from './Components/LinkableFiles/Rotterdam.jsx';
import Utrecht from './Components/LinkableFiles/Utrecht.jsx';
import Zaandam from './Components/LinkableFiles/Zaandam.jsx';
import Zoetemeer from './Components/LinkableFiles/Zoetemeer.jsx';

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
      },
      // linkable ruter here
      {
        path:"/alphen",
        element:<Alphen></Alphen>
      },
      {
        path:"/amsterdam",
        element:<Amsterdam></Amsterdam>
      },
      {
        path:"/breda",
        element:<Breda></Breda>
      },
      {
        path:"/denBosch",
        element:<DenBosch></DenBosch>
      },
      {
        path:"/theHague",
        element:<TheHague></TheHague>
      },
      {
        path:"/dordrecht",
        element:<Dordrecht></Dordrecht>
      },
      {
        path:"/hilversum",
        element:<Hilversum></Hilversum>
      },
      {
        path:"/leiden",
        element:<Leide></Leide>
      },
      {
        path:"/rotterdam",
        element:<Rotterdam></Rotterdam>
      },
      {
        path:"/utrecht",
        element:<Utrecht></Utrecht>
      },
      {
        path:"/zaandam",
        element:<Zaandam></Zaandam>
      },
      {
        path:"/zoetemeer",
        element:<Zoetemeer></Zoetemeer>
      }

    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>,
)
