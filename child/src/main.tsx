import ReactDOM from 'react-dom/client'
// import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
// window.addEventListener('unmount', function () {
//   // 执行卸载相关操作
//   console.log('child unmount')
// })
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

ReactDOM.createRoot(document.getElementById('child') as HTMLElement).render( <RouterProvider router={router} />)
