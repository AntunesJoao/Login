import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

//Páginas
import Login from "./routes/Login.jsx"
import Home from "./routes/Home.jsx"
import Cadastro from './routes/Cadastro.jsx'

const router = createBrowserRouter([
  {
    path: "",
    element: <App/>,
    children: [
      {path: "/", element: <Login/>},
      {path: "/home", element: <Home/>},
      {path: "/cadastro", element: <Cadastro/>}
    ]    
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
