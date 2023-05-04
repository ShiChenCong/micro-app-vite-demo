import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import microApp from '@micro-zoe/micro-app'
import microApp from '../../../micro-app/src/index'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import ViteChild from './pages/vite-child'
import WebpackChild from './pages/webpack-child'
microApp.start({
  plugins: {
    modules: {
      "scc-child": [{
        loader(code: any) {
          if (process.env.NODE_ENV === 'development' && code.includes('RefreshRuntime.injectIntoGlobalHook(window)')) {
            code = code.replace('"/@react-refresh"', '"http://localhost:5174/@react-refresh"')
          }

          return code
        }
      }]
    }
  }
})
const router = createBrowserRouter([
  {
    path: "/",
    element: <ViteChild />,
  },
  {
    path: "/main-about",
    element: <WebpackChild />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
