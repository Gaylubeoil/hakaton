import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";

import Home from './pages/home/Home.jsx'
import Profile from './pages/profile/Profile.jsx'

import Navbar from './components/navbar/Navbar.jsx'
import LeftBar from './components/leftBar/LeftBar.jsx'
import RightBar from './components/rightBar/RightBar.jsx'



import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";


function App() {

  const currentUser = true;

  // Check to see if the user is logged in, and if not, navigate to login page
  // eslint-disable-next-line react/prop-types
  const ProtectedRoute = ({children}) => {
    if(!currentUser)
      return <Navigate to='/login'/>;
    return children; 
  }

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

    { // Home page, if there is a valid account
      path: "/",
      element:(
       <ProtectedRoute> 
        <Layout/ >
      </ProtectedRoute>),
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

    { // Login page nav
      path: "/login",
      element: <Login />,
    },

    { // Register page nav
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
      <RouterProvider router={router} />
    
  )
}

export default App
