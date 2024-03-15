import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";

import Home from './pages/home/Home.jsx'
import Profile from './pages/profile/Profile.jsx'

import Navbar from './components/navbar/Navbar.jsx'
import LeftBar from './components/leftBar/LeftBar.jsx'
import RightBar from './components/rightBar/RightBar.jsx'

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


function App() {

  const Layout = ()=> {
    return <div>
      <Navbar/>
      <div style={{display:"flex"}}>
        <LeftBar/>
        <Outlet/>
        <RightBar/>
      </div>
    </div>
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/ >,
      children:[
        {
          path:'/',
          element: <Home/>
        },
        {
           path:'/profile/:id',
           element: <Profile/> 
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
      <RouterProvider router={router} />
    
  )
}

export default App
