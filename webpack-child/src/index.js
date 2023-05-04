import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('webpack-child')).render( <RouterProvider router={router} />)

