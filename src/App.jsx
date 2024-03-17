import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";

import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";

import Navbar from "./components/navbar/Navbar.jsx";
import LeftBar from "./components/leftBar/LeftBar.jsx";
import RightBar from "./components/rightBar/RightBar.jsx";

import "./mainLayout.scss";

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {
  const authenticate = true;

  // Check to see if the user is logged in, and if not, navigate to login page
  // eslint-disable-next-line react/prop-types
  const ProtectedRoute = ({ children }) => {
    if (!authenticate) return <Navigate to="/login" />;
    return children;
  };

  //const user = fetch.

  const dummyUser = {
    id: 1,
    username: "Andrey",
    email: "andrey@gmail.com",
    trustScore: 12,
    image:
      "https://images.pexels.com/photos/16771330/pexels-photo-16771330/free-photo-of-portrait-of-a-brunette-woman-in-a-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Hi im Andrew this is a nice bio.",
    followersCount: 0,
    followingCount: 1,
  };

  const Layout = () => {
    return (
      <div className="theme-dark">
        <Navbar user={dummyUser} />
        <div className="mainLayout">
          <LeftBar user={dummyUser} />
          <Outlet />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      // Home page, if there is a valid account
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home user={dummyUser} />,
        },
        {
          path: "/profile/:id",
          element: <Profile user={dummyUser} />,
        },
      ],
    },

    {
      // Login page nav
      path: "/login",
      element: <Login />,
    },

    {
      // Register page nav
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
