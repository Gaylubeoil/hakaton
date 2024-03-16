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
  const currentUser = true;

  // Check to see if the user is logged in, and if not, navigate to login page
  // eslint-disable-next-line react/prop-types
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) return <Navigate to="/login" />;
    return children;
  };

  //const user = fetch.

  const dummyUser = {
    id: 11,
    username: "Luben",
    email: "Luben@gmail.com",
    trustScore: 99,
    image:
      "https://images.pexels.com/photos/19056314/pexels-photo-19056314/free-photo-of-ess-in-the-woods.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "A very nice bio",
    followersCount: 0,
    followingCount: 1,
  };

  const Layout = () => {
    return (
      <div className="theme-dark">
        <Navbar />
        <div className="mainLayout">
          <LeftBar user={dummyUser} />
          <Outlet />
          <RightBar />
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
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
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
